import { IMAGES } from '../assets/images';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  kicker: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  features: string[];
  deliverables: string[];
  whatsappPrompt: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'bina-rumah',
    slug: 'pembinaan-rumah',
    title: 'Pembinaan Rumah',
    kicker: 'Dari Asas Kepada Kediaman Idaman',
    shortDescription: 'Pembinaan rumah banglo dan kediaman mengikut pelan, struktur kukuh bermutu tinggi, dan penyeliaan rapi.',
    fullDescription: 'Kami mengendalikan projek pembinaan kediaman dari fasa kerja tanah, asas konkrit bertetulang, struktur tiang dan rasuk bumi, pemasangan dinding bata, bumbung berkualiti sehinggalah kerja kemasan akhir dan penyerahan kunci.',
    heroImage: IMAGES.serviceBinaRumah,
    features: [
      'Penyediaan tapak & pembinaan asas tapak bina konkrit',
      'Struktur kerangka konkrit bertetulang mengikut spesifikasi',
      'Kerja dinding bata, lepaan simen dan kemasan kalis air',
      'Pemasangan rangka bumbung dan genting berkualiti tinggi',
      'Penyeliaan tapak berjadual oleh ketua pertukangan berpengalaman',
    ],
    deliverables: [
      'Pelan pelaksanaan kerja berfasa',
      'Laporan kemajuan tapak berkala',
      'Binaan siap sedia diduduki',
    ],
    whatsappPrompt: 'Salam ARZ Jati Trading, saya berminat untuk berbincang mengenai pembinaan rumah baharu.',
  },
  {
    id: 'ubah-suai',
    slug: 'pengubahsuaian-pembaikan',
    title: 'Pengubahsuaian & Pembaikan',
    kicker: 'Ruang Baharu, Kehidupan Lebih Selesa',
    shortDescription: 'Memperluas ruang dapur, bilik tambahan, anjung kereta, baik pulih bumbung bocor, dan peremajaan rumah lama.',
    fullDescription: 'Tingkatkan keselesaan dan nilai hartanah anda dengan perkhidmatan ubah suai menyeluruh. Kami meneliti integriti struktur sedia ada sebelum memulakan kerja penambahan ruang atau pembaikan kerosakan.',
    heroImage: IMAGES.serviceUbahSuai,
    features: [
      'Penyambungan ruang dapur basah & dapur kering',
      'Penambahan bilik tidur, anjung kereta (porch) & balkoni',
      'Pembaikan kebocoran bumbung, siling plaster dan paip kumbahan',
      'Pengukuhan dinding retak dan pengubahsuaian fasad hadapan',
    ],
    deliverables: [
      'Pemeriksaan tapak dan penilaian kerosakan',
      'Sebut harga jelas mengikut skop kerja',
      'Kemasan rapi dan pembersihan tapak selepas kerja',
    ],
    whatsappPrompt: 'Salam ARZ Jati Trading, saya ingin mendapatkan sebut harga bagi kerja pengubahsuaian / pembaikan rumah.',
  },
  {
    id: 'kerja-cat',
    slug: 'kerja-cat-kemasan',
    title: 'Kerja Cat & Kemasan Khas',
    kicker: 'Sentuhan Akhir Yang Menyerlah & Tahan Cuaca',
    shortDescription: 'Pakar cat beriktiraf KCC & Sissons: cat kediaman, spray bumbung komersial, cat lantai epoxy & gelanggang sukan.',
    fullDescription: 'Sebagai Aplikator Berdaftar KCC Paints dan Sissons Paints (True Colour Painting Solutions), kami melaksanakan aplikasi cat mengikut sistem teknikal rasmi pengilang dengan persediaan permukaan yang rapi.',
    heroImage: IMAGES.serviceCatKemasan,
    features: [
      'Pengecatan luaran (exterior) tahan cuaca tropika & anti-lumut',
      'Pengecatan dalaman (interior) halus dan mudah dicuci',
      'Penyemburan cat bumbung komersial & bangunan awam (Roof spray painting)',
      'Lantai epoxy tugas berat & penandaan garisan servis perindustrian',
      'Cat khusus gelanggang sukan akrilik multi-guna anti-licin',
    ],
    deliverables: [
      'Pilihan palet warna dan cadangan sistem cat pengilang',
      'Penyediaan permukaan (waterjet & undercoat sealer primer)',
      'Skop aplikasi dan syarat jaminan dibincangkan mengikut projek',
    ],
    whatsappPrompt: 'Salam ARZ Jati Trading, saya ingin bertanya tentang perkhidmatan mengecat (kediaman / komersial / epoxy / bumbung).',
  },
  {
    id: 'kerja-mozek',
    slug: 'kerja-mozek-lantai',
    title: 'Kerja Mozek & Kemasan Jubin',
    kicker: 'Kekemasan Lantai & Ruang Sanitari Moden',
    shortDescription: 'Pemasangan jubin porselin ruang tamu, mozek bilik mandi, dan jubin tahan lasak di anjung kereta.',
    fullDescription: 'Kekemasan lantai bergantung kepada kerataan aras simen dan ketepatan potongan jubin. Pasukan mozek kami yang berpengalaman memastikan jarak nat (grout) sekata dan kemas.',
    heroImage: IMAGES.projectTilingFlooring,
    features: [
      'Pemasangan jubin format besar (2x2 kaki & ke atas) licin berkilat',
      'Kemasan jubin dinding bilik mandi bercorak moden kalis lembapan',
      'Pemasangan jubin antiselip untuk kawasan anjung dan tangga',
      'Kemasan interlocking dan jubin corak berjalur estetik',
    ],
    deliverables: [
      'Penentuan aras laser untuk kerataan maksimum',
      'Pemasangan skirting dinding kemas',
      'Pengisian nat anti-kulat bermutu',
    ],
    whatsappPrompt: 'Salam ARZ Jati Trading, saya ingin bertanya tentang kerja pemasangan jubin dan mozek lantai.',
  },
  {
    id: 'desain-produk',
    slug: 'reka-bentuk-kabinet',
    title: 'Kerja Desain & Produk',
    kicker: 'Visualisasi Ruang & Kemasan Dalaman Khusus',
    shortDescription: 'Perancangan konsep 3D reka bentuk kediaman serta pembuatan kabinet hiasan dan kabinet dapur.',
    fullDescription: 'Kami membantu menterjemahkan idea pemilik kepada visualisasi reka bentuk yang jelas sebelum pembinaan dimulakan, di samping menyediakan produk pertukangan dalaman seperti kabinet dapur dan panel TV moden.',
    heroImage: IMAGES.serviceDesign,
    features: [
      'Ilustrasi visualisasi konsep reka bentuk 3D kediaman',
      'Reka letak ruang dalaman ergonomik dan praktikal',
      'Pembuatan kabinet dapur gantung & kaunter pulau (island)',
      'Panel dinding hiasan (feature wall) marmar & fluted panel',
    ],
    deliverables: [
      'Lakaran perancangan konsep visual',
      'Spesifikasi bahan kemasan dalaman',
      'Pemasangan produk perabot bina dalam',
    ],
    whatsappPrompt: 'Salam ARZ Jati Trading, saya ingin berunding mengenai konsep reka bentuk kediaman dan kerja kabinet.',
  },
  {
    id: 'tambak-landskap',
    slug: 'tambak-tanah-landskap',
    title: 'Kerja Tambak Tanah & Landskap',
    kicker: 'Asas Tapak Stabil & Keindahan Halaman',
    shortDescription: 'Pembekalan tanah merah, perataan jentera berat, saliran tapak serta penanaman rumput karpet.',
    fullDescription: 'Sebelum pembinaan atau pembinaan pagar, tapak tanah perlu dimampatkan dan diratakan dengan betul untuk mengelakkan mendapan. Kami juga menyediakan khidmat hiasan halaman dan penanaman rumput.',
    heroImage: IMAGES.equipmentRental,
    features: [
      'Pembekalan tanah tambak lori tipper',
      'Perataan tapak menggunakan jentera tolak / backhoe',
      'Penyediaan saliran air hujan dan penstabilan tebing',
      'Penanaman rumput padang (cow grass) dan rumput karpet terpilih',
      'Pemasangan laluan pejalan kaki bertekstur luar rumah',
    ],
    deliverables: [
      'Pengiraan isipadu tanah bersesuaian tapak',
      'Kerja jentera berjadual dengan selamat',
      'Halaman kemas dan sedia dibina',
    ],
    whatsappPrompt: 'Salam ARZ Jati Trading, saya memerlukan sebut harga untuk kerja tambak tanah dan perataan tapak.',
  },
  {
    id: 'pembekalan-servis',
    slug: 'servis-penyaman-udara-hvac',
    title: 'Pembekalan, Pemasangan & Servis',
    kicker: 'Penyelenggaraan Sistem Penyaman Udara & Tapak',
    shortDescription: 'Pemasangan unit penyaman udara, servis cucian kimia cooling coil, dan penyelenggaraan peralatan teknikal.',
    fullDescription: 'Pasukan teknikal kami bersedia menyokong keperluan pengudaraan dan kemudahan tapak dengan servis berkala bagi unit penyaman udara kediaman dan pejabat.',
    heroImage: IMAGES.serviceMaintenance,
    features: [
      'Pemasangan unit penyaman udara (indoor & outdoor compressor)',
      'Servis kimia (chemical overhaul) menyeluruh cooling coil & blower',
      'Ujian tekanan gas dan pengisian bahan penyejuk (gas refrigerant)',
      'Pemeriksaan komponen elektronik PCB motor dan suis keselamatan',
    ],
    deliverables: [
      'Pemeriksaan diagnostik sebelum servis',
      'Pembersihan komponen dengan peralatan tekanan terkawal',
      'Semakan fungsi selepas servis',
    ],
    whatsappPrompt: 'Salam ARZ Jati Trading, saya ingin menempah servis penyelenggaraan penyaman udara / peralatan.',
  },
];
