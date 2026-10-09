import React, {useEffect,useRef,useState} from 'react';
import {ArzLogo} from './ArzLogo';
import {Menu,X,ChevronDown} from 'lucide-react';
import {WhatsAppIcon} from './WhatsAppIcon';
interface HeaderProps {currentPath:string;onNavigate:(path:string)=>void}
export const Header:React.FC<HeaderProps>=({currentPath,onNavigate})=>{
 const [open,setOpen]=useState(false),[services,setServices]=useState(false);
 const ref=useRef<HTMLElement>(null),menuButton=useRef<HTMLButtonElement>(null),serviceButton=useRef<HTMLButtonElement>(null);
 useEffect(()=>{setOpen(false);setServices(false)},[currentPath]);
 useEffect(()=>{const close=(e:MouseEvent)=>{if(!ref.current?.contains(e.target as Node))setServices(false)};document.addEventListener('mousedown',close);return()=>document.removeEventListener('mousedown',close)},[]);
 const go=(path:string)=>{setOpen(false);setServices(false);onNavigate(path)};
 return <header ref={ref} className={`site-header ${currentPath==='/'?'site-header--home':''}`} onKeyDown={e=>{if(e.key==='Escape'){if(open){setOpen(false);menuButton.current?.focus()}else{setServices(false);serviceButton.current?.focus()}}}}>
 <div className="header-inner">
 <a href="/" onClick={e=>{e.preventDefault();go('/')}} aria-label="ARZ Jati Trading — Laman Utama"><ArzLogo size="sm"/></a>
 <nav className="desktop-nav" aria-label="Navigasi utama">
 <a href="/tentang-kami" aria-current={currentPath==='/tentang-kami'?'page':undefined} onClick={e=>{e.preventDefault();go('/tentang-kami')}}>Tentang Kami</a>
 <div className="nav-services"><button ref={serviceButton} aria-expanded={services} aria-controls="services-menu" onClick={()=>setServices(!services)}>Perkhidmatan <ChevronDown size={15}/></button>
 {services&&<div id="services-menu" className="nav-dropdown"><a href="/perkhidmatan" onClick={e=>{e.preventDefault();go('/perkhidmatan')}}>Semua Perkhidmatan</a><a href="/sewa-peralatan" onClick={e=>{e.preventDefault();go('/sewa-peralatan')}}>Sewa Peralatan</a></div>}</div>
 <a href="/projek" aria-current={currentPath.startsWith('/projek')?'page':undefined} onClick={e=>{e.preventDefault();go('/projek')}}>Projek</a>
 <a href="/hubungi-kami" aria-current={currentPath==='/hubungi-kami'?'page':undefined} onClick={e=>{e.preventDefault();go('/hubungi-kami')}}>Hubungi Kami</a>
 </nav>
 <a className="header-whatsapp" href="https://wa.me/60148196216?text=Salam%20ARZ%20Jati%20Trading%2C%20saya%20ingin%20berbincang%20mengenai%20projek." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ARZ Jati Trading"><WhatsAppIcon/><span>WhatsApp</span></a>
 <button ref={menuButton} className="menu-toggle" aria-label={open?'Tutup menu':'Buka menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div>
 {open&&<nav id="mobile-nav" className="mobile-nav" aria-label="Navigasi mudah alih">{[['Tentang Kami','/tentang-kami'],['Perkhidmatan','/perkhidmatan'],['Sewa Peralatan','/sewa-peralatan'],['Projek','/projek'],['Hubungi Kami','/hubungi-kami']].map(([label,path])=><a key={path} href={path} onClick={e=>{e.preventDefault();go(path)}}>{label}</a>)}</nav>}
 </header>;
};
