"use client";

import { useEffect, useRef, ReactNode } from "react";
import Lenis from "lenis";
import { usePathname } from "@/i18n/routing";

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      autoRaf: false,
    });
    lenisRef.current = lenis;

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Handle routing and hash changes
  useEffect(() => {
    const handleScrollToHash = (hash: string) => {
      if (lenisRef.current && hash) {
        setTimeout(() => {
          const element = document.querySelector(hash) as HTMLElement;
          if (element) {
            lenisRef.current?.scrollTo(element, { offset: -90, duration: 1.1 });
          }
        }, 150);
      }
    };

    if (window.location.hash) {
      handleScrollToHash(window.location.hash);
    } else {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
    }

    const onHashChange = () => {
      if (window.location.hash) handleScrollToHash(window.location.hash);
    };

    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor || !anchor.href) return;

      const url = new URL(anchor.href);
      if (url.pathname === window.location.pathname && url.hash) {
        e.preventDefault();
        window.history.pushState(null, "", url.href);
        handleScrollToHash(url.hash);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onAnchorClick);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onAnchorClick);
    };
  }, [pathname]);

  return <>{children}</>;
}

export default SmoothScroll;
