import { useState, useEffect } from 'react';

const ADMIN_BACKEND_URL = import.meta.env.VITE_ADMIN_BACKEND_URL || 'http://localhost:3002/api';

/**
 * useChapterPDF — Fetches a chapter PDF from admin-backend using
 * the viewer auth token, then creates a blob URL for the iframe.
 * 
 * This ensures:
 * 1. PDFs are never loaded via a public URL (auth headers required)
 * 2. Only authenticated viewers can access PostgreSQL chapter content
 * 3. The blob URL is revoked on cleanup to free memory
 */
export function useChapterPDF(chapterId: string) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let objectUrl: string | null = null;

    const fetchPDF = async () => {
      setLoading(true);
      setError(null);

      const viewerToken = localStorage.getItem('viewer_token');
      if (!viewerToken) {
        setError('Authentication required. Please log in from the main site.');
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${ADMIN_BACKEND_URL}/chapters/${chapterId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${viewerToken}`,
          },
        });

        if (res.status === 401) {
          setError('Session expired. Please log in again from the main site.');
          setLoading(false);
          return;
        }

        if (res.status === 403) {
          const errData = await res.json().catch(() => ({}));
          setError(errData.message || 'Your current plan does not include access to this chapter. Please upgrade your plan.');
          setLoading(false);
          return;
        }

        if (res.status === 404) {
          setError('This chapter has not been uploaded yet.');
          setLoading(false);
          return;
        }

        if (!res.ok) {
          setError('Failed to load chapter. Please try again later.');
          setLoading(false);
          return;
        }

        const blob = await res.blob();
        objectUrl = URL.createObjectURL(blob);
        setPdfUrl(objectUrl);
      } catch (err) {
        console.error('Chapter PDF fetch error:', err);
        setError('Unable to connect to the server. Please check your connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchPDF();

    // Cleanup: revoke blob URL when component unmounts
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [chapterId]);

  return { pdfUrl, loading, error };
}
