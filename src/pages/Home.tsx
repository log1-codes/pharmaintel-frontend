import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PlayCircle, Star, Sparkles, Database, FileText, TrendingUp, CheckCircle } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      setMessage("Thanks! You’ve been added to the waitlist.");
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  const handleNavToReport = () => {
    navigate('/ceacam5');
  };

  return (
    <div className="bg-slate-950 text-white font-body min-h-screen selection:bg-purple-600 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl leading-none mt-0.5">A</span>
            </div>
            <div>
              <span className="font-semibold tracking-tighter text-2xl font-heading">AmethIntel</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-x-8 text-sm font-medium">
            <a href="#platform" className="nav-link text-slate-300 hover:text-white transition-colors">Platform</a>
            <a href="#solutions" className="nav-link text-slate-300 hover:text-white transition-colors">Solutions</a>
            <a href="#insights" className="nav-link text-slate-300 hover:text-white transition-colors">Insights</a>
            <a href="#about" className="nav-link text-slate-300 hover:text-white transition-colors">About</a>
          </div>

          <div className="flex items-center gap-x-3">
            <button
              onClick={() => {
                const element = document.getElementById('waitlist');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 text-sm font-semibold rounded-2xl border border-white/30 hover:border-purple-400 transition-colors"
            >
              Join Waitlist
            </button>
            <button
              onClick={handleNavToReport}
              className="px-5 py-3 text-sm font-semibold rounded-2xl border border-white/20 hover:border-white/40 transition-colors"
            >
              Login
            </button>
            <button
              onClick={handleNavToReport}
              className="px-5 py-3 text-sm font-semibold bg-white text-slate-900 rounded-2xl hover:bg-purple-200 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-bg min-h-screen flex items-center relative">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl">
            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl font-semibold leading-tight tracking-tighter mb-8">
              <span className="text-red-500 block mb-3 text-5xl md:text-6xl glow-text">
                The future of biotech strategy
              </span>
              <span className="text-white">is interconnected intelligence.</span>
            </h1>

            {/* Body Text */}
            <div className="max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed mb-12">
              <p className="mb-8">
                Clinical development increasingly depends on understanding the relationships between{' '}
                <span className="text-white font-medium">
                  publications, patents, white spaces, clinical evidence,
                </span>{' '}
                competitor signals, adjacent science, market behavior, and investment trends.
              </p>
              <p className="text-purple-300 font-medium text-xl">
                AmethIntel is being built to transform these fragmented signals into strategic clarity.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleNavToReport}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-3xl text-lg transition-all active:scale-95 flex items-center gap-x-3 cursor-pointer shadow-lg shadow-purple-500/20"
              >
                Access Ceacam5 Report
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById('waitlist');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 border border-white/40 hover:border-white text-white font-medium rounded-3xl text-lg transition-all flex items-center gap-x-2"
              >
                <PlayCircle className="w-5 h-5" />
                Watch 2-min video
              </button>
            </div>

            {/* Trust line */}
            <div className="mt-16 flex items-center gap-x-8 text-sm text-slate-400">
              <div className="flex items-center gap-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>Built for biopharma leaders</span>
              </div>
              <div className="h-4 w-px bg-white/20"></div>
              <span className="italic">"The network map we've always needed"</span>
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <div className="hidden lg:flex absolute bottom-16 right-12 bg-slate-900/75 backdrop-blur-md rounded-3xl p-6 border border-white/10 max-w-[260px]">
          <div className="space-y-4">
            <div className="flex items-center gap-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-sm font-bold">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">Publications</div>
                <div className="text-xs text-slate-400">1.2M analyzed</div>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-sm font-bold">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">Clinical Trials</div>
                <div className="text-xs text-slate-400">Live intelligence</div>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-sm font-bold">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">Investment Signals</div>
                <div className="text-xs text-slate-400">Real-time trends</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Value Prop Section */}
      <section id="platform" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-colors group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Interconnected Intelligence
              </h3>
              <p className="text-slate-400">
                See how every patent, paper, and trial connects to form a living knowledge graph of your therapeutic area.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-colors group">
              <div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                White Space Discovery
              </h3>
              <p className="text-slate-400">
                Uncover hidden opportunities and emerging scientific frontiers before your competitors.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-colors group">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Strategic Clarity
              </h3>
              <p className="text-slate-400">
                Turn complex data into actionable intelligence for clinical strategy, BD&amp;L, and portfolio decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="solutions" className="py-24 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 bg-purple-950 text-purple-300 text-sm font-medium rounded-full uppercase tracking-wider">
              How AmethIntel Works
            </span>
            <h2 className="text-5xl font-semibold mt-6 tracking-tight">
              From signal chaos to strategic map
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center text-3xl font-semibold mb-6 text-purple-400">
                1
              </div>
              <h4 className="font-semibold mb-2 text-lg">Ingest</h4>
              <p className="text-slate-400 text-sm">
                Publications, patents, trials, news, and financial data
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center text-3xl font-semibold mb-6 text-pink-400">
                2
              </div>
              <h4 className="font-semibold mb-2 text-lg">Connect</h4>
              <p className="text-slate-400 text-sm">
                Build the knowledge graph of relationships
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center text-3xl font-semibold mb-6 text-cyan-400">
                3
              </div>
              <h4 className="font-semibold mb-2 text-lg">Analyze</h4>
              <p className="text-slate-400 text-sm">
                Identify trends, risks, and opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center text-3xl font-semibold mb-6 text-emerald-400">
                4
              </div>
              <h4 className="font-semibold mb-2 text-lg">Act</h4>
              <p className="text-slate-400 text-sm">
                Make confident, data-backed decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="waitlist" className="py-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-t border-b border-purple-500/20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Be among the first to experience the future of biotech intelligence
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Join a select group of biotech innovators getting early access to AmethIntel.
          </p>

          <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-slate-900 border border-white/30 focus:border-purple-400 rounded-3xl px-6 py-4 text-lg outline-none"
                placeholder="your@company.com"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-white text-slate-900 font-semibold px-10 py-4 rounded-3xl hover:bg-purple-100 transition-colors whitespace-nowrap disabled:opacity-70 cursor-pointer"
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
          </form>

          {message && (
            <div className="mt-4 min-h-6 text-sm font-medium text-emerald-400 animate-pulse">
              {message}
            </div>
          )}

          <p className="text-xs text-slate-400 mt-6">
            Early members receive priority onboarding and custom use-case workshops
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-slate-950 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-8">
            <div className="flex items-center gap-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl leading-none mt-0.5">A</span>
              </div>
              <span className="font-semibold tracking-tighter text-3xl font-heading">AmethIntel</span>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-400">
              <a href="#platform" className="hover:text-white transition-colors">Platform</a>
              <a href="#solutions" className="hover:text-white transition-colors">Use Cases</a>
              <a href="#insights" className="hover:text-white transition-colors">Science</a>
              <a href="#about" className="hover:text-white transition-colors">Company</a>
            </div>

            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} AmethIntel. All rights reserved.
            </div>
          </div>

          <div className="text-center text-xs text-slate-500 mt-12">
            Transforming fragmented biotech signals into strategic clarity.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
