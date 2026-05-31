import { useState } from 'react';
import { Link } from 'react-router-dom';

const proteins = [
  { id: 'her2', name: 'HER2 (ERBB2)', category: 'Oncology', description: 'Overexpression plays a role in breast cancer.', marketCap: '$14.2B', trials: 248 },
  { id: 'pdl1', name: 'PD-L1 (CD274)', category: 'Immunology', description: 'Key immune checkpoint receptor in cancer immunotherapy.', marketCap: '$22.8B', trials: 412 },
  { id: 'vegfa', name: 'VEGF-A', category: 'Oncology', description: 'Vascular endothelial growth factor in angiogenesis and tumor growth.', marketCap: '$8.6B', trials: 186 },
  { id: 'tnfa', name: 'TNF-alpha', category: 'Immunology', description: 'Pro-inflammatory cytokine central to autoimmune disease pathways.', marketCap: '$41.3B', trials: 324 },
  { id: 'brca1', name: 'BRCA1', category: 'Oncology', description: 'Tumor suppressor gene critical in hereditary breast and ovarian cancers.', marketCap: '$5.1B', trials: 97 },
  { id: 'egfr', name: 'EGFR', category: 'Oncology', description: 'Epidermal growth factor receptor involved in non-small cell lung cancer.', marketCap: '$18.4B', trials: 356 },
  { id: 'jak2', name: 'JAK2', category: 'Immunology', description: 'Janus kinase involved in myeloproliferative neoplasm signaling.', marketCap: '$6.7B', trials: 142 },
  { id: 'braf', name: 'BRAF (V600E)', category: 'Oncology', description: 'Serine/threonine kinase mutated in melanoma and colorectal cancers.', marketCap: '$9.2B', trials: 203 },
  { id: 'gba', name: 'GBA', category: 'Neurology', description: 'Glucocerebrosidase enzyme linked to Parkinson disease pathology.', marketCap: '$3.4B', trials: 68 },
  { id: 'pcsk9', name: 'PCSK9', category: 'Cardiology', description: 'Proprotein convertase crucial in LDL cholesterol metabolism.', marketCap: '$11.9B', trials: 178 },
  { id: 'il6', name: 'IL-6', category: 'Immunology', description: 'Interleukin-6 cytokine implicated in chronic inflammatory conditions.', marketCap: '$7.8B', trials: 215 },
  { id: 'abl1', name: 'BCR-ABL1', category: 'Oncology', description: 'Fusion protein driver of chronic myeloid leukemia progression.', marketCap: '$12.5B', trials: 289 },
];

const categories = ['All', 'Oncology', 'Immunology', 'Neurology', 'Cardiology'];

const categoryColors: Record<string, { bg: string; text: string }> = {
  Oncology: { bg: 'bg-purple-900/30 border border-purple-500/30', text: 'text-purple-300' },
  Immunology: { bg: 'bg-pink-900/30 border border-pink-500/30', text: 'text-pink-300' },
  Neurology: { bg: 'bg-blue-900/30 border border-blue-500/30', text: 'text-blue-300' },
  Cardiology: { bg: 'bg-red-900/30 border border-red-500/30', text: 'text-red-300' },
};

const categoryIcons: Record<string, string> = {
  Oncology: 'biotech',
  Immunology: 'immunology',
  Neurology: 'neurology',
  Cardiology: 'cardiology',
};

const ProteinCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = proteins.filter((p) => {
    const matchCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="flex pt-24 min-h-screen bg-slate-950 font-['Inter']">
      {/* Main Content */}
      <main className="flex-1 mr-72 px-12 py-10">
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-2 block">Protein Intelligence</span>
          <h1 className="text-4xl font-semibold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Protein Catalog</h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Browse our comprehensive database of pharmaceutical protein targets with real-time clinical data and market intelligence.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-10 space-y-6">
          <div className="relative max-w-xl">
            <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"></i>
            <input
              type="text"
              placeholder="Search proteins by name, gene, or pathway..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-slate-900 border border-white/10 rounded-3xl focus:border-purple-500 focus:outline-none transition-all placeholder:text-slate-500 text-white"
            />
          </div>
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white border-transparent'
                    : 'bg-slate-900 text-slate-400 border border-white/10 hover:border-purple-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Protein Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((protein) => {
            const colors = categoryColors[protein.category] || { bg: 'bg-slate-800 border border-white/10', text: 'text-slate-300' };
            return (
              <div key={protein.id} className="group bg-slate-900 border border-white/10 p-7 rounded-3xl transition duration-300 hover:border-purple-500 hover:-translate-y-2 flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {protein.name}
                  </h3>
                  <span className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest`}>
                    {protein.category}
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">{protein.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-1.5 tracking-widest">Market Cap</div>
                    <div className="text-lg font-semibold text-purple-300">{protein.marketCap}</div>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-1.5 tracking-widest">Active Trials</div>
                    <div className="text-lg font-semibold text-pink-300">{protein.trials}</div>
                  </div>
                </div>
                <Link to="/dashboard" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-semibold text-xs uppercase tracking-widest transition-all hover:bg-purple-500/20 hover:border-purple-500 mt-auto justify-center">
                  View Analysis <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
            );
          })}
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="fixed right-0 top-20 bottom-0 flex flex-col py-8 w-72 bg-slate-950/80 backdrop-blur-md border-l border-white/10 z-40 overflow-y-auto">
        <div className="px-8 mb-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-white mb-1 block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Protein Navigator</span>
          <p className="text-xs text-slate-500">Quick access directory</p>
        </div>
        <nav className="flex-1 space-y-1 px-4">
          {proteins.map((protein) => (
            <Link
              key={protein.id}
              to="/dashboard"
              className="flex items-center gap-4 px-4 py-3 rounded-2xl text-slate-400 hover:bg-white/5 hover:text-white transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                <span className="material-symbols-outlined text-[16px]">{categoryIcons[protein.category] || 'science'}</span>
              </div>
              <span className="flex-1 truncate text-sm font-medium">{protein.name}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto px-6 py-4">
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20 rounded-3xl p-5 text-white">
            <p className="text-[10px] font-bold uppercase tracking-widest text-purple-300 mb-1">Catalog Stats</p>
            <p className="text-xs text-slate-300 leading-relaxed"><strong className="text-white">{proteins.length}</strong> proteins indexed across <strong className="text-white">{categories.length - 1}</strong> strategic categories.</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ProteinCatalog;
