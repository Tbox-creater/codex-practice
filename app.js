const fallbackRoadmaps = {
  starter: {
    name: "零基础路线",
    duration: "12 周",
    focus: "Python / Git / SQL / Web 基础",
    summary: "适合刚开始系统学习编程的人，先把语言基础、工具习惯和小项目做起来。",
    phases: [
      {
        title: "阶段 1：语法与工具",
        points: [
          "掌握变量、条件、循环、函数和基本数据结构。",
          "学会使用 VS Code、终端和 Git 做日常开发。",
          "完成 2 到 3 个基础练习，例如计算器、记账脚本、待办清单。"
        ]
      },
      {
        title: "阶段 2：数据库与网页基础",
        points: [
          "理解 SQL 的增删改查，知道表、主键和关联。",
          "学习 HTML、CSS、JavaScript 的基本结构。",
          "做一个带页面的小项目，把前面的内容串起来。"
        ]
      },
      {
        title: "阶段 3：综合项目",
        points: [
          "选择一个完整练手项目，例如博客、学生管理或记账应用。",
          "把代码推到 GitHub，并写一页项目说明。",
          "开始准备面试中的项目表达。"
        ]
      }
    ],
    resources: [
      { label: "Python 官方教程", url: "https://docs.python.org/3/tutorial/" },
      { label: "MDN Learn Web Development", url: "https://developer.mozilla.org/en-US/docs/Learn" },
      { label: "GitHub Get Started", url: "https://docs.github.com/en/get-started" }
    ]
  },
  frontend: {
    name: "前端路线",
    duration: "10 到 14 周",
    focus: "HTML / CSS / JavaScript / React",
    summary: "适合希望做网页、交互和组件化开发的人。",
    phases: [
      {
        title: "阶段 1：页面基础",
        points: [
          "用 HTML 和 CSS 练熟布局、响应式、语义化。",
          "能独立还原常见页面模块。",
          "做 3 个静态页面练手。"
        ]
      },
      {
        title: "阶段 2：JavaScript 交互",
        points: [
          "理解 DOM、事件、异步和模块化。",
          "做表单校验、待办清单、轮播图这类交互练习。",
          "学会使用浏览器开发者工具排错。"
        ]
      },
      {
        title: "阶段 3：React 与交付",
        points: [
          "学习组件、状态、数据请求和路由。",
          "完成一个可部署的小型前端项目。",
          "补充性能、工程化和协作基础。"
        ]
      }
    ],
    resources: [
      { label: "React Learn", url: "https://react.dev/learn" },
      { label: "MDN JavaScript", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript" },
      { label: "JavaScript30", url: "https://github.com/wesbos/JavaScript30" }
    ]
  },
  backend: {
    name: "后端路线",
    duration: "12 到 16 周",
    focus: "Node.js / SQL / API / 部署",
    summary: "适合希望写接口、做服务端逻辑和部署系统的人。",
    phases: [
      {
        title: "阶段 1：语言与 HTTP",
        points: [
          "理解请求响应、状态码、JSON 和 REST 风格。",
          "选择 Node.js 或 Python 作为主语言。",
          "能读懂基础接口文档。"
        ]
      },
      {
        title: "阶段 2：数据库与建模",
        points: [
          "练习表设计、索引、事务和联表查询。",
          "为用户、订单、任务等场景建模。",
          "把数据库接进自己的接口项目。"
        ]
      },
      {
        title: "阶段 3：服务上线",
        points: [
          "使用 Express、Fastify 或 FastAPI 搭接口。",
          "加入日志、配置管理和错误处理。",
          "部署到 Render、Railway 或自己的云服务器。"
        ]
      }
    ],
    resources: [
      { label: "Node.js Learn", url: "https://nodejs.org/en/learn" },
      { label: "PostgreSQL Tutorial", url: "https://www.postgresql.org/docs/current/tutorial.html" },
      { label: "Express Guide", url: "https://expressjs.com/" }
    ]
  },
  python: {
    name: "Python 路线",
    duration: "10 到 12 周",
    focus: "Python / 自动化 / 数据处理 / Web",
    summary: "适合想快速入门开发，同时保留自动化和数据方向扩展性的人。",
    phases: [
      {
        title: "阶段 1：Python 核心",
        points: [
          "掌握基础语法、函数、模块、异常和文件处理。",
          "做批量改名、文本处理、小型命令行脚本。",
          "培养函数拆分和重构习惯。"
        ]
      },
      {
        title: "阶段 2：实用库与自动化",
        points: [
          "学习 requests、pathlib、json、csv 等常用库。",
          "做抓取、整理、转换数据的小工具。",
          "体验 Python 在效率场景里的优势。"
        ]
      },
      {
        title: "阶段 3：Web 或 AI 工具方向",
        points: [
          "用 FastAPI 或 Flask 写基础接口。",
          "或者做命令行助手、自动化工具、数据小应用。",
          "整理成能展示的项目模板。"
        ]
      }
    ],
    resources: [
      { label: "Python 官方教程", url: "https://docs.python.org/3/tutorial/" },
      { label: "FastAPI Tutorial", url: "https://fastapi.tiangolo.com/tutorial/" },
      { label: "Awesome Python", url: "https://github.com/vinta/awesome-python" }
    ]
  },
  testing: {
    name: "软件测试路线",
    duration: "8 到 12 周",
    focus: "测试基础 / 接口测试 / 自动化 / 测试表达",
    summary: "适合想补齐质量保障能力，或者走测试开发方向的人。",
    phases: [
      {
        title: "阶段 1：测试思维",
        points: [
          "理解功能测试、回归测试、边界场景和缺陷记录。",
          "学会写清晰的测试用例和复现步骤。",
          "建立从需求到验证的思维链路。"
        ]
      },
      {
        title: "阶段 2：接口与自动化",
        points: [
          "使用 Postman、Apifox 或 Playwright 做接口和端到端测试。",
          "学习断言、数据准备、环境区分和测试报告。",
          "把自动化测试接入项目流程。"
        ]
      },
      {
        title: "阶段 3：测试面试与协作",
        points: [
          "准备常见面试题，例如如何设计测试点、如何定位线上问题。",
          "学会和产品、开发同步风险与优先级。",
          "整理一套自己做过的测试项目案例。"
        ]
      }
    ],
    resources: [
      { label: "Playwright Docs", url: "https://playwright.dev/" },
      { label: "Postman Learning Center", url: "https://learning.postman.com/" },
      { label: "Testing JavaScript", url: "https://testingjavascript.com/" }
    ]
  }
};

const routePanel = document.getElementById("route-panel");
const chips = Array.from(document.querySelectorAll(".route-chip"));

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderRoute(routeKey, roadmaps) {
  const route = roadmaps[routeKey] || roadmaps.starter;
  routePanel.innerHTML = `
    <article class="route-card">
      <div class="route-summary">
        <div>
          <p class="eyebrow">${escapeHtml(route.duration)}</p>
          <h3>${escapeHtml(route.name)}</h3>
        </div>
        <p>${escapeHtml(route.summary)}</p>
        <div class="meta-row">
          <span class="meta-pill">重点：${escapeHtml(route.focus)}</span>
        </div>
      </div>
      <div class="card-grid three-up phase-grid">
        ${route.phases.map((phase) => `
          <section class="phase-card">
            <h4>${escapeHtml(phase.title)}</h4>
            <ul class="plain-list">
              ${phase.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
            </ul>
          </section>
        `).join("")}
      </div>
      <section class="resource-card">
        <h4>推荐资源</h4>
        <ul class="link-list">
          ${route.resources.map((item) => `
            <li><a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a></li>
          `).join("")}
        </ul>
      </section>
    </article>
  `;
}

function setActiveChip(button) {
  chips.forEach((chip) => {
    const active = chip === button;
    chip.classList.toggle("is-active", active);
    chip.setAttribute("aria-selected", String(active));
  });
}

async function loadRoadmaps() {
  try {
    const response = await fetch("/api/roadmaps", {
      headers: { Accept: "application/json" }
    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const payload = await response.json();
    return payload.roadmaps || fallbackRoadmaps;
  } catch (error) {
    return fallbackRoadmaps;
  }
}

async function bootstrap() {
  const roadmaps = await loadRoadmaps();
  const initial = chips[0];
  renderRoute(initial.dataset.route, roadmaps);

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      setActiveChip(chip);
      renderRoute(chip.dataset.route, roadmaps);
    });
  });
}

bootstrap();
