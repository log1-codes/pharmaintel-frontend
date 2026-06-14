import { useEffect, useState, type ReactNode } from 'react';
import { ArrowLeft, ExternalLink, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import ChapterFooter from '../components/ChapterFooter';

const guidingQuestions = [
  {
    label: 'Question 1',
    question: 'What is fundamental to the Biology that makes CEACAM5 a good target for therapy?',
    answers: ['expression', 'polarity', 'membrane accessibility'],
  },
  {
    label: 'Question 2',
    question: 'Why has translation historically been difficult?',
    answers: ['shedding', 'homology', 'payload limitations'],
  },
  {
    label: 'Question 3',
    question: 'Why might those constraints be changing?',
    answers: ['epitope', 'linker', 'diagnostics'],
  },
  {
    label: 'Question 4',
    question: 'What remains unresolved?',
    answers: ['heterogeneity', 'PK uncertainty', 'clinical validation'],
  },
];

const expressionFrequencies = [
  ['Colorectal/Gastrointestinal cancers', '~90% overexpression.'],
  ['Pancreatic (PDAC)', '75% to 90% overexpression.'],
  ['NSQ NSCLC (non-squamous, mainly adenocarcinoma)' ,'High expression in ~20–25% (moderate + high broader);'],
  ['Breast cancer', '~50% overall (higher in luminal/HER2+ subtypes, heterogeneous, and lower in TNBC).'],
  ['Other tumors', 'Variable/high in gastric (~high like CRC), cervical/ovarian (subset strong), lower/limited in most normal adult tissues and many other cancers (e.g., melanoma low).'],
];

const normalExpression = [
  'Columnar epithelial cells (e.g., gastrointestinal tract — colon, gastric/intestine mucous cells).',
  'Certain other epithelial surfaces (e.g., pancreas, esophagus squamous epithelia)',
  'Fetal tissues (hence "oncofetal" antigen — high during embryonic development, especially in the gut, then largely downregulated after birth).',
];

const physiologicalRoles = [
  'Cell adhesion (homophilic and heterophilic interactions).',
  'Regulation of cell differentiation and polarity.',
  'Modulation of immune responses (e.g., interactions with immune cells).',
  'Protection against anoikis (apoptosis triggered by loss of cell anchorage).',
  'Potential involvement in barrier functions or microbial interactions in the gut.',
];

const tumorRoles = [
  'Promoting cell proliferation and migration/invasion.',
  'Facilitating metastasis (e.g., enriches epithelial gene patterns, supports outgrowth at distant sites).',
  'Inhibiting apoptosis (e.g., anoikis resistance).',
  'Immune modulation (may help tumors evade immune surveillance).',
  'Signaling pathways (e.g., interactions with p38–Smad2/3 in some contexts).',
];

const cancerExpressionSites = [
  'Colorectal cancer (classic association).',
  'Non-small cell lung cancer (NSCLC — especially nonsquamous, ~20–25% show high expression [≥2+ IHC in ≥50% cells]).',
  'Pancreatic, gastric, esophageal, breast, medullary thyroid, liver/gallbladder, and other cancers.',
];

const exhibitPrimaryImages = [
  {
    src: '/exhibit21.png',
    alt: 'IHC staining showing CEACAM5 in tumor tissue',
    caption: 'Immunohistochemistry staining demonstrating CEACAM5 increases in tumor tissue while Claudin expression is not altered.',
  },
  {
    src: '/exhibit22.jpg',
    alt: 'Normal and cancerous gastric mucosa fluorescence microscopy',
    caption: 'Fluorescent microscopy demonstrating CEACAM5 overexpression in mucosa of cancer patients, with disrupted lining.',
  },
  {
    src: '/exhibit23.png',
    alt: 'CEACAM5 expression in gastric mucosa',
    caption: 'CEACAM5 expression in gastric mucosa by fluorescent microscope.',
  },
  {
    src: '/exhibit24.png',
    alt: 'Normal and cancer organoid CEACAM5 localization',
    caption: 'Higher-resolution organoid image showing CEACAM5 overexpression and cellular localization in cancer cells.',
  },
];

const epitopeNotes = [
  <>
    The <strong>CEA TCB (cibisatamab/RO6958688)</strong> binder, a humanized derivative of PR1A3, targets the membrane-proximal B3 domain; preclinical data demonstrate negligible binding to sCEA and no loss of tumor-cell binding even at 5 μg/mL soluble antigen.
  </>,
  <>
    <strong>NILK-2301 (κλ body)</strong>  binds the A2 domain; epitope mapping confirms competition with reference antibodies known to recognize this membrane-proximal region
  </>,
  <>In contrast, binders to more distal domains, including A1 or A3, retain robust sCEA recognition and are more susceptible to sink effects.</>,
];

const references = [
  'Human Protein Atlas: CEACAM5 tissue expression summary.',
  'Seckinger A et al. (2023). Development and characterization of NILK-2301 (CEACAM5xCD3 κλ body).  J Immunother Cancer .',
  'Sun L et al. (2025). Advances and perspectives in CEA-targeted therapies.  Cell Med .',
  'Gazzah A et al. (2022) and Tabernero J et al. (2023). Tusamitamab ravtansine Phase 1 data ( Ann Oncol ;  Clin Cancer Res ).',
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
  'Claus C et al. (2025). Antibodies. CEA-4-1BBL (systematic comparison of proximal vs. distal epitopes and sCEA inhibition).',
];

const TextBlock = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <section className={`space-y-5 text-lg leading-[1.85] text-slate-700 text-justify ${className}`}>
    {children}
  </section>
);

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2 className="font-sans text-2xl font-bold leading-tight text-slate-950 md:text-3xl">{children}</h2>
);

const Subheading = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <h3 className={`font-sans text-lg font-bold leading-tight text-slate-800 ${className}`}>{children}</h3>
);

const BulletList = ({ items }: { items: ReactNode[] }) => (
  <ul className="list-disc space-y-2 pl-6">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const ExhibitShell = ({ label, title, children }: { label: string; title?: string; children: ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="overflow-hidden rounded-lg border border-amber-200 bg-[#F8E7D7] shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-200/50 bg-[#F5DBC2] px-5 py-3 font-sans">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amethyst">{label}</span>
          {title && <span className="text-sm font-semibold text-slate-800">{title}</span>}
        </div>
      </div>
      <div className="relative">
        <div 
          className={`exhibit-content-container transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded ? 'max-h-[5000px] p-5 md:p-8 pb-16' : 'max-h-[320px] p-5 md:p-8 pb-24'
          }`}
        >
          <div className="text-sm text-slate-700 space-y-6">
            {children}
          </div>
        </div>
        
        {/* Fade overlay when collapsed */}
        {!isExpanded && (
          <div className="exhibit-fade-overlay absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8E7D7] via-[#F8E7D7]/85 to-transparent pointer-events-none" />
        )}
        
        {/* Toggle button */}
        <div className="exhibit-toggle-btn-container absolute bottom-4 left-0 right-0 flex justify-center z-10">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-2 rounded-full bg-white hover:bg-slate-50 text-amethyst font-sans text-xs font-bold uppercase tracking-wider shadow-sm border border-amber-200/60 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  );
};

const Chapter1 = () => {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);

    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const parsed = JSON.parse(userData);
        if (parsed && parsed.name) {
          setUserName(parsed.name);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleDownload = () => {
    (window as any).__allowPrint = true;

    const resetPrint = () => {
      (window as any).__allowPrint = false;
      window.removeEventListener('afterprint', resetPrint);
    };

    window.addEventListener('afterprint', resetPrint);
    window.print();
  };

  const currentDate = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="chapter-capture-guard min-h-screen bg-offwhite px-4 pb-16 pt-32 font-serif text-slate-800 md:px-8">
      <div className="watermark-overlay" />
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
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Chapter 1</span>
        </div>
      </div>

      {/* Print-only header with logo, name, user, and date */}
      <div className="print-only max-w-5xl mx-auto items-center justify-between border-b border-slate-200 pb-4 mb-8 font-sans">
        <div className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="AmethIntel Logo" className="h-8 object-contain" />
          <span className="font-bold text-xl text-slate-900">AmethIntel</span>
        </div>
        <div className="text-right text-xs text-slate-500 space-y-1">
          {userName && <div>Downloaded by: <span className="font-semibold text-slate-800">{userName}</span></div>}
          <div>Date: <span className="font-semibold text-slate-800">{currentDate}</span></div>
        </div>
      </div>

      <header className="mx-auto mb-12 max-w-5xl border-b border-amethyst/30 pb-10 text-center">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-vermilion">AmethIntel · CEACAM5 Intelligence Report</p>
        <h1 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-tight text-slate-950 md:whitespace-nowrap">
          CHAPTER 1 | CEACAM5: A REJUVENATED OPPORTUNITY
        </h1>
      </header>

      <main className="mx-auto max-w-5xl space-y-12">
        <TextBlock>
          <p>
            CEACAM5, over several decades, has attracted sustained attention due to its combination of broad disease relevance, distinctive biological characteristics, extensive clinical precedent, and repeated cycles of technological reinvention. As a result, the field contains an unusually rich record of translational successes, setbacks, engineering adaptations, and strategic decisions, all of which individually impact the research plan, but taken together send out more robust interconnected signals.
          </p>
          <p>
            This chapter examines the biological architecture and therapeutic characteristics of CEACAM5, including structure, expression patterns, accessibility, and druggability, with particular attention to the constraints that historically limited translation and the mechanisms through which contemporary programmes seek to overcome them.
          </p>
        </TextBlock>

        <section className="rounded-lg border border-slate-200 bg-white p-6 font-sans shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {guidingQuestions.map((item, index) => (
              <div
                key={item.label}
                className={`border-slate-100 pb-6 md:pb-0 ${index < 2 ? 'border-b' : ''} ${index % 2 === 0 ? 'md:border-r md:pr-8' : ''}`}
              >
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-vermilion">{item.label}</p>
                <p className="mb-4 font-semibold text-slate-950">{item.question}</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  {item.answers.map((answer) => (
                    <li key={answer} className="flex items-center gap-2">
                      <span className="text-vermilion">-&gt;</span>
                      {answer}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <TextBlock>
          <p>
            Biologically, CEACAM5 is a unique protein, expressed in the embryo and limited in normal adult human, only to be upregulated and have a disruptive expression profile in highly specific tumors. This makes it a diagnostic marker, therapy target and a prognostic marker at the same time.
          </p>
          <p>
            Extensive studies have elucidated the protein structure summarized in <strong>Exhibit 1</strong>.
          </p>
        </TextBlock>

        <ExhibitShell label="Exhibit 1" title="Structure and Homology">
          <div className="space-y-4 text-sm leading-relaxed text-slate-700 text-justify">
            <p>
              CEACAM5 is a 180-200 kDa heavily glycosylated protein. Encoded on chromosome 19q13.2 and anchored to the outer leaflet of the plasma membrane via a glycosylphosphatidylinositol (GPI) lipid moiety.<sup>1,2</sup> Its structural organization, seven discrete Ig-fold domains arranged in a fixed linear sequence, directly governs epitope accessibility, cross-reactivity risk, and the practical boundaries of therapeutic targeting.
            </p>
            <p>
              There is a high degree of homology between the members of CEACAM5 family, which makes selectivity an important challenge that has been overcome using various strategies.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-[1fr_1.05fr] md:items-center">
            <figure>
              <img src="/ch1.png" alt="Human CEACAM family domain architecture" className="w-full rounded-lg border border-amber-200 bg-white shadow-sm" />
            </figure>
            <figure className="space-y-2">
              <img src="/Pasted image.png" alt="Figure 1 explanation from the draft document" className="w-full rounded-lg border border-amber-200 bg-white shadow-sm" />
              <figcaption className="font-sans text-xs leading-relaxed text-slate-500">
                <strong>Figure 1 |</strong> Human CEACAM family proteins, identified as CD66 family members, share a characteristic N-terminal IgV domain and variable IgC2 domains. CEACAM5 and CEACAM6 are GPI-anchored and internalize upon occupancy, enabling toxic payload delivery by antibodies designed for CEACAM5-selective epitopes.
              </figcaption>
            </figure>
          </div>

          <div className="border-t border-amber-200/50 pt-6">
            <Subheading className="text-slate-900">Protein Data Bank Structure</Subheading>
            <div className="mt-4 grid gap-6 md:grid-cols-[minmax(0,1fr)_280px] md:items-start">
              <div className="space-y-4 text-sm leading-relaxed text-slate-700 text-justify">
                <p>
                  The 8BW0 structure (cryo-EM, 3.11 Å) is the first high-resolution view of the A3-B3 domains of human CEACAM5 (CEA) in complex with the Fab of tusamitamab.
                </p>
                <p>
                  It reveals a discontinuous epitope involving residues across A3-B3 plus an N-linked glycan (Asn612), explaining the antibody's high specificity for CEACAM5 over related family members.
                </p>
                <p>
                  This is important for oncology because it guides the rational design and optimization of antibody-drug conjugates and other targeted therapies against CEACAM5-overexpressing tumors like colorectal, lung, and gastric cancers, while minimizing off-target effects.
                </p>
                <p>
                  Prior structures covered only the N-terminal domain; 8BW0 fills a critical gap for the membrane-proximal domains relevant to therapeutic targeting.
                </p>
              </div>
              <figure className="space-y-2">
                <img src="/ch12.jpg" alt="PDB 8BW0 CEACAM5 tusamitamab Fab structure" className="w-full rounded-lg border border-amber-200 bg-white shadow-sm" />
                <figcaption className="mt-1">
                  <a href="https://www.rcsb.org/structure/8BW0" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-vermilion transition-colors hover:text-vermilion/70">
                    RCSB PDB 8BW0
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </ExhibitShell>

        <TextBlock>
          <p>
            Many oncology targets exhibit one of two unfavorable profiles: broad expression with unacceptable normal tissue liability, or attractive specificity with insufficient accessibility or prevalence. CEACAM5 increasingly appears to occupy an uncommon middle ground. Its expression is limited to a few tissues like colon, rectum, lung, pancreatic duct and in normal adult cells it is expressed on the apical end. In cancers this pattern is disrupted, expression is increased multi-fold and is on all sides of the cells.
          </p>
          <p>
            Across multiple epithelial malignancies, CEACAM5 demonstrates substantial and clinically actionable overexpression. At the same time, normal adult expression remains comparatively restricted and spatially compartmentalized, concentrated predominantly on luminal epithelial surfaces that are relatively shielded from systemic therapeutic exposure.
          </p>
          <p>
            This creates a differentiated starting point for therapeutic design. The expression profile and its relation with prognosis are summarized in <strong>Exhibit 2</strong>.
          </p>
        </TextBlock>

        <ExhibitShell label="Exhibit 2" title="Gene and Protein Basics - Normal Biology and Expression">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="space-y-4 text-sm leading-relaxed text-slate-700 text-justify">
              <p>In healthy adults, CEACAM5 expression is limited and typically low. It appears mainly in:</p>
              <BulletList items={normalExpression} />

              <p className="font-sans font-semibold text-slate-900">Normal physiological roles include:</p>
              <BulletList items={physiologicalRoles} />

              <p className="font-sans font-semibold text-slate-900">Role in Cancer (Pathobiology)</p>
              <p>
               CEACAM5 is aberrantly re-expressed (overexpressed) in many epithelial malignancies, often associated with poor prognosis. It is overexpressed in:
              </p>
              <BulletList items={cancerExpressionSites} />
            </div>

            <div className="space-y-4">
              {exhibitPrimaryImages.map((image) => (
                <figure key={image.src} className="space-y-2">
                  <img src={image.src} alt={image.alt} className="w-full rounded-lg border border-amber-200 bg-white shadow-sm" />
                  <figcaption className="mt-2 font-sans text-xs leading-relaxed text-slate-500">{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="border-t border-amber-200/50 pt-6">
            <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-start">
              <div className="space-y-3 text-sm leading-relaxed text-slate-700 text-justify">
                <p>In tumors, CEACAM5 contributes to:</p>
                <BulletList items={tumorRoles} />
                <p className="italic text-slate-600">
                  It is generally considered <strong>pro-tumorigenic</strong> in most contexts when overexpressed. The expression profile is directly linked to prognosis.
                </p>
              </div>
              <div className="space-y-3 font-sans text-xs leading-relaxed text-slate-600 text-justify">
                <p>Higher resolution image of single organoid of normal and cancer cells) CEACAM5 is overexpressed and localizes in the organelles of the cells.</p>
                <img src="/exhibit25.png" alt="CEACAM5 survival curve" className="w-full max-w-sm rounded-lg border border-amber-200 bg-white shadow-sm" />
              </div>
            </div>
          </div>
        </ExhibitShell>

        <TextBlock>
          <SectionHeading>Expression in Tumors</SectionHeading>
          <p>
            CEACAM5 (CEA) expression frequencies (primarily by IHC, with "high" often defined as {">="} 2+ intensity in {">="} 50% tumor cells for therapeutic contexts):
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {expressionFrequencies.map(([label, detail]) => (
              <li key={label}>
                <strong>{label}:</strong> {detail}
              </li>
            ))}
          </ul>
          <p className="font-sans text-sm italic text-slate-500">
            Notes: Percentages can vary by detection method (IHC score, mRNA), antibody, and cutoff. 
          </p>
        </TextBlock>

        <TextBlock>
          <SectionHeading>Challenges in Designing a CEACAM5 Therapy</SectionHeading>
          <p>
           While highly druggable biological profile, the glycosylation pattern, which makes the structures highly variable, and mechanism of the protein, not being an active enzyme with an active site which can be blocked, limit the design of small molecules. However 32 small molecule trials have been conducted, and have yielded useful information.
          </p>

          <Subheading>Soluble (Circulating) vs. Membrane-Bound CEACAM5 Distinction</Subheading>
          <p>
          CEACAM5 is GPI-anchored and shed into circulation as soluble CEA (sCEA) via phospholipase D. Normal serum levels are {"<5"} ng/mL; tumor patients show variable elevation (median ~5 ng/mL, occasionally up to ~2,000 ng/mL). Early anti-CEA antibodies demonstrated potential “sink” effects with accelerated clearance. However, modern high-affinity antibodies and ADCs (e.g., those in NILK-2301 and tusamitamab programs) exhibit minimal impact of physiologic or elevated sCEA on tumor-cell binding, T-cell redirection, or preclinical pharmacokinetics. Tumor-associated membrane CEACAM5 remains the dominant therapeutic target due to higher density and altered glycosylation/polarity. 
          </p>
          <p>
          The clinical and pharmacokinetic consequence is a circulating ectodomain competes with tumour-surface CEACAM5 for ADC binding, reducing effective tumour exposure in proportion to serum CEA load. This mechanism is the primary pharmacological rationale for patient stratification by dual criteria — tumour IHC score and baseline serum CEA
          </p>
        </TextBlock>

        <TextBlock>
          <SectionHeading>Overcoming the Hurdles</SectionHeading>
          <p>
          The renewed interest in CEACAM5 is driven more by engineering around existing knowledge, than new discoveries. Advances in antibody design, epitope selection, payload optimization, and patient stratification have altered the practical constraints that previously limited clinical translation.
          </p>

          <Subheading>Epitope Engineering Further Mitigates Any Residual Sink Liability</Subheading>
          <p>
         Strategic epitope selection represents a key molecular engineering solution to further decouple therapeutic binding from soluble CEACAM5 (sCEA). CEACAM5 comprises six Ig-like domains (N-terminal A1–A3 and membrane-proximal B1–B3), with the GPI anchor at the C-terminus. GPI-PLD-mediated shedding releases the full ectodomain into circulation. Antibodies or bispecifics engineered against   membrane-proximal epitopes   (primarily A2 or B3 domains, located near the shedding site and cell membrane) exhibit strong preferential binding to membrane-anchored CEACAM5 on tumor cells while showing markedly reduced interaction with the shed soluble form. 
          </p>
          <ul className="space-y-3 border-l-2 border-slate-200 pl-4 text-base leading-[1.75] text-slate-600 text-justify">
            {epitopeNotes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
          <p>
            The functional outcome is improved pharmacokinetics and tumor exposure: reduced peripheral sequestration, slower clearance, and lower risk of dose-limiting sink-driven sub-therapeutic exposure in patients with high baseline or treatment-emergent sCEA. This approach is explicitly incorporated into several next-generation candidates to widen the therapeutic index beyond what polarity and expression restriction alone provide.
          </p>

          <Subheading>
  Comparison to HER2 and EGFR: Reduced On-Target Organ Toxicity    </Subheading>
          <p>
           HER2 and EGFR exhibit broader, non-polarized expression across critical normal tissues (HER2 on cardiac myocytes and skin/GI mucosa; EGFR on keratinocytes, GI epithelium, and hepatocytes). This drives well-documented class-effect toxicities: HER2-directed agents cause cardiomyopathy and rash/diarrhea; EGFR inhibitors produce severe cutaneous toxicity, diarrhea, and hypomagnesemia. In contrast, CEACAM5-targeted agents (e.g., Tusamitamab ravtansine/SAR408701 and subsequent molecules) have shown no analogous cardiac, widespread cutaneous, or severe GI on-target toxicities in clinical experience. Observed adverse events (e.g., reversible keratopathy with certain DM4 payloads) are predominantly payload-related rather than antigen-driven. Direct quantitative head-to-head comparisons of normal-tissue binding and toxicity across these targets remain limited in the public literature.
          </p>

          <aside className="rounded-r-lg border-l-4 border-amethyst bg-amethyst/5 p-6 text-justify">
            <h4 className="mb-3 font-sans text-xs font-bold uppercase tracking-wider text-amethyst">Strategic Implications for R&D and BD</h4>
            <p className="font-medium italic text-slate-600">
             CEACAM5 offers a differentiated therapeutic index—high tumor overexpression paired with spatially restricted normal expression—positioning it favorably versus relatively saturated targets such as HER2 (cardiotoxicity constraints) and EGFR (cutaneous/GI liabilities). This supports continued investment in ADCs, bispecifics, and cell therapies, particularly in colorectal, NSCLC, and gastric cancers.  

            </p>
          </aside>

          <p className="italic text-slate-600">
            In the next chapter, we examine the clinical trials undertaken till date and the information available from them.
          </p>
        </TextBlock>

        <section className="rounded-lg border border-slate-200 bg-white p-6 text-center">
          <p className="font-sans text-sm text-slate-600">
            To view the full bibliography, citations, and data indices for this chapter, please visit the{' '}
            <Link to="/chapters/appendix" className="text-amethyst font-semibold hover:underline">
              Appendix
            </Link>.
          </p>
        </section>

        <ChapterFooter />
      </main>
    </div>
  );
};

export default Chapter1;
