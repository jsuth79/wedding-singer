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

const FUNNEL_RANKS: Record<string, number> = { awareness: 1, consideration: 2, conversion: 3 };
const FUNNEL_KEY = 'umami_funnel_rank';

function getFunnelStage(path: string): string | null {
  if (path === '/') return 'awareness';
  if (/^\/(weddings|events|repertoire|faq|wedding-ceremony-singer-scotland)/.test(path)) return 'consideration';
  if (path.startsWith('/enquiry')) return 'conversion';
  return null;
}

export function updateFunnelStage(path: string) {
  if (typeof window === 'undefined' || !window.umami) return;
  const stage = getFunnelStage(path);
  if (!stage) return;
  const newRank = FUNNEL_RANKS[stage];
  const currentRank = parseInt(sessionStorage.getItem(FUNNEL_KEY) || '0', 10);
  if (newRank > currentRank) {
    sessionStorage.setItem(FUNNEL_KEY, String(newRank));
    window.umami.identify({ funnel: stage });
  }
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

  let isFirstVisit = false;
  try {
    isFirstVisit = !localStorage.getItem('nm_visited');
    if (isFirstVisit) localStorage.setItem('nm_visited', '1');
  } catch {
    // localStorage unavailable (e.g. private browsing with strict settings)
  }

  const data: Record<string, string> = {
    channel,
    time_of_day: getTimeOfDay(),
    day_of_week,
    first_visit: isFirstVisit ? 'true' : 'false',
  };
  if (referrer_domain) data.referrer_domain = referrer_domain;
  const funnel = getFunnelStage(window.location.pathname);
  if (funnel) {
    data.funnel = funnel;
    try {
      sessionStorage.setItem(FUNNEL_KEY, String(FUNNEL_RANKS[funnel]));
    } catch {
      // sessionStorage unavailable
    }
  }

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
