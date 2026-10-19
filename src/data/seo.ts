import {PROJECTS} from './projects';
import {COMPANY_INFO} from './company';

export const SITE_URL = 'https://arzbina.com';
export const FAQS = [
  {question:'Bagaimana hendak bina rumah atas tanah sendiri?',answer:'Mulakan dengan semakan hak milik dan keadaan tanah, lokasi tapak, keperluan ruang serta bajet. Kongsi maklumat ini dengan ARZ Bina untuk membincangkan pelan, skop kerja, semakan tapak dan sebut harga sebelum membuat keputusan.'},
  {question:'Adakah ARZ Bina menerima projek di Kelantan dan Terengganu?',answer:'ARZ Bina berpangkalan di Wakaf Bharu, Kelantan. Pertanyaan projek di Kelantan dan Terengganu boleh dibincangkan dengan pasukan kami. Ketersediaan, lawatan tapak dan pelaksanaan bergantung pada lokasi serta skop projek.'},
  {question:'Berapakah kos bina rumah atas tanah sendiri?',answer:'Kos bergantung pada keluasan, reka bentuk, keadaan tanah, akses tapak, bahan dan tahap kemasan. Sebut harga perlu disediakan mengikut skop sebenar; hubungi ARZ Bina dengan lokasi, anggaran keluasan dan pelan jika ada.'},
  {question:'Apakah maklumat yang diperlukan untuk mendapatkan sebut harga?',answer:'Sediakan nama, nombor telefon, lokasi tapak, jenis kerja, anggaran keluasan, bajet sasaran dan pelan atau gambar tapak jika ada. Hantar maklumat melalui borang pertanyaan atau WhatsApp 014-819 6216.'},
  {question:'Adakah kerja ubah suai, cat dan kemasan jubin turut disediakan?',answer:'Ya. Bidang perkhidmatan ARZ Bina merangkumi pembinaan rumah, pengubahsuaian dan pembaikan, kerja cat, jubin, reka bentuk dan kabinet, kerja tanah serta pembekalan, pemasangan dan servis.'},
  {question:'Berapa lama tempoh pembinaan rumah?',answer:'Tempoh ditentukan selepas semakan pelan, keluasan, keadaan tapak dan skop kerja. Kelulusan berkaitan, cuaca serta bekalan bahan juga mempengaruhi jadual. Dapatkan jadual bertulis yang dipersetujui sebelum kerja bermula.'},
];
export const REGION_PAGES = [
  {path:'/bina-rumah-kelantan',name:'Kelantan',title:'Bina Rumah Atas Tanah Sendiri di Kelantan',intro:'Bincangkan pembinaan rumah anda bersama ARZ Bina, kontraktor yang berpangkalan di Wakaf Bharu. Kami membantu anda memperincikan keperluan ruang, skop dan kemasan untuk rumah di atas tanah sendiri.',areas:'Wakaf Bharu, Tumpat, Kota Bharu, Pasir Mas dan Bachok',details:'Bagi tapak di Kelantan, berikan lokasi atau pin peta serta gambar akses masuk. Maklumat keadaan tanah dan persekitaran membantu perbincangan awal tentang kerja tanah, saliran, penghantaran bahan dan keperluan pembinaan.',note:'Pejabat kami terletak di Kampung Pasir Pekan, Wakaf Bharu, Kelantan.'},
  {path:'/bina-rumah-terengganu',name:'Terengganu',title:'Bina Rumah Atas Tanah Sendiri di Terengganu',intro:'Ada tanah di Terengganu dan sedang merancang rumah sendiri? ARZ Bina menerima pertanyaan untuk semakan keperluan projek, lokasi dan kesesuaian skop pembinaan.',areas:'Besut, Setiu, Kuala Nerus, Kuala Terengganu dan kawasan berdekatan',details:'Untuk projek di Terengganu, semakan lokasi, akses penghantaran, penyelarasan pasukan serta jadual lawatan tapak dibuat terlebih dahulu. Kongsi pin peta, pelan jika ada dan keutamaan kemasan supaya skop boleh dibincangkan dengan jelas.',note:'Urusan awal diselaraskan dari pejabat Wakaf Bharu, Kelantan. Hubungi kami untuk menyemak ketersediaan projek di daerah anda.'},
];
export const STATIC_ROUTES=['/','/tentang-kami','/perkhidmatan','/projek','/sewa-peralatan','/hubungi-kami','/privasi',...REGION_PAGES.map(r=>r.path)];
export const INDEXABLE_ROUTES=[...STATIC_ROUTES.filter(p=>p!='/privasi'),...PROJECTS.map(p=>'/projek/'+p.slug)];
const pageInfo:Record<string,[string,string]>={
 '/':['Bina Rumah Atas Tanah Sendiri Kelantan & Terengganu | ARZ Bina','ARZ Bina / ARZ Jati Trading: bina rumah atas tanah sendiri, ubah suai, cat dan kemasan di Kelantan serta pertanyaan projek Terengganu. Hubungi 014-819 6216.'],
 '/tentang-kami':['Tentang ARZ Bina | Kontraktor Rumah Wakaf Bharu, Kelantan','Kenali ARZ Jati Trading: pasukan, visi, misi dan perkhidmatan pembinaan rumah, pengubahsuaian serta kemasan dari Wakaf Bharu, Kelantan.'],
 '/perkhidmatan':['Bina Rumah, Ubah Suai & Kemasan Kelantan | ARZ Bina','Terokai perkhidmatan ARZ Bina: pembinaan rumah, ubah suai, kerja cat, jubin, kabinet, kerja tanah dan servis. Bincangkan skop projek anda.'],
 '/projek':['Portfolio Projek Rumah & Kemasan | ARZ Bina Kelantan','Lihat portfolio pembinaan rumah, kolam renang, kerja cat, epoxy, jubin dan gelanggang sukan ARZ Jati Trading.'],
 '/hubungi-kami':['Hubungi ARZ Bina | Wakaf Bharu, Kelantan','Hubungi ARZ Bina di 014-819 6216. Lihat lokasi pejabat Kampung Pasir Pekan, Wakaf Bharu dan hantar pertanyaan projek Kelantan atau Terengganu.'],
 '/sewa-peralatan':['Pertanyaan Sewaan Peralatan Tapak | ARZ Bina','Bincangkan keperluan sewaan peralatan tapak bina bersama ARZ Bina. Semak jenis peralatan, tempoh, lokasi dan ketersediaan melalui WhatsApp.'],
 '/privasi':['Dasar Privasi | ARZ Bina','Dasar privasi dan komunikasi untuk pertanyaan projek melalui laman web ARZ Bina.'],
};
export function getSeo(rawPath:string){
 const path=rawPath.replace(/\/+$/,'')||'/';
 const project=PROJECTS.find(p=>'/projek/'+p.slug===path);
 const region=REGION_PAGES.find(r=>r.path===path);
 const known=STATIC_ROUTES.includes(path)||!!project;
 const [title,description]=region?[`${region.title} | ARZ Bina`,`Bina rumah atas tanah sendiri di ${region.name} bersama ARZ Bina. Semak lokasi tapak, skop dan sebut harga. Hubungi 014-819 6216.`]:project?[`${project.title} | Portfolio ARZ Bina`,`${project.shortSummary} Lihat gambar dan skop projek ARZ Jati Trading serta bincangkan keperluan kerja serupa.`]:pageInfo[path]||['Halaman Tidak Ditemui | ARZ Bina','Halaman ini tidak dijumpai. Kembali ke laman utama ARZ Bina.'];
 const canonical=SITE_URL+(path==='/'?'/':path);
 const business={'@type':'GeneralContractor','@id':SITE_URL+'/#business',name:'ARZ Bina',alternateName:'ARZ Jati Trading',legalName:COMPANY_INFO.name,url:SITE_URL+'/',telephone:COMPANY_INFO.phoneClean,email:'arzbina.marketing@gmail.com',logo:SITE_URL+'/logo-arz.png',image:SITE_URL+'/social-cover.jpg',description:'Bina rumah atas tanah sendiri, pengubahsuaian dan kemasan. Berpangkalan di Wakaf Bharu, Kelantan; pertanyaan projek Kelantan dan Terengganu.',address:{'@type':'PostalAddress',streetAddress:COMPANY_INFO.address.line1+', '+COMPANY_INFO.address.line2,postalCode:COMPANY_INFO.address.postcode,addressLocality:'Wakaf Bharu',addressRegion:'Kelantan',addressCountry:'MY'},geo:{'@type':'GeoCoordinates',latitude:6.1143099,longitude:102.2139354},hasMap:COMPANY_INFO.mapUrl,areaServed:[{'@type':'State',name:'Kelantan'},{'@type':'State',name:'Terengganu'}],sameAs:[COMPANY_INFO.mapUrl]};
 const graph:any[]=[business,{'@type':'WebSite','@id':SITE_URL+'/#website',name:'ARZ Bina',alternateName:'ARZ Jati Trading',url:SITE_URL+'/',inLanguage:'ms-MY',publisher:{'@id':SITE_URL+'/#business'}},{'@type':path==='/hubungi-kami'?'ContactPage':path==='/tentang-kami'?'AboutPage':'WebPage','@id':canonical+'#webpage',url:canonical,name:title,description,inLanguage:'ms-MY',isPartOf:{'@id':SITE_URL+'/#website'},about:{'@id':SITE_URL+'/#business'}}];
 if(path!=='/'&&known)graph.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Laman Utama',item:SITE_URL+'/'},...(project?[{'@type':'ListItem',position:2,name:'Projek',item:SITE_URL+'/projek'}]:[]),{'@type':'ListItem',position:project?3:2,name:project?.title||region?.title||title.split('|')[0].trim(),item:canonical}]});
 if(path==='/'||region)graph.push({'@type':'FAQPage',mainEntity:FAQS.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))});
 return {path,title,description,canonical,robots:known&&path!=='/privasi'?'index,follow,max-image-preview:large':'noindex,follow',schema:{'@context':'https://schema.org','@graph':graph}};
}
