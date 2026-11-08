"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CountableText } from "@/components/common/CountableText";
import { hero, siteConfig } from "@/data/personal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // 入场编排：眉标 → 标题逐行遮罩 → 支撑文案 → 操作 → 成果 → 插画
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ defaults: { ease: "expo.out" } });

        intro
          .from(".hero-eyebrow", { autoAlpha: 0, y: 12, duration: 0.5 }, 0)
          .from(".hero-line-inner", { yPercent: 108, duration: 1, stagger: 0.085 }, 0.08)
          .from(".hero-roles", { autoAlpha: 0, y: 16, duration: 0.7 }, 0.42)
          .from(".hero-description", { autoAlpha: 0, y: 16, duration: 0.7 }, 0.5)
          .from(".hero-actions > *", { autoAlpha: 0, y: 18, duration: 0.7, stagger: 0.06 }, 0.58)
          .from(".hero-proof li", { autoAlpha: 0, y: 18, duration: 0.6, stagger: 0.06 }, 0.7)
          .from(".hero-art-wrap", { autoAlpha: 0, y: 46, scale: 0.96, rotation: -3, duration: 1.1 }, 0.5)
          .from(".scroll-cue", { autoAlpha: 0, y: 10, duration: 0.6 }, 1.05);

        // 插画随滚动退场视差
        gsap.to(".hero-art-wrap", {
          yPercent: -9,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // 指针：插画 3D 倾斜 + 按钮磁吸
      mm.add("(hover: hover) and (pointer: fine)", () => {
        const art = rootRef.current?.querySelector<HTMLElement>(".hero-art-wrap");
        const cleanups: Array<() => void> = [];

        if (art) {
          const tiltX = gsap.quickTo(art, "rotationY", { duration: 0.55, ease: "power3.out" });
          const tiltY = gsap.quickTo(art, "rotationX", { duration: 0.55, ease: "power3.out" });

          const handleTilt = (event: PointerEvent) => {
            const rect = art.getBoundingClientRect();
            const offsetX = (event.clientX - (rect.left + rect.width / 2)) / window.innerWidth;
            const offsetY = (event.clientY - (rect.top + rect.height / 2)) / window.innerHeight;
            tiltX(gsap.utils.clamp(-6, 6, offsetX * 14));
            tiltY(gsap.utils.clamp(-5, 5, offsetY * -12));
          };
          const resetTilt = () => {
            tiltX(0);
            tiltY(0);
          };

          window.addEventListener("pointermove", handleTilt, { passive: true });
          document.addEventListener("pointerleave", resetTilt);
          cleanups.push(() => {
            window.removeEventListener("pointermove", handleTilt);
            document.removeEventListener("pointerleave", resetTilt);
          });
        }

        gsap.utils.toArray<HTMLElement>(".hero-actions .button").forEach((button) => {
          const moveX = gsap.quickTo(button, "x", { duration: 0.45, ease: "power3.out" });
          const moveY = gsap.quickTo(button, "y", { duration: 0.45, ease: "power3.out" });

          const handleMove = (event: PointerEvent) => {
            const rect = button.getBoundingClientRect();
            moveX(gsap.utils.clamp(-7, 7, (event.clientX - (rect.left + rect.width / 2)) * 0.16));
            moveY(gsap.utils.clamp(-7, 7, (event.clientY - (rect.top + rect.height / 2)) * 0.16) - 3);
          };
          const handleLeave = () => {
            moveX(0);
            moveY(0);
          };

          button.addEventListener("pointermove", handleMove);
          button.addEventListener("pointerleave", handleLeave);
          cleanups.push(() => {
            button.removeEventListener("pointermove", handleMove);
            button.removeEventListener("pointerleave", handleLeave);
          });
        });

        return () => cleanups.forEach((cleanup) => cleanup());
      });

      // 中文字体晚到会改变行高，重算一次滚动位置
      let cancelled = false;
      void document.fonts?.ready.then(() => {
        if (!cancelled) ScrollTrigger.refresh();
      });

      return () => {
        cancelled = true;
      };
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid page-shell">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {siteConfig.name} · {siteConfig.location} · AI WORKFLOW / INDIE DEV
          </p>

          <h1 id="hero-title" className="hero-title">
            <span className="hero-line">
              <span className="hero-line-inner">把复杂，</span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner">
                做成<span className="text-lime">清晰</span>的
              </span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner">答案。</span>
            </span>
          </h1>

          <p className="hero-roles">{hero.identities.join(" × ")}</p>
          <p className="hero-description">{hero.declaration}</p>

          <div className="hero-actions">
            <a className="button button--lime" href="#work">
              看精选作品 <span aria-hidden="true">↓</span>
            </a>
            <a className="button button--ghost" href="#contact">
              聊聊合作 <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ul className="hero-proof" aria-label="经历与成果">
            {hero.proof.map((item) => (
              <li key={item.label}>
                <strong><CountableText value={item.value} /></strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-art-wrap">
          <div className="hero-art" aria-label="Dawson 的 AI 工作流数字工作台">
            <div className="hero-art-meta">
              <span>AI / SYSTEMS / AUTOMATION</span>
              <span>SHENZHEN · REMOTE</span>
            </div>
            <Image
              src="/images/hero-workbench.webp"
              alt="由幻灯片、工具模块、书本与几何体组成的蓝色 3D 数字工作台"
              width={1024}
              height={936}
              priority
              className="hero-art-image"
            />
            <p className="hero-art-caption">
              <span>IDEAS INTO SYSTEMS</span>
              <span aria-hidden="true">✳</span>
            </p>
          </div>
        </div>
      </div>

      <a href="#work" className="scroll-cue" aria-label="向下浏览精选作品">
        <span>SCROLL TO EXPLORE</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
