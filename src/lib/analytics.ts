import {GA_MEASUREMENT_ID} from '../data/analytics-config';

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};
export type ContactMethod = 'whatsapp'|'phone'|'email'|'map';
const measurementId = (import.meta.env.VITE_GA_MEASUREMENT_ID || GA_MEASUREMENT_ID).trim();
const debug = import.meta.env.VITE_GA_DEBUG === 'true';
let initialized = false;
let lastLocation = '';
let previousLocation = '';

export function isAnalyticsConfigured() {
  return /^G-[A-Z0-9]{6,20}$/.test(measurementId);
}

function cleanReferrer(referrer:string) {
  try { const url=new URL(referrer);return /^https?:$/.test(url.protocol)?url.origin+url.pathname:''; }
  catch { return ''; }
}

function initialize() {
  if (!isAnalyticsConfigured() || typeof window === 'undefined') return false;
  if (!['arzbina.com','www.arzbina.com'].includes(window.location.hostname) && !debug) return false;
  if (initialized) return true;
  const browser=window as AnalyticsWindow;
  browser.dataLayer=browser.dataLayer||[];
  browser.gtag=browser.gtag||function(){browser.dataLayer!.push(arguments);};
  browser.gtag('js',new Date());
  browser.gtag('config',measurementId,{
    send_page_view:false,
    allow_google_signals:false,
    allow_ad_personalization_signals:false,
    ...(debug?{debug_mode:true}:{}),
  });
  const script=document.createElement('script');
  script.id='arz-google-analytics';script.async=true;
  script.src=`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
  previousLocation=cleanReferrer(document.referrer);
  initialized=true;
  return true;
}

// Page paths must come from the website's known routes, never from form values.
// Strip URL queries/fragments so WhatsApp drafts and other free text are not sent.
export function trackPageView(path:string,title:string) {
  if (!initialize()) return;
  const browser=window as AnalyticsWindow;
  const location=browser.location.origin+path;
  if (lastLocation===location) return;
  browser.gtag!('event','page_view',{
    send_to:measurementId,
    page_title:title,
    page_location:location,
    page_referrer:previousLocation,
  });
  previousLocation=location;
  lastLocation=location;
}

// An enquiry-button click indicates intent; it does not confirm a sent message.
export function trackContactClick(method:ContactMethod,path:string) {
  if (!['whatsapp','phone','email','map'].includes(method) || !initialize()) return;
  (window as AnalyticsWindow).gtag!('event','contact_click',{
    send_to:measurementId,contact_method:method,page_path:path,
  });
}

export function contactMethod(href:string):ContactMethod|null {
  if (href.startsWith('tel:')) return 'phone';
  if (href.startsWith('mailto:')) return 'email';
  try {
    const url=new URL(href);
    if (['wa.me','api.whatsapp.com','web.whatsapp.com'].includes(url.hostname)) return 'whatsapp';
    if (url.hostname==='maps.app.goo.gl'||(['www.google.com','google.com'].includes(url.hostname)&&url.pathname.startsWith('/maps'))) return 'map';
  } catch { /* Internal paths and unsupported destinations are ignored. */ }
  return null;
}
