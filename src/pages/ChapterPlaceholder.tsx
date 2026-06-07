import { Link, useParams } from 'react-router-dom';
import ChapterFooter from '../components/ChapterFooter';

const ChapterPlaceholder = () => {
  const { chapterId } = useParams();

  return (
    <div className="min-h-screen bg-offwhite text-slate-800 font-serif pt-32 pb-16 px-6 relative">
      <div className="max-w-4xl mx-auto mb-12 flex items-center justify-between font-sans text-sm">
        <Link to="/ceacam5#chapters" className="text-amethyst hover:text-vermilion transition-colors flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> Back to Report
        </Link>
        <span className="text-slate-400  tracking-widest font-semibold capitalize">
          {chapterId?.replace('-', ' ')}
        </span>
      </div>

      <header className="max-w-4xl mx-auto mb-16 pb-12 border-b border-amethyst/30 text-center">
        <p className="text-vermilion uppercase tracking-[0.2em] text-sm font-semibold mb-4 font-sans">AmethIntel Intelligence Report</p>
        <h1 className="text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Content Locked / Drafting
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-sans leading-relaxed">
          This chapter is currently being drafted or requires an upgraded subscription tier to view. Please check back later.
        </p>
      </header>

      <div className="max-w-4xl mx-auto flex items-center justify-center py-20">
        <div className="w-16 h-16 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center">
          <i className="fas fa-lock text-2xl"></i>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <ChapterFooter />
      </div>
    </div>
  );
};

export default ChapterPlaceholder;
