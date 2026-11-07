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
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.wechat);
    } catch {
      const field = document.createElement("textarea");
      field.value = siteConfig.wechat;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }

    setCopied(true);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <footer ref={footerRef} id="contact" className="contact-section section-pad">
      <div className="page-shell">
        <p className="section-label" data-reveal><span>05</span> START A CONVERSATION</p>
        <div className="contact-hero" data-reveal>
          <h2>下一个复杂问题，<br />交给我试试<span>。</span></h2>
          <div className="contact-actions">
            <a href={`mailto:${siteConfig.email}`} className="button button--dark">
              发邮件给我 <span aria-hidden="true">↗</span>
            </a>
            <button type="button" className={copied ? "button button--outline is-copied" : "button button--outline"} onClick={copyWechat}>
              {copied ? "微信号已复制" : `复制微信 ${siteConfig.wechat}`} <span aria-hidden="true">{copied ? "✓" : "↗"}</span>
            </button>
            <p className="contact-scope">企业级 AI Agent / 工作流定制 / 年度陪伴群 / Office 与设计交付</p>
            <span className="sr-only" role="status">{copied ? "微信号已复制到剪贴板" : ""}</span>
          </div>
        </div>

        <div className="contact-grid" data-reveal>
          <div className="contact-direct">
            <p className="section-label">DIRECT / 联系方式</p>
            {contactRows.map((row) => (
              <a
                key={row.key}
                href={row.href}
                target={row.href.startsWith("http") ? "_blank" : undefined}
                rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                className="contact-row"
              >
                <strong>{row.key}</strong>
                <span>{row.value}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>

          <div className="contact-channels">
            <div id="collaborate" className="wechat-card">
              <Image src={resources.collaborate.wechatQr} alt="Dawson 微信二维码" width={132} height={132} />
              <div>
                <p className="section-label">WECHAT</p>
                <h3>扫码加微信</h3>
                <p>{resources.collaborate.description} 备注来意，更容易快速进入正题。</p>
              </div>
            </div>
            <div className="channel-pair">
              {resources.channels.map((channel) => (
                <div key={channel.name} className="channel-card">
                  <Image src={channel.qr} alt={`${channel.name}二维码`} width={72} height={72} />
                  <strong>{channel.name}</strong>
                  <span>{channel.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-meta">
          <div>
            <span className="brand-mark">D/</span>
            <p>© 2026 {siteConfig.name}<br />{siteConfig.title}</p>
          </div>
          <a href="#top" className="back-top">回到顶部 ↑</a>
        </div>

        <div className="legal">
          <a href={beian.icpUrl} target="_blank" rel="noreferrer">{beian.icp}</a>
          <a href={beian.policeUrl} target="_blank" rel="noreferrer">
            <Image src="/beian.png" alt="" width={36} height={40} />
            {beian.police}
          </a>
        </div>
      </div>
    </footer>
  );
}
