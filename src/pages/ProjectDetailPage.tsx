import React from 'react';
import { PROJECTS } from '../data/projects';
import {
  ArrowLeft,
  MapPin,
  CheckCircle2,
  MessageCircle,
  Eye,
  Calendar,
  Building,
  Share2,
} from 'lucide-react';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenLightbox: (images: string[], index: number, title: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenLightbox,
}) => {
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="w-full text-neutral-100 py-20 text-center">
        <div className="max-w-xl mx-auto p-12 rounded-3xl pearl-glass border border-white/20 space-y-6">
          <h1 className="text-3xl font-bold text-white">Projek Tidak Dijumpai</h1>
          <p className="text-neutral-400 text-lg">
            Rekod projek yang dicari tidak wujud atau telah dikemas kini.
          </p>
          <button
            onClick={() => onNavigate('/projek')}
            className="min-h-[48px] px-8 py-3 rounded-xl bg-white text-neutral-950 font-bold hover:bg-neutral-200 transition-colors"
          >
            Kembali ke Senarai Projek
          </button>
        </div>
      </div>
    );
  }

  const whatsappMessage = `Salam ARZ Jati Trading, saya sedang melihat perincian projek "${project.title}" (${project.location}). Saya ingin mendapatkan maklumat lanjut dan berbincang mengenai skop berkaitan.`;

  return (
    <div className="w-full text-neutral-100 py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div>
          <button
            onClick={() => onNavigate('/projek')}
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-base font-semibold group cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Kembali ke Semua Projek</span>
          </button>
        </div>

        {/* Project Header */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-wider text-neutral-400 font-semibold">
            <span className="px-3 py-1 rounded-md bg-white/10 text-white">
              {project.categoryLabel}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </span>
            <span>·</span>
            <span className="text-neutral-400">{project.clientOrLocationType}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          {project.isRenderConcept && (
            <div className="p-4 rounded-xl bg-neutral-900 border border-white/20 text-neutral-300 text-sm">
              ℹ️ <strong>Nota Ketelusan:</strong> Foto ini merupakan visualisasi reka bentuk konsep 3D (ilustrasi perancangan seni bina) bagi memvisualisasikan susun atur dan pilihan warna sebelum fasa pembinaan.
            </div>
          )}
        </section>

        {/* Featured Main Image with Lightbox Prompt */}
        <div
          className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/20 bg-neutral-900 shadow-2xl cursor-pointer group"
          onClick={() => onOpenLightbox(project.gallery, 0, project.title)}
        >
          <img
            src={project.coverImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-6">
            <span className="text-sm text-neutral-200 bg-black/60 px-3 py-1.5 rounded-lg border border-white/20 backdrop-blur-sm flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>Tekan untuk saiz penuh</span>
            </span>
          </div>
        </div>

        {/* Project Narrative & Scope Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Description (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="p-8 rounded-3xl pearl-glass border border-white/15 space-y-6">
              <h2 className="text-2xl font-bold text-white">
                Penerangan Projek & Keperluan Tapak
              </h2>
              <p className="text-lg text-neutral-200 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Scope of Work */}
            <div className="p-8 rounded-3xl pearl-glass border border-white/15 space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Skop Kerja Dilaksanakan
              </h3>
              <ul className="space-y-3.5">
                {project.scopeOfWork.map((scope, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-base sm:text-lg text-neutral-200">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-1" />
                    <span>{scope}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Metadata & Contact Card (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl pearl-glass border border-white/15 space-y-5">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                Maklumat Ringkas
              </h3>

              <div className="space-y-4 text-base text-neutral-300 divide-y divide-white/10">
                <div className="pt-2">
                  <div className="text-xs uppercase text-neutral-400 font-semibold">Lokasi</div>
                  <div className="text-white font-medium mt-0.5">{project.location}</div>
                </div>
                <div className="pt-3">
                  <div className="text-xs uppercase text-neutral-400 font-semibold">Kategori</div>
                  <div className="text-white font-medium mt-0.5">{project.categoryLabel}</div>
                </div>
                <div className="pt-3">
                  <div className="text-xs uppercase text-neutral-400 font-semibold">Jenis Tapak</div>
                  <div className="text-white font-medium mt-0.5">{project.clientOrLocationType}</div>
                </div>
                <div className="pt-3">
                  <div className="text-xs uppercase text-neutral-400 font-semibold">Kontraktor Bertanggungjawab</div>
                  <div className="text-white font-medium mt-0.5">ARZ JATI TRADING (KT0244929-D)</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href={`https://wa.me/60148196216?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[50px] px-6 py-3 rounded-xl bg-white text-neutral-950 font-bold text-base hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2.5 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-neutral-950" />
                  <span>Bincang Skop Serupa</span>
                </a>

                <button
                  onClick={() => onNavigate('/perkhidmatan')}
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-xl pearl-glass border border-white/20 text-neutral-300 hover:text-white font-medium text-sm transition-colors text-center cursor-pointer"
                >
                  Semak Semua Perkhidmatan
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
