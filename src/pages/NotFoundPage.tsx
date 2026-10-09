import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full text-neutral-100 py-24 sm:py-32 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="text-7xl sm:text-9xl font-extrabold text-white font-mono tracking-tighter">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Halaman Tidak Dijumpai
        </h1>
        <p className="text-lg text-neutral-300 max-w-md mx-auto leading-relaxed">
          Maaf, pautan yang anda akses tidak wujud atau telah dipindahkan ke laluan baharu.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('/')}
            className="min-h-[50px] px-8 py-3 rounded-xl bg-white text-neutral-950 font-bold text-lg hover:bg-neutral-200 transition-colors inline-flex items-center gap-2.5 shadow-xl cursor-pointer"
          >
            <Home className="w-5 h-5" />
            <span>Kembali ke Laman Utama</span>
          </button>
          <button
            onClick={() => onNavigate('/perkhidmatan')}
            className="min-h-[50px] px-6 py-3 rounded-xl pearl-glass border border-white/20 text-white font-medium hover:bg-white/10 transition-colors cursor-pointer text-base"
          >
            Lihat Perkhidmatan
          </button>
        </div>
      </div>
    </div>
  );
};
