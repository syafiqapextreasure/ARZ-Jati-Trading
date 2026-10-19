import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/services';
import {
  Wrench,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <div className="light-section services-page w-full py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Header Hero */}
        <section className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400">
            <span className="w-6 h-[2px] bg-neutral-400 inline-block" />
            <span>PERKHIDMATAN KAMI</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Kepakaran Menyeluruh Dari Asas Hingga Kemasan Akhir
          </h1>
          <p className="text-xl sm:text-[22px] text-neutral-300 leading-relaxed max-w-3xl">
            Perkhidmatan pembinaan, pengubahsuaian dan kemasan berasaskan bidang operasi.
          </p>
        </section>
        {/* Equipment Rental Promo Bar within Services */}
        <div className="p-6 sm:p-8 rounded-2xl pearl-glass border border-white/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Perlukan Sewaan Peralatan Tapak?</h3>
              <p className="text-sm text-neutral-300">
                Hubungi kami untuk maklumat peralatan, tempoh sewaan dan ketersediaan.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('/sewa-peralatan')}
            className="min-h-[48px] px-6 py-2.5 rounded-xl bg-white text-neutral-950 font-bold text-base hover:bg-neutral-200 transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Semak Sewaan Peralatan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Segmented Selector for Services */}
        <section className="space-y-12">
          
          {/* Scrollable button tabs for quick switching */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {SERVICES.map((srv) => (
              <button
                key={srv.id}
                onClick={() => setSelectedServiceId(srv.id)}
                className={`min-h-[48px] px-5 py-2.5 rounded-xl font-semibold text-base whitespace-nowrap transition-all cursor-pointer ${
                  selectedServiceId === srv.id
                    ? 'bg-white text-neutral-950 shadow-lg'
                    : 'pearl-glass text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {srv.title}
              </button>
            ))}
          </div>

          {/* Active Service Showcase Card */}
          <div className="p-8 sm:p-12 rounded-3xl pearl-glass border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                  {activeService.kicker}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {activeService.title}
                </h2>
                <p className="text-lg text-neutral-200 leading-relaxed">
                  {activeService.fullDescription}
                </p>

                {/* Scope of Features */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm uppercase tracking-wider text-neutral-400 font-bold">
                    Skop Pelaksanaan Tapak:
                  </h4>
                  <ul className="space-y-2.5">
                    {activeService.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base text-neutral-200">
                        <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={`https://wa.me/60148196216?text=${encodeURIComponent(activeService.whatsappPrompt)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[50px] px-7 py-3 rounded-xl bg-white text-neutral-950 font-bold text-base hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5 fill-neutral-950" />
                    <span>Dapatkan Sebut Harga WhatsApp</span>
                  </a>
                  <button
                    onClick={() => onNavigate('/projek')}
                    className="min-h-[50px] px-6 py-3 rounded-xl pearl-glass border border-white/20 text-white font-medium hover:bg-white/10 transition-colors cursor-pointer text-base"
                  >
                    Lihat Contoh Projek Terkait
                  </button>
                </div>
              </div>

              {/* Service Visual Preview */}
              <div className="lg:col-span-6">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-neutral-900">
                  <img loading="lazy" decoding="async"
                    src={activeService.heroImage}
                    alt={activeService.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* Detailed Service Grid of All 7 Services */}
        <section className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Senarai Lengkap 7 Bidang Perkhidmatan
            </h2>
            <p className="text-neutral-300 text-lg sm:text-[20px]">
              Bincangkan skop, jadual dan spesifikasi kerja dengan pasukan kami sebelum memulakan projek.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="p-8 rounded-3xl pearl-glass border border-white/15 flex flex-col justify-between space-y-6 hover:border-white/30 transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="aspect-[16/9] rounded-xl overflow-hidden bg-neutral-900 border border-white/10">
                    <img loading="lazy" decoding="async"
                      src={srv.heroImage}
                      alt={srv.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                      {srv.kicker}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{srv.title}</h3>
                  </div>
                  <p className="text-neutral-300 text-base leading-relaxed">
                    {srv.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedServiceId(srv.id);
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                    className="text-white hover:underline text-sm font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Perincian Skop</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/60148196216?text=${encodeURIComponent(srv.whatsappPrompt)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-4 py-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-neutral-950 font-semibold text-xs border border-white/20 transition-all flex items-center gap-1.5"
                    aria-label={`WhatsApp untuk ${srv.title}`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Tanya</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
