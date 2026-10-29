import React from 'react';
import { COMPANY_INFO } from '../data/company';
import {isAnalyticsConfigured} from '../lib/analytics';
import { ShieldCheck, MessageCircle, Lock, ArrowLeft } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full text-neutral-100 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div>
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-base font-semibold group cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Kembali ke Laman Utama</span>
          </button>
        </div>

        <section className="space-y-4">
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400">
            <span className="w-6 h-[2px] bg-neutral-400 inline-block" />
            <span>PENGENDALIAN DATA & PRIVASI</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Dasar Privasi & Komunikasi
          </h1>
          <p className="text-lg text-neutral-300">
            Kemas kini terakhir: Tahun {new Date().getFullYear()} · ARZ JATI TRADING (KT0244929-D)
          </p>
        </section>

        <div className="p-8 sm:p-12 rounded-3xl pearl-glass border border-white/15 space-y-8 text-neutral-200 text-lg leading-relaxed">
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-white font-bold text-2xl">
              <Lock className="w-6 h-6 text-neutral-300" />
              <h2>1. Tiada Pangkalan Data Tersembunyi (No Backend Storage)</h2>
            </div>
            <p>
              Laman web ARZ JATI TRADING direka bentuk sebagai portal maklumat statik dan interaktif tanpa sebarang sistem pangkalan data pelayan yang menyimpan maklumat peribadi, nombor kad pengenalan, atau data perbankan pelawat.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-white font-bold text-2xl">
              <MessageCircle className="w-6 h-6 text-neutral-300" />
              <h2>2. Pengendalian Borang & Penyerahan WhatsApp (Client-side Handoff)</h2>
            </div>
            <p>
              Apabila anda melengkapkan borang perundingan projek atau borang pertanyaan sewaan peralatan, butiran yang anda masukkan hanya diproses secara setempat di pelayar web anda (client-side) bagi menjana teks pesanan yang telah dikodkan (<code className="text-sm bg-white/10 px-1.5 py-0.5 rounded">URL-encoded</code>).
            </p>
            <p>
              Sebaik sahaja anda menekan butang serahan, pelayar anda akan mengalihkan mesej tersebut terus ke aplikasi rasmi WhatsApp ke nombor perniagaan <strong>014-819 6216</strong>. Anda mempunyai kawalan penuh untuk menyemak dan menekan 'Hantar' di dalam aplikasi WhatsApp tersebut.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-white font-bold text-2xl">
              <ShieldCheck className="w-6 h-6 text-neutral-300" />
              <h2>3. Perlindungan Maklumat Pemilik & Klien</h2>
            </div>
            <p>
              Demi mematuhi etika keselamatan data dan Akta Perlindungan Data Peribadi 2010 (PDPA), nombor kad pengenalan individu, tarikh lahir, dan alamat kediaman peribadi tidak diterbitkan di laman web ini. Sebarang dokumen sebut harga atau pelan pembinaan yang dikongsi melalui WhatsApp akan dilindungi secara sulit antara pihak pemilik projek dan pengurusan ARZ Jati Trading.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-white font-bold text-2xl">
              4. Analitik Penggunaan Laman
            </h2>
            <p>
              {isAnalyticsConfigured() ? 'Laman ini menggunakan Google Analytics 4' : 'Apabila diaktifkan, Google Analytics 4 digunakan'} untuk memahami halaman yang dilawati dan interaksi dengan butang hubungan. Google boleh menggunakan kuki serta maklumat teknikal pelayar dan peranti untuk menghasilkan laporan penggunaan.
            </p>
            <p>
              Kod penjejakan tersuai kami merekodkan jenis interaksi seperti klik WhatsApp, telefon, e-mel atau peta. Nama, nombor telefon yang anda isi, alamat e-mel dan teks pertanyaan dalam borang tidak disertakan dalam peristiwa analitik tersuai ini. Klik butang hubungan tidak dianggap sebagai pengesahan bahawa mesej telah dihantar.
            </p>
            <p>
              Maklumat lanjut: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-white underline">Dasar Privasi Google</a> dan <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-white underline">pilihan keluar Google Analytics</a>.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-white font-bold text-2xl">
              5. Hubungi Pegawai Privasi Kami
            </h2>
            <p>
              Sekiranya anda mempunyai sebarang pertanyaan mengenai dasar ini atau ingin meminta pemadaman sebarang perbualan WhatsApp lampau, sila hubungi kami di:
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-base text-neutral-300 space-y-1">
              <p><strong>ARZ JATI TRADING</strong> (KT0244929-D)</p>
              <p>{COMPANY_INFO.address.full}</p>
              <p>Telefon: <a href="tel:+60148196216" className="text-white underline">014-819 6216</a></p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
