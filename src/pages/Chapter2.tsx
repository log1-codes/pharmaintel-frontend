import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useChapterPDF } from '../hooks/useChapterPDF';

export default function Chapter2() {
  const [userName, setUserName] = useState<string>('Guest');
  const { pdfUrl, loading, error } = useChapterPDF('chapter2');

  useEffect(() => {
    window.scrollTo(0, 0);
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const parsed = JSON.parse(userData);
        if (parsed && parsed.name) {
          setUserName(parsed.name);
        } else if (parsed && parsed.username) {
          setUserName(parsed.username);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-200 pt-32 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto mb-6 flex items-center justify-between font-sans text-sm">
        <Link 
          to="/ceacam5#chapters" 
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition"
        >
          <ArrowLeft size={16} />
          Back to Report
        </Link>
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          Licensed to: {userName}
        </span>
      </div>

      <div className="max-w-7xl mx-auto h-[82vh] rounded-2xl overflow-hidden border border-slate-800 bg-[#131924] shadow-2xl">
        {loading && (
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-400 text-sm">Loading chapter...</p>
          </div>
        )}
        {error && (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 px-8 text-center">
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 text-xl">✕</div>
            <p className="text-red-400 text-sm font-medium">{error}</p>
          </div>
        )}
        {pdfUrl && (
          <iframe 
            src={pdfUrl} 
            className="w-full h-full border-none"
            title="Chapter 2 PDF Reader"
          />
        )}
      </div>
    </div>
  );
}
