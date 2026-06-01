const STORAGE_KEY = "promptcraft-studio:v1";

const samplePrompts = [
  {
    id: "xiaohongshu-note",
    title: "小红书种草笔记",
    description: "把产品卖点转成自然、有画面感的种草笔记。",
    category: "内容创作",
    tags: ["小红书", "种草", "内容营销"],
    favorite: true,
    updatedAt: "2026-06-01",
    template:
      "你是一名懂小红书社区语感的内容策划。\n\n请围绕 {{产品名称}} 写一篇种草笔记。\n目标用户：{{目标用户}}\n核心卖点：{{核心卖点}}\n语气：真诚、具体、有生活场景。\n\n输出结构：\n1. 标题 5 个\n2. 正文 1 篇，控制在 350 字内\n3. 适合配图的画面建议 4 条\n4. 话题标签 10 个\n\n要求：减少空泛形容词，多写真实使用场景。",
  },
  {
    id: "wechat-article",
    title: "微信公众号深度文章",
    description: "把一个观点扩展成清晰、有传播力的长文提纲。",
    category: "内容创作",
    tags: ["公众号", "长文", "观点"],
    favorite: false,
    updatedAt: "2026-06-01",
    template:
      "你是一名中文商业写作者。\n\n主题：{{主题}}\n目标读者：{{目标读者}}\n核心观点：{{核心观点}}\n\n请输出：\n1. 文章标题 8 个\n2. 开头 3 版\n3. 完整大纲，包含 5 个一级小节\n4. 每个小节的关键论点、案例方向和金句\n5. 结尾行动建议\n\n风格：清楚、有判断、有节奏。",
  },
  {
    id: "support-reply",
    title: "客服回复优化",
    description: "把生硬回复改成清楚、友好、有解决路径的客服话术。",
    category: "运营增长",
    tags: ["客服", "SaaS", "用户沟通"],
    favorite: true,
    updatedAt: "2026-06-01",
    template:
      "你是经验丰富的客户成功经理。\n\n用户问题：{{用户问题}}\n产品背景：{{产品背景}}\n处理限制：{{处理限制}}\n\n请生成一段客服回复，要求：\n- 先确认用户诉求\n- 说明当前处理方案\n- 给出清晰下一步\n- 语气专业、温和、具体\n\n输出 2 个版本：简短版和详细版。",
  },
  {
    id: "code-review",
    title: "代码审查清单",
    description: "生成面向 PR 的结构化代码审查重点。",
    category: "产品研发",
    tags: ["代码审查", "PR", "工程质量"],
    favorite: false,
    updatedAt: "2026-06-01",
    template:
      "你是一名资深工程师。\n\n变更背景：{{变更背景}}\n技术栈：{{技术栈}}\n主要改动：{{主要改动}}\n\n请生成代码审查清单，覆盖：\n1. 正确性\n2. 边界条件\n3. 安全风险\n4. 性能影响\n5. 测试覆盖\n6. 可维护性\n\n每项给出具体检查问题，适合直接贴到 PR 描述里。",
  },
  {
    id: "meeting-summary",
    title: "会议纪要整理",
    description: "把零散会议记录整理成结论、任务和风险。",
    category: "知识管理",
    tags: ["会议", "知识库", "团队协作"],
    favorite: false,
    updatedAt: "2026-06-01",
    template:
      "你是一名项目经理。\n\n会议原始记录：\n{{会议记录}}\n\n请整理为：\n1. 本次会议结论\n2. 已确认事项\n3. 待办任务，包含负责人和截止时间\n4. 风险与阻塞\n5. 下次会议建议议题\n\n要求：表达准确，保留关键信息。",
  },
  {
    id: "landing-copy",
    title: "产品落地页文案",
    description: "把产品定位转成清晰的网站首页文案。",
    category: "运营增长",
    tags: ["落地页", "转化", "SaaS"],
    favorite: false,
    updatedAt: "2026-06-01",
    template:
      "你是一名 SaaS 增长文案顾问。\n\n产品名称：{{产品名称}}\n目标用户：{{目标用户}}\n核心价值：{{核心价值}}\n关键功能：{{关键功能}}\n\n请输出落地页文案：\n1. Hero 标题 5 个\n2. 副标题 3 个\n3. 三个核心卖点\n4. 功能区块文案\n5. CTA 按钮文案 6 个\n6. FAQ 5 组\n\n风格：直接、可信、面向转化。",
  },
  {
    id: "ai-assistant-system",
    title: "AI 助手系统提示词",
    description: "为业务助手生成稳定、清晰、可执行的系统提示词。",
    category: "产品研发",
    tags: ["AI应用", "系统提示词", "产品设计"],
    favorite: true,
    updatedAt: "2026-06-01",
    template:
      "你是一名 AI 产品架构师。\n\n助手名称：{{助手名称}}\n业务场景：{{业务场景}}\n目标用户：{{目标用户}}\n可用工具：{{可用工具}}\n边界规则：{{边界规则}}\n\n请生成系统提示词，包含：\n1. 角色定义\n2. 工作目标\n3. 输入理解流程\n4. 工具调用规则\n5. 输出格式\n6. 风险边界\n7. 失败时的处理方式\n\n要求：可直接用于 AI 应用的 system prompt。",
  },
  {
    id: "rag-answer-policy",
    title: "RAG 知识库回答规则",
    description: "为知识库问答助手制定引用、拒答和澄清策略。",
    category: "知识管理",
    tags: ["RAG", "知识库", "问答"],
    favorite: false,
    updatedAt: "2026-06-01",
    template:
      "你是一名知识库问答策略设计师。\n\n知识库主题：{{知识库主题}}\n回答对象：{{回答对象}}\n引用要求：{{引用要求}}\n未知信息处理：{{未知信息处理}}\n\n请生成一套 RAG 回答规则：\n1. 回答流程\n2. 引用来源格式\n3. 需要澄清的问题类型\n4. 低置信度处理方式\n5. 示例回答 3 条\n\n要求：回答必须基于已提供资料，表达简洁准确。",
  },
];

const state = {
  prompts: [],
  selectedId: "",
  filter: "all",
  query: "",
  variableValues: {},
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
};

function clonePrompts(prompts) {
  return JSON.parse(JSON.stringify(prompts));
}

function loadPrompts() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return clonePrompts(samplePrompts).map(normalizePrompt);

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map(normalizePrompt) : clonePrompts(samplePrompts).map(normalizePrompt);
  } catch {
    return clonePrompts(samplePrompts).map(normalizePrompt);
  }
}

function savePrompts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.prompts));
}

function normalizePrompt(prompt) {
  return {
    id: prompt.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title: prompt.title || "未命名模板",
    description: prompt.description || "提示词模板",
    category: prompt.category || "知识管理",
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

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
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
    { label: "角色清晰", pass: /你是|你是一名|作为|act as/i.test(template) },
    { label: "任务明确", pass: /请|生成|输出|分析|整理|写/i.test(template) },
    { label: "包含上下文", pass: extractVariables(template).length >= 2 },
    { label: "约束具体", pass: /要求|控制|限制|风格|语气|格式|结构/i.test(template) },
    { label: "输出结构", pass: /1\.|输出结构|输出：|列表|JSON|表格/i.test(template) },
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
    const haystack = [prompt.title, prompt.description, prompt.category, prompt.tags.join(" "), prompt.template]
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
  document.querySelector("#count-content").textContent = countByCategory("内容创作");
  document.querySelector("#count-growth").textContent = countByCategory("运营增长");
  document.querySelector("#count-product").textContent = countByCategory("产品研发");
  document.querySelector("#count-knowledge").textContent = countByCategory("知识管理");
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
    empty.textContent = "当前筛选下暂无模板。";
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
        <span>${escapeHtml(prompt.category)}</span>
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
  els.detailCategory.textContent = prompt.category;
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
    empty.textContent = "当前模板暂无变量槽位。";
    els.variablesForm.append(empty);
    return;
  }

  variables.forEach((variable) => {
    const label = document.createElement("label");
    label.textContent = variable;
    const input = document.createElement("input");
    input.value = state.variableValues[variable] || "";
    input.placeholder = `填写 ${variable}`;
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
    empty.textContent = "保存修改后会显示历史版本。";
    els.historyList.append(empty);
    return;
  }

  prompt.history.slice(0, 6).forEach((entry, index) => {
    const item = document.createElement("div");
    item.className = "history-item";
    item.innerHTML = `
      <div>
        <strong>版本 ${prompt.history.length - index}</strong>
        <span>${escapeHtml(entry.savedAt)} · ${entry.score}</span>
      </div>
      <button class="ghost-button" type="button">恢复</button>
    `;
    item.querySelector("button").addEventListener("click", () => {
      prompt.template = entry.template;
      prompt.updatedAt = new Date().toISOString().slice(0, 10);
      savePrompts();
      showToast("历史版本已恢复");
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
  updateCounts();
  renderList();
  renderDetail();
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
  const category = String(formData.get("category")).trim();
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

els.search.addEventListener("input", () => {
  state.query = els.search.value;
  renderList();
});

els.navItems.forEach((item) => {
  item.addEventListener("click", () => {
    state.filter = item.dataset.filter;
    els.navItems.forEach((nav) => nav.classList.toggle("is-active", nav === item));
    renderList();
  });
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
  showToast("模板已创建");
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
  showToast("模板已保存");
  render();
});

document.querySelector("#duplicate-button").addEventListener("click", () => {
  const prompt = getSelectedPrompt();
  if (!prompt) return;
  const copy = {
    ...prompt,
    id: `${prompt.id}-copy-${Date.now()}`,
    title: `${prompt.title} 副本`,
    favorite: false,
    history: [],
    updatedAt: new Date().toISOString().slice(0, 10),
  };
  state.prompts.unshift(copy);
  state.selectedId = copy.id;
  savePrompts();
  showToast("已复制为新模板");
  render();
});

document.querySelector("#copy-template-button").addEventListener("click", async () => {
  await copyText(els.templateEditor.value);
  showToast("模板已复制");
});

document.querySelector("#delete-button").addEventListener("click", () => {
  const prompt = getSelectedPrompt();
  if (!prompt) return;
  const confirmed = window.confirm(`确认删除「${prompt.title}」？`);
  if (!confirmed) return;
  state.prompts = state.prompts.filter((item) => item.id !== prompt.id);
  state.selectedId = state.prompts[0]?.id || "";
  state.variableValues = {};
  savePrompts();
  showToast("模板已删除");
  render();
});

els.favoriteButton.addEventListener("click", () => {
  const prompt = getSelectedPrompt();
  if (!prompt) return;
  prompt.favorite = !prompt.favorite;
  savePrompts();
  showToast(prompt.favorite ? "已加入收藏" : "已更新收藏");
  render();
});

els.templateEditor.addEventListener("input", () => {
  renderQuality(els.templateEditor.value);
  renderOutput();
});

document.querySelector("#copy-output-button").addEventListener("click", async () => {
  await copyText(els.output.textContent);
  showToast("已复制到剪贴板");
});

document.querySelector("#copy-share-button").addEventListener("click", async () => {
  const prompt = getSelectedPrompt();
  if (!prompt) return;
  const variables = extractVariables(els.templateEditor.value);
  const shareCard = [
    `# ${prompt.title}`,
    "",
    prompt.description,
    "",
    `分类：${prompt.category}`,
    `标签：${prompt.tags.join("、") || "通用"}`,
    `变量：${variables.join("、") || "无"}`,
    `质量评分：${scorePrompt(els.templateEditor.value).score}`,
    "",
    "PromptCraft Studio",
  ].join("\n");
  await copyText(shareCard);
  showToast("分享卡片已复制");
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
    const response = await fetch("prompts/starter-pack.zh-CN.json");
    const prompts = await response.json();
    if (!Array.isArray(prompts)) throw new Error("Invalid starter pack");
    replacePromptLibrary(prompts, "模板包已加载");
  } catch {
    showToast("模板包加载失败");
  }
});

els.importInput.addEventListener("change", async () => {
  const file = els.importInput.files?.[0];
  if (!file) return;
  const text = await file.text();
  try {
    const imported = JSON.parse(text);
    const promptList = Array.isArray(imported) ? imported : [imported];
    if (!promptList.every((item) => item && typeof item === "object")) throw new Error("Invalid prompt library");
    replacePromptLibrary(promptList, "导入完成");
  } catch {
    showToast("导入文件格式有误");
  } finally {
    els.importInput.value = "";
  }
});

document.querySelector("#reset-button").addEventListener("click", () => {
  state.prompts = clonePrompts(samplePrompts).map(normalizePrompt);
  state.selectedId = state.prompts[0].id;
  state.variableValues = {};
  savePrompts();
  showToast("示例库已恢复");
  render();
});

state.prompts = loadPrompts();
state.selectedId = state.prompts[0]?.id || "";
render();
