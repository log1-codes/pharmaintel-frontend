import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#132035] bg-[#0E1520]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="font-semibold tracking-tight text-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            PharmaIntel
          </span>
        </Link>

        {/* Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
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
          <Link to="/login" className="btn px-6 py-3 text-sm font-semibold rounded-2xl border border-white/20 hover:border-purple-400 inline-flex items-center justify-center text-white transition">
            Login
          </Link>
          <Link to="/login" className="btn px-6 py-3 text-sm font-semibold rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-lg shadow-purple-500/20 inline-flex items-center justify-center transition">
            Sign Up Free
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
