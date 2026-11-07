import Image from "next/image";
import { hero, siteConfig } from "@/data/personal";

export function HeroSection() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid page-shell">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {siteConfig.name} · {siteConfig.location} · AI WORKFLOW / INDIE DEV
          </p>

          <h1 id="hero-title" className="hero-title">
            <span>把复杂，</span>
            <span>
              做成<span className="text-lime">清晰</span>的
            </span>
            <span>答案。</span>
          </h1>

          <p className="hero-roles">{hero.identities.join(" × ")}</p>
          <p className="hero-description">{hero.declaration}</p>

          <div className="hero-actions">
            <a className="button button--lime" href="#work">
              看精选作品 <span aria-hidden="true">↓</span>
            </a>
            <a className="button button--ghost" href="#contact">
              聊聊合作 <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ul className="hero-proof" aria-label="经历与成果">
            {hero.proof.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-art" aria-label="Dawson 的 AI 工作流数字工作台">
          <div className="hero-art-meta">
            <span>AI / SYSTEMS / AUTOMATION</span>
            <span>SHENZHEN · REMOTE</span>
          </div>
          <Image
            src="/images/hero-workbench.webp"
            alt="由幻灯片、工具模块、书本与几何体组成的蓝色 3D 数字工作台"
            width={1024}
            height={936}
            priority
            className="hero-art-image"
          />
          <p className="hero-art-caption">
            <span>IDEAS INTO SYSTEMS</span>
            <span aria-hidden="true">✳</span>
          </p>
        </div>
      </div>

      <a href="#work" className="scroll-cue" aria-label="向下浏览精选作品">
        <span>SCROLL TO EXPLORE</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
