import { analytics } from "@/data/analytics";

/**
 * Cloudflare Web Analytics beacon —— 自托管版本。
 *
 * 为什么不用官方 CDN：`static.cloudflareinsights.com` 在中国大陆网络下连接会被重置
 * （curl 实测直连超时，浏览器报 ERR_CONNECTION_CLOSED），国内访客根本加载不到脚本。
 * 把 beacon 放到 public/ 跟随站点一起发布，访客从同一域名加载，绕开这条不可达的链路；
 * 脚本内部的上报端点 `cloudflareinsights.com/cdn-cgi/rum` 与 CDN 无关，实测可达。
 *
 * 代价：Cloudflare 升级 beacon 时不会自动跟进。需要更新时重新下载
 * https://static.cloudflareinsights.com/beacon.min.js 覆盖 public/beacon.min.js 即可。
 */
export function CloudflareBeacon() {
  if (!analytics.cfBeaconToken) return null;

  return (
    <script
      defer
      src="/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token: analytics.cfBeaconToken })}
    />
  );
}
