const HowItWorks = () => {
  return (
    <main className="pt-24 bg-slate-950 font-['Inter']">
      {/* Hero Section */}
      <section className="py-24 bg-slate-900 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <span className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-4 block">The Pipeline</span>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>How AmethIntel Works</h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Our three-stage data-to-insight pipeline transforms complex biological data into strategic pharmaceutical intelligence.
          </p>
        </div>
      </section>

      {/* Vertical Timeline */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-8 relative z-10">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-purple-400 text-2xl">biotech</span>
                </div>
                <div>
                  <span className="text-purple-400 font-bold text-xs uppercase tracking-widest">Step 01</span>
                  <h2 className="text-3xl font-semibold tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Data Ingestion</h2>
                </div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Securely upload and normalize multi-omic datasets, clinical trial records, and IP filings into our unified ecosystem.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <i className="fas fa-check-circle text-purple-500"></i>
                  Genomics, proteomics, and metabolomics data support
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <i className="fas fa-check-circle text-purple-500"></i>
                  Automated data cleaning and normalization
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <i className="fas fa-check-circle text-purple-500"></i>
                  HIPAA and GDPR compliant data pipelines
                </li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="aspect-video bg-slate-950 border border-white/5 rounded-2xl overflow-hidden flex items-center justify-center relative relative">
                <div className="text-center p-8 w-full">
                  <i className="fas fa-cloud-upload-alt text-purple-500 text-5xl mb-6 block"></i>
                  <div className="space-y-3 w-2/3 mx-auto">
                    <div className="h-2 bg-purple-500/20 rounded-full w-full"></div>
                    <div className="h-2 bg-purple-500/40 rounded-full w-4/5 mx-auto"></div>
                    <div className="h-2 bg-purple-500/60 rounded-full w-3/4 mx-auto"></div>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-6 font-bold uppercase tracking-widest">Data Upload Interface</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center mb-16">
            <div className="w-[2px] h-16 bg-gradient-to-b from-purple-500/50 to-pink-500/50 rounded-full"></div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1 bg-slate-900 border border-white/10 p-8 rounded-3xl relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="aspect-video bg-slate-950 border border-white/5 rounded-2xl overflow-hidden flex items-center justify-center relative">
                <div className="p-8 w-full">
                  {/* Node diagram mockup */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                      <span className="material-symbols-outlined text-sm">hub</span>
                    </div>
                    <div className="w-16 h-[1px] bg-gradient-to-r from-pink-500/50 to-blue-500/50"></div>
                    <div className="w-16 h-16 rounded-full bg-purple-500/30 border border-purple-500/40 flex items-center justify-center text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                      <span className="material-symbols-outlined">share</span>
                    </div>
                    <div className="w-16 h-[1px] bg-gradient-to-r from-purple-500/50 to-blue-500/50"></div>
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      <span className="material-symbols-outlined text-sm">hub</span>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="w-[1px] h-8 bg-purple-500/30"></div>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400">
                      <span className="material-symbols-outlined text-sm">science</span>
                    </div>
                    <div className="w-12 h-[1px] bg-white/10"></div>
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <span className="material-symbols-outlined text-sm">hub</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-6 font-bold uppercase tracking-widest text-center">Molecular Graph Network</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-pink-400 text-2xl">analytics</span>
                </div>
                <div>
                  <span className="text-pink-400 font-bold text-xs uppercase tracking-widest">Step 02</span>
                  <h2 className="text-3xl font-semibold tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AI Target Analysis</h2>
                </div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Our proprietary algorithms identify protein targets and map biological pathways with clinical-grade precision.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <i className="fas fa-check-circle text-pink-500"></i>
                  Molecular graph neural network analysis
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <i className="fas fa-check-circle text-pink-500"></i>
                  Binding affinity prediction with 99.2% accuracy
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <i className="fas fa-check-circle text-pink-500"></i>
                  Cross-referencing with 45k+ protein structures
                </li>
              </ul>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center mb-16">
            <div className="w-[2px] h-16 bg-gradient-to-b from-pink-500/50 to-blue-500/50 rounded-full"></div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-400 text-2xl">insights</span>
                </div>
                <div>
                  <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">Step 03</span>
                  <h2 className="text-3xl font-semibold tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Strategic Intelligence</h2>
                </div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Receive interactive dashboards and exportable reports that guide investment, IP, and clinical trial strategy for informed decision-making.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <i className="fas fa-check-circle text-blue-500"></i>
                  Real-time interactive dashboards
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <i className="fas fa-check-circle text-blue-500"></i>
                  PDF and CSV export capabilities
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <i className="fas fa-check-circle text-blue-500"></i>
                  Automated competitive landscape reports
                </li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="aspect-video bg-slate-950 border border-white/5 rounded-2xl overflow-hidden p-6 relative">
                {/* Dashboard mockup */}
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-1 h-8 bg-purple-500/20 rounded-lg border border-purple-500/30"></div>
                    <div className="flex-1 h-8 bg-pink-500/20 rounded-lg border border-pink-500/30"></div>
                  </div>
                  <div className="h-24 bg-white/5 border border-white/5 rounded-xl flex items-end gap-3 p-4">
                    <div className="flex-1 bg-blue-500/40 rounded-t-lg h-[30%] border border-blue-500/50 border-b-0"></div>
                    <div className="flex-1 bg-purple-500/50 rounded-t-lg h-[60%] border border-purple-500/50 border-b-0"></div>
                    <div className="flex-1 bg-pink-500/60 rounded-t-lg h-[80%] border border-pink-500/50 border-b-0"></div>
                    <div className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg h-[45%] shadow-[0_0_10px_rgba(236,72,153,0.3)]"></div>
                    <div className="flex-1 bg-blue-500/30 rounded-t-lg h-[55%] border border-blue-500/40 border-b-0"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 h-6 bg-slate-800 rounded border border-white/10"></div>
                    <div className="flex-1 h-6 bg-slate-800 rounded border border-white/10"></div>
                    <div className="flex-1 h-6 bg-slate-800 rounded border border-white/10"></div>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 mt-5 font-bold uppercase tracking-widest text-center">Intelligence Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Bento Grid */}
      <section className="py-24 bg-slate-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Powered by Advanced Technology</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">The technology stack that makes clinical intelligence possible.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-950 border border-white/10 p-10 rounded-3xl transition duration-300 hover:border-purple-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-purple-400 text-2xl">psychology</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Machine Learning Models</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Ensemble models trained on over 2 billion molecular interactions for target identification and drug-protein affinity prediction.</p>
            </div>
            <div className="bg-slate-950 border border-white/10 p-10 rounded-3xl transition duration-300 hover:border-pink-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-pink-400 text-2xl">hub</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Molecular Graph Networks</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Graph neural networks that model molecular structures as interconnected nodes for predicting binding sites and interaction potentials.</p>
            </div>
            <div className="bg-slate-950 border border-white/10 p-10 rounded-3xl transition duration-300 hover:border-blue-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-blue-400 text-2xl">database</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Clinical Data Lake</h4>
              <p className="text-sm text-slate-400 leading-relaxed">A unified data lakehouse architecture storing over 1.2 million clinical trial records with real-time ingestion and query capabilities.</p>
            </div>
            <div className="bg-slate-950 border border-white/10 p-10 rounded-3xl transition duration-300 hover:border-green-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-green-400 text-2xl">monitoring</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Real-time Monitoring</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Continuous monitoring of clinical trial updates, FDA approvals, and patent filings with automated alerts and notifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-4xl font-semibold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Start analyzing today</h2>
          <p className="text-slate-300 text-xl mb-12">Experience the power of clinical-grade pharmaceutical intelligence.</p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:-translate-y-1 transition-all">
            Get Started Free
          </button>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
