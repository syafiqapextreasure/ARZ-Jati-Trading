import React, {useState} from 'react';
import {MapPin, Phone, Mail, ArrowUpRight} from 'lucide-react';
import {WhatsAppIcon} from '../components/WhatsAppIcon';
import {COMPANY_INFO} from '../data/company';

export const ContactPage = () => {
  const [prepared,setPrepared]=useState('');
  const mapQuery=encodeURIComponent('ARZ Bina PT2907 Desa SBJ Putra Pasir Pekan Wakaf Bharu Kelantan');
  const submit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const text=['Salam ARZ Jati Trading,',`Nama: ${String(data.get('name')).trim()}`,`Telefon: ${String(data.get('phone')).trim()}`,data.get('email')?`E-mel: ${data.get('email')}`:'',`Perkara: ${data.get('subject')}`,`Mesej: ${String(data.get('message')).trim()}`].filter(Boolean).join('\n');
    setPrepared(`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`);
  };
  return <div className="light-section contact-page">
    <div className="contact-wrap">
      <p className="contact-kicker">HUBUNGI KAMI</p>
      <h1>Mari Bincang Projek Anda</h1>
      <p className="contact-intro">Ada idea, pelan atau soalan? Kami sedia membantu anda merancang langkah seterusnya.</p>
      <div className="contact-map"><iframe title="Lokasi ARZ Bina di Google Maps" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
      <div className="contact-columns">
        <section><h2>Ada Soalan?</h2><p>Isi borang di bawah untuk menyediakan pertanyaan anda melalui WhatsApp.</p>
          <form onSubmit={submit} onChange={()=>setPrepared('')} className="contact-form">
            <label htmlFor="contact-name">Nama penuh *</label><input id="contact-name" name="name" autoComplete="name" required maxLength={120}/>
            <label htmlFor="contact-phone">Nombor telefon *</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" required maxLength={30}/>
            <label htmlFor="contact-email">E-mel</label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={160}/>
            <label htmlFor="contact-subject">Perkara</label><select id="contact-subject" name="subject"><option>Pertanyaan projek</option><option>Pembinaan rumah</option><option>Pengubahsuaian & kemasan</option><option>Sewaan peralatan</option><option>Pertanyaan lain</option></select>
            <label htmlFor="contact-message">Mesej *</label><textarea id="contact-message" name="message" rows={5} required maxLength={2000}/>
            <button type="submit" className="contact-submit"><WhatsAppIcon/> Sediakan Mesej WhatsApp</button>
            <p className="contact-help">Mesej belum dihantar. Anda boleh menyemak dan menghantarnya dalam WhatsApp.</p>
            {prepared&&<div className="contact-ready" role="status"><p>Mesej anda sedia untuk disemak.</p><a href={prepared} target="_blank" rel="noopener noreferrer">Buka WhatsApp <ArrowUpRight size={18}/></a></div>}
          </form>
        </section>
        <aside><h2>Jom Datang ke Pejabat Kami</h2><p className="contact-detail"><MapPin/><span>{COMPANY_INFO.address.full}</span></p><p className="contact-detail"><Phone/><span><a href="tel:+60148196216">014-819 6216</a><br/><a href="tel:+601119225021">011-1922 5021</a></span></p><p className="contact-detail"><Mail/><a href="mailto:arzbina.marketing@gmail.com">arzbina.marketing@gmail.com</a></p><a className="map-directions" href={`${COMPANY_INFO.mapUrl}`} target="_blank" rel="noopener noreferrer">Buka Google Maps <ArrowUpRight size={18}/></a><div className="contact-careers"><h2>Jom Kerja Dengan Kami</h2><p>Hantarkan resume atau CV anda kepada <a href="mailto:arzbina.marketing@gmail.com">arzbina.marketing@gmail.com</a>.</p></div></aside>
      </div>
    </div>
  </div>;
};
