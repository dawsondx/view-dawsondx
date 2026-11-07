"use client";

import { useReveal } from "@/hooks/useReveal";
import { portfolio } from "@/data/personal";

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
        {item.metricValue}
        <small>{item.metricSuffix}</small>
      </strong>
      <span className="case-visual-foot">MAKE IT CLEAR. MAKE IT WORK.</span>
    </div>
  );
}

export function PortfolioSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} id="work" className="work-section section-pad" aria-labelledby="work-title">
      <div className="page-shell">
        <div className="section-heading" data-reveal>
          <div>
            <p className="section-label"><span>01</span> SELECTED WORKS / 起点</p>
            <h2 id="work-title">做过，才算数。</h2>
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

        <div className="work-grid">
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
