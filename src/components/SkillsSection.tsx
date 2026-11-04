"use client"

import { useReveal } from "@/hooks/useReveal"
import { skills } from "@/data/personal"

export function SkillsSection() {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section-pad relative overflow-hidden py-24 md:py-36"
      aria-labelledby="skills-title"
    >
      <span className="ghost" aria-hidden="true">05</span>
      <div className="section-head">
        <h2 className="label">
          <span className="dot" aria-hidden="true" />
          <span id="skills-title">专业技能</span>
        </h2>
        <p className="label hidden md:block">办公 / 设计 / AI / 编程</p>
      </div>

      <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
        {skills.map((skill) => (
          <article key={skill.name} data-reveal className="group">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[clamp(18px,2vw,24px)] font-bold tracking-[-0.02em]">
                {skill.name}
              </h3>
              <span className="text-[13px] font-semibold tabular-nums text-[#6b6b6b]">
                {skill.level} · {skill.percent}%
              </span>
            </div>
            <p className="mt-1 text-[12px] text-[#6b6b6b]">
              {skill.category} · {skill.note}
            </p>
            <div
              className="mt-3 h-[6px] overflow-hidden rounded-full bg-[#f0f0ec]"
              role="progressbar"
              aria-valuenow={skill.percent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${skill.name} 熟练度 ${skill.percent}%`}
            >
              <div
                className="skill-bar h-full rounded-full bg-[#ffe28a] transition-[width] duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
                style={{ width: `${skill.percent}%` }}
              />
            </div>
          </article>
        ))}
      </div>

      <p data-reveal className="mt-10 max-w-[40ch] text-sm leading-[1.7] text-[#555555]">
        从 Office 全家桶到 AI 智能体——工具会迭代，<span className="hl">解决问题的能力</span>不会过时。
      </p>
    </section>
  )
}
