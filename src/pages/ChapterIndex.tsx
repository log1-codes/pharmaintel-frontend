import { Link } from 'react-router-dom';
import ChapterFooter from '../components/ChapterFooter';

const ChapterIndex = () => {
  return (
    <div className="min-h-screen bg-offwhite text-slate-800 font-sans pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 pb-8 border-b border-amethyst/30">
          <p className="text-vermilion uppercase tracking-widest text-sm font-semibold mb-3">AmethIntel Intelligence Report</p>
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            CEACAM5: A Rejuvenated Opportunity
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl leading-relaxed">
            A comprehensive analysis of the biological architecture, therapeutic characteristics, and strategic implications of CEACAM5 targeted therapies.
          </p>
        </header>

        <main>
          <h2 className="text-2xl font-bold mb-8 text-slate-900 border-l-4 border-vermilion pl-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Table of Contents
          </h2>

          <div className="space-y-6">
            {/* Chapter 1 - Available */}
            <Link to="/chapter-1" className="group block p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-amethyst/50 hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-amethyst font-semibold tracking-wider text-sm uppercase mb-2 block">Chapter 1</span>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-vermilion transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    CEACAM5: A Rejuvenated Opportunity
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed max-w-2xl">
                    Biological architecture and therapeutic characteristics, historical constraints, and mechanisms overcoming them.
                  </p>
                </div>
                <div className="hidden sm:block">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-vermilion/10 text-vermilion group-hover:bg-vermilion group-hover:text-white transition-colors">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </Link>

            {/* Chapter 2 - Locked/Upcoming */}
            <div className="block p-8 bg-slate-50/50 rounded-xl border border-slate-200 opacity-75">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-slate-400 font-semibold tracking-wider text-sm uppercase mb-2 block">Chapter 2</span>
                  <h3 className="text-xl font-bold text-slate-700" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Clinical Trials & Efficacy Landscape
                  </h3>
                  <p className="mt-3 text-slate-500 leading-relaxed max-w-2xl">
                    Examining the clinical trials undertaken to date and the information available from them.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-200 px-3 py-1 rounded-full">
                    <i className="fas fa-lock mr-2"></i>
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

          </div>
        </main>

        <ChapterFooter />
      </div>
    </div>
  );
};

export default ChapterIndex;
