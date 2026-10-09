export interface TeamMember {
  name: string;
  role: string;
  titleMs: string;
  department: string;
}

export interface OperationDepartment {
  name: string;
  headcount: number;
  description: string;
}

export interface BrandCredential {
  brandName: string;
  issuer: string;
  statusTitle: string;
  dated: string;
  referenceNo?: string;
  scope: string;
  notes: string;
}

export interface CompanyObjective {
  id: string;
  title: string;
  description: string;
  proposedPendingOwnerReview: boolean;
}

export const COMPANY_INFO = {
  name: 'ARZ JATI TRADING',
  brandName: 'ARZ BINA',
  registrationNo: '200803154273 (KT0244929-D)',
  businessType: 'Pemilikan Tunggal (Sole Proprietorship)',
  ssmStartDate: '20-07-2008',
  ssmExpiryDate: '27-10-2026',
  ssmStatus: 'AKTIF',
  ssmUpdateDate: '31-01-2023',
  address: {
    line1: 'PT2907 Tingkat Atas',
    line2: 'Desa SBJ Putra Pasir Pekan',
    postcode: '16250',
    town: 'Wakaf Bharu',
    state: 'Kelantan',
    full: 'PT2907 Tingkat Atas, Desa SBJ Putra Pasir Pekan, 16250 Wakaf Bharu, Kelantan',
  },
  phone: '014-819 6216',
  phoneClean: '+60148196216',
  whatsappUrl: 'https://wa.me/60148196216',
  tagline: 'Bina Impian. Cipta Keyakinan.',
  heroSubheadline: 'Pembinaan, pengubahsuaian dan pembaikian untuk ruang yang lebih baik.',
  
  // Geographical outreach
  headquarters: 'Wakaf Bharu, Kelantan',
  operatingRegions: ['Kelantan', 'Terengganu', 'Perak', 'Kedah', 'Pulau Pinang', 'Kuala Lumpur'],
  
  // Vision & Mission from Company Profile (Page 11)
  visi: 'Menjadi syarikat pembinaan yang dipercayai untuk pembangunan dan perkhidmatan serta melahirkan pekerja mahir untuk mengejar budaya kerja kecemerlangan.',
  misi: 'Menjadi sebuah syarikat pembinaan, pembekalan dan perkhidmatan yang berjaya dan terkenal dengan menyediakan perkhidmatan berkualiti tinggi dalam pengubahsuaian dan pembinaan yang tiada tandingan serta mampu bergerak ke hadapan dengan perkembangan teknologi semasa tanpa mengabaikan tanggungjawab sosial serta memelihara keharmonian alam sekitar.',
  
  // Background narrative from Company Profile (Page 8)
  narrative: {
    origin: 'ARZ JATI TRADING beroperasi berasaskan komitmen teguh untuk merealisasikan kediaman idaman dan kemudahan berkualiti bagi komuniti setempat di Kelantan dan negeri-negeri sekitar.',
    expansion: 'Bermula dengan projek-projek pembinaan dan pengubahsuaian kediaman di Kelantan, ARZ JATI TRADING telah meluaskan keupayaan operasi ke Terengganu, Perak, Kedah, Pulau Pinang, dan Kuala Lumpur.',
    commitment: 'Kami komited memberikan perkhidmatan yang cekap, kemas, dan dipercayai dengan penyeliaan tapak yang teliti demi kepuasan pelanggan serta pembangunan komuniti.',
  },

  // Proposed objectives (flagged for owner validation)
  objectives: [
    {
      id: 'obj-1',
      title: 'Kualiti Kemasan Piawaian Industri',
      description: 'Menyediakan hasil pertukangan dan pengecatan berprestasi tinggi yang tahan cuaca mengikut sistem bahan bertauliah.',
      proposedPendingOwnerReview: true,
    },
    {
      id: 'obj-2',
      title: 'Ketepatan Jadual & Pengurusan Tapak',
      description: 'Memastikan garis masa pembinaan dipantau secara berdisiplin bersama komunikasi berkala kepada pemilik projek.',
      proposedPendingOwnerReview: true,
    },
    {
      id: 'obj-3',
      title: 'Integriti & Ketelusan Kos',
      description: 'Menyediakan sebut harga yang jelas, spesifikasi bahan terperinci, dan bimbingan teknikal jujur tanpa kos tersembunyi.',
      proposedPendingOwnerReview: true,
    },
  ] as CompanyObjective[],

  // Key leadership (from Org Chart Page 9)
  team: [
    {
      name: 'Muhammad Mufaridun Asyraff Bin Abdul Rahman',
      role: 'Chief Executive Officer',
      titleMs: 'Ketua Pegawai Eksekutif / Pemilik Perniagaan',
      department: 'Pengurusan Eksekutif',
    },
    {
      name: 'Ahmad Faiz Bin Mohd Nazri',
      role: 'Marketing Manager',
      titleMs: 'Pengurus Pemasaran',
      department: 'Pemasaran & Khidmat Pelanggan',
    },
    {
      name: 'Nurul Fatimah Binti Ahmad',
      role: 'Architecture',
      titleMs: 'Reka Bentuk Seni Bina',
      department: 'Perancangan & Reka Bentuk',
    },
    {
      name: 'Nor Aina Binti Ahmad',
      role: 'Sales Director',
      titleMs: 'Pengarah Jualan',
      department: 'Jualan & Hubungan Klien',
    },
  ] as TeamMember[],

  // Operations Workforce Breakdown (Page 10)
  operationsWorkforce: [
    {
      name: 'Kerja Pembinaan',
      headcount: 11,
      description: 'Struktur bangunan, kerja asas konkrit, bata, rasuk, dan pertukangan am.',
    },
    {
      name: 'Kerja Cat',
      headcount: 10,
      description: 'Aplikasi cat dinding, spray bumbung komersial, epoxy lantai, dan cat gelanggang.',
    },
    {
      name: 'Kerja Tambak Tanah & Landskap',
      headcount: 8,
      description: 'Perataan tapak bina, penambakan tanah, saliran, dan penanaman rumput karpet.',
    },
    {
      name: 'Kerja Mozek',
      headcount: 6,
      description: 'Pemasangan jubin porselin, jubin dinding bilik air, dan kemasan anjung kereta.',
    },
    {
      name: 'Kerja Pembekalan, Pemasangan & Servis',
      headcount: 5,
      description: 'Servis penyaman udara (HVAC), peralatan sokongan tapak, dan pemasangan sanitari.',
    },
    {
      name: 'Kerja Desain / Produk',
      headcount: 3,
      description: 'Visualisasi 3D konsep, rekaan kabinet hiasan dalaman, dan perancangan susun atur.',
    },
  ] as OperationDepartment[],

  // Brand Applicator Authorizations (Pages 6 & 7)
  credentials: [
    {
      brandName: 'KCC Paints Sdn. Bhd.',
      issuer: 'KCC Paints Sdn. Bhd. (Kota Kemuning, Shah Alam)',
      statusTitle: 'KCC Approved Applicator',
      dated: '10 Mac 2026',
      referenceNo: 'CO/L05693/KK/26',
      scope: 'Aplikasi produk cat jenama KCC dengan sokongan teknikal dan waranti produk.',
      notes: 'Diperakui sebagai kontraktor berwibawa, penyeliaan teliti dan memenuhi kepuasan pengilang.',
    },
    {
      brandName: 'Sissons Paints (True Colour Painting Solutions)',
      issuer: 'True Colour Painting Solutions Sdn. Bhd. (Nilai, Negeri Sembilan)',
      statusTitle: 'Aplikator Yang Diiktiraf',
      dated: '2 November 2023',
      scope: 'Pelaksanaan sistem pengecatan disyorkan jenama Sissons Paints.',
      notes: 'Tertakluk kepada pemeriksaan tapak Pasukan Teknikal Cat dan surat jaminan bahan sah.',
    },
  ] as BrandCredential[],
};
