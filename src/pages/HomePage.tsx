import { HomeHero } from '../components/HomeHero';
import React, { useState } from 'react';
import {
  ArrowRight,
  Home,
  ShieldCheck,
  Users,
  Wrench,
  Paintbrush,
  Layers,
  Phone,
  MapPin,
  MessageCircle,
  CheckCircle,
  Copy,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PROJECTS } from '../data/projects';
import { SERVICES } from '../data/services';
import { buildGeneralWhatsAppUrl } from '../data/rental';
import { IMAGES } from '../assets/images';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenLightbox: (images: string[], index: number, title: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenLightbox }) => {
  // General quick contact form state
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formService, setFormService] = useState('Pembinaan Rumah');
  const [formLocation, setFormLocation] = useState('Kelantan');
  const [formNotes, setFormNotes] = useState('');
  const [formError, setFormError] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const selectedProjects = PROJECTS.slice(0, 3);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) {
      setFormError('Sila masukkan nama anda.');
      return;
    }
    setFormError('');

    const text = [
      `*PERTANYAAN PROJEK - ARZ JATI TRADING*`,
      ``,
      `*Nama Klien:* ${formName.trim()}`,
      formPhone.trim() ? `*No Telefon:* ${formPhone.trim()}` : '',
      `*Jenis Perkhidmatan:* ${formService}`,
      `*Lokasi Projek:* ${formLocation.trim()}`,
      formNotes.trim() ? `*Penerangan / Keperluan:* ${formNotes.trim()}` : '',
      ``,
      `Saya ingin berbincang mengenai sebut harga dan pelaksanaan projek. Terima kasih!`,
    ]
      .filter(Boolean)
      .join('\n');

    const waUrl = `https://wa.me/60148196216?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    const text = [
      `*PERTANYAAN PROJEK - ARZ JATI TRADING*`,
      `Nama: ${formName.trim() || 'Klien'}`,
      `Perkhidmatan: ${formService}`,
      `Lokasi: ${formLocation.trim()}`,
      `Catatan: ${formNotes.trim() || 'Pertanyaan sebut harga'}`,
    ].join('\n');

    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    });
  };

  return (
    <div className="home-page w-full text-neutral-100 selection:bg-neutral-200 selection:text-neutral-900">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION (Matching Concept 2 Pearl Glass) */}
      {/* ======================================================== */}
      <HomeHero onNavigate={onNavigate} />

      {/* ======================================================== */}
      {/* 2. APA YANG KAMI LAKUKAN / KEPAKARAN KAMI */}
      {/* ======================================================== */}
      <section className="light-section home-services py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400">
                <span className="w-6 h-[2px] bg-neutral-400 inline-block" />
                <span>APA YANG KAMI LAKUKAN</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Kepakaran Kami
              </h2>
            </div>
            <p className="text-neutral-300 text-lg sm:text-[20px] max-w-md leading-relaxed">
              Realisasikan idea anda bersama pasukan berpengalaman kami di Kelantan.
            </p>
          </div>

          {/* 3 Prominent Cards Matching Concept Image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Bina Rumah */}
            <div className="group rounded-2xl overflow-hidden pearl-glass-card flex flex-col justify-between">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={IMAGES.serviceBinaRumah}
                  alt="Ilustrasi perkhidmatan Bina Rumah ARZ Jati Trading"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 select-none"
                />
              </div>
              <div className="p-6 sm:p-7 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                    Bina Rumah
                  </h3>
                  <p className="text-base text-neutral-300">
                    Dari asas kepada kediaman idaman.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('/perkhidmatan')}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white text-neutral-300 hover:text-neutral-950 flex items-center justify-center border border-white/20 transition-all shrink-0 cursor-pointer"
                  aria-label="Lihat perkhidmatan Bina Rumah"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Card 2: Ubah Suai */}
            <div className="group rounded-2xl overflow-hidden pearl-glass-card flex flex-col justify-between">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={IMAGES.serviceUbahSuai}
                  alt="Perkhidmatan Ubah Suai Rumah ARZ Jati Trading"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 select-none"
                />
              </div>
              <div className="p-6 sm:p-7 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                    Ubah Suai
                  </h3>
                  <p className="text-base text-neutral-300">
                    Ruang baharu, kehidupan lebih baik.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('/perkhidmatan')}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white text-neutral-300 hover:text-neutral-950 flex items-center justify-center border border-white/20 transition-all shrink-0 cursor-pointer"
                  aria-label="Lihat perkhidmatan Ubah Suai"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Card 3: Cat & Kemasan */}
            <div className="group rounded-2xl overflow-hidden pearl-glass-card flex flex-col justify-between">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={IMAGES.serviceCatKemasan}
                  alt="Perkhidmatan Cat dan Kemasan Khas ARZ Jati Trading"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 select-none"
                />
              </div>
              <div className="p-6 sm:p-7 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                    Cat & Kemasan
                  </h3>
                  <p className="text-base text-neutral-300">
                    Sentuhan akhir yang menyerlah.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('/perkhidmatan')}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white text-neutral-300 hover:text-neutral-950 flex items-center justify-center border border-white/20 transition-all shrink-0 cursor-pointer"
                  aria-label="Lihat perkhidmatan Cat & Kemasan"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Quick link to see all 7 services */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('/perkhidmatan')}
              className="inline-flex items-center gap-2 text-neutral-300 hover:text-white text-lg font-medium underline underline-offset-8 transition-colors cursor-pointer"
            >
              <span>Terokai semua 7 bidang kepakaran kami</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. PROJEK PILIHAN / HASIL KERJA KAMI */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-neutral-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400">
                <span className="w-6 h-[2px] bg-neutral-400 inline-block" />
                <span>PROJEK PILIHAN</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Hasil Kerja Kami
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-neutral-300 text-lg sm:text-[20px]">
                Setiap ruang ada cerita. Inilah sebahagiannya.
              </p>
              <button
                onClick={() => onNavigate('/projek')}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl pearl-glass border border-white/20 text-white font-medium hover:bg-white/10 transition-colors cursor-pointer text-base"
              >
                <span>Lihat Semua</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3 Featured Projects Grid Matching Concept Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Project 1: Rumah Kediaman */}
            <div
              className="group cursor-pointer rounded-2xl overflow-hidden pearl-glass-card"
              onClick={() => onOpenLightbox([IMAGES.originalHouse], 0, 'Rumah Kediaman Setingkat')}
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-900 relative">
                <img
                  src={IMAGES.originalHouse}
                  alt="Rumah Kediaman Setingkat"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white group-hover:text-neutral-200">
                  Rumah Kediaman
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  Pembinaan struktur & kemasan luar
                </p>
              </div>
            </div>

            {/* Project 2: Kemasan Lantai */}
            <div
              className="group cursor-pointer rounded-2xl overflow-hidden pearl-glass-card"
              onClick={() => onOpenLightbox([IMAGES.originalFloor], 0, 'Kemasan Lantai Jubin')}
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-900 relative">
                <img
                  src={IMAGES.originalFloor}
                  alt="Kemasan Lantai Jubin"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white group-hover:text-neutral-200">
                  Kemasan Lantai
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  Kerja pemasangan dan kemasan jubin
                </p>
              </div>
            </div>

            {/* Project 3: Gelanggang Sukan */}
            <div
              className="group cursor-pointer rounded-2xl overflow-hidden pearl-glass-card"
              onClick={() => onOpenLightbox([IMAGES.projectSportsCourt], 0, 'Gelanggang Sukan Sekolah Integrasi Tanah Merah')}
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-900 relative">
                <img
                  src={IMAGES.projectSportsCourt}
                  alt="Gelanggang Sukan Sekolah Integrasi Tanah Merah"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white group-hover:text-neutral-200">
                  Gelanggang Sukan
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  Sekolah Integrasi Tanah Merah
                </p>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center sm:hidden">
            <button
              onClick={() => onNavigate('/projek')}
              className="w-full min-h-[48px] px-6 py-3 rounded-xl pearl-glass border border-white/20 text-white font-medium"
            >
              Lihat Semua Portfolio Projek
            </button>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. SEWA PERALATAN SPOTLIGHT CARD (Matching Concept Image) */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 bg-neutral-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            {/* Machinery Background with Dimming Scrim */}
            <div className="absolute inset-0 z-0">
              <img
                src={IMAGES.equipmentRental}
                alt="Peralatan pembinaan dan jentera sokongan tapak"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center select-none"
              />
              <div className="absolute inset-0 bg-neutral-950/75 backdrop-blur-[6px]" />
            </div>

            {/* Banner Inner Content */}
            <div className="relative z-10 p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex items-start sm:items-center gap-5">
                <div className="w-16 h-16 rounded-2xl pearl-glass border border-white/25 flex items-center justify-center shrink-0">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-4xl font-bold text-white">
                    Perlu Sewa Peralatan?
                  </h3>
                  <p className="text-lg text-neutral-300 max-w-xl">
                    Hubungi kami untuk maklumat peralatan dan ketersediaan.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
                <a
                  href="https://wa.me/60148196216?text=Salam%20ARZ%20Jati%20Trading%2C%20saya%20ingin%20bertanya%20mengenai%20sewaan%20peralatan%20tapak%20bina."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[50px] px-8 py-3.5 rounded-xl bg-white text-neutral-950 font-bold text-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-3 shadow-lg shrink-0 w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5 fill-neutral-950" />
                  <span>Tanya di WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <button
                  type="button"
                  onClick={() => onNavigate('/sewa-peralatan')}
                  className="min-h-[50px] px-6 py-3.5 rounded-xl pearl-glass border border-white/25 text-white font-semibold text-lg hover:bg-white/15 transition-colors shrink-0 w-full sm:w-auto cursor-pointer"
                >
                  Borang Pertanyaan
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. NILAI & FAKTA SYARIKAT (Source Supported Statements) */}
      {/* ======================================================== */}
      <section className="light-section py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400">
                <span className="w-6 h-[2px] bg-neutral-400 inline-block" />
                <span>KEKUATAN KAMI</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Komitmen Kualiti Dari Pasukan Mahir
              </h2>
              <p className="text-neutral-300 text-lg sm:text-[20px] leading-relaxed">
                {COMPANY_INFO.narrative.origin} Kami menyatukan kepakaran pertukangan tempatan bersama pematuhan piawaian pengilang cat terkemuka.
              </p>
              <div>
                <button
                  onClick={() => onNavigate('/tentang-kami')}
                  className="min-h-[48px] px-6 py-3 rounded-xl pearl-glass border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Ketahui Latar Belakang & Pasukan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Fact Cards Strip (6 total operations staff listed in PDF p10) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="p-6 rounded-2xl pearl-glass border border-white/15 space-y-3">
                <div className="text-4xl font-extrabold text-white font-mono">
                  6
                </div>
                <h3 className="text-xl font-bold text-white">Bahagian Operasi</h3>
                <p className="text-base text-neutral-300">
                  Pembinaan, cat, mozek, reka bentuk, tambak tanah serta pembekalan dan servis seperti dalam profil syarikat.
                </p>
              </div>

              <div className="p-6 rounded-2xl pearl-glass border border-white/15 space-y-3">
                <div className="text-xl font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-white" />
                  <span>Aplikator Diiktiraf</span>
                </div>
                <h3 className="text-xl font-bold text-white">KCC & Sissons Paints</h3>
                <p className="text-base text-neutral-300">
                  Diperakui secara rasmi dengan sokongan teknikal pengilang dan syarat jaminan mengikut projek dan pengilang.
                </p>
              </div>

              <div className="p-6 rounded-2xl pearl-glass border border-white/15 space-y-3">
                <div className="text-xl font-bold text-white flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-white" />
                  <span>Lokasi Kami</span>
                </div>
                <h3 className="text-xl font-bold text-white">Kelantan & Luar Negeri</h3>
                <p className="text-base text-neutral-300">
                  Berpangkalan di Wakaf Bharu. Hubungi kami untuk menyemak liputan projek semasa.
                </p>
              </div>

              <div className="p-6 rounded-2xl pearl-glass border border-white/15 space-y-3">
                <div className="text-xl font-bold text-white flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-white" />
                  <span>Pendaftaran Rasmi</span>
                </div>
                <h3 className="text-xl font-bold text-white">Maklumat Pendaftaran SSM</h3>
                <p className="text-base text-neutral-300">
                  No. Pendaftaran <span className="font-mono text-white">200803154273</span> diperakui Suruhanjaya Syarikat Malaysia.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. HUBUNGI KAMI / MARI BINCANG PROJEK ANDA */}
      {/* ======================================================== */}
      <section id="bincang" data-theme="light" className="py-20 sm:py-28 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400">
              <span className="w-6 h-[2px] bg-neutral-400 inline-block" />
              <span>HUBUNGI KAMI</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Mari Bincang Projek Anda
            </h2>
            <p className="text-neutral-300 text-lg sm:text-[20px]">
              Ruang yang lebih baik bermula dengan perbualan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Information Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Phone Card */}
              <div className="p-6 rounded-2xl pearl-glass border border-white/15 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm uppercase tracking-wider text-neutral-400 font-semibold">
                    Telefon & WhatsApp
                  </div>
                  <a
                    href="tel:+60148196216"
                    className="text-2xl font-bold text-white hover:underline block"
                  >
                    014-819 6216
                  </a>
                  <p className="text-sm text-neutral-400">
                    Sedia menjawab pertanyaan projek dan lawatan tapak.
                  </p>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-6 rounded-2xl pearl-glass border border-white/15 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm uppercase tracking-wider text-neutral-400 font-semibold">
                    Alamat Operasi Berdaftar
                  </div>
                  <div className="text-xl font-bold text-white">
                    Wakaf Bharu, Kelantan
                  </div>
                  <p className="text-base text-neutral-300 leading-relaxed">
                    {COMPANY_INFO.address.full}
                  </p>
                </div>
              </div>

              {/* Fast Direct WhatsApp Trigger */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <h4 className="text-lg font-bold text-white">
                  Ingin maklum balas segera?
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Hubungi kami secara terus di WhatsApp. Anda boleh menghantar pelan atau gambar tapak secara langsung.
                </p>
                <a
                  href="https://wa.me/60148196216?text=Salam%20ARZ%20Jati%20Trading%2C%20saya%20ingin%20berbincang%20mengenai%20cadangan%20projek."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] px-6 py-3 rounded-xl bg-white text-neutral-950 font-bold text-base hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2.5 shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-neutral-950" />
                  <span>Buka WhatsApp Terus</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

            </div>

            {/* Interactive Consultation Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleConsultationSubmit}
                className="p-8 sm:p-10 rounded-3xl pearl-glass border border-white/20 shadow-2xl space-y-6"
              >
                <h3 className="text-2xl font-bold text-white pb-2 border-b border-white/10">
                  Borang Pertanyaan Projek
                </h3>

                {formError && (
                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-200 text-sm">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="home-name" className="block text-base font-semibold text-white">
                      Nama Anda <span className="text-neutral-400">*</span>
                    </label>
                    <input
                      id="home-name"
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="cth. Encik Razak"
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-neutral-500 focus-visible:ring-2 focus-visible:ring-white transition-all text-base"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="home-phone" className="block text-base font-semibold text-white">
                      Nombor Telefon
                    </label>
                    <input
                      id="home-phone"
                      type="tel"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="cth. 012-3456789"
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-neutral-500 focus-visible:ring-2 focus-visible:ring-white transition-all text-base"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Service */}
                  <div className="space-y-2">
                    <label htmlFor="home-service" className="block text-base font-semibold text-white">
                      Perkhidmatan Diperlukan
                    </label>
                    <select
                      id="home-service"
                      value={formService}
                      onChange={(e) => setFormService(e.target.value)}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-black/80 border border-white/20 text-white focus-visible:ring-2 focus-visible:ring-white transition-all text-base"
                    >
                      <option value="Pembinaan Rumah">Pembinaan Rumah Baharu</option>
                      <option value="Pengubahsuaian & Pembaikan">Pengubahsuaian & Pembaikan</option>
                      <option value="Kerja Cat & Kemasan Khas">Kerja Cat & Kemasan Khas</option>
                      <option value="Kerja Mozek & Kemasan Jubin">Kerja Mozek & Kemasan Jubin</option>
                      <option value="Kerja Desain & Produk">Kerja Desain & Kabinet</option>
                      <option value="Kerja Tambak Tanah & Landskap">Tambak Tanah & Landskap</option>
                      <option value="Servis Penyaman Udara & Tapak">Servis Penyaman Udara (HVAC)</option>
                      <option value="Sewa Peralatan Tapak">Sewa Peralatan Tapak</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <label htmlFor="home-loc" className="block text-base font-semibold text-white">
                      Lokasi Tapak Projek
                    </label>
                    <input
                      id="home-loc"
                      type="text"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      placeholder="cth. Kota Bharu, Pasir Mas, dsb."
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-neutral-500 focus-visible:ring-2 focus-visible:ring-white transition-all text-base"
                    />
                  </div>

                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label htmlFor="home-notes" className="block text-base font-semibold text-white">
                    Penerangan Ringkas Projek
                  </label>
                  <textarea
                    id="home-notes"
                    rows={3}
                    value={formNotes}
                    onChange={(e) => setFormNotes(e.target.value)}
                    placeholder="Nyatakan anggaran keluasan, jenis binaan atau sebarang keperluan khusus..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-neutral-500 focus-visible:ring-2 focus-visible:ring-white transition-all text-base resize-none"
                  />
                </div>

                {/* WhatsApp Handoff Notice & Action */}
                <div className="pt-2 space-y-3">
                  <div className="text-xs text-neutral-400 bg-white/5 p-3 rounded-xl border border-white/10">
                    ℹ️ Menekan butang di bawah akan membuka aplikasi WhatsApp dengan mesej yang siap diisi. <strong>Sila tekan butang Send di WhatsApp</strong> untuk menghantarnya kepada ARZ Jati Trading.
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 min-h-[50px] px-7 py-3 rounded-xl bg-white text-neutral-950 font-bold text-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-3 shadow-xl cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 fill-neutral-950" />
                      <span>Hantar Mesej Melalui WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="w-full sm:w-auto min-h-[50px] px-5 py-3 rounded-xl pearl-glass border border-white/20 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer text-base"
                      title="Salin mesej ke papan keratan"
                    >
                      {copySuccess ? <CheckCircle className="w-5 h-5 text-neutral-300" /> : <Copy className="w-5 h-5" />}
                      <span>{copySuccess ? 'Disalin!' : 'Salin Mesej'}</span>
                    </button>
                  </div>
                </div>

              </form>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
