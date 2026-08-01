import { useState, useEffect } from 'react';

const NewCeacam5Report = () => {
    const [chaptersData, setChaptersData] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [purchaseTarget, setPurchaseTarget] = useState<any>(null);
    const [loadingPurchase, setLoadingPurchase] = useState(false);
    
    // Track which chapter is expanded
    const [openChapterId, setOpenChapterId] = useState<string | null>(null);

    useEffect(() => {
        fetchChapters();
    }, []);

    const fetchChapters = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/chapters`, {
                headers: token ? { Authorization: `Bearer ${token}` } : {}
            });
            if (res.ok) {
                const data = await res.json();
                console.log('Fetched chapters:', data);
                setChaptersData(data);
            }
        } catch (err) {
            console.error('Failed to fetch chapters', err);
        }
    };

    const getChapterDb = (chapterNumber: number) => {
        return chaptersData.find((c: any) => {
            return String(c.num) === String(chapterNumber) || 
                   String(c.id).toLowerCase() === `chapter${chapterNumber}` ||
                   String(c.id).toLowerCase() === `ch-${chapterNumber}` ||
                   String(c.id) === String(chapterNumber);
        });
    };

    const isUnlocked = (chapterNumber: number) => {
        const dbChap = getChapterDb(chapterNumber);
        console.log(`isUnlocked(${chapterNumber}):`, dbChap);
        return dbChap?.isAccessible || false;
    };


    const openModal = (target: any) => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Please log in first to purchase chapters.');
            return;
        }
        setPurchaseTarget(target);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setPurchaseTarget(null);
    };

    const closeModalOutside = (e: any) => {
        if (e.target.id === 'modal') closeModal();
    };

    const submitRequest = async () => {
        if (!purchaseTarget || purchaseTarget === 'full' || purchaseTarget === 'enterprise' || purchaseTarget === 'chapter') {
            alert('Simulated Request Sent!');
            closeModal();
            return;
        }

        // For specific chapters
        try {
            setLoadingPurchase(true);
            const token = localStorage.getItem('token');
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/chapters/${purchaseTarget}/purchase`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.ok) {
                alert('Purchase successful!');
                await fetchChapters();
            } else {
                alert('Purchase failed');
            }
        } catch (err) {
            console.error(err);
            alert('Error processing purchase');
        } finally {
            setLoadingPurchase(false);
            closeModal();
        }
    };

    const [pdfUrls, setPdfUrls] = useState<{[key: number]: string}>({});
    const [loadingPdf, setLoadingPdf] = useState<{[key: number]: boolean}>({});

    const loadInlinePdf = async (chapterNumber: number) => {
        if (pdfUrls[chapterNumber] || loadingPdf[chapterNumber]) return;

        try {
            setLoadingPdf(prev => ({ ...prev, [chapterNumber]: true }));
            const token = localStorage.getItem('token');
            if (!token) {
               setLoadingPdf(prev => ({ ...prev, [chapterNumber]: false }));
               return;
            }
            const dbChap = getChapterDb(chapterNumber);
            if (!dbChap) {
                console.error("Chapter not found in DB data");
                setLoadingPdf(prev => ({ ...prev, [chapterNumber]: false }));
                return;
            }
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/chapters/${dbChap.id}/pdf`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            
            if (res.ok) {
                const blob = await res.blob();
                const url = window.URL.createObjectURL(blob);
                setPdfUrls(prev => ({ ...prev, [chapterNumber]: url }));
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingPdf(prev => ({ ...prev, [chapterNumber]: false }));
        }
    };

    const toggleChapter = (elementId: string, chapterNumber?: number) => {
        const isOpening = openChapterId !== elementId;
        console.log('Toggling chapter:', elementId, chapterNumber, 'isUnlocked:', chapterNumber !== undefined ? isUnlocked(chapterNumber) : false);
        setOpenChapterId(isOpening ? elementId : null);
    };

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

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
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


            <header className="top-bar">

                <div id="bbai-overlay" aria-hidden="true"></div>
                <div id="bbai-watermark"><div className="bbai-text" id="bbai-watermark-text">Viewer</div></div>
                <div className="logo">
                    <a href="https://amethintel.com" style={{ color: 'inherit', textDecoration: 'none' }}>AmethIntel</a>
                </div>

                <nav className="top-nav">
                    {/* Back to Home - Only show on report pages */}
                    <a href="https://amethintel.com" className="home-link">
                        ← Back to Home
                    </a>

                    <a href="#exec-summary">Summary</a>
                    <a href="#toc">Contents</a>
                    <a href="#chapters">Chapters</a>
                    <a href="#pricing">Pricing</a>
                    <button className="btn-purchase" onClick={() => openModal('full')}>Purchase Full Report</button>
                </nav>
            </header>
            {/* HERO */}
            <section className="hero">
                <div className="content-wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <div className="hero-eyebrow">AmethIntel · Oncology Intelligence Series · 2026</div>
                    <h1 className="hero-title">CEACAM5: Oncology Target and<br /><em>Ramifications for Target Selection Strategy</em></h1>
                    <p className="hero-sub">A decision-grade intelligence review integrating clinical trial triage, failure attribution, patent landscape, payload and linker analysis, and 2026 deal structure benchmarks — structured for R&amp;D heads, BD leaders, and oncology investment teams.</p>

                    <div className="hero-meta">
                        <div className="meta-item"><div className="meta-label">Publisher</div><div className="meta-val">AmethIntel</div></div>
                        <div className="meta-item"><div className="meta-label">Pages</div><div className="meta-val">~80 pp</div></div>
                        <div className="meta-item"><div className="meta-label">Chapters</div><div className="meta-val">8 + Appendix</div></div>
                        <div className="meta-item"><div className="meta-label">Updated</div><div className="meta-val">May 2026</div></div>
                        <div className="meta-item"><div className="meta-label">Coverage</div><div className="meta-val">US · EU · Global</div></div>
                        <div className="meta-item"><div className="meta-label">classNameification</div><div className="meta-val">Confidential</div></div>
                    </div>

                    <div className="pricing-pill">

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

                    </div>
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
                <section className="free-section" id="toc">
                    <div className="section-label">Free access <span className="free-badge" style={{ marginLeft: '8px' }}>Open</span></div>
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
                </section>

                {/* CHAPTERS */}
                <section className="chapters-section" id="chapters">
                    <div className="section-label">Chapter access — preview free, full content  per chapter</div>
                    <h2 className="section-title" style={{ marginBottom: '24px' }}>Report Chapters</h2>
                    <div className="chapters-label">Click any chapter to expand preview · unlock full content individually or purchase the complete report</div>

                    {/* CH 1 */}
                    <div className="chapter-block" id="ch-1">
                        <div className={`chapter-head ${openChapterId === 'ch-1' ? 'open' : ''}`} onClick={() => toggleChapter('ch-1', 1)}>
                            <div className="ch-num">01</div>
                            <div className="ch-head-content">
                                <div className="ch-title">Target Biology &amp; Expression Landscape</div>
                                <div className="ch-hook">What CEACAM5 is, where it is expressed, and what that means for therapeutic window design</div>
                            </div>
                            <div className="ch-price"><span>or included in full</span></div>
                            <div className="ch-toggle">+</div>
                        </div>
                        <div className={`chapter-body ${openChapterId === 'ch-1' ? 'open' : ''}`}>
                            {pdfUrls[1] || loadingPdf[1] ? (
                                <div style={{ padding: '20px' }}>
                                    {loadingPdf[1] ? (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--mist)', fontStyle: 'italic' }}>Loading secure PDF...</div>
                                    ) : pdfUrls[1] ? (
                                        <iframe src={pdfUrls[1]} style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px', backgroundColor: 'white' }} title="Chapter 1 PDF" />
                                    ) : (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--lock-red)' }}>Failed to load PDF. <button onClick={() => loadInlinePdf(1)} style={{ textDecoration: 'underline', background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}>Retry</button></div>
                                    )}
                                </div>
                            ) : (
                                <>
                            <div className="preview-zone">
                                <div className="preview-label">Free preview — key findings</div>
                                <div className="preview-bullets">
                                    <div className="pb"><div className="pb-dot"></div><div><strong>Domain architecture resolved at 3.11 Å:</strong> the October 2024 cryo-EM structure (PDB 8BW0, Sanofi/Nature Comms) reveals tusamitamab binds a discontinuous epitope in the A3-B3 domains incorporating an N-linked mannose at Asn612 — the first atomic-resolution epitope map of any CEACAM5 antibody</div></div>
                                    <div className="pb"><div className="pb-dot"></div><div><strong>Expression frequency by tumour type:</strong> CRC 90–95% any IHC; high-expression (≥2+/≥50% cells) in ~60–70% mCRC. NSCLC adenocarcinoma: 24.3% HE in primary tumours, rising to 35.3% in metastases. Gastric: 55–70%. PDAC: ~90%</div></div>
                                    <div className="pb"><div className="pb-dot"></div><div><strong>The polarity shift is the therapeutic window:</strong> in normal colonic epithelium CEACAM5 is strictly apical-surface; in adenocarcinoma polarity is lost and expression becomes circumferential — basolateral surface accessible to vascular-delivered agents</div></div>
                                </div>
                            </div>
                            <div className="paywall-zone">
                                <div className="pw-left">
                                    <div className="pw-lock">{isUnlocked(1) ? "Content Unlocked" : "Full content locked"}</div>
                                    <div className="pw-hidden">
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                    </div>
                                    <div style={{ fontSize: '11px', color: 'var(--steel)', marginTop: '10px' }}>Full chapter includes: complete IHC frequency tables with H-score distributions · KRAS-CEACAM5 molecular correlations in NSCLC · serum CEA dynamics by tumour type · shedding sink quantification · domain surface exposure by tumour type vs. normal tissue · 9 peer-reviewed citations</div>
                                </div>
                                <div className="pw-right">
                                    <div className="pw-price"></div>
                                    <div className="pw-sublabel">{isUnlocked(1) ? "Access Granted" : "Single chapter licence"}</div>
                                    {isUnlocked(1) ? (
                                        <button className="btn-unlock" onClick={() => loadInlinePdf(1)}>Read Chapter</button>
                                    ) : (
                                        <button className="btn-unlock" onClick={() => openModal(1)}>Unlock Chapter {loadingPurchase && purchaseTarget === 1 ? '...' : ''}</button>
                                    )}
                                    <button className="btn-unlock-outline" onClick={() => openModal('full')}>Full Report — </button>
                                </div>
                            </div>
                        </>
                    )}
                        </div>
                    </div>

                    {/* CH 2 */}
                    <div className="chapter-block" id="ch-2">
                        <div className={`chapter-head ${openChapterId === 'ch-2' ? 'open' : ''}`} onClick={() => toggleChapter('ch-2', 2)}>
                            <div className="ch-num">02</div>
                            <div className="ch-head-content">
                                <div className="ch-title">Active Clinical Trial Landscape</div>
                                <div className="ch-hook">260+ trials — tiered by what actually matters to a BD or investment decision</div>
                            </div>
                            <div className="ch-price"><span>or included in full</span></div>
                            <div className="ch-toggle">+</div>
                        </div>
                        <div className={`chapter-body ${openChapterId === 'ch-2' ? 'open' : ''}`}>
                            {pdfUrls[2] || loadingPdf[2] ? (
                                <div style={{ padding: '20px' }}>
                                    {loadingPdf[2] ? (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--mist)', fontStyle: 'italic' }}>Loading secure PDF...</div>
                                    ) : pdfUrls[2] ? (
                                        <iframe src={pdfUrls[2]} style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px', backgroundColor: 'white' }} title="Chapter 2 PDF" />
                                    ) : (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--lock-red)' }}>Failed to load PDF. <button onClick={() => loadInlinePdf(2)} style={{ textDecoration: 'underline', background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}>Retry</button></div>
                                    )}
                                </div>
                            ) : (
                                <>
                            <div className="preview-zone">
                                <div className="preview-label">Free preview — key findings</div>
                                <div className="preview-bullets">
                                    <div className="pb"><div className="pb-dot"></div><div><strong>Tier A — three programmes with imminent data:</strong> BMS-986490 (NCT06730750, Phase 2a with ramucirumab, CRC), IBI3020 (NCT06963281, Chinese-origin dual-payload ADC), NILK-2301 (NCT06663839). Each has a meaningfully different linker and patient selection approach from tusamitamab</div></div>
                                    <div className="pb"><div className="pb-dot"></div><div><strong>The outlier with highest near-term commercial probability:</strong> SGM-101 surgical fluorescence imaging agent for CRC margin detection — bypasses systemic shedding sink, separate regulatory pathway, Phase 3 data expected 2026–26. Underrepresented in standard competitive databases due to modality categorisation</div></div>
                                    <div className="pb"><div className="pb-dot"></div><div><strong>Sponsor commitment divergence:</strong> Chinese biotechs (Innovent, Henlius) are advancing capital; Western large pharma has retreated. This geographic divergence is a licensing arbitrage signal, not a biology signal</div></div>
                                </div>
                            </div>
                            <div className="paywall-zone">
                                <div className="pw-left">
                                    <div className="pw-lock">{isUnlocked(2) ? "Content Unlocked" : "Full content locked"}</div>
                                    <div className="pw-hidden">
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                    </div>
                                    <div style={{ fontSize: '11px', color: 'var(--steel)', marginTop: '10px' }}>Full chapter includes: complete Tier A/B/C trial triage with readout timelines · cross-trial patient selection heterogeneity analysis · kinetic energy scoring by programme · sponsor commitment signal methodology · CAR-T and vaccine programme assessment · full NCT reference index (in Appendix)</div>
                                </div>
                                <div className="pw-right">
                                    <div className="pw-price"></div>
                                    <div className="pw-sublabel">{isUnlocked(2) ? "Access Granted" : "Single chapter licence"}</div>
                                    {isUnlocked(2) ? (
                                        <button className="btn-unlock" onClick={() => loadInlinePdf(2)}>Read Chapter</button>
                                    ) : (
                                        <button className="btn-unlock" onClick={() => openModal(2)}>Unlock Chapter {loadingPurchase && purchaseTarget === 2 ? '...' : ''}</button>
                                    )}
                                    <button className="btn-unlock-outline" onClick={() => openModal('full')}>Full Report — </button>
                                </div>
                            </div>
                        </>
                    )}
                        </div>
                    </div>

                    {/* CH 3 */}
                    <div className="chapter-block" id="ch-3">
                        <div className={`chapter-head ${openChapterId === 'ch-3' ? 'open' : ''}`} onClick={() => toggleChapter('ch-3', 3)}>
                            <div className="ch-num">03</div>
                            <div className="ch-head-content">
                                <div className="ch-title">Programme Failure Attribution</div>
                                <div className="ch-hook">A diagnostic, not a graveyard — every terminated programme assigned to one of four root causes</div>
                            </div>
                            <div className="ch-price"><span>or included in full</span></div>
                            <div className="ch-toggle">+</div>
                        </div>
                        <div className={`chapter-body ${openChapterId === 'ch-3' ? 'open' : ''}`}>
                            {pdfUrls[3] || loadingPdf[3] ? (
                                <div style={{ padding: '20px' }}>
                                    {loadingPdf[3] ? (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--mist)', fontStyle: 'italic' }}>Loading secure PDF...</div>
                                    ) : pdfUrls[3] ? (
                                        <iframe src={pdfUrls[3]} style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px', backgroundColor: 'white' }} title="Chapter 3 PDF" />
                                    ) : (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--lock-red)' }}>Failed to load PDF. <button onClick={() => loadInlinePdf(3)} style={{ textDecoration: 'underline', background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}>Retry</button></div>
                                    )}
                                </div>
                            ) : (
                                <>
                            <div className="preview-zone">
                                <div className="preview-label">Free preview — key findings</div>
                                <div className="preview-bullets">
                                    <div className="pb"><div className="pb-dot"></div><div><strong>Tusamitamab: two distinct failure causes, not one:</strong> the corneal DLT (keratopathy in 25% of Phase 3 patients, dose-limiting at 120 mg/m²) is a DM4 maytansinoid payload className effect — Cause II, modality-intrinsic. The Phase 3 efficacy failure is Cause III, trial design — no serum CEA stratification, PFS primary endpoint in a population where OS trend was positive</div></div>
                                    <div className="pb"><div className="pb-dot"></div><div><strong>Roche's full CEA portfolio exit (cibisatamab, cergutuzumab, CEA-IL2v) is Cause IV — strategic:</strong> the termination language in public filings does not cite biology failure. The CRS events in cibisatamab are Cause II — T-cell redirector format against a target with normal tissue expression in GI epithelium</div></div>
                                    <div className="pb"><div className="pb-dot"></div><div><strong>Cross-cutting finding:</strong> every programme that survived longest shared one feature — either biomarker-selected enrolment or a surgical/diagnostic application that bypasses systemic exposure entirely</div></div>
                                </div>
                            </div>
                            <div className="paywall-zone">
                                <div className="pw-left">
                                    <div className="pw-lock">{isUnlocked(3) ? "Content Unlocked" : "Full content locked"}</div>
                                    <div className="pw-hidden">
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                    </div>
                                    <div style={{ fontSize: '11px', color: 'var(--steel)', marginTop: '10px' }}>Full chapter includes: complete four-cause taxonomy with scoring criteria · every major terminated programme classNameified with evidence · labetuzumab govitecan SN-38 bystander analysis · MEDI-565 BiTE immunogenicity dissection · NCI TCR-engineered PBL colitis case · full attribution table (30 programmes)</div>
                                </div>
                                <div className="pw-right">
                                    <div className="pw-price"></div>
                                    <div className="pw-sublabel">{isUnlocked(3) ? "Access Granted" : "Single chapter licence"}</div>
                                    {isUnlocked(3) ? (
                                        <button className="btn-unlock" onClick={() => loadInlinePdf(3)}>Read Chapter</button>
                                    ) : (
                                        <button className="btn-unlock" onClick={() => openModal(3)}>Unlock Chapter {loadingPurchase && purchaseTarget === 3 ? '...' : ''}</button>
                                    )}
                                    <button className="btn-unlock-outline" onClick={() => openModal('full')}>Full Report — </button>
                                </div>
                            </div>
                        </>
                    )}
                        </div>
                    </div>

                    {/* CH 4 */}
                    <div className="chapter-block" id="ch-4">
                        <div className={`chapter-head ${openChapterId === 'ch-4' ? 'open' : ''}`} onClick={() => toggleChapter('ch-4', 4)}>
                            <div className="ch-num">04</div>
                            <div className="ch-head-content">
                                <div className="ch-title">Patent Landscape</div>
                                <div className="ch-hook">Where entry is blocked, where it is open, and where the real barriers now concentrate</div>
                            </div>
                            <div className="ch-price"><span>or included in full</span></div>
                            <div className="ch-toggle">+</div>
                        </div>
                        <div className={`chapter-body ${openChapterId === 'ch-4' ? 'open' : ''}`}>
                            {pdfUrls[4] || loadingPdf[4] ? (
                                <div style={{ padding: '20px' }}>
                                    {loadingPdf[4] ? (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--mist)', fontStyle: 'italic' }}>Loading secure PDF...</div>
                                    ) : pdfUrls[4] ? (
                                        <iframe src={pdfUrls[4]} style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px', backgroundColor: 'white' }} title="Chapter 4 PDF" />
                                    ) : (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--lock-red)' }}>Failed to load PDF. <button onClick={() => loadInlinePdf(4)} style={{ textDecoration: 'underline', background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}>Retry</button></div>
                                    )}
                                </div>
                            ) : (
                                <>
                            <div className="preview-zone">
                                <div className="preview-label">Free preview — selected signals</div>
                                <div className="preview-bullets">
                                    <div className="pb"><div className="pb-dot"></div><div><strong>The antibody is commoditised:</strong> A1-B1 and A2-B2 IgV-loop space is densely claimed. The A3-B3 space — where tusamitamab binds — now has a publicly deposited cryo-EM structure (PDB 8BW0) enabling rational design of adjacent-epitope antibodies by any competitor</div></div>
                                    <div className="pb"><div className="pb-dot"></div><div><strong>N-terminal domain remains relatively open:</strong> limited assignee concentration, NCI public domain contributions available as FTO starting points — specific sequences and method-of-use claims identified in full chapter</div></div>
                                </div>
                            </div>
                            <div className="paywall-zone">
                                <div className="pw-left">
                                    <div className="pw-lock">{isUnlocked(4) ? "Content Unlocked" : "Full content locked"}</div>
                                    <div className="pw-hidden">
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                    </div>
                                    <div style={{ fontSize: '11px', color: 'var(--steel)', marginTop: '10px' }}>Full chapter: complete domain-level assignee map · Synaffix/BI $1.3B linker deal analysis · biomarker and CDx IP layer · NCI FTO pathways · white space identification by domain and modality · strategic entry pathway for new entrant</div>
                                </div>
                                <div className="pw-right">
                                    <div className="pw-price"></div>
                                    <div className="pw-sublabel">{isUnlocked(4) ? "Access Granted" : "Single chapter licence"}</div>
                                    {isUnlocked(4) ? (
                                        <button className="btn-unlock" onClick={() => loadInlinePdf(4)}>Read Chapter</button>
                                    ) : (
                                        <button className="btn-unlock" onClick={() => openModal(4)}>Unlock Chapter {loadingPurchase && purchaseTarget === 4 ? '...' : ''}</button>
                                    )}
                                    <button className="btn-unlock-outline" onClick={() => openModal('full')}>Full Report — </button>
                                </div>
                            </div>
                        </>
                    )}
                        </div>
                    </div>

                    {/* CH 5 */}
                    <div className="chapter-block" id="ch-5">
                        <div className={`chapter-head ${openChapterId === 'ch-5' ? 'open' : ''}`} onClick={() => toggleChapter('ch-5', 5)}>
                            <div className="ch-num">05</div>
                            <div className="ch-head-content">
                                <div className="ch-title">Payload Landscape</div>
                                <div className="ch-hook">Why maytansinoid gave way to Topo1i — and what the data says about the next transition</div>
                            </div>
                            <div className="ch-price"><span>or included in full</span></div>
                            <div className="ch-toggle">+</div>
                        </div>
                        <div className={`chapter-body ${openChapterId === 'ch-5' ? 'open' : ''}`}>
                            {pdfUrls[5] || loadingPdf[5] ? (
                                <div style={{ padding: '20px' }}>
                                    {loadingPdf[5] ? (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--mist)', fontStyle: 'italic' }}>Loading secure PDF...</div>
                                    ) : pdfUrls[5] ? (
                                        <iframe src={pdfUrls[5]} style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px', backgroundColor: 'white' }} title="Chapter 5 PDF" />
                                    ) : (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--lock-red)' }}>Failed to load PDF. <button onClick={() => loadInlinePdf(5)} style={{ textDecoration: 'underline', background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}>Retry</button></div>
                                    )}
                                </div>
                            ) : (
                                <>
                            <div className="preview-zone">
                                <div className="preview-label">Free preview — selected signals</div>
                                <div className="preview-bullets">
                                    <div className="pb"><div className="pb-dot"></div><div><strong>DM4 corneal toxicity is a className effect, not a CEACAM5 effect:</strong> identical keratopathy/keratitis profile documented in mirvetuximab soravtansine (FOLR1-DM4) and trastuzumab emtansine (HER2-DM1). Corneal epithelial cells take up maytansinoid ADCs via non-specific endocytosis independent of target expression</div></div>
                                    <div className="pb"><div className="pb-dot"></div><div><strong>Topo1i bystander killing is mechanistically superior for CEACAM5:</strong> heterogeneous expression in CRC and NSCLC means not every tumour cell expresses CEACAM5. DXd and exatecan derivatives with larger bystander killing radius compensate — DM4's bystander radius is insufficient for this target profile</div></div>
                                </div>
                            </div>
                            <div className="paywall-zone">
                                <div className="pw-left">
                                    <div className="pw-lock">{isUnlocked(5) ? "Content Unlocked" : "Full content locked"}</div>
                                    <div className="pw-hidden">
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                    </div>
                                    <div style={{ fontSize: '11px', color: 'var(--steel)', marginTop: '10px' }}>Full chapter: DXd vs. SN-38 vs. exatecan clinical comparison · patent landscape by payload className · dual-payload platform IP (IBI3020) · combination payload hypotheses with mechanistic rationale · payload selection framework for next-generation CEACAM5 ADC</div>
                                </div>
                                <div className="pw-right">
                                    <div className="pw-price"></div>
                                    <div className="pw-sublabel">{isUnlocked(5) ? "Access Granted" : "Single chapter licence"}</div>
                                    {isUnlocked(5) ? (
                                        <button className="btn-unlock" onClick={() => loadInlinePdf(5)}>Read Chapter</button>
                                    ) : (
                                        <button className="btn-unlock" onClick={() => openModal(5)}>Unlock Chapter {loadingPurchase && purchaseTarget === 5 ? '...' : ''}</button>
                                    )}
                                    <button className="btn-unlock-outline" onClick={() => openModal('full')}>Full Report — </button>
                                </div>
                            </div>
                        </>
                    )}
                        </div>
                    </div>

                    {/* CH 6 */}
                    <div className="chapter-block" id="ch-6">
                        <div className={`chapter-head ${openChapterId === 'ch-6' ? 'open' : ''}`} onClick={() => toggleChapter('ch-6', 6)}>
                            <div className="ch-num">06</div>
                            <div className="ch-head-content">
                                <div className="ch-title">Linker Landscape</div>
                                <div className="ch-hook">The linker is where this field will be won — the clinical evidence and the deal data agree</div>
                            </div>
                            <div className="ch-price"><span>or included in full</span></div>
                            <div className="ch-toggle">+</div>
                        </div>
                        <div className={`chapter-body ${openChapterId === 'ch-6' ? 'open' : ''}`}>
                            {pdfUrls[6] || loadingPdf[6] ? (
                                <div style={{ padding: '20px' }}>
                                    {loadingPdf[6] ? (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--mist)', fontStyle: 'italic' }}>Loading secure PDF...</div>
                                    ) : pdfUrls[6] ? (
                                        <iframe src={pdfUrls[6]} style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px', backgroundColor: 'white' }} title="Chapter 6 PDF" />
                                    ) : (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--lock-red)' }}>Failed to load PDF. <button onClick={() => loadInlinePdf(6)} style={{ textDecoration: 'underline', background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}>Retry</button></div>
                                    )}
                                </div>
                            ) : (
                                <>
                            <div className="preview-zone">
                                <div className="preview-label">Free preview — selected signals</div>
                                <div className="preview-bullets">
                                    <div className="pb"><div className="pb-dot"></div><div><strong>Tusamitamab's SPDB linker is cleavable — but at the wrong site:</strong> lysine conjugation produces DAR heterogeneity (DAR 3.8 average, wide distribution). Site-specific conjugation at engineered cysteines or glycan anchors produces homogeneous DAR — directly improving the shedding sink survival ratio</div></div>
                                    <div className="pb"><div className="pb-dot"></div><div><strong>The $1.3B signal:</strong> Boehringer Ingelheim acquired Synaffix specifically for glycan-anchor site-specific conjugation — not for an antibody, not for a target. The linker platform itself commanded the deal value. This is the most important pricing signal in CEACAM5-adjacent IP in 2024</div></div>
                                </div>
                            </div>
                            <div className="paywall-zone">
                                <div className="pw-left">
                                    <div className="pw-lock">{isUnlocked(6) ? "Content Unlocked" : "Full content locked"}</div>
                                    <div className="pw-hidden">
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                    </div>
                                    <div style={{ fontSize: '11px', color: 'var(--steel)', marginTop: '10px' }}>Full chapter: shedding sink PK competition modelling · plasma half-life data across all CEACAM5 ADC programmes · site-specific conjugation IP landscape · DAR optimisation for high-shedding targets · white space in linker IP · patient selection solution derived from linker analysis</div>
                                </div>
                                <div className="pw-right">
                                    <div className="pw-price"></div>
                                    <div className="pw-sublabel">{isUnlocked(6) ? "Access Granted" : "Single chapter licence"}</div>
                                    {isUnlocked(6) ? (
                                        <button className="btn-unlock" onClick={() => loadInlinePdf(6)}>Read Chapter</button>
                                    ) : (
                                        <button className="btn-unlock" onClick={() => openModal(6)}>Unlock Chapter {loadingPurchase && purchaseTarget === 6 ? '...' : ''}</button>
                                    )}
                                    <button className="btn-unlock-outline" onClick={() => openModal('full')}>Full Report — </button>
                                </div>
                            </div>
                        </>
                    )}
                        </div>
                    </div>

                    {/* CH 7 */}
                    <div className="chapter-block" id="ch-7">
                        <div className={`chapter-head ${openChapterId === 'ch-7' ? 'open' : ''}`} onClick={() => toggleChapter('ch-7', 7)}>
                            <div className="ch-num">07</div>
                            <div className="ch-head-content">
                                <div className="ch-title">Differentiation for Long-Term Dominance</div>
                                <div className="ch-hook">The three-variable framework — and the population sizing that determines the commercial ceiling</div>
                            </div>
                            <div className="ch-price"><span>or included in full</span></div>
                            <div className="ch-toggle">+</div>
                        </div>
                        <div className={`chapter-body ${openChapterId === 'ch-7' ? 'open' : ''}`}>
                            {pdfUrls[7] || loadingPdf[7] ? (
                                <div style={{ padding: '20px' }}>
                                    {loadingPdf[7] ? (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--mist)', fontStyle: 'italic' }}>Loading secure PDF...</div>
                                    ) : pdfUrls[7] ? (
                                        <iframe src={pdfUrls[7]} style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px', backgroundColor: 'white' }} title="Chapter 7 PDF" />
                                    ) : (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--lock-red)' }}>Failed to load PDF. <button onClick={() => loadInlinePdf(7)} style={{ textDecoration: 'underline', background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}>Retry</button></div>
                                    )}
                                </div>
                            ) : (
                                <>
                            <div className="preview-zone">
                                <div className="preview-label">Free preview — selected signals</div>
                                <div className="preview-bullets">
                                    <div className="pb"><div className="pb-dot"></div><div><strong>All three errors must be corrected simultaneously:</strong> a programme with Topo1i payload but no serum CEA stratification repeats the patient selection error. A programme with site-specific conjugation but A3-B3 epitope targeting remains vulnerable to shed ectodomain competition. Sequential optimisation is insufficient</div></div>
                                    <div className="pb"><div className="pb-dot"></div><div><strong>SGM-101 is the underappreciated exception:</strong> surgical fluorescence guidance for CRC margin detection bypasses every systemic problem. Highest near-term commercial probability in the field. Distinct licensing model from ADC programmes — closer to medical device than oncology drug</div></div>
                                </div>
                            </div>
                            <div className="paywall-zone">
                                <div className="pw-left">
                                    <div className="pw-lock">{isUnlocked(7) ? "Content Unlocked" : "Full content locked"}</div>
                                    <div className="pw-hidden">
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                    </div>
                                    <div style={{ fontSize: '11px', color: 'var(--steel)', marginTop: '10px' }}>Full chapter: dual-criterion patient population sizing (IHC + serum CEA) in CRC, gastric, NSCLC · commercial ceiling by indication · four-scenario risk matrix with probability weights · decision triggers by scenario · combination strategy with mechanistic rationale</div>
                                </div>
                                <div className="pw-right">
                                    <div className="pw-price"></div>
                                    <div className="pw-sublabel">{isUnlocked(7) ? "Access Granted" : "Single chapter licence"}</div>
                                    {isUnlocked(7) ? (
                                        <button className="btn-unlock" onClick={() => loadInlinePdf(7)}>Read Chapter</button>
                                    ) : (
                                        <button className="btn-unlock" onClick={() => openModal(7)}>Unlock Chapter {loadingPurchase && purchaseTarget === 7 ? '...' : ''}</button>
                                    )}
                                    <button className="btn-unlock-outline" onClick={() => openModal('full')}>Full Report — </button>
                                </div>
                            </div>
                        </>
                    )}
                        </div>
                    </div>

                    {/* CH 8 */}
                    <div className="chapter-block" id="ch-8">
                        <div className={`chapter-head ${openChapterId === 'ch-8' ? 'open' : ''}`} onClick={() => toggleChapter('ch-8', 8)}>
                            <div className="ch-num">08</div>
                            <div className="ch-head-content">
                                <div className="ch-title">2026 Deal Structure Analysis</div>
                                <div className="ch-hook">Where capital is moving — and what a CEACAM5 ADC at Phase 1 POC would actually license for</div>
                            </div>
                            <div className="ch-price"><span>or included in full</span></div>
                            <div className="ch-toggle">+</div>
                        </div>
                        <div className={`chapter-body ${openChapterId === 'ch-8' ? 'open' : ''}`}>
                            {pdfUrls[8] || loadingPdf[8] ? (
                                <div style={{ padding: '20px' }}>
                                    {loadingPdf[8] ? (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--mist)', fontStyle: 'italic' }}>Loading secure PDF...</div>
                                    ) : pdfUrls[8] ? (
                                        <iframe src={pdfUrls[8]} style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px', backgroundColor: 'white' }} title="Chapter 8 PDF" />
                                    ) : (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--lock-red)' }}>Failed to load PDF. <button onClick={() => loadInlinePdf(8)} style={{ textDecoration: 'underline', background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}>Retry</button></div>
                                    )}
                                </div>
                            ) : (
                                <>
                            <div className="preview-zone">
                                <div className="preview-label">Free preview — selected signals</div>
                                <div className="preview-bullets">
                                    <div className="pb"><div className="pb-dot"></div><div><strong>Licensing overtook M&amp;A as primary value driver in 2026:</strong> $250B+ across 516 transactions. For CEACAM5, this means a Phase 1 POC asset is a licensing play, not an acquisition target — and the deal structure must account for the Sanofi Phase 3 failure discount in narrative positioning</div></div>
                                    <div className="pb"><div className="pb-dot"></div><div><strong>Chinese-origin out-licensing trajectory:</strong> Innovent/Takeda $11.4B deal structure is the template. Three active Chinese-origin CEACAM5 programmes (IBI3020, DNP002, NILK-2301) are all potential licensing candidates to Western pharma within 24–36 months of Phase 2 data</div></div>
                                </div>
                            </div>
                            <div className="paywall-zone">
                                <div className="pw-left">
                                    <div className="pw-lock">{isUnlocked(8) ? "Content Unlocked" : "Full content locked"}</div>
                                    <div className="pw-hidden">
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                        <div className="pw-line"></div>
                                    </div>
                                    <div style={{ fontSize: '11px', color: 'var(--steel)', marginTop: '10px' }}>Full chapter: complete 2024–25 ADC deal comparables table · upfront/milestone/royalty benchmarks by stage · geo-split norms · the Sanofi failure discount — how to position against it · surgical fluorescence licensing model · non-ADC deal angles</div>
                                </div>
                                <div className="pw-right">
                                    <div className="pw-price"></div>
                                    <div className="pw-sublabel">{isUnlocked(8) ? "Access Granted" : "Single chapter licence"}</div>
                                    {isUnlocked(8) ? (
                                        <button className="btn-unlock" onClick={() => loadInlinePdf(8)}>Read Chapter</button>
                                    ) : (
                                        <button className="btn-unlock" onClick={() => openModal(8)}>Unlock Chapter {loadingPurchase && purchaseTarget === 8 ? '...' : ''}</button>
                                    )}
                                    <button className="btn-unlock-outline" onClick={() => openModal('full')}>Full Report — </button>
                                </div>
                            </div>
                        </>
                    )}
                        </div>
                    </div>

                </section>

                {/* PRICING */}
                <section className="pricing-section" id="pricing">
                    <div className="section-label">Access options</div>
                    <h2 className="section-title">Licensing &amp; Pricing</h2>

                    <div className="pricing-grid">
                        <div className="price-card">
                            <div className="pc-tier">Chapter licence</div>
                            <div className="pc-price"><sub>per chapter</sub></div>
                            <div className="pc-desc">Access any individual chapter. Purchase only what your analysis requires. Chapters 1–3 are most relevant for target validation; 4–6 for platform and IP strategy; 7–8 for commercial and deal decisions.</div>
                            <div className="pc-items">
                                <div className="pc-item">Single chapter, unlimited internal use</div>
                                <div className="pc-item">No redistribution outside purchasing organisation</div>
                                <div className="pc-item">PDF + web access</div>
                                <div className="pc-item">Peer-reviewed citation list included</div>
                            </div>
                            <button className="btn-full btn-ghost" onClick={() => openModal('chapter')}>Select Chapter</button>
                        </div>

                        <div className="price-card featured">
                            <div className="featured-tag">Most Popular</div>
                            <div className="pc-tier">Full Report</div>
                            <div className="pc-price"> <sub>single org</sub></div>
                            <div className="pc-desc">Complete report including all 8 chapters, Appendix (30-programme reference table, deal comparables, patent assignee summary), and one 60-minute analyst briefing call.</div>
                            <div className="pc-items">
                                <div className="pc-item">All 8 chapters + full Appendix</div>
                                <div className="pc-item">60-minute Q&amp;A briefing with AmethIntel analysts</div>
                                <div className="pc-item">Unlimited internal use, one organisation</div>
                                <div className="pc-item">PDF + web access + printable version</div>
                                <div className="pc-item">6-month update notification</div>
                            </div>
                            <button className="btn-full btn-solid" onClick={() => openModal('full')}>Purchase Full Report</button>
                        </div>

                        <div className="price-card">
                            <div className="pc-tier">Enterprise + Bespoke</div>
                            <div className="pc-price"><sub>custom</sub></div>
                            <div className="pc-desc">Custom target analysis applying the AmethIntel methodology to a target of your choosing, or multi-report series subscription including microbiology intelligence series (2026–26).</div>
                            <div className="pc-items">
                                <div className="pc-item">Bespoke target analysis — your choice of target</div>
                                <div className="pc-item">Series subscription: oncology + microbiology</div>
                                <div className="pc-item">Quarterly briefing calls</div>
                                <div className="pc-item">Multi-user enterprise licence</div>
                                <div className="pc-item">Competitive Kinetic Energy Scorecard for custom target</div>
                            </div>
                            <button className="btn-full btn-ghost" onClick={() => openModal('enterprise')}>Enquire</button>
                        </div>
                    </div>
                </section>

            </div>{/* /content-wrap */}

            {/* FOOTER */}
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

            {/* MODAL */}
            <div className="modal-overlay" id="modal" onClick={closeModalOutside}>
                <div className="modal">
                    <div className="modal-title" id="modal-title">Unlock Access</div>
                    <div className="modal-sub" id="modal-sub">Complete your details and we will send an invoice and access link within one business day.</div>
                    <div className="modal-field">
                        <div className="modal-label">Full name</div>
                        <input className="modal-input" type="text" placeholder="Dr. Jane Smith" />
                    </div>
                    <div className="modal-field">
                        <div className="modal-label">Organisation</div>
                        <input className="modal-input" type="text" placeholder="Pharma Co. / Fund name" />
                    </div>
                    <div className="modal-field">
                        <div className="modal-label">Business email</div>
                        <input className="modal-input" type="email" placeholder="jane@organisation.com" />
                    </div>
                    <div className="modal-field">
                        <div className="modal-label">Role</div>
                        <input className="modal-input" type="text" placeholder="VP Business Development / R&D Director" />
                    </div>
                    <div className="modal-price-row">
                        <div className="modal-price-label" id="modal-price-label">Amount</div>
                        <div className="modal-price-val" id="modal-price"></div>
                    </div>
                    <div className="modal-actions">
                        <button className="btn-modal-close" onClick={closeModal}>Cancel</button>
                        <button className="btn-modal-pay" onClick={submitRequest}>Request Invoice &amp; Access</button>
                    </div>
                    <div className="modal-note">No payment is processed here. You will receive an invoice by email within one business day. Access is granted on payment confirmation.</div>
                </div>
            </div>

        </>
    );
};

export default NewCeacam5Report;