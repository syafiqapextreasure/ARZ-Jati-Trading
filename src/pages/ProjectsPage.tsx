import React, { useState, useMemo } from 'react';
import { PROJECTS, ProjectItem } from '../data/projects';
import {
  LayoutGrid,
  List,
  Search,
  MapPin,
  ExternalLink,
  Eye,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
  onOpenLightbox: (images: string[], index: number, title: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Semua Projek' },
    { id: 'pembinaan', label: 'Pembinaan Bangunan' },
    { id: 'pengubahsuaian', label: 'Pengubahsuaian' },
    { id: 'pengecatan', label: 'Pengecatan & Epoxy' },
    { id: 'lantai', label: 'Kemasan Jubin & Lantai' },
    { id: 'landskap', label: 'Landskap & Tapak' },
    { id: 'servis', label: 'Servis & Penyelenggaraan' },
    { id: 'reka-bentuk', label: 'Konsep Reka Bentuk' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      const matchesCategory = activeCategory === 'all' || proj.category === activeCategory;
      const matchesSearch =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.shortSummary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full text-neutral-100 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Header Hero */}
        <section className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400">
            <span className="w-6 h-[2px] bg-neutral-400 inline-block" />
            <span>PORTFOLIO PROJEK</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Rekod Projek & Portfolio Kerja ARZ Jati Trading
          </h1>
          <p className="text-xl sm:text-[22px] text-neutral-300 leading-relaxed max-w-3xl">
            Koleksi kerja pembinaan rumah, kerja cat korporat, lantai epoxy, gelanggang sukan dan kerja sivil.
          </p>
        </section>

        {/* Filter Bar & Controls */}
        <section className="p-6 rounded-2xl pearl-glass border border-white/15 space-y-6">
          
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari mengikut tajuk, lokasi cth. Tunjung, Pasir Mas..."
                className="w-full min-h-[48px] pl-11 pr-4 rounded-xl bg-black/60 border border-white/20 text-white placeholder-neutral-500 focus-visible:ring-2 focus-visible:ring-white text-base"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="text-sm text-neutral-400 mr-2 hidden sm:block">Paparan:</div>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`min-h-[48px] px-4 rounded-xl flex items-center gap-2 text-sm font-semibold transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-neutral-950'
                    : 'pearl-glass text-neutral-300 hover:text-white'
                }`}
                aria-label="Tukar ke paparan Grid Kad"
              >
                <LayoutGrid className="w-4 h-4" />
                <span>Kad</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`min-h-[48px] px-4 rounded-xl flex items-center gap-2 text-sm font-semibold transition-colors cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-white text-neutral-950'
                    : 'pearl-glass text-neutral-300 hover:text-white'
                }`}
                aria-label="Tukar ke paparan Senarai Terperinci"
              >
                <List className="w-4 h-4" />
                <span>Senarai</span>
              </button>
            </div>

          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-white/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`min-h-[44px] px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-neutral-950 shadow-md'
                    : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </section>

        {/* Results Count & Filter Notice */}
        <div className="flex items-center justify-between text-base text-neutral-400 px-1">
          <div>
            Menunjukkan <span className="font-semibold text-white">{filteredProjects.length}</span> projek
            {activeCategory !== 'all' && ` dalam kategori ${categories.find((c) => c.id === activeCategory)?.label}`}
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-white hover:underline text-sm cursor-pointer"
            >
              Kosongkan carian
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="p-16 rounded-3xl pearl-glass border border-white/15 text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Tiada Projek Dijumpai</h3>
            <p className="text-neutral-400 text-lg max-w-md mx-auto">
              Tiada rekod projek yang memadankan carian atau kategori yang dipilih.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="min-h-[48px] px-6 py-2.5 rounded-xl bg-white text-neutral-950 font-bold hover:bg-neutral-200 transition-colors"
            >
              Set Semula Penapis
            </button>
          </div>
        )}

        {/* ======================================================== */}
        {/* GRID VIEW */}
        {/* ======================================================== */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="group rounded-3xl pearl-glass-card overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Image with Direct Lightbox Trigger */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                    <img
                      src={proj.coverImage}
                      alt={proj.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Render Concept Label per brief */}
                    {proj.isRenderConcept && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-neutral-900/90 text-neutral-200 text-xs font-semibold border border-white/20">
                        Visualisasi Reka Bentuk (Konsep)
                      </div>
                    )}

                    {/* Quick Lightbox Action Button */}
                    <button
                      type="button"
                      onClick={() => onOpenLightbox(proj.gallery, 0, proj.title)}
                      className="absolute bottom-3 right-3 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-all opacity-90 hover:opacity-100 cursor-pointer"
                      aria-label={`Papar foto penuh ${proj.title}`}
                      title="Papar imej penuh"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                      <span>{proj.categoryLabel}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{proj.location}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors leading-snug">
                      {proj.title}
                    </h3>

                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed line-clamp-3">
                      {proj.shortSummary}
                    </p>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 sm:p-7 pt-0 border-t border-white/10 mt-2 flex items-center justify-between">
                  <a href={`/projek/${proj.slug}`}
                    className="text-white hover:underline text-sm font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Perincian Skop</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ======================================================== */}
        {/* LIST VIEW */}
        {/* ======================================================== */}
        {viewMode === 'list' && (
          <div className="space-y-6">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-6 sm:p-8 rounded-3xl pearl-glass border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-white/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-1">
                  <div
                    className="w-full sm:w-44 aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-white/15 shrink-0 relative cursor-pointer"
                    onClick={() => onOpenLightbox(proj.gallery, 0, proj.title)}
                  >
                    <img
                      src={proj.coverImage}
                      alt={proj.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                      <span>{proj.categoryLabel}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{proj.location}</span>
                      </span>
                      {proj.isRenderConcept && (
                        <span className="px-2 py-0.5 rounded bg-white/10 text-white font-normal">
                          Visualisasi
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{proj.title}</h3>
                    <p className="text-neutral-300 text-base max-w-2xl leading-relaxed">
                      {proj.shortSummary}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
                  <a href={`/projek/${proj.slug}`}
                    className="min-h-[48px] px-5 py-2.5 rounded-xl pearl-glass border border-white/20 text-white font-semibold hover:bg-white/15 transition-colors text-center cursor-pointer"
                  >
                    Perincian Skop
                  </a>
                  <a
                    href={`https://wa.me/60148196216?text=${encodeURIComponent(
                      `Salam ARZ Jati Trading, saya berminat dengan projek '${proj.title}'.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] px-6 py-2.5 rounded-xl bg-white text-neutral-950 font-bold hover:bg-neutral-200 transition-colors text-center inline-flex items-center justify-center gap-2"
                  >
                    <span>Tanya WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
