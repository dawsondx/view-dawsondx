"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/personal";
import { BrandMark } from "@/components/icons/BrandMark";

const navigationItems = [
  { href: "#work", label: "精选作品", en: "WORK" },
  { href: "#services", label: "业务方向", en: "BUSINESS" },
  { href: "#about", label: "关于我", en: "ABOUT" },
  { href: "#resources", label: "产品资源", en: "PRODUCTS" },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const pageRegions = Array.from(document.querySelectorAll("main, body > footer"));
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    pageRegions.forEach((region) => region.setAttribute("inert", ""));
    const focusFrame = requestAnimationFrame(() => menuRef.current?.focus());
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      pageRegions.forEach((region) => region.removeAttribute("inert"));
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a href="#top" className="brand" onClick={closeMenu} aria-label="Dawson 首页">
          <span className="brand-mark"><BrandMark /></span>
          <span className="brand-name">
            Dawson
            <small>AI Workflow Architect</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="主导航">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#contact" className="button button--lime header-cta">
            开始合作 <span aria-hidden="true">↗</span>
          </a>
          <button
            ref={triggerRef}
            type="button"
            className="menu-toggle"
            aria-controls="site-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "关闭导航菜单" : "打开导航菜单"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className={isMenuOpen ? "menu-glyph is-open" : "menu-glyph"} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div
        ref={menuRef}
        id="site-menu"
        tabIndex={-1}
        inert={!isMenuOpen}
        className={isMenuOpen ? "menu-panel is-open" : "menu-panel"}
        aria-hidden={!isMenuOpen}
        aria-label="导航菜单"
      >
        <nav className="mobile-nav" aria-label="移动端导航">
          {navigationItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={closeMenu}
              className="mobile-nav-link"
            >
              <span className="mobile-nav-index">0{index + 1}</span>
              <span>{item.label}</span>
              <span className="mobile-nav-en">{item.en}</span>
            </a>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <p>{siteConfig.slogan}</p>
          <a href="#contact" onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>
            深圳 · 可远程协作 ↗
          </a>
        </div>
      </div>
    </>
  );
}
