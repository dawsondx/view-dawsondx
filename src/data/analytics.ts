/**
 * 访问统计配置。
 *
 * 两个值都留空时：不加载任何统计脚本，也不发起计数请求，站点行为与之前完全一致。
 * 填写方式见 docs/analytics-setup.md。
 *
 * 注意：这两个值都是公开的（会出现在前端产物里），不必当密钥保管。
 */

type AnalyticsConfig = {
  /** Cloudflare Web Analytics beacon token，CF 后台 → Web Analytics → 添加站点后获得 */
  cfBeaconToken: string;
  /** Cloudflare Worker 计数接口地址，例：https://view-visits.your-name.workers.dev */
  visitsApi: string;
};

export const analytics: AnalyticsConfig = {
  cfBeaconToken: "f6194082d20c498298da7b02b9dfff64",
  visitsApi: "",
};
