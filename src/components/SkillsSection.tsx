"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { products, resources, skills } from "@/data/personal";

export function SkillsSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} id="resources" className="resources-section section-pad" aria-labelledby="resources-title">
      <div className="page-shell">
        <div className="section-heading section-heading--blue" data-reveal>
          <div>
            <p className="section-label"><span>04</span> PRODUCTS & RESOURCES</p>
            <h2 id="resources-title">把方法，做成<br />能跑的系统。</h2>
          </div>
          <p className="section-intro">6 个独立开发与开源产品、2 座持续更新的知识库。把工作流里的高频痛点，用确定性的工程逻辑封装成可复用工具。</p>
        </div>

        <div className="product-grid" aria-label="独立开发与开源产品矩阵">
          {products.map((item) => (
            <article key={item.id} className="product-card" data-reveal>
              <div className="product-card-top">
                <span>{item.no} / {item.category}</span>
                <span aria-hidden="true">✳</span>
              </div>
              <h3>{item.name}</h3>
              <p className="product-description">{item.description}</p>
              <ul>
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <p className="product-tech">{item.tech}</p>
              <div className="product-links">
                {item.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                    >
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        <div className="resource-subhead" data-reveal>
          <p className="section-label">KNOWLEDGE BASES / 持续更新</p>
          <p>两座公开知识库，把零散工具与方法整理成能检索、能上手、能复用的资料。</p>
        </div>

        <div className="resource-grid">
          {resources.knowledgeBases.map((item, index) => (
            <article key={item.id} className="resource-card" data-reveal>
              <div className="resource-card-top">
                <span>0{index + 1} / IMA KNOWLEDGE BASE</span>
                <span aria-hidden="true">✳</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="resource-feature">{item.feature}</span>
              <div className="resource-card-foot">
                <Image src={item.qr} alt={item.qrAlt} width={96} height={96} className="resource-qr" />
                {item.members ? <strong>{item.members}<small>MEMBERS</small></strong> : <span>持续更新<br />按主题整理</span>}
                <a href={item.href} target="_blank" rel="noreferrer" className="button button--dark">
                  打开知识库 <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="capability-stack" data-reveal>
          <p className="section-label">CAPABILITY STACK / 能力栈</p>
          <ul>
            {skills.map((skill) => (
              <li key={skill.name}>
                <strong>{skill.name}</strong>
                <span>{skill.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
