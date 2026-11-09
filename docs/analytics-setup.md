# 访问统计接入说明

两套能力，互相独立，都免费用、都不影响现有页面：

| 能力 | 实现 | 你要做的 |
| --- | --- | --- |
| 后台看板（来源/国家/设备/热门页面） | Cloudflare Web Analytics | 拿 1 个 token 填进代码 |
| 页面显示「累计访问 xxxx 次」 | Cloudflare Worker + D1 | 部署 1 个 Worker，拿 1 个 URL 填进代码 |

配置都集中在 `src/data/analytics.ts`。两个值都留空时，站点不加载任何统计脚本，行为与之前一致。

这两个值都会出现在前端产物里，属公开信息，不是密钥。

---

## 一、Cloudflare Web Analytics（后台看板）

1. 登录 <https://dash.cloudflare.com/>。
2. 左侧菜单 **Analytics & Logs → Web Analytics**。
3. 点 **Add a site**。
4. 输入 `view.dawsondx.top`，继续。
5. 关键一步：选择 **Manually add a site**（不要选自动安装）。
   - 本站托管在 GitHub Pages，流量不经过 Cloudflare 代理，所以只能手动装脚本。
6. 复制给出的 JS 片段，里面形如：

   `{"token":"a1b2c3d4e5f6..."}`

   只取 `token` 后面的那串字符。
7. 填到 `src/data/analytics.ts`：

   ```ts
   cfBeaconToken: "a1b2c3d4e5f6...",
   ```

数据延迟约 5–10 分钟出现在看板。首次部署后如果显示「No data」，先等半小时再刷新。

### 为什么脚本是自托管的

官方片段引用 `static.cloudflareinsights.com`。该域名在中国大陆网络下连接会被重置（浏览器报 `ERR_CONNECTION_CLOSED`，实测直连超时），国内访客根本加载不到脚本，统计会完全是空的。

所以 `public/beacon.min.js` 存了一份副本，页面通过 `src="/beacon.min.js"` 从本站同域加载。脚本内部的上报端点是 `cloudflareinsights.com/cdn-cgi/rum`，与 CDN 域名无关，不受影响。

代价是 Cloudflare 升级 beacon 时不会自动跟进。需要更新时：

```bash
curl -o public/beacon.min.js https://static.cloudflareinsights.com/beacon.min.js
```

这一步需要一个能访问 Cloudflare CDN 的网络环境（公司网络或代理）。


---

## 二、Worker 计数器（页面显示访问量）

### 前置

- Node.js 已装（本项目要求 24+）。
- 有如下任意一个终端：Git Bash / PowerShell / Windows Terminal。

### 步骤

全部命令在**项目根目录**执行。

**1. 登录 Cloudflare**

```bash
npx wrangler login
```

浏览器会弹出授权页，点 **Allow**。终端出现 `Successfully logged in` 即可。

**2. 创建 D1 数据库**

```bash
npx wrangler d1 create view-visits
```

输出里有一段配置，形如：

```
[[d1_databases]]
binding = "DB"
database_name = "view-visits"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

把其中的 `database_id` 复制，填到 `worker/wrangler.toml` 的空字符串处。

**3. 建表**

```bash
cd worker
npx wrangler d1 execute view-visits --remote --file=./schema.sql
```

出现 `Executed 2 queries` 即成功。

**4. 部署 Worker**

```bash
npx wrangler deploy
```

输出里会给出访问地址，形如：

```
https://view-visits.your-name.workers.dev
```

**5. 自测**

```bash
curl https://view-visits.your-name.workers.dev
```

返回 `{"count":1}`，再执行一次返回 `{"count":2}`，说明自增正常。

**6. 填进代码**

```ts
visitsApi: "https://view-visits.your-name.workers.dev",
```

（`wrangler.toml` 里的 `database_id` 记得保存，后续更新 Worker 要靠它。）

---

## 三、上线

```bash
git add -A
git commit -m "feat: 接入访问统计"
git push
```

GitHub Actions 会自动构建部署。约 2 分钟后打开 <https://view.dawsondx.top/>，拉到页脚能看到「累计访问 N 次」。

---

## 四、日常维护

**改 Worker 逻辑后重新部署**

```bash
cd worker
npx wrangler deploy
```

**手动改数字**（比如想归零重来）

```bash
cd worker
npx wrangler d1 execute view-visits --remote --command "UPDATE visits SET count = 0 WHERE id = 'total'"
```

**直接查当前值**

```bash
cd worker
npx wrangler d1 execute view-visits --remote --command "SELECT count FROM visits WHERE id = 'total'"
```

---

## 五、额度和边界

| 项 | 免费额度 | 说明 |
| --- | --- | --- |
| Cloudflare Web Analytics | 不限 | 无 cookie，不收集个人信息 |
| Workers 请求 | 10 万/天 | 个人站绰绰有余 |
| D1 行写入 | 10 万/天 | 每次计数 1 次写 |
| D1 存储 | 5 GB | 本表只占几 KB |

**计数口径**：每次页面加载 +1，即 PV。刷新会涨；同一人多次访问会重复计。

**已知限制**：`visitsApi` 是公开接口，理论上可被脚本刷量。个人作品集不值得为此加验证；若真被刷，可在 Worker 里加 Cloudflare Turnstile 或按 `cf-connecting-ip` 做冷却。

**数据不互通**：Cloudflare Web Analytics 的 PV 和后端表里的数字是两套独立统计，数值不会一致（前者过滤了部分爬虫和预渲染）。
