import {InternalLink} from './InternalLink';
import React from 'react';
import { ArzLogo } from './ArzLogo';
import { COMPANY_INFO } from '../data/company';
import { Phone, MapPin, MessageCircle, ArrowUpRight, CheckSquare, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenChecklist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenChecklist }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-950 border-t border-white/10 text-neutral-300 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Registration Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <InternalLink href="/" onNavigate={onNavigate} className="text-left focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1 -ml-1 cursor-pointer"
              aria-label="Kembali ke Laman Utama">
              <ArzLogo size="md" light={true} />
            </InternalLink>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
              Membina Ruang Untuk Kehidupan Lebih Baik. Khidmat kontraktor pembinaan rumah, pengubahsuaian, aplikasi cat bertauliah, mozek, dan kerja sivil di Kelantan.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-neutral-300">
                <span className="text-neutral-400">Pendaftaran SSM:</span>
                <span className="font-mono font-medium text-white">{COMPANY_INFO.registrationNo}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white text-lg font-bold tracking-wider uppercase">
              Pautan Pantas
            </h3>
            <ul className="space-y-3 text-lg"><li><a href="/bina-rumah-kelantan">Bina Rumah Kelantan</a></li><li><a href="/bina-rumah-terengganu">Bina Rumah Terengganu</a></li><li><InternalLink href="/hubungi-kami" onNavigate={onNavigate} className="hover:text-white">Hubungi Kami</InternalLink></li>
              <li>
                <InternalLink href="/" onNavigate={onNavigate} className="hover:text-white transition-colors cursor-pointer text-neutral-400 hover:translate-x-1 duration-150 inline-block">
                  Laman Utama
                </InternalLink>
              </li>
              <li>
                <InternalLink href="/tentang-kami" onNavigate={onNavigate} className="hover:text-white transition-colors cursor-pointer text-neutral-400 hover:translate-x-1 duration-150 inline-block">
                  Tentang Kami
                </InternalLink>
              </li>
              <li>
                <InternalLink href="/perkhidmatan" onNavigate={onNavigate} className="hover:text-white transition-colors cursor-pointer text-neutral-400 hover:translate-x-1 duration-150 inline-block">
                  Perkhidmatan Kami
                </InternalLink>
              </li>
              <li>
                <InternalLink href="/sewa-peralatan" onNavigate={onNavigate} className="hover:text-white transition-colors cursor-pointer text-neutral-400 hover:translate-x-1 duration-150 inline-block">
                  Sewa Peralatan Tapak
                </InternalLink>
              </li>
              <li>
                <InternalLink href="/projek" onNavigate={onNavigate} className="hover:text-white transition-colors cursor-pointer text-neutral-400 hover:translate-x-1 duration-150 inline-block">
                  Portfolio Projek
                </InternalLink>
              </li>
              <li>
                <InternalLink href="/privasi" onNavigate={onNavigate} className="hover:text-white transition-colors cursor-pointer text-neutral-400 hover:translate-x-1 duration-150 inline-block">
                  Dasar Privasi & Komunikasi
                </InternalLink>
              </li>
            </ul>
          </div>

          {/* Contact Details Column (4 cols) - Verified from PDF Page 30 only */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white text-lg font-bold tracking-wider uppercase">
              Maklumat Hubungan
            </h3>
            <div className="space-y-4 text-neutral-300 text-lg">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-neutral-400 shrink-0 mt-1" aria-hidden="true" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-neutral-400 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="text-white font-semibold hover:underline"
                  aria-label="Panggil 014-819 6216"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-neutral-400 shrink-0" aria-hidden="true" />
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-white hover:underline flex items-center gap-1.5"
                >
                  <span>Mesej WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <div>
            © {currentYear} {COMPANY_INFO.name} ({COMPANY_INFO.registrationNo.split(' ')[1]?.replace(/[()]/g, '') || 'KT0244929-D'}). Hak Cipta Terpelihara.
          </div>
          <div className="flex items-center gap-6">
            <InternalLink href="/privasi" onNavigate={onNavigate} className="hover:text-white transition-colors cursor-pointer">
              Dasar Privasi
            </InternalLink>
            <span>·</span>
            <span className="text-neutral-400">Wakaf Bharu, Kelantan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
