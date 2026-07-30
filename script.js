const yearNode = document.querySelector("#year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const translations = {
  zh: {
    "nav.strengths": "优势",
    "nav.skills": "技能",
    "nav.experience": "经历",
    "nav.projects": "项目",
    "nav.contact": "联系",
    "lang.toggle": "English",
    "hero.lede":
      "三年 AI + 后端工程经验，专注构建可落地的 AI Agent、RAG 知识库、Long-term Memory 与多场景对话系统。",
    "hero.contact": "联系我",
    "hero.metricExperience": "年 AI 与后端经验",
    "hero.metricRemote": "独立模块设计与跨团队交付",
    "strengths.title": "把大模型能力做成稳定产品",
    "strengths.agentTitle": "AI Agent 从 0 到 1",
    "strengths.agentBody":
      "覆盖 Prompt、RAG、Tools、Workflow、Memory 与接口服务，能从业务问题拆到可交付系统。",
    "strengths.memoryTitle": "长对话记忆与一致性",
    "strengths.memoryBody": "围绕角色扮演、陪伴对话和客服场景，设计长期记忆、短期上下文和检索注入策略。",
    "strengths.backendTitle": "后端工程化落地",
    "strengths.backendBody": "熟悉 Python、FastAPI、Kafka、Docker、Linux 与 CI 流程，支持高并发 Agent 调用与异步任务。",
    "strengths.businessTitle": "真实业务场景经验",
    "strengths.businessBody": "参与情感陪伴、智能客服、游戏 NPC、AI 风控、AI 产品评测与 Web3 交易工具等产品。",
    "skills.title": "面向 AI 产品交付的技能栈",
    "experience.title": "工作经历与交付方向",
    "experience.remoteDate": "2024.05 - 至今",
    "experience.remoteRole": "AI 工程师 · Remote",
    "experience.remoteScope": "智能客服 · 对话陪伴 Agent · AI 风控 · 多智能体 · AI Product Eval",
    "experience.remoteOne": "为 SynAI-Mindee 设计情绪陪伴 Agent 能力层，覆盖 CBT 对话框架、短焦支持、危机干预与个性化记忆。",
    "experience.remoteTwo": "通过 FastAPI 与 Kafka 支撑 Agent 调用、任务分发和异步处理，并持续优化 Prompt 与 RAG 知识库。",
    "experience.remoteThree": "为 WellyTalk 构建智能客服知识库、业务 Workflow、Conversation Learning 与 LLM as Judge 评估体系。",
    "experience.remoteFour": "在 Web3 风控场景中结合意图识别、上下文分析、规则和 LLM 判定，实现风险分级与处置联动。",
    "experience.ogRole": "AI 工程师 · OgCloud Onsite",
    "experience.ogScope": "AIGC 虚拟角色 · 游戏化互动 · 长对话 NPC 记忆系统",
    "experience.ogOne": "使用 Dify 搭建 Agent 平台，负责游戏角色 Prompt、世界观规则、数据处理和 RAG 知识库优化。",
    "experience.ogTwo": "设计 MemoryRepository 机制，对对话历史进行结构化存储与管理，提升长期一致性和角色稳定性。",
    "experience.ogThree": "基于真实对话与角色扮演场景验证方案，相关研究成果发表为 SCI 论文。",
    "projects.title": "代表项目",
    "projects.guardBody": "基于 Web3 反诈知识库和 AI 的 Telegram Bot，用于面试与交易相关风险识别。",
    "projects.viewProject": "查看项目",
    "projects.cryptoBody": "接入 TradingView 与 CoinGlass API，结合持仓管理、盈亏比和交易策略的投研机器人。",
    "projects.liveDemo": "在线展示",
    "projects.agentCoreBody": "基于 Prompt 工程实现八种主流 AI Agent 设计模式，适合学习和复用 Agent 架构思路。",
    "projects.portraitBody": "人脸识别与 AI 视频换脸项目，探索 AIGC 在视觉生成方向的应用。",
    "projects.difyTitle": "Dify 陪伴机器人",
    "projects.difyBody": "基于 Dify、LLM、Prompt 工程与 RAG 搭建的陪伴类智能体 Demo。",
    "projects.ganyu": "原神甘雨",
    "projects.hh": "哄哄模拟器",
    "education.title": "教育背景",
    "education.yangtze": "长江大学",
    "education.master": "电子信息（人工智能）硕士 · 2022.09 - 2024.06",
    "education.hubei": "湖北师范大学",
    "education.bachelor": "电子信息工程本科 · 2018.09 - 2022.06",
    "honors.title": "论文与荣誉",
    "honors.paperTitle": "SCI 论文",
    "honors.paperBody": "MemoryRepository for AI NPC · 大模型与长对话记忆方向",
    "honors.scholarshipTitle": "研究生国家奖学金",
    "honors.scholarshipBody": "2024 年获得，并提前毕业",
    "honors.cet": "英语六级",
    "contact.title": "一起构建更可靠的 AI Agent 产品",
    "contact.body": "欢迎联系我讨论 AI Agent、RAG、Long-term Memory、智能客服、情感陪伴和 AI 产品评测相关机会。",
    "footer.backTop": "返回顶部",
  },
  en: {
    "nav.strengths": "Strengths",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "lang.toggle": "中文",
    "hero.lede":
      "AI engineer with 3+ years of AI and backend experience, focused on production-ready AI Agents, RAG systems, long-term memory, and multi-turn conversational products.",
    "hero.contact": "Contact Me",
    "hero.metricExperience": "years in AI and backend engineering",
    "hero.metricRemote": "Independent module ownership and remote delivery",
    "strengths.title": "Turning LLM capabilities into reliable products",
    "strengths.agentTitle": "AI Agent from 0 to 1",
    "strengths.agentBody":
      "Hands-on across Prompt, RAG, Tools, Workflow, Memory, and API services, translating business problems into shippable systems.",
    "strengths.memoryTitle": "Long-term conversation memory",
    "strengths.memoryBody":
      "Designed long-term memory, short-term context, and retrieval injection strategies for roleplay, companion, and customer-support scenarios.",
    "strengths.backendTitle": "Backend engineering for AI",
    "strengths.backendBody":
      "Experienced with Python, FastAPI, Kafka, Docker, Linux, and CI workflows for high-concurrency Agent calls and async processing.",
    "strengths.businessTitle": "Real-world AI product experience",
    "strengths.businessBody":
      "Delivered systems across emotional companion apps, customer service, game NPCs, AI risk control, AI product evaluation, and Web3 trading tools.",
    "skills.title": "A stack built for AI product delivery",
    "experience.title": "Experience and delivery focus",
    "experience.remoteDate": "2024.05 - Present",
    "experience.remoteRole": "AI Engineer · Remote",
    "experience.remoteScope": "Customer Support · Companion Agents · AI Risk Control · Multi-Agent Systems · AI Product Eval",
    "experience.remoteOne":
      "Designed the emotional companion Agent layer for SynAI-Mindee, covering CBT dialogue, brief focused support, crisis intervention, and personalized memory.",
    "experience.remoteTwo":
      "Supported Agent calls, task distribution, and async processing with FastAPI and Kafka while continuously improving Prompt and RAG knowledge bases.",
    "experience.remoteThree":
      "Built WellyTalk customer-support knowledge bases, business workflows, Conversation Learning, and LLM-as-Judge evaluation systems.",
    "experience.remoteFour":
      "Combined intent recognition, context analysis, rules, and LLM judgment in Web3 risk-control scenarios to support risk grading and response workflows.",
    "experience.ogRole": "AI Engineer · OgCloud Onsite",
    "experience.ogScope": "AIGC Virtual Characters · Gamified Interaction · Long-Conversation NPC Memory",
    "experience.ogOne":
      "Built an Agent platform with Dify and owned character Prompt design, world rules, data processing, and RAG knowledge-base optimization.",
    "experience.ogTwo":
      "Designed the MemoryRepository mechanism to structure dialogue history and improve long-term consistency and character stability.",
    "experience.ogThree":
      "Validated the approach with real dialogue and roleplay scenarios, with the research published as an SCI paper.",
    "projects.title": "Selected Projects",
    "projects.guardBody":
      "A Telegram Bot powered by Web3 anti-fraud knowledge and AI, designed for interview and transaction risk recognition.",
    "projects.viewProject": "View Project",
    "projects.cryptoBody":
      "A trading research bot integrating TradingView and CoinGlass APIs with position management, risk-reward logic, and strategy workflows.",
    "projects.liveDemo": "Live Demo",
    "projects.agentCoreBody":
      "An implementation of eight mainstream AI Agent design patterns based on prompt engineering, useful for learning and reuse.",
    "projects.portraitBody":
      "A face recognition and AI video face-swap project exploring visual-generation use cases in AIGC.",
    "projects.difyTitle": "Dify Companion Bots",
    "projects.difyBody": "Companion-agent demos built with Dify, LLMs, prompt engineering, and RAG.",
    "projects.ganyu": "Genshin Ganyu",
    "projects.hh": "Comfort Simulator",
    "education.title": "Education",
    "education.yangtze": "Yangtze University",
    "education.master": "M.Eng. in Electronic Information, Artificial Intelligence · 2022.09 - 2024.06",
    "education.hubei": "Hubei Normal University",
    "education.bachelor": "B.Eng. in Electronic Information Engineering · 2018.09 - 2022.06",
    "honors.title": "Publication & Honors",
    "honors.paperTitle": "SCI Paper",
    "honors.paperBody": "MemoryRepository for AI NPC · LLM and long-conversation memory research",
    "honors.scholarshipTitle": "National Scholarship for Graduate Students",
    "honors.scholarshipBody": "Awarded in 2024 and graduated ahead of schedule",
    "honors.cet": "College English Test Band 6",
    "contact.title": "Let’s build more reliable AI Agent products",
    "contact.body":
      "Open to conversations around AI Agents, RAG, long-term memory, customer support, emotional companion systems, and AI product evaluation.",
    "footer.backTop": "Back to top",
  },
};

const languageToggle = document.querySelector("[data-lang-toggle]");
const savedLanguage = localStorage.getItem("portfolio-language");
let currentLanguage = savedLanguage === "en" ? "en" : "zh";

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[language][key];
    if (value) {
      node.textContent = value;
    }
  });
  localStorage.setItem("portfolio-language", language);
}

languageToggle?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "zh" ? "en" : "zh");
});

applyLanguage(currentLanguage);

const canvas = document.querySelector("#agent-canvas");
const ctx = canvas?.getContext("2d");

const nodes = Array.from({ length: 54 }, () => ({
  x: Math.random(),
  y: Math.random(),
  speed: 0.0015 + Math.random() * 0.0025,
  radius: 1.5 + Math.random() * 2.4,
  phase: Math.random() * Math.PI * 2,
}));

function resizeCanvas() {
  if (!canvas || !ctx) return;
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(canvas.clientWidth * ratio);
  canvas.height = Math.floor(canvas.clientHeight * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function drawNetwork() {
  if (!canvas || !ctx) return;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  ctx.clearRect(0, 0, width, height);

  nodes.forEach((node) => {
    node.phase += node.speed;
    const x = node.x * width + Math.sin(node.phase) * 20;
    const y = node.y * height + Math.cos(node.phase * 0.8) * 18;

    ctx.beginPath();
    ctx.arc(x, y, node.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(241, 209, 138, 0.72)";
    ctx.fill();

    nodes.forEach((other) => {
      const ox = other.x * width + Math.sin(other.phase) * 20;
      const oy = other.y * height + Math.cos(other.phase * 0.8) * 18;
      const distance = Math.hypot(x - ox, y - oy);
      if (distance < 145) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(ox, oy);
        ctx.strokeStyle = `rgba(125, 211, 199, ${0.18 - distance / 900})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    });
  });

  requestAnimationFrame(drawNetwork);
}

resizeCanvas();
drawNetwork();
window.addEventListener("resize", resizeCanvas);
