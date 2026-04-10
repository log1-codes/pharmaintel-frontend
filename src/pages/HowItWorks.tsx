const HowItWorks = () => {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">The Pipeline</span>
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6">How PharmaIntel Works</h1>
          <p className="text-on-surface-variant text-xl max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our three-stage data-to-insight pipeline transforms complex biological data into strategic pharmaceutical intelligence.
          </p>
        </div>
      </section>

      {/* Vertical Timeline */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-8">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">biotech</span>
                </div>
                <div>
                  <span className="text-primary font-bold text-xs uppercase tracking-widest">Step 01</span>
                  <h2 className="font-headline text-3xl font-extrabold tracking-tight">Data Ingestion</h2>
                </div>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Securely upload and normalize multi-omic datasets, clinical trial records, and IP filings into our unified ecosystem.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Genomics, proteomics, and metabolomics data support
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Automated data cleaning and normalization
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  HIPAA and GDPR compliant data pipelines
                </li>
              </ul>
            </div>
            <div className="bg-surface-container-low p-8 rounded-2xl">
              <div className="aspect-video bg-surface-container-highest rounded-xl overflow-hidden flex items-center justify-center relative">
                <div className="text-center p-8">
                  <span className="material-symbols-outlined text-primary text-6xl mb-4 block">cloud_upload</span>
                  <div className="space-y-2">
                    <div className="h-2 bg-primary/20 rounded-full w-3/4 mx-auto"></div>
                    <div className="h-2 bg-primary/40 rounded-full w-1/2 mx-auto"></div>
                    <div className="h-2 bg-primary/60 rounded-full w-2/3 mx-auto"></div>
                  </div>
                  <p className="text-xs text-outline mt-4 font-bold uppercase tracking-widest">Data Upload Interface</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center mb-16">
            <div className="w-[2px] h-16 bg-gradient-to-b from-primary/30 to-secondary/30"></div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1 bg-surface-container-low p-8 rounded-2xl">
              <div className="aspect-video bg-surface-container-highest rounded-xl overflow-hidden flex items-center justify-center relative">
                <div className="p-8 w-full">
                  {/* Node diagram mockup */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm">hub</span>
                    </div>
                    <div className="w-16 h-[2px] bg-primary/30"></div>
                    <div className="w-16 h-16 rounded-full bg-primary/40 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">share</span>
                    </div>
                    <div className="w-16 h-[2px] bg-secondary/30"></div>
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-sm">hub</span>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="w-[2px] h-8 bg-primary/20"></div>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-tertiary text-sm">science</span>
                    </div>
                    <div className="w-12 h-[2px] bg-outline-variant/30"></div>
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm">hub</span>
                    </div>
                  </div>
                  <p className="text-xs text-outline mt-4 font-bold uppercase tracking-widest text-center">Molecular Graph Network</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-2xl">analytics</span>
                </div>
                <div>
                  <span className="text-secondary font-bold text-xs uppercase tracking-widest">Step 02</span>
                  <h2 className="font-headline text-3xl font-extrabold tracking-tight">AI Target Analysis</h2>
                </div>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore. Our proprietary algorithms identify protein targets and map biological pathways with clinical-grade precision.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  Molecular graph neural network analysis
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  Binding affinity prediction with 99.2% accuracy
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  Cross-referencing with 45k+ protein structures
                </li>
              </ul>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center mb-16">
            <div className="w-[2px] h-16 bg-gradient-to-b from-secondary/30 to-tertiary/30"></div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-2xl">insights</span>
                </div>
                <div>
                  <span className="text-tertiary font-bold text-xs uppercase tracking-widest">Step 03</span>
                  <h2 className="font-headline text-3xl font-extrabold tracking-tight">Strategic Intelligence</h2>
                </div>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Receive interactive dashboards and exportable reports that guide investment, IP, and clinical trial strategy for informed decision-making.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                  Real-time interactive dashboards
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                  PDF and CSV export capabilities
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                  Automated competitive landscape reports
                </li>
              </ul>
            </div>
            <div className="bg-surface-container-low p-8 rounded-2xl">
              <div className="aspect-video bg-surface-container-highest rounded-xl overflow-hidden p-6">
                {/* Dashboard mockup */}
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="flex-1 h-8 bg-primary/10 rounded"></div>
                    <div className="flex-1 h-8 bg-primary/20 rounded"></div>
                  </div>
                  <div className="h-20 bg-primary/5 rounded flex items-end gap-2 p-3">
                    <div className="flex-1 bg-primary/20 rounded-t h-[30%]"></div>
                    <div className="flex-1 bg-primary/40 rounded-t h-[60%]"></div>
                    <div className="flex-1 bg-primary/60 rounded-t h-[80%]"></div>
                    <div className="flex-1 bg-secondary rounded-t h-[45%]"></div>
                    <div className="flex-1 bg-primary/30 rounded-t h-[55%]"></div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 h-6 bg-surface-container-high rounded"></div>
                    <div className="flex-1 h-6 bg-surface-container-high rounded"></div>
                    <div className="flex-1 h-6 bg-surface-container-high rounded"></div>
                  </div>
                </div>
                <p className="text-xs text-outline mt-3 font-bold uppercase tracking-widest text-center">Intelligence Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Bento Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">Powered by Advanced Technology</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. The technology stack that makes clinical intelligence possible.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest p-10 rounded-xl biological-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">psychology</span>
              </div>
              <h4 className="font-headline text-xl font-bold mb-3">Machine Learning Models</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ensemble models trained on over 2 billion molecular interactions for target identification and drug-protein affinity prediction.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl biological-shadow">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">hub</span>
              </div>
              <h4 className="font-headline text-xl font-bold mb-3">Molecular Graph Networks</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Graph neural networks that model molecular structures as interconnected nodes for predicting binding sites and interaction potentials.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl biological-shadow">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">database</span>
              </div>
              <h4 className="font-headline text-xl font-bold mb-3">Clinical Data Lake</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A unified data lakehouse architecture storing over 1.2 million clinical trial records with real-time ingestion and query capabilities.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl biological-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">monitoring</span>
              </div>
              <h4 className="font-headline text-xl font-bold mb-3">Real-time Monitoring</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Continuous monitoring of clinical trial updates, FDA approvals, and patent filings with automated alerts and notifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-6">Start analyzing today</h2>
          <p className="text-on-surface-variant text-lg mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Experience the power of clinical-grade pharmaceutical intelligence.</p>
          <button className="bg-gradient-to-br from-primary to-secondary text-on-primary px-12 py-4 rounded-lg font-bold uppercase tracking-widest biological-shadow hover:translate-y-[-2px] transition-all">
            Get Started Free
          </button>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
