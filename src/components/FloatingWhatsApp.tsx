import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <aside
      className="fixed bottom-6 right-6 z-30 flex items-end gap-3 pointer-events-auto"
      aria-label="Khidmat WhatsApp Pantas"
    >
      {/* Discreet Pearl Glass Tooltip (can be dismissed) */}
      {!tooltipDismissed && (
        <div className="hidden md:flex items-center gap-2 pearl-glass py-2 px-3.5 rounded-xl border border-white/20 text-neutral-200 text-sm shadow-xl animate-in fade-in slide-in-from-right-2 duration-300">
          <span>Bincang projek dengan kami di WhatsApp</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-neutral-400 hover:text-white p-0.5 rounded transition-colors"
            aria-label="Tutup pemberitahuan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/60148196216?text=Salam%20ARZ%20Jati%20Trading%2C%20saya%20ingin%20bertanya%20mengenai%20perkhidmatan%20pembinaan%20%2F%20pengubahsuaian."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/40 focus-visible:ring-4 focus-visible:ring-white"
        aria-label="Buka WhatsApp untuk berbincang projek dengan ARZ Jati Trading"
        title="WhatsApp ARZ Jati Trading (014-819 6216)"
      >
        <MessageCircle className="w-7 h-7 fill-neutral-950 text-neutral-950" />
      </a>
    </aside>
  );
};
