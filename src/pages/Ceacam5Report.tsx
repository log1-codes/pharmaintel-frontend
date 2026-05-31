
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <>
      
      <div className="pt-[104px] min-h-screen" style={{ background: 'var(--ink)', color: 'var(--fog)', fontFamily: 'var(--sans)' }}>


        {/*  TOP BAR  */}

        {/*  HERO  */}
        <section className="pt-[56px] pb-[48px]">
          <div className="max-w-[1040px] mx-auto px-12" style={{ "paddingLeft": "0", "paddingRight": "0" }}>
            <div className="font-mono text-[11px] text-steel uppercase tracking-[0.1em] mb-[3px]">PharmaIntel · Oncology Intelligence Series · 2026</div>
            <h1 className="font-serif text-[42px] font-normal text-cream leading-[1.2] my-6">CEACAM5: Oncology Target and<br /><em className="font-serif italic text-accent-light">Ramifications for Target Selection Strategy</em></h1>
            <p className="font-sans text-[12px] uppercase tracking-[0.05em] font-semibold text-accent-light mb-1">A decision-grade intelligence review integrating clinical trial triage, failure attribution, patent landscape, payload and linker analysis, and 2026 deal structure benchmarks — structured for R&amp;D heads, BD leaders, and oncology investment teams.</p>

            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.1em] text-steel uppercase">
              <div className="flex items-center gap-2"><div className="font-mono text-[10px] text-steel uppercase tracking-[0.1em]">Publisher</div><div className="font-sans text-[13px] text-fog">PharmaIntel</div></div>
              <div className="flex items-center gap-2"><div className="font-mono text-[10px] text-steel uppercase tracking-[0.1em]">Pages</div><div className="font-sans text-[13px] text-fog">~80 pp</div></div>
              <div className="flex items-center gap-2"><div className="font-mono text-[10px] text-steel uppercase tracking-[0.1em]">Chapters</div><div className="font-sans text-[13px] text-fog">8 + Appendix</div></div>
              <div className="flex items-center gap-2"><div className="font-mono text-[10px] text-steel uppercase tracking-[0.1em]">Updated</div><div className="font-sans text-[13px] text-fog">May 2026</div></div>
              <div className="flex items-center gap-2"><div className="font-mono text-[10px] text-steel uppercase tracking-[0.1em]">Coverage</div><div className="font-sans text-[13px] text-fog">US · EU · Global</div></div>
              <div className="flex items-center gap-2"><div className="font-mono text-[10px] text-steel uppercase tracking-[0.1em]">Classification</div><div className="font-sans text-[13px] text-fog">Confidential</div></div>
            </div>

            <div className="inline-flex items-center gap-[10px] bg-accent-dim border border-[rgba(200,151,58,0.3)] px-3 py-[6px] rounded-full mb-[22px]">

              <div className="font-mono text-[12px] text-accent-light flex items-center gap-[6px]">
                TOC + Executive Summary
              </div>

              <div className="w-[1px] h-[24px] bg-[rgba(200,151,58,0.3)]"></div>

              <div className="font-mono text-[12px] text-accent-light flex items-center gap-[6px]">
                Data
              </div>

              <div className="w-[1px] h-[24px] bg-[rgba(200,151,58,0.3)]"></div>

              <div className="font-mono text-[12px] text-accent-light flex items-center gap-[6px]">
                Analysis
              </div>

              <div className="w-[1px] h-[24px] bg-[rgba(200,151,58,0.3)]"></div>

              <div className="font-mono text-[12px] text-accent-light flex items-center gap-[6px]">
                Projection
              </div>

            </div>
          </div>
        </section>

        <div className="max-w-[1040px] mx-auto px-12">

          {/*  EXEC SUMMARY  */}
          <section className="py-[56px] pb-[48px] border-b border-rule" id="exec-summary">

            <div className="font-mono text-[10px] text-accent uppercase tracking-[0.12em] mb-3 flex flex-col gap-3 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-accent">
              Executive Summary
            </div>

            <h2 className="font-serif text-[22px] font-medium text-cream mb-5">
              CEACAM5 Therapeutic Landscape & Strategic Outlook
            </h2>

            <div className="max-w-full mt-[10px]">

              <p>
                CEACAM5 (carcinoembryonic antigen-related cell adhesion molecule 5, CD66e) is emerging as one of the most commercially important solid tumor targets of the current oncology cycle. Long recognized biologically, but historically constrained by technological limitations, the target now stands at an inflection point where advances in antibody engineering, payload chemistry, linker systems, precision diagnostics, and clinical strategy are converging to unlock clinically and commercially viable therapies.
              </p>

              <p>
                More importantly, CEACAM5 represents a broader phenomenon increasingly shaping oncology markets: biologically validated but commercially unresolved targets accumulating years of latent clinical, regulatory, translational, and intellectual property energy before a catalytic approval rapidly accelerates licensing, investment, and fast-follower activity. Understanding this transition — from scientific promise to investable therapeutic platform — is becoming a strategic discipline in itself.
              </p>

              <p>
                This report is part of a broader PharmaIntel precision medicine series examining how biology, translational infrastructure, platform technology, intellectual property accessibility, licensing geography, clinical strategy, and payer dynamics interact to shape modern therapeutic markets. CEACAM5 provides an unusually rich case study because the field combines extensive clinical precedent, evolving ADC technologies, multiple therapeutic modalities, significant translational infrastructure, and increasingly global licensing dynamics.
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

              <div className="bg-navy-mid border-l-2 border-accent px-[22px] py-[18px] my-7">
                <p className="font-serif italic text-[15px] text-fog leading-[1.8] m-0">
                  “Increasingly, the winners may be those able to identify targets where clinical precedent, public-domain translational knowledge, licensing accessibility, technological evolution, and market timing converge simultaneously.”
                </p>
              </div>

              <p>
                CEACAM5 now stands among the clearest examples of this transition.
              </p>

            </div>

          </section>

          {/*  TOC — FREE  */}
          <section className="py-[56px] pb-[48px] border-b border-rule" id="toc">
            <div className="font-mono text-[10px] text-accent uppercase tracking-[0.12em] mb-3 flex flex-col gap-3 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-accent">Free access <span className="bg-free-bg border border-[rgba(27,107,74,0.3)] text-[#5DCAA5] font-mono text-[10px] uppercase tracking-[0.1em] px-2 py-[2px] rounded-[2px]" style={{ "marginLeft": "8px" }}>Open</span></div>
            <h2 className="font-serif text-[22px] font-medium text-cream mb-5">Table of Contents</h2>

            <div className="flex flex-col mt-2">
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-[13px] border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#exec-summary">
                <div className="font-mono text-[12px] text-accent font-medium">—</div>
                <div className="text-[14px] font-medium text-fog">Executive Thesis<span>Drugability verdict · three correctable engineering errors · report scope</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-sm mt-[2px] bg-free-bg text-free-green border border-[rgba(27,107,74,0.3)] hidden md:block">Free</div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-[13px] border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-1">
                <div className="font-mono text-[12px] text-accent font-medium">01</div>
                <div className="text-[14px] font-medium text-fog">Target Biology &amp; Expression Landscape<span>Domain architecture · IHC by tumour type · shedding mechanism</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-sm mt-[2px] bg-[rgba(200,151,58,0.1)] text-accent-light border border-[rgba(200,151,58,0.25)] hidden md:block">Preview</div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-[13px] border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-2">
                <div className="font-mono text-[12px] text-accent font-medium">02</div>
                <div className="text-[14px] font-medium text-fog">Active Clinical Trial Landscape<span>260+ trials tiered by readout imminence · sponsor commitment signals · kinetic energy analysis</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-sm mt-[2px] bg-[rgba(200,151,58,0.1)] text-accent-light border border-[rgba(200,151,58,0.25)] hidden md:block">Preview</div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-[13px] border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-3">
                <div className="font-mono text-[12px] text-accent font-medium">03</div>
                <div className="text-[14px] font-medium text-fog">Programme Failure Attribution<span>Four-cause taxonomy · every major termination classified · cross-cutting finding</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-sm mt-[2px] bg-[rgba(200,151,58,0.1)] text-accent-light border border-[rgba(200,151,58,0.25)] hidden md:block">Preview</div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-[13px] border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-4">
                <div className="font-mono text-[12px] text-accent font-medium">04</div>
                <div className="text-[14px] font-medium text-fog">Patent Landscape<span>Domain-level assignee mapping · linker IP concentration · FTO pathways · white space</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-sm mt-[2px] bg-lock-bg text-lock-red border border-[rgba(139,32,32,0.2)] hidden md:block"></div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-[13px] border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-5">
                <div className="font-mono text-[12px] text-accent font-medium">05</div>
                <div className="text-[14px] font-medium text-fog">Payload Landscape<span>DM4 → Topo1i evolution · bystander killing · patent landscape by payload class</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-sm mt-[2px] bg-lock-bg text-lock-red border border-[rgba(139,32,32,0.2)] hidden md:block"></div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-[13px] border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-6">
                <div className="font-mono text-[12px] text-accent font-medium">06</div>
                <div className="text-[14px] font-medium text-fog">Linker Landscape<span>Shedding sink quantified · site-specific conjugation · DAR stability · white space</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-sm mt-[2px] bg-lock-bg text-lock-red border border-[rgba(139,32,32,0.2)] hidden md:block"></div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-[13px] border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-7">
                <div className="font-mono text-[12px] text-accent font-medium">07</div>
                <div className="text-[14px] font-medium text-fog">Differentiation for Long-Term Dominance<span>Three-variable framework · population sizing · deal structure benchmarks · risk matrix</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-sm mt-[2px] bg-lock-bg text-lock-red border border-[rgba(139,32,32,0.2)] hidden md:block"></div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-[13px] border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-8">
                <div className="font-mono text-[12px] text-accent font-medium">08</div>
                <div className="text-[14px] font-medium text-fog">2026 Deal Structure Analysis<span>ADC licensing benchmarks · China-origin trajectories · CEACAM5 positioning post-Sanofi</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-sm mt-[2px] bg-lock-bg text-lock-red border border-[rgba(139,32,32,0.2)] hidden md:block"></div>
              </a>
              <a className="grid grid-cols-[44px_1fr_auto] gap-4 px-4 py-[13px] border-b border-rule items-center hover:bg-[#223050] transition-colors cursor-pointer no-underline" href="#ch-a">
                <div className="font-mono text-[12px] text-accent font-medium">A</div>
                <div className="text-[14px] font-medium text-fog">Appendix — Full Reference Tables<span>30-programme table · NCT index · deal comparables · patent assignee summary</span></div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-sm mt-[2px] bg-lock-bg text-lock-red border border-[rgba(139,32,32,0.2)] hidden md:block">Bundled</div>
              </a>
            </div>
          </section>

          {/*  CHAPTERS  */}
          <section className="py-[56px]" id="chapters">
            <div className="font-mono text-[10px] text-accent uppercase tracking-[0.12em] mb-3 flex flex-col gap-3 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-accent">Chapter access — preview free, full content  per chapter</div>
            <h2 className="font-serif text-[22px] font-medium text-cream mb-5" style={{ "marginBottom": "24px" }}>Report Chapters</h2>
            <div className="font-mono text-[12px] text-mist uppercase tracking-[0.1em] mb-6 pb-3 border-b border-rule">Click any chapter to expand preview · unlock full content individually or purchase the complete report</div>

            {/*  CH 1  */}
            <div className="mb-2" id="ch-1">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" onClick={() => { toggleChapter('ch-1') }}>
                <div className="font-mono text-[12px] text-accent">01</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream">Target Biology &amp; Expression Landscape</div>
                  <div className="text-[12px] text-steel mt-[3px] italic">What CEACAM5 is, where it is expressed, and what that means for therapeutic window design</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-[3px] text-right"><span>or included in full</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform">+</div>
              </div>
              <div className="bg-navy-mid border-x border-b border-rule rounded-b-[3px] hidden">
                <div className="pt-5 pr-5 pb-0 pl-[76px]">
                  <div className="font-mono text-[11px] text-free-green uppercase tracking-[0.1em] mb-3 flex items-center gap-2">Free preview — key findings</div>
                  <div className="flex flex-col gap-4 mb-5">
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>Domain architecture resolved at 3.11 Å:</strong> the October 2024 cryo-EM structure (PDB 8BW0, Sanofi/Nature Comms) reveals tusamitamab binds a discontinuous epitope in the A3-B3 domains incorporating an N-linked mannose at Asn612 — the first atomic-resolution epitope map of any CEACAM5 antibody</div></div>
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>Expression frequency by tumour type:</strong> CRC 90–95% any IHC; high-expression (≥2+/≥50% cells) in ~60–70% mCRC. NSCLC adenocarcinoma: 24.3% HE in primary tumours, rising to 35.3% in metastases. Gastric: 55–70%. PDAC: ~90%</div></div>
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>The polarity shift is the therapeutic window:</strong> in normal colonic epithelium CEACAM5 is strictly apical-surface; in adenocarcinoma polarity is lost and expression becomes circumferential — basolateral surface accessible to vascular-delivered agents</div></div>
                  </div>
                </div>
                <div className="flex items-center gap-6 bg-ink border border-rule rounded-[3px] p-5 px-6 mx-5 mb-5 ml-[76px]">
                  <div className="flex-1">
                    <div className="font-mono text-[11px] text-lock-red uppercase tracking-[0.1em] mb-[6px] flex items-center gap-2">Full content locked</div>
                    <div className="flex flex-col gap-3">
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                    </div>
                    <div style={{ "fontSize": "11px", "color": "var(--steel)", "marginTop": "10px" }}>Full chapter includes: complete IHC frequency tables with H-score distributions · KRAS-CEACAM5 molecular correlations in NSCLC · serum CEA dynamics by tumour type · shedding sink quantification · domain surface exposure by tumour type vs. normal tissue · 9 peer-reviewed citations</div>
                  </div>
                  <div className="flex-shrink-0 text-center">
                    <div className="font-mono text-[22px] font-medium text-accent mb-2">$500</div>
                    <div className="text-[11px] text-steel mb-3">Single chapter licence</div>
                    <button className="bg-accent hover:bg-accent-light text-ink border-none px-[22px] py-[9px] font-sans text-[12px] font-semibold tracking-[0.06em] uppercase rounded-[2px] w-full transition-colors cursor-pointer" onClick={() => { openModal('Chapter 1: Target Biology') }}>Unlock Chapter</button>
                    <button className="bg-transparent hover:bg-accent-dim text-accent border border-accent px-[22px] py-[9px] font-sans text-[12px] font-semibold tracking-[0.06em] uppercase rounded-[2px] w-full mt-[6px] transition-colors cursor-pointer" onClick={() => { openModal('full') }}>Full Report — $10,000</button>
                  </div>
                </div>
              </div>
            </div>

            {/*  CH 2  */}
            <div className="mb-2" id="ch-2">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" onClick={() => { toggleChapter('ch-2') }}>
                <div className="font-mono text-[12px] text-accent">02</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream">Active Clinical Trial Landscape</div>
                  <div className="text-[12px] text-steel mt-[3px] italic">260+ trials — tiered by what actually matters to a BD or investment decision</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-[3px] text-right"><span>or included in full</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform">+</div>
              </div>
              <div className="bg-navy-mid border-x border-b border-rule rounded-b-[3px] hidden">
                <div className="pt-5 pr-5 pb-0 pl-[76px]">
                  <div className="font-mono text-[11px] text-free-green uppercase tracking-[0.1em] mb-3 flex items-center gap-2">Free preview — key findings</div>
                  <div className="flex flex-col gap-4 mb-5">
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>Tier A — three programmes with imminent data:</strong> BMS-986490 (NCT06730750, Phase 2a with ramucirumab, CRC), IBI3020 (NCT06963281, Chinese-origin dual-payload ADC), NILK-2301 (NCT06663839). Each has a meaningfully different linker and patient selection approach from tusamitamab</div></div>
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>The outlier with highest near-term commercial probability:</strong> SGM-101 surgical fluorescence imaging agent for CRC margin detection — bypasses systemic shedding sink, separate regulatory pathway, Phase 3 data expected 2026–26. Underrepresented in standard competitive databases due to modality categorisation</div></div>
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>Sponsor commitment divergence:</strong> Chinese biotechs (Innovent, Henlius) are advancing capital; Western large pharma has retreated. This geographic divergence is a licensing arbitrage signal, not a biology signal</div></div>
                  </div>
                </div>
                <div className="flex items-center gap-6 bg-ink border border-rule rounded-[3px] p-5 px-6 mx-5 mb-5 ml-[76px]">
                  <div className="flex-1">
                    <div className="font-mono text-[11px] text-lock-red uppercase tracking-[0.1em] mb-[6px] flex items-center gap-2">Full content locked</div>
                    <div className="flex flex-col gap-3">
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                    </div>
                    <div style={{ "fontSize": "11px", "color": "var(--steel)", "marginTop": "10px" }}>Full chapter includes: complete Tier A/B/C trial triage with readout timelines · cross-trial patient selection heterogeneity analysis · kinetic energy scoring by programme · sponsor commitment signal methodology · CAR-T and vaccine programme assessment · full NCT reference index (in Appendix)</div>
                  </div>
                  <div className="flex-shrink-0 text-center">
                    <div className="font-mono text-[22px] font-medium text-accent mb-2">$500</div>
                    <div className="text-[11px] text-steel mb-3">Single chapter licence</div>
                    <button className="bg-accent hover:bg-accent-light text-ink border-none px-[22px] py-[9px] font-sans text-[12px] font-semibold tracking-[0.06em] uppercase rounded-[2px] w-full transition-colors cursor-pointer" onClick={() => { openModal('Chapter 2: Clinical Trial Landscape') }}>Unlock Chapter</button>
                    <button className="bg-transparent hover:bg-accent-dim text-accent border border-accent px-[22px] py-[9px] font-sans text-[12px] font-semibold tracking-[0.06em] uppercase rounded-[2px] w-full mt-[6px] transition-colors cursor-pointer" onClick={() => { openModal('full') }}>Full Report — $10,000</button>
                  </div>
                </div>
              </div>
            </div>

            {/*  CH 3  */}
            <div className="mb-2" id="ch-3">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" onClick={() => { toggleChapter('ch-3') }}>
                <div className="font-mono text-[12px] text-accent">03</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream">Programme Failure Attribution</div>
                  <div className="text-[12px] text-steel mt-[3px] italic">A diagnostic, not a graveyard — every terminated programme assigned to one of four root causes</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-[3px] text-right"><span>or included in full</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform">+</div>
              </div>
              <div className="bg-navy-mid border-x border-b border-rule rounded-b-[3px] hidden">
                <div className="pt-5 pr-5 pb-0 pl-[76px]">
                  <div className="font-mono text-[11px] text-free-green uppercase tracking-[0.1em] mb-3 flex items-center gap-2">Free preview — key findings</div>
                  <div className="flex flex-col gap-4 mb-5">
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>Tusamitamab: two distinct failure causes, not one:</strong> the corneal DLT (keratopathy in 25% of Phase 3 patients, dose-limiting at 120 mg/m²) is a DM4 maytansinoid payload class effect — Cause II, modality-intrinsic. The Phase 3 efficacy failure is Cause III, trial design — no serum CEA stratification, PFS primary endpoint in a population where OS trend was positive</div></div>
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>Roche's full CEA portfolio exit (cibisatamab, cergutuzumab, CEA-IL2v) is Cause IV — strategic:</strong> the termination language in public filings does not cite biology failure. The CRS events in cibisatamab are Cause II — T-cell redirector format against a target with normal tissue expression in GI epithelium</div></div>
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>Cross-cutting finding:</strong> every programme that survived longest shared one feature — either biomarker-selected enrolment or a surgical/diagnostic application that bypasses systemic exposure entirely</div></div>
                  </div>
                </div>
                <div className="flex items-center gap-6 bg-ink border border-rule rounded-[3px] p-5 px-6 mx-5 mb-5 ml-[76px]">
                  <div className="flex-1">
                    <div className="font-mono text-[11px] text-lock-red uppercase tracking-[0.1em] mb-[6px] flex items-center gap-2">Full content locked</div>
                    <div className="flex flex-col gap-3">
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                    </div>
                    <div style={{ "fontSize": "11px", "color": "var(--steel)", "marginTop": "10px" }}>Full chapter includes: complete four-cause taxonomy with scoring criteria · every major terminated programme classified with evidence · labetuzumab govitecan SN-38 bystander analysis · MEDI-565 BiTE immunogenicity dissection · NCI TCR-engineered PBL colitis case · full attribution table (30 programmes)</div>
                  </div>
                  <div className="flex-shrink-0 text-center">
                    <div className="font-mono text-[22px] font-medium text-accent mb-2">$500</div>
                    <div className="text-[11px] text-steel mb-3">Single chapter licence</div>
                    <button className="bg-accent hover:bg-accent-light text-ink border-none px-[22px] py-[9px] font-sans text-[12px] font-semibold tracking-[0.06em] uppercase rounded-[2px] w-full transition-colors cursor-pointer" onClick={() => { openModal('Chapter 3: Failure Attribution') }}>Unlock Chapter</button>
                    <button className="bg-transparent hover:bg-accent-dim text-accent border border-accent px-[22px] py-[9px] font-sans text-[12px] font-semibold tracking-[0.06em] uppercase rounded-[2px] w-full mt-[6px] transition-colors cursor-pointer" onClick={() => { openModal('full') }}>Full Report — $10,000</button>
                  </div>
                </div>
              </div>
            </div>

            {/*  CH 4  */}
            <div className="mb-2" id="ch-4">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" onClick={() => { toggleChapter('ch-4') }}>
                <div className="font-mono text-[12px] text-accent">04</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream">Patent Landscape</div>
                  <div className="text-[12px] text-steel mt-[3px] italic">Where entry is blocked, where it is open, and where the real barriers now concentrate</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-[3px] text-right"><span>or included in full</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform">+</div>
              </div>
              <div className="bg-navy-mid border-x border-b border-rule rounded-b-[3px] hidden">
                <div className="pt-5 pr-5 pb-0 pl-[76px]">
                  <div className="font-mono text-[11px] text-free-green uppercase tracking-[0.1em] mb-3 flex items-center gap-2">Free preview — selected signals</div>
                  <div className="flex flex-col gap-4 mb-5">
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>The antibody is commoditised:</strong> A1-B1 and A2-B2 IgV-loop space is densely claimed. The A3-B3 space — where tusamitamab binds — now has a publicly deposited cryo-EM structure (PDB 8BW0) enabling rational design of adjacent-epitope antibodies by any competitor</div></div>
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>N-terminal domain remains relatively open:</strong> limited assignee concentration, NCI public domain contributions available as FTO starting points — specific sequences and method-of-use claims identified in full chapter</div></div>
                  </div>
                </div>
                <div className="flex items-center gap-6 bg-ink border border-rule rounded-[3px] p-5 px-6 mx-5 mb-5 ml-[76px]">
                  <div className="flex-1">
                    <div className="font-mono text-[11px] text-lock-red uppercase tracking-[0.1em] mb-[6px] flex items-center gap-2">Full content locked</div>
                    <div className="flex flex-col gap-3">
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                    </div>
                    <div style={{ "fontSize": "11px", "color": "var(--steel)", "marginTop": "10px" }}>Full chapter: complete domain-level assignee map · Synaffix/BI $1.3B linker deal analysis · biomarker and CDx IP layer · NCI FTO pathways · white space identification by domain and modality · strategic entry pathway for new entrant</div>
                  </div>
                  <div className="flex-shrink-0 text-center">
                    <div className="font-mono text-[22px] font-medium text-accent mb-2">$500</div>
                    <div className="text-[11px] text-steel mb-3">Single chapter licence</div>
                    <button className="bg-accent hover:bg-accent-light text-ink border-none px-[22px] py-[9px] font-sans text-[12px] font-semibold tracking-[0.06em] uppercase rounded-[2px] w-full transition-colors cursor-pointer" onClick={() => { openModal('Chapter 4: Patent Landscape') }}>Unlock Chapter</button>
                    <button className="bg-transparent hover:bg-accent-dim text-accent border border-accent px-[22px] py-[9px] font-sans text-[12px] font-semibold tracking-[0.06em] uppercase rounded-[2px] w-full mt-[6px] transition-colors cursor-pointer" onClick={() => { openModal('full') }}>Full Report — $10,000</button>
                  </div>
                </div>
              </div>
            </div>

            {/*  CH 5  */}
            <div className="mb-2" id="ch-5">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" onClick={() => { toggleChapter('ch-5') }}>
                <div className="font-mono text-[12px] text-accent">05</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream">Payload Landscape</div>
                  <div className="text-[12px] text-steel mt-[3px] italic">Why maytansinoid gave way to Topo1i — and what the data says about the next transition</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-[3px] text-right"><span>or included in full</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform">+</div>
              </div>
              <div className="bg-navy-mid border-x border-b border-rule rounded-b-[3px] hidden">
                <div className="pt-5 pr-5 pb-0 pl-[76px]">
                  <div className="font-mono text-[11px] text-free-green uppercase tracking-[0.1em] mb-3 flex items-center gap-2">Free preview — selected signals</div>
                  <div className="flex flex-col gap-4 mb-5">
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>DM4 corneal toxicity is a class effect, not a CEACAM5 effect:</strong> identical keratopathy/keratitis profile documented in mirvetuximab soravtansine (FOLR1-DM4) and trastuzumab emtansine (HER2-DM1). Corneal epithelial cells take up maytansinoid ADCs via non-specific endocytosis independent of target expression</div></div>
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>Topo1i bystander killing is mechanistically superior for CEACAM5:</strong> heterogeneous expression in CRC and NSCLC means not every tumour cell expresses CEACAM5. DXd and exatecan derivatives with larger bystander killing radius compensate — DM4's bystander radius is insufficient for this target profile</div></div>
                  </div>
                </div>
                <div className="flex items-center gap-6 bg-ink border border-rule rounded-[3px] p-5 px-6 mx-5 mb-5 ml-[76px]">
                  <div className="flex-1">
                    <div className="font-mono text-[11px] text-lock-red uppercase tracking-[0.1em] mb-[6px] flex items-center gap-2">Full content locked</div>
                    <div className="flex flex-col gap-3">
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                    </div>
                    <div style={{ "fontSize": "11px", "color": "var(--steel)", "marginTop": "10px" }}>Full chapter: DXd vs. SN-38 vs. exatecan clinical comparison · patent landscape by payload class · dual-payload platform IP (IBI3020) · combination payload hypotheses with mechanistic rationale · payload selection framework for next-generation CEACAM5 ADC</div>
                  </div>
                  <div className="flex-shrink-0 text-center">
                    <div className="font-mono text-[22px] font-medium text-accent mb-2">$500</div>
                    <div className="text-[11px] text-steel mb-3">Single chapter licence</div>
                    <button className="bg-accent hover:bg-accent-light text-ink border-none px-[22px] py-[9px] font-sans text-[12px] font-semibold tracking-[0.06em] uppercase rounded-[2px] w-full transition-colors cursor-pointer" onClick={() => { openModal('Chapter 5: Payload Landscape') }}>Unlock Chapter</button>
                    <button className="bg-transparent hover:bg-accent-dim text-accent border border-accent px-[22px] py-[9px] font-sans text-[12px] font-semibold tracking-[0.06em] uppercase rounded-[2px] w-full mt-[6px] transition-colors cursor-pointer" onClick={() => { openModal('full') }}>Full Report — $10,000</button>
                  </div>
                </div>
              </div>
            </div>

            {/*  CH 6  */}
            <div className="mb-2" id="ch-6">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" onClick={() => { toggleChapter('ch-6') }}>
                <div className="font-mono text-[12px] text-accent">06</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream">Linker Landscape</div>
                  <div className="text-[12px] text-steel mt-[3px] italic">The linker is where this field will be won — the clinical evidence and the deal data agree</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-[3px] text-right"><span>or included in full</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform">+</div>
              </div>
              <div className="bg-navy-mid border-x border-b border-rule rounded-b-[3px] hidden">
                <div className="pt-5 pr-5 pb-0 pl-[76px]">
                  <div className="font-mono text-[11px] text-free-green uppercase tracking-[0.1em] mb-3 flex items-center gap-2">Free preview — selected signals</div>
                  <div className="flex flex-col gap-4 mb-5">
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>Tusamitamab's SPDB linker is cleavable — but at the wrong site:</strong> lysine conjugation produces DAR heterogeneity (DAR 3.8 average, wide distribution). Site-specific conjugation at engineered cysteines or glycan anchors produces homogeneous DAR — directly improving the shedding sink survival ratio</div></div>
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>The $1.3B signal:</strong> Boehringer Ingelheim acquired Synaffix specifically for glycan-anchor site-specific conjugation — not for an antibody, not for a target. The linker platform itself commanded the deal value. This is the most important pricing signal in CEACAM5-adjacent IP in 2024</div></div>
                  </div>
                </div>
                <div className="flex items-center gap-6 bg-ink border border-rule rounded-[3px] p-5 px-6 mx-5 mb-5 ml-[76px]">
                  <div className="flex-1">
                    <div className="font-mono text-[11px] text-lock-red uppercase tracking-[0.1em] mb-[6px] flex items-center gap-2">Full content locked</div>
                    <div className="flex flex-col gap-3">
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                    </div>
                    <div style={{ "fontSize": "11px", "color": "var(--steel)", "marginTop": "10px" }}>Full chapter: shedding sink PK competition modelling · plasma half-life data across all CEACAM5 ADC programmes · site-specific conjugation IP landscape · DAR optimisation for high-shedding targets · white space in linker IP · patient selection solution derived from linker analysis</div>
                  </div>
                  <div className="flex-shrink-0 text-center">
                    <div className="font-mono text-[22px] font-medium text-accent mb-2"></div>
                    <div className="text-[11px] text-steel mb-3">Single chapter licence</div>
                    <button className="bg-accent hover:bg-accent-light text-ink border-none px-[22px] py-[9px] font-sans text-[12px] font-semibold tracking-[0.06em] uppercase rounded-[2px] w-full transition-colors cursor-pointer" onClick={() => { openModal('Chapter 6: Linker Landscape') }}>Unlock Chapter</button>
                    <button className="bg-transparent hover:bg-accent-dim text-accent border border-accent px-[22px] py-[9px] font-sans text-[12px] font-semibold tracking-[0.06em] uppercase rounded-[2px] w-full mt-[6px] transition-colors cursor-pointer" onClick={() => { openModal('full') }}>Full Report — $10,000</button>
                  </div>
                </div>
              </div>
            </div>

            {/*  CH 7  */}
            <div className="mb-2" id="ch-7">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" onClick={() => { toggleChapter('ch-7') }}>
                <div className="font-mono text-[12px] text-accent">07</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream">Differentiation for Long-Term Dominance</div>
                  <div className="text-[12px] text-steel mt-[3px] italic">The three-variable framework — and the population sizing that determines the commercial ceiling</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-[3px] text-right"><span>or included in full</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform">+</div>
              </div>
              <div className="bg-navy-mid border-x border-b border-rule rounded-b-[3px] hidden">
                <div className="pt-5 pr-5 pb-0 pl-[76px]">
                  <div className="font-mono text-[11px] text-free-green uppercase tracking-[0.1em] mb-3 flex items-center gap-2">Free preview — selected signals</div>
                  <div className="flex flex-col gap-4 mb-5">
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>All three errors must be corrected simultaneously:</strong> a programme with Topo1i payload but no serum CEA stratification repeats the patient selection error. A programme with site-specific conjugation but A3-B3 epitope targeting remains vulnerable to shed ectodomain competition. Sequential optimisation is insufficient</div></div>
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>SGM-101 is the underappreciated exception:</strong> surgical fluorescence guidance for CRC margin detection bypasses every systemic problem. Highest near-term commercial probability in the field. Distinct licensing model from ADC programmes — closer to medical device than oncology drug</div></div>
                  </div>
                </div>
                <div className="flex items-center gap-6 bg-ink border border-rule rounded-[3px] p-5 px-6 mx-5 mb-5 ml-[76px]">
                  <div className="flex-1">
                    <div className="font-mono text-[11px] text-lock-red uppercase tracking-[0.1em] mb-[6px] flex items-center gap-2">Full content locked</div>
                    <div className="flex flex-col gap-3">
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                    </div>
                    <div style={{ "fontSize": "11px", "color": "var(--steel)", "marginTop": "10px" }}>Full chapter: dual-criterion patient population sizing (IHC + serum CEA) in CRC, gastric, NSCLC · commercial ceiling by indication · four-scenario risk matrix with probability weights · decision triggers by scenario · combination strategy with mechanistic rationale</div>
                  </div>
                  <div className="flex-shrink-0 text-center">
                    <div className="font-mono text-[22px] font-medium text-accent mb-2"></div>
                    <div className="text-[11px] text-steel mb-3">Single chapter licence</div>
                    <button className="bg-accent hover:bg-accent-light text-ink border-none px-[22px] py-[9px] font-sans text-[12px] font-semibold tracking-[0.06em] uppercase rounded-[2px] w-full transition-colors cursor-pointer" onClick={() => { openModal('Chapter 7: Differentiation Framework') }}>Unlock Chapter</button>
                    <button className="bg-transparent hover:bg-accent-dim text-accent border border-accent px-[22px] py-[9px] font-sans text-[12px] font-semibold tracking-[0.06em] uppercase rounded-[2px] w-full mt-[6px] transition-colors cursor-pointer" onClick={() => { openModal('full') }}>Full Report — $10,000</button>
                  </div>
                </div>
              </div>
            </div>

            {/*  CH 8  */}
            <div className="mb-2" id="ch-8">
              <div className="grid grid-cols-[56px_1fr_auto_auto] gap-4 px-5 py-4 bg-navy border border-rule rounded-[3px] items-center cursor-pointer transition-colors hover:bg-navy-mid" onClick={() => { toggleChapter('ch-8') }}>
                <div className="font-mono text-[12px] text-accent">08</div>
                <div className="flex flex-col">
                  <div className="font-serif text-[18px] text-cream">2026 Deal Structure Analysis</div>
                  <div className="text-[12px] text-steel mt-[3px] italic">Where capital is moving — and what a CEACAM5 ADC at Phase 1 POC would actually license for</div>
                </div>
                <div className="font-mono text-[12px] text-steel mt-[3px] text-right"><span>or included in full</span></div>
                <div className="w-6 h-6 text-mist flex items-center justify-center transition-transform">+</div>
              </div>
              <div className="bg-navy-mid border-x border-b border-rule rounded-b-[3px] hidden">
                <div className="pt-5 pr-5 pb-0 pl-[76px]">
                  <div className="font-mono text-[11px] text-free-green uppercase tracking-[0.1em] mb-3 flex items-center gap-2">Free preview — selected signals</div>
                  <div className="flex flex-col gap-4 mb-5">
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>Licensing overtook M&amp;A as primary value driver in 2026:</strong> $250B+ across 516 transactions. For CEACAM5, this means a Phase 1 POC asset is a licensing play, not an acquisition target — and the deal structure must account for the Sanofi Phase 3 failure discount in narrative positioning</div></div>
                    <div className="font-sans text-[15px] leading-[1.7] text-mist mb-6"><div className="absolute left-0 top-[8px] w-1 h-1 bg-accent rounded-full"></div><div><strong>Chinese-origin out-licensing trajectory:</strong> Innovent/Takeda $11.4B deal structure is the template. Three active Chinese-origin CEACAM5 programmes (IBI3020, DNP002, NILK-2301) are all potential licensing candidates to Western pharma within 24–36 months of Phase 2 data</div></div>
                  </div>
                </div>
                <div className="flex items-center gap-6 bg-ink border border-rule rounded-[3px] p-5 px-6 mx-5 mb-5 ml-[76px]">
                  <div className="flex-1">
                    <div className="font-mono text-[11px] text-lock-red uppercase tracking-[0.1em] mb-[6px] flex items-center gap-2">Full content locked</div>
                    <div className="flex flex-col gap-3">
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                      <div className="h-[14px] bg-rule rounded-[2px] opacity-50"></div>
                    </div>
                    <div style={{ "fontSize": "11px", "color": "var(--steel)", "marginTop": "10px" }}>Full chapter: complete 2024–25 ADC deal comparables table · upfront/milestone/royalty benchmarks by stage · geo-split norms · the Sanofi failure discount — how to position against it · surgical fluorescence licensing model · non-ADC deal angles</div>
                  </div>
                  <div className="flex-shrink-0 text-center">
                    <div className="font-mono text-[22px] font-medium text-accent mb-2"></div>
                    <div className="text-[11px] text-steel mb-3">Single chapter licence</div>
                    <button className="bg-accent hover:bg-accent-light text-ink border-none px-[22px] py-[9px] font-sans text-[12px] font-semibold tracking-[0.06em] uppercase rounded-[2px] w-full transition-colors cursor-pointer" onClick={() => { openModal('Chapter 8: Deal Structure Analysis') }}>Unlock Chapter</button>
                    <button className="bg-transparent hover:bg-accent-dim text-accent border border-accent px-[22px] py-[9px] font-sans text-[12px] font-semibold tracking-[0.06em] uppercase rounded-[2px] w-full mt-[6px] transition-colors cursor-pointer" onClick={() => { openModal('full') }}>Full Report — $10,000</button>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/*  PRICING  */}
          <section className="py-[56px] border-b border-rule" id="pricing">
            <div className="font-mono text-[10px] text-accent uppercase tracking-[0.12em] mb-3 flex flex-col gap-3 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-accent">Access options</div>
            <h2 className="font-serif text-[22px] font-medium text-cream mb-5">Licensing &amp; Pricing</h2>

            <div className="grid grid-cols-3 gap-3 mt-2">
              <div className="bg-navy-mid border border-rule rounded-[3px] p-6">
                <div className="font-mono text-[10px] text-steel tracking-[0.1em] uppercase mb-[10px]">Chapter licence</div>
                <div className="font-serif text-[32px] text-cream font-medium mb-1"><sub className="text-[14px] font-sans text-steel font-normal">per chapter</sub></div>
                <div className="text-[13px] text-mist mb-[18px] leading-[1.6] pb-4 border-b border-rule">Access any individual chapter. Purchase only what your analysis requires. Chapters 1–3 are most relevant for target validation; 4–6 for platform and IP strategy; 7–8 for commercial and deal decisions.</div>
                <div className="flex flex-col gap-2 mb-5">
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-[1.5]">Single chapter, unlimited internal use</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-[1.5]">No redistribution outside purchasing organisation</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-[1.5]">PDF + web access</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-[1.5]">Peer-reviewed citation list included</div>
                </div>
                <button className="w-full py-[11px] px-4 font-sans text-[13px] font-semibold tracking-[0.05em] uppercase rounded-[2px] border border-accent transition-colors cursor-pointer bg-transparent hover:bg-accent-dim text-accent" onClick={() => { openModal('chapter') }}>Select Chapter</button>
              </div>

              <div className="bg-navy border border-accent rounded-[3px] p-6 relative">
                <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 bg-accent text-ink font-mono text-[10px] font-medium tracking-[0.1em] uppercase px-3 py-[3px] rounded-b-[3px]">Most Popular</div>
                <div className="font-mono text-[10px] text-steel tracking-[0.1em] uppercase mb-[10px]">Full Report</div>
                <div className="font-serif text-[32px] text-cream font-medium mb-1"> <sub className="text-[14px] font-sans text-steel font-normal">single org</sub></div>
                <div className="text-[13px] text-mist mb-[18px] leading-[1.6] pb-4 border-b border-rule">Complete report including all 8 chapters, Appendix (30-programme reference table, deal comparables, patent assignee summary), and one 60-minute analyst briefing call.</div>
                <div className="flex flex-col gap-2 mb-5">
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-[1.5]">All 8 chapters + full Appendix</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-[1.5]">60-minute Q&amp;A briefing with PharmaIntel analysts</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-[1.5]">Unlimited internal use, one organisation</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-[1.5]">PDF + web access + printable version</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-[1.5]">6-month update notification</div>
                </div>
                <button className="w-full py-[11px] px-4 font-sans text-[13px] font-semibold tracking-[0.05em] uppercase rounded-[2px] border border-accent transition-colors cursor-pointer bg-accent hover:bg-accent-light text-ink" onClick={() => { openModal('full') }}>Purchase Full Report</button>
              </div>

              <div className="bg-navy-mid border border-rule rounded-[3px] p-6">
                <div className="font-mono text-[10px] text-steel tracking-[0.1em] uppercase mb-[10px]">Enterprise + Bespoke</div>
                <div className="font-serif text-[32px] text-cream font-medium mb-1"><sub className="text-[14px] font-sans text-steel font-normal">custom</sub></div>
                <div className="text-[13px] text-mist mb-[18px] leading-[1.6] pb-4 border-b border-rule">Custom target analysis applying the PharmaIntel methodology to a target of your choosing, or multi-report series subscription including microbiology intelligence series (2026–26).</div>
                <div className="flex flex-col gap-2 mb-5">
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-[1.5]">Bespoke target analysis — your choice of target</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-[1.5]">Series subscription: oncology + microbiology</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-[1.5]">Quarterly briefing calls</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-[1.5]">Multi-user enterprise licence</div>
                  <div className="text-[12px] text-mist flex gap-2 items-baseline leading-[1.5]">Competitive Kinetic Energy Scorecard for custom target</div>
                </div>
                <button className="w-full py-[11px] px-4 font-sans text-[13px] font-semibold tracking-[0.05em] uppercase rounded-[2px] border border-accent transition-colors cursor-pointer bg-transparent hover:bg-accent-dim text-accent" onClick={() => { openModal('enterprise') }}>Enquire</button>
              </div>
            </div>
          </section>

        </div>{/*  /content-wrap  */}
        {/*  FOOTER  */}


        {/*  MODAL  */}
        <div className={`fixed inset-0 bg-[rgba(10,16,28,0.92)] z-[200] items-center justify-center p-6 ${isModalOpen ? "flex" : "hidden"}`} id="modal" onClick={(e: any) => { closeModalOutside(e) }}>
          <div className="bg-navy border border-accent rounded-[4px] p-9 max-w-[440px] w-full">
            <div className="font-serif text-[20px] text-cream mb-[6px]" id="modal-title">Unlock Access</div>
            <div className="text-[13px] text-mist mb-6 leading-[1.65]" id="modal-sub">Complete your details and we will send an invoice and access link within one business day.</div>
            <div className="mb-[14px]">
              <div className="font-mono text-[10px] text-steel tracking-[0.1em] uppercase mb-[5px] block">Full name</div>
              <input className="w-full bg-ink border border-rule rounded-[2px] px-3 py-[10px] font-sans text-[13px] text-fog outline-none focus:border-accent transition-colors" type="text" placeholder="Dr. Jane Smith" />
            </div>
            <div className="mb-[14px]">
              <div className="font-mono text-[10px] text-steel tracking-[0.1em] uppercase mb-[5px] block">Organisation</div>
              <input className="w-full bg-ink border border-rule rounded-[2px] px-3 py-[10px] font-sans text-[13px] text-fog outline-none focus:border-accent transition-colors" type="text" placeholder="Pharma Co. / Fund name" />
            </div>
            <div className="mb-[14px]">
              <div className="font-mono text-[10px] text-steel tracking-[0.1em] uppercase mb-[5px] block">Business email</div>
              <input className="w-full bg-ink border border-rule rounded-[2px] px-3 py-[10px] font-sans text-[13px] text-fog outline-none focus:border-accent transition-colors" type="email" placeholder="jane@organisation.com" />
            </div>
            <div className="mb-[14px]">
              <div className="font-mono text-[10px] text-steel tracking-[0.1em] uppercase mb-[5px] block">Role</div>
              <input className="w-full bg-ink border border-rule rounded-[2px] px-3 py-[10px] font-sans text-[13px] text-fog outline-none focus:border-accent transition-colors" type="text" placeholder="VP Business Development / R&D Director" />
            </div>
            <div className="bg-ink border border-rule rounded-[2px] px-[14px] py-[12px] flex justify-between items-center mb-5">
              <div className="text-[13px] text-mist" id="modal-price-label">Amount</div>
              <div className="font-mono text-[18px] text-accent" id="modal-price"></div>
            </div>
            <div className="flex gap-[10px]">
              <button className="flex-1 py-[11px] bg-transparent hover:text-fog hover:border-fog border border-rule text-steel font-sans text-[12px] font-semibold tracking-[0.05em] uppercase rounded-[2px] transition-colors cursor-pointer" onClick={() => { closeModal() }}>Cancel</button>
              <button className="flex-[2] py-[11px] bg-accent hover:bg-accent-light border-none text-ink font-sans text-[12px] font-semibold tracking-[0.05em] uppercase rounded-[2px] transition-colors cursor-pointer" onClick={() => { submitRequest() }}>Request Invoice &amp; Access</button>
            </div>
            <div className="text-[11px] text-steel mt-[14px] text-center leading-[1.6]">No payment is processed here. You will receive an invoice by email within one business day. Access is granted on payment confirmation.</div>
          </div>
        </div>

        {/*  Firebase Script  */}



      </div>
    </>
  );
};

export default Ceacam5Report;
