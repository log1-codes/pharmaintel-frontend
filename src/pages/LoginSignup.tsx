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
      navigate('/dashboard');
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
        navigate('/dashboard');
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
    <main className="min-h-screen flex flex-col md:flex-row pt-16">
      {/* Left Side: Authentication Form */}
      <section className="w-full md:w-[45%] flex items-center justify-center p-8 lg:p-16 bg-surface">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <h1 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight mb-2">
              {activeTab === 'login' ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-on-surface-variant text-lg">
              {activeTab === 'login'
                ? 'Access your clinical intelligence dashboard.'
                : 'Join the next generation of biotech intelligence.'}
            </p>
          </div>

          {/* Toggle */}
          <div className="flex p-1 bg-surface-container-low rounded-lg mb-8 w-fit">
            <button
              onClick={() => { setActiveTab('login'); setError(''); }}
              className={`px-6 py-2 text-sm font-label font-bold uppercase tracking-widest rounded transition-all ${activeTab === 'login'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
                }`}
            >
              Login
            </button>
            <button
              onClick={() => { setActiveTab('register'); setError(''); }}
              className={`px-6 py-2 text-sm font-label font-bold uppercase tracking-widest rounded transition-all ${activeTab === 'register'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
                }`}
            >
              Register
            </button>
          </div>

          {error && (
            <div className={`mb-6 p-4 rounded-lg text-sm font-medium ${error.includes('successful')
                ? 'bg-secondary-container/20 text-secondary'
                : 'bg-error-container/20 text-error'
              }`}>
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {activeTab === 'register' && (
              <div className="space-y-2">
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-outline" htmlFor="name">Full Name</label>
                <input
                  className="w-full h-12 px-4 bg-surface-container-highest border-none rounded focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant"
                  id="name"
                  placeholder="John Doe"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="space-y-2">
              <label className="block text-xs font-label font-bold uppercase tracking-widest text-outline" htmlFor="email">Work Email</label>
              <input
                className="w-full h-12 px-4 bg-surface-container-highest border-none rounded focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant"
                id="email"
                placeholder="name@pharmaco.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-outline" htmlFor="password">Password</label>
                {activeTab === 'login' && (
                  <a className="text-xs font-label font-semibold text-primary hover:underline" href="#">Forgot password?</a>
                )}
              </div>
              <div className="relative">
                <input
                  className="w-full h-12 px-4 bg-surface-container-highest border-none rounded focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all"
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
              <div className="flex items-center gap-3 py-2">
                <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" id="remember" type="checkbox" />
                <label className="text-sm text-on-surface-variant font-medium" htmlFor="remember">Keep me authenticated</label>
              </div>
            )}
            <button
              className="w-full h-14 bg-gradient-to-br from-primary to-secondary text-on-primary font-label font-bold uppercase tracking-widest rounded-lg biological-glow hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Processing...' : activeTab === 'login' ? 'Enter Workspace' : 'Create Account'}
              {!loading && <span className="material-symbols-outlined">arrow_forward</span>}
            </button>
          </form>

          {/* Social/SSO Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant opacity-20"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest font-label font-bold bg-surface px-4 text-outline">
              Enterprise SSO
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 h-12 bg-surface-container-high border-none rounded font-label font-semibold text-sm hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined text-primary">account_circle</span>
              Okta
            </button>
            <button className="flex items-center justify-center gap-2 h-12 bg-surface-container-high border-none rounded font-label font-semibold text-sm hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined text-primary">shield</span>
              Azure AD
            </button>
          </div>
        </div>
      </section>

      {/* Right Side: Abstract Biotech Graphic */}
      <section className="hidden md:block md:w-[55%] relative overflow-hidden bg-surface-container-low">
        {/* Background Image */}
        <img
          alt="Microscopic abstract biotech visualization"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQvD1DzTWFy-n3gGZcaTghbBVEiMoxBDCzBWie8IfrGawAHK456GzGUBwIF_tsgn4y7y5PDwu5nPJf914dbw5lV46iB3vYQbKParBFN-D95eJmr_LMx_cljiSDHJ_whtGu5b9DCTU3r9JJqCYpA_aNIaXIWMfltxihSSuxq-zn6FxyWkBnvGgxtA9yLQfWQ-EZKAtpfAhTxoF9vJeAfZj06_ZTKCv0emjJng4PpeIVtAe0o_Q9rczjFAVteACvrK_nplb__uAUHvP1"
        />
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/10"></div>
        {/* Content Over Glass */}
        <div className="absolute inset-0 flex flex-col items-start justify-end p-16 lg:p-24 z-10">
          <div className="bg-white/10 clinical-blur p-8 rounded-xl border border-white/20 biological-glow max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined text-2xl">biotech</span>
              </div>
              <div className="h-[2px] w-12 bg-secondary-container/50"></div>
              <span className="text-xs font-label font-bold uppercase tracking-[0.2em] text-white">Clinical Insights v4.2</span>
            </div>
            <h2 className="text-4xl font-headline font-extrabold text-white tracking-tight mb-4">Unlocking the molecular blueprint of therapy.</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              PharmaIntel provides real-time access to the Protein Navigator, integrating IP landscapes with clinical trial trajectory analysis for rapid drug discovery.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-2xl font-headline font-bold text-white">45k+</div>
                <div className="text-xs font-label font-bold uppercase tracking-widest text-white/60">Proteins Mapped</div>
              </div>
              <div>
                <div className="text-2xl font-headline font-bold text-white">1.2m</div>
                <div className="text-xs font-label font-bold uppercase tracking-widest text-white/60">Clinical Trials</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginSignup;
