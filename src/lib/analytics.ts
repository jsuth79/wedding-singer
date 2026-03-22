// Google Analytics event tracking utilities

declare global {
  interface Window {
    gtag: (command: string, eventName: string, params?: Record<string, any>) => void;
  }
}

export const trackEvent = {
  // CTA clicks
  clickEnquiryCTA: (location: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_enquiry_cta', {
        event_category: 'engagement',
        event_label: location,
      });
    }
  },

  clickWhatsAppCTA: (location: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_whatsapp_cta', {
        event_category: 'engagement',
        event_label: location,
      });
    }
  },

  // Package interactions
  viewPackage: (packageName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_package', {
        event_category: 'packages',
        event_label: packageName,
      });
    }
  },

  // Navigation
  clickNavLink: (destination: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_nav_link', {
        event_category: 'navigation',
        event_label: destination,
      });
    }
  },

  // Video plays
  playVideo: (videoTitle: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'play_video', {
        event_category: 'engagement',
        event_label: videoTitle,
      });
    }
  },

  // Form submissions
  submitEnquiryForm: () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'submit_enquiry_form', {
        event_category: 'conversion',
      });
    }
  },
};
