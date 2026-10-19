import {useEffect} from 'react';
import {getSeo,SITE_URL} from '../data/seo';
export const Seo=({path}:{path:string})=>{
 useEffect(()=>{
  const seo=getSeo(path);document.title=seo.title;
  const meta=(name:string,value:string,property=false)=>{const attr=property?'property':'name';let element=document.head.querySelector(`meta[${attr}="${name}"]`);if(!element){element=document.createElement('meta');element.setAttribute(attr,name);document.head.appendChild(element)}element.setAttribute('content',value)};
  meta('description',seo.description);meta('robots',seo.robots);meta('og:title',seo.title,true);meta('og:description',seo.description,true);meta('og:url',seo.canonical,true);meta('og:image',SITE_URL+'/social-cover.jpg',true);meta('twitter:title',seo.title);meta('twitter:description',seo.description);
  let link=document.head.querySelector('link[rel="canonical"]');if(!link){link=document.createElement('link');link.setAttribute('rel','canonical');document.head.appendChild(link)}link.setAttribute('href',seo.canonical);
  let schema=document.getElementById('seo-schema');if(!schema){schema=document.createElement('script');schema.id='seo-schema';schema.setAttribute('type','application/ld+json');document.head.appendChild(schema)}schema.textContent=JSON.stringify(seo.schema);
 },[path]);return null;
};
