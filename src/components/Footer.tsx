const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-100 font-['Inter'] text-xs text-slate-500 py-12">
      <div className="w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4">
          <div className="font-bold text-slate-900 text-lg">PharmaIntel</div>
          <p>© 2024 PharmaIntel Biotech Solutions. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-8">
          <a className="text-slate-500 hover:text-slate-800 transition-colors" href="#">Privacy Policy</a>
          <a className="text-slate-500 hover:text-slate-800 transition-colors" href="#">Terms of Service</a>
          <a className="text-slate-500 hover:text-slate-800 transition-colors" href="#">Contact Support</a>
          <a className="text-slate-500 hover:text-slate-800 transition-colors" href="#">API Documentation</a>
        </nav>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-500 cursor-pointer transition-colors">
            <span className="material-symbols-outlined text-sm">share</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-500 cursor-pointer transition-colors">
            <span className="material-symbols-outlined text-sm">public</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
