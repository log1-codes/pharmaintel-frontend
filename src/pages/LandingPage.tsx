
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const [demoSuccess, setDemoSuccess] = useState(false);
    const [waitlistSuccess, setWaitlistSuccess] = useState(false);

    const openDemoModal = () => setIsDemoModalOpen(true);
    const closeDemoModal = () => {
        setIsDemoModalOpen(false);
        setDemoSuccess(false);
    };

    const handleDemoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setDemoSuccess(true);
        setTimeout(() => {
            closeDemoModal();
        }, 2000);
    };

    const handleWaitlistSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setWaitlistSuccess(true);
    };

    return (
        <>

            <header id="home" className="hero-bg min-h-screen flex items-center relative overflow-hidden pt-[104px]">
                <div className="absolute inset-0 bg-ink/60"></div>
                <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.1em] text-steel uppercase">
                            <span>AmethIntel</span>
                            <span>·</span>
                            <span>INTELLIGENCE LAYER</span>
                        </div>
                        <div className="w-[48px] h-[1px] bg-accent mt-4 mb-5"></div>
                        <h1 className="font-serif text-[56px] font-normal text-cream leading-[1.1] my-6">
                            Connecting Scientific Signals<br /><em className="font-serif italic text-accent-light">to Support Strategy</em>
                        </h1>
                        <p className="font-sans text-[20px] leading-[1.6] text-mist max-w-[700px] mb-12">
                            AmethIntel is a fast way for in-depth collection of publications, patents, clinical development, regulatory intelligence, investment and business activity, and adjacent scientific landscapes to identify strategic opportunities.
                        </p>
                        <div className="flex flex-wrap gap-5 mt-12">
                            <a href="#waitlist" className="bg-navy hover:bg-navy-mid text-accent border border-accent/30 font-serif px-8 py-4 text-lg flex items-center gap-3 transition-colors">
                                Get Early Access <i className="fas fa-arrow-right"></i>
                            </a>
                            <a href="#about" className="border border-fog/30 hover:border-fog text-fog font-serif px-8 py-4 text-lg flex items-center gap-3 transition-colors">
                                <i className="fas fa-play-circle"></i> Explore Vision
                            </a>
                        </div>
                    </div>
                </div>
            </header>

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

            <section id="about" className="py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 blur-[120px] rounded-full"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="max-w-5xl mb-24">
                        <span className="inline-flex items-center gap-2 px-5 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full text-sm tracking-wide uppercase font-medium">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            About AmethIntel
                        </span>
                        <h2 className="mt-8 text-3xl md:text-5xl leading-[1.2] tracking-tight font-semibold max-w-4xl">
                            <span className="block text-[#ff5b4d] glow-text" style={{ "fontFamily": "'Space Grotesk',sans-serif" }}>Intelligence Layer for Biotech / Pharma</span>
                            <span className="block text-[#ff5b4d] glow-text" style={{ "fontFamily": "'Space Grotesk',sans-serif" }}>and Healthtech Industries</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        <div>
                            <h3 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight" style={{ "fontFamily": "'Space Grotesk',sans-serif" }}>
                                Connected intelligence Showcases Real World Scenario
                            </h3>
                            <div className="space-y-8 text-slate-300 text-lg leading-[1.95]">
                                <p>In drug development, the biggest threats and opportunities often hide at the intersection of multiple signals, while typical analysis gets steered by a few weighted points. AmethIntel was founded with a thesis: true success demands seeing how scientific, competitive, regulatory, commercial, and clinical forces interact — in real time.</p>
                                <p>What if we create a dashboard of various signals – loud and weak – visible on the radar screen at the same time? What if the implications of each signal are available a single click away?</p>
                                <p>Today’s reality of drug development is integrated. A promising clinical trial can be undermined by aggressive fast-followers, the barriers to entry from a good patent portfolio can be weakened by a new development in technology, shifting Big Pharma interest, or changing reimbursement dynamics. Success depends on continuously tracking and projecting the combined impact of these forces on both your program and patient outcomes.</p>
                                <p><b>Our Mission</b> AmethIntel integrates signals from diverse dimensions — scientific, competitive, regulatory, commercial, and clinical — to project their collective effect on drug development programs and, ultimately, patient health. We transform fragmented data into clear, actionable foresight.</p>
                                <p><b>What We Deliver</b></p>
                                <ul className="space-y-4 pl-5">
                                    <li>• Holistic Signal Intelligence: Early detection of emerging fast followers, competitive aggression, licensing & M&A signals from major pharma, patent vulnerabilities, and clinical momentum.</li>
                                    <li>• Predictive Modeling: AI-powered simulations that reveal how multiple signals interact, helping you anticipate risks, quantify opportunities, and model downstream effects on timelines, valuation, and patient benefit.</li>
                                    <li>• Decision-Ready Insights: Visual, scenario-based intelligence built for portfolio strategists, business development teams, and R&D leaders who need clarity in a noisy environment.</li>
                                </ul>
                                <p>Backed by deep, hands-on experience in global pharma R&D and manufacturing operations, AmethIntel brings together rigorous data science with real-world industry judgment. We believe superior intelligence doesn’t just de-risk programs — it fundamentally accelerates the delivery of better medicines to patients.</p>
                                <p>Whether you are steering a biotech or healthtech pipeline, evaluating strategic partnerships, or positioning assets for maximum impact, AmethIntel gives you the edge to see what others miss — and act before they do.</p>

                                <p className="text-white font-semibold flex flex-wrap items-center gap-3">
                                    Ready to see the signals others miss?
                                    <button onClick={openDemoModal} className="text-purple-400 hover:text-purple-300 transition underline underline-offset-4">Request a Demo</button>
                                    <span className="text-slate-500">|</span>
                                    <a href="copy.html" className="text-purple-400 hover:text-purple-300 transition underline underline-offset-4">Explore Our Latest Insights</a>
                                </p>
                            </div>


                            <div id="demoModal" className={`fixed ${isDemoModalOpen ? "flex" : "hidden"} inset-0 bg-black/70 backdrop-blur-sm items-center justify-center z-[999] px-6`}>
                                <div className="bg-slate-950 border border-white/10 rounded-[32px] p-10 max-w-lg w-full relative">
                                    <button onClick={closeDemoModal} className="absolute top-5 right-5 text-slate-400 hover:text-white text-xl"><i className="fas fa-times"></i></button>
                                    <h2 className="text-3xl font-semibold mb-4" style={{ "fontFamily": "'Space Grotesk',sans-serif" }}>Request a Demo</h2>
                                    <p className="text-slate-400 mb-8 leading-relaxed">Fill out the form below and our team will reach out to you.</p>
                                    <form id="demoForm" onSubmit={handleDemoSubmit} className="space-y-5">
                                        <input type="text" id="demoName" placeholder="Full Name" required className="w-full bg-slate-900 border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-purple-400" />
                                        <input type="email" id="demoEmail" placeholder="your@company.com" required className="w-full bg-slate-900 border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-purple-400" />
                                        <input type="text" id="demoCompany" placeholder="Company / Organization" required className="w-full bg-slate-900 border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-purple-400" />
                                        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold py-4 rounded-2xl">Submit Request</button>
                                    </form>
                                    <p id="demoSuccess" className={`text-green-400 mt-5 font-semibold ${demoSuccess ? "" : "hidden"}`}></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">

                        <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[36px] p-10 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">💎</div>
                                    <h3 className="text-3xl font-semibold" style={{ "fontFamily": "'Space Grotesk',sans-serif" }}>Why AmethIntel?</h3>
                                </div>
                                <div className="space-y-6 text-slate-300 leading-relaxed text-[17px]">
                                    <p>Amethyst is a precious stone, which the Greeks believed prevents from being drunk. Today too much information is intoxicating and suffocating, biotech and healthtech unicorns need an Amethyst to prevent being drunk.</p>
                                    <p>We believe the intel we are aiming will occupy a central space in future of biotech and healthtech, so named the company after Amethyst.</p>
                                    <a href="abou.html" className="text-purple-400 hover:text-purple-300 transition inline-flex items-center gap-2 font-medium">
                                        Click here for full story and Management Team
                                        <span className="text-xl">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[36px] p-10 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">🧬</div>
                                    <h3 className="text-3xl font-semibold" style={{ "fontFamily": "'Space Grotesk',sans-serif" }}>What We Analyze</h3>
                                </div>
                                <div className="space-y-5">
                                    <div className="flex items-start gap-4 border-b border-white/5 pb-5">
                                        <span className="text-white font-semibold text-sm tracking-wide">01</span>
                                        <p className="text-slate-300 leading-relaxed">Scientific publications</p>
                                    </div>
                                    <div className="flex items-start gap-4 border-b border-white/5 pb-5">
                                        <span className="text-white font-semibold text-sm tracking-wide">02</span>
                                        <p className="text-slate-300 leading-relaxed">Patent landscapes and IP positioning</p>
                                    </div>
                                    <div className="flex items-start gap-4 border-b border-white/5 pb-5">
                                        <span className="text-white font-semibold text-sm tracking-wide">03</span>
                                        <p className="text-slate-300 leading-relaxed">White-space opportunities in science and IP</p>
                                    </div>
                                    <div className="flex items-start gap-4 border-b border-white/5 pb-5">
                                        <span className="text-white font-semibold text-sm tracking-wide">04</span>
                                        <p className="text-slate-300 leading-relaxed">Clinical development strategy</p>
                                    </div>
                                    <div className="flex items-start gap-4 border-b border-white/5 pb-5">
                                        <span className="text-white font-semibold text-sm tracking-wide">05</span>
                                        <p className="text-slate-300 leading-relaxed">Clinical evidence and evolving standards of care</p>
                                    </div>
                                    <div className="flex items-start gap-4 border-b border-white/5 pb-5">
                                        <span className="text-white font-semibold text-sm tracking-wide">06</span>
                                        <p className="text-slate-300 leading-relaxed">Competitor pipelines and strategic movement</p>
                                    </div>
                                    <div className="flex items-start gap-4 border-b border-white/5 pb-5">
                                        <span className="text-white font-semibold text-sm tracking-wide">07</span>
                                        <p className="text-slate-300 leading-relaxed">Adjacent scientific and therapeutic knowledge</p>
                                    </div>
                                    <div className="flex items-start gap-4 border-b border-white/5 pb-5">
                                        <span className="text-white font-semibold text-sm tracking-wide">08</span>
                                        <p className="text-slate-300 leading-relaxed">Market research and unmet needs</p>
                                    </div>
                                    <div className="flex items-start gap-4 border-b border-white/5 pb-5">
                                        <span className="text-white font-semibold text-sm tracking-wide">09</span>
                                        <p className="text-slate-300 leading-relaxed">Customer and stakeholder profiles</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="text-white font-semibold text-sm tracking-wide">10</span>
                                        <p className="text-slate-300 leading-relaxed">Investment and licensing trends</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-32 max-w-4xl mx-auto text-center">
                    <div className="mb-16">
                        <span className="text-purple-400 uppercase tracking-[4px] text-sm font-medium">Why This Matters</span>
                        <h3 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight" style={{ "fontFamily": "'Space Grotesk',sans-serif" }}>Strategic advantage increasingly depends on connected intelligence.</h3>
                    </div>
                    <div className="mt-16">
                        <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-10 text-left">
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
                <div className="grid lg:grid-cols-2 gap-12 mt-32">

                    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent p-12">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full"></div>
                        <div className="relative z-10">
                            <span className="text-purple-400 uppercase tracking-[4px] text-sm font-medium">Our Vision</span>
                            <h3 className="text-4xl font-semibold mt-6 mb-8" style={{ "fontFamily": "'Space Grotesk',sans-serif" }}>Seeing opportunities before consensus forms.</h3>
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

                    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-pink-500/10 to-transparent p-12">
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/10 blur-3xl rounded-full"></div>
                        <div className="relative z-10">
                            <span className="text-pink-400 uppercase tracking-[4px] text-sm font-medium">Philosophy</span>
                            <h3 className="text-4xl font-semibold mt-6 mb-8" style={{ "fontFamily": "'Space Grotesk',sans-serif" }}>Intelligence is not information abundance.</h3>
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
            </section>

            <section id="newsletter" className="py-32 bg-slate-900 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-semibold mb-6">Newsletter</h2>
                    <p className="text-slate-400 text-xl max-w-3xl mx-auto">Stay updated with scientific signals, biotech intelligence, emerging opportunities, and strategic insights from AmethIntel.</p>
                </div>
            </section>

            <section id="takestwo" className="py-32 bg-slate-950 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-semibold mb-6">Takes Two</h2>
                        <p className="text-slate-400 text-xl max-w-3xl mx-auto">Perspectives exploring science, strategy, innovation, and biotech ecosystems.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-turning-healthtech-health-impact-akash-m-l-mathur-torcc/" target="_blank" className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">
                            <div className="flex items-center justify-between mb-5"><span className="text-purple-400 text-sm font-semibold">Edition 01</span><i className="fab fa-linkedin text-2xl text-blue-400"></i></div>
                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">Turning HealthTech into Health Impact</h3>
                        </a>
                        <a href="https://www.linkedin.com/pulse/takes-two-tango-turning-healthtech-health-impact-akash-m-l-mathur-torcc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 01</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Turning HealthTech into Health Impact
                            </h3>

                        </a>

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-healthtech-medtech-success-akash-m-l-mathur-eek1c/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 02</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Healthtech / Medtech Success
                            </h3>

                        </a>


                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-3-akash-m-l-mathur-lbsac/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 03</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                The Health Stack and the Story-Market Fit
                            </h3>

                        </a>

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-4-understands-medicine-just-english-mathur-trajc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 04</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                "It Understands Medicine, not Just English"
                            </h3>

                        </a>


                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-5-how-founders-could-have-protected-mathur-ui24c/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 05</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                How Founders Could have Protected Equity - Rise and Stall of a Path AI
                            </h3>

                        </a>


                        <a href="https://www.linkedin.com/pulse/takes-two-tango-edition-6-unlocking-global-markets-playbook-mathur-fmo5c/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 06</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Unlocking Global Markets Playbook!
                            </h3>

                        </a>


                        <a href="https://www.linkedin.com/pulse/takes-two-tango-edition-7-example-mature-ai-akash-m-l-mathur-g9n7c/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 07</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Example of Mature AI Application to Healthtech
                            </h3>

                        </a>

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-edition-8-people-dont-want-medicines-just-mathur-fpqie/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 08</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                “People don’t want medicines. They just want to be healthy.”
                            </h3>

                        </a>


                        <a href="https://www.linkedin.com/pulse/takes-two-tango-edition-9-same-tech-stack-different-tam-mathur-hpy8c/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 09</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Same Tech Stack. Different Applications. Different TAM. Different Valuations
                            </h3>

                        </a>


                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-10-wellness-work-collective-akash-m-l-mathur-cdkuc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 10</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Wellness at Work - a Collective Conversation
                            </h3>

                        </a>


                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-11-when-leaders-speak-solutions-emerge-mathur-ldf2c/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 11</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                When Leaders Speak, Solutions Emerge - Naturally
                            </h3>

                        </a>

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-12-contributing-meeting-global-ortho-mathur-vse2c/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 12</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Contributing to Meeting Global Objectives of Ortho, Physio and Sports Training
                            </h3>

                        </a>


                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-13-knowledge-based-gtm-one-time-akash-m-l-mathur-hnf0c/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 13</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Knowledge Based GTM — One Collaboration at a Time
                            </h3>

                        </a>

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-14-knowledge-fifth-dimension-gtm-mathur-hf6uc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 14</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Knowledge - the Fifth Dimension in Healthtech GTM
                            </h3>

                        </a>

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-15-spray-pray-seed-harvest-dilemma-mathur-e5o3c/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 15</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Spray and Pray or Seed and Harvest - Healthtech Dilemma - Scale Fast or Grow Deep
                            </h3>

                        </a>


                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-16-market-always-talking-you-listening-mathur-han3c/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 16</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                The Market is Always Talking - Are you Listening?
                            </h3>

                        </a>


                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-17-first-50-champions-momentum-ahead-mathur-edvkc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 17</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                The First 50 Champions - Momentum ahead of the Product
                            </h3>

                        </a>


                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-18-market-spoke-now-wants-proof-akash-m-l-mathur-npvtc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 18</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                The Market Spoke. Now It Wants Proof
                            </h3>

                        </a>

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-19-before-survey-much-pilot-akash-m-l-mathur-4n3gc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 19</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Before the Survey, Much Before the Pilot..
                            </h3>

                        </a>

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-20-sooooooo-high-valuation-sales-mathur-uvhoc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 20</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Sooooooo high valuation with no sales?? - There's something fishy!!
                            </h3>

                        </a>

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-edition-21-didnt-lose-court-ran-out-time-mathur-8dvqc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 21</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                They Didn’t Lose in Court. They Ran Out of Time.
                            </h3>

                        </a>

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-22-how-investors-view-patents-insurance-mathur-ale5c/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 22</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                How Investors View Patents - Insurance, not Intellect
                            </h3>

                        </a>


                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-23-what-we-learned-evaluating-27-companies-mathur-8zscc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 23</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                What We Learned Evaluating 27 #HealthTech Companies in 2025
                            </h3>

                        </a>

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-24-lessons-from-companies-we-did-carry-mathur-oelgc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 24</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Lessons from the 24 Companies we did not carry for US GTM in 2025.
                            </h3>

                        </a>


                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-25-top-5-reasons-healthtech-patents-mathur-jgbkc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 25</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                The Top 5 Reasons HealthTech Patents End Up in Court
                            </h3>

                        </a>


                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-26-usfdas-2026-update-what-means-your-mathur-cbcoc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 26</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                USFDA’s 2026 Update — What It Means for Your Product, Disclaimers, and Contracts
                            </h3>

                        </a>


                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-27-credibility-gets-valuations-funding-mathur-qnrhc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 27</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Credibility Gets the Valuations and Funding - What are the Signals that Investors Read?
                            </h3>

                        </a>

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-28-why-your-deck-getting-ghosted-before-mathur-kj7pc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 28</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Why Your Deck is Getting Ghosted
                            </h3>

                        </a>

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-29-why-investors-ghost-before-open-mathur-tyfmc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 29</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Why Investors Ghost Before They Open Your Deck
                            </h3>

                        </a>

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-30-how-use-high-value-logos-advisors-mathur-7kzic/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 30</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                How to Use High Value Logos and Advisors and Why They are Killing Your Pitch
                            </h3>

                        </a>

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-edition-31-stealth-mode-why-we-backed-mathur-2cpoc/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 31</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Why We backed one (Even Though we agree Founders carry a Company)
                            </h3>

                        </a>

                        <a href="https://www.linkedin.com/pulse/takes-two-tango-ed-32-stealth-mode-bet-why-we-backed-mental-mathur-roxic/"
                            target="_blank"
                            className="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-purple-400 text-sm font-semibold">Edition 32</span>
                                <i className="fab fa-linkedin text-2xl text-blue-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
                                Stealth Mode Bet: Why We Backed a Mental Wellbeing Startup
                            </h3>

                        </a>

                    </div>
                </div>
            </section>

            <section id="ceacam5" className="py-32 bg-slate-900 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-semibold mb-6">CEACAM5 Reports</h2>
                    <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-12">Explore strategic intelligence, clinical developments, and scientific signals around CEACAM5.</p>
                    <a href="copy.html" className="inline-block bg-white/5 border border-white/10 hover:border-purple-500 transition rounded-3xl px-10 py-8 text-left max-w-xl w-full hover:-translate-y-2">
                        <h3 className="text-2xl font-semibold text-white mb-2">Open CEACAM5 Dashboard</h3>
                        <p className="text-slate-400">Click to explore full CEACAM5 intelligence reports, clinical data, and analysis.</p>
                    </a>
                </div>
            </section>

            <section id="upcoming" className="py-32 bg-slate-950 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-semibold mb-6">Upcoming Reports</h2>
                    <p className="text-slate-400 text-xl max-w-3xl mx-auto">Discover upcoming intelligence reports and future biotech opportunity landscapes.</p>
                </div>
            </section>

            <section id="waitlist" className="py-24 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-t border-b border-purple-500/20">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-5xl font-semibold mb-6">Be among the first to experience the future of biotech intelligence</h2>
                    <p className="text-xl text-slate-300 mb-10">Join a select group of biotech innovators getting early access to AmethIntel.</p>
                    <form id="waitlistForm" onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <input type="email" id="email" placeholder="your@company.com" required className="flex-1 bg-slate-900 border border-white/20 rounded-3xl px-6 py-5 outline-none focus:border-purple-400" />
                            <button type="submit" className="btn bg-white text-slate-900 font-semibold px-10 rounded-3xl hover:bg-purple-100">Join Waitlist</button>
                        </div>
                    </form>
                </div>
                <p id="successMessage" className={`text-green-400 mt-5 text-lg font-semibold text-left sm:text-center w-full ${waitlistSuccess ? "" : "hidden"}`}>{waitlistSuccess ? "Successfully joined the waitlist!" : ""}</p>
            </section>







        </>
    );
};

export default LandingPage;
