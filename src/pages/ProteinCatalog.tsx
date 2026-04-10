import { Link } from 'react-router-dom';

const proteins = [
  { id: 'her2', name: 'HER2 (ERBB2)', category: 'Oncology', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Overexpression plays a role in breast cancer.', marketCap: '$14.2B', trials: 248 },
  { id: 'pdl1', name: 'PD-L1 (CD274)', category: 'Immunology', description: 'Lorem ipsum dolor sit amet, key immune checkpoint receptor in cancer immunotherapy.', marketCap: '$22.8B', trials: 412 },
  { id: 'vegfa', name: 'VEGF-A', category: 'Oncology', description: 'Lorem ipsum dolor sit amet, vascular endothelial growth factor in angiogenesis and tumor growth.', marketCap: '$8.6B', trials: 186 },
  { id: 'tnfa', name: 'TNF-alpha', category: 'Immunology', description: 'Lorem ipsum dolor sit amet, pro-inflammatory cytokine central to autoimmune disease pathways.', marketCap: '$41.3B', trials: 324 },
  { id: 'brca1', name: 'BRCA1', category: 'Oncology', description: 'Lorem ipsum dolor sit amet, tumor suppressor gene critical in hereditary breast and ovarian cancers.', marketCap: '$5.1B', trials: 97 },
  { id: 'egfr', name: 'EGFR', category: 'Oncology', description: 'Lorem ipsum dolor sit amet, epidermal growth factor receptor involved in non-small cell lung cancer.', marketCap: '$18.4B', trials: 356 },
  { id: 'jak2', name: 'JAK2', category: 'Immunology', description: 'Lorem ipsum dolor sit amet, Janus kinase involved in myeloproliferative neoplasm signaling.', marketCap: '$6.7B', trials: 142 },
  { id: 'braf', name: 'BRAF (V600E)', category: 'Oncology', description: 'Lorem ipsum dolor sit amet, serine/threonine kinase mutated in melanoma and colorectal cancers.', marketCap: '$9.2B', trials: 203 },
  { id: 'gba', name: 'GBA', category: 'Neurology', description: 'Lorem ipsum dolor sit amet, glucocerebrosidase enzyme linked to Parkinson disease pathology.', marketCap: '$3.4B', trials: 68 },
  { id: 'pcsk9', name: 'PCSK9', category: 'Cardiology', description: 'Lorem ipsum dolor sit amet, proprotein convertase crucial in LDL cholesterol metabolism.', marketCap: '$11.9B', trials: 178 },
  { id: 'il6', name: 'IL-6', category: 'Immunology', description: 'Lorem ipsum dolor sit amet, interleukin-6 cytokine implicated in chronic inflammatory conditions.', marketCap: '$7.8B', trials: 215 },
  { id: 'abl1', name: 'BCR-ABL1', category: 'Oncology', description: 'Lorem ipsum dolor sit amet, fusion protein driver of chronic myeloid leukemia progression.', marketCap: '$12.5B', trials: 289 },
];

const categories = ['All', 'Oncology', 'Immunology', 'Neurology', 'Cardiology'];

const categoryColors: Record<string, { bg: string; text: string }> = {
  Oncology: { bg: 'bg-tertiary-fixed', text: 'text-on-tertiary-fixed' },
  Immunology: { bg: 'bg-secondary-fixed', text: 'text-on-secondary-fixed' },
  Neurology: { bg: 'bg-primary-fixed', text: 'text-on-primary-fixed' },
  Cardiology: { bg: 'bg-error-container', text: 'text-on-error-container' },
};

const categoryIcons: Record<string, string> = {
  Oncology: 'biotech',
  Immunology: 'immunology',
  Neurology: 'neurology',
  Cardiology: 'cardiology',
};

import { useState } from 'react';

const ProteinCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = proteins.filter((p) => {
    const matchCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="flex pt-16 min-h-screen">
      {/* Main Content */}
      <main className="flex-1 mr-64 px-12 py-10 bg-surface">
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">Protein Intelligence</span>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-4">Protein Catalog</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Browse our comprehensive database of pharmaceutical protein targets with real-time clinical data.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-10 space-y-4">
          <div className="relative max-w-xl">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input
              type="text"
              placeholder="Search proteins by name, gene, or pathway..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-12 pr-4 bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
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
            const colors = categoryColors[protein.category] || { bg: 'bg-surface-container-high', text: 'text-on-surface' };
            return (
              <div key={protein.id} className="bg-surface-container-lowest p-6 rounded-xl biological-shadow transition-all hover:translate-y-[-4px] flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-headline text-lg font-bold text-on-surface">{protein.name}</h3>
                  <span className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest`}>
                    {protein.category}
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">{protein.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 bg-surface-container-low rounded-lg">
                    <div className="text-[10px] text-outline font-bold uppercase mb-1">Market Cap</div>
                    <div className="text-lg font-bold text-primary">{protein.marketCap}</div>
                  </div>
                  <div className="p-3 bg-surface-container-low rounded-lg">
                    <div className="text-[10px] text-outline font-bold uppercase mb-1">Active Trials</div>
                    <div className="text-lg font-bold text-primary">{protein.trials}</div>
                  </div>
                </div>
                <Link to="/dashboard" className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  View Analysis <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            );
          })}
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="fixed right-0 top-16 bottom-0 flex flex-col py-6 w-64 bg-slate-50 border-l border-slate-100 z-40 overflow-y-auto">
        <div className="px-6 mb-8">
          <span className="text-sm font-bold uppercase tracking-widest text-slate-500 font-headline">Protein Navigator</span>
          <p className="text-[10px] text-outline font-medium">Browse by Category</p>
        </div>
        <nav className="flex-1 space-y-1">
          {proteins.map((protein) => (
            <Link
              key={protein.id}
              to="/dashboard"
              className="flex items-center gap-3 px-6 py-3 text-slate-500 hover:bg-slate-200 font-['Inter'] text-sm font-medium transition-all"
            >
              <span className="material-symbols-outlined text-lg">{categoryIcons[protein.category] || 'science'}</span>
              <span className="flex-1 truncate">{protein.name}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto px-6 py-4">
          <div className="bg-blue-600 rounded-lg p-4 text-white">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Catalog Stats</p>
            <p className="text-xs font-medium mt-1">{proteins.length} proteins indexed across {categories.length - 1} categories.</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ProteinCatalog;
