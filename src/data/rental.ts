export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  photo?: string;
  specs?: string[];
  rentalUnit?: string;
  rate?: string;
  availability: 'Hubungi untuk semakan' | 'Tersedia' | 'Sedang disewa';
  notes?: string;
}

/**
 * CATALOGUE SCHEMA
 * Note per project brief: No inventory list was supplied in official company documents.
 * We do not invent fictional machines or fictional pricing.
 * Empty catalogue demonstrates truthful state with clear prompt for owner population.
 */
export const RENTAL_CATALOGUE: EquipmentItem[] = [
  // Ready schema for owner to populate with real inventory when available
];

export const RENTAL_FAQS = [
  {question: 'Bagaimana hendak menyemak sewaan peralatan tapak bina?', answer: 'Nyatakan jenis peralatan, kuantiti, tarikh mula dan tamat, serta lokasi tapak dalam borang pertanyaan. WhatsApp akan dibuka dengan ringkasan untuk anda hantar kepada ARZ Bina. Pasukan kami akan menyemak keperluan dan ketersediaan sebelum mengesahkan sewaan.'},
  {question: 'Berapakah kadar sewaan dan kos penghantaran?', answer: 'Kadar perlu disemak mengikut jenis peralatan, tempoh sewaan, lokasi dan akses tapak. Minta pecahan sebut harga termasuk penghantaran, pengambilan serta pengendali jika diperlukan. Tiada kadar tetap atau bayaran atas talian dipaparkan di laman ini.'},
  {question: 'Bolehkah saya bertanya untuk tapak di Kelantan atau Terengganu?', answer: 'ARZ Bina berpangkalan di Wakaf Bharu, Kelantan. Berikan daerah atau pin lokasi tapak anda, termasuk bagi pertanyaan di Terengganu. Liputan penghantaran, jadual dan ketersediaan perlu disahkan oleh pasukan kami mengikut lokasi dan keperluan sebenar.'},
  {question: 'Adakah menghantar borang bermaksud tempahan sudah disahkan?', answer: 'Belum. Borang ini menyediakan mesej pertanyaan WhatsApp sahaja. Anda perlu menekan Hantar dalam WhatsApp, kemudian mendapatkan pengesahan jenis peralatan, tarikh, kadar dan syarat sewaan daripada pasukan ARZ Bina sebelum membuat persediaan tapak.'},
];

export interface RentalEnquiryFormState {
  equipment: string;
  quantity: number;
  startDate: string;
  endDate: string;
  siteLocation: string;
  message: string;
}

export const INITIAL_RENTAL_ENQUIRY: RentalEnquiryFormState = {
  equipment: '',
  quantity: 1,
  startDate: '',
  endDate: '',
  siteLocation: '',
  message: '',
};

export function buildRentalWhatsAppUrl(enquiry: RentalEnquiryFormState): string {
  const text = [
    `*PERTANYAAN SEWAAN PERALATAN - ARZ JATI TRADING*`,
    ``,
    `*Peralatan / Keperluan:* ${enquiry.equipment || 'Pertanyaan Am Peralatan'}`,
    `*Kuantiti:* ${enquiry.quantity}`,
    `*Tarikh Mula:* ${enquiry.startDate || 'Akan dimaklumkan'}`,
    `*Tarikh Tamat:* ${enquiry.endDate || 'Akan dimaklumkan'}`,
    `*Lokasi Tapak:* ${enquiry.siteLocation || 'Kelantan'}`,
    enquiry.message ? `*Catatan Tambahan:* ${enquiry.message}` : '',
    ``,
    `Mohon maklumat ketersediaan dan kadar sewaan. Terima kasih!`,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/60148196216?text=${encodeURIComponent(text)}`;
}

export function buildGeneralWhatsAppUrl(
  serviceName: string = 'Perbincangan Projek',
  notes: string = ''
): string {
  const text = [
    `*PERTANYAAN PERKHIDMATAN - ARZ JATI TRADING*`,
    ``,
    `*Skop / Perkhidmatan:* ${serviceName}`,
    notes ? `*Maklumat / Keperluan:* ${notes}` : `Saya ingin membincangkan projek bersama ARZ Jati Trading.`,
    ``,
    `Mohon maklum balas bagi perbincangan lanjut. Terima kasih!`,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/60148196216?text=${encodeURIComponent(text)}`;
}
