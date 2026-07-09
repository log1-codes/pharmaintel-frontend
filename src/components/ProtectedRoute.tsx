import { Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const WEBSITE_A_URL = import.meta.env.VITE_WEBSITE_A_URL || 'http://localhost:8080';

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const validateJWT = () => {
      const jwt = localStorage.getItem('crosssite_jwt');

      if (!jwt) {
        setIsAuthenticated(false);
        return;
      }

      try {
        // Decode JWT payload (base64) to check expiry
        const payload = JSON.parse(atob(jwt.split('.')[1]));
        const now = Math.floor(Date.now() / 1000);

        if (payload.exp && payload.exp > now) {
          setIsAuthenticated(true);
        } else {
          // JWT expired — clear and redirect
          localStorage.removeItem('crosssite_jwt');
          localStorage.removeItem('user');
          setIsAuthenticated(false);
        }
      } catch {
        // Malformed JWT
        localStorage.removeItem('crosssite_jwt');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
      }
    };

    validateJWT();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to Website A login instead of internal /login
    window.location.href = `${WEBSITE_A_URL}/login.html`;
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;

