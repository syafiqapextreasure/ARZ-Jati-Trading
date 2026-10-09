import React, { useState, useRef, useEffect } from 'react';
import { ArzLogo } from './ArzLogo';
import { MessageCircle, Menu, X, ChevronDown, Wrench, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const isNavActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full pearl-glass border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 gap-4">
          
          {/* Zone 1: Brand Wordmark & Emblem */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center text-left focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1 -ml-1 transition-opacity hover:opacity-90 cursor-pointer"
            aria-label="Kembali ke Laman Utama ARZ Jati Trading"
          >
            <ArzLogo size="sm" showText={true} light={true} />
          </button>

          {/* Zone 2: Primary Nav Links (Navigation >= 18px per instructions) */}
          <nav className="hidden lg:flex items-center gap-8 text-[18px] font-medium" aria-label="Navigasi Utama">
            <button
              onClick={() => handleLinkClick('/tentang-kami')}
              className={`py-2 px-1 transition-colors whitespace-nowrap cursor-pointer hover:text-white ${
                isNavActive('/tentang-kami')
                  ? 'text-white border-b-2 border-white font-semibold'
                  : 'text-neutral-300'
              }`}
            >
              Tentang Kami
            </button>

            {/* Perkhidmatan with Accessible Submenu */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') setServicesDropdownOpen(true);
                  if (e.key === 'Escape') setServicesDropdownOpen(false);
                }}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                className={`py-2 px-1 flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer hover:text-white ${
                  isNavActive('/perkhidmatan') || isNavActive('/sewa-peralatan')
                    ? 'text-white border-b-2 border-white font-semibold'
                    : 'text-neutral-300'
                }`}
              >
                <span>Perkhidmatan</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Submenu Dropdown */}
              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-3 w-72 rounded-xl pearl-glass border border-white/20 p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleLinkClick('/perkhidmatan')}
                    className="w-full text-left px-4 py-3 text-[16px] text-white hover:bg-white/10 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>Semua Perkhidmatan</span>
                    <span className="text-xs text-neutral-400">7 Bidang</span>
                  </button>
                  <div className="my-1 border-t border-white/10" />
                  <button
                    onClick={() => handleLinkClick('/sewa-peralatan')}
                    className="w-full text-left px-4 py-3 text-[16px] text-neutral-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2 cursor-pointer font-medium"
                  >
                    <Wrench className="w-4 h-4 text-neutral-300" />
                    <span>Sewa Peralatan Tapak</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('/projek')}
              className={`py-2 px-1 transition-colors whitespace-nowrap cursor-pointer hover:text-white ${
                isNavActive('/projek')
                  ? 'text-white border-b-2 border-white font-semibold'
                  : 'text-neutral-300'
              }`}
            >
              Projek
            </button>
          </nav>

          {/* Zone 3: Primary Action - Monochrome WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/60148196216?text=Salam%20ARZ%20Jati%20Trading%2C%20saya%20ingin%20berbincang%20mengenai%20projek%20pembinaan%20%2F%20pengubahsuaian."
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-6 py-2.5 rounded-xl bg-white text-neutral-950 hover:bg-neutral-200 font-semibold text-[17px] inline-flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white shrink-0 active:scale-[0.98]"
              aria-label="Hubungi ARZ Jati Trading di WhatsApp (buka tetingkap baharu)"
            >
              <MessageCircle className="w-5 h-5 text-neutral-950 fill-neutral-950" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle (minimum touch target 48x48) */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://wa.me/60148196216?text=Salam%20ARZ%20Jati%20Trading%2C%20saya%20ingin%20berbincang%20mengenai%20projek."
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-lg bg-white text-neutral-950 inline-flex items-center justify-center font-medium shadow-sm hover:bg-neutral-200 active:scale-95 transition-all"
              aria-label="WhatsApp Kami"
            >
              <MessageCircle className="w-5 h-5 fill-neutral-950" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[48px] min-w-[48px] p-3 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Menu within two taps, including Sewa Peralatan) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[80px] sm:top-[96px] bottom-0 z-50 bg-neutral-950/95 backdrop-blur-xl border-t border-white/10 p-6 overflow-y-auto flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2">
              Menu Utama
            </div>
            <button
              onClick={() => handleLinkClick('/')}
              className="w-full text-left py-3 px-4 text-xl font-medium text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              Laman Utama
            </button>
            <button
              onClick={() => handleLinkClick('/tentang-kami')}
              className="w-full text-left py-3 px-4 text-xl font-medium text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => handleLinkClick('/perkhidmatan')}
              className="w-full text-left py-3 px-4 text-xl font-medium text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              Perkhidmatan Kami
            </button>
            {/* Direct 1-tap rental access in mobile */}
            <button
              onClick={() => handleLinkClick('/sewa-peralatan')}
              className="w-full text-left py-3 px-4 text-xl font-medium text-white hover:bg-white/10 rounded-xl transition-colors flex items-center justify-between border border-white/15 bg-white/5"
            >
              <span className="flex items-center gap-3">
                <Wrench className="w-5 h-5 text-neutral-300" />
                <span>Sewa Peralatan Tapak</span>
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-neutral-300">Pertanyaan</span>
            </button>
            <button
              onClick={() => handleLinkClick('/projek')}
              className="w-full text-left py-3 px-4 text-xl font-medium text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              Portfolio Projek
            </button>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="text-sm text-neutral-400">
              <p className="font-semibold text-neutral-200">ARZ JATI TRADING</p>
              <p>PT2907 Tingkat Atas, Desa SBJ Putra Pasir Pekan, Wakaf Bharu, Kelantan</p>
            </div>
            <a
              href="https://wa.me/60148196216?text=Salam%20ARZ%20Jati%20Trading%2C%20saya%20ingin%20berbincang%20mengenai%20projek."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[52px] px-6 py-3 rounded-xl bg-white text-neutral-950 font-bold text-lg flex items-center justify-center gap-3 shadow-lg active:scale-98 transition-all"
            >
              <MessageCircle className="w-6 h-6 fill-neutral-950" />
              <span>Hubungi di WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
