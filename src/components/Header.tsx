import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  const navLink = (to: string, label: string) => {
    const isActive = path === to;
    return (
      <Link
        to={to}
        className={`transition-colors duration-200 ${
          isActive
            ? 'text-blue-700 font-semibold border-b-2 border-blue-600'
            : 'text-slate-600 hover:text-blue-600'
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-8 h-16 bg-white/70 backdrop-blur-xl z-50 border-b border-slate-200/20 font-['Manrope'] tracking-tight">
      <div className="text-xl font-bold tracking-tighter text-blue-800">
        <Link to="/">PharmaIntel</Link>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        {navLink('/about', 'About')}
        {navLink('/how-it-works', 'How it Works')}
        {navLink('/proteins', 'Proteins')}
        {navLink('/pricing', 'Plans')}
      </nav>
      <div className="flex items-center gap-4">
        <Link to="/login">
          <button className="text-slate-600 hover:text-blue-600 transition-colors duration-200 px-4 py-2 text-sm font-medium">Login</button>
        </Link>
        <Link to="/login">
          <button className="bg-primary text-on-primary px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all">Sign Up</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
