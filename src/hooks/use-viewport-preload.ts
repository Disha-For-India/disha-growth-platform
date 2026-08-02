import { useEffect, useRef } from "react";
import { useRouter } from "@tanstack/react-router";

/**
 * Custom hook to prefetch TanStack Router routes when elements enter the viewport.
 * Especially effective on mobile devices where mouse hover events do not occur.
 */
export function useViewportPreload<T extends HTMLElement = HTMLDivElement>(to?: string) {
  const elementRef = useRef<T>(null);
  const router = useRouter();

  useEffect(() => {
    const el = elementRef.current;
    if (!el || !to || typeof IntersectionObserver === "undefined") return;

    let hasPreloaded = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPreloaded) {
            hasPreloaded = true;
            router.preloadRoute({ to }).catch(() => {});
            observer.unobserve(el);
          }
        });
      },
      { rootMargin: "100px" } // Preload 100px before scrolling into view
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [to, router]);

  return elementRef;
}
