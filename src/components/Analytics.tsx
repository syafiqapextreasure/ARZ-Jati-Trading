import {useEffect} from 'react';
import {getSeo,STATIC_ROUTES,INDEXABLE_ROUTES} from '../data/seo';
import {trackPageView,trackContactClick,contactMethod} from '../lib/analytics';

const safePath=(path:string)=>STATIC_ROUTES.includes(path)||INDEXABLE_ROUTES.includes(path)?path:'/404';
export const Analytics=({path}:{path:string})=>{
  useEffect(()=>{const page=safePath(path);trackPageView(page,getSeo(page).title);},[path]);
  useEffect(()=>{
    const click=(event:MouseEvent)=>{
      const target=event.target instanceof Element?event.target.closest<HTMLAnchorElement>('a[href]'):null;
      if (!target) return;
      const method=contactMethod(target.href);
      if (method) trackContactClick(method,safePath(window.location.pathname.replace(/\/+$/,'')||'/'));
    };
    document.addEventListener('click',click);
    return()=>document.removeEventListener('click',click);
  },[]);
  return null;
};
