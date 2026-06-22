export const testHomeContent = `
<!-- BLACKBOXAI overlay + watermark -->
    <div id="bbai-overlay" class="bbai-overlay" aria-hidden="true"></div>
    <div id="bbai-watermark" class="bbai-watermark" aria-hidden="true"></div>

    <!-- NAVBAR -->

    <nav class="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <span class="text-white font-bold text-xl">A</span>
                </div>
                <span class="font-semibold tracking-tight text-2xl" style="font-family:'Space Grotesk',sans-serif;">AmethIntel</span>
            </div>

            <!-- Nav -->
            <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                <a href="#home" class="nav-link">Home</a>
                <a href="#about" class="nav-link">About Us</a>
                <a href="#newsletter" class="nav-link">Newsletter</a>
                <a href="#takestwo" class="nav-link">Takes Two</a>

                <!-- Reports Dropdown -->
                <div class="relative dropdown">
                    <button class="nav-link flex items-center gap-2 text-slate-300 hover:text-white">
                        Reports
                        <i class="fas fa-chevron-down text-xs"></i>
                    </button>
                    <div class="dropdown-menu absolute top-full left-0 mt-4 w-56 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl overflow-hidden z-50">
                        <a href="copy.html" class="block px-5 py-4 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition">Ceacam5</a>
                        <a href="#upcoming" class="block px-5 py-4 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition border-t border-white/5">Upcoming</a>
                    </div>
                </div>
            </div>

            <!-- Buttons -->
            <div class="flex items-center gap-4">
                <a href="copy.html" class="btn px-6 py-3 text-sm font-semibold rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-lg shadow-purple-500/20 inline-flex flex-col items-center justify-center leading-tight text-center">
                    <span class="text-xs font-medium opacity-90">CEACAM5 Report is Out</span>
                    <span class="text-sm font-bold">Click to View</span>
                </a>
                <a href="#waitlist" class="btn px-6 py-3 text-sm font-semibold rounded-2xl border border-white/20 hover:border-purple-400 inline-flex items-center justify-center">
                    Join Waitlist
                </a>
            </div>
        </div>
    </nav>

    <!-- HERO SECTION -->
    <header id="home" class="hero-bg min-h-screen flex items-center relative overflow-hidden">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pt-24">
            <div class="max-w-2xl">
                <h1 class="hero-title text-[34px] md:text-[56px] leading-[1.1] font-semibold tracking-tight mb-8">
                    <span class="block text-[#ff5b4d] glow-text">Connecting Scientific Signals</span>
                    <span class="block text-[#ff5b4d] glow-text">to Support Strategy</span>
                </h1>
                <p class="hero-description text-[15px] md:text-[20px] text-slate-200 leading-relaxed max-w-2xl">
                    AmethIntel is a fast way for in-depth collection of publications, patents, clinical development, regulatory intelligence, investment and business activity, and adjacent scientific landscapes to identify strategic opportunities.
                </p>
                <div class="hero-buttons flex flex-wrap gap-5 mt-12">
                    <a href="#waitlist" class="btn px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-3xl text-lg flex items-center gap-3">
                        Get Early Access <i class="fas fa-arrow-right"></i>
                    </a>
                    <a href="#about" class="btn px-8 py-4 border border-white/30 hover:border-white rounded-3xl text-lg flex items-center gap-3">
                        <i class="fas fa-play-circle"></i> Explore Vision
                    </a>
                </div>
            </div>
        </div>
    </header>

    <!-- VALUE PROP -->
    <section id="platform" class="py-24 bg-slate-900">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid md:grid-cols-3 gap-8">
                <div class="feature-card rounded-3xl p-8">
                    <div class="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-3xl">🧠</div>
                    <h3 class="text-2xl font-semibold mb-4">Interconnected Intelligence</h3>
                    <p class="text-slate-400 leading-relaxed">See how every patent, paper, and trial connects to form a living knowledge graph of your therapeutic area.</p>
                </div>
                <div class="feature-card rounded-3xl p-8">
                    <div class="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 text-3xl">🔍</div>
                    <h3 class="text-2xl font-semibold mb-4">White Space Discovery</h3>
                    <p class="text-slate-400 leading-relaxed">Uncover hidden opportunities and emerging scientific frontiers before your competitors.</p>
                </div>
                <div class="feature-card rounded-3xl p-8">
                    <div class="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-3xl">⚡</div>
                    <h3 class="text-2xl font-semibold mb-4">Strategic Clarity</h3>
                    <p class="text-slate-400 leading-relaxed">Turn complex biotech data into actionable intelligence for portfolio and strategy decisions.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-white/10 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full"></div>
        <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 blur-[120px] rounded-full"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="max-w-5xl mb-24">
                <span class="inline-flex items-center gap-2 px-5 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full text-sm tracking-wide uppercase font-medium">
                    <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                    About AmethIntel
                </span>
                <h2 class="mt-8 text-3xl md:text-5xl leading-[1.2] tracking-tight font-semibold max-w-4xl">
                    <span class="block text-[#ff5b4d] glow-text" style="font-family:'Space Grotesk',sans-serif;">Intelligence Layer for Biotech / Pharma</span>
                    <span class="block text-[#ff5b4d] glow-text" style="font-family:'Space Grotesk',sans-serif;">and Healthtech Industries</span>
                </h2>
            </div>

            <div class="grid lg:grid-cols-2 gap-16 items-start">
                <!-- LEFT SIDE -->
                <div>
                    <h3 class="text-3xl md:text-4xl font-semibold mb-8 leading-tight" style="font-family:'Space Grotesk',sans-serif;">
                        Connected intelligence Showcases Real World Scenario
                    </h3>
                    <div class="space-y-8 text-slate-300 text-lg leading-[1.95]">
                        <p>In drug development, the biggest threats and opportunities often hide at the intersection of multiple signals, while typical analysis gets steered by a few weighted points. AmethIntel was founded with a thesis: true success demands seeing how scientific, competitive, regulatory, commercial, and clinical forces interact — in real time.</p>
                        <p>What if we create a dashboard of various signals – loud and weak – visible on the radar screen at the same time? What if the implications of each signal are available a single click away?</p>
                        <p>Today’s reality of drug development is integrated. A promising clinical trial can be undermined by aggressive fast-followers, the barriers to entry from a good patent portfolio can be weakened by a new development in technology, shifting Big Pharma interest, or changing reimbursement dynamics. Success depends on continuously tracking and projecting the combined impact of these forces on both your program and patient outcomes.</p>
                        <p><b>Our Mission</b> AmethIntel integrates signals from diverse dimensions — scientific, competitive, regulatory, commercial, and clinical — to project their collective effect on drug development programs and, ultimately, patient health. We transform fragmented data into clear, actionable foresight.</p>
                        <p><b>What We Deliver</b></p>
                        <ul class="space-y-4 pl-5">
                            <li>• Holistic Signal Intelligence: Early detection of emerging fast followers, competitive aggression, licensing & M&A signals from major pharma, patent vulnerabilities, and clinical momentum.</li>
                            <li>• Predictive Modeling: AI-powered simulations that reveal how multiple signals interact, helping you anticipate risks, quantify opportunities, and model downstream effects on timelines, valuation, and patient benefit.</li>
                            <li>• Decision-Ready Insights: Visual, scenario-based intelligence built for portfolio strategists, business development teams, and R&D leaders who need clarity in a noisy environment.</li>
                        </ul>
                        <p>Backed by deep, hands-on experience in global pharma R&D and manufacturing operations, AmethIntel brings together rigorous data science with real-world industry judgment. We believe superior intelligence doesn’t just de-risk programs — it fundamentally accelerates the delivery of better medicines to patients.</p>
                        <p>Whether you are steering a biotech or healthtech pipeline, evaluating strategic partnerships, or positioning assets for maximum impact, AmethIntel gives you the edge to see what others miss — and act before they do.</p>

                        <p class="text-white font-semibold flex flex-wrap items-center gap-3">
                            Ready to see the signals others miss?
                            <button onclick="openDemoModal()" class="text-purple-400 hover:text-purple-300 transition underline underline-offset-4">Request a Demo</button>
                            <span class="text-slate-500">|</span>
                            <a href="copy.html" class="text-purple-400 hover:text-purple-300 transition underline underline-offset-4">Explore Our Latest Insights</a>
                        </p>
                    </div>

                    <!-- DEMO MODAL -->
                    <div id="demoModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm hidden items-center justify-center z-[999] px-6">
                        <div class="bg-slate-950 border border-white/10 rounded-[32px] p-10 max-w-lg w-full relative">
                            <button onclick="closeDemoModal()" class="absolute top-5 right-5 text-slate-400 hover:text-white text-xl"><i class="fas fa-times"></i></button>
                            <h2 class="text-3xl font-semibold mb-4" style="font-family:'Space Grotesk',sans-serif;">Request a Demo</h2>
                            <p class="text-slate-400 mb-8 leading-relaxed">Fill out the form below and our team will reach out to you.</p>
                            <form id="demoForm" class="space-y-5">
                                <input type="text" id="demoName" placeholder="Full Name" required class="w-full bg-slate-900 border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-purple-400">
                                <input type="email" id="demoEmail" placeholder="your@company.com" required class="w-full bg-slate-900 border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-purple-400">
                                <input type="text" id="demoCompany" placeholder="Company / Organization" required class="w-full bg-slate-900 border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-purple-400">
                                <button type="submit" class="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold py-4 rounded-2xl">Submit Request</button>
                            </form>
                            <p id="demoSuccess" class="text-green-400 mt-5 font-semibold hidden"></p>
                        </div>
                    </div>
                </div>

                <!-- RIGHT SIDE -->
                <div class="space-y-8">
                    <!-- NEW AMETHYST BOX -->
                    <div class="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[36px] p-10 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10"></div>
                        <div class="relative z-10">
                            <div class="flex items-center gap-3 mb-8">
                                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">💎</div>
                                <h3 class="text-3xl font-semibold" style="font-family:'Space Grotesk',sans-serif;">Why AmethIntel?</h3>
                            </div>
                            <div class="space-y-6 text-slate-300 leading-relaxed text-[17px]">
                                <p>Amethyst is a precious stone, which the Greeks believed prevents from being drunk. Today too much information is intoxicating and suffocating, biotech and healthtech unicorns need an Amethyst to prevent being drunk.</p>
                                <p>We believe the intel we are aiming will occupy a central space in future of biotech and healthtech, so named the company after Amethyst.</p>
                                <a href="about.html" class="text-purple-400 hover:text-purple-300 transition inline-flex items-center gap-2 font-medium">
                                    Click here for full story and Management Team 
                                    <span class="text-xl">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- WHAT WE ANALYZE BOX -->
                    <div class="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[36px] p-10 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10"></div>
                        <div class="relative z-10">
                            <div class="flex items-center gap-3 mb-10">
                                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">🧬</div>
                                <h3 class="text-3xl font-semibold" style="font-family:'Space Grotesk',sans-serif;">What We Analyze</h3>
                            </div>
                            <div class="space-y-5">
                                <div class="flex items-start gap-4 border-b border-white/5 pb-5">
                                    <span class="text-white font-semibold text-sm tracking-wide">01</span>
                                    <p class="text-slate-300 leading-relaxed">Scientific publications</p>
                                </div>
                                <div class="flex items-start gap-4 border-b border-white/5 pb-5">
                                    <span class="text-white font-semibold text-sm tracking-wide">02</span>
                                    <p class="text-slate-300 leading-relaxed">Patent landscapes and IP positioning</p>
                                </div>
                                <div class="flex items-start gap-4 border-b border-white/5 pb-5">
                                    <span class="text-white font-semibold text-sm tracking-wide">03</span>
                                    <p class="text-slate-300 leading-relaxed">White-space opportunities in science and IP</p>
                                </div>
                                <div class="flex items-start gap-4 border-b border-white/5 pb-5">
                                    <span class="text-white font-semibold text-sm tracking-wide">04</span>
                                    <p class="text-slate-300 leading-relaxed">Clinical development strategy</p>
                                </div>
                                <div class="flex items-start gap-4 border-b border-white/5 pb-5">
                                    <span class="text-white font-semibold text-sm tracking-wide">05</span>
                                    <p class="text-slate-300 leading-relaxed">Clinical evidence and evolving standards of care</p>
                                </div>
                                <div class="flex items-start gap-4 border-b border-white/5 pb-5">
                                    <span class="text-white font-semibold text-sm tracking-wide">06</span>
                                    <p class="text-slate-300 leading-relaxed">Competitor pipelines and strategic movement</p>
                                </div>
                                <div class="flex items-start gap-4 border-b border-white/5 pb-5">
                                    <span class="text-white font-semibold text-sm tracking-wide">07</span>
                                    <p class="text-slate-300 leading-relaxed">Adjacent scientific and therapeutic knowledge</p>
                                </div>
                                <div class="flex items-start gap-4 border-b border-white/5 pb-5">
                                    <span class="text-white font-semibold text-sm tracking-wide">08</span>
                                    <p class="text-slate-300 leading-relaxed">Market research and unmet needs</p>
                                </div>
                                <div class="flex items-start gap-4 border-b border-white/5 pb-5">
                                    <span class="text-white font-semibold text-sm tracking-wide">09</span>
                                    <p class="text-slate-300 leading-relaxed">Customer and stakeholder profiles</p>
                                </div>
                                <div class="flex items-start gap-4">
                                    <span class="text-white font-semibold text-sm tracking-wide">10</span>
                                    <p class="text-slate-300 leading-relaxed">Investment and licensing trends</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- WHY THIS MATTERS -->
            <div class="mt-32">
                <div class="max-w-5xl">
                    <span class="text-purple-400 uppercase tracking-[4px] text-sm font-medium">Why This Matters</span>
                    <h3 class="mt-6 text-4xl md:text-5xl font-semibold leading-tight" style="font-family:'Space Grotesk',sans-serif;">Strategic advantage increasingly depends on connected intelligence.</h3>
                </div>
                <div class="mt-16">
                    <div class="bg-white/[0.03] border border-white/10 rounded-[32px] p-10">
                        <p class="text-slate-300 text-lg leading-[2] mb-8">Increasingly, business valuation in biotech and healthtech will depend not only on scientific novelty, but on the ability to demonstrate strategic positioning grounded in evidence.</p>
                        <p class="text-slate-300 text-lg mb-8">This includes understanding:</p>
                        <ul class="space-y-5 text-slate-300 text-lg leading-relaxed">
                            <li>• whether a therapeutic area is overcrowded or underexplored</li>
                            <li>• where scientific momentum is accelerating</li>
                            <li>• how adjacent discoveries may reshape markets</li>
                            <li>• which competitors are converging toward similar targets</li>
                            <li>• how regulatory pathways are evolving</li>
                            <li>• where meaningful differentiation still exists</li>
                        </ul>
                        <div class="mt-10 space-y-8">
                            <p class="text-slate-300 text-lg leading-[2]">In this environment, isolated datasets are no longer sufficient.</p>
                            <p class="text-slate-300 text-lg leading-[2]">Organizations will require integrated intelligence systems capable of synthesizing scientific, clinical, regulatory, market, and investment signals together.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- VISION + PHILOSOPHY -->
            <div class="grid lg:grid-cols-2 gap-12 mt-32">
                <!-- Vision -->
                <div class="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent p-12">
                    <div class="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full"></div>
                    <div class="relative z-10">
                        <span class="text-purple-400 uppercase tracking-[4px] text-sm font-medium">Our Vision</span>
                        <h3 class="text-4xl font-semibold mt-6 mb-8" style="font-family:'Space Grotesk',sans-serif;">Seeing opportunities before consensus forms.</h3>
                        <div class="space-y-6 text-slate-300 text-lg leading-[1.9]">
                            <p>We believe the future belongs to organizations that can:</p>
                            <ul class="space-y-4">
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

                <!-- Philosophy -->
                <div class="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-pink-500/10 to-transparent p-12">
                    <div class="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/10 blur-3xl rounded-full"></div>
                    <div class="relative z-10">
                        <span class="text-pink-400 uppercase tracking-[4px] text-sm font-medium">Philosophy</span>
                        <h3 class="text-4xl font-semibold mt-6 mb-8" style="font-family:'Space Grotesk',sans-serif;">Intelligence is not information abundance.</h3>
                        <div class="space-y-6 text-slate-300 text-lg leading-[1.9]">
                            <p>The future of biomedical innovation will not be shaped by information abundance alone.</p>
                            <p>It will be shaped by the ability to:</p>
                            <ul class="space-y-4">
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

    <!-- NEWSLETTER -->
    <section id="newsletter" class="py-32 bg-slate-900 border-t border-white/10">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <h2 class="text-5xl font-semibold mb-6">Newsletter</h2>
            <p class="text-slate-400 text-xl max-w-3xl mx-auto">Coming soon.</p>
        </div>
    </section>


    <!-- TAKES TWO -->
    <section id="takestwo" class="py-32 bg-slate-950 border-t border-white/10">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-semibold mb-6">Takes Two</h2>
                <p class="text-slate-400 text-xl max-w-3xl mx-auto">Perspectives exploring science, strategy, innovation, and biotech ecosystems.</p>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <!-- All Takes Two cards from original -->
                <a href="https://www.linkedin.com/pulse/takes-two-tango-turning-healthtech-health-impact-akash-m-l-mathur-torcc/" target="_blank" class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">
                    <div class="flex items-center justify-between mb-5"><span class="text-purple-400 text-sm font-semibold">Edition 01</span><i class="fab fa-linkedin text-2xl text-blue-400"></i></div>
                    <h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">Turning HealthTech into Health Impact</h3>
                </a>
                <a href="https://www.linkedin.com/pulse/takes-two-tango-turning-healthtech-health-impact-akash-m-l-mathur-torcc/"
    target="_blank"
    class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

    <div class="flex items-center justify-between mb-5">
        <span class="text-purple-400 text-sm font-semibold">Edition 01</span>
        <i class="fab fa-linkedin text-2xl text-blue-400"></i>
    </div>

    <h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
        Turning HealthTech into Health Impact
    </h3>

</a>

<!-- 2 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-healthtech-medtech-success-akash-m-l-mathur-eek1c/"
    target="_blank"
    class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

    <div class="flex items-center justify-between mb-5">
        <span class="text-purple-400 text-sm font-semibold">Edition 02</span>
        <i class="fab fa-linkedin text-2xl text-blue-400"></i>
    </div>

    <h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
        Healthtech / Medtech Success
    </h3>

</a>

<!-- 3 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-3-akash-m-l-mathur-lbsac/"
    target="_blank"
    class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

    <div class="flex items-center justify-between mb-5">
        <span class="text-purple-400 text-sm font-semibold">Edition 03</span>
        <i class="fab fa-linkedin text-2xl text-blue-400"></i>
    </div>

    <h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
        The Health Stack and the Story-Market Fit
    </h3>

</a>

<!-- 4 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-4-understands-medicine-just-english-mathur-trajc/"
    target="_blank"
    class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

    <div class="flex items-center justify-between mb-5">
        <span class="text-purple-400 text-sm font-semibold">Edition 04</span>
        <i class="fab fa-linkedin text-2xl text-blue-400"></i>
    </div>

    <h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
        "It Understands Medicine, not Just English"
    </h3>

</a>

<!-- 5 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-5-how-founders-could-have-protected-mathur-ui24c/"
    target="_blank"
    class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

    <div class="flex items-center justify-between mb-5">
        <span class="text-purple-400 text-sm font-semibold">Edition 05</span>
        <i class="fab fa-linkedin text-2xl text-blue-400"></i>
    </div>

    <h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
        How Founders Could have Protected Equity - Rise and Stall of a Path AI
    </h3>

</a>

<!-- 6 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-edition-6-unlocking-global-markets-playbook-mathur-fmo5c/"
    target="_blank"
    class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

    <div class="flex items-center justify-between mb-5">
        <span class="text-purple-400 text-sm font-semibold">Edition 06</span>
        <i class="fab fa-linkedin text-2xl text-blue-400"></i>
    </div>

    <h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
        Unlocking Global Markets Playbook!
    </h3>

</a>

<!-- 7 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-edition-7-example-mature-ai-akash-m-l-mathur-g9n7c/"
    target="_blank"
    class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

    <div class="flex items-center justify-between mb-5">
        <span class="text-purple-400 text-sm font-semibold">Edition 07</span>
        <i class="fab fa-linkedin text-2xl text-blue-400"></i>
    </div>

    <h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
        Example of Mature AI Application to Healthtech
    </h3>

</a>

<!-- 8 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-edition-8-people-dont-want-medicines-just-mathur-fpqie/"
    target="_blank"
    class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

    <div class="flex items-center justify-between mb-5">
        <span class="text-purple-400 text-sm font-semibold">Edition 08</span>
        <i class="fab fa-linkedin text-2xl text-blue-400"></i>
    </div>

    <h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
        “People don’t want medicines. They just want to be healthy.”
    </h3>

</a>

<!-- 9 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-edition-9-same-tech-stack-different-tam-mathur-hpy8c/"
    target="_blank"
    class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

    <div class="flex items-center justify-between mb-5">
        <span class="text-purple-400 text-sm font-semibold">Edition 09</span>
        <i class="fab fa-linkedin text-2xl text-blue-400"></i>
    </div>

    <h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
        Same Tech Stack. Different Applications. Different TAM. Different Valuations
    </h3>

</a>

<!-- 10 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-10-wellness-work-collective-akash-m-l-mathur-cdkuc/"
    target="_blank"
    class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

    <div class="flex items-center justify-between mb-5">
        <span class="text-purple-400 text-sm font-semibold">Edition 10</span>
        <i class="fab fa-linkedin text-2xl text-blue-400"></i>
    </div>

    <h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
        Wellness at Work - a Collective Conversation
    </h3>

</a>

<!-- 11 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-11-when-leaders-speak-solutions-emerge-mathur-ldf2c/"
    target="_blank"
    class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

    <div class="flex items-center justify-between mb-5">
        <span class="text-purple-400 text-sm font-semibold">Edition 11</span>
        <i class="fab fa-linkedin text-2xl text-blue-400"></i>
    </div>

    <h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
        When Leaders Speak, Solutions Emerge - Naturally
    </h3>

</a>

<!-- 12 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-12-contributing-meeting-global-ortho-mathur-vse2c/"
    target="_blank"
    class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

    <div class="flex items-center justify-between mb-5">
        <span class="text-purple-400 text-sm font-semibold">Edition 12</span>
        <i class="fab fa-linkedin text-2xl text-blue-400"></i>
    </div>

    <h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
        Contributing to Meeting Global Objectives of Ortho, Physio and Sports Training
    </h3>

</a>

<!-- 13 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-13-knowledge-based-gtm-one-time-akash-m-l-mathur-hnf0c/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 13</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
Knowledge Based GTM — One Collaboration at a Time
</h3>

</a>

<!-- 14 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-14-knowledge-fifth-dimension-gtm-mathur-hf6uc/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 14</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
Knowledge - the Fifth Dimension in Healthtech GTM
</h3>

</a>

<!-- 15 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-15-spray-pray-seed-harvest-dilemma-mathur-e5o3c/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 15</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
Spray and Pray or Seed and Harvest - Healthtech Dilemma - Scale Fast or Grow Deep
</h3>

</a>

<!-- 16 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-16-market-always-talking-you-listening-mathur-han3c/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 16</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
The Market is Always Talking - Are you Listening?
</h3>

</a>

<!-- 17 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-17-first-50-champions-momentum-ahead-mathur-edvkc/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 17</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
The First 50 Champions - Momentum ahead of the Product
</h3>

</a>

<!-- 18 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-18-market-spoke-now-wants-proof-akash-m-l-mathur-npvtc/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 18</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
The Market Spoke. Now It Wants Proof
</h3>

</a>

<!-- 19 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-19-before-survey-much-pilot-akash-m-l-mathur-4n3gc/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 19</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
Before the Survey, Much Before the Pilot..
</h3>

</a>

<!-- 20 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-20-sooooooo-high-valuation-sales-mathur-uvhoc/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 20</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
Sooooooo high valuation with no sales?? - There's something fishy!!
</h3>

</a>

<!-- 21 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-edition-21-didnt-lose-court-ran-out-time-mathur-8dvqc/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 21</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
They Didn’t Lose in Court. They Ran Out of Time.
</h3>

</a>

<!-- 22 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-22-how-investors-view-patents-insurance-mathur-ale5c/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 22</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
How Investors View Patents - Insurance, not Intellect
</h3>

</a>

<!-- 23 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-23-what-we-learned-evaluating-27-companies-mathur-8zscc/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 23</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
What We Learned Evaluating 27 #HealthTech Companies in 2025
</h3>

</a>

<!-- 24 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-24-lessons-from-companies-we-did-carry-mathur-oelgc/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 24</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
Lessons from the 24 Companies we did not carry for US GTM in 2025.
</h3>

</a>

<!-- 25 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-25-top-5-reasons-healthtech-patents-mathur-jgbkc/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 25</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
The Top 5 Reasons HealthTech Patents End Up in Court
</h3>

</a>

<!-- 26 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-26-usfdas-2026-update-what-means-your-mathur-cbcoc/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 26</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
USFDA’s 2026 Update — What It Means for Your Product, Disclaimers, and Contracts
</h3>

</a>

<!-- 27 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-27-credibility-gets-valuations-funding-mathur-qnrhc/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 27</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
Credibility Gets the Valuations and Funding - What are the Signals that Investors Read?
</h3>

</a>

<!-- 28 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-28-why-your-deck-getting-ghosted-before-mathur-kj7pc/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 28</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
Why Your Deck is Getting Ghosted
</h3>

</a>

<!-- 29 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-29-why-investors-ghost-before-open-mathur-tyfmc/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 29</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
Why Investors Ghost Before They Open Your Deck
</h3>

</a>

<!-- 30 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-30-how-use-high-value-logos-advisors-mathur-7kzic/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 30</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
How to Use High Value Logos and Advisors and Why They are Killing Your Pitch
</h3>

</a>

<!-- 31 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-edition-31-stealth-mode-why-we-backed-mathur-2cpoc/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 31</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
Why We backed one (Even Though we agree Founders carry a Company)
</h3>

</a>

<!-- 32 -->
<a href="https://www.linkedin.com/pulse/takes-two-tango-ed-32-stealth-mode-bet-why-we-backed-mental-mathur-roxic/"
target="_blank"
class="group bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

<div class="flex items-center justify-between mb-5">
<span class="text-purple-400 text-sm font-semibold">Edition 32</span>
<i class="fab fa-linkedin text-2xl text-blue-400"></i>
</div>

<h3 class="text-xl font-semibold leading-snug group-hover:text-purple-300 transition">
Stealth Mode Bet: Why We Backed a Mental Wellbeing Startup
</h3>

</a>

                <!-- ... (All other 31 cards are included in your original file. For brevity in this response, they are assumed copied. In actual use, paste all of them here) ... -->
            </div>
        </div>
    </section>

    <!-- CEACAM5 -->
    <section id="ceacam5" class="py-32 bg-slate-900 border-t border-white/10">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <h2 class="text-5xl font-semibold mb-6">CEACAM5 Reports</h2>
            <p class="text-slate-400 text-xl max-w-3xl mx-auto mb-12">Explore strategic intelligence, clinical developments, and scientific signals around CEACAM5.</p>
            <a href="copy.html" class="inline-block bg-white/5 border border-white/10 hover:border-purple-500 transition rounded-3xl px-10 py-8 text-left max-w-xl w-full hover:-translate-y-2">
                <h3 class="text-2xl font-semibold text-white mb-2">Open CEACAM5 Dashboard</h3>
                <p class="text-slate-400">Click to explore full CEACAM5 intelligence reports, clinical data, and analysis.</p>
            </a>
        </div>
    </section>

    <!-- UPCOMING -->
    <section id="upcoming" class="py-32 bg-slate-950 border-t border-white/10">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <h2 class="text-5xl font-semibold mb-6">Upcoming Reports</h2>
            <p class="text-slate-400 text-xl max-w-3xl mx-auto">Discover upcoming intelligence reports and future biotech opportunity landscapes.</p>
        </div>
    </section>

    <!-- WAITLIST -->
    <section id="waitlist" class="py-24 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-t border-b border-purple-500/20">
        <div class="max-w-4xl mx-auto text-center px-6">
            <h2 class="text-5xl font-semibold mb-6">Be among the first to experience the future of biotech intelligence</h2>
            <p class="text-xl text-slate-300 mb-10">Join a select group of biotech innovators getting early access to AmethIntel.</p>
            <form id="waitlistForm" class="max-w-md mx-auto">
                <div class="flex flex-col sm:flex-row gap-4 items-center">
                    <input type="email" id="email" placeholder="your@company.com" required class="flex-1 bg-slate-900 border border-white/20 rounded-3xl px-6 py-5 outline-none focus:border-purple-400">
                    <button type="submit" class="btn bg-white text-slate-900 font-semibold px-10 rounded-3xl hover:bg-purple-100">Join Waitlist</button>
                </div>
            </form>
        </div>
        <p id="successMessage" class="text-green-400 mt-5 text-lg font-semibold hidden text-left sm:text-center w-full"></p>
    </section>

    <!-- FOOTER -->
    <footer class="bg-slate-950 py-16 border-t border-white/10">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center gap-12">
                <div class="flex flex-col items-center md:items-start gap-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <span class="text-white font-bold text-xl">A</span>
                        </div>
                        <span class="font-semibold tracking-tight text-3xl" style="font-family:'Space Grotesk',sans-serif;">AmethIntel</span>
                    </div>
                    <p class="text-slate-500 text-sm max-w-sm leading-relaxed">Interconnected biotech intelligence platform connecting scientific, clinical, regulatory, and strategic signals.</p>
                </div>
                <div class="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
                    <a href="#home" class="hover:text-white transition">Home</a>
                    <a href="#about" class="hover:text-white transition">About Us</a>
                    <a href="#newsletter" class="hover:text-white transition">Newsletter</a>
                    <a href="#takestwo" class="hover:text-white transition">Takes Two</a>
                    <a href="#ceacam5" class="hover:text-white transition">CEACAM5</a>
                    <a href="#upcoming" class="hover:text-white transition">Upcoming</a>
                    <a href="#contact" class="hover:text-white transition">Contact Us</a>
                </div>
            </div>

            <div id="contact" class="mt-14 border-t border-white/10 pt-10 flex flex-col items-center text-center">
                <h3 class="text-3xl font-semibold mb-6" style="font-family:'Space Grotesk',sans-serif;">Contact Us</h3>
                <p class="text-slate-400 mb-8 max-w-2xl leading-relaxed">For partnerships, strategic collaborations, biotech intelligence inquiries, or early platform access, feel free to reach out.</p>
                <div class="flex flex-col gap-5">
                    <a href="mailto:akash@amethintel.com" class="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-purple-500 transition rounded-2xl px-8 py-5">
                        <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"><i class="fas fa-envelope text-white"></i></div>
                        <div class="text-left">
                            <p class="text-sm text-slate-400">Business / Platform Queries</p>
                            <p class="text-white font-semibold group-hover:text-purple-300 transition">akash@amethintel.com</p>
                        </div>
                    </a>
                    <a href="mailto:akash.m@hb-022.com" class="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-purple-500 transition rounded-2xl px-8 py-5">
                        <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"><i class="fas fa-envelope text-white"></i></div>
                        <div class="text-left">
                            <p class="text-sm text-slate-400">Direct Contact</p>
                            <p class="text-white font-semibold group-hover:text-purple-300 transition">akash.m@hb-022.com</p>
                        </div>
                    </a>
                </div>
                <div class="mt-12 text-sm text-slate-500">© 2026 AmethIntel. All rights reserved.</div>
            </div>
        </div>
    </footer>
`;
