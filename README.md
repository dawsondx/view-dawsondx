# Dawson · 个人作品集

Dawson 的个人网站：Office 培训讲师、PPT 定制设计师、神器收藏家、AI 应用探索者。

线上地址：[view.dawsondx.top](https://view.dawsondx.top/)

## 技术栈

- Next.js 16（App Router）+ React 19 + TypeScript
- Tailwind CSS v4 + oklch 设计令牌
- 编辑排版风格：PP Editorial New / Martian Mono
- 响应式布局：桌面双栏书页，平板与移动端单栏

## 本地开发

```bash
npm install
npm run dev
```

访问 `http://localhost:3000`。

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 生产构建（standalone 输出） |
| `npm run lint` | ESLint 检查 |
| `npm run typecheck` | TypeScript 检查 |
| `npm run check` | lint + typecheck + build |

## 目录结构

```text
src/
  app/          # 路由、全局样式与页面元信息
  components/   # 页面区块与交互组件
  data/         # 作品、知识库、技能等站点内容
  hooks/        # 滚动揭示等自定义 hooks
public/         # 字体、二维码、头像与站点图片
docs/           # 设计与逆向研究资料
```

## 部署

当前构建产物为 Next.js standalone，可部署到任意 Node.js 环境或 Vercel。仓库不包含 GitHub Pages 部署配置。

## 来源与许可

项目骨架基于 [AI Website Cloner Template](https://github.com/JCodesMore/ai-website-cloner-template)（MIT License），页面设计、文案与内容已重做为 Dawson 的个人作品集。

代码以 MIT License 发布。
