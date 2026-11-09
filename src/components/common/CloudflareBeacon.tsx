import { analytics } from "@/data/analytics";

/**
 * Cloudflare Web Analytics beacon。
 *
 * 用原生 script 而非 next/script：静态导出下 next/script 只输出 preload，
 * 真正的脚本要等 hydration 后才注入；原生标签则在 HTML 解析阶段就开始加载。
 */
export function CloudflareBeacon() {
  if (!analytics.cfBeaconToken) return null;

  return (
    <script
      async
      type="module"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token: analytics.cfBeaconToken })}
    />
  );
}
