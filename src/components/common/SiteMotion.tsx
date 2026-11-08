"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** 区块顺序 = 整屏底色的过渡序列；每块的底色由这条时间线接管 */
const TINT_SEQUENCE: Array<[string, string]> = [
  [".hero", "#141519"],
  [".work-section", "#f4f1e8"],
  [".services-section", "#141519"],
  [".about-section", "#f4f1e8"],
  [".resources-section", "#5147e5"],
  [".contact-section", "#d8ff63"],
];

/** 交界处的软过渡宽度（百分比），0 = 硬边 */
const BLEND = 0.7;

/**
 * 全站滚动动效总控。
 * 背景不是整体换色，而是一条随滚动扫过全屏的色带分界线：
 * 视口上下两侧各自保持所属区块的颜色，所以文字对比度天然成立，不需要重排配色。
 */
export function SiteMotion() {
  const tintRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // 1. 标题逐行遮罩
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

      // 3. 整屏底色：按区块边界生成硬边渐变，随滚动扫过视口
      const tint = tintRef.current;
      const root = document.documentElement;
      const zones = TINT_SEQUENCE.map(([selector, color]) => ({
        element: document.querySelector<HTMLElement>(selector),
        color,
      })).filter((zone): zone is { element: HTMLElement; color: string } => Boolean(zone.element));

      if (tint && zones.length > 1) {
        root.classList.add("global-tint");

        const paint = () => {
          const viewport = window.innerHeight || 1;
          let active = zones[0].color;
          const transitions: Array<{ position: number; to: string }> = [];

          zones.slice(1).forEach((zone) => {
            const position = (zone.element.getBoundingClientRect().top / viewport) * 100;

            if (position <= 0) {
              active = zone.color;
              return;
            }

            if (position >= 100) {
              return;
            }

            transitions.push({ position, to: zone.color });
          });

          const stops = [`${active} 0%`];
          let current = active;

          transitions.forEach(({ position, to }) => {
            const start = Math.max(0, position - BLEND);
            const end = Math.min(100, position + BLEND);
            stops.push(`${current} ${start}%`, `${to} ${end}%`);
            current = to;
          });

          stops.push(`${current} 100%`);

          tint.style.backgroundImage = `linear-gradient(to bottom, ${stops.join(", ")})`;
        };

        paint();
        ScrollTrigger.create({ start: 0, end: "max", onUpdate: paint });
        ScrollTrigger.addEventListener("refresh", paint);

        let cancelled = false;
        void document.fonts?.ready.then(() => {
          if (!cancelled) {
            ScrollTrigger.refresh();
            paint();
          }
        });

        return () => {
          cancelled = true;
          ScrollTrigger.removeEventListener("refresh", paint);
          root.classList.remove("global-tint");
          tint.style.backgroundImage = "";
        };
      }

      return undefined;
    });
  });

  return <div className="page-tint" aria-hidden="true" ref={tintRef} />;
}
