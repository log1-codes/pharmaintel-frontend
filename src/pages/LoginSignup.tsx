import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const endpoint = activeTab === 'login' ? '/api/auth/login' : '/api/auth/signup';
    const payload = activeTab === 'login'
      ? { email, password }
      : { name, email, password };

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
      const response = await fetch(`${apiBaseUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'An error occurred');
      }

      if (activeTab === 'login') {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        // Force a full reload so the Header component immediately picks up the new localStorage state
        window.location.href = '/';
      } else {
        setActiveTab('login');
        setError('Registration successful! Please sign in with your new credentials.');
        // Clear registration fields
        setName('');
        setEmail('');
        setPassword('');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row pt-16 bg-slate-950 font-['Inter']">
      {/* Left Side: Authentication Form */}
      <section className="w-full md:w-[45%] flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-950"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[100px] pointer-events-none"></div>

        <div className="w-full max-w-md relative z-10">
          <div className="mb-12 text-center md:text-left">
            <h1 className="text-4xl font-semibold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {activeTab === 'login' ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-slate-400 text-lg">
              {activeTab === 'login'
                ? 'Access your clinical intelligence dashboard.'
                : 'Join the next generation of biotech intelligence.'}
            </p>
          </div>

          {/* Toggle */}
          <div className="flex p-1.5 bg-slate-900 border border-white/10 rounded-full mb-10 w-fit mx-auto md:mx-0">
            <button
              onClick={() => { setActiveTab('login'); setError(''); }}
              className={`px-8 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300 ${activeTab === 'login'
                ? 'bg-linear-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
                }`}
            >
              Login
            </button>
            <button
              onClick={() => { setActiveTab('register'); setError(''); }}
              className={`px-8 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300 ${activeTab === 'register'
                ? 'bg-linear-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
                }`}
            >
              Register
            </button>
          </div>

          {error && (
            <div className={`mb-8 p-4 rounded-xl text-sm font-medium border ${error.includes('successful')
              ? 'bg-green-900/20 border-green-500/30 text-green-400'
              : 'bg-red-900/20 border-red-500/30 text-red-400'
              }`}>
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {activeTab === 'register' && (
              <div className="space-y-2.5">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1" htmlFor="name">Full Name</label>
                <input
                  className="w-full h-14 px-5 bg-slate-900 border border-white/10 rounded-2xl focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all text-white placeholder:text-slate-600 outline-none"
                  id="name"
                  placeholder="John Doe"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="space-y-2.5">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1" htmlFor="email">Work Email</label>
              <input
                className="w-full h-14 px-5 bg-slate-900 border border-white/10 rounded-2xl focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all text-white placeholder:text-slate-600 outline-none"
                id="email"
                placeholder="name@pharmaco.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2.5">
              <div className="flex justify-between items-center ml-1 pr-1">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500" htmlFor="password">Password</label>
                {activeTab === 'login' && (
                  <a className="text-[10px] font-bold uppercase tracking-widest text-purple-400 hover:text-purple-300 transition-colors" href="#">Forgot password?</a>
                )}
              </div>
              <div className="relative">
                <input
                  className="w-full h-14 px-5 bg-slate-900 border border-white/10 rounded-2xl focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all text-white placeholder:text-slate-600 outline-none"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {activeTab === 'login' && (
              <div className="flex items-center gap-3 py-2 ml-1">
                <input className="w-4 h-4 rounded border-white/20 bg-slate-900 text-purple-500 focus:ring-purple-500 focus:ring-offset-slate-950" id="remember" type="checkbox" />
                <label className="text-sm text-slate-400 font-medium" htmlFor="remember">Keep me authenticated</label>
              </div>
            )}
            <button
              className="w-full h-14 bg-linear-to-r from-purple-600 to-pink-500 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 mt-4"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Processing...' : activeTab === 'login' ? 'Enter Workspace' : 'Create Account'}
              {!loading && <i className="fas fa-arrow-right"></i>}
            </button>
          </form>

          {/* Social/SSO Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold text-slate-500">
              <span className="bg-slate-950 px-4">Enterprise SSO</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 h-14 bg-slate-900 border border-white/10 rounded-2xl font-semibold text-sm text-white hover:border-purple-500 hover:bg-slate-800 transition-all">
              <i className="fas fa-shield-alt text-purple-400 text-lg"></i>
              Okta
            </button>
            <button className="flex items-center justify-center gap-3 h-14 bg-slate-900 border border-white/10 rounded-2xl font-semibold text-sm text-white hover:border-purple-500 hover:bg-slate-800 transition-all">
              <i className="fab fa-microsoft text-purple-400 text-lg"></i>
              Azure AD
            </button>
          </div>
        </div>
      </section>

      {/* Right Side: Abstract Biotech Graphic */}
      <section className="hidden md:block md:w-[55%] relative overflow-hidden bg-slate-900 border-l border-white/10">
        {/* Background Image */}
        <img
          alt="Microscopic abstract biotech visualization"
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQvD1DzTWFy-n3gGZcaTghbBVEiMoxBDCzBWie8IfrGawAHK456GzGUBwIF_tsgn4y7y5PDwu5nPJf914dbw5lV46iB3vYQbKParBFN-D95eJmr_LMx_cljiSDHJ_whtGu5b9DCTU3r9JJqCYpA_aNIaXIWMfltxihSSuxq-zn6FxyWkBnvGgxtA9yLQfWQ-EZKAtpfAhTxoF9vJeAfZj06_ZTKCv0emjJng4PpeIVtAe0o_Q9rczjFAVteACvrK_nplb__uAUHvP1"
        />
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-linear-to-tr from-slate-950/80 via-purple-900/30 to-transparent"></div>
        {/* Content Over Glass */}
        <div className="absolute inset-0 flex flex-col items-start justify-end p-16 lg:p-24 z-10">
          <div className="bg-slate-950/40 backdrop-blur-md p-10 rounded-3xl border border-white/10 max-w-xl shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <span className="material-symbols-outlined text-2xl">biotech</span>
              </div>
              <div className="h-px w-12 bg-purple-500/50"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300">Clinical Insights v4.2</span>
            </div>
            <h2 className="text-4xl font-semibold text-white tracking-tight mb-5 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Unlocking the molecular blueprint of therapy.</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              AmethIntel provides real-time access to the Protein Navigator, integrating IP landscapes with clinical trial trajectory analysis for rapid drug discovery.
            </p>
            <div className="flex gap-10">
              <div>
                <div className="text-3xl font-semibold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>45k+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-purple-400">Proteins Mapped</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>1.2m</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-pink-400">Clinical Trials</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginSignup;
