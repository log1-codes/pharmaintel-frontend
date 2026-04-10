const PricingPlans = () => {
  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="text-center mb-20">
        <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Pricing Strategy</span>
        <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6">Choose Your Intelligence Plan</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
          Unlock clinical-grade insights with our tiered molecular data sets, designed for every stage of pharmaceutical development.
        </p>
      </header>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {/* Plan 1: Basic */}
        <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col transition-all hover:bg-white hover:shadow-[0_20px_40px_-12px_rgba(0,88,188,0.08)] border border-transparent">
          <div className="mb-8">
            <h3 className="font-headline text-xl font-bold mb-2">Basic</h3>
            <p className="text-on-surface-variant text-sm h-10">Essential tools for individual researchers and lab students.</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-extrabold text-on-surface tracking-tight">$49</span>
            <span className="text-on-surface-variant text-sm">/mo</span>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-start gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>Basic Molecule Search</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>50 Clinical Trials /mo</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>Community Support</span>
            </li>
          </ul>
          <button className="w-full py-3 px-4 bg-surface-container-high text-on-surface font-bold text-xs uppercase tracking-widest rounded transition-all hover:bg-surface-container-highest">Subscribe</button>
        </div>

        {/* Plan 2: Pro (Most Popular) */}
        <div className="relative bg-surface-container-lowest border-2 border-primary-container rounded-xl p-8 flex flex-col biological-glow transform lg:-translate-y-4">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Most Popular</div>
          <div className="mb-8">
            <h3 className="font-headline text-xl font-bold mb-2 text-primary">Pro</h3>
            <p className="text-on-surface-variant text-sm h-10">Advanced analytics for professional biotech consulting teams.</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-extrabold text-on-surface tracking-tight">$199</span>
            <span className="text-on-surface-variant text-sm">/mo</span>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-start gap-3 text-sm font-medium">
              <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span>Unlimited Compound Lookups</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span>Deep Clinical Intelligence</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span>Exportable Trial Data (PDF/CSV)</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span>Priority Email Support</span>
            </li>
          </ul>
          <button className="w-full py-3 px-4 bg-primary text-on-primary font-bold text-xs uppercase tracking-widest rounded transition-all hover:opacity-90">Subscribe</button>
        </div>

        {/* Plan 3: Enterprise */}
        <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col transition-all hover:bg-white hover:shadow-[0_20px_40px_-12px_rgba(0,88,188,0.08)] border border-transparent">
          <div className="mb-8">
            <h3 className="font-headline text-xl font-bold mb-2">Enterprise</h3>
            <p className="text-on-surface-variant text-sm h-10">Scalable intelligence for medium to large pharma firms.</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-extrabold text-on-surface tracking-tight">$599</span>
            <span className="text-on-surface-variant text-sm">/mo</span>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-start gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>All Pro Features</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>IP &amp; Deal Intelligence</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>Multi-user Workspace</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>API Access (v1)</span>
            </li>
          </ul>
          <button className="w-full py-3 px-4 bg-surface-container-high text-on-surface font-bold text-xs uppercase tracking-widest rounded transition-all hover:bg-surface-container-highest">Subscribe</button>
        </div>

        {/* Plan 4: Platinum */}
        <div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-8 flex flex-col transition-all hover:shadow-[0_20px_40px_-12px_rgba(0,88,188,0.08)] border border-transparent">
          <div className="mb-8">
            <h3 className="font-headline text-xl font-bold mb-2 text-white">Platinum</h3>
            <p className="text-outline-variant text-sm h-10">Tailored data pipes and high-touch support for global leaders.</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-extrabold text-white tracking-tight">Custom</span>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-start gap-3 text-sm">
              <span className="material-symbols-outlined text-secondary-container text-lg">auto_awesome</span>
              <span>Custom API Integration</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="material-symbols-outlined text-secondary-container text-lg">auto_awesome</span>
              <span>24/7 Dedicated Analyst</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="material-symbols-outlined text-secondary-container text-lg">auto_awesome</span>
              <span>SLA Guarantees</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="material-symbols-outlined text-secondary-container text-lg">auto_awesome</span>
              <span>On-site Training</span>
            </li>
          </ul>
          <button className="w-full py-3 px-4 bg-secondary-container text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded transition-all hover:opacity-90">Contact Sales</button>
        </div>
      </div>

      {/* Trust Section (Bento) */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-surface-container-low rounded-xl p-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <h4 className="font-headline text-2xl font-bold mb-4">Enterprise-Grade Security</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              All plans include SOC2 Type II compliance, end-to-end encryption for clinical data queries, and advanced identity management for your lab team.
            </p>
          </div>
          <div className="w-full md:w-1/2 aspect-video bg-surface-container-highest rounded-lg overflow-hidden border border-outline-variant/10">
            <img
              alt="Cybersecurity lab"
              className="w-full h-full object-cover grayscale opacity-50 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0EtGcaUVx2lZciiMFL4VOQImYvKLIKQo3s6eYx5ADC7lBs_fKhmE1JWrql0lnZp4VMBppVJ6zIJeZTsuXmMgnLAWNo8FpL4QT8mYld_8FtBuRk8RmHscXn0i7AphyoNEq4WaPuTfgkhnOMMyrAsJkJt19ch6-LgKEim8VnPVp3de0tgbfp-gIeuLTH2Tet5jELO1TftEjAXzk5JfT3QG4NZvaofgsZaiWq_YVtS-bl8fi4bxNV2167nrSCXUHSAsSG05QWKzMSlI6"
            />
          </div>
        </div>
        <div className="bg-primary-container p-10 rounded-xl text-on-primary-container flex flex-col justify-center">
          <div className="text-5xl font-extrabold mb-4">99.9%</div>
          <div className="font-headline text-xl font-bold mb-2">Data Accuracy</div>
          <p className="text-white/80 text-sm">Verified by top-tier clinical trial auditors and molecular biologists.</p>
        </div>
      </section>
    </main>
  );
};

export default PricingPlans;
