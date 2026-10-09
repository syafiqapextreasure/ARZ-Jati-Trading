import React from 'react';
import { COMPANY_INFO, TeamMember, OperationDepartment } from '../data/company';
import {
  Users,
  Award,
  ShieldCheck,
  FileCheck2,
  Compass,
  Building2,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full text-neutral-100 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">

        {/* ======================================================== */}
        {/* Header Hero */}
        {/* ======================================================== */}
        <section className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400">
            <span className="w-6 h-[2px] bg-neutral-400 inline-block" />
            <span>TENTANG KAMI</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Membina Ruang Berkualiti.<br />
            <span className="text-neutral-300">Menjana Keyakinan Pelanggan.</span>
          </h1>
          <p className="text-xl sm:text-[22px] text-neutral-300 leading-relaxed max-w-3xl">
            ARZ JATI TRADING (KT0244929-D) ialah sebuah entiti perniagaan pembinaan dan kerja sivil bumiputera yang beroperasi di Kelantan, komited memberikan mutu kerja kemas, cekap dan berintegriti tinggi.
          </p>
        </section>

        {/* ======================================================== */}
        {/* Kisah Kami & Latar Belakang (Our Story) */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Latar Belakang Syarikat
            </h2>
            <p className="text-neutral-400 text-base">
              Perjalanan kami bermula daripada kepekaan terhadap keperluan masyarakat terhadap binaan kediaman yang kukuh, selamat dan selesa.
            </p>
            <div className="p-6 rounded-2xl pearl-glass border border-white/15 space-y-3 mt-6">
              <div className="text-sm uppercase tracking-wider text-neutral-400 font-semibold">
                Status Pendaftaran Rasmi
              </div>
              <div className="text-2xl font-bold text-white font-mono">
                {COMPANY_INFO.registrationNo}
              </div>
              <div className="text-sm text-neutral-300 space-y-1">
                <p>Bentuk Perniagaan: {COMPANY_INFO.businessType}</p>
                <p>Status Pendaftaran: <span className="text-white font-semibold">AKTIF</span> (sehingga 27 Oktober 2026)</p>
                <p>Pendaftar Perniagaan Semenanjung Malaysia (SSM EZBIZ)</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-neutral-200 text-lg leading-relaxed">
            <div className="p-8 rounded-3xl pearl-glass border border-white/15 space-y-6">
              <p>
                {COMPANY_INFO.narrative.origin} Setiap projek—sama ada pembinaan sebuah kediaman banglo serba baharu, pengubahsuaian ruang dapur, atau pengecatan komersial berskala besar—dilaksanakan dengan pemantauan tapak yang teliti.
              </p>
              <p>
                {COMPANY_INFO.narrative.expansion}
              </p>
              <p>
                {COMPANY_INFO.narrative.commitment} Melalui gabungan pekerja mahir yang berdisiplin dan pengiktirafan jenama pengilang bahan berkualiti, kami terus memacu pertumbuhan perkhidmatan secara mapan.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* Visi & Misi (Full Text from PDF Page 11) */}
        {/* ======================================================== */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400">
              <span className="w-6 h-[2px] bg-neutral-400 inline-block" />
              <span>HALA TUJU KORPORAT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Visi & Misi Syarikat
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Visi */}
            <div className="p-8 sm:p-10 rounded-3xl pearl-glass border border-white/20 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                  <Compass className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Visi Kami
                </h3>
                <p className="text-neutral-200 text-lg sm:text-[20px] leading-relaxed">
                  "{COMPANY_INFO.visi}"
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                Teras Aspirasi Jangka Panjang
              </div>
            </div>

            {/* Misi */}
            <div className="p-8 sm:p-10 rounded-3xl pearl-glass border border-white/20 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Misi Kami
                </h3>
                <p className="text-neutral-200 text-lg sm:text-[20px] leading-relaxed">
                  "{COMPANY_INFO.misi}"
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                Tanggungjawab Kualiti & Kelestarian
              </div>
            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* Carta Organisasi & Pengurusan (Org Chart from PDF Page 9) */}
        {/* ======================================================== */}
        <section className="space-y-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400">
              <span className="w-6 h-[2px] bg-neutral-400 inline-block" />
              <span>PENGURUSAN UTAMA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Kenali Pasukan Kami
            </h2>
            <p className="text-neutral-300 text-lg sm:text-[20px] max-w-2xl">
              Struktur kepimpinan dan pengurusan projek yang menyelia setiap fasa pelaksanaan tapak.
            </p>
          </div>

          {/* Org Chart Visualization */}
          <div className="space-y-8">
            
            {/* CEO Card - Top Level */}
            <div className="max-w-xl mx-auto">
              <div className="p-8 rounded-3xl pearl-glass border-2 border-white/30 text-center space-y-3 shadow-2xl">
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 mx-auto flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                  Chief Executive Officer
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Muhammad Mufaridun Asyraff Bin Abdul Rahman
                </h3>
                <p className="text-sm text-neutral-300">
                  Pemilik Perniagaan & Peneraju Operasi Keseluruhan
                </p>
              </div>
            </div>

            {/* Connecting Vertical Stem */}
            <div className="hidden sm:flex justify-center">
              <div className="w-[2px] h-10 bg-white/25" />
            </div>

            {/* Department Heads (3 Columns below CEO) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Architecture */}
              <div className="p-6 rounded-2xl pearl-glass border border-white/15 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 mx-auto flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-neutral-300" />
                </div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                  Architecture
                </div>
                <h4 className="text-xl font-bold text-white">
                  Nurul Fatimah Binti Ahmad
                </h4>
                <p className="text-sm text-neutral-400">
                  Perancangan Seni Bina & Reka Bentuk
                </p>
              </div>

              {/* Marketing Manager */}
              <div className="p-6 rounded-2xl pearl-glass border border-white/15 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 mx-auto flex items-center justify-center">
                  <Award className="w-8 h-8 text-neutral-300" />
                </div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                  Marketing Manager
                </div>
                <h4 className="text-xl font-bold text-white">
                  Ahmad Faiz Bin Mohd Nazri
                </h4>
                <p className="text-sm text-neutral-400">
                  Pengurusan Pemasaran & Khidmat Pelanggan
                </p>
              </div>

              {/* Sales Director */}
              <div className="p-6 rounded-2xl pearl-glass border border-white/15 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 mx-auto flex items-center justify-center">
                  <FileCheck2 className="w-8 h-8 text-neutral-300" />
                </div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                  Sales Director
                </div>
                <h4 className="text-xl font-bold text-white">
                  Nor Aina Binti Ahmad
                </h4>
                <p className="text-sm text-neutral-400">
                  Pengarah Jualan & Perundingan Kontrak
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* Bahagian Operasi / Pasukan Operasi (From PDF Page 10) */}
        {/* ======================================================== */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400">
                <span className="w-6 h-[2px] bg-neutral-400 inline-block" />
                <span>BAHAGIAN OPERASI</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Kekuatan Tenaga Lapangan
              </h2>
            </div>
            <div className="text-right">
              <div className="text-3xl font-extrabold text-white font-mono">43 Orang</div>
              <div className="text-sm text-neutral-400">Jumlah Pekerja Operasi Khusus</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.operationsWorkforce.map((dept, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl pearl-glass border border-white/15 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{dept.name}</h3>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white font-mono font-bold text-sm border border-white/20">
                      {dept.headcount} orang
                    </span>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {dept.description}
                  </p>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-white h-full rounded-full"
                    style={{ width: `${(dept.headcount / 11) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* Pengiktirafan Jenama Cat (Brand Applicator - Pages 6 & 7) */}
        {/* ======================================================== */}
        <section className="space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400">
              <span className="w-6 h-[2px] bg-neutral-400 inline-block" />
              <span>PENGIKTIRAFAN TEKNIKAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Aplikator Berdaftar Pengilang
            </h2>
            <p className="text-neutral-300 text-lg sm:text-[20px] max-w-2xl">
              Pengesahan kelayakan dan surat rasmi lantikan sebagai aplikator berwibawa bagi aplikasi cat berwaranti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_INFO.credentials.map((cred, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl pearl-glass border border-white/20 space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <span className="px-3 py-1 rounded-md bg-white/15 text-white text-xs font-semibold uppercase tracking-wider">
                      {cred.statusTitle}
                    </span>
                    <span className="text-sm text-neutral-400">
                      Bertarikh: {cred.dated}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{cred.brandName}</h3>
                  <p className="text-sm text-neutral-300">{cred.issuer}</p>
                  {cred.referenceNo && (
                    <p className="text-xs font-mono text-neutral-400">No. Rujukan: {cred.referenceNo}</p>
                  )}
                  <div className="pt-2 text-base text-neutral-200 leading-relaxed space-y-2">
                    <p><strong>Skop:</strong> {cred.scope}</p>
                    <p className="text-sm text-neutral-400"><strong>Catatan:</strong> {cred.notes}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-neutral-400">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Surat Pengiktirafan Rasmi Tersimpan Dalam Fail Syarikat</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* CTA Section */}
        {/* ======================================================== */}
        <section className="p-8 sm:p-14 rounded-3xl pearl-glass border border-white/25 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Berminat Melantik Pasukan Kami?
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Kami sedia hadir ke tapak anda untuk taklimat teknikal, semakan keluasan, dan cadangan sebut harga telus.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/60148196216?text=Salam%20ARZ%20Jati%20Trading%2C%20saya%20ingin%20berbincang%20mengenai%20pelantikan%20kontraktor."
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[50px] px-8 py-3.5 rounded-xl bg-white text-neutral-950 font-bold text-lg hover:bg-neutral-200 transition-colors shadow-xl"
            >
              Hubungi WhatsApp (014-819 6216)
            </a>
            <button
              onClick={() => onNavigate('/projek')}
              className="min-h-[50px] px-7 py-3.5 rounded-xl pearl-glass border border-white/25 text-white font-semibold text-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              Lihat Hasil Kerja Kami
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
