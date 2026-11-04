"use client"

import { Fragment } from "react"
import { useReveal } from "@/hooks/useReveal"
import { portfolio } from "@/data/personal"

function CoverLines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <Fragment key={line}>
          {index > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </>
  )
}

function CaseCover({ item }: { item: (typeof portfolio.cases)[number] }) {
  if (item.variant === "book") {
    const { cover } = item
    return (
      <div className="pf-cover pf-cover--book" aria-hidden="true">
        <span className="pf-book-spine">秒懂 / WORD</span>
        <div className="pf-cover-top">
          <span>{cover.topLeft}</span>
          <span>{cover.topRight}</span>
        </div>
        <div className="pf-cover-big pf-cover-big--book">
          秒懂<em>Word</em>
        </div>
        <div className="pf-book-note">
          <CoverLines lines={cover.note} />
        </div>
        <div className="pf-cover-bottom">
          <span className="pf-cover-name">
            <CoverLines lines={cover.name} />
          </span>
          <span className="pf-cover-role">
            <CoverLines lines={cover.role} />
          </span>
        </div>
      </div>
    )
  }

  const { cover } = item

  return (
    <div className={`pf-cover pf-cover--${item.variant}`} aria-hidden="true">
      <div className="pf-cover-top">
        <span>{cover.topLeft}</span>
        <span>{cover.topRight}</span>
      </div>
      {item.variant === "deck" && (
        <div className="pf-deck-slides" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      )}
      {item.variant === "library" && (
        <div className="pf-lib-grid" aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => (
            <span key={index} />
          ))}
        </div>
      )}
      <div className="pf-cover-big">
        {item.metricValue}
        <small>{item.metricSuffix}</small>
      </div>
      <div className="pf-cover-bottom">
        <span className="pf-cover-name">
          <CoverLines lines={cover.name} />
        </span>
        <span className="pf-cover-role">
          <CoverLines lines={cover.role} />
        </span>
      </div>
      <span className="pf-cover-side">{cover.side}</span>
    </div>
  )
}

export function PortfolioSection() {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="work"
      className="section-pad relative overflow-hidden py-24 md:py-36"
      aria-labelledby="work-title"
    >
      <span className="ghost" aria-hidden="true">
        03
      </span>

      <div className="section-head">
        <p className="label">
          <span className="dot" aria-hidden="true" />
          作品选集
        </p>
        <p className="label hidden md:block">SELECTED WORKS / 2019 — 2026</p>
      </div>

      <div className="pf-spread" data-reveal>
        <div className="pf-page pf-page--left">
          <div className="pf-page-top">
            <span>DAWSON / SELECTED WORKS</span>
            <span>VOL. 01</span>
          </div>

          <h2 id="work-title" className="pf-title">
            Selected
            <br />
            Works<span aria-hidden="true" className="pf-title-dot">.</span>
          </h2>
          <p className="pf-cn">作品选集 · 四件长期在做的事</p>
          <p className="pf-lede">
            从 Office 打卡营，到模板、知识库与书稿，四件长期在做的事，每一件都附了可核对的结果。
          </p>

          <ol className="pf-toc" aria-label="作品目录">
            {portfolio.cases.map((item) => (
              <li key={item.id}>
                <span className="pf-toc-no">{item.no}</span>
                <span className="pf-toc-title">{item.title}</span>
                <span className="pf-toc-dots" aria-hidden="true" />
                <span className="pf-toc-metric">{item.metricLabel}</span>
              </li>
            ))}
          </ol>

          <p className="pf-proof">
            <span className="pf-proof-mark" aria-hidden="true" />
            {portfolio.proofNote}
          </p>

          <a
            className="pf-pdf"
            href={portfolio.pdfHref}
            target="_blank"
            rel="noreferrer"
          >
            <b>完整作品集</b>
            <span>{portfolio.pdfMeta}</span>
            <span className="ar" aria-hidden="true">
              ↗
            </span>
          </a>

          <div className="pf-also">
            <p className="pf-kicker">ALSO / 其他经历</p>
            <ul>
              {portfolio.also.map((item) => (
                <li key={item.title}>
                  <span>{item.title}</span>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pf-page-foot">
            <span>DAWSON · PORTFOLIO</span>
            <span>P.04</span>
          </div>
        </div>

        <div className="pf-gutter" aria-hidden="true" />

        <div className="pf-page pf-page--right">
          <div className="pf-page-top">
            <span>PLATES 01 — 04</span>
            <span>2026 EDITION</span>
          </div>

          <div className="pf-plates">
            {portfolio.cases.map((item) => (
              <figure key={item.id} className="pf-plate">
                <a
                  className="pf-plate-link"
                  href={portfolio.pdfHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`在完整作品集中查看${item.title}`}
                >
                  <CaseCover item={item} />
                  <span className="pf-plate-open" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <figcaption>
                  <span>{item.title}</span>
                  <span>{item.no}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="pf-page-foot">
            <span>PRINTED IN SHENZHEN</span>
            <span>P.05 · 001 — 004</span>
          </div>
        </div>
      </div>
    </section>
  )
}
