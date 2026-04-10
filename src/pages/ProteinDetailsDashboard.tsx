const ProteinDetailsDashboard = () => {
  return (
    <div className="flex flex-1 pt-16 h-screen overflow-hidden">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-12 py-10 mr-64 scroll-smooth bg-surface">
        {/* Executive Summary Section */}
        <section className="mb-20" id="executive-summary">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-secondary font-bold tracking-[0.05em] uppercase text-xs">Target Profile</span>
              <h1 className="text-4xl font-extrabold font-headline text-on-surface tracking-tight mt-1">HER2 Protein (ERBB2)</h1>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold">Active Research</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold">Oncology</span>
            </div>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: '1.5fr 1fr' }}>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_-12px_rgba(0,88,188,0.08)]">
              <h3 className="text-lg font-bold font-headline mb-4">Executive Summary</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">The HER2 protein is a member of the epidermal growth factor receptor family. Overexpression of this protein is known to play an essential role in the pathogenesis and progression of certain aggressive types of breast cancer.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface-container-low rounded-lg">
                  <span className="text-xs text-outline font-medium block mb-1">Global Market Cap</span>
                  <span className="text-xl font-bold text-primary">$14.2B</span>
                </div>
                <div className="p-4 bg-surface-container-low rounded-lg">
                  <span className="text-xs text-outline font-medium block mb-1">Active Clinical Trials</span>
                  <span className="text-xl font-bold text-primary">248</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-surface-container-low p-6 rounded-xl">
                <h4 className="text-sm font-bold uppercase tracking-wider text-outline mb-3">Key Structural View</h4>
                <div className="aspect-video bg-surface-container-highest rounded-lg overflow-hidden flex items-center justify-center relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="Protein 3D structure"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0BLZURI5gIXMbRSFL18DZgUmNHzkQ3MCsV8xKztQUoniCyhLCES4nvF5HIRjAzkimInBqDE5elfgOPzSPjbUhR5YIOVLBTwvLtdqXFiPeHjr-Okeixnz3Lpb3AuQNOihsKvQQ9wOv89S7n_DE8YDK3kXSTKwj6RMqZ8YXZ4mZoKgFX7YiijuYKo1xpWSlj0mH41q7BA-Wpf9pw3z5Qzjv-XlP2ABm1BYIElaNh7vUiiyzNEnkU5l-MyS_RFRBdOu5qGcQY81hoc7D"
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-white/80 text-[10px] rounded font-bold uppercase">3D Render</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Intelligence Section */}
        <section className="mb-20" id="clinical-intelligence">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary">biotech</span>
            <h2 className="text-2xl font-bold font-headline">Clinical Intelligence</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-surface-container-lowest p-8 rounded-xl border-l-4 border-secondary">
              <h4 className="font-bold text-sm text-outline uppercase mb-4">Efficacy Benchmark</h4>
              <div className="h-48 flex items-end gap-4 pb-4">
                <div className="flex-1 bg-primary/10 rounded-t-lg relative group h-[60%]">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">Phase I</div>
                </div>
                <div className="flex-1 bg-primary/20 rounded-t-lg relative group h-[45%]">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">Phase II</div>
                </div>
                <div className="flex-1 bg-primary/60 rounded-t-lg relative group h-[85%]">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">Phase III</div>
                </div>
                <div className="flex-1 bg-secondary rounded-t-lg relative group h-[30%]">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">Approved</div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-outline font-bold uppercase tracking-tighter mt-2 px-2">
                <span>Standard Therapy</span>
                <span>Combination A</span>
                <span>Next-Gen Antibody</span>
                <span>Small Molecule</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase text-outline mb-4">Safety Profile</h4>
                <p className="text-sm text-on-surface-variant">74% lower systemic toxicity compared to Trastuzumab benchmarks in Phase III equivalents.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-outline-variant/20">
                <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  View Full Dataset <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Biological Details (Masked) */}
        <section className="relative min-h-[400px] mb-20 overflow-hidden rounded-2xl" id="biological-details">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-outline">science</span>
            <h2 className="text-2xl font-bold font-headline text-outline">Biological Details</h2>
          </div>
          {/* Blurred Content Simulation */}
          <div className="blur-[8px] opacity-40 select-none pointer-events-none">
            <div className="grid grid-cols-2 gap-8">
              <div className="h-32 bg-slate-200 rounded-lg"></div>
              <div className="h-32 bg-slate-200 rounded-lg"></div>
              <div className="h-32 bg-slate-200 rounded-lg"></div>
              <div className="h-32 bg-slate-200 rounded-lg"></div>
            </div>
          </div>
          {/* Lock Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/40 backdrop-blur-md rounded-2xl border border-white/50">
            <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm">
              <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">lock</span>
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">Premium Intel Locked</h3>
              <p className="text-sm text-on-surface-variant mb-6">Access deep biological sequencing, metabolic pathways, and cross-species analysis with our Enterprise tier.</p>
              <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2">
                Upgrade Plan to Unlock
                <span className="material-symbols-outlined text-sm">bolt</span>
              </button>
            </div>
          </div>
        </section>

        {/* Further Masked Sections */}
        <div className="space-y-12 opacity-30 grayscale blur-[4px]">
          <section className="h-32 bg-surface-container-low rounded-xl flex items-center px-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined">clinical_notes</span>
              <h2 className="text-xl font-bold">Drug Trials Info</h2>
            </div>
          </section>
          <section className="h-32 bg-surface-container-low rounded-xl flex items-center px-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined">gavel</span>
              <h2 className="text-xl font-bold">Intellectual Property</h2>
            </div>
          </section>
        </div>
      </main>

      {/* SideNavBar (Right-Aligned) */}
      <aside className="fixed right-0 top-16 bottom-0 flex flex-col py-6 h-full w-64 bg-slate-50 border-l border-slate-100 z-40">
        <div className="px-6 mb-8">
          <span className="text-sm font-bold uppercase tracking-widest text-slate-500 font-headline">Protein Navigator</span>
          <p className="text-[10px] text-outline font-medium">Target Analysis v4.2</p>
        </div>
        <nav className="flex-1 space-y-1">
          {/* Executive Summary */}
          <a className="flex items-center gap-3 px-6 py-3 bg-white text-blue-700 shadow-sm rounded-l-lg border-l-4 border-blue-600 font-['Inter'] text-sm font-medium transition-all translate-x-[-2px]" href="#executive-summary">
            <span className="material-symbols-outlined text-lg">analytics</span>
            <span>Executive Summary</span>
          </a>
          {/* Clinical Intelligence */}
          <a className="flex items-center gap-3 px-6 py-3 text-slate-500 hover:bg-slate-200 font-['Inter'] text-sm font-medium transition-all" href="#clinical-intelligence">
            <span className="material-symbols-outlined text-lg">biotech</span>
            <span>Clinical Intelligence</span>
          </a>
          {/* Biological Details */}
          <a className="flex items-center gap-3 px-6 py-3 text-slate-500 hover:bg-slate-200 font-['Inter'] text-sm font-medium transition-all" href="#biological-details">
            <span className="material-symbols-outlined text-lg">science</span>
            <span className="flex-1">Biological Details</span>
            <span className="material-symbols-outlined text-xs">lock</span>
          </a>
          {/* Drug Trials Info */}
          <a className="flex items-center gap-3 px-6 py-3 text-slate-500 hover:bg-slate-200 font-['Inter'] text-sm font-medium transition-all opacity-60" href="#">
            <span className="material-symbols-outlined text-lg">clinical_notes</span>
            <span className="flex-1">Drug Trials Info</span>
            <span className="material-symbols-outlined text-xs">lock</span>
          </a>
          {/* IP */}
          <a className="flex items-center gap-3 px-6 py-3 text-slate-500 hover:bg-slate-200 font-['Inter'] text-sm font-medium transition-all opacity-60" href="#">
            <span className="material-symbols-outlined text-lg">gavel</span>
            <span className="flex-1">IP</span>
            <span className="material-symbols-outlined text-xs">lock</span>
          </a>
          {/* Deals */}
          <a className="flex items-center gap-3 px-6 py-3 text-slate-500 hover:bg-slate-200 font-['Inter'] text-sm font-medium transition-all opacity-60" href="#">
            <span className="material-symbols-outlined text-lg">handshake</span>
            <span className="flex-1">Deals</span>
            <span className="material-symbols-outlined text-xs">lock</span>
          </a>
          {/* Investment */}
          <a className="flex items-center gap-3 px-6 py-3 text-slate-500 hover:bg-slate-200 font-['Inter'] text-sm font-medium transition-all opacity-60" href="#">
            <span className="material-symbols-outlined text-lg">payments</span>
            <span className="flex-1">Investment</span>
            <span className="material-symbols-outlined text-xs">lock</span>
          </a>
        </nav>
        <div className="mt-auto px-6 py-4">
          <div className="bg-blue-600 rounded-lg p-4 text-white">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Free Plan</p>
            <p className="text-xs font-medium mt-1">Upgrade for 80% more data depth.</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ProteinDetailsDashboard;
