import React from 'react';
import {Home,ShieldCheck,Users,ArrowRight} from 'lucide-react';
import {IMAGES} from '../assets/images';
export const HomeHero=({onNavigate}:{onNavigate:(path:string)=>void})=><section className="reference-hero" aria-labelledby="hero-title">
<img className="hero-photo" src={IMAGES.heroBungalow} alt="Visualisasi reka bentuk rumah daripada profil ARZ Jati Trading, dipertingkat secara digital" width="1672" height="941" fetchPriority="high"/>
<div className="hero-shade"/>
<div className="hero-copy"><p className="hero-kicker">RUMAH LEBIH DARIPADA<br/>SEKADAR BANGUNAN</p><h1 id="hero-title">Bina Impian.<br/>Cipta Keyakinan.</h1><p className="hero-description">Pembinaan, pengubahsuaian dan pembaikan<br className="desktop-break"/> untuk ruang yang lebih baik.</p><div className="hero-actions"><a href="#bincang" className="action-light">Bincang Projek Anda <ArrowRight size={20}/></a><button className="action-glass" onClick={()=>onNavigate('/projek')}>Lihat Projek</button></div></div>
<div className="hero-pillars"><div><Home/><span>Kediaman<br/>Lebih Selesa</span></div><div><ShieldCheck/><span>Mutu Kerja<br/>Dipercayai</span></div><div><Users/><span>Ruang Untuk<br/>Masa Depan</span></div></div><span className="hero-image-note">Visualisasi reka bentuk</span>
</section>;
