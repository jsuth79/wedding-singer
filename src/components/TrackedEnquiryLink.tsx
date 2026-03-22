"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

interface TrackedEnquiryLinkProps {
  location: string;
  className?: string;
  children: React.ReactNode;
}

export default function TrackedEnquiryLink({
  location,
  className,
  children,
}: TrackedEnquiryLinkProps) {
  return (
    <Link
      href="/enquiry"
      onClick={() => trackEvent.clickEnquiryCTA(location)}
      className={className}
    >
      {children}
    </Link>
  );
}
