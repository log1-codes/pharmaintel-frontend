import { Link } from 'react-router-dom';
import ChapterFooter from '../components/ChapterFooter';

const Chapter1 = () => {
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
              The 8BW0 structure (cryo-EM, 3.11 Å) is the first high-resolution view of the A3-B3 domains of human CEACAM5 in complex with the Fab of tusamitamab.
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
          <div className="p-6 border border-slate-200 rounded-xl bg-white">
            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Key References</h4>
            <ul className="text-xs text-slate-500 space-y-3 leading-relaxed">
              <li>Beauchemin N, et al. Redefined nomenclature for members of the carcinoembryonic antigen family. <em className="text-slate-700">Exp Cell Res.</em> 1999</li>
              <li>Gazzah A, et al. Safety, pharmacokinetics, and antitumor activity of the anti-CEACAM5–DM4 ADC... <em className="text-slate-700">Ann Oncol.</em> 2022</li>
              <li>Tabernero J, et al. A phase Ia/Ib study of cibisatamab... <em className="text-slate-700">J Immunother Cancer.</em> 2021</li>
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
