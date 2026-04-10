const LandingPage = () => {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden px-8 lg:px-24">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-secondary-container/20 to-transparent -z-10 rounded-bl-[100px]"></div>
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">clinical_notes</span>
              Next-Gen Biotech Analytics
            </div>
            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight">
              Unlocking <span className="text-primary bg-clip-text">Pharma Intelligence</span> Insights
            </h1>
            <p className="text-on-surface-variant text-lg lg:text-xl max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold uppercase tracking-wider biological-shadow hover:translate-y-[-2px] transition-all">
                Get Started
              </button>
              <button className="bg-surface-container-high text-on-surface px-10 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-surface-container-highest transition-all">
                View Plans
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden biological-shadow border border-white/20">
              <img
                alt="Advanced biotech lab interface"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs0YEosgnHOUpL4dlCFMaLvT59QTKefMi5EGdE7B-4mHXEwEZWpo715ydmysbPUDHRv5x_09wU43I3_5vdgyyyde7ImsHmGsSitrDjBgwJV58ZOa6Icx-TMXt5eS2SQNoSuS-g4sLVXc0GH-2abHQdGrUmfnypGTuHPMowBsEqHOg02s39SVZvlpnrFDUK-FahKm3eiljcUJFtbQ_yGVikMhEzC9uA3Y-D2jly1cV8rZXcYivYVReSD7b7S-1YBWapRcQs6S01UzSN"
              />
            </div>
            {/* Floating Molecule Peek */}
            <div className="absolute -bottom-6 -left-6 glass-effect bg-surface-container-lowest/80 p-6 rounded-xl border-l-4 border-primary biological-shadow max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary">science</span>
                <span className="font-headline font-bold text-sm">Target Alpha-7</span>
              </div>
              <p className="text-[11px] text-on-surface-variant leading-tight">Protein binding affinity verified via clinical lens simulation engine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="col-span-1">
              <h2 className="font-headline text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-4">About Us</h2>
              <h3 className="font-headline text-4xl font-extrabold tracking-tight leading-tight">Precision at the core of discovery.</h3>
            </div>
            <div className="col-span-2 space-y-6">
              <p className="text-xl text-on-surface-variant font-light leading-relaxed">
                PharmaIntel bridges the gap between raw biological data and actionable pharmaceutical strategy. We treat every data point as a specimen, analyzed through our "Clinical Lens" to ensure clarity, accuracy, and speed in drug development.
              </p>
              <div className="h-[1px] w-24 bg-primary/30"></div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-headline font-bold text-primary mb-1">99.8%</div>
                  <div className="text-xs uppercase tracking-widest text-outline font-bold">Data Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-headline font-bold text-primary mb-1">150+</div>
                  <div className="text-xs uppercase tracking-widest text-outline font-bold">Lab Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">The Biotech Data Workflow</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Our streamlined process turns complex biological information into competitive clinical intelligence in three precise stages.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="group relative p-8 bg-surface-container-lowest rounded-xl biological-shadow transition-all hover:translate-y-[-8px]">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">biotech</span>
              </div>
              <div className="absolute top-8 right-8 text-6xl font-headline font-black text-surface-container-high -z-0">01</div>
              <div className="relative z-10">
                <h4 className="font-headline text-xl font-bold mb-3">Data Ingestion</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Securely upload and normalize multi-omic datasets, clinical trial records, and IP filings into our unified ecosystem.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="group relative p-8 bg-surface-container-lowest rounded-xl biological-shadow transition-all hover:translate-y-[-8px]">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <div className="absolute top-8 right-8 text-6xl font-headline font-black text-surface-container-high -z-0">02</div>
              <div className="relative z-10">
                <h4 className="font-headline text-xl font-bold mb-3">AI Target Analysis</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Our proprietary algorithms identify protein targets and map biological pathways with clinical-grade precision.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="group relative p-8 bg-surface-container-lowest rounded-xl biological-shadow transition-all hover:translate-y-[-8px]">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6 group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                <span className="material-symbols-outlined">insights</span>
              </div>
              <div className="absolute top-8 right-8 text-6xl font-headline font-black text-surface-container-high -z-0">03</div>
              <div className="relative z-10">
                <h4 className="font-headline text-xl font-bold mb-3">Strategic Intelligence</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Receive interactive dashboards and exportable reports that guide investment, IP, and clinical trial strategy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Preview */}
      <section className="py-24 bg-surface-container-highest/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-primary-container rounded-[2rem] p-12 lg:p-20 text-on-primary-container relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Decor */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="font-headline text-4xl font-extrabold mb-6">Ready to scale your clinical intelligence?</h2>
              <p className="text-on-primary-container/80 text-lg mb-8">From boutique research labs to global pharmaceutical giants, we have a plan designed for your scale of innovation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-opacity-90 transition-all">
                  See All Plans
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-md">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <div className="text-xs uppercase tracking-widest mb-2 opacity-60">Starter</div>
                <div className="text-2xl font-bold mb-1">$499<span className="text-sm font-normal opacity-70">/mo</span></div>
                <div className="text-[10px] opacity-70">Up to 5 proteins analyzed</div>
              </div>
              <div className="bg-white text-primary p-6 rounded-2xl biological-shadow">
                <div className="text-xs uppercase tracking-widest mb-2 font-bold">Enterprise</div>
                <div className="text-2xl font-bold mb-1">Custom</div>
                <div className="text-[10px] font-medium">Unlimited data throughput</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
