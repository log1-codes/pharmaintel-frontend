import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/cecam5report.css"
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
      <div className="report-container">
        {/* HERO */}
        <section className="hero">
          <div className="content-wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="hero-eyebrow">A Ten Year Leadership is Designed, it is not a given.</div>
            <h1 className="hero-title">CEACAM5 : Study of Clinical Trials,<br /><em>Intellectual Property, and Diagnostics - Status and Opportunities</em></h1>
            <p className="hero-sub">A decision-grade intelligence review integrating clinical trial triage, failure attribution, patent landscape, payload and linker analysis, and 2026 deal structure benchmarks — structured for R&amp;D heads, BD leaders, and oncology investment teams.</p>



          </div>
        </section>

        <div className="content-wrap">

          {summariesData.filter(s => parseInt(s.num) === 0).map(summary => (
            <div className="chapter-block" key={summary.id} id={`sum-${summary.id}`} style={{ marginBottom: '40px' }}>
              <div className={`chapter-head ${openSummaryId === summary.id ? 'open' : ''}`} onClick={() => toggleSummary(summary.id)}>
                <div className="ch-num">{summary.num}</div>
                <div className="ch-head-content">
                  <div className="ch-title">{summary.title}</div>
                </div>
                {summaryUrls[summary.id] && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center' }}>
                    <a
                      href={summaryUrls[summary.id]}
                      download={`${summary.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`}
                      style={{
                        backgroundColor: 'var(--accent)',
                        color: 'white',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        textAlign: 'center'
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Download PDF
                    </a>
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(`/request-section?section=${encodeURIComponent(summary.title)}`); }}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'var(--accent)',
                        border: '1px solid var(--accent)',
                        padding: '3px 10px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      Download Full Section
                    </button>
                  </div>
                )}
                <div className="ch-toggle">+</div>
              </div>
              <div className={`chapter-body ${openSummaryId === summary.id ? 'open' : ''}`}>
                <div style={{ padding: '20px' }}>
                  {loadingSummary[summary.id] ? (
                    <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--mist)', fontStyle: 'italic' }}>Loading PDF...</div>
                  ) : summaryUrls[summary.id] ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      <iframe src={`${summaryUrls[summary.id]}#toolbar=0&navpanes=0&scrollbar=0`} style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px', backgroundColor: 'white' }} title={`Summary ${summary.num}`} />
                      <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <button
                          onClick={() => navigate(`/request-section?section=${encodeURIComponent(summary.title)}`)}
                          style={{ padding: '12px 24px', backgroundColor: 'var(--accent)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                        >
                          Request Full Section
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--lock-red)' }}>
                      Failed to load PDF or no PDF available.
                      <button onClick={() => loadSummaryPdf(summary.id)} style={{ marginLeft: '10px', textDecoration: 'underline', background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}>Retry</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* EXEC SUMMARY TEXT */}
          <section className="free-section" id="exec-summary">

            <div className="section-label">
              Executive Summary
            </div>

            <h2 className="section-title">
              CEACAM5 Therapeutic Landscape & Strategic Outlook
            </h2>

            <div className="full-exec-summary">

              <p>
                <strong>Planning for Sustained Leadership in CEACAM5-Targeted Therapies</strong>
              </p>
              <p>
                Two questions remained unanswered in years of supporting licensing, Business Development and investments –
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
                <li>Does the patent estate truly block fast followers?</li>
                <li>Are valuation models that assume a decade of uncontested market shares realistic?</li>
              </ul>
              <p>
                Retrospective review of oncology drugs including Gleevec, HER2/Neu, EGFR among the few shows that reaching the market first does not reliably secure long-term leadership — a pattern with direct consequences for how the patent estate needs to be viewed and how assets should be valued.
              </p>
              <p>
                AmethIntel answers these questions for assets in clinical development and proposes practical alternatives and actionable answers to enhance and lock valuations long term. Its Simultaneous Iterative Optimization (SIO™) methodology evaluates market-leadership variables alongside the scientific decisions shaping clinical development.
              </p>
              <p>
                CEACAM5 (Carcinoembryonic Antigen-Related Cell Adhesion Molecule 5; CEA; CD66e) field is very active with 11 phase transitions in past 12 months, programs backed by large pharma (EMD Serono/Merck KGaA, Pfizer, and Bristol Myers Squibb) and multiple competitors. The competitive landscape analysis requires scoring at least 44 total assets in order to predict and plan ten year leadership. These spread across multiple technology platforms - antibody-drug conjugate, bispecific, radioconjugate, CAR-Ts. At least six programs, some using other technology platforms remain strategically paused for opportunistic entry after regulatory clearances are resolved, and can potentially disrupt the field. In conclusion, the field is crowded.
              </p>
              <p>
                The crowding is further enhanced by the fact that patent estates are large, but do not provide sufficient barriers to entry to block new aspirants. Further new players can continue to enter the field. The Intellectual Property (IP) analysis is presented in Sections 6, 7 and 8 for antibodies, payloads and linkers. Each Section includes a set of 20 due diligence questions that can help in understanding the scope and realistic valuation of each patent estate.
              </p>
              <p>
                The question then becomes : If IP is permeable, what can take on the role of a competitive lever for leadership? As the programs are in clinical development, the potential of using trial designs as the competitive lever was explored. First, trends, approaches and gaps from a dataset of 187 CEACAM5 trials were mapped. Section 3 summarizes this and identifies the market segmentation strategies leaders are employing and new entrants are likely to employ.
              </p>
              <p>
                In order to form a strategy, Game Theoretic analysis, suited for long-term leadership in crowded competition and fragmented markets was employed. Analysis supports strategies for both leaders and fast followers are available; the real question for leadership then becomes the timing of applications of the strategies. Section 2 of the report is for strategy.
              </p>
              <p>
                The findings from strategic analyses were translated to clinical trial designs. Small but significant, highly practical changes can lay the foundation for long-term leadership. Sections 3 and 10 detail these for clinical trials and Standard of Care.
              </p>
              <p>
                Innovation in diagnostics evolves as the single most important variable, which can influence leadership. The case of HER2/neu is a strong endorsement of this, where the low and ultra-low screening diagnostics played a significant role in fast followers becoming current market leaders. CEACAM5 is different, being a marker, not an oncogene. Section 9 summarizes diagnostic innovations suitable for its market expansion.
              </p>
              <p>
                Assessment summarized in Sections 1 and 9 in combination with enrichment criteria analyzed in Section 3 indicate a significant change can be mediated by this strategy. The potential patient base addressed by trials can expand from present approx. 90,000 to 500,000 patients per year (Section 1 summarizes the assumptions behind the numbers; the analysis is directional rather than based on firm absolute numbers, like any market projection).
              </p>

              <h3 style={{ fontSize: '1.2rem', color: 'orange', marginTop: '24px', marginBottom: '12px' }}>Strategic Conclusions</h3>
              <p>Six observations emerge for planning -</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
                <li>CEACAM5 has reached an inflection point. Regulatory approval now appears increasingly plausible, shifting strategic attention from scientific feasibility to competitive positioning. The field is naturally poised for fragmented markets with leadership changing dynamically if allowed to evolve. In essence, leadership has to be planned — it is not a given.</li>
                <li>Epidemiology supports large market claims with at least 800,000 relevant cases annually in the USA alone. The opportunity is significantly different from about 60,000 new cases of HER2/neu or even 200,000 cases of KRAS. In CEACAM5, expression does not imply uniform treatability, reinforcing the idea that leadership will be the result of a plan executed during clinical development. Section 1 covers the nuances of biology and their implications.</li>
                <li>Current intellectual property provides meaningful protection but leaves substantial competitive white space. The number of competitors endorses this. Clinical development, diagnostics, and lifecycle strategy are therefore likely to determine a significant proportion of future market leadership.</li>
                <li>Clinical trial design can become the principal strategic lever. This may require minor modifications without disturbing the science or regulatory aspects.</li>
                <li>A substantial share of the potential patient population — by AmethIntel estimate, 80–85% — remains outside current development strategies. Expansion into this underserved population represents one of the largest opportunities for both first entrants and differentiated fast followers.</li>
                <li>Differentiation has shifted from target biology to enabling technologies and may move further to applications. Companion diagnostics, linker chemistry, payload innovation, and evidence-generation strategies may increasingly determine competitive advantage as therapeutic platforms converge.</li>
              </ul>

            </div>

          </section>

          {summariesData.filter(s => parseInt(s.num) === -1).map(summary => (
            <div className="chapter-block" key={summary.id} id={`sum-${summary.id}`} style={{ marginBottom: '40px', marginTop: '-20px' }}>
              <div className={`chapter-head ${openSummaryId === summary.id ? 'open' : ''}`} onClick={() => toggleSummary(summary.id)}>
                <div className="ch-num">{summary.num}</div>
                <div className="ch-head-content">
                  <div className="ch-title">{summary.title}</div>
                </div>
                {summaryUrls[summary.id] && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center' }}>
                    <a
                      href={summaryUrls[summary.id]}
                      download={`${summary.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`}
                      style={{
                        backgroundColor: 'var(--accent)',
                        color: 'white',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        textAlign: 'center'
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Download PDF
                    </a>
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(`/request-section?section=${encodeURIComponent(summary.title)}`); }}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'var(--accent)',
                        border: '1px solid var(--accent)',
                        padding: '3px 10px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      Download Full Section
                    </button>
                  </div>
                )}
                <div className="ch-toggle">+</div>
              </div>
              <div className={`chapter-body ${openSummaryId === summary.id ? 'open' : ''}`}>
                <div style={{ padding: '20px' }}>
                  {loadingSummary[summary.id] ? (
                    <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--mist)', fontStyle: 'italic' }}>Loading Preface PDF...</div>
                  ) : summaryUrls[summary.id] ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      <iframe src={`${summaryUrls[summary.id]}#toolbar=0&navpanes=0&scrollbar=0`} style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px', backgroundColor: 'white' }} title={`Summary ${summary.num}`} />
                      <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <button
                          onClick={() => navigate(`/request-section?section=${encodeURIComponent(summary.title)}`)}
                          style={{ padding: '12px 24px', backgroundColor: 'var(--accent)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                        >
                          Request Full Section
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--lock-red)' }}>
                      Failed to load PDF or no PDF available.
                      <button onClick={() => loadSummaryPdf(summary.id)} style={{ marginLeft: '10px', textDecoration: 'underline', background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}>Retry</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}


          <section className="chapters-section" id="chapters">
            <h2 style={{ color: "orange", fontSize: "14px", margin: "20px" }}>Section Summaries</h2>

            {summariesData.filter(s => parseInt(s.num) >= 1).length === 0 ? (
              <div style={{ color: 'var(--mist)', padding: '20px' }}>No report summaries available.</div>
            ) : (
              summariesData.filter(s => parseInt(s.num) >= 1).map((summary) => (
                <div className="chapter-block" key={summary.id} id={`sum-${summary.id}`}>
                  <div className={`chapter-head ${openSummaryId === summary.id ? 'open' : ''}`} onClick={() => toggleSummary(summary.id)}>
                    <div className="ch-num">{summary.num}</div>
                    <div className="ch-head-content">
                      <div className="ch-title">{summary.title}</div>
                    </div>
                    {summaryUrls[summary.id] && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center' }}>
                        <a
                          href={summaryUrls[summary.id]}
                          download={`${summary.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`}
                          style={{
                            backgroundColor: 'var(--accent)',
                            color: 'white',
                            padding: '4px 10px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            textAlign: 'center'
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Download PDF
                        </a>
                        <button
                          onClick={(e) => { e.stopPropagation(); navigate(`/request-section?section=${encodeURIComponent(summary.title)}`); }}
                          style={{
                            backgroundColor: 'transparent',
                            color: 'var(--accent)',
                            border: '1px solid var(--accent)',
                            padding: '3px 10px',
                            borderRadius: '4px',
                            fontSize: '11px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            textAlign: 'center'
                          }}
                        >
                          Download Full Section
                        </button>
                      </div>
                    )}
                    <div className="ch-toggle">+</div>
                  </div>
                  <div className={`chapter-body ${openSummaryId === summary.id ? 'open' : ''}`}>
                    <div style={{ padding: '20px' }}>
                      {loadingSummary[summary.id] ? (
                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--mist)', fontStyle: 'italic' }}>Loading summary PDF...</div>
                      ) : summaryUrls[summary.id] ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                          <iframe src={`${summaryUrls[summary.id]}#toolbar=0&navpanes=0&scrollbar=0`} style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px', backgroundColor: 'white' }} title={`Summary ${summary.num}`} />
                          <div style={{ textAlign: 'center', marginTop: '10px' }}>
                            <button
                              onClick={() => navigate(`/request-section?section=${encodeURIComponent(summary.title)}`)}
                              style={{ padding: '12px 24px', backgroundColor: 'var(--accent)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                            >
                              Request Full Section
                            </button>
                          </div>
                        </div>
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

              <a href="mailto:Akash@amethintel.com"
                style={{ display: 'block', color: 'white', marginBottom: '10px', textDecoration: 'none' }}>

                Akash@amethintel.com

              </a>

              <a href="mailto:Greg.schneider@amethintel.com"
                style={{ display: 'block', color: 'white', textDecoration: 'none' }}>

                Greg.schneider@amethintel.com

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
