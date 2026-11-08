"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** 各区块底色在滚动中做的同色系过渡，避免破坏文字对比度 */
const SECTION_TINTS: Array<[string, string, string]> = [
  [".work-section", "#f4f1e8", "#eee8d6"],
  [".services-section", "#141519", "#1c1f29"],
  [".about-section", "#f4f1e8", "#eee8d6"],
  [".resources-section", "#5147e5", "#4236d2"],
  [".contact-section", "#d8ff63", "#c9f24b"],
];

/**
 * 全站滚动动效总控：标题遮罩揭示、数字滚动、区块色帘、底色过渡。
 * 全部只在 `prefers-reduced-motion: no-preference` 下启用，减弱动效时页面保持静态可读。
 */
export function SiteMotion() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // 1. 区块标题逐行遮罩
      const maskLines = gsap.utils.toArray<HTMLElement>(".mask-line > .mask-line-inner");
      if (maskLines.length > 0) {
        gsap.set(maskLines, { yPercent: 106 });
        ScrollTrigger.batch(maskLines, {
          start: "top 88%",
          onEnter: (batch) =>
            gsap.to(batch, {
              yPercent: 0,
              duration: 0.95,
              ease: "expo.out",
              stagger: 0.08,
              overwrite: true,
            }),
        });
      }

      // 2. 数字滚动
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((element) => {
        const end = Number(element.dataset.count);
        if (!Number.isFinite(end)) {
          return;
        }

        const counter = { value: 0 };
        element.textContent = "0";

        ScrollTrigger.create({
          trigger: element,
          start: "top 92%",
          once: true,
          onEnter: () =>
            gsap.to(counter, {
              value: end,
              duration: 1.15,
              ease: "power2.out",
              onUpdate: () => {
                element.textContent = String(Math.round(counter.value));
              },
            }),
        });
      });

      // 3. 区块交界色帘：上一块的颜色被卷走
      gsap.utils.toArray<HTMLElement>(".section-edge").forEach((edge) => {
        gsap.fromTo(
          edge,
          { scaleY: 1 },
          {
            scaleY: 0,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: { trigger: edge, start: "top bottom", end: "center center", scrub: 0.5 },
          },
        );
      });

      // 4. 区块底色过渡
      SECTION_TINTS.forEach(([selector, from, to]) => {
        const section = document.querySelector<HTMLElement>(selector);
        if (!section) {
          return;
        }

        gsap.fromTo(
          section,
          { backgroundColor: from },
          {
            backgroundColor: to,
            ease: "none",
            scrollTrigger: { trigger: section, start: "top bottom", end: "bottom bottom", scrub: 0.8 },
          },
        );
      });

      let cancelled = false;
      void document.fonts?.ready.then(() => {
        if (!cancelled) ScrollTrigger.refresh();
      });

      return () => {
        cancelled = true;
      };
    });
  });

  return null;
}
