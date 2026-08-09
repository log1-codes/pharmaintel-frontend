import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AuthHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState<string | null>(null);
  const [navDropdownOpen, setNavDropdownOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (token && storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        // Exclude dummy demo_user if any residue remains
        if (parsed.id === 'demo_user' || parsed.email === 'demo@amethintel.com') {
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          localStorage.removeItem('viewer_token');
          setUserName(null);
        } else {
          setUserName(parsed.name || parsed.username || 'User');
        }
      } catch (err) {
        setUserName(null);
      }
    } else {
      setUserName(null);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('viewer_token');
    localStorage.removeItem('user');
    localStorage.removeItem('session_active');
    localStorage.removeItem('session_expires_at');
    setUserName(null);
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        {/* Left: Brand */}
        <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => navigate('/')}>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md shadow-purple-500/20">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="font-semibold tracking-tight text-2xl text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            AmethIntel
          </span>
        </div>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link to="/#home" className="nav-link hover:text-white transition-colors">Home</Link>
          <Link to="/#about" className="nav-link hover:text-white transition-colors">About Us</Link>
          <Link to="/newsletter" className="nav-link hover:text-white transition-colors">Newsletter</Link>
          <Link to="/#takestwo" className="nav-link hover:text-white transition-colors">Takes Two</Link>

          <div
            className="relative dropdown"
            onMouseEnter={() => setNavDropdownOpen(true)}
            onMouseLeave={() => setNavDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setNavDropdownOpen((prev) => !prev)}
              className="nav-link flex items-center gap-2 text-slate-300 hover:text-white transition-colors py-2"
            >
              Reports
              <span className="text-xs">▼</span>
            </button>
            {navDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-56 z-50 animate-in fade-in duration-150">
                <div className="rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                  <Link
                    to="/ceacam5"
                    onClick={() => setNavDropdownOpen(false)}
                    className="block px-5 py-4 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition"
                  >
                    CEACAM5
                  </Link>
                  <Link
                    to="/#upcoming"
                    onClick={() => setNavDropdownOpen(false)}
                    className="block px-5 py-4 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition border-t border-white/5"
                  >
                    Upcoming
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 shrink-0">
          {userName ? (
            <>
              <span className="hidden sm:inline-flex text-sm font-medium text-slate-200">
                Hello, {userName}
              </span>
              <Link
                to="/dashboard"
                className="hidden sm:inline-flex px-5 py-2.5 text-sm font-semibold rounded-2xl border border-white/20 hover:border-purple-400 text-white items-center justify-center transition"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="px-5 py-2.5 text-sm font-semibold rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 transition shadow-md shadow-purple-500/20"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/ceacam5"
                className="btn px-6 py-2.5 text-sm font-semibold rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-lg shadow-purple-500/20 inline-flex flex-col items-center justify-center leading-tight text-center"
              >
                <span className="text-[11px] font-medium opacity-90">CEACAM5 Report is Out</span>
                <span className="text-sm font-bold">Click to View</span>
              </Link>
              <Link
                to="/signup"
                className="btn px-6 py-3 text-sm font-semibold rounded-2xl border border-white/20 hover:border-purple-400 text-white inline-flex items-center justify-center transition"
              >
                Join Waitlist
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AuthHeader;
