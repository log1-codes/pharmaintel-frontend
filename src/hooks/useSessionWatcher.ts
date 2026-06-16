import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const POLL_INTERVAL_MS = 15_000; // Check every 15 seconds
const INACTIVITY_TIMEOUT_MS = 15 * 60 * 1000; // 15 minutes

export const useSessionWatcher = () => {
  const navigate = useNavigate();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    // Not logged in — nothing to watch
    if (!token) return;

    // Initialize lastActivity if not present
    if (!localStorage.getItem('lastActivity')) {
      localStorage.setItem('lastActivity', Date.now().toString());
    }

    let lastWrite = 0;
    const updateActivity = () => {
      const now = Date.now();
      if (now - lastWrite > 5000) { // Throttle writing to localStorage to every 5 seconds
        localStorage.setItem('lastActivity', now.toString());
        lastWrite = now;
      }
    };

    // Listen to user interaction events to track activity
    window.addEventListener('mousemove', updateActivity);
    window.addEventListener('keydown', updateActivity);
    window.addEventListener('click', updateActivity);
    window.addEventListener('scroll', updateActivity);
    window.addEventListener('touchstart', updateActivity);

    const checkSessionAndInactivity = async () => {
      const currentToken = localStorage.getItem('token');
      if (!currentToken) return;

      // 1. Check client-side inactivity first
      const lastActivity = Number(localStorage.getItem('lastActivity') || Date.now());
      if (Date.now() - lastActivity > INACTIVITY_TIMEOUT_MS) {
        // Clear auth state
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('lastActivity');

        // Tell the Header to update instantly
        window.dispatchEvent(new Event('auth:logout'));

        // Store the message for the login page to display
        sessionStorage.setItem(
          'authError',
          'You were logged out due to 15 minutes of inactivity.'
        );

        navigate('/login');
        return;
      }

      // 2. Poll server to check if session was superseded by another login
      try {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
        const response = await fetch(`${apiBaseUrl}/api/auth/me`, {
          headers: { Authorization: `Bearer ${currentToken}` },
        });

        if (!response.ok) {
          const data = await response.json().catch(() => ({}));

          if (data.code === 'SESSION_SUPERSEDED') {
            // Clear auth state
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('lastActivity');

            // Tell the Header to update instantly
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
    checkSessionAndInactivity();
    intervalRef.current = setInterval(checkSessionAndInactivity, POLL_INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      window.removeEventListener('mousemove', updateActivity);
      window.removeEventListener('keydown', updateActivity);
      window.removeEventListener('click', updateActivity);
      window.removeEventListener('scroll', updateActivity);
      window.removeEventListener('touchstart', updateActivity);
    };
  }, [navigate]);
};
