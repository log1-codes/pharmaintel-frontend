import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Takes Two data
const takesTwoData = [
  { edition: '01', title: 'Turning HealthTech into Health Impact', url: 'https://www.linkedin.com/pulse/takes-two-tango-turning-healthtech-health-impact-akash-m-l-mathur-torcc/' },
  { edition: '02', title: 'Healthtech / Medtech Success', url: 'https://www.linkedin.com/pulse/takes-two-tango-healthtech-medtech-success-akash-m-l-mathur-eek1c/' },
  { edition: '03', title: 'The Health Stack and the Story-Market Fit', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-3-akash-m-l-mathur-lbsac/' },
  { edition: '04', title: '"It Understands Medicine, not Just English"', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-4-understands-medicine-just-english-mathur-trajc/' },
  { edition: '05', title: 'How Founders Could have Protected Equity - Rise and Stall of a Path AI', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-5-how-founders-could-have-protected-mathur-ui24c/' },
  { edition: '06', title: 'Unlocking Global Markets Playbook!', url: 'https://www.linkedin.com/pulse/takes-two-tango-edition-6-unlocking-global-markets-playbook-mathur-fmo5c/' },
  { edition: '07', title: 'Example of Mature AI Application to Healthtech', url: 'https://www.linkedin.com/pulse/takes-two-tango-edition-7-example-mature-ai-akash-m-l-mathur-g9n7c/' },
  { edition: '08', title: '\u201cPeople don\u2019t want medicines. They just want to be healthy.\u201d', url: 'https://www.linkedin.com/pulse/takes-two-tango-edition-8-people-dont-want-medicines-just-mathur-fpqie/' },
  { edition: '09', title: 'Same Tech Stack. Different Applications. Different TAM. Different Valuations', url: 'https://www.linkedin.com/pulse/takes-two-tango-edition-9-same-tech-stack-different-tam-mathur-hpy8c/' },
  { edition: '10', title: 'Wellness at Work - a Collective Conversation', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-10-wellness-work-collective-akash-m-l-mathur-cdkuc/' },
  { edition: '11', title: 'When Leaders Speak, Solutions Emerge - Naturally', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-11-when-leaders-speak-solutions-emerge-mathur-ldf2c/' },
  { edition: '12', title: 'Contributing to Meeting Global Objectives of Ortho, Physio and Sports Training', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-12-contributing-meeting-global-ortho-mathur-vse2c/' },
  { edition: '13', title: 'Knowledge Based GTM \u2014 One Collaboration at a Time', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-13-knowledge-based-gtm-one-time-akash-m-l-mathur-hnf0c/' },
  { edition: '14', title: 'Knowledge - the Fifth Dimension in Healthtech GTM', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-14-knowledge-fifth-dimension-gtm-mathur-hf6uc/' },
  { edition: '15', title: 'Spray and Pray or Seed and Harvest - Healthtech Dilemma - Scale Fast or Grow Deep', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-15-spray-pray-seed-harvest-dilemma-mathur-e5o3c/' },
  { edition: '16', title: 'The Market is Always Talking - Are you Listening?', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-16-market-always-talking-you-listening-mathur-han3c/' },
  { edition: '17', title: 'The First 50 Champions - Momentum ahead of the Product', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-17-first-50-champions-momentum-ahead-mathur-edvkc/' },
  { edition: '18', title: 'The Market Spoke. Now It Wants Proof', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-18-market-spoke-now-wants-proof-akash-m-l-mathur-npvtc/' },
  { edition: '19', title: 'Before the Survey, Much Before the Pilot..', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-19-before-survey-much-pilot-akash-m-l-mathur-4n3gc/' },
  { edition: '20', title: 'Sooooooo high valuation with no sales?? - There\'s something fishy!!', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-20-sooooooo-high-valuation-sales-mathur-uvhoc/' },
  { edition: '21', title: 'They Didn\'t Lose in Court. They Ran Out of Time.', url: 'https://www.linkedin.com/pulse/takes-two-tango-edition-21-didnt-lose-court-ran-out-time-mathur-8dvqc/' },
  { edition: '22', title: 'How Investors View Patents - Insurance, not Intellect', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-22-how-investors-view-patents-insurance-mathur-ale5c/' },
  { edition: '23', title: 'What We Learned Evaluating 27 #HealthTech Companies in 2025', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-23-what-we-learned-evaluating-27-companies-mathur-8zscc/' },
  { edition: '24', title: 'Lessons from the 24 Companies we did not carry for US GTM in 2025.', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-24-lessons-from-companies-we-did-carry-mathur-oelgc/' },
  { edition: '25', title: 'The Top 5 Reasons HealthTech Patents End Up in Court', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-25-top-5-reasons-healthtech-patents-mathur-jgbkc/' },
  { edition: '26', title: 'USFDA\'s 2026 Update \u2014 What It Means for Your Product, Disclaimers, and Contracts', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-26-usfdas-2026-update-what-means-your-mathur-cbcoc/' },
  { edition: '27', title: 'Credibility Gets the Valuations and Funding - What are the Signals that Investors Read?', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-27-credibility-gets-valuations-funding-mathur-qnrhc/' },
  { edition: '28', title: 'Why Your Deck is Getting Ghosted', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-28-why-your-deck-getting-ghosted-before-mathur-kj7pc/' },
  { edition: '29', title: 'Why Investors Ghost Before They Open Your Deck', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-29-why-investors-ghost-before-open-mathur-tyfmc/' },
  { edition: '30', title: 'How to Use High Value Logos and Advisors and Why They are Killing Your Pitch', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-30-how-use-high-value-logos-advisors-mathur-7kzic/' },
  { edition: '31', title: 'Why We backed one (Even Though we agree Founders carry a Company)', url: 'https://www.linkedin.com/pulse/takes-two-tango-edition-31-stealth-mode-why-we-backed-mathur-2cpoc/' },
  { edition: '32', title: 'Stealth Mode Bet: Why We Backed a Mental Wellbeing Startup', url: 'https://www.linkedin.com/pulse/takes-two-tango-ed-32-stealth-mode-bet-why-we-backed-mental-mathur-roxic/' },
];

// What We Analyze items
const analyzeItems = [
  'Scientific publications',
  'Patent landscapes and IP positioning',
  'White-space opportunities in science and IP',
  'Clinical development strategy',
  'Clinical evidence and evolving standards of care',
  'Competitor pipelines and strategic movement',
  'Adjacent scientific and therapeutic knowledge',
  'Market research and unmet needs',
  'Customer and stakeholder profiles',
  'Investment and licensing trends',
];

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoName, setDemoName] = useState('');
  const [demoEmail, setDemoEmail] = useState('');
  const [demoCompany, setDemoCompany] = useState('');
  const [demoSuccess, setDemoSuccess] = useState('');
  const [navDropdownOpen, setNavDropdownOpen] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsLoading(true);
    setTimeout(() => {
      setMessage('Successfully joined the waitlist!');
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoName.trim() || !demoEmail.trim() || !demoCompany.trim()) return;
    setDemoSuccess('Demo request submitted successfully!');
    setTimeout(() => {
      setShowDemoModal(false);
      setDemoName('');
      setDemoEmail('');
      setDemoCompany('');
      setDemoSuccess('');
    }, 1500);
  };

  const handleNavToReport = () => {
    navigate('/ceacam5');
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ========== NAVBAR ========== */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="font-semibold tracking-tight text-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AmethIntel</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#newsletter" className="nav-link">Newsletter</a>
            <a href="#takestwo" className="nav-link">Takes Two</a>

            {/* Reports Dropdown */}
            <div
              className="relative dropdown"
              onMouseEnter={() => setNavDropdownOpen(true)}
              onMouseLeave={() => setNavDropdownOpen(false)}
            >
              <button className="nav-link flex items-center gap-2 text-slate-300 hover:text-white">
                Reports
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              {navDropdownOpen && (
                <div className="absolute top-full left-0 mt-4 w-56 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl overflow-hidden z-50">
                  <button onClick={handleNavToReport} className="block w-full text-left px-5 py-4 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition">Ceacam5</button>
                  <a href="#upcoming" className="block px-5 py-4 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition border-t border-white/5">Upcoming</a>
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleNavToReport}
              className="btn px-6 py-3 text-sm font-semibold rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-lg shadow-purple-500/20 inline-flex flex-col items-center justify-center leading-tight text-center"
            >
              <span className="text-xs font-medium opacity-90">CEACAM5 Report is Out</span>
              <span className="text-sm font-bold">Click to View</span>
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('waitlist');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn px-6 py-3 text-sm font-semibold rounded-2xl border border-white/20 hover:border-purple-400 inline-flex items-center justify-center"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <header id="home" className="hero-bg min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pt-24">
          <div className="max-w-2xl">
            <h1 className="hero-title text-[34px] md:text-[56px] leading-[1.1] font-semibold tracking-tight mb-8">
              <span className="block text-[#ff5b4d] glow-text">Connecting Scientific Signals</span>
              <span className="block text-[#ff5b4d] glow-text">to Support Strategy</span>
            </h1>
            <p className="hero-description text-[15px] md:text-[20px] text-slate-200 leading-relaxed max-w-2xl">
              AmethIntel is a fast way for in-depth collection of publications, patents, clinical development, regulatory intelligence, investment and business activity, and adjacent scientific landscapes to identify strategic opportunities.
            </p>
            <div className="hero-buttons flex flex-wrap gap-5 mt-12">
              <a
                href="#waitlist"
                className="btn px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-3xl text-lg flex items-center gap-3"
                onClick={(e) => { e.preventDefault(); document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Get Early Access <i className="fas fa-arrow-right"></i>
              </a>
              <a
                href="#about"
                className="btn px-8 py-4 border border-white/30 hover:border-white rounded-3xl text-lg flex items-center gap-3"
                onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                <i className="fas fa-play-circle"></i> Explore Vision
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ========== VALUE PROP ========== */}
      <section id="platform" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card rounded-3xl p-8">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-3xl">🧠</div>
              <h3 className="text-2xl font-semibold mb-4">Interconnected Intelligence</h3>
              <p className="text-slate-400 leading-relaxed">See how every patent, paper, and trial connects to form a living knowledge graph of your therapeutic area.</p>
            </div>
            <div className="feature-card rounded-3xl p-8">
              <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 text-3xl">🔍</div>
              <h3 className="text-2xl font-semibold mb-4">White Space Discovery</h3>
              <p className="text-slate-400 leading-relaxed">Uncover hidden opportunities and emerging scientific frontiers before your competitors.</p>
            </div>
            <div className="feature-card rounded-3xl p-8">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-3xl">⚡</div>
              <h3 className="text-2xl font-semibold mb-4">Strategic Clarity</h3>
              <p className="text-slate-400 leading-relaxed">Turn complex biotech data into actionable intelligence for portfolio and strategy decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section id="about" className="py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* About Header */}
          <div className="max-w-5xl mb-24">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full text-sm tracking-wide uppercase font-medium">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              About AmethIntel
            </span>
            <h2 className="mt-8 text-3xl md:text-5xl leading-[1.2] tracking-tight font-semibold max-w-4xl">
              <span className="block text-[#ff5b4d] glow-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Intelligence Layer for Biotech / Pharma</span>
              <span className="block text-[#ff5b4d] glow-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>and Healthtech Industries</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT SIDE */}
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Connected intelligence Showcases Real World Scenario
              </h3>
              <div className="space-y-8 text-slate-300 text-lg leading-[1.95]">
                <p>In drug development, the biggest threats and opportunities often hide at the intersection of multiple signals, while typical analysis gets steered by a few weighted points. AmethIntel was founded with a thesis: true success demands seeing how scientific, competitive, regulatory, commercial, and clinical forces interact — in real time.</p>
                <p>What if we create a dashboard of various signals – loud and weak – visible on the radar screen at the same time? What if the implications of each signal are available a single click away?</p>
                <p>Today's reality of drug development is integrated. A promising clinical trial can be undermined by aggressive fast-followers, the barriers to entry from a good patent portfolio can be weakened by a new development in technology, shifting Big Pharma interest, or changing reimbursement dynamics. Success depends on continuously tracking and projecting the combined impact of these forces on both your program and patient outcomes.</p>
                <p><b>Our Mission</b> AmethIntel integrates signals from diverse dimensions — scientific, competitive, regulatory, commercial, and clinical — to project their collective effect on drug development programs and, ultimately, patient health. We transform fragmented data into clear, actionable foresight.</p>
                <p><b>What We Deliver</b></p>
                <ul className="space-y-4 pl-5">
                  <li>• Holistic Signal Intelligence: Early detection of emerging fast followers, competitive aggression, licensing &amp; M&amp;A signals from major pharma, patent vulnerabilities, and clinical momentum.</li>
                  <li>• Predictive Modeling: AI-powered simulations that reveal how multiple signals interact, helping you anticipate risks, quantify opportunities, and model downstream effects on timelines, valuation, and patient benefit.</li>
                  <li>• Decision-Ready Insights: Visual, scenario-based intelligence built for portfolio strategists, business development teams, and R&amp;D leaders who need clarity in a noisy environment.</li>
                </ul>
                <p>Backed by deep, hands-on experience in global pharma R&amp;D and manufacturing operations, AmethIntel brings together rigorous data science with real-world industry judgment. We believe superior intelligence doesn't just de-risk programs — it fundamentally accelerates the delivery of better medicines to patients.</p>
                <p>Whether you are steering a biotech or healthtech pipeline, evaluating strategic partnerships, or positioning assets for maximum impact, AmethIntel gives you the edge to see what others miss — and act before they do.</p>

                <p className="text-white font-semibold flex flex-wrap items-center gap-3">
                  Ready to see the signals others miss?
                  <button onClick={() => setShowDemoModal(true)} className="text-purple-400 hover:text-purple-300 transition underline underline-offset-4">Request a Demo</button>
                  <span className="text-slate-500">|</span>
                  <button onClick={handleNavToReport} className="text-purple-400 hover:text-purple-300 transition underline underline-offset-4">Explore Our Latest Insights</button>
                </p>
              </div>

              {/* DEMO MODAL */}
              {showDemoModal && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] px-6">
                  <div className="bg-slate-950 border border-white/10 rounded-[32px] p-10 max-w-lg w-full relative">
                    <button onClick={() => { setShowDemoModal(false); setDemoSuccess(''); }} className="absolute top-5 right-5 text-slate-400 hover:text-white text-xl">
                      <i className="fas fa-times"></i>
                    </button>
                    <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Request a Demo</h2>
                    <p className="text-slate-400 mb-8 leading-relaxed">Fill out the form below and our team will reach out to you.</p>
                    <form onSubmit={handleDemoSubmit} className="space-y-5">
                      <input type="text" value={demoName} onChange={(e) => setDemoName(e.target.value)} placeholder="Full Name" required className="w-full bg-slate-900 border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-purple-400" />
                      <input type="email" value={demoEmail} onChange={(e) => setDemoEmail(e.target.value)} placeholder="your@company.com" required className="w-full bg-slate-900 border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-purple-400" />
                      <input type="text" value={demoCompany} onChange={(e) => setDemoCompany(e.target.value)} placeholder="Company / Organization" required className="w-full bg-slate-900 border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-purple-400" />
                      <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold py-4 rounded-2xl">Submit Request</button>
                    </form>
                    {demoSuccess && <p className="text-green-400 mt-5 font-semibold">{demoSuccess}</p>}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-8">
              {/* Why AmethIntel Box */}
              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[36px] p-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">💎</div>
                    <h3 className="text-3xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Why AmethIntel?</h3>
                  </div>
                  <div className="space-y-6 text-slate-300 leading-relaxed text-[17px]">
                    <p>Amethyst is a precious stone, which the Greeks believed prevents from being drunk. Today too much information is intoxicating and suffocating, biotech and healthtech unicorns need an Amethyst to prevent being drunk.</p>
                    <p>We believe the intel we are aiming will occupy a central space in future of biotech and healthtech, so named the company after Amethyst.</p>
                    <a href="#about" className="text-purple-400 hover:text-purple-300 transition inline-flex items-center gap-2 font-medium">
                      Click here for full story and Management Team
                      <span className="text-xl">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* What We Analyze Box */}
              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[36px] p-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">🧬</div>
                    <h3 className="text-3xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>What We Analyze</h3>
                  </div>
                  <div className="space-y-5">
                    {analyzeItems.map((item, idx) => (
                      <div key={idx} className={`flex items-start gap-4 ${idx < analyzeItems.length - 1 ? 'border-b border-white/5 pb-5' : ''}`}>
                        <span className="text-white font-semibold text-sm tracking-wide">{String(idx + 1).padStart(2, '0')}</span>
                        <p className="text-slate-300 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WHY THIS MATTERS */}
          <div className="mt-32">
            <div className="max-w-5xl">
              <span className="text-purple-400 uppercase tracking-[4px] text-sm font-medium">Why This Matters</span>
              <h3 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Strategic advantage increasingly depends on connected intelligence.</h3>
            </div>
            <div className="mt-16">
              <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-10">
                <p className="text-slate-300 text-lg leading-[2] mb-8">Increasingly, business valuation in biotech and healthtech will depend not only on scientific novelty, but on the ability to demonstrate strategic positioning grounded in evidence.</p>
                <p className="text-slate-300 text-lg mb-8">This includes understanding:</p>
                <ul className="space-y-5 text-slate-300 text-lg leading-relaxed">
                  <li>• whether a therapeutic area is overcrowded or underexplored</li>
                  <li>• where scientific momentum is accelerating</li>
                  <li>• how adjacent discoveries may reshape markets</li>
                  <li>• which competitors are converging toward similar targets</li>
                  <li>• how regulatory pathways are evolving</li>
                  <li>• where meaningful differentiation still exists</li>
                </ul>
                <div className="mt-10 space-y-8">
                  <p className="text-slate-300 text-lg leading-[2]">In this environment, isolated datasets are no longer sufficient.</p>
                  <p className="text-slate-300 text-lg leading-[2]">Organizations will require integrated intelligence systems capable of synthesizing scientific, clinical, regulatory, market, and investment signals together.</p>
                </div>
              </div>
            </div>
          </div>

          {/* VISION + PHILOSOPHY */}
          <div className="grid lg:grid-cols-2 gap-12 mt-32">
            {/* Vision */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent p-12">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full"></div>
              <div className="relative z-10">
                <span className="text-purple-400 uppercase tracking-[4px] text-sm font-medium">Our Vision</span>
                <h3 className="text-4xl font-semibold mt-6 mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Seeing opportunities before consensus forms.</h3>
                <div className="space-y-6 text-slate-300 text-lg leading-[1.9]">
                  <p>We believe the future belongs to organizations that can:</p>
                  <ul className="space-y-4">
                    <li>• detect weak signals early</li>
                    <li>• identify non-obvious connections</li>
                    <li>• understand emerging scientific gravity</li>
                    <li>• make grounded strategic decisions before consensus forms</li>
                  </ul>
                  <p>AmethIntel is being built to support this transition.</p>
                  <p>Our long-term vision is to create an institutional-grade intelligence layer for modern biotech and healthtech strategy.</p>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-pink-500/10 to-transparent p-12">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/10 blur-3xl rounded-full"></div>
              <div className="relative z-10">
                <span className="text-pink-400 uppercase tracking-[4px] text-sm font-medium">Philosophy</span>
                <h3 className="text-4xl font-semibold mt-6 mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Intelligence is not information abundance.</h3>
                <div className="space-y-6 text-slate-300 text-lg leading-[1.9]">
                  <p>The future of biomedical innovation will not be shaped by information abundance alone.</p>
                  <p>It will be shaped by the ability to:</p>
                  <ul className="space-y-4">
                    <li>• interpret relationships</li>
                    <li>• understand context</li>
                    <li>• recognize white spaces</li>
                    <li>• convert fragmented knowledge into strategic insight</li>
                  </ul>
                  <p>AmethIntel exists to help make those connections visible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section id="newsletter" className="py-32 bg-slate-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-semibold mb-6">Newsletter</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">Stay updated with scientific signals, biotech intelligence, emerging opportunities, and strategic insights from AmethIntel.</p>
        </div>
      </section>

      {/* ========== TAKES TWO ========== */}
      <section id="takestwo" className="py-32 bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold mb-6">Takes Two</h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">Perspectives exploring science, strategy, innovation, and biotech ecosystems.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {takesTwoData.map((card) => (
              <a
                key={card.edition}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-purple-400 text-sm font-semibold">Edition {card.edition}</span>
                  <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                </div>
                <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">{card.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CEACAM5 ========== */}
      <section id="ceacam5" className="py-32 bg-slate-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-semibold mb-6">CEACAM5 Reports</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-12">Explore strategic intelligence, clinical developments, and scientific signals around CEACAM5.</p>
          <button
            onClick={handleNavToReport}
            className="inline-block bg-white/5 border border-white/10 hover:border-purple-500 transition rounded-3xl px-10 py-8 text-left max-w-xl w-full hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">Open CEACAM5 Dashboard</h3>
            <p className="text-slate-400">Click to explore full CEACAM5 intelligence reports, clinical data, and analysis.</p>
          </button>
        </div>
      </section>

      {/* ========== UPCOMING ========== */}
      <section id="upcoming" className="py-32 bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-semibold mb-6">Upcoming Reports</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">Discover upcoming intelligence reports and future biotech opportunity landscapes.</p>
        </div>
      </section>

      {/* ========== WAITLIST ========== */}
      <section id="waitlist" className="py-24 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-t border-b border-purple-500/20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-semibold mb-6">Be among the first to experience the future of biotech intelligence</h2>
          <p className="text-xl text-slate-300 mb-10">Join a select group of biotech innovators getting early access to AmethIntel.</p>
          <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@company.com"
                required
                className="flex-1 bg-slate-900 border border-white/20 rounded-3xl px-6 py-5 outline-none focus:border-purple-400"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="btn bg-white text-slate-900 font-semibold px-10 rounded-3xl hover:bg-purple-100 py-5 disabled:opacity-70"
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
          </form>
          {message && (
            <p className="text-green-400 mt-5 text-lg font-semibold">{message}</p>
          )}
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-slate-950 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="font-semibold tracking-tight text-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AmethIntel</span>
              </div>
              <p className="text-slate-500 text-sm max-w-sm leading-relaxed">Interconnected biotech intelligence platform connecting scientific, clinical, regulatory, and strategic signals.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              <a href="#home" className="hover:text-white transition">Home</a>
              <a href="#about" className="hover:text-white transition">About Us</a>
              <a href="#newsletter" className="hover:text-white transition">Newsletter</a>
              <a href="#takestwo" className="hover:text-white transition">Takes Two</a>
              <a href="#ceacam5" className="hover:text-white transition">CEACAM5</a>
              <a href="#upcoming" className="hover:text-white transition">Upcoming</a>
              <a href="#contact" className="hover:text-white transition">Contact Us</a>
            </div>
          </div>

          <div id="contact" className="mt-14 border-t border-white/10 pt-10 flex flex-col items-center text-center">
            <h3 className="text-3xl font-semibold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Contact Us</h3>
            <p className="text-slate-400 mb-8 max-w-2xl leading-relaxed">For partnerships, strategic collaborations, biotech intelligence inquiries, or early platform access, feel free to reach out.</p>
            <div className="flex flex-col gap-5">
              <a href="mailto:akash@amethintel.com" className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-purple-500 transition rounded-2xl px-8 py-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"><i className="fas fa-envelope text-white"></i></div>
                <div className="text-left">
                  <p className="text-sm text-slate-400">Business / Platform Queries</p>
                  <p className="text-white font-semibold group-hover:text-purple-300 transition">akash@amethintel.com</p>
                </div>
              </a>
              <a href="mailto:akash.m@hb-022.com" className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-purple-500 transition rounded-2xl px-8 py-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"><i className="fas fa-envelope text-white"></i></div>
                <div className="text-left">
                  <p className="text-sm text-slate-400">Direct Contact</p>
                  <p className="text-white font-semibold group-hover:text-purple-300 transition">akash.m@hb-022.com</p>
                </div>
              </a>
            </div>
            <div className="mt-12 text-sm text-slate-500">© {new Date().getFullYear()} AmethIntel. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
