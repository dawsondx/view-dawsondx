export const siteConfig = {
  name: "Dawson",
  title: "Office 培训讲师 ｜ PPT 设计师 ｜ 神器收藏家",
  location: "深圳",
  email: "dawsondx@foxmail.com",
  wechat: "dawsondx00",
  slogan: "把复杂留给工具，把效率还给工作",
} as const;

export const hero = {
  identities: ["Office 培训讲师", "PPT 定制设计师", "神器收藏家", "AI 应用探索者"],
  declaration:
    "十年深耕 Office 培训与知识管理，以「匠心」做设计，用「神器」提效率，陪你在职场里持续进化。",
} as const;

export const about = {
  title: "6 年 3 次转行，最终把「教会别人」做成事业",
  story: [
    "通过项目管理 PMP 认证，6 年先后转行 3 次——做过数据稽核，做过互联网产品，也做过综合管理，深知职场里每一次「不会」有多贵。",
    "从纯小白纯自学起步，成为秋叶 Office 的 ToB&C 核心助教，参与过两轮 Office 课程研发升级，并执笔《秒懂 Word》书稿的部分章节。",
    "现在是「佛系接单但匠心设计」的定制设计师——每一份 PPT、每一张海报，都按作品的标准交付。",
    "会 Word、Excel、PPT，也玩 PS、PR、文案、运营和 AI 智能体——一个持续进化的互联网多面手。",
  ],
  tags: [
    "秋叶 Office 核心助教",
    "《秒懂 Word》著书合作者",
    "职场加速器认证培训讲师",
    "匠心定制设计师",
    "Excel 高效技巧研究爱好者",
    "阿猫觉醒合伙人",
    "粥左罗顶峰会会员",
  ],
} as const;

export const vision = {
  words: [
    { index: "A.", en: "CRAFT", zh: "匠心", note: "佛系接单，但每一份交付都按作品标准打磨" },
    { index: "B.", en: "EFFICIENCY", zh: "效率", note: "800+ 神器收藏，帮职场人把时间还给思考" },
    { index: "C.", en: "GROWTH", zh: "成长", note: "6 年 3 次转行的亲身验证：方法比天赋可靠" },
  ],
  tagline: "把复杂留给工具，把效率还给工作——这是我所有服务的底层逻辑。",
} as const;

export const portfolio = {
  pdfHref: "https://xyrr6q2wpo.feishu.cn/wiki/CQryw8TndidRKSkHs1KcEz18nfg",
  pdfMeta: "PDF / 2.5MB · 飞书云文档",
  proofNote: "数字不是目标，是持续交付价值留下的刻度。",
  cases: [
    {
      id: "office-camp",
      no: "01",
      variant: "camp",
      category: "教育培训 / 助教",
      title: "秋叶 Office 打卡营",
      description:
        "连续 7 期核心助教，日均答疑数十条。把「不会」拆成可以照着做的步骤。",
      metricValue: "7",
      metricSuffix: "期+",
      metricLabel: "7 期+",
      cover: {
        topLeft: "01 / 教育",
        topRight: "7 TERMS / CORE TA",
        name: ["秋叶 Office", "打卡营"],
        role: ["核心助教", "答疑 / 点评"],
        side: "OFFICE CAMP / ANSWER & REVIEW",
      },
    },
    {
      id: "ppt-template",
      no: "02",
      variant: "deck",
      category: "设计 / 模板",
      title: "51PPT 模板设计",
      description: "单套免费模板下载 5500+，用可复用的版式把内容放进专业框架。",
      metricValue: "5500",
      metricSuffix: "+",
      metricLabel: "5500+",
      cover: {
        topLeft: "02 / 设计",
        topRight: "TEMPLATE / 51PPT",
        name: ["51PPT", "模板设计"],
        role: ["单模板下载", "版式系统"],
        side: "TEMPLATE / LAYOUT SYSTEM",
      },
    },
    {
      id: "knowledge-base",
      no: "03",
      variant: "library",
      category: "知识产品 / 知识库",
      title: "《工具神器搜罗》",
      description: "800+ 工具整理成可检索的知识库，1W+ 人加入，ima 官方每周精选。",
      metricValue: "1W",
      metricSuffix: "+",
      metricLabel: "1W+",
      cover: {
        topLeft: "03 / 知识",
        topRight: "IMA / KNOWLEDGE BASE",
        name: ["《工具神器", "搜罗》"],
        role: ["1W+ 用户", "官方精选"],
        side: "KNOWLEDGE BASE / 800+ TOOLS",
      },
    },
    {
      id: "course-development",
      no: "04",
      variant: "book",
      category: "出版 / 课研",
      title: "《秒懂 Word》书稿",
      description: "参与书稿撰写与 Excel 课件制作，把经验写成可复用的教材。",
      metricValue: "2",
      metricSuffix: "项",
      metricLabel: "2 项",
      cover: {
        topLeft: "04 / 出版",
        topRight: "BOOK / COURSEWARE",
        name: ["书稿 / 课件"],
        role: ["著书合作者", "秋叶 Office"],
        side: "BOOK / COURSEWARE",
        note: ["《秒懂 Word》书稿撰写", "《和秋叶一起学 Excel》课件 / 剪辑"],
      },
    },
  ],
  also: [
    { title: "职场加速器", detail: "认证讲师 · 2 期 · 线下 ToB 助教" },
    { title: "定制设计", detail: "PPT / 海报 · 变现 ¥1 万+ · 教育 / 互联网 / 传统企业" },
    { title: "AI 实践", detail: "智能体 / 番茄钟 / 浏览器扩展" },
  ],
} as const;

export const resources = {
  knowledgeBases: [
    {
      id: "tool-trove",
      title: "《工具神器搜罗》",
      description:
        "800+ 工具整理成语雀「哆啦口袋」小组与 ima 知识库，1W+ 人在用，覆盖办公效率、设计创作、AI 智能、开发工具。",
      feature: "ima 官方每周精选 · 7.21 — 7.27",
      href: "https://ima.qq.com/wiki/?shareId=07061007500c6201187ddb696ec0b8417b2d3a74dc33a558bdf9f6d070410ef9",
      members: "1W+",
      qr: "/qrcode-ima.webp",
      qrAlt: "《工具神器搜罗》ima 知识库二维码",
    },
    {
      id: "ai-tools",
      title: "《AI 工具与实战库》",
      description:
        "AI 工具与实战方法合集，从入门操作到自动化落地，按主题整理，持续更新。",
      feature: "从入门到自动化落地",
      href: "https://ima.qq.com/wiki/?shareId=faa040dae70a54e5f8b8695c459e4c0ee2bdecca7c1b89eaffde1d54888b1247",
      members: null,
      qr: "/qrcode-ima-ai-tools.png",
      qrAlt: "《AI 工具与实战库》ima 知识库二维码",
    },
  ],
  collaborate: {
    title: "开放合作",
    description: "企业培训 / PPT 与海报定制 / 效率咨询。深圳，可远程协作。",
    location: "深圳 · 可远程协作",
    wechatQr: "/qrcode-wechat.webp",
  },
  channels: [
    { name: "公众号", desc: "神器分享 & 效率技巧", qr: "/qrcode-gzh-square.png" },
    { name: "小红书", desc: "设计日常 & 干货笔记", qr: "/qrcode-xhs-square.png" },
  ],
} as const;

export const services = [
  {
    index: "01",
    name: "Office 疑难杂症解答",
    tag: "答疑",
    description: "基于 7 期秋叶 Office 助教经验，快速定位并解决 Excel、Word、PPT 的各类难题。",
    features: [
      "7 期打卡营 · 日均答疑数十条",
      "好评率稳居前列",
      "覆盖 Office 全家桶",
      "给出最佳实践而非一次性答案",
    ],
  },
  {
    index: "02",
    name: "PPT 定制设计",
    tag: "设计",
    description: "匠心定制，从逻辑梳理到视觉呈现的一站式 PPT 服务，按作品标准交付。",
    features: ["5500+ 下载的模板设计功力", "逻辑 + 视觉双重打磨", "适配发布会、汇报、课件等场景"],
  },
  {
    index: "03",
    name: "海报设计",
    tag: "视觉",
    description: "结合 Photoshop 与排版经验，为活动、课程、品牌提供专业海报设计。",
    features: ["多风格适配", "印刷与屏幕双场景输出", "快速交付"],
  },
  {
    index: "04",
    name: "神器分享 & 效率咨询",
    tag: "效率",
    description: "从 800+ 工具收藏中精准匹配，为个人与团队搭建效率工作流。",
    features: ["两座 ima 知识库主理 · 1W+ 用户", "AI 工具落地辅导", "自动化流程设计"],
  },
] as const;

export const skills = [
  { name: "Excel", category: "办公软件", level: "精通", percent: 90, note: "函数 / 数据分析 / VBA" },
  { name: "Word", category: "办公软件", level: "精通", percent: 90, note: "《秒懂 Word》书稿撰写 / 文档排版" },
  { name: "PowerPoint", category: "办公软件", level: "精通", percent: 90, note: "定制设计 / 模板制作 / 培训教学" },
  { name: "Photoshop", category: "设计软件", level: "熟练", percent: 78, note: "图像处理 / 海报 / 视觉设计" },
  { name: "Premiere / 剪映", category: "设计软件", level: "熟练", percent: 75, note: "视频剪辑 / 短视频" },
  { name: "AI 工具应用", category: "新兴技术", level: "熟练", percent: 82, note: "智能体开发 / 效率提升" },
  { name: "AI 编程", category: "新兴技术", level: "熟练", percent: 80, note: "番茄钟 / 浏览器扩展 / 小工具" },
  { name: "VBA 开发", category: "编程技能", level: "熟练", percent: 75, note: "Excel 自动化 / Office 插件" },
] as const;

export const contactRows = [
  { key: "邮箱", value: "dawsondx@foxmail.com", href: "mailto:dawsondx@foxmail.com" },
  { key: "微信", value: "dawsondx00（备注来意）", href: "#collaborate" },
  { key: "知乎", value: "zhihu.com/people/dawsondx", href: "https://www.zhihu.com/people/dawsondx" },
  { key: "小红书", value: "@Dawson", href: "https://www.xiaohongshu.com/user/profile/6303a620000000001200d7bd" },
  { key: "语雀", value: "yuque.com/dawsondx", href: "https://www.yuque.com/dawsondx" },
] as const;

export const beian = {
  icp: "粤ICP备2025454561号-1",
  police: "粤公网安备44030002007584号",
  policeUrl: "https://beian.mps.gov.cn/#/query/webSearch?code=44030002007584",
  icpUrl: "https://beian.miit.gov.cn/#/Integrated/recordQuery",
} as const;
