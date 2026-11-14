export const siteConfig = {
  name: "Dawson",
  title: "AI 工作流架构师 ｜ 全栈独立开发者",
  location: "深圳",
  email: "dawsondx@foxmail.com",
  wechat: "dawsondx00",
  newsletter: "Dawson聊AI提效",
  slogan: "用 AI 打破信息差，打造普通人的第二成长曲线",
} as const;

export const hero = {
  identities: [
    "PMP 运维项目经理",
    "AI 产品与工作流架构师",
    "全栈独立开发者",
    "「Dawson聊AI提效」主理人",
  ],
  declaration:
    "PMP 认证的一线实体运维项目经理，也是深耕 AI 商业化落地的全栈独立开发者。用确定性的工程与自动化工具，帮传统行业职场人干掉低效重复工作。",
  proof: [
    { value: "3", label: "大型机场运维项目" },
    { value: "100+", label: "服务学员群" },
    { value: "1W+", label: "知识库用户" },
  ],
} as const;

export const about = {
  title: "从职场小白到 3 个大型机场项目，把 AI 用在最真实的一线。",
  story: [
    "PMP 认证的一线实体运维项目经理，拥有 3 个大型机场运维项目的全周期管理经验；同时是深耕 AI 商业化落地的全栈独立开发者。",
    "完整走过「职场小白 → 互联网 0-1 产品经理（软件 / 后台 / 小程序）→ 实体运维项目经理」的多次跨界跃迁。6 年 3 次转行，深知职场里每一次「不会」有多贵。",
    "从 Office 小白自学起步，成为秋叶 Office ToB&C 核心助教，参与两轮课程研发升级、执笔《秒懂 Word》部分章节，服务过 100+ 学员群，也做过 5,500+ 下载模板与万元级定制设计。",
    "擅长捕捉一线业务痛点，把复杂技术拆成普通人当天就能跑通的落地方案；主张用 AI 打破信息差，打造普通人的「第二成长曲线」。",
    "持续关注前沿 AI 工具与工程实践，把一线踩坑经验过滤沉淀后，通过公众号、社群和开源工具分享出来。",
  ],
  tags: [
    "PMP 认证",
    "3 个大型机场运维项目",
    "互联网 0-1 产品经理",
    "AI 产品与工作流架构师",
    "全栈独立开发者",
    "「Dawson聊AI提效」主理人",
    "一线业务痛点洞察",
    "秋叶 Office 核心助教",
    "《秒懂 Word》著书合作者",
    "100+ 学员群服务经验",
    "51PPT 5500+ 下载",
    "腾讯 ima 官方周精选",
  ],
} as const;

export const credentials = [
  { value: "PMP", label: "项目管理认证" },
  { value: "3", label: "大型机场运维项目" },
  { value: "100+", label: "服务学员群" },
  { value: "¥1万+", label: "设计定制变现" },
] as const;

export const vision = {
  words: [
    { index: "A.", en: "CRAFT", zh: "匠心", note: "AI 初稿加人工复核门禁，每一份交付都经得起业务检验" },
    { index: "B.", en: "EFFICIENCY", zh: "效率", note: "把高频重复工作封装成可复用的工具、工作流与工程系统" },
    { index: "C.", en: "GROWTH", zh: "成长", note: "用 AI 打破信息差，让非技术背景的人也能低门槛上手" },
  ],
  tagline: "不是因为厉害才开始，而是因为开始了才厉害。",
} as const;

export const portfolio = {
  pdfHref: "https://xyrr6q2wpo.feishu.cn/wiki/CQryw8TndidRKSkHs1KcEz18nfg",
  pdfMeta: "PDF / 2.5MB · 飞书云文档",
  proofNote: "数字不是目标，是持续交付价值留下的刻度。",
  cases: [
    {
      id: "open-source",
      no: "01",
      variant: "oss",
      category: "开源 / 独立开发",
      title: "开源产品矩阵",
      description:
        "5 个独立开发的开源工具：Doc2Exam、Skill 指北、Emoji Clip、报价沙盘、模拟面试。",
      metricValue: "5",
      metricSuffix: "项",
      metricLabel: "5 项",
      href: "https://github.com/dawsondx",
    },
    {
      id: "knowledge-base",
      no: "02",
      variant: "library",
      category: "知识产品 / 知识库",
      title: "《工具神器搜罗》",
      description: "800+ 工具整理成可检索的知识库，1W+ 人加入，ima 官方每周精选。",
      metricValue: "1W",
      metricSuffix: "+",
      metricLabel: "1W+",
      href: "https://ima.qq.com/wiki/?shareId=07061007500c6201187ddb696ec0b8417b2d3a74dc33a558bdf9f6d070410ef9",
      cover: {
        topLeft: "03 / 知识",
        topRight: "IMA / KNOWLEDGE BASE",
        name: ["《工具神器", "搜罗》"],
        role: ["1W+ 用户", "官方精选"],
        side: "KNOWLEDGE BASE / 800+ TOOLS",
      },
    },
    {
      id: "office-camp",
      no: "03",
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
      no: "04",
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
      id: "course-development",
      no: "05",
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
    { title: "年度陪伴群", detail: "59 元/年 · 即日起 — 2027.12.31" },
    { title: "企业级交付", detail: "Doc2Exam / 报价沙盘 / 测评报告自动化" },
    { title: "开源矩阵", detail: "Skill Compass / Emoji Clip / Doc2Exam" },
  ],
} as const;

export const businessTracks = [
  {
    index: "C",
    eyebrow: "FOR INDIVIDUALS",
    name: "认知升级与实战陪伴",
    description:
      "公众号「Dawson聊AI提效」持续输出一线实测过的 AI 工具工作流、独立开发复盘与提效指南；年度陪伴群提供超长周期实战陪伴。",
    meta: "Dawson 年度陪伴群 · 59 元/年 · 即日起 — 2027.12.31",
    slogan: "一起升级认知、玩转工具、跑赢时间",
    points: [
      "高价值信息差筛选",
      "AI 实战工作流与源码开源",
      "定制设计福利与 Office 兜底",
      "工具实操答疑",
      "适合职场人 / AI 学习者 / 副业行动派",
    ],
  },
  {
    index: "B",
    eyebrow: "FOR BUSINESS",
    name: "企业级 AI Agent 与工作流定制",
    description:
      "不做大模型抽卡，用确定性工程逻辑给 AI 套上缰绳：从业务边界、状态机、幂等性、有界重试到人工复核门禁，交付能抗住业务检验的系统。",
    meta: "Coze / 飞书多维表 / 独立前后端系统 / 工程化改造",
    slogan: "先弄清业务，再选择工具，最后交付系统",
    points: [
      "企业级 AI Agent 架构开发",
      "复杂业务工作流定制",
      "出处锁定与防幻觉溯源",
      "统一状态机与崩溃恢复",
      "私有化 / 本地化处理与交付",
    ],
  },
] as const;

export const enterpriseCases = [
  {
    id: "doc2exam",
    no: "01",
    name: "非标制度文档转标准化题库系统",
    description:
      "Doc2Exam：考点抽取、程序级 SourceBlock 防幻觉溯源、固定槽位与选项平衡、人工全量复核门禁，一键生成题目版与答案解析版双 Word。",
    tags: ["SSE 断点续传", "Idempotency-Key 幂等", "BYOK 数据不出本地"],
    link: { label: "查看源码", href: "https://github.com/dawsondx/Doc2Exam" },
  },
  {
    id: "bid-sandbox",
    no: "02",
    name: "工程与运维招投标价格策略沙盘",
    description:
      "投标价格优势判断器 Pro v6.6：零依赖单文件量化决策系统，内置 4 类基准价规则、竞对随机扰动与二维敏感性热力图，辅助锁定稳健报价区间。",
    tags: ["4 类基准价规则", "蒙特卡洛式扰动", "8%—22% 敏感性矩阵"],
    link: null,
  },
  {
    id: "report-automation",
    no: "03",
    name: "问卷结果自动化生成测评报告",
    description:
      "打通数据采集与结构化排版链路，实现千人千面长文本深度测评报告的自动化渲染与交付。",
    tags: ["数据采集", "长文本渲染", "批量交付"],
    link: null,
  },
] as const;

export const products = [
  {
    id: "homepage",
    no: "01",
    category: "个人数字主页",
    name: "view.dawsondx.top",
    description: "个人全栈项目动态、实战思考、工具体验与商业合作总入口。",
    highlights: [
      "展示独立开发开源产品矩阵与一线 AI 提效方法论",
      "汇总 C 端年度陪伴群与 B 端企业级工作流定制服务",
      "一站式了解项目全景与合作方式",
    ],
    tech: "Next.js 16 · React 19 · TypeScript · Tailwind CSS 4",
    links: [{ label: "在线访问", href: "https://view.dawsondx.top/" }],
  },
  {
    id: "doc2exam",
    no: "02",
    category: "企业内训 / 标准化出题",
    name: "AI 出题精灵 Doc2Exam",
    description: "把非标制度文档变成「AI 初稿 + 人工复核」的标准化题库系统。",
    highlights: [
      "SourceBlock 锁定原文出处，杜绝伪造页码；两阶段抽取去重与二分匹配配平",
      "统一状态机 + SSE / Last-Event-ID + Idempotency-Key，支持断点续传与崩溃恢复",
      "题目版 / 答案解析版双 Word 校验导出，支持 BYOK 纯前端直连与桌面自托管",
    ],
    tech: "Python 3.14 · FastAPI · SQLAlchemy 2.0 · React 19 · TS 6 · Vite 8 · Tailwind CSS 4",
    links: [
      { label: "在线体验", href: "https://doc2exam.dawsondx.top/" },
      { label: "查看源码", href: "https://github.com/dawsondx/Doc2Exam" },
    ],
  },
  {
    id: "skill-compass",
    no: "03",
    category: "Agent Skills 导航库",
    name: "Skill 指北",
    description: "为 AI Agent 开发者与高阶玩家整理的开源 Skills 精选导航库。",
    highlights: [
      "精选 294 个开源 Skills，按 11 大产物分类，一键复制 npx skills add 指令",
      "真实演示图 / 逐仓插画双视图，无图仓库动态生成 135+ 张视觉封面",
      "构建期 node:vm 预渲染与上游元数据离线快照，支持 / 搜索与 D 键主题切换",
    ],
    tech: "Vanilla JS · HTML5 · CSS3 · Node.js 构建预渲染 · 零运行时依赖",
    links: [
      { label: "在线体验", href: "https://skills.dawsondx.top/" },
      { label: "查看源码", href: "https://github.com/dawsondx/skill-compass" },
    ],
  },
  {
    id: "bid-sandbox",
    no: "04",
    category: "招投标 / 报价决策",
    name: "投标价格优势判断器 Pro v6.6",
    description: "工程与运维招投标阶段的报价得分测算与敏感性博弈沙盘。",
    highlights: [
      "基准值法、条件去极值、均值下浮、最低价基准等 4 类规则",
      "竞对报价随机扰动，生成我方 8%—22% 下浮率的二维得分差热力图",
      "单 HTML 零依赖离线运行，支持万元/元切换、拖拽排序与 localStorage 持久化",
    ],
    tech: "原生 HTML5 · CSS3 · ES6 · 单文件零依赖",
    links: [{ label: "咨询同类系统", href: "#contact" }],
  },
  {
    id: "emoji-clip",
    no: "05",
    category: "新媒体 / 本地图像处理",
    name: "Emoji Clip",
    description: "表情包制作一站搞定的免费在线素材处理工具集。",
    highlights: [
      "GIF 智能压缩保留透明通道，精准压至微信 500KB 限制内",
      "一键打包 240×240 主图、750×400 横幅与 50×50 缩略图 ZIP",
      "本地 AI 批量抠图与 1×2 至 10×10 自由矩阵裁切，素材 100% 不上传",
    ],
    tech: "纯前端 Client-side · 本地浏览器 AI 引擎 · Cloudflare Pages",
    links: [{ label: "在线体验", href: "https://emoji-clip.pages.dev/" }],
  },
  {
    id: "auto-interview",
    no: "06",
    category: "求职 / 招聘评估",
    name: "全自动模拟面试系统",
    description: "面向求职打磨与企业招聘评估的多角色 AI 协同面试系统。",
    highlights: [
      "招聘专家、模拟面试官、模拟候选人、Bar Raiser 四大角色协同",
      "覆盖人岗匹配、简历解析、多轮模拟面试与结构化复盘六大闭环模块",
      "基于 Trae 多 Agent / Multi-Skill 协同工作流架构",
    ],
    tech: "Trae 多 Agent · Multi-Skill 协同工作流",
    links: [{ label: "咨询同类系统", href: "#contact" }],
  },
] as const;

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
    description: "企业级 AI Agent / 工作流定制 / 年度陪伴群 / PPT 与海报定制。深圳，可远程协作。",
    location: "深圳 · 可远程协作",
    wechatQr: "/qrcode-wechat.webp",
  },
  channels: [
    { name: "公众号", desc: "「Dawson聊AI提效」· AI 工作流", qr: "/qrcode-gzh-square.png" },
    { name: "小红书", desc: "设计日常 & 干货笔记", qr: "/qrcode-xhs-square.png" },
  ],
} as const;

export const services = [
  {
    index: "01",
    name: "C 端 · 年度实战陪伴群",
    tag: "陪伴",
    description: "公众号「Dawson聊AI提效」与 59 元/年年度陪伴群，只分享当天能用上的 AI 实操方法。",
    features: [
      "高价值信息差筛选",
      "AI 实战工作流与源码开源",
      "定制设计福利 / 专业级 Office 兜底",
      "工具实操答疑",
    ],
  },
  {
    index: "02",
    name: "B 端 · AI Agent 与工作流定制",
    tag: "工程",
    description: "面向企业级业务场景，交付可复核、可恢复、能抗住生产检验的 AI 工作流与工程系统。",
    features: ["Coze / 飞书多维表 / 独立前后端", "需求拆解与 Agent 架构", "出处锁定 / 状态机 / 幂等性", "人工复核门禁与本地化交付"],
  },
  {
    index: "03",
    name: "Office 与视觉设计交付",
    tag: "设计",
    description: "保留多年 Office 助教与定制设计经验，继续承接 PPT、海报、Word 排版与疑难解答。",
    features: ["7 期秋叶 Office 核心助教", "5500+ 模板下载 / ¥1 万+ 定制变现", "逻辑 + 视觉双重打磨", "印刷与屏幕双场景输出"],
  },
  {
    index: "04",
    name: "效率咨询与工具开源",
    tag: "提效",
    description: "从 800+ 工具收藏与一线运维经验中精准匹配，把重复工作封装成可复用工具与自动化流程。",
    features: ["两座 ima 知识库 · 1W+ 用户", "公众号 / 社群实战陪伴", "问卷、报告、题库等流程自动化", "开源产品与源码分享"],
  },
] as const;

export const skills = [
  { name: "Excel", note: "函数 / 数据分析 / VBA" },
  { name: "Word", note: "《秒懂 Word》书稿撰写 / 文档排版" },
  { name: "PowerPoint", note: "定制设计 / 模板制作 / 培训教学" },
  { name: "Photoshop", note: "图像处理 / 海报 / 视觉设计" },
  { name: "Premiere / 剪映", note: "视频剪辑 / 短视频" },
  { name: "AI 工具应用", note: "智能体开发 / 效率提升" },
  { name: "AI Agent 架构", note: "Coze / 多 Skill 协同 / 人工复核门禁" },
  { name: "全栈工程", note: "React 19 / FastAPI / 状态机 / 幂等性" },
  { name: "工作流自动化", note: "飞书多维表 / 问卷 / 测评报告生成" },
  { name: "AI 编程", note: "番茄钟 / 浏览器扩展 / 单文件工具" },
  { name: "VBA 开发", note: "Excel 自动化 / Office 插件" },
  { name: "项目管理", note: "PMP / 3 个大型机场运维项目全周期管理" },
] as const;

export const contactRows = [
  { key: "邮箱", value: "dawsondx@foxmail.com", href: "mailto:dawsondx@foxmail.com" },
  { key: "微信", value: "dawsondx00（备注来意）", href: "#collaborate" },
  { key: "GitHub", value: "github.com/dawsondx", href: "https://github.com/dawsondx" },
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
