/**
 * 访问统计配置。
 *
 * Cloudflare Web Analytics 的 beacon token 不在这里：官方片段按原样硬编码在
 * `src/app/layout.tsx` 的 body 末尾（见该文件注释），不经过这层配置。
 *
 * 这里只剩「页面显示累计访问次数」用的 Worker 接口地址。留空时：
 * 不发起计数请求，站点行为与之前完全一致。填写方式见 docs/analytics-setup.md。
 *
 * 注意：这个值是公开的（会出现在前端产物里），不必当密钥保管。
 */

type AnalyticsConfig = {
  /** Cloudflare Worker 计数接口地址，例：https://view-visits.your-name.workers.dev */
  visitsApi: string;
};

export const analytics: AnalyticsConfig = {
  visitsApi: "",
};
