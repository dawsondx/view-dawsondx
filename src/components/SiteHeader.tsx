"use client";

import { useEffect, useRef, useState } from "react";

const navigationItems = [
  { href: "#about", label: "关于我" },
  { href: "#work", label: "作品" },
  { href: "#services", label: "服务" },
  { href: "#skills", label: "技能" },
  { href: "#contact", label: "联系" },
] as const;

function MenuGlyph({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="relative block h-3 w-4" aria-hidden="true">
      <span
        className={`absolute left-0 top-[3px] h-[2px] w-4 rounded-full bg-current transition-transform duration-300 ${
          isOpen ? "translate-y-[3px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute bottom-[2px] left-0 h-[2px] rounded-full bg-current transition-all duration-300 ${
          isOpen ? "w-4 -translate-y-[3px] -rotate-45" : "w-2.5"
        }`}
      />
    </span>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

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
      <header
        className="fixed inset-x-0 top-0 z-[60] flex h-[72px] items-center justify-between border-b border-[#f0f0f2] bg-white/80 px-5 backdrop-blur-xl md:px-10"
        style={{ animation: "fade-down 1.2s cubic-bezier(0.19,1,0.22,1) 0.05s both" }}
      >
        <a
          href="#top"
          className="flex items-baseline gap-2"
          onClick={closeMenu}
          aria-label="Dawson 首页"
        >
          <span className="text-[22px] font-extrabold leading-none tracking-[-0.04em]">
            D
            <span className="relative inline-block">
              /
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-[1px] -z-10 h-[7px] bg-[#ffe28a]"
              />
            </span>
          </span>
          <span className="text-xs uppercase tracking-[0.08em] text-[#555555]">Dawson</span>
        </a>

        <div className="flex items-center gap-3 md:gap-7">
          <nav className="hidden items-center gap-7 md:flex" aria-label="快捷导航">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link px-0.5 py-1 text-sm font-semibold text-[#555555] transition-colors duration-300 hover:text-[#1a1a1a]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" onClick={closeMenu} className="btn">
            聊聊合作 <span className="ar" aria-hidden="true">→</span>
          </a>
          <button
            ref={triggerRef}
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e8e8] bg-white text-[#1a1a1a] transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-105 md:hidden"
            aria-controls="site-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "关闭导航菜单" : "打开导航菜单"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <MenuGlyph isOpen={isMenuOpen} />
          </button>
        </div>
      </header>

      <div
        ref={menuRef}
        id="site-menu"
        tabIndex={-1}
        inert={!isMenuOpen}
        className={`fixed inset-0 z-[55] overflow-hidden bg-white text-[#1a1a1a] outline-none transition-opacity duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
        aria-label="导航菜单"
      >
        <div className="relative flex min-h-[100dvh] flex-col px-6 pb-6 pt-28 md:px-10 md:pb-8 md:pt-32">
          <p className="label mb-6">
            <span className="dot" aria-hidden="true" />
            导航
          </p>
          <nav aria-label="主导航">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
                className="group flex items-baseline justify-between border-b border-[#f0f0f2] py-4"
              >
                <span className="text-[clamp(2.75rem,9vw,5.5rem)] font-extrabold leading-none tracking-[-0.04em] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-3">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="label mt-auto flex items-end justify-between pt-10">
            <p>把复杂留给工具，把效率还给工作。</p>
            <p className="hidden text-right sm:block">深圳 · 可远程协作</p>
          </div>
        </div>
      </div>
    </>
  );
}
