const ProteinDetailsDashboard = () => {
  return (
    <div className="flex flex-1 pt-24 h-screen overflow-hidden bg-slate-950 font-['Inter']">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-12 py-10 mr-72 scroll-smooth">
        {/* Executive Summary Section */}
        <section className="mb-20" id="executive-summary">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-purple-400 font-bold tracking-[0.05em] uppercase text-xs mb-2 block">Target Profile</span>
              <h1 className="text-4xl font-semibold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>HER2 Protein (ERBB2)</h1>
            </div>
            <div className="flex gap-3">
              <span className="px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold uppercase tracking-widest">Active Research</span>
              <span className="px-4 py-1.5 rounded-full bg-slate-800 text-slate-300 border border-white/10 text-xs font-semibold uppercase tracking-widest">Oncology</span>
            </div>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: '1.5fr 1fr' }}>
            <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
              <h3 className="text-xl font-semibold mb-5 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Executive Summary</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-justify">The HER2 protein is a member of the epidermal growth factor receptor family. Overexpression of this protein is known to play an essential role in the pathogenesis and progression of certain aggressive types of breast cancer.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-white/5 border border-white/5 rounded-2xl">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-2">Global Market Cap</span>
                  <span className="text-2xl font-semibold text-purple-300">$14.2B</span>
                </div>
                <div className="p-5 bg-white/5 border border-white/5 rounded-2xl">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-2">Active Clinical Trials</span>
                  <span className="text-2xl font-semibold text-pink-300">248</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-900 border border-white/10 p-6 rounded-3xl h-full flex flex-col">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">Key Structural View</h4>
                <div className="flex-1 min-h-50 bg-slate-950 rounded-2xl overflow-hidden flex items-center justify-center relative border border-white/5">
                  <img
                    className="w-full h-full object-cover opacity-80 mix-blend-screen"
                    alt="Protein 3D structure"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0BLZURI5gIXMbRSFL18DZgUmNHzkQ3MCsV8xKztQUoniCyhLCES4nvF5HIRjAzkimInBqDE5elfgOPzSPjbUhR5YIOVLBTwvLtdqXFiPeHjr-Okeixnz3Lpb3AuQNOihsKvQQ9wOv89S7n_DE8YDK3kXSTKwj6RMqZ8YXZ4mZoKgFX7YiijuYKo1xpWSlj0mH41q7BA-Wpf9pw3z5Qzjv-XlP2ABm1BYIElaNh7vUiiyzNEnkU5l-MyS_RFRBdOu5qGcQY81hoc7D"
                  />
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-slate-900/80 backdrop-blur-md border border-white/10 text-slate-300 text-[10px] rounded-full font-bold uppercase tracking-widest">3D Render</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Intelligence Section */}
        <section className="mb-20" id="clinical-intelligence">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
              <span className="material-symbols-outlined text-[20px]">biotech</span>
            </div>
            <h2 className="text-2xl font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Clinical Intelligence</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-slate-900 border border-white/10 border-l-4 border-l-purple-500 p-8 rounded-3xl">
              <h4 className="font-bold text-[10px] text-slate-500 tracking-widest uppercase mb-8">Efficacy Benchmark</h4>
              <div className="h-48 flex items-end gap-6 pb-4">
                <div className="flex-1 bg-purple-500/20 rounded-t-xl relative group h-[60%] hover:bg-purple-500/30 transition-colors cursor-pointer border border-purple-500/20 border-b-0">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest uppercase text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap">Phase I</div>
                </div>
                <div className="flex-1 bg-purple-500/40 rounded-t-xl relative group h-[45%] hover:bg-purple-500/50 transition-colors cursor-pointer border border-purple-500/30 border-b-0">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest uppercase text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap">Phase II</div>
                </div>
                <div className="flex-1 bg-purple-500/60 rounded-t-xl relative group h-[85%] hover:bg-purple-500/70 transition-colors cursor-pointer border border-purple-500/40 border-b-0">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest uppercase text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap">Phase III</div>
                </div>
                <div className="flex-1 bg-linear-to-t from-purple-500 to-pink-500 rounded-t-xl relative group h-[30%] hover:opacity-90 transition-opacity cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap">Approved</div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-tighter mt-4 px-2">
                <span>Standard Therapy</span>
                <span>Combination A</span>
                <span>Next-Gen Antibody</span>
                <span className="text-purple-400">Small Molecule</span>
              </div>
            </div>
            <div className="bg-slate-900 border border-white/10 p-7 rounded-3xl flex flex-col justify-between">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-5">Safety Profile</h4>
                <p className="text-sm text-slate-300 leading-relaxed">74% lower systemic toxicity compared to Trastuzumab benchmarks in Phase III equivalents.</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <button className="text-purple-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-purple-300 transition-colors">
                  View Full Dataset <i className="fas fa-arrow-right text-[12px]"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Biological Details (Masked) */}
        <section className="relative min-h-100 mb-20 overflow-hidden rounded-3xl border border-white/10" id="biological-details">
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px]"></div>
          <div className="relative z-0 p-10 opacity-30 select-none pointer-events-none">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined text-[20px]">science</span>
              </div>
              <h2 className="text-2xl font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Biological Details</h2>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="h-32 bg-slate-800 rounded-2xl border border-white/10"></div>
              <div className="h-32 bg-slate-800 rounded-2xl border border-white/10"></div>
              <div className="h-32 bg-slate-800 rounded-2xl border border-white/10"></div>
              <div className="h-32 bg-slate-800 rounded-2xl border border-white/10"></div>
            </div>
          </div>
          {/* Lock Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/60 backdrop-blur-md">
            <div className="bg-slate-900 border border-white/10 p-10 rounded-3xl text-center max-w-md shadow-2xl">
              <div className="w-20 h-20 bg-purple-500/10 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                <i className="fas fa-lock text-purple-400 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Premium Intel Locked</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">Access deep biological sequencing, metabolic pathways, and cross-species analysis with our Enterprise tier.</p>
              <button className="w-full py-4 bg-linear-to-r from-purple-600 to-pink-500 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
                Upgrade Plan to Unlock
                <i className="fas fa-bolt text-[14px]"></i>
              </button>
            </div>
          </div>
        </section>

        {/* Further Masked Sections */}
        <div className="space-y-6 opacity-30 grayscale blur-xs">
          <section className="h-32 bg-slate-900 border border-white/10 rounded-3xl flex items-center px-10">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined">clinical_notes</span>
              </div>
              <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Drug Trials Info</h2>
            </div>
          </section>
          <section className="h-32 bg-slate-900 border border-white/10 rounded-3xl flex items-center px-10">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined">gavel</span>
              </div>
              <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Intellectual Property</h2>
            </div>
          </section>
        </div>
      </main>

      {/* SideNavBar (Right-Aligned) */}
      <aside className="fixed right-0 top-20 bottom-0 flex flex-col py-8 h-full w-72 bg-slate-950/80 backdrop-blur-md border-l border-white/10 z-40 overflow-y-auto">
        <div className="px-8 mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-white mb-1 block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Protein Navigator</span>
          <p className="text-[10px] text-slate-500 tracking-widest uppercase">Target Analysis v4.2</p>
        </div>
        <nav className="flex-1 space-y-1.5 px-4">
          {/* Executive Summary */}
          <a className="flex items-center gap-4 px-4 py-3.5 bg-linear-to-r from-purple-600/20 to-transparent text-purple-300 rounded-2xl border border-purple-500/30 text-sm font-medium transition-all relative overflow-hidden" href="#executive-summary">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 rounded-l-full"></div>
            <span className="material-symbols-outlined text-[18px]">analytics</span>
            <span>Executive Summary</span>
          </a>
          {/* Clinical Intelligence */}
          <a className="flex items-center gap-4 px-4 py-3.5 text-slate-400 hover:bg-white/5 hover:text-white rounded-2xl text-sm font-medium transition-all group" href="#clinical-intelligence">
            <span className="material-symbols-outlined text-[18px] group-hover:text-purple-400 transition-colors">biotech</span>
            <span>Clinical Intelligence</span>
          </a>
          {/* Biological Details */}
          <a className="flex items-center gap-4 px-4 py-3.5 text-slate-400 hover:bg-white/5 hover:text-white rounded-2xl text-sm font-medium transition-all group" href="#biological-details">
            <span className="material-symbols-outlined text-[18px] group-hover:text-purple-400 transition-colors">science</span>
            <span className="flex-1">Biological Details</span>
            <i className="fas fa-lock text-[10px] opacity-50"></i>
          </a>
          {/* Drug Trials Info */}
          <a className="flex items-center gap-4 px-4 py-3.5 text-slate-500 hover:bg-white/5 hover:text-slate-300 rounded-2xl text-sm font-medium transition-all opacity-60" href="#">
            <span className="material-symbols-outlined text-[18px]">clinical_notes</span>
            <span className="flex-1">Drug Trials Info</span>
            <i className="fas fa-lock text-[10px] opacity-50"></i>
          </a>
          {/* IP */}
          <a className="flex items-center gap-4 px-4 py-3.5 text-slate-500 hover:bg-white/5 hover:text-slate-300 rounded-2xl text-sm font-medium transition-all opacity-60" href="#">
            <span className="material-symbols-outlined text-[18px]">gavel</span>
            <span className="flex-1">IP</span>
            <i className="fas fa-lock text-[10px] opacity-50"></i>
          </a>
          {/* Deals */}
          <a className="flex items-center gap-4 px-4 py-3.5 text-slate-500 hover:bg-white/5 hover:text-slate-300 rounded-2xl text-sm font-medium transition-all opacity-60" href="#">
            <span className="material-symbols-outlined text-[18px]">handshake</span>
            <span className="flex-1">Deals</span>
            <i className="fas fa-lock text-[10px] opacity-50"></i>
          </a>
          {/* Investment */}
          <a className="flex items-center gap-4 px-4 py-3.5 text-slate-500 hover:bg-white/5 hover:text-slate-300 rounded-2xl text-sm font-medium transition-all opacity-60" href="#">
            <span className="material-symbols-outlined text-[18px]">payments</span>
            <span className="flex-1">Investment</span>
            <i className="fas fa-lock text-[10px] opacity-50"></i>
          </a>
        </nav>
        <div className="mt-auto px-6 py-6">
          <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 text-white shadow-xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Free Plan</p>
            <p className="text-xs text-slate-300 font-medium leading-relaxed">Upgrade for 80% more data depth.</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ProteinDetailsDashboard;
