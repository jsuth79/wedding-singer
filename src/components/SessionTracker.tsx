"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { identifySessionFromPath } from "@/lib/analytics";

export default function SessionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    identifySessionFromPath(pathname);
  }, [pathname]);

  return null;
}
