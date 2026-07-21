import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const WEBSITE_A_URL = import.meta.env.VITE_WEBSITE_A_URL || 'http://localhost:5500';

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const validateSession = () => {
      const sessionActive = localStorage.getItem('session_active');
      const sessionExpiresAt = localStorage.getItem('session_expires_at');
      const userData = localStorage.getItem('user');

      if (sessionActive === 'true' && sessionExpiresAt && userData) {
        const now = Date.now();
        if (now < Number(sessionExpiresAt)) {
          setIsAuthenticated(true);
          return;
        }
      }

      // Expired or missing session
      localStorage.removeItem('user');
      localStorage.removeItem('session_active');
      localStorage.removeItem('session_expires_at');
      setIsAuthenticated(false);
    };

    validateSession();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to Website A login
    window.location.href = `${WEBSITE_A_URL}/login.html`;
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;
