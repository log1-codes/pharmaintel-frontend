import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const AuditTracker = () => {
  const location = useLocation();
  const lastLoggedPath = useRef<string>('');

  useEffect(() => {
    const currentPath = location.pathname + (location.hash ? location.hash : '');
    
    // Avoid double logging identical sequential routes
    if (lastLoggedPath.current === currentPath) {
      return;
    }
    lastLoggedPath.current = currentPath;

    let userEmail = 'anonymous';
    let userId: string | null = null;

    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        if (parsed.email) userEmail = parsed.email;
        if (parsed.id) userId = parsed.id;
      }
    } catch {
      // ignore JSON parse errors
    }

    const token = localStorage.getItem('viewer_token');
    const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

    fetch(`${apiBase}/api/audit/page-view`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      },
      body: JSON.stringify({
        path: currentPath,
        pageTitle: document.title || currentPath,
        userEmail,
        userId
      })
    }).catch(() => {
      // Non-blocking telemetry
    });
  }, [location.pathname, location.hash]);

  return null;
};

export default AuditTracker;
