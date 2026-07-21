import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

const AUTH_BACKEND_URL = import.meta.env.VITE_AUTH_BACKEND_URL || 'http://localhost:3001';
const WEBSITE_A_URL = import.meta.env.VITE_WEBSITE_A_URL || 'http://localhost:5500';

const Header = () => {
  const [user, setUser] = useState<{ name: string; pricingPlan?: string } | null>(null);

  // Helper to read user from localStorage into state
  const syncUserFromStorage = useCallback(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    // Read on mount
    syncUserFromStorage();

    // Listen for auth changes
    window.addEventListener('auth:logout', syncUserFromStorage);
    window.addEventListener('auth:login', syncUserFromStorage);

    return () => {
      window.removeEventListener('auth:logout', syncUserFromStorage);
      window.removeEventListener('auth:login', syncUserFromStorage);
    };
  }, [syncUserFromStorage]);

  const handleLogout = async () => {
    // Clear cross-site session and user data
    localStorage.removeItem('user');
    localStorage.removeItem('session_active');
    localStorage.removeItem('session_expires_at');
    localStorage.removeItem('viewer_token');

    // Notify all listeners
    window.dispatchEvent(new Event('auth:logout'));

    // Redirect to Website A login with logout parameter
    window.location.href = `${WEBSITE_A_URL}/login.html?logout=true`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#132035] bg-[#0E1520]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img src="/logo.jpeg" alt="AmethIntel Logo" className="h-8 sm:h-10 object-contain" />
          <span className="font-semibold tracking-tight text-lg sm:text-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            AmethIntel
          </span>
        </Link>

        {/* Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link to="/" className="nav-link">Ceacam5 Report</Link>
          <a href={`${WEBSITE_A_URL}/copy.html`} className="nav-link">Main Site</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-right sm:text-left">
                <span className="text-slate-200 font-medium tracking-wide">
                  Welcome, <span className="text-white font-bold">{user.name}</span>
                </span>
                {user.pricingPlan && (
                  <span className="inline-block text-[10px] font-mono uppercase font-bold text-amber-500 border border-amber-500/30 bg-amber-500/5 px-2 py-0.5 rounded-sm">
                    {user.pricingPlan}
                  </span>
                )}
              </div>
              <button
                onClick={handleLogout}
                className="btn px-5 py-2 text-sm font-semibold rounded-2xl border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 text-slate-300 transition-all cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="/#waitlist"
                className="flex flex-col justify-center items-center px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[8px] sm:text-[10px] font-bold text-white rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition-transform leading-tight uppercase tracking-wider text-center"
                style={{ boxShadow: '0 4px 12px rgba(192, 38, 211, 0.3)' }}
              >
                <span>CEACAM5 Report Releasing</span>
                <span className="text-[6.5px] sm:text-[7.5px] opacity-90 font-medium tracking-normal normal-case">Sign up for early access</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

