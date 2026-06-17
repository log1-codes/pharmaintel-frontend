import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

const Header = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const navigate = useNavigate();

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

    // Listen for auth changes dispatched by the session watcher or login flow
    // This fires when:
    //   - useSessionWatcher detects SESSION_SUPERSEDED
    //   - Manual logout
    window.addEventListener('auth:logout', syncUserFromStorage);
    window.addEventListener('auth:login', syncUserFromStorage);

    return () => {
      window.removeEventListener('auth:logout', syncUserFromStorage);
      window.removeEventListener('auth:login', syncUserFromStorage);
    };
  }, [syncUserFromStorage]);

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

    if (token) {
      try {
        await fetch(`${apiBaseUrl}/api/auth/logout`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (error) {
        console.error('Logout request failed', error);
      }
    }

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Notify all listeners (including this Header) to update
    window.dispatchEvent(new Event('auth:logout'));

    navigate('/');
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
          <Link to="/" className="nav-link">Home</Link>
          <a href="/about" className="nav-link">About Us</a>
          <a href="/#newsletter" className="nav-link">Newsletter</a>
          <a href="/#takestwo" className="nav-link">Takes Two</a>

          {/* Reports Dropdown */}
          <div className="relative dropdown">
            <button className="nav-link flex items-center gap-2 text-slate-300 hover:text-white">
              Reports
              <i className="fas fa-chevron-down text-xs"></i>
            </button>
            <div className="dropdown-menu absolute top-full left-0 mt-4 w-56 rounded-2xl border border-[#132035] bg-[#0E1520]/95 backdrop-blur-xl shadow-2xl overflow-hidden z-50">
              <Link to="/ceacam5" className="block px-5 py-4 text-sm text-slate-300 hover:bg-[#132035] hover:text-white transition">
                Ceacam5
              </Link>
              <a href="/#upcoming" className="block px-5 py-4 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition border-t border-white/5">
                Upcoming
              </a>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-6">
              <span className="text-slate-200 font-medium tracking-wide">
                Welcome, <span className="text-white font-bold">{user.name}</span>
              </span>
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
              <Link to="/login" className="btn px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold rounded-xl sm:rounded-2xl border border-white/20 hover:border-purple-400 inline-flex items-center justify-center text-white transition whitespace-nowrap">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
