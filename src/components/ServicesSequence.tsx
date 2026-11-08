"use client";

import { useReveal } from "@/hooks/useReveal";
import { businessTracks, enterpriseCases, services } from "@/data/personal";

export function ServicesSequence() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} id="services" className="services-section section-pad" aria-labelledby="services-title">
      <div className="section-edge" data-edge="lime" aria-hidden="true" />
      <div className="page-shell">
        <div className="section-heading section-heading--dark" data-reveal>
          <div>
            <p className="section-label"><span>02</span> BUSINESS / C × B</p>
            <h2 id="services-title">
              <span className="mask-line">
                <span className="mask-line-inner">C 端当天能用，</span>
              </span>
              <span className="mask-line">
                <span className="mask-line-inner">B 端抗得住检验。</span>
              </span>
            </h2>
          </div>
          <p className="section-intro">不教虚头巴脑的理论：面向个人传授当天能用上的 AI 实操方法，面向企业交付能抗住业务检验的 AI 工作流与工程系统。</p>
        </div>

        <div className="track-grid">
          {businessTracks.map((track) => (
            <article key={track.index} className={`track-card track-card--${track.index.toLowerCase()}`} data-reveal>
              <div className="track-card-top">
                <span className="track-index">{track.index}</span>
                <span>{track.eyebrow}</span>
              </div>
              <h3>{track.name}</h3>
              <p className="track-description">{track.description}</p>
              <p className="track-meta">{track.meta}</p>
              <p className="track-slogan">“{track.slogan}”</p>
              <ul>
                {track.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <a href="#contact" className="track-action">
                {track.index === "C" ? "咨询年度陪伴群" : "聊业务场景"} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <ol className="service-list">
          {services.map((service) => (
            <li key={service.index} data-reveal className="service-item">
              <span className="service-number">{service.index}</span>
              <div className="service-title-wrap">
                <span className="service-tag">{service.tag}</span>
                <h3>{service.name}</h3>
              </div>
              <div className="service-detail">
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="service-action" aria-label={`咨询${service.name}`}>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ol>

        <div className="enterprise-cases" data-reveal>
          <div className="enterprise-heading">
            <p className="section-label">B-END DELIVERY / 已交付标杆案例</p>
            <p>用状态机、幂等性、出处锁定与人工复核门禁，把 AI 从「抽卡」变成生产工具。</p>
          </div>
          <div className="enterprise-grid">
            {enterpriseCases.map((item) => (
              <article key={item.id} className="enterprise-card">
                <span className="enterprise-no">{item.no}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                {item.link ? (
                  <a href={item.link.href} target="_blank" rel="noreferrer">
                    {item.link.label} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <a href="#contact">咨询同类交付 <span aria-hidden="true">↗</span></a>
                )}
              </article>
            ))}
          </div>
        </div>

        <p className="services-note" data-reveal>不靠大模型抽卡，靠确定性的工程逻辑把复杂技术变成非技术人员敢用、好用的工具。</p>
      </div>
    </section>
  );
}
