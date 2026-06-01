const LEGACY_STORAGE_KEY = "promptcraft-studio:v1";
const STORAGE_PREFIX = "promptcraft-studio:v2";
const LANGUAGE_STORAGE_KEY = "promptcraft-studio:language";
const CATEGORIES = ["content", "growth", "product", "knowledge"];
const LEGACY_CATEGORY_MAP = {
  内容创作: "content",
  运营增长: "growth",
  产品研发: "product",
  知识管理: "knowledge",
  content: "content",
  growth: "growth",
  product: "product",
  knowledge: "knowledge",
};

const translations = {
  zh: {
    meta: {
      htmlLang: "zh-CN",
      title: "PromptCraft Studio | 提示词工坊",
      description: "PromptCraft Studio 是一个本地优先的提示词模板、收藏、变量、测试和导入导出管理平台。",
    },
    brand: { subtitle: "提示词工坊" },
    nav: { all: "全部", favorite: "收藏" },
    categories: {
      content: "内容创作",
      growth: "运营增长",
      product: "产品研发",
      knowledge: "知识管理",
    },
    topbar: {
      eyebrow: "Local-first Prompt Ops",
      title: "管理、复用、测试你的提示词资产",
    },
    metrics: {
      templates: "模板",
      favorites: "收藏",
      averageScore: "平均评分",
      variables: "变量槽位",
    },
    library: {
      title: "提示词库",
      description: "搜索、筛选、收藏和选择模板。",
      search: "搜索标题、标签、内容",
    },
    empty: {
      title: "选择一个模板开始",
      description: "左侧模板会在这里打开，变量填写后可一键生成最终提示词。",
      list: "当前筛选下暂无模板。",
    },
    output: {
      title: "生成结果",
      description: "变量填充后的最终提示词。",
    },
    variables: {
      title: "变量",
      description: "使用 {{变量名}} 创建槽位。",
      empty: "当前模板暂无变量槽位。",
      placeholder: "填写 {variable}",
    },
    quality: {
      title: "质量检查",
      description: "基于角色、上下文、约束、输出格式评分。",
      role: "角色清晰",
      task: "任务明确",
      context: "包含上下文",
      constraints: "约束具体",
      structure: "输出结构",
    },
    history: {
      title: "版本历史",
      description: "保存修改时记录上一个版本。",
      empty: "保存修改后会显示历史版本。",
      version: "版本 {number}",
      restore: "恢复",
    },
    editor: {
      title: "模板内容",
      description: "编辑原始模板，保存后生成版本历史。",
    },
    dialog: {
      eyebrow: "New Template",
      title: "新建提示词模板",
    },
    form: {
      title: "标题",
      category: "分类",
      description: "描述",
      tags: "标签",
      template: "模板",
    },
    placeholders: {
      title: "例如：会议纪要整理",
      description: "一句话说明这个模板的使用场景",
      tags: "用逗号分隔，例如：会议,知识库,团队",
      template: "写入模板内容，变量格式为 {{topic}}",
    },
    actions: {
      loadPack: "加载模板包",
      exportJson: "导出 JSON",
      importJson: "导入 JSON",
      reset: "恢复示例",
      newTemplate: "新建模板",
      copySummary: "复制模板摘要",
      exportTemplate: "导出模板",
      copyResult: "复制结果",
      saveChanges: "保存修改",
      copyTemplate: "复制模板",
      duplicate: "复制为新模板",
      delete: "删除",
      cancel: "取消",
      createTemplate: "创建模板",
    },
    aria: {
      categories: "提示词分类",
      metrics: "提示词指标",
      detail: "提示词详情",
      favorite: "收藏模板",
      close: "关闭",
      language: "Switch to English",
    },
    messages: {
      packLoaded: "模板包已加载",
      packFailed: "模板包加载失败",
      importDone: "导入完成",
      invalidImport: "导入文件格式有误",
      examplesRestored: "示例库已恢复",
      created: "模板已创建",
      saved: "模板已保存",
      duplicated: "已复制为新模板",
      templateCopied: "模板已复制",
      deleted: "模板已删除",
      favoriteAdded: "已加入收藏",
      favoriteUpdated: "已更新收藏",
      outputCopied: "已复制到剪贴板",
      summaryCopied: "模板摘要已复制",
      versionRestored: "历史版本已恢复",
      languageChanged: "已切换为中文",
    },
    summary: {
      category: "分类",
      tags: "标签",
      variables: "变量",
      score: "质量评分",
      emptyTags: "通用",
      emptyVariables: "无",
    },
    confirmDelete: "确认删除「{title}」？",
    defaults: {
      title: "未命名模板",
      description: "提示词模板",
      duplicateSuffix: "副本",
    },
  },
  en: {
    meta: {
      htmlLang: "en",
      title: "PromptCraft Studio | Prompt Management",
      description:
        "PromptCraft Studio is a local-first prompt management platform for templates, favorites, variables, testing, and import/export workflows.",
    },
    brand: { subtitle: "Prompt Management" },
    nav: { all: "All", favorite: "Favorites" },
    categories: {
      content: "Content",
      growth: "Operations",
      product: "Product",
      knowledge: "Knowledge",
    },
    topbar: {
      eyebrow: "Local-first Prompt Ops",
      title: "Manage, reuse, and test prompt assets",
    },
    metrics: {
      templates: "Templates",
      favorites: "Favorites",
      averageScore: "Avg. score",
      variables: "Variables",
    },
    library: {
      title: "Prompt Library",
      description: "Search, filter, favorite, and select templates.",
      search: "Search titles, tags, content",
    },
    empty: {
      title: "Select a template",
      description: "Templates open here. Fill variables to render the final prompt.",
      list: "No templates match the current filter.",
    },
    output: {
      title: "Generated Result",
      description: "Final prompt with variables filled in.",
    },
    variables: {
      title: "Variables",
      description: "Use {{variable}} to create slots.",
      empty: "This template has no variable slots.",
      placeholder: "Enter {variable}",
    },
    quality: {
      title: "Quality Check",
      description: "Scores role, context, constraints, and output format.",
      role: "Clear role",
      task: "Clear task",
      context: "Context included",
      constraints: "Specific constraints",
      structure: "Output structure",
    },
    history: {
      title: "Version History",
      description: "Saving changes stores the previous version.",
      empty: "Saved versions appear here.",
      version: "Version {number}",
      restore: "Restore",
    },
    editor: {
      title: "Template Content",
      description: "Edit the source template and save changes.",
    },
    dialog: {
      eyebrow: "New Template",
      title: "Create Prompt Template",
    },
    form: {
      title: "Title",
      category: "Category",
      description: "Description",
      tags: "Tags",
      template: "Template",
    },
    placeholders: {
      title: "Example: Meeting Notes Synthesizer",
      description: "Describe when this template should be used",
      tags: "Comma-separated, e.g. meeting, knowledge, team",
      template: "Write the template. Variables use {{topic}}",
    },
    actions: {
      loadPack: "Load Pack",
      exportJson: "Export JSON",
      importJson: "Import JSON",
      reset: "Reset Examples",
      newTemplate: "New Template",
      copySummary: "Copy Summary",
      exportTemplate: "Export Template",
      copyResult: "Copy Result",
      saveChanges: "Save Changes",
      copyTemplate: "Copy Template",
      duplicate: "Duplicate",
      delete: "Delete",
      cancel: "Cancel",
      createTemplate: "Create Template",
    },
    aria: {
      categories: "Prompt categories",
      metrics: "Prompt metrics",
      detail: "Prompt detail",
      favorite: "Favorite template",
      close: "Close",
      language: "切换到中文",
    },
    messages: {
      packLoaded: "Starter pack loaded",
      packFailed: "Starter pack failed to load",
      importDone: "Import complete",
      invalidImport: "Invalid import file",
      examplesRestored: "Examples restored",
      created: "Template created",
      saved: "Template saved",
      duplicated: "Template duplicated",
      templateCopied: "Template copied",
      deleted: "Template deleted",
      favoriteAdded: "Added to favorites",
      favoriteUpdated: "Favorites updated",
      outputCopied: "Copied to clipboard",
      summaryCopied: "Template summary copied",
      versionRestored: "Version restored",
      languageChanged: "Language set to English",
    },
    summary: {
      category: "Category",
      tags: "Tags",
      variables: "Variables",
      score: "Quality score",
      emptyTags: "General",
      emptyVariables: "None",
    },
    confirmDelete: 'Delete "{title}"?',
    defaults: {
      title: "Untitled Template",
      description: "Prompt template",
      duplicateSuffix: "Copy",
    },
  },
};

const sampleLibraries = {
  zh: [
    {
      id: "zh-content-note",
      title: "内容笔记整理",
      description: "把产品信息转成清楚、具体、可发布的内容草稿。",
      category: "content",
      tags: ["内容", "写作", "结构"],
      favorite: true,
      updatedAt: "2026-06-01",
      template:
        "你是一名中文内容策划。\n\n主题：{{主题}}\n目标读者：{{目标读者}}\n关键信息：{{关键信息}}\n语气：清楚、具体、有真实场景。\n\n请输出：\n1. 标题 5 个\n2. 正文草稿 1 篇，控制在 500 字内\n3. 适合配图的画面建议 4 条\n4. 标签 8 个\n\n要求：减少空泛形容词，多写具体使用场景。",
    },
    {
      id: "zh-long-article",
      title: "长文大纲生成",
      description: "把一个观点扩展成清晰、有判断的长文提纲。",
      category: "content",
      tags: ["长文", "观点", "大纲"],
      favorite: false,
      updatedAt: "2026-06-01",
      template:
        "你是一名中文商业写作者。\n\n主题：{{主题}}\n目标读者：{{目标读者}}\n核心观点：{{核心观点}}\n\n请输出：\n1. 文章标题 8 个\n2. 开头 3 版\n3. 完整大纲，包含 5 个一级小节\n4. 每个小节的关键论点、案例方向和金句\n5. 结尾行动建议\n\n风格：清楚、有判断、有节奏。",
    },
    {
      id: "zh-support-reply",
      title: "客服回复优化",
      description: "把生硬回复改成清楚、友好、有解决路径的客服话术。",
      category: "growth",
      tags: ["客服", "SaaS", "用户沟通"],
      favorite: true,
      updatedAt: "2026-06-01",
      template:
        "你是经验丰富的客户成功经理。\n\n用户问题：{{用户问题}}\n产品背景：{{产品背景}}\n处理限制：{{处理限制}}\n\n请生成一段客服回复，要求：\n- 先确认用户诉求\n- 说明当前处理方案\n- 给出清晰下一步\n- 语气专业、温和、具体\n\n输出 2 个版本：简短版和详细版。",
    },
    {
      id: "zh-code-review",
      title: "代码审查清单",
      description: "生成面向 PR 的结构化代码审查重点。",
      category: "product",
      tags: ["代码审查", "PR", "工程质量"],
      favorite: false,
      updatedAt: "2026-06-01",
      template:
        "你是一名资深工程师。\n\n变更背景：{{变更背景}}\n技术栈：{{技术栈}}\n主要改动：{{主要改动}}\n\n请生成代码审查清单，覆盖：\n1. 正确性\n2. 边界条件\n3. 安全风险\n4. 性能影响\n5. 测试覆盖\n6. 可维护性\n\n每项给出具体检查问题，适合直接贴到 PR 描述里。",
    },
    {
      id: "zh-meeting-summary",
      title: "会议纪要整理",
      description: "把零散会议记录整理成结论、任务和风险。",
      category: "knowledge",
      tags: ["会议", "知识库", "团队协作"],
      favorite: false,
      updatedAt: "2026-06-01",
      template:
        "你是一名项目经理。\n\n会议原始记录：\n{{会议记录}}\n\n请整理为：\n1. 本次会议结论\n2. 已确认事项\n3. 待办任务，包含负责人和截止时间\n4. 风险与阻塞\n5. 下次会议建议议题\n\n要求：表达准确，保留关键信息。",
    },
    {
      id: "zh-landing-copy",
      title: "产品页面文案",
      description: "把产品定位转成清晰的网站首页文案。",
      category: "growth",
      tags: ["产品页面", "转化", "SaaS"],
      favorite: false,
      updatedAt: "2026-06-01",
      template:
        "你是一名 SaaS 文案顾问。\n\n产品名称：{{产品名称}}\n目标用户：{{目标用户}}\n核心价值：{{核心价值}}\n关键功能：{{关键功能}}\n\n请输出网站首页文案：\n1. Hero 标题 5 个\n2. 副标题 3 个\n3. 三个核心价值点\n4. 功能区块文案\n5. CTA 按钮文案 6 个\n6. FAQ 5 组\n\n风格：直接、可信、便于理解。",
    },
    {
      id: "zh-ai-assistant-system",
      title: "AI 助手系统提示词",
      description: "为业务助手生成稳定、清晰、可执行的系统提示词。",
      category: "product",
      tags: ["AI应用", "系统提示词", "产品设计"],
      favorite: true,
      updatedAt: "2026-06-01",
      template:
        "你是一名 AI 产品架构师。\n\n助手名称：{{助手名称}}\n业务场景：{{业务场景}}\n目标用户：{{目标用户}}\n可用工具：{{可用工具}}\n边界规则：{{边界规则}}\n\n请生成系统提示词，包含：\n1. 角色定义\n2. 工作目标\n3. 输入理解流程\n4. 工具调用规则\n5. 输出格式\n6. 风险边界\n7. 失败时的处理方式\n\n要求：可直接用于 AI 应用的 system prompt。",
    },
    {
      id: "zh-rag-answer-policy",
      title: "RAG 知识库回答规则",
      description: "为知识库问答助手制定引用、拒答和澄清策略。",
      category: "knowledge",
      tags: ["RAG", "知识库", "问答"],
      favorite: false,
      updatedAt: "2026-06-01",
      template:
        "你是一名知识库问答策略设计师。\n\n知识库主题：{{知识库主题}}\n回答对象：{{回答对象}}\n引用要求：{{引用要求}}\n未知信息处理：{{未知信息处理}}\n\n请生成一套 RAG 回答规则：\n1. 回答流程\n2. 引用来源格式\n3. 需要澄清的问题类型\n4. 低置信度处理方式\n5. 示例回答 3 条\n\n要求：回答必须基于已提供资料，表达简洁准确。",
    },
  ],
  en: [
    {
      id: "en-content-brief",
      title: "Content Brief Builder",
      description: "Turn raw notes into a structured writing brief.",
      category: "content",
      tags: ["writing", "brief", "workflow"],
      favorite: true,
      updatedAt: "2026-06-01",
      template:
        "You are a senior content strategist.\n\nTopic: {{topic}}\nAudience: {{audience}}\nSource notes: {{source_notes}}\nTone: clear, specific, practical.\n\nCreate:\n1. Five title options\n2. A one-paragraph angle summary\n3. A structured outline with five sections\n4. Four examples or proof points to include\n5. Eight tags\n\nConstraints: keep the brief concrete and remove vague claims.",
    },
    {
      id: "en-article-outline",
      title: "Long-form Article Outline",
      description: "Expand one point of view into a publishable article structure.",
      category: "content",
      tags: ["article", "outline", "editorial"],
      favorite: false,
      updatedAt: "2026-06-01",
      template:
        "Act as an editorial lead.\n\nTopic: {{topic}}\nTarget reader: {{target_reader}}\nCore point of view: {{point_of_view}}\n\nProduce:\n1. Eight title options\n2. Three opening hooks\n3. A complete outline with five major sections\n4. Key arguments, examples, and transitions for each section\n5. A concise closing recommendation\n\nStyle: direct, evidence-led, and easy to scan.",
    },
    {
      id: "en-support-reply",
      title: "Support Reply Refiner",
      description: "Rewrite rough replies into clear customer support responses.",
      category: "growth",
      tags: ["support", "customer success", "communication"],
      favorite: true,
      updatedAt: "2026-06-01",
      template:
        "You are an experienced customer success manager.\n\nCustomer issue: {{customer_issue}}\nProduct context: {{product_context}}\nHandling constraints: {{constraints}}\n\nWrite a support reply that:\n1. Acknowledges the customer request\n2. Explains the current resolution path\n3. Gives a clear next step\n4. Uses a professional and warm tone\n\nOutput two versions: short and detailed.",
    },
    {
      id: "en-code-review",
      title: "Code Review Checklist",
      description: "Generate a structured review checklist for pull requests.",
      category: "product",
      tags: ["code review", "PR", "quality"],
      favorite: false,
      updatedAt: "2026-06-01",
      template:
        "You are a senior software engineer.\n\nChange context: {{change_context}}\nTech stack: {{tech_stack}}\nMain changes: {{main_changes}}\n\nCreate a code review checklist covering:\n1. Correctness\n2. Edge cases\n3. Security risk\n4. Performance impact\n5. Test coverage\n6. Maintainability\n\nEach item should be a specific review question suitable for a PR.",
    },
    {
      id: "en-meeting-summary",
      title: "Meeting Notes Synthesizer",
      description: "Turn raw meeting notes into decisions, tasks, and risks.",
      category: "knowledge",
      tags: ["meeting", "knowledge base", "team"],
      favorite: false,
      updatedAt: "2026-06-01",
      template:
        "You are a project manager.\n\nRaw meeting notes:\n{{meeting_notes}}\n\nSummarize into:\n1. Decisions made\n2. Confirmed facts\n3. Action items with owners and due dates\n4. Risks and blockers\n5. Suggested agenda for the next meeting\n\nConstraints: preserve important context and avoid unsupported conclusions.",
    },
    {
      id: "en-product-page-copy",
      title: "Product Page Copy",
      description: "Translate product positioning into clear homepage copy.",
      category: "growth",
      tags: ["product", "website", "SaaS"],
      favorite: false,
      updatedAt: "2026-06-01",
      template:
        "You are a SaaS product copywriter.\n\nProduct name: {{product_name}}\nTarget users: {{target_users}}\nCore value: {{core_value}}\nKey features: {{key_features}}\n\nCreate homepage copy:\n1. Five hero headline options\n2. Three subheadline options\n3. Three value statements\n4. Feature section copy\n5. Six CTA labels\n6. Five FAQ items\n\nStyle: clear, credible, and specific.",
    },
    {
      id: "en-ai-assistant-system",
      title: "AI Assistant System Prompt",
      description: "Create a stable system prompt for a business assistant.",
      category: "product",
      tags: ["AI app", "system prompt", "product design"],
      favorite: true,
      updatedAt: "2026-06-01",
      template:
        "You are an AI product architect.\n\nAssistant name: {{assistant_name}}\nBusiness scenario: {{business_scenario}}\nTarget users: {{target_users}}\nAvailable tools: {{available_tools}}\nBoundary rules: {{boundary_rules}}\n\nCreate a system prompt with:\n1. Role definition\n2. Operating goal\n3. Input interpretation flow\n4. Tool use rules\n5. Output format\n6. Risk boundaries\n7. Failure handling\n\nThe result should be ready to use in an AI application.",
    },
    {
      id: "en-rag-answer-policy",
      title: "RAG Answer Policy",
      description: "Define citation, clarification, and fallback rules for RAG assistants.",
      category: "knowledge",
      tags: ["RAG", "knowledge base", "Q&A"],
      favorite: false,
      updatedAt: "2026-06-01",
      template:
        "You are a knowledge-base answer policy designer.\n\nKnowledge base topic: {{knowledge_base_topic}}\nAudience: {{audience}}\nCitation requirements: {{citation_requirements}}\nUnknown information handling: {{unknown_handling}}\n\nCreate a RAG answer policy covering:\n1. Answer flow\n2. Citation format\n3. Question types that require clarification\n4. Low-confidence handling\n5. Three example answers\n\nConstraints: answers must stay grounded in provided sources.",
    },
  ],
};

const state = {
  prompts: [],
  selectedId: "",
  filter: "all",
  query: "",
  variableValues: {},
  language: getInitialLanguage(),
};

const els = {
  list: document.querySelector("#prompt-list"),
  search: document.querySelector("#search-input"),
  navItems: [...document.querySelectorAll(".nav-item")],
  empty: document.querySelector("#empty-state"),
  detail: document.querySelector("#detail-content"),
  detailTitle: document.querySelector("#detail-title"),
  detailDescription: document.querySelector("#detail-description"),
  detailCategory: document.querySelector("#detail-category"),
  detailTags: document.querySelector("#detail-tags"),
  templateEditor: document.querySelector("#template-editor"),
  variablesForm: document.querySelector("#variables-form"),
  variableProgress: document.querySelector("#variable-progress"),
  output: document.querySelector("#rendered-output"),
  favoriteButton: document.querySelector("#favorite-button"),
  qualityScore: document.querySelector("#quality-score"),
  qualityList: document.querySelector("#quality-list"),
  historyList: document.querySelector("#history-list"),
  toast: document.querySelector("#toast"),
  dialog: document.querySelector("#prompt-dialog"),
  form: document.querySelector("#prompt-form"),
  loadStarterButton: document.querySelector("#load-starter-button"),
  importButton: document.querySelector("#import-button"),
  importInput: document.querySelector("#import-input"),
  languageButton: document.querySelector("#language-button"),
};

function getInitialLanguage() {
  const queryLanguage = normalizeLanguage(new URLSearchParams(window.location.search).get("lang"));
  if (queryLanguage) return queryLanguage;
  return normalizeLanguage(localStorage.getItem(LANGUAGE_STORAGE_KEY)) || "zh";
}

function normalizeLanguage(language) {
  if (!language) return "";
  if (String(language).toLowerCase().startsWith("en")) return "en";
  if (String(language).toLowerCase().startsWith("zh")) return "zh";
  return "";
}

function text(path, params = {}) {
  const value = path.split(".").reduce((current, key) => current?.[key], translations[state.language]);
  return String(value ?? path).replace(/\{(\w+)\}/g, (_, key) => params[key] ?? "");
}

function clonePrompts(prompts) {
  return JSON.parse(JSON.stringify(prompts));
}

function storageKey() {
  return `${STORAGE_PREFIX}:${state.language}`;
}

function loadPrompts() {
  const raw = localStorage.getItem(storageKey());
  if (raw) return parsePromptLibrary(raw);

  if (state.language === "zh") {
    const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacy) return parsePromptLibrary(legacy);
  }

  return getSamplePrompts();
}

function parsePromptLibrary(raw) {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map(normalizePrompt) : getSamplePrompts();
  } catch {
    return getSamplePrompts();
  }
}

function getSamplePrompts() {
  return clonePrompts(sampleLibraries[state.language]).map(normalizePrompt);
}

function savePrompts() {
  localStorage.setItem(storageKey(), JSON.stringify(state.prompts));
}

function normalizePrompt(prompt) {
  const category = LEGACY_CATEGORY_MAP[prompt.category] || "knowledge";
  return {
    id: prompt.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title: prompt.title || text("defaults.title"),
    description: prompt.description || text("defaults.description"),
    category,
    tags: Array.isArray(prompt.tags) ? prompt.tags : [],
    favorite: Boolean(prompt.favorite),
    updatedAt: prompt.updatedAt || new Date().toISOString().slice(0, 10),
    history: Array.isArray(prompt.history) ? prompt.history : [],
    template: prompt.template || "",
  };
}

function getSelectedPrompt() {
  return state.prompts.find((prompt) => prompt.id === state.selectedId);
}

function extractVariables(template) {
  const matches = [...template.matchAll(/\{\{\s*([\u4e00-\u9fa5\w-]+)\s*\}\}/g)];
  return [...new Set(matches.map((match) => match[1]))];
}

function renderTemplate(template, values) {
  return template.replace(/\{\{\s*([\u4e00-\u9fa5\w-]+)\s*\}\}/g, (_, name) => {
    const value = values[name]?.trim();
    return value || `{{${name}}}`;
  });
}

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function downloadJson(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function categoryLabel(category) {
  return text(`categories.${category}`);
}

function replacePromptLibrary(prompts, message) {
  state.prompts = prompts.map(normalizePrompt);
  state.selectedId = state.prompts[0]?.id || "";
  state.variableValues = {};
  savePrompts();
  showToast(message);
  render();
}

function scorePrompt(template) {
  const checks = [
    { label: text("quality.role"), pass: /你是|你是一名|作为|act as|you are/i.test(template) },
    {
      label: text("quality.task"),
      pass: /请|生成|输出|分析|整理|写|create|write|generate|summarize|analyze|produce|draft/i.test(template),
    },
    { label: text("quality.context"), pass: extractVariables(template).length >= 2 },
    {
      label: text("quality.constraints"),
      pass: /要求|控制|限制|风格|语气|格式|结构|constraints|tone|style|format|structure|limit/i.test(template),
    },
    { label: text("quality.structure"), pass: /1\.|输出结构|输出：|列表|JSON|表格|produce:|create:|covering:/i.test(template) },
  ];
  const score = Math.round((checks.filter((item) => item.pass).length / checks.length) * 100);
  return { checks, score };
}

function filteredPrompts() {
  return state.prompts.filter((prompt) => {
    const filterMatch =
      state.filter === "all" ||
      (state.filter === "favorite" && prompt.favorite) ||
      prompt.category === state.filter;
    const haystack = [
      prompt.title,
      prompt.description,
      categoryLabel(prompt.category),
      prompt.tags.join(" "),
      prompt.template,
    ]
      .join(" ")
      .toLowerCase();
    return filterMatch && haystack.includes(state.query.toLowerCase());
  });
}

function updateCounts() {
  const countByCategory = (category) => state.prompts.filter((prompt) => prompt.category === category).length;
  const totalVariables = state.prompts.reduce((sum, prompt) => sum + extractVariables(prompt.template).length, 0);
  const averageScore =
    state.prompts.reduce((sum, prompt) => sum + scorePrompt(prompt.template).score, 0) /
    Math.max(state.prompts.length, 1);

  document.querySelector("#count-all").textContent = state.prompts.length;
  document.querySelector("#count-favorite").textContent = state.prompts.filter((prompt) => prompt.favorite).length;
  document.querySelector("#count-content").textContent = countByCategory("content");
  document.querySelector("#count-growth").textContent = countByCategory("growth");
  document.querySelector("#count-product").textContent = countByCategory("product");
  document.querySelector("#count-knowledge").textContent = countByCategory("knowledge");
  document.querySelector("#metric-total").textContent = state.prompts.length;
  document.querySelector("#metric-favorites").textContent = state.prompts.filter((prompt) => prompt.favorite).length;
  document.querySelector("#metric-score").textContent = String(Math.round(averageScore));
  document.querySelector("#metric-vars").textContent = totalVariables;
}

function renderList() {
  const prompts = filteredPrompts();
  els.list.innerHTML = "";

  if (prompts.length === 0) {
    const empty = document.createElement("div");
    empty.className = "list-empty";
    empty.textContent = text("empty.list");
    els.list.append(empty);
    return;
  }

  prompts.forEach((prompt) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `prompt-item ${prompt.id === state.selectedId ? "is-selected" : ""}`;
    item.dataset.id = prompt.id;
    const { score } = scorePrompt(prompt.template);
    item.innerHTML = `
      <span class="prompt-item-head">
        <strong>${escapeHtml(prompt.title)}</strong>
        <span>${prompt.favorite ? "★" : "☆"}</span>
      </span>
      <span class="prompt-item-desc">${escapeHtml(prompt.description)}</span>
      <span class="prompt-item-foot">
        <span>${escapeHtml(categoryLabel(prompt.category))}</span>
        <span>${score}</span>
      </span>
    `;
    item.addEventListener("click", () => selectPrompt(prompt.id));
    els.list.append(item);
  });
}

function renderDetail() {
  const prompt = getSelectedPrompt();
  if (!prompt) {
    els.empty.hidden = false;
    els.detail.hidden = true;
    return;
  }

  els.empty.hidden = true;
  els.detail.hidden = false;
  els.detailTitle.textContent = prompt.title;
  els.detailDescription.textContent = prompt.description;
  els.detailCategory.textContent = categoryLabel(prompt.category);
  els.templateEditor.value = prompt.template;
  els.favoriteButton.textContent = prompt.favorite ? "★" : "☆";
  els.detailTags.innerHTML = prompt.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
  renderVariables(prompt);
  renderQuality(prompt.template);
  renderHistory(prompt);
  renderOutput();
}

function renderVariables(prompt) {
  const variables = extractVariables(prompt.template);
  els.variablesForm.innerHTML = "";
  updateVariableProgress(variables);

  if (variables.length === 0) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = text("variables.empty");
    els.variablesForm.append(empty);
    return;
  }

  variables.forEach((variable) => {
    const label = document.createElement("label");
    label.textContent = variable;
    const input = document.createElement("input");
    input.value = state.variableValues[variable] || "";
    input.placeholder = text("variables.placeholder", { variable });
    input.addEventListener("input", () => {
      state.variableValues[variable] = input.value;
      updateVariableProgress(variables);
      renderOutput();
    });
    label.append(input);
    els.variablesForm.append(label);
  });
}

function updateVariableProgress(variables) {
  const filled = variables.filter((variable) => state.variableValues[variable]?.trim()).length;
  els.variableProgress.textContent = `${filled}/${variables.length}`;
}

function renderQuality(template) {
  const { checks, score } = scorePrompt(template);
  els.qualityScore.textContent = score;
  els.qualityList.innerHTML = checks
    .map((check) => `<li class="${check.pass ? "pass" : "warn"}"><span>${check.pass ? "✓" : "!"}</span>${check.label}</li>`)
    .join("");
}

function renderHistory(prompt) {
  els.historyList.innerHTML = "";

  if (!prompt.history.length) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = text("history.empty");
    els.historyList.append(empty);
    return;
  }

  prompt.history.slice(0, 6).forEach((entry, index) => {
    const item = document.createElement("div");
    item.className = "history-item";
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(text("history.version", { number: prompt.history.length - index }))}</strong>
        <span>${escapeHtml(entry.savedAt)} · ${entry.score}</span>
      </div>
      <button class="ghost-button" type="button">${escapeHtml(text("history.restore"))}</button>
    `;
    item.querySelector("button").addEventListener("click", () => {
      prompt.template = entry.template;
      prompt.updatedAt = new Date().toISOString().slice(0, 10);
      savePrompts();
      showToast(text("messages.versionRestored"));
      render();
    });
    els.historyList.append(item);
  });
}

function renderOutput() {
  const prompt = getSelectedPrompt();
  if (!prompt) return;
  els.output.textContent = renderTemplate(els.templateEditor.value, state.variableValues);
}

function selectPrompt(id) {
  state.selectedId = id;
  state.variableValues = {};
  render();
}

function render() {
  applyTranslations();
  updateCounts();
  renderList();
  renderDetail();
}

function applyTranslations() {
  document.documentElement.lang = text("meta.htmlLang");
  document.title = text("meta.title");
  document.querySelector('meta[name="description"]').setAttribute("content", text("meta.description"));

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = text(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", text(node.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", text(node.dataset.i18nAriaLabel));
  });

  els.languageButton.textContent = state.language === "zh" ? "EN" : "中";
  els.languageButton.setAttribute("aria-label", text("aria.language"));
  els.navItems.forEach((item) => item.classList.toggle("is-active", item.dataset.filter === state.filter));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  window.setTimeout(() => els.toast.classList.remove("is-visible"), 1800);
}

function createPromptFromForm(formData) {
  const title = String(formData.get("title")).trim();
  const category = LEGACY_CATEGORY_MAP[String(formData.get("category")).trim()] || "knowledge";
  const description = String(formData.get("description")).trim();
  const tags = String(formData.get("tags"))
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  const template = String(formData.get("template")).trim();

  return {
    id: `${Date.now()}-${title.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, "-")}`,
    title,
    category,
    description,
    tags,
    template,
    favorite: false,
    history: [],
    updatedAt: new Date().toISOString().slice(0, 10),
  };
}

function setLanguage(language) {
  state.language = language;
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  const url = new URL(window.location.href);
  url.searchParams.set("lang", language === "zh" ? "zh-CN" : "en");
  window.history.replaceState(null, "", url);
  state.prompts = loadPrompts();
  state.selectedId = state.prompts[0]?.id || "";
  state.filter = "all";
  state.query = "";
  state.variableValues = {};
  els.search.value = "";
  render();
  showToast(text("messages.languageChanged"));
}

els.search.addEventListener("input", () => {
  state.query = els.search.value;
  renderList();
});

els.navItems.forEach((item) => {
  item.addEventListener("click", () => {
    state.filter = item.dataset.filter;
    render();
  });
});

els.languageButton.addEventListener("click", () => {
  setLanguage(state.language === "zh" ? "en" : "zh");
});

document.querySelector("#new-button").addEventListener("click", () => {
  els.form.reset();
  els.dialog.showModal();
});

function closeDialog() {
  els.dialog.close();
}

document.querySelector("#dialog-close-button").addEventListener("click", closeDialog);
document.querySelector("#dialog-cancel-button").addEventListener("click", closeDialog);

els.dialog.addEventListener("click", (event) => {
  if (event.target === els.dialog) closeDialog();
});

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const prompt = createPromptFromForm(new FormData(els.form));
  state.prompts.unshift(prompt);
  state.selectedId = prompt.id;
  savePrompts();
  els.dialog.close();
  showToast(text("messages.created"));
  render();
});

document.querySelector("#save-template-button").addEventListener("click", () => {
  const prompt = getSelectedPrompt();
  if (!prompt) return;
  if (prompt.template !== els.templateEditor.value) {
    prompt.history.unshift({
      template: prompt.template,
      savedAt: new Date().toISOString().slice(0, 16).replace("T", " "),
      score: scorePrompt(prompt.template).score,
    });
    prompt.history = prompt.history.slice(0, 12);
  }
  prompt.template = els.templateEditor.value;
  prompt.updatedAt = new Date().toISOString().slice(0, 10);
  savePrompts();
  showToast(text("messages.saved"));
  render();
});

document.querySelector("#duplicate-button").addEventListener("click", () => {
  const prompt = getSelectedPrompt();
  if (!prompt) return;
  const copy = {
    ...prompt,
    id: `${prompt.id}-copy-${Date.now()}`,
    title: `${prompt.title} ${text("defaults.duplicateSuffix")}`,
    favorite: false,
    history: [],
    updatedAt: new Date().toISOString().slice(0, 10),
  };
  state.prompts.unshift(copy);
  state.selectedId = copy.id;
  savePrompts();
  showToast(text("messages.duplicated"));
  render();
});

document.querySelector("#copy-template-button").addEventListener("click", async () => {
  await copyText(els.templateEditor.value);
  showToast(text("messages.templateCopied"));
});

document.querySelector("#delete-button").addEventListener("click", () => {
  const prompt = getSelectedPrompt();
  if (!prompt) return;
  const confirmed = window.confirm(text("confirmDelete", { title: prompt.title }));
  if (!confirmed) return;
  state.prompts = state.prompts.filter((item) => item.id !== prompt.id);
  state.selectedId = state.prompts[0]?.id || "";
  state.variableValues = {};
  savePrompts();
  showToast(text("messages.deleted"));
  render();
});

els.favoriteButton.addEventListener("click", () => {
  const prompt = getSelectedPrompt();
  if (!prompt) return;
  prompt.favorite = !prompt.favorite;
  savePrompts();
  showToast(prompt.favorite ? text("messages.favoriteAdded") : text("messages.favoriteUpdated"));
  render();
});

els.templateEditor.addEventListener("input", () => {
  renderQuality(els.templateEditor.value);
  renderOutput();
});

document.querySelector("#copy-output-button").addEventListener("click", async () => {
  await copyText(els.output.textContent);
  showToast(text("messages.outputCopied"));
});

document.querySelector("#copy-share-button").addEventListener("click", async () => {
  const prompt = getSelectedPrompt();
  if (!prompt) return;
  const variables = extractVariables(els.templateEditor.value);
  const summary = [
    `# ${prompt.title}`,
    "",
    prompt.description,
    "",
    `${text("summary.category")}: ${categoryLabel(prompt.category)}`,
    `${text("summary.tags")}: ${prompt.tags.join(", ") || text("summary.emptyTags")}`,
    `${text("summary.variables")}: ${variables.join(", ") || text("summary.emptyVariables")}`,
    `${text("summary.score")}: ${scorePrompt(els.templateEditor.value).score}`,
    "",
    "PromptCraft Studio",
  ].join("\n");
  await copyText(summary);
  showToast(text("messages.summaryCopied"));
});

document.querySelector("#export-single-button").addEventListener("click", () => {
  const prompt = getSelectedPrompt();
  if (!prompt) return;
  downloadJson(prompt, `${slugify(prompt.title) || "prompt-template"}.json`);
});

document.querySelector("#export-button").addEventListener("click", () => {
  downloadJson(state.prompts, "promptcraft-library.json");
});

els.importButton.addEventListener("click", () => {
  els.importInput.click();
});

els.loadStarterButton.addEventListener("click", async () => {
  try {
    const file = state.language === "zh" ? "starter-pack.zh-CN.json" : "starter-pack.en.json";
    const response = await fetch(`prompts/${file}`);
    const prompts = await response.json();
    if (!Array.isArray(prompts)) throw new Error("Invalid starter pack");
    replacePromptLibrary(prompts, text("messages.packLoaded"));
  } catch {
    showToast(text("messages.packFailed"));
  }
});

els.importInput.addEventListener("change", async () => {
  const file = els.importInput.files?.[0];
  if (!file) return;
  const importedText = await file.text();
  try {
    const imported = JSON.parse(importedText);
    const promptList = Array.isArray(imported) ? imported : [imported];
    if (!promptList.every((item) => item && typeof item === "object")) throw new Error("Invalid prompt library");
    replacePromptLibrary(promptList, text("messages.importDone"));
  } catch {
    showToast(text("messages.invalidImport"));
  } finally {
    els.importInput.value = "";
  }
});

document.querySelector("#reset-button").addEventListener("click", () => {
  state.prompts = getSamplePrompts();
  state.selectedId = state.prompts[0].id;
  state.variableValues = {};
  savePrompts();
  showToast(text("messages.examplesRestored"));
  render();
});

localStorage.setItem(LANGUAGE_STORAGE_KEY, state.language);
state.prompts = loadPrompts();
state.selectedId = state.prompts[0]?.id || "";
render();
