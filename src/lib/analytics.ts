declare global {
  interface Window {
    umami?: {
      track: (eventName: string, data?: Record<string, string>) => void;
    };
  }
}

function track(eventName: string, data?: Record<string, string>) {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(eventName, data);
  }
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
