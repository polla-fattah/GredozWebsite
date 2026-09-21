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
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
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
        // Add a slight delay to allow page rendering/animations to settle
        setTimeout(() => {
          const element = document.querySelector(hash) as HTMLElement;
          if (element) {
            lenisRef.current?.scrollTo(element, { offset: -100, duration: 1.5 });
          }
        }, 300);
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

    // Intercept anchor clicks to handle smooth scrolling for local hashes
    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor || !anchor.href) return;
      
      const url = new URL(anchor.href);
      // Only intercept if we are navigating to a hash on the current page
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

