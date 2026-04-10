const AboutUs = () => {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-4 block">Our Story</span>
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6">About PharmaIntel</h1>
          <p className="text-on-surface-variant text-xl max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. We are pioneering the intersection of artificial intelligence and pharmaceutical research to accelerate drug discovery worldwide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-4">Our Mission</h2>
              <h3 className="font-headline text-4xl font-extrabold tracking-tight leading-tight mb-6">Bridging data to discovery.</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. PharmaIntel bridges the gap between raw biological data and actionable pharmaceutical strategy, treating every data point as a specimen analyzed through our "Clinical Lens."
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Our platform integrates multi-omic datasets, clinical trial intelligence, and IP landscape analysis into a single unified ecosystem.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden biological-shadow">
              <img
                alt="Laboratory research"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs0YEosgnHOUpL4dlCFMaLvT59QTKefMi5EGdE7B-4mHXEwEZWpo715ydmysbPUDHRv5x_09wU43I3_5vdgyyyde7ImsHmGsSitrDjBgwJV58ZOa6Icx-TMXt5eS2SQNoSuS-g4sLVXc0GH-2abHQdGrUmfnypGTuHPMowBsEqHOg02s39SVZvlpnrFDUK-FahKm3eiljcUJFtbQ_yGVikMhEzC9uA3Y-D2jly1cV8rZXcYivYVReSD7b7S-1YBWapRcQs6S01UzSN"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">Our Core Values</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. The principles that drive every decision we make.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-10 rounded-xl biological-shadow text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">biotech</span>
              </div>
              <h4 className="font-headline text-xl font-bold mb-3">Precision</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Every data point is analyzed with clinical-grade accuracy and rigor.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl biological-shadow text-center">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">analytics</span>
              </div>
              <h4 className="font-headline text-xl font-bold mb-3">Innovation</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pushing the boundaries of AI-driven pharmaceutical intelligence every day.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl biological-shadow text-center">
              <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl">shield</span>
              </div>
              <h4 className="font-headline text-xl font-bold mb-3">Trust</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. SOC2 compliant infrastructure protecting the world's most sensitive research data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 bg-primary-container text-on-primary-container relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-headline font-extrabold mb-2">99.8%</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Data Accuracy</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-headline font-extrabold mb-2">150+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Lab Partners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-headline font-extrabold mb-2">45k+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Proteins Mapped</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-headline font-extrabold mb-2">1.2m</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Clinical Trials</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-sm font-bold uppercase tracking-[0.2em] text-outline mb-4">Trusted By</h2>
            <p className="text-on-surface-variant">Lorem ipsum dolor sit amet. Leading pharmaceutical and biotech organizations worldwide.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['GenoTech Labs', 'BioVista Pharma', 'ClinicalEdge AI', 'MolecuPath Inc.', 'Helix Therapeutics', 'NovaSynth Bio', 'ProteoMap Global', 'NeuroLink Sciences'].map((partner) => (
              <div key={partner} className="bg-surface-container-low p-8 rounded-xl flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-outline">corporate_fare</span>
                  <span className="font-headline font-bold text-sm text-outline">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-container-highest/30">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-6">Join the future of clinical intelligence</h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Start transforming your pharmaceutical data into strategic insights today.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold uppercase tracking-wider biological-shadow hover:translate-y-[-2px] transition-all">
              Get Started
            </button>
            <button className="bg-surface-container-high text-on-surface px-10 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-surface-container-highest transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
