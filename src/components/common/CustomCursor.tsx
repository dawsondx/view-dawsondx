"use client";

import { useEffect, useRef } from "react";

const LINK_SELECTOR = "a, button, [role='button'], summary, label, select";
const TEXT_SELECTOR = "input, textarea, [contenteditable='true']";

/**
 * 品牌指针：D 标硬跟手 + 拖尾细环（05 + 06 混搭）。
 * - D 标贴在指针坐标上，1:1 跟手，作为精确锚点
 * - 细环带缓动拖尾，静止时自动淡出，只在移动中显形
 * - 悬停可点元素：环撑开成瞄准圈，D 标轻微内收
 * - 深色区块自动反白：elementFromPoint 向上取第一个不透明底色算亮度
 * - 仅 pointer:fine + 非 reduced-motion 启用；输入框恢复原生光标
 */
export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const ring = ringRef.current;
    if (!root || !ring) return;

    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const html = document.documentElement;
    html.classList.add("has-cursor-fx");

    let x = -200;
    let y = -200;
    let ringX = -200;
    let ringY = -200;
    let frameId = 0;
    let overLink = false;
    let visible = false;
    let lastSample = 0;

    const isDarkBackground = (target: Element | null) => {
      let node: Element | null = target;
      while (node && node !== html) {
        const parts = getComputedStyle(node).backgroundColor.match(/[\d.]+/g);
        if (parts && (parts.length === 3 || Number(parts[3]) > 0.5)) {
          const [r, g, b] = parts.map(Number);
          return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.45;
        }
        node = node.parentElement;
      }
      return false;
    };

    const sample = () => {
      const target = document.elementFromPoint(x, y);
      if (!target) return;
      const overText = Boolean(target.closest(TEXT_SELECTOR));
      overLink = !overText && Boolean(target.closest(LINK_SELECTOR));
      root.classList.toggle("is-link", overLink);
      root.classList.toggle("is-over-text", overText);
      root.classList.toggle("is-inverse", isDarkBackground(target));
      if (overLink) ring.style.opacity = "1";
    };

    const frame = () => {
      frameId = 0;
      ringX += (x - ringX) * 0.18;
      ringY += (y - ringY) * 0.18;
      const restX = x - ringX;
      const restY = y - ringY;
      const rest = Math.hypot(restX, restY);
      ring.style.transform = `translate3d(${restX.toFixed(2)}px, ${restY.toFixed(2)}px, 0)`;
      if (!overLink) {
        ring.style.opacity = rest < 0.6 ? "0" : String(Math.min(0.5, rest / 26));
      }
      if (rest > 0.6) {
        frameId = requestAnimationFrame(frame);
      }
    };

    const handleMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      root.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (!visible) {
        visible = true;
        root.classList.add("is-on");
        sample();
        lastSample = performance.now();
      }
      if (!frameId) frameId = requestAnimationFrame(frame);
    };

    const handleFrameSample = () => {
      const now = performance.now();
      if (now - lastSample < 90) return;
      lastSample = now;
      if (visible) sample();
    };

    const handleScroll = () => handleFrameSample();

    const handleLeave = () => {
      visible = false;
      root.classList.remove("is-on");
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointermove", handleFrameSample, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    document.addEventListener("pointerleave", handleLeave);
    window.addEventListener("blur", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointermove", handleFrameSample);
      window.removeEventListener("scroll", handleScroll, { capture: true });
      document.removeEventListener("pointerleave", handleLeave);
      window.removeEventListener("blur", handleLeave);
      if (frameId) cancelAnimationFrame(frameId);
      html.classList.remove("has-cursor-fx");
    };
  }, []);

  return (
    <div className="cursor-fx" aria-hidden="true" ref={rootRef}>
      <span className="cf-ring" ref={ringRef} />
      <span className="cf-mark">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" focusable="false">
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="26"
            fill="none"
            stroke="#fffdf7"
            strokeOpacity="0.85"
            strokeWidth="14"
          />
          <rect x="4" y="4" width="92" height="92" rx="26" fill="#d8ff63" stroke="#141519" strokeWidth="6" />
          <path
            fill="#141519"
            fillRule="evenodd"
            d="M28 24H44A26 26 0 0 1 44 76H28ZM40 38H44A12 12 0 0 1 44 62H40Z"
          />
        </svg>
      </span>
    </div>
  );
}
