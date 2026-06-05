const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 border-t border-white/10 font-['Inter'] text-sm text-slate-400 py-12">
      <div className="w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4">
          <div className="font-bold text-white text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AmethIntel</div>
          <p>© 2026 AmethIntel. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-8">
          <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-white transition-colors" href="#">Contact Support</a>
        </nav>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer transition-all">
            <i className="fab fa-linkedin text-lg"></i>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer transition-all">
            <i className="fab fa-twitter text-lg"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
