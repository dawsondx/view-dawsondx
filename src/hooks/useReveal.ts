"use client";

import { useEffect, useRef } from "react";

/** 同批进入视口的元素依次入场，最多错开 4 档（60ms/档） */
const STAGGER_STEP = 60;
const STAGGER_MAX = 4;

export function useReveal<T extends HTMLElement>() {
  const rootRef = useRef<T>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const elements = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (elements.length === 0) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("in"));
      return;
    }

    const delays = new Set<number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) =>
            a.target.compareDocumentPosition(b.target) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
          )
          .forEach((entry, index) => {
            const element = entry.target as HTMLElement;
            element.style.transitionDelay = `${Math.min(index, STAGGER_MAX) * STAGGER_STEP}ms`;
            element.classList.add("in");
            observer.unobserve(element);

            delays.add(
              window.setTimeout(() => {
                element.style.transitionDelay = "";
              }, 1100),
            );
          });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      delays.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return rootRef;
}
