import {useEffect} from 'react';
import {getSeo,STATIC_ROUTES,INDEXABLE_ROUTES} from '../data/seo';
import {trackPageView,trackContactClick,contactMethod,ContactPlacement} from '../lib/analytics';

const safePath=(path:string)=>STATIC_ROUTES.includes(path)||INDEXABLE_ROUTES.includes(path)?path:'/404';
export const Analytics=({path}:{path:string})=>{
  useEffect(()=>{const page=safePath(path);trackPageView(page,getSeo(page).title);},[path]);
  useEffect(()=>{
    const click=(event:MouseEvent)=>{
      if(event.type==='auxclick'&&event.button!==1)return;
      const target=event.target instanceof Element?event.target.closest<HTMLAnchorElement>('a[href]'):null;
      if (!target) return;
      const method=contactMethod(target.href);
      const placement:ContactPlacement=target.closest('header')?'header':target.closest('aside[aria-label="Khidmat WhatsApp Pantas"]')?'floating':target.closest('footer')?'footer':'content';
      if (method) trackContactClick(method,safePath(window.location.pathname.replace(/\/+$/,'')||'/'),placement);
    };
    document.addEventListener('click',click,true);
    document.addEventListener('auxclick',click,true);
    return()=>{document.removeEventListener('click',click,true);document.removeEventListener('auxclick',click,true);};
  },[]);
  return null;
};
