import Image from "next/image";
import { hero, siteConfig } from "@/data/personal";

const IDENTITIES = hero.identities;
const CIRCLED_INDEX = 1;

export function HeroSection() {
  return (
    <section id="hero" className="hero-shell section-pad" aria-labelledby="hero-title">
      <svg className="doodle doodle-star" viewBox="0 0 90 90" aria-hidden="true">
        <path d="M45 8 L52 34 L79 34 L57 50 L65 78 L45 61 L25 78 L33 50 L11 34 L38 34 Z" />
      </svg>
      <svg className="doodle doodle-arrow" viewBox="0 0 110 60" aria-hidden="true">
        <path d="M6 50 C 30 12, 60 12, 92 30" />
        <path d="M80 24 L93 30 L84 40" />
      </svg>

      <p className="hero-kicker label">
        <span className="hero-avatar" aria-hidden="true">
          <Image src="/touxiang.webp" alt="" width={44} height={44} className="rounded-full object-cover" />
        </span>
        <span className="dot" aria-hidden="true" />
        {siteConfig.name} · {siteConfig.location} · 独立培训师
      </p>

      <h1 id="hero-title" className="hero-heading">
        <span className="lmask"><span className="d1">你好，</span></span>
        <span className="lmask"><span className="d2">我是</span></span>{" "}
        <span className="lmask"><span className="d3">Dawson</span></span>
      </h1>

      <p className="hero-identity">
        {IDENTITIES.map((word, i) => {
          const item =
            i === CIRCLED_INDEX ? (
              <span className="id-circled">
                {word}
                <svg
                  className="id-circle"
                  viewBox="0 0 100 44"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    pathLength={1}
                    vectorEffect="non-scaling-stroke"
                    d="M50 3 C 22 1, 4 10, 5 22 C 6 35, 28 42, 54 41 C 80 40, 97 31, 95 19 C 93 8, 74 2, 46 4"
                  />
                </svg>
              </span>
            ) : (
              word
            );

          return (
            <span key={word} className="id-group">
              {item}
              {i < IDENTITIES.length - 1 && <span className="sr-only">，</span>}
            </span>
          );
        })}
      </p>

      <div className="hero-foot">
        <p className="max-w-[36ch] text-[15px] leading-[1.7] text-[#555555]">
          {hero.declaration}
        </p>
        <a className="btn" href="#contact">
          聊聊合作 <span className="ar" aria-hidden="true">→</span>
        </a>
        <div className="flex w-full flex-wrap gap-x-7 gap-y-2 text-[13px] text-[#6b6b6b] sm:w-auto">
          <span>7 期秋叶 Office 打卡营核心助教</span>
          <span>深圳 · 可远程协作</span>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span className="arr">↓</span>
        <span>Scroll</span>
      </div>
    </section>
  );
}
