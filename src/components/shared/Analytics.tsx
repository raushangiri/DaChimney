"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & { q?: unknown[] };
    dataLayer?: unknown[];
  }
}

export function Analytics() {
  useEffect(() => {
    const ga4 = process.env.NEXT_PUBLIC_GA4_ID;
    const clarity = process.env.NEXT_PUBLIC_CLARITY_ID;
    const fbPixel = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

    if (ga4) {
      const gtag = document.createElement("script");
      gtag.async = true;
      gtag.src = `https://www.googletagmanager.com/gtag/js?id=${ga4}`;
      document.head.appendChild(gtag);
      window.dataLayer = window.dataLayer || [];
      const dl = window.dataLayer;
      window.gtag = function () {
        dl.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", ga4);
    }

    if (clarity) {
      const c = document.createElement("script");
      c.async = true;
      c.src = `https://www.clarity.ms/tag/${clarity}`;
      document.head.appendChild(c);
    }

    if (fbPixel) {
      window.fbq = window.fbq || function () {
        (window.fbq!.q = window.fbq!.q || []).push(arguments);
      };
      const f = document.createElement("script");
      f.async = true;
      f.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(f);
      window.fbq("init", fbPixel);
      window.fbq("track", "PageView");
    }

    const bumpWhatsApp = () => {
      try {
        const count = Number(localStorage.getItem("den_admin_wa_ctas") || "0");
        localStorage.setItem("den_admin_wa_ctas", String(Number.isFinite(count) ? count + 1 : 1));
      } catch { /* ignore */ }
    };
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href*="wa.me"]') as HTMLAnchorElement | null;
      if (anchor) bumpWhatsApp();
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return null;
}