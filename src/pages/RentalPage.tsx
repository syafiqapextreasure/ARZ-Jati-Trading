import {trackContactClick} from '../lib/analytics';
import React, { useState } from 'react';
import {
  Wrench,
  AlertCircle,
  CheckCircle2,
  Calendar,
  MapPin,
  MessageCircle,
  Copy,
  Info,
  Layers,
  ArrowRight,
} from 'lucide-react';
import {
  RENTAL_FAQS,
  RentalEnquiryFormState,
  INITIAL_RENTAL_ENQUIRY,
  buildRentalWhatsAppUrl,
} from '../data/rental';
import { COMPANY_INFO } from '../data/company';

interface RentalPageProps {
  onNavigate: (path: string) => void;
}

export const RentalPage: React.FC<RentalPageProps> = ({ onNavigate }) => {
  const [form, setForm] = useState<RentalEnquiryFormState>(INITIAL_RENTAL_ENQUIRY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copySuccess, setCopySuccess] = useState(false);
  const [handoffOpen, setHandoffOpen] = useState(false);
  const [lastGeneratedUrl, setLastGeneratedUrl] = useState('');

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!form.equipment.trim()) {
      errs.equipment = 'Sila nyatakan jenis peralatan atau keperluan tapak yang diperlukan.';
    }

    if (!form.quantity || form.quantity <= 0) {
      errs.quantity = 'Kuantiti hendaklah sekurang-kurangnya 1.';
    }

    if (form.startDate && form.endDate) {
      const start = new Date(form.startDate).getTime();
      const end = new Date(form.endDate).getTime();
      if (end < start) {
        errs.endDate = 'Tarikh tamat sewaan tidak boleh mendahului tarikh mula.';
      }
    }

    if (!form.siteLocation.trim()) {
      errs.siteLocation = 'Sila nyatakan anggaran lokasi atau daerah tapak bina di Kelantan / semenanjung.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const waUrl = buildRentalWhatsAppUrl(form);
    setLastGeneratedUrl(waUrl);
    setHandoffOpen(true);

    // Open WhatsApp in new tab
    trackContactClick('whatsapp','/sewa-peralatan','form');
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    const text = [
      `*PERTANYAAN SEWAAN PERALATAN - ARZ JATI TRADING*`,
      `Peralatan: ${form.equipment.trim()}`,
      `Kuantiti: ${form.quantity}`,
      `Tarikh Mula: ${form.startDate || 'Akan dibincangkan'}`,
      `Tarikh Tamat: ${form.endDate || 'Akan dibincangkan'}`,
      `Lokasi Tapak: ${form.siteLocation.trim()}`,
      form.message ? `Catatan: ${form.message.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    });
  };

  return (
    <div className="w-full text-neutral-100 py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Hero */}
        <section className="space-y-6 max-w-4xl">
          <nav aria-label="Jejak halaman" className="text-base text-neutral-300">
            <a href="/" className="underline underline-offset-4">Laman Utama</a>
            <span aria-hidden="true"> / </span><span>Sewa Peralatan</span>
          </nav>
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400">
            <span className="w-6 h-[2px] bg-neutral-400 inline-block" />
            <span>SEWAAN PERALATAN</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Sewaan Peralatan Tapak Bina di Kelantan
          </h1>
          <p className="text-xl sm:text-[22px] text-neutral-300 leading-relaxed max-w-3xl">
            Bincangkan keperluan sewaan peralatan projek sivil dan pembinaan bersama ARZ Bina di Wakaf Bharu, Kelantan. Kongsi jenis kerja, tempoh sewaan dan lokasi tapak untuk semakan peralatan yang sesuai serta ketersediaan.
          </p>
        </section>

        <section className="space-y-6" aria-labelledby="rental-process">
          <h2 id="rental-process" className="text-3xl text-white">Cara Mendapatkan Sebut Harga Sewaan</h2>
          <ol className="grid md:grid-cols-3 gap-6 list-none">
            {[
              ['1. Terangkan kerja tapak', 'Nyatakan jenis kerja, peralatan dan kuantiti yang diperlukan. Sertakan kapasiti atau spesifikasi jika diketahui supaya keperluan boleh disemak dengan tepat.'],
              ['2. Kongsi tarikh dan lokasi', 'Berikan tarikh mula, jangkaan tempoh dan daerah atau pin lokasi. Maklumkan keadaan akses masuk, ruang penghantaran dan keperluan pengendali jika ada.'],
              ['3. Dapatkan pengesahan', 'Semak ketersediaan, kadar, penghantaran dan pengambilan bersama pasukan kami. Pastikan butiran dan syarat sewaan dipersetujui sebelum menjadualkan kerja tapak.'],
            ].map(([title, text]) => <li key={title} className="pearl-glass border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl text-white mb-3">{title}</h3><p className="text-lg text-neutral-300 leading-relaxed">{text}</p>
            </li>)}
          </ol>
          <p className="text-lg text-neutral-300 leading-relaxed">Untuk semakan awal, <a className="underline underline-offset-4" href={`tel:${COMPANY_INFO.phoneClean}`}>hubungi 014-819 6216</a> atau gunakan borang di bawah. Bagi pertanyaan tapak di Terengganu, liputan dan penghantaran disemak mengikut lokasi.</p>
        </section>

        {/* Truthful Inventory Disclaimer (Per instructions: No inventory is supplied, do not invent fictional machines/prices) */}
        <section className="p-8 sm:p-10 rounded-3xl pearl-glass border border-white/20 space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <Info className="w-6 h-6 text-neutral-200" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">
                Maklumat Ketersediaan Peralatan
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed">
                <strong>Hubungi kami untuk maklumat peralatan dan ketersediaan terkini.</strong>
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Bagi memastikan peralatan yang disediakan menepati kapasiti beban dan fasa tapak anda, kami menyelaraskan ketersediaan unit melalui perbincangan terus bersama pengurus tapak kami.
              </p>
            </div>
          </div>
        </section>

        {/* Important Process Clarification */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-sm text-neutral-300 flex items-center gap-3">
          <span className="text-lg">📌</span>
          <span>
            <strong>Perhatian:</strong> Borang di bawah adalah untuk <em>pertanyaan sebut harga & ketersediaan peralatan sahaja</em>, bukan transaksi bayaran atas talian. Tiada caj dikenakan semasa penghantaran borang ini.
          </span>
        </div>

        {/* Working Enquiry Form */}
        <section id="borang-sewaan" className="p-8 sm:p-12 rounded-3xl pearl-glass border border-white/20 shadow-2xl space-y-8">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Borang Pertanyaan Sewaan
            </h2>
            <p className="text-neutral-400 text-sm mt-1">
              Lengkapkan butiran peralatan, tarikh diperlukan dan lokasi tapak anda.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Equipment name */}
            <div className="space-y-2">
              <label htmlFor="rental-equip" className="block text-base font-semibold text-white">
                Peralatan / Jenis Keperluan Tapak <span className="text-neutral-400">*</span>
              </label>
              <input
                id="rental-equip"
                type="text"
                value={form.equipment}
                onChange={(e) => setForm({ ...form, equipment: e.target.value })}
                placeholder="Nyatakan nama peralatan atau terangkan kerja tapak anda"
                className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-black/60 border text-white placeholder-neutral-500 focus-visible:ring-2 focus-visible:ring-white transition-all text-base ${
                  errors.equipment ? 'border-red-400' : 'border-white/20'
                }`}
              />
              {errors.equipment && (
                <p className="text-sm text-red-400 flex items-center gap-1.5 mt-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.equipment}</span>
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Quantity */}
              <div className="space-y-2">
                <label htmlFor="rental-qty" className="block text-base font-semibold text-white">
                  Kuantiti (Unit) <span className="text-neutral-400">*</span>
                </label>
                <input
                  id="rental-qty"
                  type="number"
                  min="1"
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: parseInt(e.target.value) || 1 })}
                  className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-black/60 border text-white focus-visible:ring-2 focus-visible:ring-white transition-all text-base ${
                    errors.quantity ? 'border-red-400' : 'border-white/20'
                  }`}
                />
                {errors.quantity && (
                  <p className="text-sm text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.quantity}</span>
                  </p>
                )}
              </div>

              {/* Start Date */}
              <div className="space-y-2">
                <label htmlFor="rental-start" className="block text-base font-semibold text-white">
                  Tarikh Mula Diperlukan
                </label>
                <input
                  id="rental-start"
                  type="date"
                  value={form.startDate}
                  onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                  className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-black/60 border border-white/20 text-white focus-visible:ring-2 focus-visible:ring-white transition-all text-base [color-scheme:dark]"
                />
              </div>

              {/* End Date */}
              <div className="space-y-2">
                <label htmlFor="rental-end" className="block text-base font-semibold text-white">
                  Tarikh Tamat Jangkaan
                </label>
                <input
                  id="rental-end"
                  type="date"
                  value={form.endDate}
                  onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                  className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-black/60 border text-white focus-visible:ring-2 focus-visible:ring-white transition-all text-base [color-scheme:dark] ${
                    errors.endDate ? 'border-red-400' : 'border-white/20'
                  }`}
                />
                {errors.endDate && (
                  <p className="text-sm text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.endDate}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Site Location */}
            <div className="space-y-2">
              <label htmlFor="rental-loc" className="block text-base font-semibold text-white">
                Lokasi Tapak Projek <span className="text-neutral-400">*</span>
              </label>
              <input
                id="rental-loc"
                type="text"
                value={form.siteLocation}
                onChange={(e) => setForm({ ...form, siteLocation: e.target.value })}
                placeholder="cth. Pasir Mas, Kota Bharu, Wakaf Bharu..."
                className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-black/60 border text-white placeholder-neutral-500 focus-visible:ring-2 focus-visible:ring-white transition-all text-base ${
                  errors.siteLocation ? 'border-red-400' : 'border-white/20'
                }`}
              />
              {errors.siteLocation && (
                <p className="text-sm text-red-400 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.siteLocation}</span>
                </p>
              )}
            </div>

            {/* Additional Message */}
            <div className="space-y-2">
              <label htmlFor="rental-msg" className="block text-base font-semibold text-white">
                Catatan Tambahan (Pilihan)
              </label>
              <textarea
                id="rental-msg"
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Sertakan sebarang keperluan pengendali jentera (operator) atau kemudahan laluan masuk lori..."
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/20 text-white placeholder-neutral-500 focus-visible:ring-2 focus-visible:ring-white transition-all text-base resize-none"
              />
            </div>

            {/* WhatsApp Instructions & Submission */}
            <div className="pt-4 space-y-4">
              <div className="text-sm text-neutral-300 bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                <p className="font-semibold text-white">
                  📱 Langkah Selepas Menekan Butang:
                </p>
                <p className="text-neutral-300">
                  Tetingkap WhatsApp akan dibuka dengan teks pertanyaan yang telah siap diformatkan. <strong>Sila tekan butang 'Hantar' (Send) di dalam aplikasi WhatsApp</strong> untuk memulakan perbualan bersama pasukan kami.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:flex-1 min-h-[52px] px-8 py-3.5 rounded-xl bg-white text-neutral-950 font-bold text-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-3 shadow-xl cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-neutral-950" />
                  <span>Hantar Pertanyaan Melalui WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="w-full sm:w-auto min-h-[52px] px-6 py-3.5 rounded-xl pearl-glass border border-white/25 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-base cursor-pointer"
                  title="Salin butiran pertanyaan jika WhatsApp tidak dibuka secara automatik"
                >
                  {copySuccess ? <CheckCircle2 className="w-5 h-5 text-neutral-300" /> : <Copy className="w-5 h-5" />}
                  <span>{copySuccess ? 'Mesej Disalin!' : 'Salin Mesej'}</span>
                </button>
              </div>
            </div>

          </form>
        </section>

        <section className="space-y-4" aria-labelledby="rental-faq">
          <h2 id="rental-faq" className="text-3xl text-white">Soalan Lazim Sewaan Peralatan</h2>
          {RENTAL_FAQS.map(faq => <details key={faq.question} className="border-b border-white/20 py-5">
            <summary className="text-xl font-semibold cursor-pointer text-white">{faq.question}</summary>
            <p className="text-lg text-neutral-300 leading-relaxed mt-4">{faq.answer}</p>
          </details>)}
          <p className="text-lg text-neutral-300 leading-relaxed">Merancang kerja pembinaan juga? Lihat <a href="/perkhidmatan" className="underline underline-offset-4">perkhidmatan ARZ Bina</a> atau <a href="/hubungi-kami" className="underline underline-offset-4">lokasi pejabat dan maklumat hubungan</a>.</p>
        </section>

      </div>
    </div>
  );
};
