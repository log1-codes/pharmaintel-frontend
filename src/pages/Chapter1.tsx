import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChapterFooter from '../components/ChapterFooter';

const Chapter1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-offwhite text-slate-800 font-serif pt-32 pb-16 px-6 relative">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto mb-12 flex items-center justify-between font-sans text-sm">
        <Link to="/ceacam5#chapters" className="text-amethyst hover:text-vermilion transition-colors flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> Back to Report
        </Link>
        <span className="text-slate-400 uppercase tracking- font-semibold">Chapter 1</span>
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto mb-16 pb-12 border-b border-amethyst/30 text-center">
        <p className="text-vermilion uppercase tracking-[0.2em] text-sm font-semibold mb-4 font-sans">AmethIntel Intelligence Report</p>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          CEACAM5: A Rejuvenated Opportunity
        </h1>
      </header>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto relative flex flex-col lg:flex-row gap-16">

        {/* Main Text Column */}
        <div className="flex-1 space-y-8 text-lg leading-[1.8] text-slate-700">
          <p className="text-xl leading-relaxed text-slate-800 font-medium">
            CEACAM5, over several decades, has attracted sustained attention due to its combination of broad disease relevance, distinctive biological characteristics, extensive clinical precedent, and repeated cycles of technological reinvention. As a result, the field contains an unusually rich record of translational successes, setbacks, engineering adaptations, and strategic decisions, all of which individually impact the research plan, but taken together send out more robust interconnected signals.
          </p>
          <p>
            This chapter examines the biological architecture and therapeutic characteristics of CEACAM5—including structure, expression patterns, accessibility, and druggability—with particular attention to the constraints that historically limited translation and the mechanisms through which contemporary programmes seek to overcome them.
          </p>

          {/* Key Questions Block */}
          <div className="my-12 p-8 bg-white border border-slate-200 rounded-xl shadow-sm font-sans">
            <h3 className="text-amethyst font-bold uppercase tracking-wider mb-6 text-sm">Framework Questions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">1. What makes CEACAM5 a good target?</h4>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li><span className="text-vermilion mr-2">→</span>expression</li>
                  <li><span className="text-vermilion mr-2">→</span>polarity</li>
                  <li><span className="text-vermilion mr-2">→</span>membrane accessibility</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">2. Why has translation been difficult?</h4>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li><span className="text-vermilion mr-2">→</span>shedding</li>
                  <li><span className="text-vermilion mr-2">→</span>homology</li>
                  <li><span className="text-vermilion mr-2">→</span>payload limitations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">3. Why are constraints changing?</h4>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li><span className="text-vermilion mr-2">→</span>epitope</li>
                  <li><span className="text-vermilion mr-2">→</span>linker</li>
                  <li><span className="text-vermilion mr-2">→</span>diagnostics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">4. What remains unresolved?</h4>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li><span className="text-vermilion mr-2">→</span>heterogeneity</li>
                  <li><span className="text-vermilion mr-2">→</span>PK uncertainty</li>
                  <li><span className="text-vermilion mr-2">→</span>clinical validation</li>
                </ul>
              </div>
            </div>
          </div>

          <p>
            Biologically, CEACAM5 is a unique protein, expressed in the embryo and limited in normal adult human, only to be upregulated and have a disruptive expression profile in highly specific tumors. This makes it a diagnostic market, therapy target and a prognostic marker at the same time.
          </p>

          <p>Extensive studies have elucidated the protein structure summarized in <strong>Exhibit 1</strong>.</p>

          <div className="my-10 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 uppercase tracking-widest text-sm mb-4">Figure 1</h4>
            <img src="/ch1.png" alt="Figure 1" className="w-full h-auto rounded-lg mb-6" />
            <img src="/Pasted image.png" alt="Figure 1 Description" className="w-full h-auto rounded-lg" />
          </div>


          <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Challenges in Designing a CEACAM5 Therapy</h2>

          <p>
            While highly druggable biological profile, the glycosylation pattern, which makes the structures highly variable, and mechanism of the protein, not being an active enzyme with an active site which can be blocked, limit the design of small molecules. However 32 small molecule trials have been conducted, and have yielded useful information.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-slate-800" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Soluble vs. Membrane-Bound CEACAM5 Distinction</h3>
          <p>
            CEACAM5 is GPI-anchored and shed into circulation as soluble CEA (sCEA) via phospholipase D. Normal serum levels are &lt;5 ng/mL; tumor patients show variable elevation (median ~5 ng/mL, occasionally up to ~2,000 ng/mL). Early anti-CEA antibodies demonstrated potential "sink" effects with accelerated clearance. However, modern high-affinity antibodies and ADCs exhibit minimal impact of physiologic or elevated sCEA on tumor-cell binding.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Overcoming the Hurdles</h2>
          <p>
            The renewed interest in CEACAM5 is driven more by engineering around existing knowledge, than new discoveries. Advances in antibody design, epitope selection, payload optimization, and patient stratification have altered the practical constraints.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-slate-800" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Epitope Engineering Mitigates Sink Liability</h3>
          <p>
            Strategic epitope selection represents a key molecular engineering solution to further decouple therapeutic binding from soluble CEACAM5. Antibodies engineered against <strong>membrane-proximal epitopes</strong> (primarily A2 or B3 domains) exhibit strong preferential binding to membrane-anchored CEACAM5 on tumor cells while showing markedly reduced interaction with the shed soluble form.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-slate-800" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Comparison to HER2 and EGFR: Reduced Toxicity</h3>
          <p>
            HER2 and EGFR exhibit broader, non-polarized expression across critical normal tissues. In contrast, CEACAM5-targeted agents have shown no analogous cardiac, widespread cutaneous, or severe GI on-target toxicities in clinical experience.
          </p>

          
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6 text-slate-800" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Exhibit 2: Expression & Data</h3>
            <div className="flex flex-col gap-6">
              <img src="/exhibit21.png" alt="Exhibit 2.1" className="w-full h-auto rounded-xl shadow-sm border border-slate-200" />
              <img src="/exhibit22.jpg" alt="Exhibit 2.2" className="w-full h-auto rounded-xl shadow-sm border border-slate-200" />
              <img src="/exhibit23.png" alt="Exhibit 2.3" className="w-full h-auto rounded-xl shadow-sm border border-slate-200" />
              <img src="/exhibit24.png" alt="Exhibit 2.4" className="w-full h-auto rounded-xl shadow-sm border border-slate-200" />
              <img src="/exhibit25.png" alt="Exhibit 2.5" className="w-full h-auto rounded-xl shadow-sm border border-slate-200" />
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200">
            <h4 className="text-amethyst font-bold uppercase tracking-wider mb-6 text-sm font-sans">Strategic Implications for R&D and BD</h4>
            <p className="text-slate-600 font-medium italic">
              CEACAM5 offers a differentiated therapeutic index—high tumor overexpression paired with spatially restricted normal expression—positioning it favorably versus relatively saturated targets such as HER2 and EGFR. This supports continued investment in ADCs, bispecifics, and cell therapies, particularly in colorectal, NSCLC, and gastric cancers.
            </p>
          </div>
        </div>

        {/* Right Sidebar for Exhibits */}
        <div className="lg:w-72 flex-shrink-0 space-y-8 font-sans">

          {/* Exhibit 1 */}
          <div className="bg-amethyst/5 border-l-4 border-amethyst p-6 rounded-r-xl">
            <h4 className="font-bold text-amethyst uppercase tracking-widest text-xs mb-3">Exhibit 1</h4>
            <h5 className="font-semibold text-slate-900 mb-2">Protein Data Bank Structure</h5>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              The 8BW0 structure (cryo-EM, 3.11 Å) is the first high-resolution view of the A3-B3 domains of human CEACAM5 (CEA) in complex with the Fab of tusamitamab.
              It reveals a discontinuous epitope involving residues across A3-B3 plus an N-linked glycan (Asn612), explaining the antibody's high specificity for CEACAM5 over related family members.
              This is important for oncology because it guides the rational design and optimization of antibody-drug conjugates (e.g., tusamitamab ravtansine) and other targeted therapies against CEACAM5-overexpressing tumors like colorectal, lung, and gastric cancers, while minimizing off-target effects.
              Prior structures covered only the N-terminal domain; 8BW0 fills a critical gap for the membrane-proximal domains relevant to therapeutic targeting.
            </p>
            <a href="https://www.rcsb.org/structure/8BW0" target="_blank" rel="noreferrer" className="text-vermilion hover:text-vermilion/80 text-sm font-medium flex items-center gap-1 transition-colors">
              View Structure <i className="fas fa-external-link-alt text-xs"></i>
            </a>
          </div>

          {/* Exhibit 2 */}
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl shadow-sm">
            <h4 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-3">Exhibit 2</h4>
            <h5 className="font-semibold text-slate-900 mb-2">Expression in Tumors</h5>
            <ul className="text-sm text-slate-600 space-y-3">
              <li><strong className="text-slate-800">CRC/GI:</strong> ~90% overexpression.</li>
              <li><strong className="text-slate-800">Pancreatic:</strong> 75% to 90% overexpression.</li>
              <li><strong className="text-slate-800">NSQ NSCLC:</strong> High expression in ~20–25%.</li>
              <li><strong className="text-slate-800">Breast:</strong> ~50% overall (higher in luminal).</li>
            </ul>
          </div>

          {/* Key References */}
          <div className="p-6 border border-slate-200 rounded-xl bg-white mt-8">
            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Key References</h4>
            <ul className="text-[11px] text-slate-500 space-y-3 leading-relaxed break-all">
              <li>1. Human Protein Atlas: CEACAM5 tissue expression summary.</li>
              <li>2. Seckinger A et al. (2023). Development and characterization of NILK-2301 (CEACAM5xCD3 κλ body). J Immunother Cancer.</li>
              <li>3. Sun L et al. (2025). Advances and perspectives in CEA-targeted therapies. Cell Med.</li>
              <li>4. Gazzah A et al. (2022) and Tabernero J et al. (2023). Tusamitamab ravtansine Phase 1 data (Ann Oncol; Clin Cancer Res).</li>
              <li>5. Beauchemin N, et al. Redefined nomenclature for members of the carcinoembryonic antigen family. Exp Cell Res. 1999;252(2):243–249. doi: 10.1006/excr.1999.4595</li>
              <li>6. Thompson JA, et al. Carcinoembryonic antigen gene family: molecular biology and clinical perspectives. J Clin Lab Anal. 1991;5(5):344–366. doi: 10.1002/jcla.1860050510</li>
              <li>7. Hammarström S. The carcinoembryonic antigen (CEA) family: structures, suggested functions and expression in normal and malignant tissues. Semin Cancer Biol. 1999;9(2):67–81. doi: 10.1006/scbi.1998.0119</li>
              <li>8. Fedarovich A, et al. The Ig-like domains of carcinoembryonic antigen: crystal structure and homodimer characterization. J Mol Biol. 2006;363(5):1068–1080. doi: 10.1016/j.jmb.2006.08.083</li>
              <li>9. Okarvi SM. CEA as a target for immunoscintigraphy and radioimmunotherapy: recent developments and future challenges. Cancer Treat Rev. 2008;34(1):13–26. doi: 10.1016/j.ctrv.2007.07.007</li>
              <li>10. Gazzah A, et al. Safety, pharmacokinetics, and antitumor activity of the anti-CEACAM5–DM4 antibody–drug conjugate tusamitamab ravtansine (SAR408701) in patients with advanced solid tumors. Ann Oncol. 2022;33(7):763–772. doi: 10.1016/j.annonc.2022.03.277</li>
              <li>11. Tabernero J, et al. A phase Ia/Ib study of cibisatamab, a CEA-TCB, in patients with CEA-expressing solid tumors. J Immunother Cancer. 2021;9(7):e002038. doi: 10.1136/jitc-2020-002038</li>
              <li>12. Beauchemin N, Arabzadeh A. Carcinoembryonic antigen-related cell adhesion molecules (CEACAMs) in cancer progression and metastasis. Cancer Metastasis Rev. 2013;32(3–4):643–671. doi: 10.1007/s10555-013-9444-6</li>
              <li>13. Thomas P, et al. A comprehensive analysis of serum carcinoembryonic antigen elevation in colorectal cancer. J Gastrointest Oncol. 2014;5(6):E9–E15. doi: 10.3978/j.issn.2078-6891.2014.05.02</li>
              <li>14. Beauchemin N, Arabzadeh A. (2013). Carcinoembryonic antigen-related cell adhesion molecules (CEACAMs) in cancer progression and metastasis. Cancer Metastasis Rev.</li>
              <li>15. Decary S, et al. (2020). Preclinical Activity of SAR408701: A Novel Anti-CEACAM5-Maytansinoid Antibody-Drug Conjugate. Mol Cancer Ther.</li>
              <li>16. Tabernero J, et al. (2023). Tusamitamab Ravtansine in Patients with Advanced Solid Tumors. Clin Cancer Res. (Phase 1 safety/efficacy in CEACAM5-expressing tumors).</li>
              <li>17. Aldilaijan AF, et al. (2023). Clinical implication of tissue carcinoembryonic antigen expression in colorectal cancer. Sci Rep. (Prognostic value of tissue CEA in CRC).</li>
              <li>18. Tang F, et al. (2023). Prognostic role of serum carcinoembryonic antigen in patients with colorectal cancer liver metastasis. World J Gastrointest Oncol. (Meta-analysis on serum CEA prognosis in CRCLM).</li>
              <li>19. Huang SC, et al. (2024). Detection and clinical significance of CEACAM5 methylation in colorectal cancer patients. Cancer Sci. (Mechanisms and clinical features of CEA expression).</li>
              <li>20. Sun L, et al. (2025). Advances and perspectives in CEA-targeted therapies. Med. (Recent review on CEA/CEACAM5-targeted therapies, including ADCs and trial outcomes).</li>
              <li>21. https://www.onclive.com/view/ceacam5-joins-a-growing-menu-of-emerging-lung-cancer-targets</li>
              <li>22. https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.4018</li>
              <li>23. https://ascopost.com/news/october-2024/carmen-lc03-tusamitamab-ravtansine-vs-docetaxel-in-previously-treated-advanced-nonsquamous-nsclc/</li>
              <li>24. https://www.proteinatlas.org/ENSG00000105388-CEACAM5/cancer</li>
              <li>25. https://www.jtocrr.org/article/S2666-3643(25)00061-X/fulltext</li>
              <li>26. Bacac M et al. (2016). Clin Cancer Res. A Novel Carcinoembryonic Antigen T-Cell Bispecific Antibody… (membrane-proximal domain and sCEA insensitivity).</li>
              <li>27. Seckinger A et al. (2023). J Immunother Cancer. Development and characterization of NILK-2301… (A2 domain mapping).</li>
              <li>28. Claus C et al. (2025). Antibodies. CEA-4-1BBL… (systematic comparison of proximal vs. distal epitopes and sCEA inhibition).</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Footer Container */}
      <div className="max-w-4xl mx-auto">
        <ChapterFooter />
      </div>
    </div>
  );
};

export default Chapter1;
