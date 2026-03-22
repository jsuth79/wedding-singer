"use client";

import { trackEvent } from "@/lib/analytics";

interface TrackedWhatsAppLinkProps {
  location: string;
  className?: string;
  children: React.ReactNode;
}

export default function TrackedWhatsAppLink({
  location,
  className,
  children,
}: TrackedWhatsAppLinkProps) {
  return (
    <a
      href="https://wa.me/447740360678"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent.clickWhatsAppCTA(location)}
      className={className}
    >
      {children}
    </a>
  );
}
