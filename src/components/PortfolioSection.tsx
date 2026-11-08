"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReveal } from "@/hooks/useReveal";
import { CountableText } from "@/components/common/CountableText";
import { portfolio } from "@/data/personal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function CaseVisual({ item }: { item: (typeof portfolio.cases)[number] }) {
  return (
    <div className={`case-visual case-visual--${item.variant}`} aria-hidden="true">
      <div className="case-visual-top">
        <span>{item.no} / {item.category}</span>
        <span>DAWSON®</span>
      </div>
      <div className="case-shape">
        <span />
        <span />
        <span />
      </div>
      <strong className="case-metric">
        <CountableText value={item.metricValue} />
        <small>{item.metricSuffix}</small>
      </strong>
      <span className="case-visual-foot">MAKE IT CLEAR. MAKE IT WORK.</span>
    </div>
  );
}

export function PortfolioSection() {
  const sectionRef = useReveal<HTMLElement>();

  // 案例大数字随滚动做微视差，制造前后层次
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".case-metric").forEach((metric) => {
          const trigger = metric.closest(".work-card") ?? metric;

          gsap.fromTo(
            metric,
            { y: 26 },
            {
              y: -26,
              ease: "none",
              scrollTrigger: { trigger, start: "top bottom", end: "bottom top", scrub: 0.6 },
            },
          );
        });
      });
    },
    { scope: sectionRef },
  );

  // 桌面端：作品区钉住，四张卡改为横向轨道，滚动即横移
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const wrap = sectionRef.current?.querySelector<HTMLElement>(".work-rail-wrap");
        const rail = wrap?.querySelector<HTMLElement>(".work-rail");
        const bar = wrap?.querySelector<HTMLElement>(".work-rail-progress > span");
        if (!wrap || !rail) {
          return;
        }

        wrap.classList.add("is-rail");
        const distance = () => Math.max(0, rail.scrollWidth - wrap.clientWidth);

        const tween = gsap.to(rail, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top+=104",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.7,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (bar) {
                bar.style.transform = `scaleX(${self.progress})`;
              }
            },
          },
        });

        return () => {
          wrap.classList.remove("is-rail");
          tween.scrollTrigger?.kill();
          tween.kill();
          gsap.set(rail, { clearProps: "transform" });
        };
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="work" className="work-section section-pad" aria-labelledby="work-title">
      <div className="page-shell">
        <div className="section-heading" data-reveal>
          <div>
            <p className="section-label"><span>01</span> SELECTED WORKS / 起点</p>
            <h2 id="work-title">
              <span className="mask-line">
                <span className="mask-line-inner">做过，才算数。</span>
              </span>
            </h2>
          </div>
          <div className="section-intro">
            <p>早期从 Office 培训、模板、知识库与书稿起步；现在的 AI 工程产品与 B 端交付案例，已在后面的产品矩阵展开。</p>
            <a href={portfolio.pdfHref} target="_blank" rel="noreferrer" className="text-link">
              完整作品集 <span aria-hidden="true">↗</span>
            </a>
            <a href="#resources" className="text-link">
              看产品矩阵 <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>

      <div className="page-shell">
        <div className="work-rail-wrap">
          <div className="work-rail">
            {portfolio.cases.map((item) => (
              <article key={item.id} className={`work-card work-card--${item.variant}`} data-reveal>
                <a
                  href={portfolio.pdfHref}
                  target="_blank"
                  rel="noreferrer"
                  className="work-card-link"
                  aria-label={`在完整作品集中查看${item.title}`}
                >
                  <CaseVisual item={item} />
                  <div className="work-card-body">
                    <div>
                      <p>{item.category}</p>
                      <h3>{item.title}</h3>
                    </div>
                    <span className="round-arrow" aria-hidden="true">↗</span>
                    <p className="work-description">{item.description}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
          <div className="work-rail-progress" aria-hidden="true">
            <span />
          </div>
          <p className="work-rail-hint" aria-hidden="true">
            <span>SCROLL</span>
            <span>→</span>
          </p>
        </div>
      </div>

      <div className="page-shell">
        <div className="also-row" data-reveal>
          <p className="section-label">ALSO / 持续在做</p>
          <ul>
            {portfolio.also.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
