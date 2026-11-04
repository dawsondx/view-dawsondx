"use client";

import { useReveal } from "@/hooks/useReveal";
import { about, vision } from "@/data/personal";

export function AboutVision() {
  const rootRef = useReveal<HTMLDivElement>();

  return (
    <div ref={rootRef}>
      <section
        id="about"
        className="section-pad relative overflow-hidden py-24 md:py-36"
        aria-labelledby="about-heading"
      >
        <span className="ghost" aria-hidden="true">01</span>
        <div className="section-head">
          <h2 className="label">
            <span className="dot" aria-hidden="true" />
            <span id="about-heading">关于我</span>
          </h2>
          <p className="label hidden md:block">转行 / 自学 / 长期主义</p>
        </div>

        <h2
          data-reveal
          className="max-w-[26ch] text-balance text-[clamp(28px,4.4vw,54px)] font-bold leading-[1.2] tracking-[-0.02em]"
        >
          {about.title.split("「教会别人」")[0]}
          <span className="hl inline-block whitespace-nowrap">「教会别人」</span>
          做成事业
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
          <div data-reveal className="space-y-5">
            {about.story.slice(0, 2).map((paragraph) => (
              <p key={paragraph.slice(0, 12)} className="max-w-[42ch] text-[15px] leading-[1.8] text-[#555555]">
                {paragraph}
              </p>
            ))}
          </div>
          <div data-reveal className="space-y-5">
            {about.story.slice(2).map((paragraph) => (
              <p key={paragraph.slice(0, 12)} className="max-w-[42ch] text-[15px] leading-[1.8] text-[#555555]">
                {paragraph}
              </p>
            ))}
          </div>
          <div data-reveal className="md:col-start-3">
            <p className="label mb-5">身份标签</p>
            <ul className="flex flex-wrap gap-2">
              {about.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-[#e8e8e8] bg-white px-3.5 py-1.5 text-[12px] font-medium text-[#555555]"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <a
              href="#work"
              className="group mt-7 inline-flex items-center gap-2 border-b-2 border-[#ffe28a] pb-1 text-sm font-semibold transition-[gap] duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:gap-3.5"
            >
              看看我做过的事
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="vision"
        className="section-pad relative overflow-hidden py-24 md:py-36"
        aria-label="做事理念"
      >
        <span className="ghost" aria-hidden="true">02</span>
        <div className="section-head">
          <h2 className="label">
            <span className="dot" aria-hidden="true" />
            做事理念
          </h2>
          <p className="label hidden md:block">三个词，一套标准</p>
        </div>

        <ul className="list-none">
          {vision.words.map((item) => (
            <li
              key={item.en}
              data-reveal
              className="group border-b border-[#e8e8e4] py-5 first:border-t md:py-7"
            >
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 md:gap-x-11">
                <span className="min-w-[3ch] text-xs font-semibold tracking-[0.2em] text-[#6b6b6b]">
                  {item.index}
                </span>
                <h3 className="m-0 flex flex-wrap items-baseline gap-x-6 gap-y-1 md:gap-x-11">
                  <span className="hl-hover text-[clamp(40px,8.5vw,120px)] font-extrabold uppercase leading-none tracking-[-0.045em] group-hover:pl-4">
                    {item.en}
                  </span>
                  <span className="text-[clamp(20px,2.6vw,34px)] font-bold text-[#1a1a1a]">
                    {item.zh}
                  </span>
                </h3>
              </div>
              <p className="mt-2 pl-[3ch] text-[13px] leading-[1.6] text-[#6b6b6b] md:pl-[calc(3ch+44px)]">
                {item.note}
              </p>
            </li>
          ))}
        </ul>
        <p data-reveal className="mt-8 max-w-[36ch] text-sm leading-[1.7] text-[#555555]">
          {vision.tagline}
        </p>
      </section>
    </div>
  );
}
