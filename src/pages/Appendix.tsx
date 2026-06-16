import { useEffect, useState } from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import ChapterFooter from '../components/ChapterFooter';

const chapter1References = [
  'Human Protein Atlas: CEACAM5 tissue expression summary.',
  'Seckinger A et al. (2023). Development and characterization of NILK-2301 (CEACAM5xCD3 κλ body). J Immunother Cancer.',
  'Sun L et al. (2025). Advances and perspectives in CEA-targeted therapies. Cell Med.',
  'Gazzah A et al. (2022) and Tabernero J et al. (2023). Tusamitamab ravtansine Phase 1 data (Ann Oncol; Clin Cancer Res).',
  'Beauchemin N, et al. Redefined nomenclature for members of the carcinoembryonic antigen family. Exp Cell Res. 1999;252(2):243-249.',
  'Thompson JA, et al. Carcinoembryonic antigen gene family: molecular biology and clinical perspectives. J Clin Lab Anal. 1991;5(5):344-366.',
  'Hammarstrom S. The carcinoembryonic antigen (CEA) family: structures, suggested functions and expression in normal and malignant tissues. Semin Cancer Biol. 1999;9(2):67-81.',
  'Fedarovich A, et al. The Ig-like domains of carcinoembryonic antigen: crystal structure and homodimer characterization. J Mol Biol. 2006;363(5):1068-1080.',
  'Okarvi SM. CEA as a target for immunoscintigraphy and radioimmunotherapy. Cancer Treat Rev. 2008;34(1):13-26.',
  'Gazzah A, et al. Safety, pharmacokinetics, and antitumor activity of tusamitamab ravtansine (SAR408701). Ann Oncol. 2022;33(7):763-772.',
  'Tabernero J, et al. A phase Ia/Ib study of cibisatamab, a CEA-TCB. J Immunother Cancer. 2021;9(7):e002038.',
  'Beauchemin N, Arabzadeh A. CEACAMs in cancer progression and metastasis. Cancer Metastasis Rev. 2013;32(3-4):643-671.',
  'Thomas P, et al. A comprehensive analysis of serum CEA elevation in colorectal cancer. J Gastrointest Oncol. 2014;5(6):E9-E15.',
  'Decary S, et al. (2020). Preclinical Activity of SAR408701. Mol Cancer Ther.',
  'Aldilaijan AF, et al. (2023). Clinical implication of tissue CEA expression in colorectal cancer. Sci Rep.',
  'Tang F, et al. (2023). Prognostic role of serum CEA in patients with colorectal cancer liver metastasis. World J Gastrointest Oncol.',
  'Huang SC, et al. (2024). Detection and clinical significance of CEACAM5 methylation in colorectal cancer patients. Cancer Sci.',
  'https://www.onclive.com/view/ceacam5-joins-a-growing-menu-of-emerging-lung-cancer-targets',
  'https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.4018',
  'https://ascopost.com/news/october-2024/carmen-lc03-tusamitamab-ravtansine-vs-docetaxel-in-previously-treated-advanced-nonsquamous-nsclc/',
  'https://www.proteinatlas.org/ENSG00000105388-CEACAM5/cancer',
  'https://www.jtocrr.org/article/S2666-3643(25)00061-X/fulltext',
  'Bacac M et al. (2016). Clin Cancer Res. A Novel Carcinoembryonic Antigen T-Cell Bispecific Antibody (membrane-proximal domain and sCEA insensitivity).',
  'Seckinger A et al. (2023). J Immunother Cancer. Development and characterization of NILK-2301 (A2 domain mapping).',
  'Claus C et5 al. (2025). Antibodies. CEA-4-1BBL (systematic comparison of proximal vs. distal epitopes and sCEA inhibition).',
];

const Appendix = () => {
  const [userName, setUserName] = useState<string>('');
  const [watermarkUrl, setWatermarkUrl] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);

    const userData = localStorage.getItem('user');
    let displayUsername = 'Guest';
    if (userData) {
      try {
        const parsed = JSON.parse(userData);
        if (parsed && parsed.username) {
          displayUsername = parsed.username;
        } else if (parsed && parsed.name) {
          displayUsername = parsed.name;
        }
      } catch (e) {
        console.error(e);
      }
    }
    setUserName(displayUsername);

    const svg = `<svg width="350" height="350" xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" font-size="18" font-weight="600" font-family="system-ui, sans-serif" fill="%239966CC" opacity="0.22" text-anchor="middle" transform="rotate(-30 175 175)">licensed to ${displayUsername}</text></svg>`;
    setWatermarkUrl("data:image/svg+xml;utf8," + encodeURIComponent(svg));
  }, []);

  const handleDownload = () => {
    (window as any).__allowPrint = true;
    window.print();
    setTimeout(() => {
      (window as any).__allowPrint = false;
    }, 1000);
  };

  return (
    <div className="chapter-capture-guard min-h-screen bg-offwhite px-4 pb-16 pt-32 font-serif text-slate-800 md:px-8">
      <div className="watermark-overlay" style={{ backgroundImage: `url("${watermarkUrl}")` }} />
      <div className="mx-auto mb-10 flex max-w-5xl items-center justify-between font-sans text-sm no-print">
        <Link to="/ceacam5#chapters" className="inline-flex items-center gap-2 text-amethyst transition-colors hover:text-vermilion">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Report
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amethyst/10 hover:bg-amethyst/20 text-amethyst hover:text-amethyst-dark font-semibold text-xs transition-colors cursor-pointer border-none"
          >
            <Download size={14} />
            Download PDF
          </button>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Appendix</span>
        </div>
      </div>

      <header className="mx-auto mb-12 max-w-5xl border-b border-amethyst/30 pb-10 text-center">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-vermilion">AmethIntel · CEACAM5 Intelligence Report</p>
        <h1 className="font-sans text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-slate-950">
          REPORT APPENDIX & BIBLIOGRAPHY
        </h1>
      </header>

      <main className="mx-auto max-w-5xl space-y-12 font-sans">
        {/* Section 1: Bibliography */}
        <section className="bg-white rounded-lg border border-slate-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Chapter 1 Bibliography & References
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
            {chapter1References.map((ref, idx) => (
              <li key={idx} className="pl-1">
                {ref.startsWith('http') ? (
                  <a href={ref} target="_blank" rel="noreferrer" className="text-amethyst hover:underline break-all inline-flex items-center gap-1">
                    {ref}
                  </a>
                ) : (
                  ref
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* Section 2: Reference Tables Placeholder */}
        <section className="bg-white rounded-lg border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-slate-900 pb-2 border-b border-slate-100">
            Reference Tables & Indices
          </h2>
          
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-slate-800">30-Programme Reference Table</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Complete clinical asset tracking matrix covering 30 active, suspended, and historical CEACAM5 programmes with targets, modalities, payload classes, and current status.
            </p>
            <div className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded text-center text-xs text-slate-400">
              [Table content locked — Upgraded subscription required]
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-base font-semibold text-slate-800">NCT Trial Index</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Cross-referenced database of ClinicalTrials.gov identifiers for all evaluated CEACAM5 clinical trials.
            </p>
            <div className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded text-center text-xs text-slate-400">
              [Index content locked — Upgraded subscription required]
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-base font-semibold text-slate-800">Deal Comparables & Patent Assignee Summary</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Historical M&A transaction parameters, licensing upfront/milestone structures, and patent portfolio assignment maps.
            </p>
            <div className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded text-center text-xs text-slate-400">
              [Summary content locked — Upgraded subscription required]
            </div>
          </div>
        </section>

        <ChapterFooter />
      </main>
    </div>
  );
};

export default Appendix;
