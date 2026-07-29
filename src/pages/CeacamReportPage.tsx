import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Chapter data
const chapters = [
  {
    id: 'ch-1', num: '01',
    title: 'Target Biology & Expression Landscape',
    hook: 'What CEACAM5 is, where it is expressed, and what that means for therapeutic window design',
    modalLabel: 'Chapter 1: Target Biology',
    previews: [
      { bold: 'Domain architecture resolved at 3.11 Å:', text: 'the October 2024 cryo-EM structure (PDB 8BW0, Sanofi/Nature Comms) reveals tusamitamab binds a discontinuous epitope in the A3-B3 domains incorporating an N-linked mannose at Asn612 — the first atomic-resolution epitope map of any CEACAM5 antibody' },
      { bold: 'Expression frequency by tumour type:', text: 'CRC 90–95% any IHC; high-expression (≥2+/≥50% cells) in ~60–70% mCRC. NSCLC adenocarcinoma: 24.3% HE in primary tumours, rising to 35.3% in metastases. Gastric: 55–70%. PDAC: ~90%' },
      { bold: 'The polarity shift is the therapeutic window:', text: 'in normal colonic epithelium CEACAM5 is strictly apical-surface; in adenocarcinoma polarity is lost and expression becomes circumferential — basolateral surface accessible to vascular-delivered agents' },
    ],
    locked: 'Full chapter includes: complete IHC frequency tables with H-score distributions · KRAS-CEACAM5 molecular correlations in NSCLC · serum CEA dynamics by tumour type · shedding sink quantification · domain surface exposure by tumour type vs. normal tissue · 9 peer-reviewed citations',
  },
  {
    id: 'ch-2', num: '02',
    title: 'Active Clinical Trial Landscape',
    hook: '260+ trials — tiered by what actually matters to a BD or investment decision',
    modalLabel: 'Chapter 2: Clinical Trial Landscape',
    previews: [
      { bold: 'Tier A — three programmes with imminent data:', text: 'BMS-986490 (NCT06730750, Phase 2a with ramucirumab, CRC), IBI3020 (NCT06963281, Chinese-origin dual-payload ADC), NILK-2301 (NCT06663839). Each has a meaningfully different linker and patient selection approach from tusamitamab' },
      { bold: 'The outlier with highest near-term commercial probability:', text: 'SGM-101 surgical fluorescence imaging agent for CRC margin detection — bypasses systemic shedding sink, separate regulatory pathway, Phase 3 data expected 2026–26. Underrepresented in standard competitive databases due to modality categorisation' },
      { bold: 'Sponsor commitment divergence:', text: 'Chinese biotechs (Innovent, Henlius) are advancing capital; Western large pharma has retreated. This geographic divergence is a licensing arbitrage signal, not a biology signal' },
    ],
    locked: 'Full chapter includes: complete Tier A/B/C trial triage with readout timelines · cross-trial patient selection heterogeneity analysis · kinetic energy scoring by programme · sponsor commitment signal methodology · CAR-T and vaccine programme assessment · full NCT reference index (in Appendix)',
  },
  {
    id: 'ch-3', num: '03',
    title: 'Programme Failure Attribution',
    hook: 'A diagnostic, not a graveyard — every terminated programme assigned to one of four root causes',
    modalLabel: 'Chapter 3: Failure Attribution',
    previews: [
      { bold: 'Tusamitamab: two distinct failure causes, not one:', text: 'the corneal DLT (keratopathy in 25% of Phase 3 patients, dose-limiting at 120 mg/m²) is a DM4 maytansinoid payload class effect — Cause II, modality-intrinsic. The Phase 3 efficacy failure is Cause III, trial design — no serum CEA stratification, PFS primary endpoint in a population where OS trend was positive' },
      { bold: "Roche's full CEA portfolio exit (cibisatamab, cergutuzumab, CEA-IL2v) is Cause IV — strategic:", text: 'the termination language in public filings does not cite biology failure. The CRS events in cibisatamab are Cause II — T-cell redirector format against a target with normal tissue expression in GI epithelium' },
      { bold: 'Cross-cutting finding:', text: 'every programme that survived longest shared one feature — either biomarker-selected enrolment or a surgical/diagnostic application that bypasses systemic exposure entirely' },
    ],
    locked: 'Full chapter includes: complete four-cause taxonomy with scoring criteria · every major terminated programme classified with evidence · labetuzumab govitecan SN-38 bystander analysis · MEDI-565 BiTE immunogenicity dissection · NCI TCR-engineered PBL colitis case · full attribution table (30 programmes)',
  },
  {
    id: 'ch-4', num: '04',
    title: 'Patent Landscape',
    hook: 'Where entry is blocked, where it is open, and where the real barriers now concentrate',
    modalLabel: 'Chapter 4: Patent Landscape',
    previews: [
      { bold: 'The antibody is commoditised:', text: 'A1-B1 and A2-B2 IgV-loop space is densely claimed. The A3-B3 space — where tusamitamab binds — now has a publicly deposited cryo-EM structure (PDB 8BW0) enabling rational design of adjacent-epitope antibodies by any competitor' },
      { bold: 'N-terminal domain remains relatively open:', text: 'limited assignee concentration, NCI public domain contributions available as FTO starting points — specific sequences and method-of-use claims identified in full chapter' },
    ],
    locked: 'Full chapter: complete domain-level assignee map · Synaffix/BI $1.3B linker deal analysis · biomarker and CDx IP layer · NCI FTO pathways · white space identification by domain and modality · strategic entry pathway for new entrant',
  },
  {
    id: 'ch-5', num: '05',
    title: 'Payload Landscape',
    hook: 'Why maytansinoid gave way to Topo1i — and what the data says about the next transition',
    modalLabel: 'Chapter 5: Payload Landscape',
    previews: [
      { bold: 'DM4 corneal toxicity is a class effect, not a CEACAM5 effect:', text: 'identical keratopathy/keratitis profile documented in mirvetuximab soravtansine (FOLR1-DM4) and trastuzumab emtansine (HER2-DM1). Corneal epithelial cells take up maytansinoid ADCs via non-specific endocytosis independent of target expression' },
      { bold: 'Topo1i bystander killing is mechanistically superior for CEACAM5:', text: "heterogeneous expression in CRC and NSCLC means not every tumour cell expresses CEACAM5. DXd and exatecan derivatives with larger bystander killing radius compensate — DM4's bystander radius is insufficient for this target profile" },
    ],
    locked: 'Full chapter: DXd vs. SN-38 vs. exatecan clinical comparison · patent landscape by payload class · dual-payload platform IP (IBI3020) · combination payload hypotheses with mechanistic rationale · payload selection framework for next-generation CEACAM5 ADC',
  },
  {
    id: 'ch-6', num: '06',
    title: 'Linker Landscape',
    hook: 'The linker is where this field will be won — the clinical evidence and the deal data agree',
    modalLabel: 'Chapter 6: Linker Landscape',
    previews: [
      { bold: "Tusamitamab's SPDB linker is cleavable — but at the wrong site:", text: 'lysine conjugation produces DAR heterogeneity (DAR 3.8 average, wide distribution). Site-specific conjugation at engineered cysteines or glycan anchors produces homogeneous DAR — directly improving the shedding sink survival ratio' },
      { bold: 'The $1.3B signal:', text: 'Boehringer Ingelheim acquired Synaffix specifically for glycan-anchor site-specific conjugation — not for an antibody, not for a target. The linker platform itself commanded the deal value. This is the most important pricing signal in CEACAM5-adjacent IP in 2024' },
    ],
    locked: 'Full chapter: shedding sink PK competition modelling · plasma half-life data across all CEACAM5 ADC programmes · site-specific conjugation IP landscape · DAR optimisation for high-shedding targets · white space in linker IP · patient selection solution derived from linker analysis',
  },
  {
    id: 'ch-7', num: '07',
    title: 'Differentiation for Long-Term Dominance',
    hook: 'The three-variable framework — and the population sizing that determines the commercial ceiling',
    modalLabel: 'Chapter 7: Differentiation Framework',
    previews: [
      { bold: 'All three errors must be corrected simultaneously:', text: 'a programme with Topo1i payload but no serum CEA stratification repeats the patient selection error. A programme with site-specific conjugation but A3-B3 epitope targeting remains vulnerable to shed ectodomain competition. Sequential optimisation is insufficient' },
      { bold: 'SGM-101 is the underappreciated exception:', text: 'surgical fluorescence guidance for CRC margin detection bypasses every systemic problem. Highest near-term commercial probability in the field. Distinct licensing model from ADC programmes — closer to medical device than oncology drug' },
    ],
    locked: 'Full chapter: dual-criterion patient population sizing (IHC + serum CEA) in CRC, gastric, NSCLC · commercial ceiling by indication · four-scenario risk matrix with probability weights · decision triggers by scenario · combination strategy with mechanistic rationale',
  },
  {
    id: 'ch-8', num: '08',
    title: '2026 Deal Structure Analysis',
    hook: 'Where capital is moving — and what a CEACAM5 ADC at Phase 1 POC would actually license for',
    modalLabel: 'Chapter 8: Deal Structure Analysis',
    previews: [
      { bold: 'Licensing overtook M&A as primary value driver in 2026:', text: '$250B+ across 516 transactions. For CEACAM5, this means a Phase 1 POC asset is a licensing play, not an acquisition target — and the deal structure must account for the Sanofi Phase 3 failure discount in narrative positioning' },
      { bold: 'Chinese-origin out-licensing trajectory:', text: 'Innovent/Takeda $11.4B deal structure is the template. Three active Chinese-origin CEACAM5 programmes (IBI3020, DNP002, NILK-2301) are all potential licensing candidates to Western pharma within 24–36 months of Phase 2 data' },
    ],
    locked: 'Full chapter: complete 2024–25 ADC deal comparables table · upfront/milestone/royalty benchmarks by stage · geo-split norms · the Sanofi failure discount — how to position against it · surgical fluorescence licensing model · non-ADC deal angles',
  },
];

const tocItems = [
  { num: '—', title: 'Executive Thesis', sub: 'Drugability verdict · three correctable engineering errors · report scope', status: 'free', href: '#exec-summary' },
  { num: '01', title: 'Target Biology & Expression Landscape', sub: 'Domain architecture · IHC by tumour type · shedding mechanism', status: 'preview', href: '#ch-1' },
  { num: '02', title: 'Active Clinical Trial Landscape', sub: '260+ trials tiered by readout imminence · sponsor commitment signals · kinetic energy analysis', status: 'preview', href: '#ch-2' },
  { num: '03', title: 'Programme Failure Attribution', sub: 'Four-cause taxonomy · every major termination classified · cross-cutting finding', status: 'preview', href: '#ch-3' },
  { num: '04', title: 'Patent Landscape', sub: 'Domain-level assignee mapping · linker IP concentration · FTO pathways · white space', status: 'paid', href: '#ch-4' },
  { num: '05', title: 'Payload Landscape', sub: 'DM4 → Topo1i evolution · bystander killing · patent landscape by payload class', status: 'paid', href: '#ch-5' },
  { num: '06', title: 'Linker Landscape', sub: 'Shedding sink quantified · site-specific conjugation · DAR stability · white space', status: 'paid', href: '#ch-6' },
  { num: '07', title: 'Differentiation for Long-Term Dominance', sub: 'Three-variable framework · population sizing · deal structure benchmarks · risk matrix', status: 'paid', href: '#ch-7' },
  { num: '08', title: '2026 Deal Structure Analysis', sub: 'ADC licensing benchmarks · China-origin trajectories · CEACAM5 positioning post-Sanofi', status: 'paid', href: '#ch-8' },
  { num: 'A', title: 'Appendix — Full Reference Tables', sub: '30-programme table · NCT index · deal comparables · patent assignee summary', status: 'bundled', href: '#ch-a' },
];

const CeacamReport = () => {
  const navigate = useNavigate();
  const [openChapter, setOpenChapter] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalSub, setModalSub] = useState('');
  const [modalPrice, setModalPrice] = useState('');
  const [modalPriceLabel, setModalPriceLabel] = useState('');
  const [formName, setFormName] = useState('');
  const [formOrg, setFormOrg] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formRole, setFormRole] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const toggleChapter = (id: string) => {
    setOpenChapter(openChapter === id ? null : id);
  };

  const openModalFn = (type: string) => {
    if (type === 'full') {
      setModalTitle('Full Report Access');
      setModalSub('Complete report: all 8 chapters, Appendix & 60-min briefing call.');
      setModalPrice('$10,000');
      setModalPriceLabel('Full Report');
    } else if (type === 'enterprise') {
      setModalTitle('Enterprise & Bespoke Enquiry');
      setModalSub('Custom analysis or multi-report subscription.');
      setModalPrice('Custom');
      setModalPriceLabel('Enterprise');
    } else {
      setModalTitle(type);
      setModalSub('Access this chapter for $500.');
      setModalPrice('$500');
      setModalPriceLabel('Chapter Licence');
    }
    setModalType(type);
    setShowModal(true);
    setSubmitStatus('');
  };

  const handleSubmit = () => {
    if (!formName || !formOrg || !formEmail || !formRole) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitStatus('saving');
    setTimeout(() => {
      setSubmitStatus('saved');
      setTimeout(() => {
        setShowModal(false);
        setSubmitStatus('');
        setFormName(''); setFormOrg(''); setFormEmail(''); setFormRole('');
      }, 2000);
    }, 1000);
  };

  const statusClass = (s: string) => {
    if (s === 'free') return 'rpt-status-free';
    if (s === 'preview') return 'rpt-status-preview';
    if (s === 'paid') return 'rpt-status-paid';
    return 'rpt-status-preview';
  };

  return (
    <>
      <style>{`
        .rpt-page {
          --ink: #0E1520; --navy: #132035; --navy-mid: #1C3050; --rule: #243248;
          --steel: #4A6080; --mist: #8BA0B8; --fog: #C2CEDB;
          --paper: #F4F1EB; --cream: #FAF8F4;
          --accent: #C8973A; --accent-light: #E8B96A; --accent-dim: rgba(200,151,58,0.15);
          --free-green: #1B6B4A; --free-bg: rgba(27,107,74,0.1);
          --lock-red: #8B2020; --lock-bg: rgba(139,32,32,0.08);
          --serif: 'Playfair Display', Georgia, serif;
          --sans: 'Libre Franklin', sans-serif;
          --mono: 'DM Mono', monospace;
          background: var(--ink); color: var(--fog);
          font-family: var(--sans); font-size: 15px; line-height: 1.7; min-height: 100vh;
        }
        .rpt-page * { box-sizing: border-box; }

        /* TOP BAR */
        .rpt-top-bar { background: var(--navy); border-bottom: 1px solid var(--rule); padding: 10px 48px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; }
        .rpt-logo { font-family: var(--mono); font-size: 13px; font-weight: 500; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; }
        .rpt-top-nav { display: flex; gap: 28px; align-items: center; }
        .rpt-top-nav a, .rpt-top-nav button.rpt-nav-link { font-size: 12px; font-weight: 500; color: var(--mist); text-decoration: none; letter-spacing: 0.04em; text-transform: uppercase; transition: color 0.2s; background: none; border: none; cursor: pointer; }
        .rpt-top-nav a:hover, .rpt-top-nav button.rpt-nav-link:hover { color: var(--cream); }
        .rpt-home-link { color: var(--accent-light) !important; font-weight: 600 !important; padding: 6px 12px; border: 1px solid var(--accent) !important; border-radius: 2px; transition: all 0.2s; display: inline-flex; align-items: center; gap: 6px; }
        .rpt-home-link:hover { background: var(--accent-dim) !important; }
        .rpt-btn-purchase { background: var(--accent); color: var(--ink); border: none; padding: 7px 18px; font-family: var(--sans); font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer; border-radius: 2px; transition: background 0.2s; }
        .rpt-btn-purchase:hover { background: var(--accent-light); }

        /* HERO */
        .rpt-hero { background: var(--navy); border-bottom: 1px solid var(--rule); padding: 72px 48px 60px; position: relative; overflow: hidden; }
        .rpt-hero::before { content: ''; position: absolute; top: 0; right: 0; width: 40%; height: 100%; background: linear-gradient(135deg, transparent 50%, rgba(200,151,58,0.04) 100%); pointer-events: none; }
        .rpt-hero-eyebrow { font-family: var(--mono); font-size: 11px; color: var(--accent); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
        .rpt-hero-eyebrow::after { content: ''; display: block; width: 48px; height: 1px; background: var(--accent); opacity: 0.5; }
        .rpt-hero-title { font-family: var(--serif); font-size: clamp(26px, 4vw, 42px); font-weight: 500; color: var(--cream); line-height: 1.2; max-width: 720px; margin-bottom: 16px; }
        .rpt-hero-title em { font-style: italic; color: var(--accent-light); }
        .rpt-hero-sub { font-size: 14px; color: var(--mist); max-width: 560px; line-height: 1.75; margin-bottom: 36px; }
        .rpt-hero-meta { display: flex; gap: 32px; flex-wrap: wrap; margin-bottom: 36px; padding-top: 24px; border-top: 1px solid var(--rule); }
        .rpt-meta-label { font-family: var(--mono); font-size: 10px; color: var(--steel); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 3px; }
        .rpt-meta-val { font-size: 13px; font-weight: 500; color: var(--fog); }
        .rpt-pricing-pill { display: inline-flex; align-items: center; gap: 10px; background: var(--accent-dim); border: 1px solid rgba(200,151,58,0.3); border-radius: 2px; padding: 10px 18px; }
        .rpt-price-item { font-family: var(--mono); font-size: 12px; color: var(--accent-light); display: flex; align-items: center; gap: 6px; }
        .rpt-price-divider { width: 1px; height: 24px; background: rgba(200,151,58,0.3); }

        /* CONTENT */
        .rpt-content-wrap { max-width: 1040px; margin: 0 auto; padding: 0 48px; }
        .rpt-free-section { padding: 56px 0 48px; border-bottom: 1px solid var(--rule); }
        .rpt-section-label { font-family: var(--mono); font-size: 10px; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }
        .rpt-section-label::before { content: ''; display: block; width: 24px; height: 1px; background: var(--accent); }
        .rpt-section-title { font-family: var(--serif); font-size: 22px; font-weight: 500; color: var(--cream); margin-bottom: 20px; }

        /* EXEC SUMMARY */
        .rpt-exec p { font-size: 15px; color: var(--mist); line-height: 1.95; margin-bottom: 22px; text-align: justify; }
        .rpt-exec strong { color: var(--fog); font-weight: 600; }
        .rpt-exec ul { margin-left: 24px; margin-bottom: 24px; list-style: disc; }
        .rpt-exec li { color: var(--mist); font-size: 15px; line-height: 1.8; margin-bottom: 12px; }

        /* TOC */
        .rpt-toc-grid { display: flex; flex-direction: column; gap: 2px; margin-top: 8px; }
        .rpt-toc-row { display: grid; grid-template-columns: 44px 1fr auto; gap: 16px; align-items: center; padding: 13px 16px; background: var(--navy-mid); border: 1px solid var(--rule); border-radius: 2px; transition: background 0.15s; cursor: pointer; text-decoration: none; color: inherit; }
        .rpt-toc-row:hover { background: #223050; }
        .rpt-toc-num { font-family: var(--mono); font-size: 12px; color: var(--accent); font-weight: 500; }
        .rpt-toc-title { font-size: 14px; font-weight: 500; color: var(--fog); }
        .rpt-toc-title span { display: block; font-size: 12px; font-weight: 400; color: var(--steel); margin-top: 2px; }
        .rpt-toc-status { font-family: var(--mono); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 8px; border-radius: 2px; white-space: nowrap; }
        .rpt-status-free { background: var(--free-bg); color: #5DCAA5; border: 1px solid rgba(27,107,74,0.3); }
        .rpt-status-paid { background: var(--lock-bg); color: #C07070; border: 1px solid rgba(139,32,32,0.2); }
        .rpt-status-preview { background: rgba(200,151,58,0.1); color: var(--accent-light); border: 1px solid rgba(200,151,58,0.25); }
        .rpt-free-badge { background: var(--free-bg); border: 1px solid rgba(27,107,74,0.3); color: #5DCAA5; font-family: var(--mono); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; padding: 2px 8px; border-radius: 2px; margin-left: 8px; }

        /* CHAPTERS */
        .rpt-chapters-section { padding: 56px 0; border-bottom: 1px solid var(--rule); }
        .rpt-chapters-label { font-family: var(--mono); font-size: 10px; color: var(--mist); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid var(--rule); }
        .rpt-chapter-block { border: 1px solid var(--rule); border-radius: 3px; margin-bottom: 8px; overflow: hidden; background: var(--navy); }
        .rpt-chapter-head { display: grid; grid-template-columns: 56px 1fr auto auto; gap: 16px; align-items: center; padding: 16px 20px; cursor: pointer; border-bottom: 1px solid transparent; transition: background 0.15s; }
        .rpt-chapter-head:hover { background: var(--navy-mid); }
        .rpt-chapter-head.open { border-bottom-color: var(--rule); background: var(--navy-mid); }
        .rpt-ch-num { font-family: var(--mono); font-size: 20px; font-weight: 500; color: var(--rule); }
        .rpt-ch-title { font-family: var(--serif); font-size: 17px; font-weight: 500; color: var(--cream); line-height: 1.3; }
        .rpt-ch-hook { font-size: 12px; color: var(--steel); margin-top: 3px; font-style: italic; }
        .rpt-ch-price { font-family: var(--mono); font-size: 12px; color: var(--accent); white-space: nowrap; text-align: right; }
        .rpt-ch-price span { display: block; font-size: 10px; color: var(--steel); margin-top: 1px; }
        .rpt-ch-toggle { width: 24px; height: 24px; border: 1px solid var(--rule); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--mist); font-size: 14px; transition: transform 0.2s, border-color 0.2s; flex-shrink: 0; }
        .rpt-chapter-head.open .rpt-ch-toggle { transform: rotate(45deg); border-color: var(--accent); color: var(--accent); }

        /* PREVIEW & PAYWALL */
        .rpt-preview-zone { padding: 20px 20px 0 76px; }
        .rpt-preview-label { font-family: var(--mono); font-size: 10px; color: var(--free-green); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px; opacity: 0.9; }
        .rpt-preview-label::before { content: '◆ '; }
        .rpt-pb { display: flex; gap: 12px; align-items: baseline; padding: 8px 0; border-bottom: 1px solid var(--rule); font-size: 13px; color: var(--fog); line-height: 1.6; }
        .rpt-pb:last-child { border-bottom: none; }
        .rpt-pb-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--accent); flex-shrink: 0; margin-top: 8px; opacity: 0.7; }
        .rpt-pb strong { color: var(--cream); font-weight: 500; }
        .rpt-paywall-zone { margin: 0 20px 20px 76px; background: var(--ink); border: 1px solid var(--rule); border-radius: 2px; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .rpt-pw-lock { font-family: var(--mono); font-size: 10px; color: var(--lock-red); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 6px; opacity: 0.85; }
        .rpt-pw-lock::before { content: '⬛ '; }
        .rpt-pw-line { height: 9px; background: var(--rule); border-radius: 2px; opacity: 0.5; margin-bottom: 6px; }
        .rpt-pw-line:nth-child(1) { width: 88%; }
        .rpt-pw-line:nth-child(2) { width: 72%; }
        .rpt-pw-line:nth-child(3) { width: 80%; }
        .rpt-pw-line:nth-child(4) { width: 55%; }
        .rpt-pw-right { flex-shrink: 0; text-align: center; }
        .rpt-btn-unlock { background: var(--accent); color: var(--ink); border: none; padding: 9px 22px; font-family: var(--sans); font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer; border-radius: 2px; width: 100%; transition: background 0.2s; }
        .rpt-btn-unlock:hover { background: var(--accent-light); }
        .rpt-btn-unlock-outline { background: transparent; color: var(--accent); border: 1px solid var(--accent); padding: 9px 22px; font-family: var(--sans); font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer; border-radius: 2px; width: 100%; margin-top: 6px; transition: all 0.2s; }
        .rpt-btn-unlock-outline:hover { background: var(--accent-dim); }

        /* PRICING */
        .rpt-pricing-section { padding: 56px 0; border-bottom: 1px solid var(--rule); }
        .rpt-pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 8px; }
        .rpt-price-card { background: var(--navy-mid); border: 1px solid var(--rule); border-radius: 3px; padding: 24px; }
        .rpt-price-card.rpt-featured { background: var(--navy); border-color: var(--accent); position: relative; }
        .rpt-featured-tag { position: absolute; top: -1px; left: 50%; transform: translateX(-50%); background: var(--accent); color: var(--ink); font-family: var(--mono); font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 12px; border-radius: 0 0 3px 3px; }
        .rpt-pc-tier { font-family: var(--mono); font-size: 10px; color: var(--steel); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 10px; }
        .rpt-pc-price { font-family: var(--serif); font-size: 32px; color: var(--cream); font-weight: 500; margin-bottom: 4px; }
        .rpt-pc-price sub { font-size: 14px; font-family: var(--sans); color: var(--steel); font-weight: 400; }
        .rpt-pc-desc { font-size: 13px; color: var(--mist); margin-bottom: 18px; line-height: 1.6; padding-bottom: 16px; border-bottom: 1px solid var(--rule); }
        .rpt-pc-item { font-size: 12px; color: var(--mist); display: flex; gap: 8px; align-items: baseline; line-height: 1.5; margin-bottom: 8px; }
        .rpt-pc-item::before { content: '—'; color: var(--accent); flex-shrink: 0; }
        .rpt-btn-full { width: 100%; padding: 11px; font-family: var(--sans); font-size: 13px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; border-radius: 2px; transition: all 0.2s; border: 1px solid var(--accent); margin-top: 20px; }
        .rpt-btn-solid { background: var(--accent); color: var(--ink); }
        .rpt-btn-solid:hover { background: var(--accent-light); }
        .rpt-btn-ghost { background: transparent; color: var(--accent); }
        .rpt-btn-ghost:hover { background: var(--accent-dim); }

        /* FOOTER */
        .rpt-site-footer { padding: 40px 48px; border-top: 1px solid var(--rule); display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; }
        .rpt-footer-brand { font-family: var(--mono); font-size: 12px; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase; }
        .rpt-footer-meta { font-size: 12px; color: var(--steel); }
        .rpt-footer-links { display: flex; gap: 20px; }
        .rpt-footer-links a { font-size: 12px; color: var(--steel); text-decoration: none; transition: color 0.2s; }
        .rpt-footer-links a:hover { color: var(--fog); }
        .rpt-footer-contact h4 { font-size: 14px; color: var(--fog); margin-bottom: 8px; }
        .rpt-footer-contact a { display: block; color: white; margin-bottom: 10px; text-decoration: none; font-size: 13px; }

        /* MODAL */
        .rpt-modal-overlay { position: fixed; inset: 0; background: rgba(10,16,28,0.92); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 24px; }
        .rpt-modal { background: var(--navy); border: 1px solid var(--accent); border-radius: 4px; padding: 36px; max-width: 440px; width: 100%; }
        .rpt-modal-title { font-family: var(--serif); font-size: 20px; color: var(--cream); margin-bottom: 6px; }
        .rpt-modal-sub { font-size: 13px; color: var(--mist); margin-bottom: 24px; line-height: 1.65; }
        .rpt-modal-label { font-family: var(--mono); font-size: 10px; color: var(--steel); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 5px; }
        .rpt-modal-input { width: 100%; background: var(--ink); border: 1px solid var(--rule); border-radius: 2px; padding: 10px 12px; font-family: var(--sans); font-size: 13px; color: var(--fog); outline: none; transition: border-color 0.2s; margin-bottom: 14px; }
        .rpt-modal-input:focus { border-color: var(--accent); }
        .rpt-modal-price-row { background: var(--ink); border: 1px solid var(--rule); border-radius: 2px; padding: 12px 14px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .rpt-modal-price-label { font-size: 13px; color: var(--mist); }
        .rpt-modal-price-val { font-family: var(--mono); font-size: 18px; color: var(--accent); }
        .rpt-modal-actions { display: flex; gap: 10px; }
        .rpt-btn-modal-close { flex: 1; padding: 11px; background: transparent; border: 1px solid var(--rule); color: var(--steel); font-family: var(--sans); font-size: 12px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; border-radius: 2px; transition: all 0.2s; }
        .rpt-btn-modal-close:hover { border-color: var(--fog); color: var(--fog); }
        .rpt-btn-modal-pay { flex: 2; padding: 11px; background: var(--accent); border: none; color: var(--ink); font-family: var(--sans); font-size: 12px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; border-radius: 2px; transition: background 0.2s; }
        .rpt-btn-modal-pay:hover { background: var(--accent-light); }
        .rpt-modal-note { font-size: 11px; color: var(--steel); margin-top: 14px; text-align: center; line-height: 1.6; }

        @media (max-width: 760px) {
          .rpt-top-bar, .rpt-hero, .rpt-content-wrap, .rpt-site-footer { padding-left: 20px; padding-right: 20px; }
          .rpt-hero { padding-top: 40px; padding-bottom: 40px; }
          .rpt-pricing-grid { grid-template-columns: 1fr; }
          .rpt-toc-row { grid-template-columns: 36px 1fr; }
          .rpt-toc-status { display: none; }
          .rpt-chapter-head { grid-template-columns: 40px 1fr auto; }
          .rpt-ch-price { display: none; }
          .rpt-preview-zone, .rpt-paywall-zone { padding-left: 20px; }
          .rpt-paywall-zone { flex-direction: column; align-items: stretch; }
          .rpt-hero-meta { gap: 20px; }
          .rpt-top-nav a { display: none; }
          .rpt-home-link { display: inline-flex !important; }
        }
      `}</style>

      <div className="rpt-page">
        {/* TOP BAR */}
        <header className="rpt-top-bar">
          <div className="rpt-logo" onClick={() => navigate('/')}>AmethIntel</div>
          <nav className="rpt-top-nav">
            <button className="rpt-nav-link rpt-home-link" onClick={() => navigate('/')}>← Back to Home</button>
            <a href="#exec-summary">Summary</a>
            <a href="#toc">Contents</a>
            <a href="#chapters">Chapters</a>
            <a href="#pricing">Pricing</a>
            <button className="rpt-btn-purchase" onClick={() => openModalFn('full')}>Purchase Full Report</button>
          </nav>
        </header>

        {/* HERO */}
        <section className="rpt-hero">
          <div className="rpt-content-wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="rpt-hero-eyebrow">AmethIntel · Oncology Intelligence Series · 2026</div>
            <h1 className="rpt-hero-title">CEACAM5: Oncology Target and<br /><em>Ramifications for Target Selection Strategy</em></h1>
            <p className="rpt-hero-sub">A decision-grade intelligence review integrating clinical trial triage, failure attribution, patent landscape, payload and linker analysis, and 2026 deal structure benchmarks — structured for R&amp;D heads, BD leaders, and oncology investment teams.</p>
            <div className="rpt-hero-meta">
              <div><div className="rpt-meta-label">Publisher</div><div className="rpt-meta-val">AmethIntel</div></div>
              <div><div className="rpt-meta-label">Pages</div><div className="rpt-meta-val">~80 pp</div></div>
              <div><div className="rpt-meta-label">Chapters</div><div className="rpt-meta-val">8 + Appendix</div></div>
              <div><div className="rpt-meta-label">Updated</div><div className="rpt-meta-val">May 2026</div></div>
              <div><div className="rpt-meta-label">Coverage</div><div className="rpt-meta-val">US · EU · Global</div></div>
              <div><div className="rpt-meta-label">Classification</div><div className="rpt-meta-val">Confidential</div></div>
            </div>
            <div className="rpt-pricing-pill">
              <div className="rpt-price-item">TOC + Executive Summary</div>
              <div className="rpt-price-divider"></div>
              <div className="rpt-price-item">Data</div>
              <div className="rpt-price-divider"></div>
              <div className="rpt-price-item">Analysis</div>
              <div className="rpt-price-divider"></div>
              <div className="rpt-price-item">Projection</div>
            </div>
          </div>
        </section>

        <div className="rpt-content-wrap">
          {/* EXEC SUMMARY */}
          <section className="rpt-free-section" id="exec-summary">
            <div className="rpt-section-label">Executive Summary</div>
            <h2 className="rpt-section-title">CEACAM5 Therapeutic Landscape &amp; Strategic Outlook</h2>
            <div className="rpt-exec">
              <p>CEACAM5 (carcinoembryonic antigen-related cell adhesion molecule 5, CD66e) is emerging as one of the most strategically important solid tumor targets in precision oncology. Long recognized biologically, but historically constrained by technological limitations, the target now stands at an inflection point.</p>
              <p><strong></strong><br />AmethIntel Analysis of CEACAM5 : A Commercial Oncology Platform with Opportunities of Unique Nature.<br />A study of Technological Evolution, Clinical Development, Intellectual Property, Regulatory, Licensing, and Investment Dynamics</p>
              <p>AmethIntel™ is a Search and Value Algorithm trained to support the BD and investment teams on data backed valuations, and to the scientific, and clinical development teams to guide on the driver of such valuations. The iterative search strategy uses clinical trials as the base dataset, and on each trial builds the patents, publications, regulatory and payer (USA) outlook to identify white spaces and opportunities.</p>
              <p>Analysis of CEACAM5 was an interesting case study, arguing convergence of various technologies with clinical development strategy to unlock clinically and commercially viable therapies that may reposition CEACAM5 within the next generation of oncology platforms.</p>
              <p>A total of 187 therapeutic clinical trials were identified as having a bearing for the understanding of the landscape. Various moieties are tried for CEACAM5 – CAR-T, ADC, peptides, small molecules. The developments revealed the nature and basis of competition and market signals that may shape the industry. These signals as of June 2026 are analyzed.</p>
              <p>Drug development is an iterative process running market development and clinical development hand in hand. ADCs are the leading moieties in development at the time of release of this report. Analysis of granted claims in ADC patents, analysis of payload and linker chemistries clearly establishes boundaries of the barriers to enter, which are limited. Consistent with this, the ADC space is getting crowded giving clear signals of fast followers. This demands a change in clinical development strategies, which instead of speed, which suits a field secured by strong IP barriers can corroborate with the IP strategy to secure niche segments in cases like CEACAM5.</p>
              <p>For CAR-T as a modality, the second and third generation approaches are showing promising results. Breakthroughs are required in the economics of production, administration and after care. The constrains are not preventing strong developments and confidence, the basis of which is analyzed.</p>
              <p>The attempted peptides show promise and no adverse events, these developments are paused for the time being, and provide qualified opportunities to potential fast followers. Diagnostics trials hold vital information in the case of a target like CEACAM5. Analysis of these trials provides clear directions to the white spaces which can be exploited.</p>
              <p>CEACAM5 as a target is not druggable by small molecules and is a marker that leads to elimination of transformed cell, instead of being an oncogene. Analysis of small molecule drugs used in combination reveals additional applications of the platform in several tumors like KRAS, FGF, HNF-alpha, with an option to be developed as market expansion strategy.</p>
              <p>Main programs that currently define the leading edge of the field are:</p>
              <ul>
                <li>Precemtabart tocentecan (M9140, Merck KGaA) has emerged as a leading clinical programme, advancing across multiple PROCEADE studies in colorectal, gastric, pancreatic, and lung cancers using an exatecan payload platform.</li>
                <li>SGN-CEACAM5C / PF-08046050 (Pfizer/Seagen) represents one of the most strategically important next-generation ADC programmes, combining the clinically validated tusamitamab antibody backbone with a high drug-to-antibody ratio Topoisomerase I payload platform optimized for bystander activity.</li>
                <li>BMS-986490 is advancing through combination-oriented development strategies alongside bevacizumab and may contribute meaningfully to future sequencing paradigms.</li>
                <li>IBI3020 (Innovent Biologics) introduces a differentiated dual-payload ADC architecture reflecting the broader movement toward increasingly engineered payload combinations.</li>
                <li>Additional entrants, including linker-differentiated and regionally developed programs, continue to expand the competitive landscape and contribute to increasingly global licensing dynamics.</li>
              </ul>
              <p>In therapeutic landscape analysis, shelved or discontinued programmers do not necessarily weaken a target category. In many cases, they generate valuable translational infrastructure, including validated assays, safety datasets, biomarker frameworks, manufacturing precedent, regulatory interactions, and partially de-risked development pathways. CEACAM5 has accumulated a substantial body of this latent development infrastructure.</p>
              <p>The commercial relevance of this evolution is substantial. CEACAM5-expressing tumors — particularly colorectal cancer (CRC), non-small cell lung cancer (NSCLC), gastric and gastroesophageal cancers, pancreatic ductal adenocarcinoma (PDAC), and select breast cancer subtypes — collectively represent hundreds of thousands of new diagnoses annually across the United States and major European markets.</p>
              <p>Closer analysis reveals opportunities in payload and linker innovation, as well as antibody design that can aid development of next generation molecules.</p>
              <p>CEACAM5 increasingly appears to represent more than an individual therapeutic target. The field now exhibits many characteristics of an emerging oncology platform ecosystem in which biology, translational infrastructure, platform technology, intellectual property accessibility, licensing geography, and clinical strategy interact simultaneously to shape long-term competitive positioning.</p>
              <p>The leaders in such cases will emerge by managing technological ecosystem with clinical oncology development, licensing strategy, to deliver the intended precision medicine. Successful investment and licensing bets will integrate these to develop models replicating realistic success while hedging risk.</p>
            </div>
          </section>

          {/* TOC */}
          <section className="rpt-free-section" id="toc">
            <div className="rpt-section-label">Free access <span className="rpt-free-badge">Open</span></div>
            <h2 className="rpt-section-title">Table of Contents</h2>
            <div className="rpt-toc-grid">
              {tocItems.map((item) => (
                <a key={item.num} className="rpt-toc-row" href={item.href}>
                  <div className="rpt-toc-num">{item.num}</div>
                  <div className="rpt-toc-title">{item.title}<span>{item.sub}</span></div>
                  <div className={`rpt-toc-status ${statusClass(item.status)}`}>{item.status === 'bundled' ? 'Bundled' : item.status === 'paid' ? '' : item.status === 'free' ? 'Free' : 'Preview'}</div>
                </a>
              ))}
            </div>
          </section>

          {/* CHAPTERS */}
          <section className="rpt-chapters-section" id="chapters">
            <div className="rpt-section-label">Chapter access — preview free, full content per chapter</div>
            <h2 className="rpt-section-title" style={{ marginBottom: 24 }}>Report Chapters</h2>
            <div className="rpt-chapters-label">Click any chapter to expand preview · unlock full content individually or purchase the complete report</div>

            {chapters.map((ch) => (
              <div className="rpt-chapter-block" key={ch.id} id={ch.id}>
                <div className={`rpt-chapter-head ${openChapter === ch.id ? 'open' : ''}`} onClick={() => toggleChapter(ch.id)}>
                  <div className="rpt-ch-num">{ch.num}</div>
                  <div>
                    <div className="rpt-ch-title">{ch.title}</div>
                    <div className="rpt-ch-hook">{ch.hook}</div>
                  </div>
                  <div className="rpt-ch-price"><span>or included in full</span></div>
                  <div className="rpt-ch-toggle">+</div>
                </div>
                {openChapter === ch.id && (
                  <div>
                    <div className="rpt-preview-zone">
                      <div className="rpt-preview-label">Free preview — key findings</div>
                      <div>
                        {ch.previews.map((p, i) => (
                          <div className="rpt-pb" key={i}>
                            <div className="rpt-pb-dot"></div>
                            <div><strong>{p.bold}</strong> {p.text}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rpt-paywall-zone">
                      <div>
                        <div className="rpt-pw-lock">Full content locked</div>
                        <div>
                          <div className="rpt-pw-line"></div>
                          <div className="rpt-pw-line"></div>
                          <div className="rpt-pw-line"></div>
                          <div className="rpt-pw-line"></div>
                        </div>
                        <div style={{ fontSize: 11, color: 'var(--steel)', marginTop: 10 }}>{ch.locked}</div>
                      </div>
                      <div className="rpt-pw-right">
                        <div style={{ fontSize: 11, color: 'var(--steel)', marginBottom: 12 }}>Single chapter licence</div>
                        <button className="rpt-btn-unlock" onClick={() => openModalFn(ch.modalLabel)}>Unlock Chapter</button>
                        <button className="rpt-btn-unlock-outline" onClick={() => openModalFn('full')}>Full Report</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* PRICING */}
          <section className="rpt-pricing-section" id="pricing">
            <div className="rpt-section-label">Access options</div>
            <h2 className="rpt-section-title">Licensing &amp; Pricing</h2>
            <div className="rpt-pricing-grid">
              <div className="rpt-price-card">
                <div className="rpt-pc-tier">Chapter licence</div>
                <div className="rpt-pc-price"><sub>per chapter</sub></div>
                <div className="rpt-pc-desc">Access any individual chapter. Purchase only what your analysis requires.</div>
                <div className="rpt-pc-item">Single chapter, unlimited internal use</div>
                <div className="rpt-pc-item">No redistribution outside purchasing organisation</div>
                <div className="rpt-pc-item">PDF + web access</div>
                <div className="rpt-pc-item">Peer-reviewed citation list included</div>
                <button className="rpt-btn-full rpt-btn-ghost" onClick={() => openModalFn('chapter')}>Select Chapter</button>
              </div>
              <div className="rpt-price-card rpt-featured">
                <div className="rpt-featured-tag">Most Popular</div>
                <div className="rpt-pc-tier">Full Report</div>
                <div className="rpt-pc-price"><sub>single org</sub></div>
                <div className="rpt-pc-desc">Complete report including all 8 chapters, Appendix (30-programme reference table, deal comparables, patent assignee summary), and one 60-minute analyst briefing call.</div>
                <div className="rpt-pc-item">All 8 chapters + full Appendix</div>
                <div className="rpt-pc-item">60-minute Q&amp;A briefing with AmethIntel analysts</div>
                <div className="rpt-pc-item">Unlimited internal use, one organisation</div>
                <div className="rpt-pc-item">PDF + web access + printable version</div>
                <div className="rpt-pc-item">6-month update notification</div>
                <button className="rpt-btn-full rpt-btn-solid" onClick={() => openModalFn('full')}>Purchase Full Report</button>
              </div>
              <div className="rpt-price-card">
                <div className="rpt-pc-tier">Enterprise + Bespoke</div>
                <div className="rpt-pc-price"><sub>custom</sub></div>
                <div className="rpt-pc-desc">Custom target analysis applying the AmethIntel methodology to a target of your choosing, or multi-report series subscription.</div>
                <div className="rpt-pc-item">Bespoke target analysis — your choice of target</div>
                <div className="rpt-pc-item">Series subscription: oncology + microbiology</div>
                <div className="rpt-pc-item">Quarterly briefing calls</div>
                <div className="rpt-pc-item">Multi-user enterprise licence</div>
                <div className="rpt-pc-item">Competitive Kinetic Energy Scorecard for custom target</div>
                <button className="rpt-btn-full rpt-btn-ghost" onClick={() => openModalFn('enterprise')}>Enquire</button>
              </div>
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <footer className="rpt-site-footer">
          <div className="rpt-footer-brand">AmethIntel</div>
          <div className="rpt-footer-meta">© {new Date().getFullYear()} AmethIntel. All rights reserved. Content is confidential and licensed, not sold.</div>
          <div className="rpt-footer-contact">
            <h4>Contact Us</h4>
            <a href="mailto:akash@amethintel.com">akash@amethintel.com</a>
            <a href="mailto:akash.m@hb-022.com">akash.m@hb-022.com</a>
          </div>
          <div className="rpt-footer-links">
            <a href="#">Methodology</a>
            <a href="#">Contact</a>
            <a href="#">Licensing terms</a>
          </div>
        </footer>

        {/* MODAL */}
        {showModal && (
          <div className="rpt-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}>
            <div className="rpt-modal">
              <div className="rpt-modal-title">{modalTitle}</div>
              <div className="rpt-modal-sub">{modalSub}</div>
              <div className="rpt-modal-label">Full name</div>
              <input className="rpt-modal-input" type="text" placeholder="Dr. Jane Smith" value={formName} onChange={(e) => setFormName(e.target.value)} />
              <div className="rpt-modal-label">Organisation</div>
              <input className="rpt-modal-input" type="text" placeholder="Pharma Co. / Fund name" value={formOrg} onChange={(e) => setFormOrg(e.target.value)} />
              <div className="rpt-modal-label">Business email</div>
              <input className="rpt-modal-input" type="email" placeholder="jane@organisation.com" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} />
              <div className="rpt-modal-label">Role</div>
              <input className="rpt-modal-input" type="text" placeholder="VP Business Development / R&D Director" value={formRole} onChange={(e) => setFormRole(e.target.value)} />
              <div className="rpt-modal-price-row">
                <div className="rpt-modal-price-label">{modalPriceLabel}</div>
                <div className="rpt-modal-price-val">{modalPrice}</div>
              </div>
              <div className="rpt-modal-actions">
                <button className="rpt-btn-modal-close" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="rpt-btn-modal-pay" onClick={handleSubmit} disabled={submitStatus === 'saving'} style={submitStatus === 'saved' ? { background: '#1B6B4A' } : {}}>
                  {submitStatus === 'saving' ? 'Saving...' : submitStatus === 'saved' ? 'Request Saved ✓' : 'Request Invoice & Access'}
                </button>
              </div>
              <div className="rpt-modal-note">No payment is processed here. You will receive an invoice by email within one business day. Access is granted on payment confirmation.</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CeacamReport;
