import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChapterFooter from '../components/ChapterFooter';

const Chapter1 = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-offwhite text-slate-800 font-serif pt-32 pb-16 px-4 md:px-8">

      {/* Nav breadcrumb */}
      <div className="max-w-5xl mx-auto mb-10 flex items-center justify-between font-sans text-sm">
        <Link to="/ceacam5#chapters" className="text-amethyst hover:text-vermilion transition-colors flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> Back to Report
        </Link>
        <span className="text-slate-400 uppercase tracking-widest font-semibold text-xs">Chapter 1</span>
      </div>

      {/* Chapter Header */}
      <header className="max-w-5xl mx-auto mb-14 pb-10 border-b border-amethyst/30 text-center">
        <p className="text-vermilion uppercase tracking-[0.2em] text-xs font-semibold mb-3 font-sans">AmethIntel Intelligence Report</p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          CHAPTER 1 | CEACAM5: A REJUVENATED OPPORTUNITY
        </h1>
      </header>

      {/* Body */}
      <div className="max-w-5xl mx-auto">

        {/* Intro paragraphs */}
        <div className="prose prose-lg max-w-none text-slate-700 leading-[1.8] space-y-5 mb-12">
          <p>
            CEACAM5, over several decades, has attracted sustained attention due to its combination of broad disease relevance, distinctive biological characteristics, extensive clinical precedent, and repeated cycles of technological reinvention. As a result, the field contains an unusually rich record of translational successes, setbacks, engineering adaptations, and strategic decisions, all of which individually impact the research plan, but taken together send out more robust interconnected signals.
          </p>
          <p>
            This chapter examines the biological architecture and therapeutic characteristics of CEACAM5—including structure, expression patterns, accessibility, and druggability—with particular attention to the constraints that historically limited translation and the mechanisms through which contemporary programmes seek to overcome them.
          </p>
        </div>

        {/* Four Questions Framework */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 mb-14 font-sans">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-8">
              <p className="text-vermilion uppercase tracking-wider text-xs font-bold mb-1">Question 1</p>
              <p className="font-semibold text-slate-900 mb-4">What is fundamental to the Biology that makes CEACAM5 a good target for therapy?</p>
              <ul className="text-slate-600 text-sm space-y-1">
                <li><span className="text-vermilion mr-2">→</span>expression</li>
                <li><span className="text-vermilion mr-2">→</span>polarity</li>
                <li><span className="text-vermilion mr-2">→</span>membrane accessibility</li>
              </ul>
            </div>
            <div className="pb-6 md:pb-0">
              <p className="text-vermilion uppercase tracking-wider text-xs font-bold mb-1">Question 2</p>
              <p className="font-semibold text-slate-900 mb-4">Why has translation historically been difficult?</p>
              <ul className="text-slate-600 text-sm space-y-1">
                <li><span className="text-vermilion mr-2">→</span>shedding</li>
                <li><span className="text-vermilion mr-2">→</span>homology</li>
                <li><span className="text-vermilion mr-2">→</span>payload limitations</li>
              </ul>
            </div>
            <div className="border-t border-slate-100 pt-6 md:border-r md:pr-8">
              <p className="text-vermilion uppercase tracking-wider text-xs font-bold mb-1">Question 3</p>
              <p className="font-semibold text-slate-900 mb-4">Why might those constraints be changing?</p>
              <ul className="text-slate-600 text-sm space-y-1">
                <li><span className="text-vermilion mr-2">→</span>epitope</li>
                <li><span className="text-vermilion mr-2">→</span>linker</li>
                <li><span className="text-vermilion mr-2">→</span>diagnostics</li>
              </ul>
            </div>
            <div className="border-t border-slate-100 pt-6">
              <p className="text-vermilion uppercase tracking-wider text-xs font-bold mb-1">Question 4</p>
              <p className="font-semibold text-slate-900 mb-4">What remains unresolved?</p>
              <ul className="text-slate-600 text-sm space-y-1">
                <li><span className="text-vermilion mr-2">→</span>heterogeneity</li>
                <li><span className="text-vermilion mr-2">→</span>PK uncertainty</li>
                <li><span className="text-vermilion mr-2">→</span>clinical validation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Biology paragraph + Exhibit 1 inline box */}
        <div className="prose prose-lg max-w-none text-slate-700 leading-[1.8] space-y-5 mb-6">
          <p>
            Biologically, CEACAM5 is a unique protein, expressed in the embryo and limited in normal adult human, only to be upregulated and have a disruptive expression profile in highly specific tumors. This makes it a diagnostic marker, therapy target and a prognostic marker at the same time.
          </p>
          <p>Extensive studies have elucidated the protein structure summarized in <strong>Exhibit 1</strong>.</p>
        </div>

        {/* Exhibit 1 — full-width inline box */}
        <div className="border border-slate-300 rounded-xl bg-white shadow-sm mb-10 overflow-hidden">
          <div className="bg-amethyst/10 border-b border-amethyst/30 px-6 py-3">
            <span className="font-bold text-amethyst uppercase tracking-widest text-xs font-sans">Exhibit 1</span>
          </div>
          <div className="p-6 md:p-8 space-y-4 text-slate-700 leading-[1.75] text-base">
            <p>
              CEACAM5 is a 180–200 kDa heavily glycosylated protein. Encoded on chromosome 19q13.2 and anchored to the outer leaflet of the plasma membrane via a glycosylphosphatidylinositol (GPI) lipid moiety.<sup>1,2</sup> Its structural organization — seven discrete Ig-fold domains arranged in a fixed linear sequence — directly governs epitope accessibility, cross-reactivity risk, and the practical boundaries of therapeutic targeting.
            </p>
            <p>
              There is a high degree of homology between the members of CEACAM5 family, which makes selectivity an important challenge that has been overcome using various strategies.
            </p>
            {/* Figure 1 */}
            <div className="mt-6">
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Figure 1</p>
              <div className="grid md:grid-cols-2 gap-4">
                <img src="/ch1.png" alt="CEACAM5 domain structure" className="w-full h-auto rounded-lg border border-slate-200" />
                <img src="/Pasted image.png" alt="Figure 1 description" className="w-full h-auto rounded-lg border border-slate-200" />
              </div>
            </div>
            {/* PDB Structure subsection */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="font-sans text-sm font-bold text-slate-800 mb-3">Protein Data Bank Structure</p>
              <p className="text-sm">
                The 8BW0 structure (cryo-EM, 3.11 Å) is the first high-resolution view of the A3-B3 domains of human CEACAM5 (CEA) in complex with the Fab of tusamitamab.
                It reveals a discontinuous epitope involving residues across A3-B3 plus an N-linked glycan (Asn612), explaining the antibody's high specificity for CEACAM5 over related family members.
                This is important for oncology because it guides the rational design and optimization of antibody-drug conjugates (e.g., tusamitamab ravtansine) and other targeted therapies against CEACAM5-overexpressing tumors like colorectal, lung, and gastric cancers, while minimizing off-target effects.
                Prior structures covered only the N-terminal domain; 8BW0 fills a critical gap for the membrane-proximal domains relevant to therapeutic targeting.
              </p>
              <img src="/ch12.jpg" alt="PDB 8BW0 structure" className="mt-4 max-w-md w-full h-auto rounded-lg border border-slate-200" />
              <a href="https://www.rcsb.org/structure/8BW0" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 mt-2 text-vermilion hover:text-vermilion/70 text-sm font-sans font-medium transition-colors">
                https://www.rcsb.org/structure/8BW0 <i className="fas fa-external-link-alt text-xs"></i>
              </a>
            </div>
          </div>
        </div>

        {/* "Many oncology targets..." paragraphs */}
        <div className="prose prose-lg max-w-none text-slate-700 leading-[1.8] space-y-5 mb-12">
          <p>
            Many oncology targets exhibit one of two unfavorable profiles: broad expression with unacceptable normal tissue liability, or attractive specificity with insufficient accessibility or prevalence. CEACAM5 increasingly appears to occupy an uncommon middle ground. Its expression is limited to a few tissues like colon, rectum, lung, pancreatic duct and in normal adult cells it is expressed on the apical end. In cancers this pattern is disrupted, expression is increased multi-fold and is on all sides of the cells.
          </p>
          <p>
            Across multiple epithelial malignancies, CEACAM5 demonstrates substantial and clinically actionable overexpression. At the same time, normal adult expression remains comparatively restricted and spatially compartmentalized, concentrated predominantly on luminal epithelial surfaces that are relatively shielded from systemic therapeutic exposure.
          </p>
          <p>
            This creates a differentiated starting point for therapeutic design. The expression profile and its relation with prognosis are summarized in <strong>Exhibit 2</strong>.
          </p>
        </div>

        {/* Exhibit 2 — full-width */}
        <div className="border border-slate-300 rounded-xl bg-white shadow-sm mb-12 overflow-hidden">
          <div className="bg-slate-100 border-b border-slate-200 px-6 py-3 flex items-center gap-3">
            <span className="font-bold text-slate-600 uppercase tracking-widest text-xs font-sans">Exhibit 2.</span>
            <span className="font-semibold text-slate-800 text-sm font-sans">Gene and Protein Basics — Normal Biology and Expression</span>
          </div>
          <div className="p-6 md:p-8">
            <div className="md:grid md:grid-cols-[1fr_1.2fr] gap-8">
              {/* Left text column */}
              <div className="space-y-4 text-sm text-slate-700 leading-[1.75]">
                <p>In healthy adults, CEACAM5 expression is limited and typically low. It appears mainly in:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Columnar epithelial cells (e.g., gastrointestinal tract — colon, gastric/intestine mucous cells).</li>
                  <li>Certain other epithelial surfaces (e.g., pancreas, esophagus squamous epithelium).</li>
                  <li>Fetal tissues (hence "oncofetal" antigen — high during embryonic development, especially in the gut, then largely downregulated after birth).</li>
                </ul>
                <p className="font-semibold text-slate-800 mt-4">Normal physiological roles include:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Cell adhesion</strong> (homophilic and heterophilic interactions).</li>
                  <li>Regulation of <strong>cell differentiation</strong> and polarity.</li>
                  <li>Modulation of <strong>immune responses</strong> (e.g., interactions with immune cells).</li>
                  <li>Protection against <strong>anoikis</strong> (apoptosis triggered by loss of cell anchorage).</li>
                  <li>Potential involvement in barrier functions or microbial interactions in the gut.</li>
                </ul>
                <p className="font-semibold text-slate-800 mt-4">Role in Cancer (Pathobiology)</p>
                <p>CEACAM5 is aberrantly re-expressed (overexpressed) in many epithelial malignancies, often associated with poor prognosis. It is overexpressed in:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Colorectal cancer (classic association).</li>
                  <li>Non-small cell lung cancer (NSCLC) — especially non-squamous, ~20–25% show high expression (≥2+ IHC in ≥50% cells)).</li>
                  <li>Pancreatic, gastric, esophageal, breast, medullary thyroid, liver/gallbladder, and other cancers.</li>
                </ul>
              </div>
              {/* Right images column */}
              <div className="space-y-5 mt-6 md:mt-0">
                <img src="/exhibit21.png" alt="IHC staining CEACAM5" className="w-full h-auto rounded-lg border border-slate-200 shadow-sm" />
                <p className="text-xs text-slate-500 italic -mt-2">Immunohistochemistry staining demonstrating CEACAM5 increases in tumor tissue while Claudin expression is not altered.</p>
                <img src="/exhibit22.jpg" alt="Normal vs Cancerous Gastric Mucosa" className="w-full h-auto rounded-lg border border-slate-200 shadow-sm" />
                <p className="text-xs text-slate-500 italic -mt-2">Fluorescent microscopy demonstrating CEACAM5 is overexpressed in mucosa of cancer patients. The lining is disrupted.</p>
                <img src="/exhibit23.png" alt="CEACAM5 expression gastric mucosa" className="w-full h-auto rounded-lg border border-slate-200 shadow-sm" />
                <p className="text-xs text-slate-500 italic -mt-2">CEACAM5 expression in gastric mucosa (fluorescent microscope)</p>
              </div>
            </div>

            {/* Exhibit 2 continued — tumor contributions */}
            <div className="mt-8 pt-6 border-t border-slate-200 md:grid md:grid-cols-[1fr_1.4fr] gap-8">
              <div className="space-y-3 text-sm text-slate-700 leading-[1.75]">
                <p>In tumors, CEACAM5 contributes to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Promoting <strong>cell proliferation</strong> and <strong>migration/invasion</strong>.</li>
                  <li>Facilitating <strong>metastasis</strong> (e.g., enriches epithelial gene patterns, supports outgrowth at distant sites).</li>
                  <li>Inhibiting apoptosis (e.g., anoikis resistance).</li>
                  <li>Immune modulation (may help tumors evade immune surveillance).</li>
                  <li>Signaling pathways (e.g., interactions with p38–Smad2/3 in some contexts).</li>
                </ul>
                <p className="text-slate-600 italic mt-3">It is generally considered <strong>pro-tumorigenic</strong> in most contexts when overexpressed. The expression profile is directly linked to prognosis.</p>
              </div>
              <div className="space-y-4 mt-6 md:mt-0">
                <p className="text-sm text-slate-600">Higher resolution image of single organoid of normal and cancer cells) CEACAM5 is overexpressed and localizes in the organelles of the cells.</p>
                <img src="/exhibit24.png" alt="Organoid expression" className="w-full h-auto rounded-lg border border-slate-200 shadow-sm" />
                <img src="/exhibit25.png" alt="Survival curve" className="w-full h-auto rounded-lg border border-slate-200 shadow-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Expression in Tumors text block */}
        <div className="mb-12 space-y-5 text-slate-700 leading-[1.8]">
          <h2 className="text-2xl font-bold text-slate-900 font-sans">Expression in Tumors</h2>
          <p>
            CEACAM5 (CEA) expression frequencies (primarily by IHC, with "high" often defined as ≥2+ intensity in ≥50% tumor cells for therapeutic contexts):
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Colorectal/Gastrointestinal cancers:</strong> ~90% overexpression.</li>
            <li><strong>Pancreatic (PDAC):</strong> 75% to 90% overexpression.</li>
            <li><strong>NSQ NSCLC</strong> (non-squamous, mainly adenocarcinoma): High expression in ~20–25% (moderate + high broader);</li>
            <li><strong>Breast cancer:</strong> ~50% overall (higher in luminal/HER2+ subtypes, heterogeneous, lower in TNBC).</li>
            <li><strong>Other tumors:</strong> Variable/high in gastric (~high like CRC), cervical/ovarian (subset strong), lower/limited in most normal adult tissues and many other cancers (e.g., melanoma low).</li>
          </ul>
          <p className="text-sm text-slate-500 italic">Notes: Percentages can vary by detection method (IHC score, mRNA), antibody, and cutoff.</p>
        </div>

        {/* Challenges section */}
        <div className="mb-12 space-y-5 text-slate-700 leading-[1.8]">
          <h2 className="text-2xl font-bold text-slate-900 font-sans">Challenges in Designing a CEACAM5 Therapy</h2>
          <p>
            While highly druggable biological profile, the glycosylation pattern, which makes the structures highly variable, and mechanism of the protein, not being an active enzyme with an active site which can be blocked, limit the design of small molecules. However 32 small molecule trials have been conducted, and have yielded useful information.
          </p>

          <h3 className="text-xl font-bold text-slate-800 font-sans mt-8">Soluble (Circulating) vs. Membrane-Bound CEACAM5 Distinction</h3>
          <p>
            CEACAM5 is GPI-anchored and shed into circulation as soluble CEA (sCEA) via phospholipase D. Normal serum levels are &lt;5 ng/mL; tumor patients show variable elevation (median ~5 ng/mL, occasionally up to ~2,000 ng/mL). Early anti-CEA antibodies demonstrated potential "sink" effects, T-cell redirection, or preclinical pharmacokinetics. Tumor-associated membrane CEACAM5 remains the dominant therapeutic target due to higher density and altered glycosylation/polarity.
          </p>
          <p>
            The clinical and pharmacokinetic consequence is a circulating ectodomain competes with tumour-surface CEACAM5 for ADC binding, reducing effective tumour exposure in proportion to serum CEA load. This mechanism is the primary pharmacological rationale for patient stratification by dual criteria — tumour IHC score and baseline serum CEA.
          </p>
        </div>

        {/* Overcoming the Hurdles */}
        <div className="mb-12 space-y-5 text-slate-700 leading-[1.8]">
          <h2 className="text-2xl font-bold text-slate-900 font-sans">Overcoming the Hurdles</h2>
          <p>
            The renewed interest in CEACAM5 is driven more by engineering around existing knowledge, than new discoveries. Advances in antibody design, epitope selection, payload optimization, and patient stratification have altered the practical constraints.
          </p>

          <h3 className="text-xl font-bold text-slate-800 font-sans mt-6">
            <span className="text-vermilion">Epitope</span> Engineering Further Mitigates Any Residual Sink Liability
          </h3>
          <p>
            Strategic epitope selection represents a key molecular engineering solution to further decouple therapeutic binding from soluble CEACAM5 (sCEA). CEACAM5 comprises six Ig-like domains (N-terminal A1–A3 and membrane-proximal B1–B3), with the GPI anchor at the C-terminus. GPI-PLD-mediated shedding releases the full ectodomain into circulation. Antibodies or bispecifics engineered against <strong>membrane-proximal epitopes</strong> (primarily A2 or B3 domains, located near the shedding site and cell membrane) exhibit strong preferential binding to membrane-anchored CEACAM5 on tumor cells while showing markedly reduced interaction with the shed soluble form.
          </p>
          <ul className="mt-4 space-y-3 pl-4 border-l-2 border-slate-200">
            <li className="text-slate-600 text-base leading-[1.75]">
              The <strong>CEA TCB (cibisatamab/RO6958688)</strong> binder (humanized derivative of PR1A3) targets the membrane-proximal B3 domain; preclinical data demonstrate negligible binding to sCEA and no loss of tumor-cell binding even at 5 μg/mL soluble antigen.
            </li>
            <li className="text-slate-600 text-base leading-[1.75]">
              <strong>NILK-2301</strong> (κλ body) binds the A2 domain; epitope mapping confirms competition with reference antibodies known to recognize this membrane-proximal region.
            </li>
            <li className="text-slate-600 text-base leading-[1.75]">
              In contrast, binders to more distal domains (A1 or A3) retain robust sCEA recognition and are more susceptible to sink effects.
            </li>
          </ul>
          <p className="mt-5">
            The functional outcome is improved pharmacokinetics and tumor exposure: reduced peripheral sequestration, slower clearance, and lower risk of dose-limiting sink-driven sub-therapeutic exposure in patients with high baseline or treatment-emergent sCEA. This approach is explicitly incorporated into several next-generation candidates to widen the therapeutic index beyond what polarity and expression restriction alone provide.
          </p>

          <h3 className="text-xl font-bold text-slate-800 font-sans mt-10">Comparison to HER2 and EGFR: Reduced On-Target Organ Toxicity</h3>
          <p>
            HER2 and EGFR exhibit broader, non-polarized expression across critical normal tissues (HER2 on cardiac myocytes and skin/GI mucosa; EGFR on keratinocytes, GI epithelium, and hepatocytes). This drives well-documented class-effect toxicities: HER2-directed agents cause cardiomyopathy and rash/diarrhoea; EGFR inhibitors produce severe cutaneous toxicity, diarrhoea, and hypomagnesaemia. In contrast, CEACAM5-targeted agents (e.g., Tusamitamab ravtansine/SAR408701 and subsequent molecules) have shown no analogous cardiac, widespread cutaneous, or severe GI on-target toxicities in clinical experience. Observed adverse events (e.g., reversible keratopathy with certain DM4 payloads) are predominantly payload-related rather than antigen-driven. Direct quantitative head-to-head comparisons of normal-tissue binding and toxicity across these targets remain limited in the public literature.
          </p>

          {/* Strategic Implications callout */}
          <div className="mt-10 p-6 bg-amethyst/5 border-l-4 border-amethyst rounded-r-xl">
            <h4 className="text-amethyst font-bold uppercase tracking-wider mb-3 text-xs font-sans">Strategic Implications for R&D and BD</h4>
            <p className="text-slate-600 font-medium italic text-base">
              CEACAM5 offers a differentiated therapeutic index—high tumor overexpression paired with spatially restricted normal expression—positioning it favorably versus relatively saturated targets such as HER2 (cardiotoxicity constraints) and EGFR (cutaneous/GI liabilities). This supports continued investment in ADCs, bispecifics, and cell therapies, particularly in colorectal, NSCLC, and gastric cancers.
            </p>
          </div>

          <p className="mt-8 text-slate-600 italic text-base">
            In the next chapter, we examine the clinical trials undertaken till date and the information available from them.
          </p>
        </div>

        {/* Key References */}
        <div className="mt-12 p-6 border border-slate-200 rounded-xl bg-white">
          <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider font-sans">Key References</h4>
          <ol className="text-[11px] text-slate-500 space-y-2 leading-relaxed list-decimal pl-4">
            <li>Human Protein Atlas: CEACAM5 tissue expression summary.</li>
            <li>Seckinger A et al. (2023). Development and characterization of NILK-2301 (CEACAM5xCD3 κλ body). J Immunother Cancer.</li>
            <li>Sun L et al. (2025). Advances and perspectives in CEA-targeted therapies. Cell Med.</li>
            <li>Gazzah A et al. (2022) and Tabernero J et al. (2023). Tusamitamab ravtansine Phase 1 data (Ann Oncol; Clin Cancer Res).</li>
            <li>Beauchemin N, et al. Redefined nomenclature for members of the carcinoembryonic antigen family. Exp Cell Res. 1999;252(2):243–249.</li>
            <li>Thompson JA, et al. Carcinoembryonic antigen gene family: molecular biology and clinical perspectives. J Clin Lab Anal. 1991;5(5):344–366.</li>
            <li>Hammarström S. The carcinoembryonic antigen (CEA) family: structures, suggested functions and expression in normal and malignant tissues. Semin Cancer Biol. 1999;9(2):67–81.</li>
            <li>Fedarovich A, et al. The Ig-like domains of carcinoembryonic antigen: crystal structure and homodimer characterization. J Mol Biol. 2006;363(5):1068–1080.</li>
            <li>Okarvi SM. CEA as a target for immunoscintigraphy and radioimmunotherapy. Cancer Treat Rev. 2008;34(1):13–26.</li>
            <li>Gazzah A, et al. Safety, pharmacokinetics, and antitumor activity of tusamitamab ravtansine (SAR408701). Ann Oncol. 2022;33(7):763–772.</li>
            <li>Tabernero J, et al. A phase Ia/Ib study of cibisatamab, a CEA-TCB. J Immunother Cancer. 2021;9(7):e002038.</li>
            <li>Beauchemin N, Arabzadeh A. CEACAMs in cancer progression and metastasis. Cancer Metastasis Rev. 2013;32(3–4):643–671.</li>
            <li>Thomas P, et al. A comprehensive analysis of serum CEA elevation in colorectal cancer. J Gastrointest Oncol. 2014;5(6):E9–E15.</li>
            <li>Decary S, et al. (2020). Preclinical Activity of SAR408701. Mol Cancer Ther.</li>
            <li>Tabernero J, et al. (2023). Tusamitamab Ravtansine in Advanced Solid Tumors. Clin Cancer Res.</li>
            <li>Aldilaijan AF, et al. (2023). Clinical implication of tissue CEA expression in colorectal cancer. Sci Rep.</li>
            <li>Tang F, et al. (2023). Prognostic role of serum CEA in patients with colorectal cancer liver metastasis. World J Gastrointest Oncol.</li>
            <li>Huang SC, et al. (2024). Detection and clinical significance of CEACAM5 methylation in colorectal cancer patients. Cancer Sci.</li>
            <li>Sun L, et al. (2025). Advances and perspectives in CEA-targeted therapies. Med.</li>
            <li>https://www.onclive.com/view/ceacam5-joins-a-growing-menu-of-emerging-lung-cancer-targets</li>
            <li>https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.4018</li>
            <li>https://ascopost.com/news/october-2024/carmen-lc03-tusamitamab-ravtansine-vs-docetaxel-in-previously-treated-advanced-nonsquamous-nsclc/</li>
            <li>https://www.proteinatlas.org/ENSG00000105388-CEACAM5/cancer</li>
            <li>https://www.jtocrr.org/article/S2666-3643(25)00061-X/fulltext</li>
            <li>Bacac M et al. (2016). Clin Cancer Res. A Novel Carcinoembryonic Antigen T-Cell Bispecific Antibody (membrane-proximal domain and sCEA insensitivity).</li>
            <li>Seckinger A et al. (2023). J Immunother Cancer. Development and characterization of NILK-2301 (A2 domain mapping).</li>
            <li>Claus C et al. (2025). Antibodies. CEA-4-1BBL (systematic comparison of proximal vs. distal epitopes and sCEA inhibition).</li>
          </ol>
        </div>

        {/* Footer */}
        <ChapterFooter />
      </div>
    </div>
  );
};

export default Chapter1;
