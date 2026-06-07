import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const POLL_INTERVAL_MS = 15_000; // Check every 15 seconds

/**
 * Runs in the background for any logged-in user.
 * Polls /api/auth/me every 15s. If the server returns SESSION_SUPERSEDED
 * (because someone else logged in), this hook:
 *   1. Clears localStorage
 *   2. Fires a custom 'auth:logout' DOM event so the Header updates instantly
 *   3. Saves an error message for the login page
 *   4. Navigates to /login
 */
export const useSessionWatcher = () => {
  const navigate = useNavigate();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const token = localStorage.getItem('token');

      // Not logged in — nothing to watch
      if (!token) return;

      try {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
        const response = await fetch(`${apiBaseUrl}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          const data = await response.json().catch(() => ({}));

          if (data.code === 'SESSION_SUPERSEDED') {
            // Clear auth state
            localStorage.removeItem('token');
            localStorage.removeItem('user');

            // Tell the Header (and any other listener) to update immediately
            window.dispatchEvent(new Event('auth:logout'));

            // Store the message for the login page to display
            sessionStorage.setItem(
              'authError',
              'You were logged out because your account was accessed from another device.'
            );

            navigate('/login');
          }
        }
      } catch {
        // Network error — ignore silently, will retry on next interval
      }
    };

    // Run immediately, then on interval
    checkSession();
    intervalRef.current = setInterval(checkSession, POLL_INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [navigate]);
};
