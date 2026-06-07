const PricingPlans = () => {
  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto font-['Inter']">
      {/* Header Section */}
      <header className="text-center mb-20">
        <span className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-4 block">Pricing Strategy</span>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Choose Your Intelligence Plan</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Unlock clinical-grade insights with our tiered molecular data sets, designed for every stage of pharmaceutical development.
        </p>
      </header>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {/* Plan 1: Basic */}
        <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:border-purple-500 hover:-translate-y-2">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Basic</h3>
            <p className="text-slate-400 text-sm h-10">Essential tools for individual researchers and lab students.</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-semibold text-white tracking-tight">$49</span>
            <span className="text-slate-500 text-sm">/mo</span>
          </div>
          <ul className="space-y-4 mb-10 grow text-slate-300">
            <li className="flex items-start gap-3 text-sm">
              <i className="fas fa-check-circle text-purple-500 mt-0.5"></i>
              <span>Basic Molecule Search</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <i className="fas fa-check-circle text-purple-500 mt-0.5"></i>
              <span>50 Clinical Trials /mo</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <i className="fas fa-check-circle text-purple-500 mt-0.5"></i>
              <span>Community Support</span>
            </li>
          </ul>
          <button className="w-full py-3 px-4 bg-white/5 text-white font-semibold text-xs uppercase tracking-widest rounded-full transition-all hover:bg-white/10 border border-white/10">Subscribe</button>
        </div>

        {/* Plan 2: Pro (Most Popular) */}
        <div className="relative bg-slate-900 border border-purple-500/50 rounded-3xl p-8 flex flex-col transform lg:-translate-y-4 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-purple-600 to-pink-500 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">Most Popular</div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-purple-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Pro</h3>
            <p className="text-slate-400 text-sm h-10">Advanced analytics for professional biotech consulting teams.</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-semibold text-white tracking-tight">$199</span>
            <span className="text-slate-500 text-sm">/mo</span>
          </div>
          <ul className="space-y-4 mb-10 grow text-white">
            <li className="flex items-start gap-3 text-sm font-medium">
              <i className="fas fa-check-circle text-purple-400 mt-0.5"></i>
              <span>Unlimited Compound Lookups</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <i className="fas fa-check-circle text-purple-400 mt-0.5"></i>
              <span>Deep Clinical Intelligence</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <i className="fas fa-check-circle text-purple-400 mt-0.5"></i>
              <span>Exportable Trial Data (PDF/CSV)</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <i className="fas fa-check-circle text-purple-400 mt-0.5"></i>
              <span>Priority Email Support</span>
            </li>
          </ul>
          <button className="w-full py-3 px-4 bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold text-xs uppercase tracking-widest rounded-full transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">Subscribe</button>
        </div>

        {/* Plan 3: Enterprise */}
        <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:border-purple-500 hover:-translate-y-2">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Enterprise</h3>
            <p className="text-slate-400 text-sm h-10">Scalable intelligence for medium to large pharma firms.</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-semibold text-white tracking-tight">$599</span>
            <span className="text-slate-500 text-sm">/mo</span>
          </div>
          <ul className="space-y-4 mb-10 grow text-slate-300">
            <li className="flex items-start gap-3 text-sm">
              <i className="fas fa-check-circle text-purple-500 mt-0.5"></i>
              <span>All Pro Features</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <i className="fas fa-check-circle text-purple-500 mt-0.5"></i>
              <span>IP &amp; Deal Intelligence</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <i className="fas fa-check-circle text-purple-500 mt-0.5"></i>
              <span>Multi-user Workspace</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <i className="fas fa-check-circle text-purple-500 mt-0.5"></i>
              <span>API Access (v1)</span>
            </li>
          </ul>
          <button className="w-full py-3 px-4 bg-white/5 text-white font-semibold text-xs uppercase tracking-widest rounded-full transition-all hover:bg-white/10 border border-white/10">Subscribe</button>
        </div>

        {/* Plan 4: Platinum */}
        <div className="bg-linear-to-b from-slate-800 to-slate-900 border border-white/20 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:border-purple-400 hover:-translate-y-2">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Platinum</h3>
            <p className="text-slate-300 text-sm h-10">Tailored data pipes and high-touch support for global leaders.</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-semibold text-white tracking-tight">Custom</span>
          </div>
          <ul className="space-y-4 mb-10 grow text-white">
            <li className="flex items-start gap-3 text-sm">
              <i className="fas fa-star text-pink-400 mt-0.5"></i>
              <span>Custom API Integration</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <i className="fas fa-star text-pink-400 mt-0.5"></i>
              <span>24/7 Dedicated Analyst</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <i className="fas fa-star text-pink-400 mt-0.5"></i>
              <span>SLA Guarantees</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <i className="fas fa-star text-pink-400 mt-0.5"></i>
              <span>On-site Training</span>
            </li>
          </ul>
          <button className="w-full py-3 px-4 bg-white text-slate-900 font-semibold text-xs uppercase tracking-widest rounded-full transition-all hover:bg-slate-200">Contact Sales</button>
        </div>
      </div>

      {/* Trust Section (Bento) */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-slate-900 border border-white/10 rounded-3xl p-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <h4 className="text-2xl font-semibold mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Enterprise-Grade Security</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              All plans include SOC2 Type II compliance, end-to-end encryption for clinical data queries, and advanced identity management for your lab team.
            </p>
          </div>
          <div className="w-full md:w-1/2 aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-white/5 relative">
            <div className="absolute inset-0 bg-linear-to-tr from-purple-900/20 to-transparent mix-blend-overlay"></div>
            <img
              alt="Cybersecurity lab"
              className="w-full h-full object-cover grayscale opacity-40 mix-blend-screen"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0EtGcaUVx2lZciiMFL4VOQImYvKLIKQo3s6eYx5ADC7lBs_fKhmE1JWrql0lnZp4VMBppVJ6zIJeZTsuXmMgnLAWNo8FpL4QT8mYld_8FtBuRk8RmHscXn0i7AphyoNEq4WaPuTfgkhnOMMyrAsJkJt19ch6-LgKEim8VnPVp3de0tgbfp-gIeuLTH2Tet5jELO1TftEjAXzk5JfT3QG4NZvaofgsZaiWq_YVtS-bl8fi4bxNV2167nrSCXUHSAsSG05QWKzMSlI6"
            />
          </div>
        </div>
        <div className="bg-linear-to-br from-purple-600 to-pink-500 p-10 rounded-3xl text-white flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <div className="text-5xl font-semibold mb-4 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>99.9%</div>
            <div className="text-xl font-semibold mb-2">Data Accuracy</div>
            <p className="text-white/80 text-sm leading-relaxed">Verified by top-tier clinical trial auditors and molecular biologists.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPlans;
