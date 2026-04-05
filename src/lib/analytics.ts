declare global {
  interface Window {
    umami?: {
      track: (eventName: string, data?: Record<string, string>) => void;
      identify: (data: Record<string, string>) => void;
    };
  }
}

function track(eventName: string, data?: Record<string, string>) {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(eventName, data);
  }
}

function getChannel(referrer: string): string {
  if (!referrer) return 'direct';
  if (/google\.|bing\.|yahoo\.|duckduckgo\.|ecosia\./.test(referrer)) return 'search';
  if (/instagram\.|facebook\.|tiktok\.|pinterest\.|youtube\.|twitter\.|x\.com/.test(referrer)) return 'social';
  if (/hitched\.|bridebook\.|rockmywedding\.|noths\.|theknot\.|weddingwire\.|guides\.fo/.test(referrer)) return 'wedding_directory';
  return 'other';
}

function getReferrerDomain(referrer: string): string {
  if (!referrer) return '';
  try {
    return new URL(referrer).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

function getFunnelStage(path: string): string | null {
  if (path === '/') return 'awareness';
  if (/^\/(weddings|events|repertoire|faq|wedding-ceremony-singer-scotland)/.test(path)) return 'consideration';
  if (path.startsWith('/enquiry')) return 'conversion';
  return null;
}

function getTimeOfDay(): string {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'afternoon';
  if (hour >= 18 && hour < 22) return 'evening';
  return 'night';
}

export function identifySession() {
  if (typeof window === 'undefined' || !window.umami) return;
  const referrer = document.referrer;
  const channel = getChannel(referrer);
  const referrer_domain = getReferrerDomain(referrer);
  const now = new Date();
  const day_of_week = [0, 6].includes(now.getDay()) ? 'weekend' : 'weekday';

  const data: Record<string, string> = {
    channel,
    time_of_day: getTimeOfDay(),
    day_of_week,
  };
  if (referrer_domain) data.referrer_domain = referrer_domain;
  const funnel = getFunnelStage(window.location.pathname);
  if (funnel) data.funnel = funnel;

  window.umami.identify(data);
}

export const trackEvent = {
  clickEnquiryCTA: (location: string) => track('Enquiry CTA Click', { location }),
  clickWhatsAppCTA: (location: string) => track('WhatsApp CTA Click', { location }),
  viewPackage: (packageName: string) => track('View Package', { package: packageName }),
  clickNavLink: (destination: string) => track('Nav Link Click', { destination }),
  playYouTube: (title: string) => track('YouTube Play', { title }),
  playSoundCloud: (title: string) => track('SoundCloud Play', { title }),
  submitEnquiryForm: () => track('Enquiry Form Submit'),
};
