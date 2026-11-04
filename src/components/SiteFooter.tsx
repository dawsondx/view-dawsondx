"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { beian, contactRows, resources, siteConfig } from "@/data/personal";
import { useReveal } from "@/hooks/useReveal";

export function SiteFooter() {
  const footerRef = useReveal<HTMLElement>();
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const copyWechat = async () => {
    const value = siteConfig.wechat;

    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const field = document.createElement("textarea");
      field.value = value;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }

    setCopied(true);
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="section-pad relative z-[1] overflow-hidden pb-9 pt-24 md:pt-36"
    >
      <span className="ghost" aria-hidden="true">06</span>
      <p className="label">
        <span className="dot" aria-hidden="true" />
        联系方式
      </p>

      <div className="mt-8 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
        <h2
          data-reveal
          className="max-w-[17ch] text-[clamp(34px,5.4vw,80px)] font-bold leading-[1.1] tracking-[-0.04em]"
        >
          有 Office 难题，<br />
          或想<span className="hl">定制一份 PPT</span>？
        </h2>

        <a href={`mailto:${siteConfig.email}`} className="btn shrink-0">
          发邮件给我 <span className="ar" aria-hidden="true">→</span>
        </a>
      </div>

      <section
        id="collaborate"
        className="pf-appendix"
        aria-labelledby="appendix-title"
      >
        <div className="section-head">
          <p className="label" id="appendix-title">
            <span className="dot" aria-hidden="true" />
            附录 · 资料与协作
          </p>
          <p className="label hidden md:block">APPENDIX / OPEN FOR WORK</p>
        </div>

        <div className="pf-appendix-grid" data-reveal>
          <div className="pf-appendix-item">
            <span className="pf-appendix-mark" aria-hidden="true">A</span>
            <div className="pf-appendix-body">
              <p className="pf-kicker">KNOWLEDGE BASES / IMA</p>
              {resources.knowledgeBases.map((knowledgeBase) => (
                <article className="pf-kb" key={knowledgeBase.id}>
                  <h3>{knowledgeBase.title}</h3>
                  <p className="pf-kb-desc">{knowledgeBase.description}</p>
                  <p className="pf-appendix-feature">{knowledgeBase.feature}</p>
                  <div className="pf-appendix-foot">
                    <span className="pf-qr">
                      <Image
                        src={knowledgeBase.qr}
                        alt={knowledgeBase.qrAlt}
                        width={58}
                        height={58}
                        className="object-contain"
                      />
                    </span>
                    {knowledgeBase.members ? (
                      <span className="pf-appendix-stat">
                        {knowledgeBase.members}
                        <span>MEMBERS</span>
                      </span>
                    ) : null}
                    <a
                      className="pf-appendix-link"
                      href={knowledgeBase.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`打开${knowledgeBase.title}知识库`}
                    >
                      打开知识库 ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="pf-appendix-item">
            <span className="pf-appendix-mark" aria-hidden="true">B</span>
            <div className="pf-appendix-body">
              <p className="pf-kicker">OPEN FOR WORK</p>
              <h3>{resources.collaborate.title}</h3>
              <p>{resources.collaborate.description}</p>
              <div className="pf-appendix-foot">
                <span className="pf-wechat">
                  <span className="pf-qr">
                    <Image
                      src={resources.collaborate.wechatQr}
                      alt="微信二维码"
                      width={58}
                      height={58}
                    />
                  </span>
                  <span className="pf-wechat-label">扫码加微信</span>
                </span>
                <button
                  type="button"
                  className={`pf-copy${copied ? " is-copied" : ""}`}
                  onClick={copyWechat}
                >
                  {copied ? `已复制 ${siteConfig.wechat}` : `复制微信 ${siteConfig.wechat}`}
                </button>
                <span className="sr-only" role="status">
                  {copied ? "微信号已复制到剪贴板" : ""}
                </span>
                <span className="pf-appendix-note">备注来意 · 一天内回复</span>
              </div>
              <div className="pf-channels">
                {resources.channels.map((channel) => (
                  <div key={channel.name} className="pf-channel">
                    <Image
                      src={channel.qr}
                      alt={`${channel.name}二维码`}
                      width={34}
                      height={34}
                    />
                    <span>
                      {channel.name}
                      <small>{channel.desc}</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-20 md:mt-28">
        <p className="label mb-3">找到我</p>
        <div>
          {contactRows.map((row) => (
            <a
              key={row.key}
              href={row.href}
              target={row.href.startsWith("http") ? "_blank" : undefined}
              rel={row.href.startsWith("http") ? "noreferrer" : undefined}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-[#e8e8e4] px-1 py-4 transition-[padding-left] duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] last:border-b hover:pl-4"
            >
              <span className="contact-key text-[15px] font-semibold">{row.key}</span>
              <span className="truncate text-[13px] text-[#6b6b6b]">{row.value}</span>
              <span
                aria-hidden="true"
                className="text-[#6b6b6b] transition-[transform,color] duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1.5 group-hover:text-[#1a1a1a]"
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-[13px] text-[#6b6b6b]">
        <span className="w-full md:w-auto">
          &copy; 2026 {siteConfig.name}
          <br className="md:hidden" />
          <span className="hidden md:inline"> · </span>
          <span className="text-[12px] md:text-[13px]">{siteConfig.title}</span>
        </span>
        <span>{siteConfig.location} · 可远程协作</span>
        <a href="#top" className="transition-colors duration-300 hover:text-[#1a1a1a]">
          ↑ 回到顶部
        </a>
      </div>

      <div className="mt-8 border-t border-[#e8e8e4] pt-6 text-center text-[11px] leading-[2] text-[#6b6b6b]">
        <p>
          <a
            href={beian.icpUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-[#1a1a1a]"
          >
            {beian.icp}
          </a>
        </p>
        <p className="inline-flex items-center gap-1.5">
          <Image src="/beian.png" alt="" width={36} height={40} className="inline-block h-3 w-auto" />
          <a
            href={beian.policeUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-[#1a1a1a]"
          >
            {beian.police}
          </a>
        </p>
      </div>
    </footer>
  );
}
