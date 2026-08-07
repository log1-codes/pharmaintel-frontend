import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch(`${import.meta.env.VITE_API_BASE_URL || ''}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, org })
      }).catch(() => {});
      setSubscribed(true);
    } finally {
      setLoading(false);
    }
  };

  const upcomingEditions = [
    {
      title: 'Topoisomerase I ADC Evolution in Solid Tumors',
      date: 'Next Edition · August 2026',
      tag: 'ADC Technology',
      desc: 'Deep dive into next-generation Topo1 inhibitor payloads, bystander killing profiles, and clinical differentiation in gastrointestinal and lung malignancies.'
    },
    {
      title: 'Global CEACAM5 Licensing Benchmarks & China-Origin Assets',
      date: 'Upcoming · September 2026',
      tag: 'Deal Structures',
      desc: 'Comparative evaluation of upfronts, milestones, and territorial rights for emerging clinical-stage oncology platforms.'
    },
    {
      title: 'Bispecific CAR-T & T-Cell Engager Frontier',
      date: 'Upcoming · October 2026',
      tag: 'Cell Therapy',
      desc: 'Analyzing dual-targeting strategies to overcome antigen escape and optimize tumor penetration in solid oncology.'
    }
  ];

  return (
    <div className="bg-[#020617] text-white min-h-screen relative overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/15 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Top Navigation Bar */}
      <nav className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="font-semibold tracking-tight text-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AmethIntel</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-medium text-slate-300 hover:text-white transition">
              ← Back to Home
            </Link>
            <Link
              to="/login"
              className="px-5 py-2.5 text-sm font-semibold rounded-2xl bg-purple-600 hover:bg-purple-700 text-white transition shadow-lg shadow-purple-500/20"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            AmethIntel Signal Dispatch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Biotech Intelligence <br />
            <span className="bg-gradient-to-r from-[#ff5b4d] via-purple-400 to-pink-400 bg-clip-text text-transparent">Direct to Your Inbox</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Curated analysis connecting clinical signals, competitive aggressive fast-followers, patent landscape shifts, and deal benchmarks before consensus forms.
          </p>
        </div>

        {/* Subscription Box */}
        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full pointer-events-none"></div>

          {subscribed ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                You're Subscribed!
              </h3>
              <p className="text-slate-300 max-w-md mx-auto">
                Thank you for joining AmethIntel's Intelligence Dispatch. We'll send our next strategic intelligence briefing directly to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-6 max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Subscribe to the Intelligence Newsletter
                </h3>
                <p className="text-slate-400 text-sm">
                  Join oncology R&D leaders, BD executives, and biotech investors.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dr. Jane Doe"
                    required
                    className="w-full bg-slate-900 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:border-purple-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Company / Institution</label>
                  <input
                    type="text"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder="BioPharma Corp"
                    required
                    className="w-full bg-slate-900 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:border-purple-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Work Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane.doe@biopharma.com"
                  required
                  className="w-full bg-slate-900 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:border-purple-400 transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-4 rounded-2xl transition shadow-lg shadow-purple-500/25 disabled:opacity-50"
              >
                {loading ? 'Subscribing...' : 'Get AmethIntel Briefings'}
              </button>
            </form>
          )}
        </div>

        {/* Upcoming Editions */}
        <div>
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Upcoming Intelligence Dispatches
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEditions.map((item, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-purple-500/50 transition">
                <div>
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="text-purple-400 font-semibold">{item.tag}</span>
                    <span className="text-slate-500">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 leading-snug">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-500">
                  AmethIntel Research Series
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
