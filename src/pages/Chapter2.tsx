import { useEffect, useState, type ReactNode } from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import ChapterFooter from '../components/ChapterFooter';

const dimensions = [
  {
    number: '1',
    title: 'Clinical Trials',
    question: 'How is the asset being developed?',
    output: 'Trial positioning',
  },
  {
    number: '2',
    title: 'Scientific Evidence',
    question: 'Why should the intervention work?',
    output: 'Mechanistic confidence',
  },
  {
    number: '3',
    title: 'Intellectual Property',
    question: 'Can value be protected?',
    output: 'Barrier assessment',
  },
  {
    number: '4',
    title: 'Competitive Positioning',
    question: 'How crowded is the landscape?',
    output: 'Strategic differentiation',
  },
  {
    number: '5',
    title: 'Commercial Viability',
    question: 'Where can value accrue?',
    output: 'Market attractiveness',
  },
  {
    number: '6',
    title: 'Regulatory Outlook',
    question: 'What approval pathway and precedent exist?',
    output: 'Execution feasibility',
  },
  {
    number: '7',
    title: 'Prescriber and Payer Dynamics',
    question: 'Will adoption occur?',
    output: 'Commercial realization',
  },
];

const dataSources = [
  'Global clinical-trial registries',
  'Scientific publications',
  'Patent databases',
  'Company disclosures and pipeline reports',
  'Licensing and financing announcements',
  'Regulatory communications',
  'Verified industry news sources',
];

const archetypes = [
  { combination: 'High Barrier × High Rationale', action: 'Accelerate', color: 'border-emerald-200 bg-emerald-50 text-emerald-900' },
  { combination: 'High Barrier × Low Rationale', action: 'Create Optionality', color: 'border-blue-200 bg-blue-50 text-blue-900' },
  { combination: 'Low Barrier × High Rationale', action: 'Differentiate', color: 'border-amber-200 bg-amber-50 text-amber-900' },
  { combination: 'Low Barrier × Low Rationale', action: 'Deprioritize', color: 'border-rose-200 bg-rose-50 text-rose-900' },
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
  const [isExpanded, setIsExpanded] = useState(true);

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
          className={`exhibit-content-container transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[5000px] p-5 md:p-8 pb-16' : 'max-h-[320px] p-5 md:p-8 pb-24'
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

const Chapter2 = () => {
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
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Chapter 2</span>
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
        <h1 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-tight text-slate-950">
          CHAPTER 2 | REPORT METHODOLOGY & FRAMEWORK
        </h1>
      </header>

      <main className="mx-auto max-w-5xl space-y-12">
        <TextBlock>
          <SectionHeading>Strategic Objective</SectionHeading>
          <p>
            Drug-development decisions emerge from interactions across scientific evidence, clinical outcomes, intellectual property, competitive dynamics, regulatory pathways, commercial potential and capital deployment.
          </p>
          <p>
            Conventional analyses often evaluate these dimensions independently and reconcile them through secondary decision-making layers. While this produces depth within individual domains, it increases analytical burden and limits the ability to adapt to rapidly changing development environments.
          </p>
          <p>
            To address this challenge, AmethIntel® developed the <strong>Integrated Clinical Development System™</strong>—a structured decision-support framework designed to integrate these datasets into a unified development view.
          </p>
          <p>
            The objective is not prediction, but structured assessment of opportunities, risks, barriers to entry and strategic options relevant to clinical development, licensing, partnering and investment decisions.
          </p>
        </TextBlock>

        <section className="rounded-lg border border-slate-200 bg-white p-6 font-sans shadow-sm md:p-8">
          <h3 className="mb-6 font-sans text-xl font-bold text-slate-950">Analytical Framework</h3>
          <p className="mb-6 text-base leading-relaxed text-slate-600">
            The framework evaluates seven interconnected dimensions. Each dataset is assessed through a targeted question and translated into a strategic output:
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dimensions.map((dim) => (
              <div key={dim.number} className="rounded-lg border border-slate-100 bg-slate-50/50 p-5 transition-all hover:border-amethyst/30 hover:bg-white hover:shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amethyst/10 font-mono text-sm font-bold text-amethyst">
                    {dim.number}
                  </span>
                  <h4 className="font-sans font-bold text-slate-950">{dim.title}</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-500">
                    <span className="font-semibold text-slate-700">Core Question:</span> {dim.question}
                  </p>
                  <p className="text-slate-500">
                    <span className="font-semibold text-slate-700">Strategic Output:</span> <span className="text-vermilion font-medium">{dim.output}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <TextBlock>
          <p>
            Clinical development serves as the analytical anchor. Each clinical program is connected to its associated scientific evidence, patent estate, sponsoring organizations, licensing activity, financing events, regulatory developments and commercial considerations.
          </p>
          <p>
            Mapping these relationships creates a development ecosystem that enables assessment of competitive positioning, strategic optionality, barriers to entry, licensing attractiveness and investment relevance.
          </p>
        </TextBlock>

        <section className="rounded-lg border border-slate-200 bg-white p-6 font-sans shadow-sm md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-sans text-lg font-bold text-slate-950">Data Collection</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                Data were collected and triangulated using publicly available and verified sources, including:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                {dataSources.map((source, index) => (
                  <li key={index}>{source}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center border-t border-slate-100 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <div className="space-y-4 text-sm text-slate-700">
                <p>
                  <strong>Clinical-trial coverage</strong> included the United States, Europe, China, Japan, Korea, India and Australia.
                </p>
                <p>
                  <strong>Patent analysis</strong> included USPTO, EPO, CNIPA, JPO and WIPO databases.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TextBlock>
          <SectionHeading>Ecosystem Mapping</SectionHeading>
          <p>
            Following dataset population, ecosystem analysis is conducted across two levels.
          </p>

          <Subheading>Level I — Internode Analysis</Subheading>
          <p>
            Forces within the node are analyzed to arrive at strategic decisions. Relationships are evaluated within and across the seven analytical dimensions through forty-nine interaction vectors. These generate first-order strategic observations and identify local opportunities and constraints.
          </p>
          <p>
            An example is illustrated through the interaction between <strong>Scientific Evidence</strong> (which contributes <em>Sustainable Rationale</em>) and <strong>Intellectual Property</strong> (which contributes <em>Barrier Formation</em>). Together these produce four strategic archetypes:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {archetypes.map((arch, idx) => (
              <div key={idx} className={`rounded-lg border p-4 font-sans ${arch.color}`}>
                <p className="text-xs font-bold uppercase tracking-wider opacity-75">Archetype {idx + 1}</p>
                <h4 className="my-1 text-sm font-semibold">{arch.combination}</h4>
                <p className="text-base font-bold">→ {arch.action}</p>
              </div>
            ))}
          </div>

          <p>
            These archetypes guide prioritization and scenario evaluation rather than serving as deterministic investment rules. For example, the ecosystem created by scientific evidence and intellectual property is demonstrated in <strong>Figure 1</strong>.
          </p>
        </TextBlock>

        <ExhibitShell label="Figure 1" title="Integrated Clinical Development Decision Matrix">
          <div className="grid gap-6 md:grid-cols-[1fr_minmax(0,1.2fr)] md:items-center">
            <figure className="space-y-2">
              <img
                src="/image1.jpeg"
                alt="Figure 1 - Archetypes of decisions"
                className="w-full rounded-lg border border-amber-200 bg-white shadow-sm"
              />
            </figure>
            <div className="space-y-4 text-sm leading-relaxed text-slate-700 text-justify">
              <h4 className="font-sans font-bold text-slate-900">Archetypes of decisions</h4>
              <p>
                Trials for CEACAM5 were divided based on its use as a biomarker or target of intervention, which were further classified into ADCs and others because of the recent developments.
              </p>
              <p>
                Scientific Evidence yields Sustainable Rationale and Intellectual Property analysis yields Barriers to Entry and together these create a 2x2 matrix for each drug, yielding 4 clear possibilities and investment decisions –
              </p>
              <ol className="list-[lower-alpha] space-y-1 pl-5 font-sans">
                <li><strong>Barrier (Yes) Rationale (Yes) :</strong> Expedite launch</li>
                <li><strong>Barrier (Yes) Rationale (No*) like small molecule etc) :</strong> Create an Option and Hold</li>
                <li><strong>Barrier (No) Rationale (Yes) :</strong> Create a Niche or Barriers</li>
                <li><strong>Barrier (No) Rationale (No*) :</strong> Proceed with caution or Abandon</li>
              </ol>
              <p className="text-xs italic text-slate-500">
                *In the present time, ADCs are leading and the other modalities whose development is shelved will be taken under this category
              </p>
              <p className="text-xs italic text-slate-500">
                Similar decision trees evolve by adding more of the seven datasets used for analysis.
              </p>
            </div>
          </div>
        </ExhibitShell>

        <TextBlock>
          <Subheading>Level II — Internode Analysis</Subheading>
          <p>
            Insights are then propagated across adjacent ecosystem nodes.
          </p>
          <p>
            Changes in one development pathway may alter the attractiveness of neighboring modalities, payload classes, biomarkers, companion diagnostics or adjacent therapeutic programs.
          </p>
          <p>
            Examples observed in CEACAM5 include interaction effects across ADCs, biomarker-led programs, linker and payload evolution and changes in sponsor quality.
          </p>
          <p>
            Repeated updates generate a dynamic representation of target attractiveness and strategic optionality over time.
          </p>
        </TextBlock>

        <TextBlock>
          <SectionHeading>Strategic Output</SectionHeading>
          <p>
            Within the analytical assumptions and datasets applied in this report, CEACAM5 demonstrates a combination of strong scientific rationale and comparatively limited structural barriers to entry.
          </p>
          <p>
            Although supported by high-profile programs and sustained translational momentum, the target landscape suggests that competitive advantage is unlikely to emerge through target ownership alone.
          </p>
          <p>
            The analysis therefore indicates greater strategic value in trial design, indication selection, modality differentiation and creation of defensible niches rather than acceleration of launch in isolation.
          </p>
        </TextBlock>

        <TextBlock>
          <SectionHeading>Methodological Boundaries</SectionHeading>
          <p>
            This framework supports but does not replace expert judgment.
          </p>
          <p>
            Outputs reflect interpretation of publicly available information and are intended to improve decision quality rather than provide deterministic forecasts.
          </p>
          <p>
            Strategic conclusions may evolve as clinical outcomes, regulatory decisions, intellectual property 
          </p>
        </TextBlock>

        <ChapterFooter />
      </main>
    </div>
  );
};

export default Chapter2;
