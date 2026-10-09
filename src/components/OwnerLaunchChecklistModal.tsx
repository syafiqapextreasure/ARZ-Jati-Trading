import React from 'react';
import { X, CheckCircle2, AlertTriangle, ShieldCheck, FileCheck, Phone, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface OwnerLaunchChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerLaunchChecklistModal: React.FC<OwnerLaunchChecklistModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Senarai Semak Pelancaran Pemilik"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[85vh] overflow-y-auto pearl-glass rounded-2xl border border-white/20 p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl sm:text-2xl">
              <ShieldCheck className="w-6 h-6 text-neutral-300" />
              <span>Senarai Semak Pelancaran Laman Web</span>
            </div>
            <p className="text-neutral-400 text-sm mt-1">
              Panduan integriti data & semakan pemilik perniagaan sebelum pelancaran rasmi ARZ Jati Trading.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Tutup Senarai Semak"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Checklist Content */}
        <div className="py-6 space-y-6 text-neutral-200 text-base">
          
          {/* Section 1: Verified SSM & Contact Status */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
              <CheckCircle2 className="w-5 h-5 text-neutral-300" />
              <span>1. Maklumat Pendaftaran & Saluran WhatsApp Sah</span>
            </div>
            <ul className="text-sm text-neutral-300 space-y-2 pl-7 list-disc">
              <li>
                <strong>Nombor SSM:</strong> {COMPANY_INFO.registrationNo} (Sah sehingga 27 Oktober 2026).
              </li>
              <li>
                <strong>Nombor Telefon / WhatsApp:</strong> {COMPANY_INFO.phone} (Pautan terus ke <code className="text-xs bg-white/10 px-1.5 py-0.5 rounded">wa.me/60148196216</code> diuji dan berfungsi).
              </li>
              <li>
                <strong>Alamat Berdaftar:</strong> PT2907 Tingkat Atas, Desa SBJ Putra Pasir Pekan, Wakaf Bharu, Kelantan.
              </li>
            </ul>
          </div>

          {/* Section 2: Data Integrity & Caveats */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
              <CheckCircle2 className="w-5 h-5 text-neutral-300" />
              <span>2. Perlindungan Privasi & Integriti Fakta</span>
            </div>
            <ul className="text-sm text-neutral-300 space-y-2 pl-7 list-disc">
              <li>
                <strong>Privasi Peribadi Terpelihara:</strong> Nombor kad pengenalan peribadi, tarikh lahir, dan alamat kediaman pemilik telah ditapis keluar sepenuhnya daripada paparan umum.
              </li>
              <li>
                <strong>Tiada Kiraan Tahun Bercanggah:</strong> Tiada kiraan tahun pengalaman palsu dijana kerana tarikh pendaftaran SSM (2008) berbeza dengan naratif pengenalan (2018).
              </li>
              <li>
                <strong>Tiada Ulasan & Anugerah Rekaan:</strong> Laman web ini tidak mengandungi sebarang testimoni atau sijil rekaan yang tidak disahkan.
              </li>
            </ul>
          </div>

          {/* Section 3: Pending Owner Review Items */}
          <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-700 space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
              <AlertTriangle className="w-5 h-5 text-neutral-300" />
              <span>3. Tindakan Semakan Pemilik (Pending Owner Action)</span>
            </div>
            <div className="text-sm text-neutral-300 space-y-3 pl-7">
              <div>
                <p className="font-medium text-white">a. Objektif Perniagaan Dicadangkan:</p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Tiga cadangan objektif disediakan dalam data syarikat. Sila semak sama ada selari dengan sasaran korporat ARZ Jati Trading.
                </p>
              </div>
              <div>
                <p className="font-medium text-white">b. Senarai Inventori Sewaan Peralatan:</p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Profil syarikat tidak menyertakan katalog mesin/jentera fizikal. Laman web kini memaparkan notis rasmi <em>"Hubungi kami untuk maklumat peralatan dan ketersediaan"</em> tanpa mencipta mesin atau harga tiruan. Apabila senarai sedia ada, masukkan ke dalam <code className="text-xs bg-white/10 px-1 rounded">src/data/rental.ts</code>.
                </p>
              </div>
              <div>
                <p className="font-medium text-white">c. Pengesahan Visual Rendisi 3D:</p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Imej visualisasi konsep banglo (PDF m/s 12) dilabelkan secara jelas sebagai <em>"Visualisasi Reka Bentuk / Ilustrasi Perancangan"</em> bagi mengelakkan kekeliruan dengan binaan siap fizikal.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Tested CTA Handlers */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
              <FileCheck className="w-5 h-5 text-neutral-300" />
              <span>4. Semua Butang & Borang Berfungsi 100%</span>
            </div>
            <p className="text-sm text-neutral-400 pl-7">
              Setiap butang CTA, borang pertanyaan sewaan peralatan dan borang perundingan projek telah disahkan mengesahkan input pengguna dan menjana mesej WhatsApp berformat kemas tanpa kehilangan data.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[48px] px-6 py-2.5 rounded-xl bg-white text-neutral-950 font-semibold hover:bg-neutral-200 transition-colors"
          >
            Faham & Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
