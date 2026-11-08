"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { about, credentials, vision } from "@/data/personal";

export function AboutVision() {
  const rootRef = useReveal<HTMLDivElement>();
  const titleParts = about.title.split("AI");

  return (
    <div ref={rootRef}>
      <section id="about" className="about-section section-pad" aria-labelledby="about-heading">
        <div className="page-shell">
          <p className="section-label" data-reveal><span>03</span> ABOUT DAWSON</p>
          <div className="about-grid">
            <div className="about-art" data-reveal>
              <div className="about-art-top">
                <span>LEARN / MAKE / SHARE</span>
                <span aria-hidden="true">✳</span>
              </div>
              <Image
                src="/images/about-knowledge.png"
                alt="书本延展为课程、设计面板与效率工具的 3D 插画"
                width={1536}
                height={1024}
                className="about-art-image"
              />
              <p>不是会更多工具，<br />而是更会解决问题。</p>
            </div>

            <div className="about-copy" data-reveal>
              <h2 id="about-heading">
                <span className="mask-line">
                  <span className="mask-line-inner">
                    {titleParts[0]}<span className="accent">AI</span>{titleParts[1]}
                  </span>
                </span>
              </h2>
              <div className="about-story">
                {about.story.map((paragraph) => (
                  <p key={paragraph.slice(0, 12)}>{paragraph}</p>
                ))}
              </div>
              <ul className="about-tags" aria-label="身份标签">
                {about.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </div>

          <div className="about-proof" aria-label="核心背书" data-reveal>
            {credentials.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div id="vision" className="principles" aria-label="做事理念">
            {vision.words.map((item) => (
              <article key={item.en} data-reveal>
                <span>{item.index}</span>
                <h3>{item.en}<small>{item.zh}</small></h3>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
          <p className="about-creed" data-reveal>“{vision.tagline}”</p>
        </div>
      </section>
    </div>
  );
}
