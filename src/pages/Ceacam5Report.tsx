
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Ceacam5Report = () => {
  const [tocActive, setTocActive] = useState(false);
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleToc = () => setTocActive(!tocActive);
  const toggleChapter = (id: string) => setOpenChapters(prev => ({ ...prev, [id]: !prev[id] }));
  const openModal = (type?: string) => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const submitRequest = () => { alert("Request submitted successfully!"); closeModal(); };
  const closeModalOutside = (e: any) => { if (e.target.id === 'modal') closeModal(); };

  const navigate = useNavigate();

  const handleReadChapter = (chapterRoute: string) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("Please login & subscribe to see the chapter content.");
    } else {
      navigate(chapterRoute);
    }
  };

  return (
    <>

      <div className="pt-26 min-h-screen" style={{ background: 'var(--ink)', color: 'var(--fog)', fontFamily: 'var(--sans)' }}>


        {/*  TOP BAR  */}

        {/*  HERO  */}
        <section className="pt-14 pb-12">
          <div className="max-w-260 mx-auto px-12" style={{ "paddingLeft": "0", "paddingRight": "0" }}>
            <div className="font-mono text-[11px] text-steel uppercase tracking-widest mb-0.75">AmethIntel · Oncology Intelligence Series · 2026</div>
            <h1 className="font-serif text-[42px] font-normal text-cream leading-[1.2] my-6">CEACAM5: Oncology Target and<br /><em className="font-serif italic text-accent-light">Ramifications for Target Selection Strategy</em></h1>
            <p className="font-sans text-[12px] uppercase tracking-[0.05em] font-semibold text-accent-light mb-1">A decision-grade intelligence review integrating clinical trial triage, failure attribution, patent landscape, payload and linker analysis, and 2026 deal structure benchmarks — structured for R&amp;D heads, BD leaders, and oncology investment teams.</p>

            <div className="flex items-center gap-3 font-mono text-[11px] tracking-widest  text-steel uppercase">
              <div className="flex items-center gap-2"><div className="font-mono text-[10px] text-steel uppercase tracking-widest">Publisher</div><div className="font-sans text-[13px] text-fog">AmethIntel</div></div>
              <div className="flex items-center gap-2"><div className="font-mono text-[10px] text-steel uppercase tracking-widest">Pages</div><div className="font-sans text-[13px] text-fog">~80 pp</div></div>
              <div className="flex items-center gap-2"><div className="font-mono text-[10px] text-steel uppercase tracking-widest">Chapters</div><div className="font-sans text-[13px] text-fog">8 + Appendix</div></div>
              <div className="flex items-center gap-2"><div className="font-mono text-[10px] text-steel uppercase tracking-widest">Updated</div><div className="font-sans text-[13px] text-fog">May 2026</div></div>
              <div className="flex items-center gap-2"><div className="font-mono text-[10px] text-steel uppercase tracking-widest">Coverage</div><div className="font-sans text-[13px] text-fog">US · EU · Global</div></div>
              <div className="flex items-center gap-2"><div className="font-mono text-[10px] text-steel uppercase tracking-widest">Classification</div><div className="font-sans text-[13px] text-fog">Confidential</div></div>
            </div>

            <div className="inline-flex items-center gap-2.5 bg-accent-dim border border-[rgba(200,151,58,0.3)] px-3 py-1.5 rounded-full mb-5.5">

              <div className="font-mono text-[12px] text-accent-light flex items-center gap-1.5">
                TOC + Executive Summary
              </div>

              <div className="w-px h-6  bg-[rgba(200,151,58,0.3)]"></div>

              <div className="font-mono text-[12px] text-accent-light flex items-center gap-1.5">
                Data
              </div>

              <div className="w-px h-6 bg-[rgba(200,151,58,0.3)]"></div>

              <div className="font-mono text-[12px] text-accent-light flex items-center gap-1.5">
                Analysis
              </div>

              <div className="w-px h-6 bg-[rgba(200,151,58,0.3)]"></div>

              <div className="font-mono text-[12px] text-accent-light flex items-center gap-1.5">
                Projection
              </div>

            </div>
          </div>
        </section>

        <div className="max-w-260 mx-auto px-12">

          {/*  EXEC SUMMARY  */}
          <section className="py-14 pb-12 border-b border-rule" id="exec-summary">

            <div className="font-mono text-[10px] text-accent uppercase tracking-[0.12em] mb-3 flex flex-col gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-accent">
              Executive Summary
            </div>

            <h2 className="font-serif text-[22px] font-medium text-cream mb-5">
              CEACAM5 Therapeutic Landscape & Strategic Outlook
            </h2>

            <div className="max-w-full mt-2.5 text-justify">

              <p>
                CEACAM5 (carcinoembryonic antigen-related cell adhesion molecule 5, CD66e) is emerging as one of the most commercially important solid tumor targets of the current oncology cycle. Long recognized biologically, but historically constrained by technological limitations, the target now stands at an inflection point where advances in antibody engineering, payload chemistry, linker systems, precision diagnostics, and clinical strategy are converging to unlock clinically and commercially viable therapies.
              </p>

              <p>
                More importantly, CEACAM5 represents a broader phenomenon increasingly shaping oncology markets: biologically validated but commercially unresolved targets accumulating years of latent clinical, regulatory, translational, and intellectual property energy before a catalytic approval rapidly accelerates licensing, investment, and fast-follower activity. Understanding this transition — from scientific promise to investable therapeutic platform — is becoming a strategic discipline in itself.
              </p>

              <p>
                This report is part of a broader AmethIntel precision medicine series examining how biology, translational infrastructure, platform technology, intellectual property accessibility, licensing geography, clinical strategy, and payer dynamics interact to shape modern therapeutic markets. CEACAM5 provides an unusually rich case study because the field combines extensive clinical precedent, evolving ADC technologies, multiple therapeutic modalities, significant translational infrastructure, and increasingly global licensing dynamics.
              </p>

              <p>
                CEACAM5 exhibits many characteristics of an ideal precision oncology target. Expression in normal adult tissue remains largely confined to the apical (luminal) surfaces of gastrointestinal epithelium, limiting exposure to circulating therapeutics under physiologic conditions. In malignant transformation, however, loss of polarity and marked overexpression expose the antigen broadly across tumor surfaces, creating a therapeutic opportunity that compares favorably with targets such as HER2 and EGFR.
              </p>

              <p>
                Historical development efforts faced challenges related to soluble antigen shedding, linker instability, and first-generation payload limitations. More recent programmes using proximal-epitope antibodies, hydrophilic linker systems, high-affinity binders, and Topoisomerase I payloads suggest that several of these constraints may now be materially reduced.
              </p>

              <p>
                The commercial relevance of this evolution is substantial. CEACAM5-expressing tumors — particularly colorectal cancer (CRC), non-small cell lung cancer (NSCLC), gastric and gastroesophageal cancers, pancreatic ductal adenocarcinoma (PDAC), and select breast cancer subtypes — collectively represent hundreds of thousands of new diagnoses annually across the United States and major European markets.
              </p>

              <p>
                Companion diagnostic infrastructure is already established, clinical enrollment criteria are increasingly standardized, and payer acceptance of biomarker-driven oncology therapies continues to expand. Successful CEACAM5-directed therapies therefore appear positioned for relatively rapid integration into second- and third-line treatment paradigms, with credible pathways toward earlier-line adoption.
              </p>

              <p>
                A detailed analysis of 187 therapeutic trials and translational programmes reveals one of the richest development ecosystems among emerging solid tumor targets. Importantly, this landscape extends well beyond antibody-drug conjugates alone.
              </p>

              <p>
                While ADCs currently represent the most commercially advanced modality, the broader CEACAM5 ecosystem includes monoclonal antibodies, bispecific T-cell engagers, CAR-T and CAR-NK programmes, radiotherapeutics, vaccine approaches, cytokine conjugates, intraperitoneal cell therapies, and emerging multi-target immune platforms.
              </p>

              <p>
                Importantly, the majority of prior CEACAM5 programmes do not appear to have failed because the target itself proved biologically invalid. Instead, setbacks were more commonly associated with first-generation payloads, insufficient therapeutic index, linker instability, manufacturing constraints, or broader strategic reprioritization.
              </p>

              <p>
                The clearest example remains tusamitamab ravtansine (SAR408701), where available evidence suggests toxicity limitations were linked predominantly to the DM4 payload and associated chemistry rather than target biology.
              </p>

              <p>
                This distinction is strategically significant. In therapeutic landscape analysis, shelved or discontinued programmes do not necessarily weaken a target category. In many cases, they generate valuable translational infrastructure, including validated assays, safety datasets, manufacturing precedent, biomarker frameworks, regulatory interactions, and partially de-risked development pathways.
              </p>

              <p>
                Several programmes currently define the leading edge of the field:
              </p>

              <ul>
                <li>Precemtabart tocentecan (M9140, Merck KGaA)</li>
                <li>SGN-CEACAM5C / PF-08046050 (Pfizer/Seagen)</li>
                <li>BMS-986490</li>
                <li>IBI3020 (Innovent Biologics)</li>
              </ul>

              <p>
                The evolution of CEACAM5 therapeutics mirrors broader shifts occurring across the ADC sector. Earlier generations competed primarily through target engagement. Newer generations increasingly compete through payload optimization, linker chemistry, manufacturability, tumor penetration, bystander effect management, tolerability, and cost efficiency.
              </p>

              <p>
                Future leadership may therefore depend less on ownership of the target itself and more on the integration of differentiated platform technologies and development strategy.
              </p>

              <div className="bg-navy-mid border-l-2 border-accent px-5.5 py-4.5 my-7">
                <p className="font-serif italic text-[15px] text-fog leading-[1.8] m-0">
                  “Increasingly, the winners may be those able to identify targets where clinical precedent, public-domain translational knowledge, licensing accessibility, technological evolution, and market timing converge simultaneously.”
                </p>
              </div>

              <p>
                CEACAM5 now stands among the clearest examples of this transition.
              </p>

            </div>

          </section>


          <section className="hidden py-14 pb-12 border-b border-rule" id="toc">
            <div className="font-mono text-[10px] text-accent uppercase tracking-[0.12em] mb-3 flex flex-col gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-accent">Free access <span className="bg-free-bg border border-[rgba(27,107,74,0.3)] text-free-green font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-xs" style={{ "marginLeft": "8px" }}>Open</span></div>
            <h2 className="font-serif text-[22px] font-medium text-cream mb-5">Table of Contents</h2>

            <div className="flex flex-col mt-2">
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-3.25 border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#exec-summary">
                <div className="font-mono text-[12px] text-accent font-medium">—</div>
                <div className="text-[14px] font-medium text-fog">Executive Thesis<span>Drugability verdict · three correctable engineering errors · report scope</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-0.75 rounded-sm mt-0.5 bg-free-bg text-free-green border border-[rgba(27,107,74,0.3)] hidden md:block">Free</div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-3.25 border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-1">
                <div className="font-mono text-[12px] text-accent font-medium">01</div>
                <div className="text-[14px] font-medium text-fog">Target Biology &amp; Expression Landscape<span>Domain architecture · IHC by tumour type · shedding mechanism</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-0.75 rounded-sm mt-0.5 bg-[rgba(200,151,58,0.1)] text-accent-light border border-[rgba(200,151,58,0.25)] hidden md:block">Preview</div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-3.25 border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-2">
                <div className="font-mono text-[12px] text-accent font-medium">02</div>
                <div className="text-[14px] font-medium text-fog">Report Methodology &amp; Framework<span>Integrated Clinical Development System™ framework · decision archetypes</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-0.75 rounded-sm mt-0.5 bg-[rgba(200,151,58,0.1)] text-accent-light border border-[rgba(200,151,58,0.25)] hidden md:block">Preview</div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-3.25 border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-3">
                <div className="font-mono text-[12px] text-accent font-medium">03</div>
                <div className="text-[14px] font-medium text-fog">Programme Failure Attribution<span>Four-cause taxonomy · every major termination classified · cross-cutting finding</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-0.75 rounded-sm mt-0.5 bg-[rgba(200,151,58,0.1)] text-accent-light border border-[rgba(200,151,58,0.25)] hidden md:block">Preview</div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-3.25 border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-4">
                <div className="font-mono text-[12px] text-accent font-medium">04</div>
                <div className="text-[14px] font-medium text-fog">Patent Landscape<span>Domain-level assignee mapping · linker IP concentration · FTO pathways · white space</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-0.75  rounded-sm mt-0.5 bg-lock-bg text-lock-red border border-[rgba(139,32,32,0.2)] hidden md:block"></div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-3.25 border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-5">
                <div className="font-mono text-[12px] text-accent font-medium">05</div>
                <div className="text-[14px] font-medium text-fog">Payload Landscape<span>DM4 → Topo1i evolution · bystander killing · patent landscape by payload class</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-0.75  rounded-sm mt-0.5 bg-lock-bg text-lock-red border border-[rgba(139,32,32,0.2)] hidden md:block"></div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-3.25 border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-6">
                <div className="font-mono text-[12px] text-accent font-medium">06</div>
                <div className="text-[14px] font-medium text-fog">Linker Landscape<span>Shedding sink quantified · site-specific conjugation · DAR stability · white space</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-0.75  rounded-sm mt-0.5 bg-lock-bg text-lock-red border border-[rgba(139,32,32,0.2)] hidden md:block"></div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-3.25 border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-7">
                <div className="font-mono text-[12px] text-accent font-medium">07</div>
                <div className="text-[14px] font-medium text-fog">Differentiation for Long-Term Dominance<span>Three-variable framework · population sizing · deal structure benchmarks · risk matrix</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-0.75  rounded-sm mt-0.5 bg-lock-bg text-lock-red border border-[rgba(139,32,32,0.2)] hidden md:block"></div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-3.25 border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-8">
                <div className="font-mono text-[12px] text-accent font-medium">08</div>
                <div className="text-[14px] font-medium text-fog">2026 Deal Structure Analysis<span>ADC licensing benchmarks · China-origin trajectories · CEACAM5 positioning post-Sanofi</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-0.75 rounded-sm mt-0.5 bg-lock-bg text-lock-red border border-[rgba(139,32,32,0.2)] hidden md:block"></div>
              </a>
              <div className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-3.25 border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer" onClick={() => handleReadChapter('/chapters/appendix')}>
                <div className="font-mono text-[12px] text-accent font-medium">A</div>
                <div className="text-[14px] font-medium text-fog">Appendix — Full Reference Tables<span>30-programme table · NCT index · deal comparables · patent assignee summary</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-0.75  rounded-sm mt-0.5 bg-lock-bg text-lock-red border border-[rgba(139,32,32,0.2)] hidden md:block">Bundled</div>
              </div>
            </div>
          </section>

          {/*  CHAPTERS  */}
          <section className="py-14" id="chapters">
            <div className="font-mono text-[10px] text-accent uppercase tracking-[0.12em] mb-3 flex flex-col gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-accent">Chapter access — preview free, full content  per chapter</div>
            <h2 className="font-serif text-[22px] font-medium text-cream mb-5" style={{ "marginBottom": "24px" }}>Report Chapters</h2>
            <div className="font-mono text-[12px] text-mist uppercase tracking-widest mb-6 pb-3 border-b border-rule">Click any chapter to expand preview · unlock full content individually or purchase the complete report</div>

            {/*  CH 1  */}
            <div className="mb-2" id="ch-1">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" onClick={() => handleReadChapter('/chapters/chapter1')}>
                <div className="font-mono text-[12px] text-accent">01</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream">Target Biology &amp; Expression Landscape</div>
                  <div className="text-[12px] text-steel mt-0.75 italic">What CEACAM5 is, where it is expressed, and what that means for therapeutic window design</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-0.75 text-right"><span className="text-accent uppercase tracking-wider text-[10px] font-bold">Read Chapter</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform"><i className="fas fa-arrow-right"></i></div>
              </div>
            </div>

            {/*  CH 2  */}
            <div className="mb-2" id="ch-2">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" >
                <div className="font-mono text-[12px] text-accent">02</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream"> Methodology &amp; Framework</div>
                  <div className="text-[12px] text-steel mt-0.75 italic">The Integrated Clinical Development System™ framework and decision archetypes</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-0.75 text-right"><span className="text-accent uppercase tracking-wider text-[10px] font-bold">Read Chapter</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform"><i className="fas fa-arrow-right"></i></div>
              </div>
            </div>

            {/*  CH 3  */}
            <div className="mb-2" id="ch-3">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" onClick={() => handleReadChapter('/chapters/chapter3')}>
                <div className="font-mono text-[12px] text-accent">03</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream">Programme Failure Attribution</div>
                  <div className="text-[12px] text-steel mt-0.75 italic">A diagnostic, not a graveyard — every terminated programme assigned to one of four root causes</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-0.75 text-right"><span className="text-accent uppercase tracking-wider text-[10px] font-bold">Read Chapter</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform"><i className="fas fa-arrow-right"></i></div>
              </div>
            </div>

            {/*  CH 4  */}
            <div className="mb-2" id="ch-4">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" onClick={() => handleReadChapter('/chapters/chapter4')}>
                <div className="font-mono text-[12px] text-accent">04</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream">Patent Landscape</div>
                  <div className="text-[12px] text-steel mt-0.75 italic">Where entry is blocked, where it is open, and where the real barriers now concentrate</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-0.75 text-right"><span className="text-accent uppercase tracking-wider text-[10px] font-bold">Read Chapter</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform"><i className="fas fa-arrow-right"></i></div>
              </div>
            </div>

            {/*  CH 5  */}
            <div className="mb-2" id="ch-5">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" onClick={() => handleReadChapter('/chapters/chapter5')}>
                <div className="font-mono text-[12px] text-accent">05</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream">Payload Landscape</div>
                  <div className="text-[12px] text-steel mt-0.75 italic">Why maytansinoid gave way to Topo1i — and what the data says about the next transition</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-0.75 text-right"><span className="text-accent uppercase tracking-wider text-[10px] font-bold">Read Chapter</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform"><i className="fas fa-arrow-right"></i></div>
              </div>
            </div>

            {/*  CH 6  */}
            <div className="mb-2" id="ch-6">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" onClick={() => handleReadChapter('/chapters/chapter6')}>
                <div className="font-mono text-[12px] text-accent">06</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream">Linker Landscape</div>
                  <div className="text-[12px] text-steel mt-0.75 italic">The linker is where this field will be won — the clinical evidence and the deal data agree</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-0.75 text-right"><span className="text-accent uppercase tracking-wider text-[10px] font-bold">Read Chapter</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform"><i className="fas fa-arrow-right"></i></div>
              </div>
            </div>

            {/*  CH 7  */}
            <div className="mb-2" id="ch-7">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" onClick={() => handleReadChapter('/chapters/chapter7')}>
                <div className="font-mono text-[12px] text-accent">07</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream">Differentiation for Long-Term Dominance</div>
                  <div className="text-[12px] text-steel mt-0.75 italic">The three-variable framework — and the population sizing that determines the commercial ceiling</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-0.75 text-right"><span className="text-accent uppercase tracking-wider text-[10px] font-bold">Read Chapter</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform"><i className="fas fa-arrow-right"></i></div>
              </div>
            </div>

            {/*  CH 8  */}
            <div className="mb-2" id="ch-8">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" onClick={() => handleReadChapter('/chapters/chapter8')}>
                <div className="font-mono text-[12px] text-accent">08</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream">2026 Deal Structure Analysis</div>
                  <div className="text-[12px] text-steel mt-0.75 italic">Where capital is moving — and what a CEACAM5 ADC at Phase 1 POC would actually license for</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-0.75 text-right"><span className="text-accent uppercase tracking-wider text-[10px] font-bold">Read Chapter</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform"><i className="fas fa-arrow-right"></i></div>
              </div>
            </div>

            {/*  APPENDIX  */}
            <div className="mb-2" id="ch-a">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" onClick={() => handleReadChapter('/chapters/appendix')}>
                <div className="font-mono text-[12px] text-accent">A</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream">Appendix — Full Reference Tables & Bibliography</div>
                  <div className="text-[12px] text-steel mt-0.75 italic">30-programme table · NCT index · deal comparables · patent assignee summary · bibliography & references</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-0.75 text-right"><span className="text-accent uppercase tracking-wider text-[10px] font-bold">Read Appendix</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform"><i className="fas fa-arrow-right"></i></div>
              </div>
            </div>

          </section>

          {/*  PRICING  */}
          <section className="py-14 border-b border-rule" id="pricing">
            <div className="font-mono text-[10px] text-accent uppercase tracking-[0.12em] mb-3 flex flex-col gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-accent">Access options</div>
            <h2 className="font-serif text-[22px] font-medium text-cream mb-5">Licensing &amp; Pricing</h2>

            <div className="grid grid-cols-3 gap-3 mt-2">
              <div className="bg-navy-mid border border-rule rounded-[3px] p-6">
                <div className="font-mono text-[10px] text-steel tracking-widest uppercase mb-2.5">Chapter licence</div>
                <div className="font-serif text-[32px] text-cream font-medium mb-1"><sub className="text-[14px] font-sans text-steel font-normal">per chapter</sub></div>
                <div className="text-[13px] text-mist leading-normal   pb-4 border-b border-rule">Access any individual chapter. Purchase only what your analysis requires. Chapters 1–3 are most relevant for target validation; 4–6 for platform and IP strategy; 7–8 for commercial and deal decisions.</div>
                <div className="flex flex-col gap-2 mb-5">
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-normal">Single chapter, unlimited internal use</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-normal">No redistribution outside purchasing organisation</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-normal">PDF + web access</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-normal">Peer-reviewed citation list included</div>
                </div>
                <button className="w-full py-2.75 px-4 font-sans text-[13px] font-semibold tracking-[0.05em] uppercase rounded-xs border border-accent transition-colors cursor-pointer bg-transparent hover:bg-accent-dim text-accent" onClick={() => { openModal('chapter') }}>Select Chapter</button>
              </div>

              <div className="bg-navy border border-accent rounded-[3px] p-6 relative">
                <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-accent text-ink font-mono text-[10px] font-medium tracking-widest uppercase px-3 py-0.75 rounded-b-[3px]">Most Popular</div>
                <div className="font-mono text-[10px] text-steel tracking-widest uppercase mb-2.5">Full Report</div>
                <div className="font-serif text-[32px] text-cream font-medium mb-1"> <sub className="text-[14px] font-sans text-steel font-normal">single org</sub></div>
                <div className="text-[13px] text-mist mb-4.5 leading-[1.6] pb-4 border-b border-rule">Complete report including all 8 chapters, Appendix (30-programme reference table, deal comparables, patent assignee summary), and one 60-minute analyst briefing call.</div>
                <div className="flex flex-col gap-2 mb-5">
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-normal">All 8 chapters + full Appendix</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-normal">60-minute Q&amp;A briefing with AmethIntel analysts</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-normal">Unlimited internal use, one organisation</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-normal">PDF + web access + printable version</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-normal">6-month update notification</div>
                </div>
                <button className="w-full py-2.75 px-4 font-sans text-[13px] font-semibold tracking-[0.05em] uppercase rounded-xs border border-accent transition-colors cursor-pointer bg-accent hover:bg-accent-light text-ink" onClick={() => { openModal('full') }}>Purchase Full Report</button>
              </div>

              <div className="bg-navy-mid border border-rule rounded-[3px] p-6">
                <div className="font-mono text-[10px] text-steel tracking-widest uppercase mb-2.5">Enterprise + Bespoke</div>
                <div className="font-serif text-[32px] text-cream font-medium mb-1"><sub className="text-[14px] font-sans text-steel font-normal">custom</sub></div>
                <div className="text-[13px] text-mist mb-4.5 leading-[1.6] pb-4 border-b border-rule">Custom target analysis applying the AmethIntel methodology to a target of your choosing, or multi-report series subscription including microbiology intelligence series (2026–26).</div>
                <div className="flex flex-col gap-2 mb-5">
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-normal">Bespoke target analysis — your choice of target</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-normal">Series subscription: oncology + microbiology</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-normal">Quarterly briefing calls</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-normal">Multi-user enterprise licence</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-normal">Competitive Kinetic Energy Scorecard for custom target</div>
                </div>
                <button className="w-full py-2.75 px-4 font-sans text-[13px] font-semibold tracking-[0.05em] uppercase rounded-xs border border-accent transition-colors cursor-pointer bg-transparent hover:bg-accent-dim text-accent" onClick={() => { openModal('enterprise') }}>Enquire</button>
              </div>
            </div>
          </section>

        </div>


        {/*  MODAL  */}
        <div className={`fixed inset-0 bg-[rgba(10,16,28,0.92)] z-200 items-center justify-center p-6 ${isModalOpen ? "flex" : "hidden"}`} id="modal" onClick={(e: any) => { closeModalOutside(e) }}>
          <div className="bg-navy border border-accent rounded-sm p-9 max-w-110 w-full">
            <div className="font-serif text-[20px] text-cream mb-1.5" id="modal-title">Unlock Access</div>
            <div className="text-[13px] text-mist mb-6 leading-[1.65]" id="modal-sub">Complete your details and we will send an invoice and access link within one business day.</div>
            <div className="mb-3.5">
              <div className="font-mono text-[10px] text-steel tracking-widest uppercase mb-1.25 block">Full name</div>
              <input className="w-full bg-ink border border-rule rounded-xs px-3 py-2.5 font-sans text-[13px] text-fog outline-none focus:border-accent transition-colors" type="text" placeholder="Dr. Jane Smith" />
            </div>
            <div className="mb-3.5">
              <div className="font-mono text-[10px] text-steel tracking-widest uppercase mb-1.25 block">Organisation</div>
              <input className="w-full bg-ink border border-rule rounded-xs px-3 py-2.5 font-sans text-[13px] text-fog outline-none focus:border-accent transition-colors" type="text" placeholder="Pharma Co. / Fund name" />
            </div>
            <div className="mb-3.5">
              <div className="font-mono text-[10px] text-steel tracking-widest uppercase mb-1.25 block">Business email</div>
              <input className="w-full bg-ink border border-rule rounded-xs px-3 py-2.5 font-sans text-[13px] text-fog outline-none focus:border-accent transition-colors" type="email" placeholder="jane@organisation.com" />
            </div>
            <div className="mb-3.5">
              <div className="font-mono text-[10px] text-steel tracking-widest uppercase mb-1.25 block">Role</div>
              <input className="w-full bg-ink border border-rule rounded-xs px-3 py-2.5 font-sans text-[13px] text-fog outline-none focus:border-accent transition-colors" type="text" placeholder="VP Business Development / R&D Director" />
            </div>
            <div className="bg-ink border border-rule rounded-xs px-3.5 py-3 flex justify-between items-center mb-5">
              <div className="text-[13px] text-mist" id="modal-price-label">Amount</div>
              <div className="font-mono text-[18px] text-accent" id="modal-price"></div>
            </div>
            <div className="flex gap-2.5">
              <button className="flex-1 py-2.75 bg-transparent hover:text-fog hover:border-fog border border-rule text-steel font-sans text-[12px] font-semibold tracking-[0.05em] uppercase rounded-xs transition-colors cursor-pointer" onClick={() => { closeModal() }}>Cancel</button>
              <button className="flex-2 py-2.75 bg-accent hover:bg-accent-light border-none text-ink font-sans text-[12px] font-semibold tracking-[0.05em] uppercase rounded-xs transition-colors cursor-pointer" onClick={() => { submitRequest() }}>Request Invoice &amp; Access</button>
            </div>
            <div className="text-[11px] text-steel mt-3.5 text-center leading-[1.6]">No payment is processed here. You will receive an invoice by email within one business day. Access is granted on payment confirmation.</div>
          </div>
        </div>

        {/*  Firebase Script  */}



      </div>
    </>
  );
};

export default Ceacam5Report;
