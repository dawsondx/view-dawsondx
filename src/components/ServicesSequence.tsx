"use client"

import { useReveal } from "@/hooks/useReveal"
import { services } from "@/data/personal"

export function ServicesSequence() {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-pad relative overflow-hidden py-24 md:py-36"
      aria-labelledby="services-title"
    >
      <span className="ghost" aria-hidden="true">04</span>
      <div className="section-head">
        <h2 className="label">
          <span className="dot" aria-hidden="true" />
          <span id="services-title">服务内容</span>
        </h2>
        <p className="label hidden md:block">答疑 / 设计 / 效率</p>
      </div>

      <ol className="list-none">
        {services.map((service) => (
          <li
            key={service.index}
            data-reveal
            className="group border-b border-[#e8e8e4] px-1.5 py-7 transition-[padding-left] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] first:border-t hover:pl-5 md:py-9"
          >
            <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4 md:gap-11">
              <span className="text-xs font-semibold tracking-[0.14em] text-[#6b6b6b]">
                {service.index}
              </span>
              <h3 className="m-0 text-[clamp(26px,4.2vw,56px)] font-extrabold leading-[1.08] tracking-[-0.035em]">
                <span
                  aria-hidden="true"
                  className="dot -ml-1 mb-0.5 scale-[0.4] opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-100 group-hover:opacity-100"
                />
                {service.name}
              </h3>
              <span className="hidden text-[11px] uppercase tracking-[0.22em] text-[#6b6b6b] sm:block">
                {service.tag}
              </span>
            </div>
            <p className="mt-3 max-w-[52ch] pl-[calc(2ch+16px)] text-[14px] leading-[1.7] text-[#555555] md:pl-[calc(2ch+44px)]">
              {service.description}
            </p>
            <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 pl-[calc(2ch+16px)] text-[12px] text-[#6b6b6b] md:pl-[calc(2ch+44px)]">
              {service.features.map((feature) => (
                <span key={feature} className="inline-flex items-center gap-1.5">
                  <span aria-hidden="true" className="dot scale-[0.55]" />
                  {feature}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ol>

      <p data-reveal className="mt-8 max-w-[38ch] text-sm leading-[1.7] text-[#555555]">
        佛系接单，匠心交付——每一个需求，都值得被认真对待。
      </p>
    </section>
  )
}
