declare global {
  interface Window {
    umami?: {
      track: (eventName: string, data?: Record<string, string>) => void;
      identify?: (data: Record<string, string>) => void;
    };
  }
}

type SessionProps = Record<string, string>;

const SESSION_STORAGE_KEY = "umami.session.props";
const leadStageRank: Record<string, number> = {
  browsing: 1,
  engaged: 2,
  enquiry_started: 3,
  enquiry_sent: 4,
};

function track(eventName: string, data?: Record<string, string>) {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(eventName, data);
  }
}

function getSessionProps(): SessionProps {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SessionProps) : {};
  } catch {
    return {};
  }
}

function setSessionProps(data: SessionProps) {
  if (typeof window === "undefined") return;

  const current = getSessionProps();
  const next = { ...current, ...data };

  try {
    window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Ignore storage issues and still attempt to identify.
  }

  window.umami?.identify?.(next);
}

function setLeadStage(stage: keyof typeof leadStageRank) {
  const current = getSessionProps().lead_stage;
  const currentRank = current ? leadStageRank[current] ?? 0 : 0;
  const nextRank = leadStageRank[stage];

  if (nextRank > currentRank) {
    setSessionProps({ lead_stage: stage });
  }
}

function getPackageInterest(value: string) {
  const normalized = value.toLowerCase();

  if (normalized.includes("ceremony")) return "ceremony";
  if (normalized.includes("drinks")) return "drinks_reception";
  if (normalized.includes("meal")) return "wedding_meal";
  if (normalized.includes("first dance")) return "first_dances";
  if (normalized.includes("daytime")) return "daytime_package";
  if (normalized.includes("full shebang")) return "full_shebang";

  return undefined;
}

export function identifySessionFromPath(pathname: string) {
  const pathProps: SessionProps = { lead_stage: "browsing" };

  switch (pathname) {
    case "/":
      pathProps.entry_page = "home";
      break;
    case "/weddings":
      pathProps.entry_page = "weddings";
      pathProps.service = "wedding";
      break;
    case "/wedding-ceremony-singer-scotland":
      pathProps.entry_page = "wedding_ceremony";
      pathProps.service = "wedding";
      pathProps.package_interest = "ceremony";
      break;
    case "/events":
      pathProps.entry_page = "events";
      pathProps.service = "events";
      break;
    case "/faq":
      pathProps.entry_page = "faq";
      break;
    case "/repertoire":
      pathProps.entry_page = "repertoire";
      break;
    case "/enquiry":
      pathProps.entry_page = "enquiry";
      setSessionProps(pathProps);
      setLeadStage("enquiry_started");
      return;
    default:
      return;
  }

  setSessionProps(pathProps);
}

export const trackEvent = {
  clickEnquiryCTA: (location: string) => {
    setLeadStage("enquiry_started");
    track('Enquiry CTA Click', { location });
  },
  clickWhatsAppCTA: (location: string) => {
    setLeadStage("enquiry_started");
    track('WhatsApp CTA Click', { location });
  },
  viewPackage: (packageName: string) => {
    const packageInterest = getPackageInterest(packageName);
    if (packageInterest) {
      setSessionProps({ package_interest: packageInterest });
    }
    setLeadStage("engaged");
    track('View Package', { package: packageName });
  },
  clickNavLink: (destination: string) => track('Nav Link Click', { destination }),
  playYouTube: (title: string) => {
    setLeadStage("engaged");
    track('YouTube Play', { title });
  },
  playSoundCloud: (title: string) => {
    setLeadStage("engaged");
    track('SoundCloud Play', { title });
  },
  submitEnquiryForm: () => {
    setLeadStage("enquiry_sent");
    track('Enquiry Form Submit');
  },
};
