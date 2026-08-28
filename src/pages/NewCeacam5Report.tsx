import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NewCeacam5Report = () => {
    const navigate = useNavigate();
    const [summariesData, setSummariesData] = useState<any[]>([]);
    
    // Track which summary is expanded
    const [openSummaryId, setOpenSummaryId] = useState<string | null>(null);
    const [summaryUrls, setSummaryUrls] = useState<{ [key: string]: string }>({});
    const [loadingSummary, setLoadingSummary] = useState<{ [key: string]: boolean }>({});
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }
        setIsCheckingAuth(false);
        fetchSummaries();
    }, [navigate]);

    const fetchSummaries = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/summaries`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                console.log('Fetched summaries:', data);
                setSummariesData(data);
            }
        } catch (err) {
            console.error('Failed to fetch summaries', err);
        }
    };

    const loadSummaryPdf = async (summaryId: string) => {
        if (summaryUrls[summaryId] || loadingSummary[summaryId]) return;

        try {
            setLoadingSummary(prev => ({ ...prev, [summaryId]: true }));
            const token = localStorage.getItem('token');
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/summaries/${summaryId}/pdf`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.ok) {
                const blob = await res.blob();
                const url = window.URL.createObjectURL(blob);
                setSummaryUrls(prev => ({ ...prev, [summaryId]: url }));
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingSummary(prev => ({ ...prev, [summaryId]: false }));
        }
    };

    const toggleSummary = (summaryId: string) => {
        const isOpening = openSummaryId !== summaryId;
        setOpenSummaryId(isOpening ? summaryId : null);
        if (isOpening) {
            loadSummaryPdf(summaryId);
        }
    };

    if (isCheckingAuth) {
        return <div style={{ padding: '40px', color: 'white', textAlign: 'center', backgroundColor: '#0E1520', minHeight: '100vh' }}>Authenticating...</div>;
    }

    return (
        <>
            <style>{`
:root {
  --ink: #0E1520;
  --navy: #132035;
  --navy-mid: #1C3050;
  --rule: #243248;
  --steel: #4A6080;
  --mist: #8BA0B8;
  --fog: #C2CEDB;
  --paper: #F4F1EB;
  --cream: #FAF8F4;
  --accent: #C8973A;
  --accent-light: #E8B96A;
  --accent-dim: rgba(200,151,58,0.15);
  --free-green: #1B6B4A;
  --free-bg: rgba(27,107,74,0.1);
  --lock-red: #8B2020;
  --lock-bg: rgba(139,32,32,0.08);
  --chapter-bg: #F7F5F0;
  --serif: 'Playfair Display', Georgia, serif;
  --sans: 'Libre Franklin', sans-serif;
  --mono: 'DM Mono', monospace;
}

.report-container {
  background: var(--ink);
  color: var(--fog);
  font-family: var(--sans);
  font-size: 15px;
  line-height: 1.7;
  min-height: 100vh;
}

/* ===== BLACKBOXAI PROTECTION LAYER ===== */
* { user-select: none !important; -webkit-user-select: none !important; -ms-user-select: none !important; }

/* Disable selection/drag in case some elements opt out */
img, svg, video, canvas, iframe { user-drag: none !important; -webkit-user-drag: none !important; }

/* Transparent overlay that intercepts mouse events.
   It blocks right-click/copy gestures while allowing interactive elements to work. */
#bbai-overlay {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2147483646;
  background: rgba(0,0,0,0);
  /* Allow the page to remain clickable; keyboard/contextmenu blocks handle the restriction. */
  pointer-events: none;
}


/* Visual watermark (does NOT block events) */
#bbai-watermark {
  position: fixed;
  inset: 0;
  z-index: 2147483647;
  pointer-events: none;
  opacity: 0.18;
  mix-blend-mode: overlay;
}

#bbai-watermark .bbai-text {
  position: absolute;
  left: 24px;
  bottom: 22px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(232,185,106,0.9);
  white-space: nowrap;
}

/* ─── HEADER STRIP ─── */

.top-bar {
  background: var(--navy);
  border-bottom: 1px solid var(--rule);
  padding: 10px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}
.logo {
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 500;
  color: var(--accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.top-nav {
  display: flex;
  gap: 28px;
  align-items: center;
}
.top-nav a {
  font-size: 12px;
  font-weight: 500;
  color: var(--mist);
  text-decoration: none;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: color 0.2s;
}
.top-nav a:hover { color: var(--cream); }
.nav-greeting {
  color: var(--mist);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.btn-logout,
.btn-purchase {
  background: var(--accent);
  color: var(--ink);
  border: none;
  padding: 7px 18px;
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: background 0.2s;
}
.btn-logout:hover,
.btn-purchase:hover { background: var(--accent-light); }

/* ─── HERO ─── */
.hero {
  background: var(--navy);
  border-bottom: 1px solid var(--rule);
  padding: 72px 48px 60px;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  top: 0; right: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(135deg, transparent 50%, rgba(200,151,58,0.04) 100%);
  pointer-events: none;
}
.hero-eyebrow {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.hero-eyebrow::after {
  content: '';
  display: block;
  width: 48px;
  height: 1px;
  background: var(--accent);
  opacity: 0.5;
}
.hero-title {
  font-family: var(--serif);
  font-size: clamp(26px, 4vw, 42px);
  font-weight: 500;
  color: var(--cream);
  line-height: 1.2;
  max-width: 720px;
  margin-bottom: 16px;
}
.hero-title em {
  font-style: italic;
  color: var(--accent-light);
}
.hero-sub {
  font-size: 14px;
  color: var(--mist);
  max-width: 560px;
  line-height: 1.75;
  margin-bottom: 36px;
}
.hero-meta {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  margin-bottom: 36px;
  padding-top: 24px;
  border-top: 1px solid var(--rule);
}
.meta-item { }
.meta-label {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--steel);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 3px;
}
.meta-val {
  font-size: 13px;
  font-weight: 500;
  color: var(--fog);
}
.pricing-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--accent-dim);
  border: 1px solid rgba(200,151,58,0.3);
  border-radius: 2px;
  padding: 10px 18px;
}
.price-item {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--accent-light);
  display: flex;
  align-items: center;
  gap: 6px;
}
.price-divider {
  width: 1px;
  height: 24px;
  background: rgba(200,151,58,0.3);
}
.free-badge {
  background: var(--free-bg);
  border: 1px solid rgba(27,107,74,0.3);
  color: #5DCAA5;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 2px;
}

/* ─── LAYOUT ─── */
.content-wrap {
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 48px;
}

/* ─── FREE SECTIONS ─── */
.free-section {
  padding: 56px 0 48px;
  border-bottom: 1px solid var(--rule);
}
.section-label {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.section-label::before {
  content: '';
  display: block;
  width: 24px;
  height: 1px;
  background: var(--accent);
}
.section-title {
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 500;
  color: var(--cream);
  margin-bottom: 20px;
}

/* ─── EXEC SUMMARY ─── */

.full-exec-summary {
  max-width: 100%;
  margin-top: 10px;
}

.full-exec-summary p {
  font-size: 15px;
  color: var(--mist);
  line-height: 1.95;
  margin-bottom: 22px;
  text-align: justify;
}

.full-exec-summary strong {
  color: var(--fog);
  font-weight: 600;
}

.full-exec-summary ul {
  margin-left: 24px;
  margin-bottom: 24px;
}

.full-exec-summary li {
  color: var(--mist);
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 12px;
}

.callout-box {
  background: var(--navy-mid);
  border-left: 2px solid var(--accent);
  padding: 18px 22px;
  margin: 28px 0;
}

.callout-box p {
  font-family: var(--serif);
  font-style: italic;
  font-size: 15px;
  color: var(--fog);
  line-height: 1.8;
  margin: 0;
}
/* ─── TOC ─── */
.toc-grid {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 8px;
}
.toc-row {
  display: grid;
  grid-template-columns: 44px 1fr auto;
  gap: 16px;
  align-items: center;
  padding: 13px 16px;
  background: var(--navy-mid);
  border: 1px solid var(--rule);
  border-radius: 2px;
  transition: background 0.15s;
  cursor: pointer;
  text-decoration: none;
}
.toc-row:hover { background: #223050; }
.toc-num {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--accent);
  font-weight: 500;
}
.toc-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--fog);
}
.toc-title span {
  display: block;
  font-size: 12px;
  font-weight: 400;
  color: var(--steel);
  margin-top: 2px;
}
.toc-status {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 2px;
  white-space: nowrap;
}
.status-free { background: var(--free-bg); color: #5DCAA5; border: 1px solid rgba(27,107,74,0.3); }
.status-paid { background: var(--lock-bg); color: #C07070; border: 1px solid rgba(139,32,32,0.2); }
.status-preview { background: rgba(200,151,58,0.1); color: var(--accent-light); border: 1px solid rgba(200,151,58,0.25); }

/* ─── CHAPTERS ─── */
.chapters-section {
  padding: 56px 0;
  border-bottom: 1px solid var(--rule);
}
.chapters-label {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--mist);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--rule);
}
.chapter-block {
  border: 1px solid var(--rule);
  border-radius: 3px;
  margin-bottom: 8px;
  overflow: hidden;
  background: var(--navy);
}
.chapter-head {
  display: grid;
  grid-template-columns: 56px 1fr auto auto;
  gap: 16px;
  align-items: center;
  padding: 16px 20px;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: background 0.15s;
}
.chapter-head:hover { background: var(--navy-mid); }
.chapter-head.open { border-bottom-color: var(--rule); background: var(--navy-mid); }
.ch-num {
  font-family: var(--mono);
  font-size: 20px;
  font-weight: 500;
  color: var(--rule);
}
.ch-head-content { }
.ch-title {
  font-family: var(--serif);
  font-size: 17px;
  font-weight: 500;
  color: var(--cream);
  line-height: 1.3;
}
.ch-hook {
  font-size: 12px;
  color: var(--steel);
  margin-top: 3px;
  font-style: italic;
}
.ch-price {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--accent);
  white-space: nowrap;
  text-align: right;
}
.ch-price span {
  display: block;
  font-size: 10px;
  color: var(--steel);
  margin-top: 1px;
}
.ch-toggle {
  width: 24px;
  height: 24px;
  border: 1px solid var(--rule);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mist);
  font-size: 14px;
  transition: transform 0.2s, border-color 0.2s;
  flex-shrink: 0;
}
.chapter-head.open .ch-toggle { transform: rotate(45deg); border-color: var(--accent); color: var(--accent); }

.chapter-body {
  display: none;
}
.chapter-body.open { display: block; }

/* ─── SUMMARY STRIP ─── */
.summary-strip {
  padding: 10px 20px 10px 76px;
  border-top: 1px solid var(--rule);
  background: rgba(200,151,58,0.04);
  display: flex;
  align-items: center;
  gap: 12px;
}
.btn-summary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: 1px solid rgba(200,151,58,0.35);
  color: var(--accent);
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}
.btn-summary:hover { background: var(--accent-dim); border-color: var(--accent); }
.btn-summary.active { background: var(--accent-dim); border-color: var(--accent); }
.summary-badge {
  font-family: var(--mono);
  font-size: 9px;
  color: var(--accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.65;
}
.summary-panel {
  padding: 16px 20px 20px 76px;
  background: rgba(200,151,58,0.02);
  border-top: 1px solid rgba(200,151,58,0.12);
}
.summary-label {
  font-family: var(--mono);
  font-size: 9px;
  color: var(--accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 10px;
  opacity: 0.75;
}
.summary-panel iframe {
  width: 100%;
  height: 700px;
  border: 1px solid var(--rule);
  border-radius: 4px;
  background: white;
}

.preview-zone {
  padding: 20px 20px 0 76px;
}
.preview-label {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--free-green);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 12px;
  opacity: 0.9;
}
.preview-label::before { content: '◆ '; }
.preview-bullets {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 20px;
}
.pb {
  display: flex;
  gap: 12px;
  align-items: baseline;
  padding: 8px 0;
  border-bottom: 1px solid var(--rule);
  font-size: 13px;
  color: var(--fog);
  line-height: 1.6;
}
.pb:last-child { border-bottom: none; }
.pb-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
  margin-top: 8px;
  opacity: 0.7;
}
.pb strong { color: var(--cream); font-weight: 500; }

.paywall-zone {
  margin: 0 20px 20px 76px;
  background: var(--ink);
  border: 1px solid var(--rule);
  border-radius: 2px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.pw-left { }
.pw-lock {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--lock-red);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 6px;
  opacity: 0.85;
}
.pw-lock::before { content: '⬛ '; }
.pw-hidden {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.pw-line {
  height: 9px;
  background: var(--rule);
  border-radius: 2px;
  opacity: 0.5;
}
.pw-line:nth-child(1) { width: 88%; }
.pw-line:nth-child(2) { width: 72%; }
.pw-line:nth-child(3) { width: 80%; }
.pw-line:nth-child(4) { width: 55%; }
.pw-right { flex-shrink: 0; text-align: center; }
.pw-price {
  font-family: var(--mono);
  font-size: 22px;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 8px;
}
.pw-sublabel {
  font-size: 11px;
  color: var(--steel);
  margin-bottom: 12px;
}
.btn-unlock {
  background: var(--accent);
  color: var(--ink);
  border: none;
  padding: 9px 22px;
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  width: 100%;
  transition: background 0.2s;
}
.btn-unlock:hover { background: var(--accent-light); }
.btn-unlock-outline {
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
  padding: 9px 22px;
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  width: 100%;
  margin-top: 6px;
  transition: all 0.2s;
}
.btn-unlock-outline:hover { background: var(--accent-dim); }

/* ─── PRICING PANEL ─── */
.pricing-section {
  padding: 56px 0;
  border-bottom: 1px solid var(--rule);
}
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 8px;
}
.price-card {
  background: var(--navy-mid);
  border: 1px solid var(--rule);
  border-radius: 3px;
  padding: 24px;
}
.price-card.featured {
  background: var(--navy);
  border-color: var(--accent);
  position: relative;
}
.featured-tag {
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent);
  color: var(--ink);
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 3px 12px;
  border-radius: 0 0 3px 3px;
}
.pc-tier {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--steel);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.pc-price {
  font-family: var(--serif);
  font-size: 32px;
  color: var(--cream);
  font-weight: 500;
  margin-bottom: 4px;
}
.pc-price sub {
  font-size: 14px;
  font-family: var(--sans);
  color: var(--steel);
  font-weight: 400;
}
.pc-desc {
  font-size: 13px;
  color: var(--mist);
  margin-bottom: 18px;
  line-height: 1.6;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--rule);
}
.pc-items {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}
.pc-item {
  font-size: 12px;
  color: var(--mist);
  display: flex;
  gap: 8px;
  align-items: baseline;
  line-height: 1.5;
}
.pc-item::before { content: '—'; color: var(--accent); flex-shrink: 0; }
.btn-full {
  width: 100%;
  padding: 11px;
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.2s;
  border: 1px solid var(--accent);
}
.btn-solid { background: var(--accent); color: var(--ink); }
.btn-solid:hover { background: var(--accent-light); }
.btn-ghost { background: transparent; color: var(--accent); }
.btn-ghost:hover { background: var(--accent-dim); }

/* ─── FOOTER ─── */
.site-footer {
  padding: 40px 48px;
  border-top: 1px solid var(--rule);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}
.footer-brand {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.footer-meta {
  font-size: 12px;
  color: var(--steel);
}
.footer-links {
  display: flex;
  gap: 20px;
}
.footer-links a {
  font-size: 12px;
  color: var(--steel);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-links a:hover { color: var(--fog); }

/* ─── MODAL ─── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10,16,28,0.92);
  z-index: 200;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.modal-overlay.open { display: flex; }
.modal {
  background: var(--navy);
  border: 1px solid var(--accent);
  border-radius: 4px;
  padding: 36px;
  max-width: 440px;
  width: 100%;
}
.modal-title {
  font-family: var(--serif);
  font-size: 20px;
  color: var(--cream);
  margin-bottom: 6px;
}
.modal-sub {
  font-size: 13px;
  color: var(--mist);
  margin-bottom: 24px;
  line-height: 1.65;
}
.modal-field {
  margin-bottom: 14px;
}
.modal-label {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--steel);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.modal-input {
  width: 100%;
  background: var(--ink);
  border: 1px solid var(--rule);
  border-radius: 2px;
  padding: 10px 12px;
  font-family: var(--sans);
  font-size: 13px;
  color: var(--fog);
  outline: none;
  transition: border-color 0.2s;
}
.modal-input:focus { border-color: var(--accent); }
.modal-price-row {
  background: var(--ink);
  border: 1px solid var(--rule);
  border-radius: 2px;
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.modal-price-label { font-size: 13px; color: var(--mist); }
.modal-price-val {
  font-family: var(--mono);
  font-size: 18px;
  color: var(--accent);
}
.modal-actions { display: flex; gap: 10px; }
.btn-modal-close {
  flex: 1;
  padding: 11px;
  background: transparent;
  border: 1px solid var(--rule);
  color: var(--steel);
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.2s;
}
.btn-modal-close:hover { border-color: var(--fog); color: var(--fog); }
.btn-modal-pay {
  flex: 2;
  padding: 11px;
  background: var(--accent);
  border: none;
  color: var(--ink);
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: background 0.2s;
}
.btn-modal-pay:hover { background: var(--accent-light); }
.modal-note {
  font-size: 11px;
  color: var(--steel);
  margin-top: 14px;
  text-align: center;
  line-height: 1.6;
}

/* responsive */
@media (max-width: 760px) {
  .top-bar, .hero, .content-wrap, .site-footer { padding-left: 20px; padding-right: 20px; }
  .hero { padding-top: 40px; padding-bottom: 40px; }
  .exec-body { grid-template-columns: 1fr; }
  .pricing-grid { grid-template-columns: 1fr; }
  .toc-row { grid-template-columns: 36px 1fr; }
  .toc-status { display: none; }
  .chapter-head { grid-template-columns: 40px 1fr auto; }
  .ch-price { display: none; }
  .preview-zone, .paywall-zone { padding-left: 20px; }
  .paywall-zone { flex-direction: column; align-items: stretch; }
  .hero-meta { gap: 20px; }
  .top-nav a { display: none; }
}
.top-nav a.home-link {
  color: var(--accent-light);
  font-weight: 600;
  padding: 6px 12px;
  border: 1px solid var(--accent);
  border-radius: 2px;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.top-nav a.home-link:hover {
  background: var(--accent-dim);
  color: var(--accent);
  text-decoration: none;
}

/* Hide on homepage if needed */
@media (max-width: 760px) {
  .top-nav a.home-link {
    font-size: 13px;
    padding: 5px 10px;
  }
}
`}</style>
            <div className="report-container">
                {/* HERO */}
                <section className="hero">
                    <div className="content-wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <div className="hero-eyebrow">AmethIntel · Oncology Intelligence Series · 2026</div>
                        <h1 className="hero-title">CEACAM5: Oncology Target and<br /><em>Ramifications for Target Selection Strategy</em></h1>
                        <p className="hero-sub">A decision-grade intelligence review integrating clinical trial triage, failure attribution, patent landscape, payload and linker analysis, and 2026 deal structure benchmarks — structured for R&amp;D heads, BD leaders, and oncology investment teams.</p>



                        {/* <div className="pricing-pill">

                        <div className="price-item">
                            TOC + Executive Summary
                        </div>

                        <div className="price-divider"></div>

                        <div className="price-item">
                            Data
                        </div>

                        <div className="price-divider"></div>

                        <div className="price-item">
                            Analysis
                        </div>

                        <div className="price-divider"></div>

                        <div className="price-item">
                            Projection
                        </div>

                    </div> */}
                    </div>
                </section>

                <div className="content-wrap">

                    {/* EXEC SUMMARY */}
                    <section className="free-section" id="exec-summary">

                        <div className="section-label">
                            Executive Summary
                        </div>

                        <h2 className="section-title">
                            CEACAM5 Therapeutic Landscape & Strategic Outlook
                        </h2>

                        <div className="full-exec-summary">

                            <p>
                                CEACAM5 (carcinoembryonic antigen-related cell adhesion molecule 5, CD66e) is emerging as one of the most strategically important solid tumor targets in precision oncology. Long recognized biologically, but historically constrained by technological limitations, the target now stands at an inflection point.
                            </p>

                            <p>
                                <strong></strong>
                                <br />
                                AmethIntel Analysis of CEACAM5 : A Commercial Oncology Platform with Opportunities of Unique Nature.
                                <br />
                                A study of Technological Evolution, Clinical Development, Intellectual Property, Regulatory, Licensing, and Investment Dynamics
                            </p>

                            <p>
                                AmethIntel™ is a Search and Value Algorithm trained to support the BD and investment teams on data backed valuations, and to the scientific, and clinical development teams to guide on the driver of such valuations. The iterative search strategy uses clinical trials as the base dataset, and on each trial builds the patents, publications, regulatory and payer (USA) outlook to identify white spaces and opportunities.
                            </p>

                            <p>
                                Analysis of CEACAM5 was an interesting case study, arguing convergence of various technologies with clinical development strategy to unlock clinically and commercially viable therapies that may reposition CEACAM5 within the next generation of oncology platforms.
                            </p>

                            <p>
                                A total of 187 therapeutic clinical trials were identified as having a bearing for the understanding of the landscape. Various moieties are tried for CEACAM5 – CAR-T, ADC, peptides, small molecules. The developments revealed the nature and basis of competition and market signals that may shape the industry. These signals as of June 2026 are analyzed.
                            </p>

                            <p>
                                Drug development is an iterative process running market development and clinical development hand in hand. ADCs are the leading moieties in development at the time of release of this report. Analysis of granted claims in ADC patents, analysis of payload and linker chemistries clearly establishes boundaries of the barriers to enter, which are limited. Consistent with this, the ADC space is getting crowded giving clear signals of fast followers. This demands a change in clinical development strategies, which instead of speed, which suits a field secured by strong IP barriers can corroborate with the IP strategy to secure niche segments in cases like CEACAM5.
                            </p>

                            <p>
                                For CAR-T as a modality, the second and third generation approaches are showing promising results. Breakthroughs are required in the economics of production, administration and after care. The constrains are not preventing strong developments and confidence, the basis of which is analyzed.
                            </p>

                            <p>
                                The attempted peptides show promise and no adverse events, these developments are paused for the time being, and provide qualified opportunities to potential fast followers. Diagnostics trials hold vital information in the case of a target like CEACAM5. Analysis of these trials provides clear directions to the white spaces which can be exploited.
                            </p>

                            <p>
                                CEACAM5 as a target is not druggable by small molecules and is a marker that leads to elimination of transformed cell, instead of being an oncogene. Analysis of small molecule drugs used in combination reveals additional applications of the platform in several tumors like KRAS, FGF, HNF-alpha, with an option to be developed as market expansion strategy.
                            </p>

                            <p>
                                Main programs that currently define the leading edge of the field are:
                            </p>

                            <ul>
                                <li>Precemtabart tocentecan (M9140, Merck KGaA) has emerged as a leading clinical programme, advancing across multiple PROCEADE studies in colorectal, gastric, pancreatic, and lung cancers using an exatecan payload platform.</li>
                                <li>SGN-CEACAM5C / PF-08046050 (Pfizer/Seagen) represents one of the most strategically important next-generation ADC programmes, combining the clinically validated tusamitamab antibody backbone with a high drug-to-antibody ratio Topoisomerase I payload platform optimized for bystander activity.</li>
                                <li>BMS-986490 is advancing through combination-oriented development strategies alongside bevacizumab and may contribute meaningfully to future sequencing paradigms.</li>
                                <li>IBI3020 (Innovent Biologics) introduces a differentiated dual-payload ADC architecture reflecting the broader movement toward increasingly engineered payload combinations.</li>
                                <li>Additional entrants, including linker-differentiated and regionally developed programs, continue to expand the competitive landscape and contribute to increasingly global licensing dynamics.</li>
                            </ul>

                            <p>
                                In therapeutic landscape analysis, shelved or discontinued programmers do not necessarily weaken a target category. In many cases, they generate valuable translational infrastructure, including validated assays, safety datasets, biomarker frameworks, manufacturing precedent, regulatory interactions, and partially de-risked development pathways. CEACAM5 has accumulated a substantial body of this latent development infrastructure. The accumulated translational history of the field may also create favorable conditions for differentiated fast-followers and best in className therapeutic strategies frequently observed in mature oncology markets.
                            </p>

                            <p>
                                The commercial relevance of this evolution is substantial. CEACAM5-expressing tumors — particularly colorectal cancer (CRC), non-small cell lung cancer (NSCLC), gastric and gastroesophageal cancers, pancreatic ductal adenocarcinoma (PDAC), and select breast cancer subtypes — collectively represent hundreds of thousands of new diagnoses annually across the United States and major European markets. Companion diagnostic infrastructure is already established, clinical enrollment criteria are increasingly standardized, and payer acceptance of biomarker-driven oncology therapies continues to expand. Successful CEACAM5-directed therapies therefore appear positioned for relatively rapid integration into second- and third-line treatment paradigms, with credible pathways toward earlier-line adoption.
                            </p>

                            <p>
                                Closer analysis reveals opportunities in payload and linker innovation, as well as antibody design that can aid development of next generation molecules.
                            </p>

                            <p>
                                CEACAM5 increasingly appears to represent more than an individual therapeutic target. The field now exhibits many characteristics of an emerging oncology platform ecosystem in which biology, translational infrastructure, platform technology, intellectual property accessibility, licensing geography, and clinical strategy interact simultaneously to shape long-term competitive positioning.
                            </p>

                            <p>
                                The leaders in such cases will emerge by managing technological ecosystem with clinical oncology development, licensing strategy, to deliver the intended precision medicine. Successful investment and licensing bets will integrate these to develop models replicating realistic success while hedging risk.
                            </p>

                        </div>

                    </section>

                    {/* TOC — FREE */}
                    {/* <section className="free-section" id="toc">

                    <h2 className="section-title">Table of Contents</h2>

                    <div className="toc-grid">
                        <a className="toc-row" href="#exec-summary">
                            <div className="toc-num">—</div>
                            <div className="toc-title">Executive Thesis<span>Drugability verdict · three correctable engineering errors · report scope</span></div>
                            <div className="toc-status status-free">Free</div>
                        </a>
                        <a className="toc-row" href="#ch-1">
                            <div className="toc-num">01</div>
                            <div className="toc-title">Target Biology &amp; Expression Landscape<span>Domain architecture · IHC by tumour type · shedding mechanism</span></div>
                            <div className="toc-status status-preview">Preview</div>
                        </a>
                        <a className="toc-row" href="#ch-2">
                            <div className="toc-num">02</div>
                            <div className="toc-title">Active Clinical Trial Landscape<span>260+ trials tiered by readout imminence · sponsor commitment signals · kinetic energy analysis</span></div>
                            <div className="toc-status status-preview">Preview</div>
                        </a>
                        <a className="toc-row" href="#ch-3">
                            <div className="toc-num">03</div>
                            <div className="toc-title">Programme Failure Attribution<span>Four-cause taxonomy · every major termination classNameified · cross-cutting finding</span></div>
                            <div className="toc-status status-preview">Preview</div>
                        </a>
                        <a className="toc-row" href="#ch-4">
                            <div className="toc-num">04</div>
                            <div className="toc-title">Patent Landscape<span>Domain-level assignee mapping · linker IP concentration · FTO pathways · white space</span></div>
                            <div className="toc-status status-paid"></div>
                        </a>
                        <a className="toc-row" href="#ch-5">
                            <div className="toc-num">05</div>
                            <div className="toc-title">Payload Landscape<span>DM4 → Topo1i evolution · bystander killing · patent landscape by payload className</span></div>
                            <div className="toc-status status-paid"></div>
                        </a>
                        <a className="toc-row" href="#ch-6">
                            <div className="toc-num">06</div>
                            <div className="toc-title">Linker Landscape<span>Shedding sink quantified · site-specific conjugation · DAR stability · white space</span></div>
                            <div className="toc-status status-paid"></div>
                        </a>
                        <a className="toc-row" href="#ch-7">
                            <div className="toc-num">07</div>
                            <div className="toc-title">Differentiation for Long-Term Dominance<span>Three-variable framework · population sizing · deal structure benchmarks · risk matrix</span></div>
                            <div className="toc-status status-paid"></div>
                        </a>
                        <a className="toc-row" href="#ch-8">
                            <div className="toc-num">08</div>
                            <div className="toc-title">2026 Deal Structure Analysis<span>ADC licensing benchmarks · China-origin trajectories · CEACAM5 positioning post-Sanofi</span></div>
                            <div className="toc-status status-paid"></div>
                        </a>
                        <a className="toc-row" href="#ch-a">
                            <div className="toc-num">A</div>
                            <div className="toc-title">Appendix — Full Reference Tables<span>30-programme table · NCT index · deal comparables · patent assignee summary</span></div>
                            <div className="toc-status status-paid">Bundled</div>
                        </a>
                    </div>
                </section> */}

                    {/* CHAPTERS */}
                    
                    <section className="chapters-section" id="chapters">
                        <h2 style={{ color: "orange", fontSize: "14px", margin: "20px" }}>Report Summaries</h2>

                        {summariesData.length === 0 ? (
                            <div style={{ color: 'var(--mist)', padding: '20px' }}>No summaries available.</div>
                        ) : (
                            summariesData.map((summary) => (
                                <div className="chapter-block" key={summary.id} id={`sum-${summary.id}`}>
                                    <div className={`chapter-head ${openSummaryId === summary.id ? 'open' : ''}`} onClick={() => toggleSummary(summary.id)}>
                                        <div className="ch-num">{summary.num}</div>
                                        <div className="ch-head-content">
                                            <div className="ch-title">{summary.title}</div>
                                        </div>
                                        <div className="ch-toggle">+</div>
                                    </div>
                                    <div className={`chapter-body ${openSummaryId === summary.id ? 'open' : ''}`}>
                                        <div style={{ padding: '20px' }}>
                                            {loadingSummary[summary.id] ? (
                                                <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--mist)', fontStyle: 'italic' }}>Loading summary PDF...</div>
                                            ) : summaryUrls[summary.id] ? (
                                                <iframe src={summaryUrls[summary.id]} style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px', backgroundColor: 'white' }} title={`Summary ${summary.num}`} />
                                            ) : (
                                                <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--lock-red)' }}>
                                                    Failed to load summary or no summary available. 
                                                    <button onClick={() => loadSummaryPdf(summary.id)} style={{ marginLeft: '10px', textDecoration: 'underline', background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}>Retry</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </section>

                </div>{/* /content-wrap */}

                <footer className="site-footer">

                    <div className="footer-brand">
                        AmethIntel
                    </div>

                    <div className="footer-meta">
                        © 2026 AmethIntel. All rights reserved.
                        Content is confidential and licensed, not sold.
                    </div>

                    {/* CONTACT US */}

                    <div className="footer-contact">

                        <h4>Contact Us</h4>

                        <div className="contact-links">

                            <a href="mailto:akash@amethintel.com"
                                style={{ display: 'block', color: 'white', marginBottom: '10px', textDecoration: 'none' }}>

                                akash@amethintel.com

                            </a>

                            <a href="mailto:akash.m@hb-022.com"
                                style={{ display: 'block', color: 'white', textDecoration: 'none' }}>

                                akash.m@hb-022.com

                            </a>

                        </div>

                    </div>

                    {/* FOOTER LINKS */}

                    <div className="footer-links">

                        <a href="#">Methodology</a>

                        <a href="#">Contact</a>

                        <a href="#">Licensing terms</a>

                    </div>

                </footer>
            </div>
        </>
    );
};

export default NewCeacam5Report;
