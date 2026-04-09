const routes = {
  starter: {
    title: "零基础 12 周路线",
    summary: "适合从没系统学过编程的人。先用 Python 建立信心，再补 Git、SQL 和网页基础。",
    duration: "12 周",
    focus: "Python + Git + SQL + Web 基础",
    output: "做出 3 个小项目 + 1 个完整练手项目",
    resources: {
      docs: [
        { label: "Python 官方教程", url: "https://docs.python.org/3/tutorial/" },
        { label: "GitHub 入门文档", url: "https://docs.github.com/en/get-started" },
        { label: "MDN Learn Web Development", url: "https://developer.mozilla.org/en-US/docs/Learn" },
        { label: "SQLite 5 分钟快速上手", url: "https://sqlite.org/quickstart.html" }
      ],
      videos: [
        { label: "YouTube: freeCodeCamp Python 全课程搜索", url: "https://www.youtube.com/results?search_query=freeCodeCamp+Python+full+course" },
        { label: "YouTube: freeCodeCamp HTML CSS 初学者课程搜索", url: "https://www.youtube.com/results?search_query=freeCodeCamp+HTML+CSS+full+course+beginners" },
        { label: "YouTube: freeCodeCamp SQL 初学者课程搜索", url: "https://www.youtube.com/results?search_query=freeCodeCamp+SQL+tutorial+full+database+course+for+beginners" }
      ],
      repos: [
        { label: "firstcontributions/first-contributions", url: "https://github.com/firstcontributions/first-contributions" },
        { label: "florinpop17/app-ideas", url: "https://github.com/florinpop17/app-ideas" },
        { label: "public-apis/public-apis", url: "https://github.com/public-apis/public-apis" }
      ]
    },
    phases: [
      {
        title: "第 1-3 周：语法与基本功",
        body: "学习变量、条件、循环、函数、列表、字典、文件读写。每天都写小程序，不只看视频。",
        tasks: [
          "完成 15 个 Python 小练习",
          "写一个命令行计算器",
          "学会用 VS Code 运行和调试代码"
        ]
      },
      {
        title: "第 4-6 周：项目与工具",
        body: "引入 Git、GitHub、命令行和基础算法，开始理解如何保存代码版本和定位问题。",
        tasks: [
          "把练习代码推到 GitHub",
          "学习数组、栈、队列、哈希表的基本思想",
          "完成一个学生信息管理系统"
        ]
      },
      {
        title: "第 7-9 周：数据库与接口感知",
        body: "学习 SQL 基础，理解增删改查、表结构和主键，开始知道程序如何保存真实数据。",
        tasks: [
          "安装并使用 SQLite 或 MySQL",
          "完成 20 条 SQL 练习",
          "为练手项目增加数据存储"
        ]
      },
      {
        title: "第 10-12 周：网页与综合项目",
        body: "学习 HTML、CSS、JavaScript 基础，做一个有前端页面的练手项目，把之前的知识串起来。",
        tasks: [
          "做一个个人学习主页",
          "做一个待办清单或记账应用",
          "整理作品集和学习笔记"
        ]
      }
    ]
  },
  frontend: {
    title: "前端路线",
    summary: "面向网页与交互开发。路线按页面基础、工程化、React 和项目交付来安排。",
    duration: "10-14 周",
    focus: "HTML + CSS + JavaScript + React",
    output: "完成响应式站点、组件项目和小型前端应用",
    resources: {
      docs: [
        { label: "MDN Learn Web Development", url: "https://developer.mozilla.org/en-US/docs/Learn" },
        { label: "React 官方 Learn", url: "https://react.dev/learn" },
        { label: "MDN JavaScript 入门", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" }
      ],
      videos: [
        { label: "YouTube: freeCodeCamp HTML CSS 全课程搜索", url: "https://www.youtube.com/results?search_query=freeCodeCamp+learn+HTML+CSS+full+course+for+beginners" },
        { label: "YouTube: freeCodeCamp JavaScript 全课程搜索", url: "https://www.youtube.com/results?search_query=freeCodeCamp+learn+JavaScript+full+course+for+beginners" },
        { label: "YouTube: freeCodeCamp React 全课程搜索", url: "https://www.youtube.com/results?search_query=freeCodeCamp+React+full+course+for+beginners" }
      ],
      repos: [
        { label: "wesbos/JavaScript30", url: "https://github.com/wesbos/JavaScript30" },
        { label: "practical-tutorials/project-based-learning", url: "https://github.com/practical-tutorials/project-based-learning" },
        { label: "florinpop17/app-ideas", url: "https://github.com/florinpop17/app-ideas" }
      ]
    },
    phases: [
      {
        title: "阶段 1：页面基础",
        body: "先把 HTML 语义、CSS 布局和响应式适配练熟，保证做得出手机和桌面端页面。",
        tasks: [
          "手写 3 个静态页面",
          "掌握 Flex、Grid、定位和媒体查询",
          "能独立临摹一个落地页"
        ]
      },
      {
        title: "阶段 2：JavaScript 核心",
        body: "学会 DOM、事件、异步、数组方法和模块化，把页面做成有行为的产品。",
        tasks: [
          "做一个轮播图、表单校验和待办清单",
          "理解 fetch、Promise 和 async/await",
          "会排查常见浏览器报错"
        ]
      },
      {
        title: "阶段 3：React 与组件化",
        body: "学习组件、状态、属性、路由、表单和数据获取，理解现代前端工程开发方式。",
        tasks: [
          "做一个天气或笔记应用",
          "拆分页面为可复用组件",
          "学会基础状态管理思维"
        ]
      },
      {
        title: "阶段 4：工程与上线",
        body: "接触构建工具、接口联调、部署上线和性能优化，形成真实交付能力。",
        tasks: [
          "把项目部署到 Vercel 或 GitHub Pages",
          "学会环境变量和打包流程",
          "完成个人作品集站点"
        ]
      }
    ]
  },
  backend: {
    title: "后端路线",
    summary: "适合想做服务端、接口、数据库和系统逻辑的人。推荐从 Python 后端或 Node.js 后端起步。",
    duration: "12-16 周",
    focus: "后端语言 + SQL + API + 部署",
    output: "完成用户系统、接口服务和可部署项目",
    resources: {
      docs: [
        { label: "FastAPI 官方教程", url: "https://fastapi.tiangolo.com/tutorial/" },
        { label: "PostgreSQL 官方 Tutorial", url: "https://www.postgresql.org/docs/current/tutorial.html" },
        { label: "GitHub Using Git 文档", url: "https://docs.github.com/categories/using-git" }
      ],
      videos: [
        { label: "YouTube: freeCodeCamp FastAPI 搜索", url: "https://www.youtube.com/results?search_query=freeCodeCamp+FastAPI+course" },
        { label: "YouTube: freeCodeCamp Node.js 全课程搜索", url: "https://www.youtube.com/results?search_query=freeCodeCamp+Node.js+full+course+beginners" },
        { label: "YouTube: freeCodeCamp SQL 全课程搜索", url: "https://www.youtube.com/results?search_query=freeCodeCamp+SQL+tutorial+full+database+course+for+beginners" }
      ],
      repos: [
        { label: "fastapi/full-stack-fastapi-template", url: "https://github.com/fastapi/full-stack-fastapi-template" },
        { label: "public-apis/public-apis", url: "https://github.com/public-apis/public-apis" },
        { label: "practical-tutorials/project-based-learning", url: "https://github.com/practical-tutorials/project-based-learning" }
      ]
    },
    phases: [
      {
        title: "阶段 1：语言与网络基础",
        body: "先掌握一门后端语言，再理解 HTTP、请求响应、状态码和 JSON 格式。",
        tasks: [
          "学习 Python 或 Node.js 基础语法",
          "理解 GET、POST、PUT、DELETE",
          "能读懂接口文档"
        ]
      },
      {
        title: "阶段 2：数据库",
        body: "重点学习表设计、增删改查、索引、事务和基础建模，不跳过 SQL。",
        tasks: [
          "完成用户表和订单表设计",
          "练习联表查询",
          "为项目设计数据库结构"
        ]
      },
      {
        title: "阶段 3：框架与 API",
        body: "用 FastAPI、Flask、Express 等框架写接口，加入登录、鉴权、分页和错误处理。",
        tasks: [
          "做一个任务管理 API",
          "加入注册登录功能",
          "用 Postman 或 Apifox 测试接口"
        ]
      },
      {
        title: "阶段 4：部署与工程能力",
        body: "学日志、配置管理、Linux、Docker 和云部署，把本地服务真正跑起来。",
        tasks: [
          "部署项目到云服务器或 Render",
          "记录接口日志和错误日志",
          "完成一个可演示的后端项目"
        ]
      }
    ]
  },
  python: {
    title: "Python 路线",
    summary: "适合想从高效率语言入手的人。既可转后端，也可延伸到自动化、数据分析和 AI 工具开发。",
    duration: "10-12 周",
    focus: "Python 基础 + 项目 + 自动化 + Web",
    output: "完成脚本工具、数据处理练习和基础 Web 项目",
    resources: {
      docs: [
        { label: "Python 官方教程", url: "https://docs.python.org/3/tutorial/" },
        { label: "FastAPI First Steps", url: "https://fastapi.tiangolo.com/tutorial/first-steps/" },
        { label: "SQLite Documentation", url: "https://sqlite.org/docs.html" }
      ],
      videos: [
        { label: "YouTube: freeCodeCamp Python 初学者全课程搜索", url: "https://www.youtube.com/results?search_query=freeCodeCamp+Python+for+Beginners+full+course" },
        { label: "YouTube: freeCodeCamp Pandas 搜索", url: "https://www.youtube.com/results?search_query=freeCodeCamp+pandas+course" },
        { label: "YouTube: freeCodeCamp API with Python 搜索", url: "https://www.youtube.com/results?search_query=freeCodeCamp+API+Python+course" }
      ],
      repos: [
        { label: "vinta/awesome-python", url: "https://github.com/vinta/awesome-python" },
        { label: "public-apis/public-apis", url: "https://github.com/public-apis/public-apis" },
        { label: "practical-tutorials/project-based-learning", url: "https://github.com/practical-tutorials/project-based-learning" }
      ]
    },
    phases: [
      {
        title: "阶段 1：核心语法",
        body: "掌握基本数据类型、流程控制、函数、模块、异常和文件操作。",
        tasks: [
          "写 20 个基础练习",
          "做一个批量重命名文件脚本",
          "用函数重构重复代码"
        ]
      },
      {
        title: "阶段 2：面向对象与实用库",
        body: "学习类和对象，再接触 requests、pathlib、json、csv 等常用库。",
        tasks: [
          "写一个简单账户管理类",
          "抓取并保存公开 API 数据",
          "处理本地 CSV 文件"
        ]
      },
      {
        title: "阶段 3：自动化与数据处理",
        body: "把 Python 用在真实效率场景里，提升成就感和实战感。",
        tasks: [
          "写自动整理文件脚本",
          "做网页内容抓取练习",
          "体验 pandas 基础数据处理"
        ]
      },
      {
        title: "阶段 4：Web 或 AI 工具方向",
        body: "按兴趣选择 FastAPI/Flask 后端方向，或者做命令行与 AI API 小工具。",
        tasks: [
          "做一个待办 API",
          "或做一个命令行问答工具",
          "整理 Python 项目模板"
        ]
      }
    ]
  },
  daily: {
    title: "每日执行版",
    summary: "适合不想先纠结方向的人。按天推进，持续 30 天后再选深入路线。",
    duration: "30 天起步",
    focus: "每日节奏 + 小步快跑 + 项目复盘",
    output: "形成稳定学习习惯和第一批作品",
    resources: {
      docs: [
        { label: "GitHub Hello World", url: "https://docs.github.com/en/get-started/start-your-journey/hello-world" },
        { label: "GitHub Desktop 入门", url: "https://docs.github.com/desktop/guides/getting-started?platform=windows" },
        { label: "MDN Web Tutorials", url: "https://developer.mozilla.org/en-US/docs/Web/Tutorials" }
      ],
      videos: [
        { label: "YouTube: freeCodeCamp Full Stack for Beginners 搜索", url: "https://www.youtube.com/results?search_query=freeCodeCamp+full+stack+web+development+for+beginners" },
        { label: "YouTube: 每日 30-90 分钟编程学习搜索", url: "https://www.youtube.com/results?search_query=programming+study+routine+for+beginners" },
        { label: "YouTube: GitHub 初学者搜索", url: "https://www.youtube.com/results?search_query=GitHub+for+beginners+freeCodeCamp" }
      ],
      repos: [
        { label: "firstcontributions/first-contributions", url: "https://github.com/firstcontributions/first-contributions" },
        { label: "practical-tutorials/project-based-learning", url: "https://github.com/practical-tutorials/project-based-learning" },
        { label: "build-your-own-x", url: "https://build-your-own-x.com/" }
      ]
    },
    phases: [
      {
        title: "每天固定动作",
        body: "每天只做一小步，但必须能落到代码上。不要只收藏教程。",
        tasks: [
          "读 20 分钟教程",
          "写 50 分钟代码",
          "复盘 20 分钟"
        ]
      },
      {
        title: "每周固定动作",
        body: "周中学基础，周末做项目。每周至少有一个可展示的小成果。",
        tasks: [
          "周一到周五做基础练习",
          "周六完成一个小功能",
          "周日总结并推送到 GitHub"
        ]
      },
      {
        title: "每月验收",
        body: "不要用‘学了很多’来判断进步，要用‘做出了什么’来判断。",
        tasks: [
          "至少完成 1 个可运行项目",
          "至少写 1 篇学习总结",
          "至少解决 10 个真实报错"
        ]
      }
    ]
  }
};

const routePanel = document.getElementById("route-panel");
const routeButtons = document.querySelectorAll(".route-chip");
const checkboxes = document.querySelectorAll('input[type="checkbox"][data-check]');
const resetButton = document.getElementById("reset-progress");
const overallProgressValue = document.getElementById("overall-progress-value");
const overallProgressRing = document.getElementById("overall-progress-ring");
const overallProgressNote = document.getElementById("overall-progress-note");
const resumePanel = document.getElementById("resume-panel");
const favoritesPanel = document.getElementById("favorites-panel");
const storageKey = "codex-practice-study-checks";
const routeProgressKey = "codex-practice-route-progress";
const favoriteResourcesKey = "codex-practice-favorite-resources";
const activeRouteKey = "codex-practice-active-route";

function getRouteTasks(routeKey) {
  return routes[routeKey].phases.flatMap((phase, phaseIndex) =>
    phase.tasks.map((task, taskIndex) => ({
      id: `${routeKey}-${phaseIndex}-${taskIndex}`,
      phaseTitle: phase.title,
      label: task
    }))
  );
}

function readRouteProgress() {
  try {
    return JSON.parse(localStorage.getItem(routeProgressKey) || "{}");
  } catch (error) {
    return {};
  }
}

function writeRouteProgress(progress) {
  localStorage.setItem(routeProgressKey, JSON.stringify(progress));
}

function readFavoriteResources() {
  try {
    return JSON.parse(localStorage.getItem(favoriteResourcesKey) || "[]");
  } catch (error) {
    return [];
  }
}

function writeFavoriteResources(items) {
  localStorage.setItem(favoriteResourcesKey, JSON.stringify(items));
}

function getRouteCompletion(routeKey) {
  const progress = readRouteProgress();
  const tasks = getRouteTasks(routeKey);
  const completed = tasks.filter((task) => progress[task.id]).length;
  return {
    total: tasks.length,
    completed,
    percent: tasks.length ? Math.round((completed / tasks.length) * 100) : 0
  };
}

function getOverallCompletion() {
  const keys = Object.keys(routes);
  const totals = keys.map(getRouteCompletion);
  const totalTasks = totals.reduce((sum, item) => sum + item.total, 0);
  const totalCompleted = totals.reduce((sum, item) => sum + item.completed, 0);
  return {
    totalTasks,
    totalCompleted,
    percent: totalTasks ? Math.round((totalCompleted / totalTasks) * 100) : 0
  };
}

function toggleRouteTask(taskId, checked) {
  const progress = readRouteProgress();
  progress[taskId] = checked;
  writeRouteProgress(progress);
}

function toggleFavoriteResource(item) {
  const favorites = readFavoriteResources();
  const exists = favorites.some((favorite) => favorite.url === item.url);
  const next = exists
    ? favorites.filter((favorite) => favorite.url !== item.url)
    : [item, ...favorites];
  writeFavoriteResources(next);
  renderFavorites();
  updateDashboard();
}

function createResourceSection(title, items, category, routeTitle) {
  const favorites = readFavoriteResources();
  return `
    <section class="resource-card">
      <p class="section-kicker">${category}</p>
      <h4>${title}</h4>
      <ul class="resource-list">
        ${items.map((item) => {
          const isFavorite = favorites.some((favorite) => favorite.url === item.url);
          return `
            <li class="resource-item">
              <a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>
              <button
                class="favorite-toggle ${isFavorite ? "saved" : ""}"
                data-favorite-route="${routeTitle}"
                data-favorite-category="${category}"
                data-favorite-label="${item.label}"
                data-favorite-url="${item.url}"
                type="button"
              >${isFavorite ? "已收藏" : "收藏"}</button>
            </li>
          `;
        }).join("")}
      </ul>
    </section>
  `;
}

function bindRouteInteractions(routeKey) {
  routePanel.querySelectorAll("[data-task-id]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      toggleRouteTask(checkbox.dataset.taskId, checkbox.checked);
      updateDashboard();
      renderRoute(routeKey);
    });
  });

  routePanel.querySelectorAll("[data-favorite-url]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleFavoriteResource({
        route: button.dataset.favoriteRoute,
        category: button.dataset.favoriteCategory,
        label: button.dataset.favoriteLabel,
        url: button.dataset.favoriteUrl
      });
      renderRoute(routeKey);
    });
  });
}

function renderRoute(routeKey) {
  const route = routes[routeKey];
  localStorage.setItem(activeRouteKey, routeKey);
  const progress = readRouteProgress();
  const completion = getRouteCompletion(routeKey);

  routePanel.innerHTML = `
    <article class="roadmap-card">
      <p class="section-kicker">可执行路线</p>
      <h3>${route.title}</h3>
      <p>${route.summary}</p>
      <div class="roadmap-meta">
        <span class="meta-pill">周期：${route.duration}</span>
        <span class="meta-pill">重点：${route.focus}</span>
        <span class="meta-pill">成果：${route.output}</span>
        <span class="meta-pill">完成度：${completion.percent}%</span>
      </div>
      <div class="roadmap-grid">
        ${route.phases.map((phase, phaseIndex) => `
          <section class="phase-card">
            <h4>${phase.title}</h4>
            <p>${phase.body}</p>
            <ul class="task-list">
              ${phase.tasks.map((task, taskIndex) => {
                const taskId = `${routeKey}-${phaseIndex}-${taskIndex}`;
                return `
                  <li>
                    <label class="task-item">
                      <input type="checkbox" data-task-id="${taskId}" ${progress[taskId] ? "checked" : ""}>
                      <span>${task}</span>
                    </label>
                  </li>
                `;
              }).join("")}
            </ul>
          </section>
        `).join("")}
      </div>
      <div class="resource-groups">
        ${createResourceSection("官方文档", route.resources.docs, "Docs", route.title)}
        ${createResourceSection("YouTube 学习入口", route.resources.videos, "Videos", route.title)}
        ${createResourceSection("项目仓库", route.resources.repos, "Repos", route.title)}
      </div>
    </article>
  `;
  bindRouteInteractions(routeKey);
  updateDashboard();
}

function renderFavorites() {
  const favorites = readFavoriteResources();
  if (!favorites.length) {
    favoritesPanel.innerHTML = `
      <article class="favorite-empty">
        <p class="dashboard-copy">还没有收藏资源。看到合适的文档、视频或仓库时，点一下“收藏”就会汇总到这里。</p>
      </article>
    `;
    return;
  }

  favoritesPanel.innerHTML = favorites.map((item) => `
    <article class="favorite-card">
      <p class="section-kicker">${item.category}</p>
      <h3>${item.route}</h3>
      <a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>
    </article>
  `).join("");
}

function updateDashboard() {
  const overall = getOverallCompletion();
  const routeKey = localStorage.getItem(activeRouteKey) || "starter";
  const route = routes[routeKey];
  const routeTasks = getRouteTasks(routeKey);
  const progress = readRouteProgress();
  const nextTask = routeTasks.find((task) => !progress[task.id]);

  overallProgressValue.textContent = `${overall.percent}%`;
  overallProgressRing.style.setProperty("--progress-angle", `${overall.percent * 3.6}deg`);
  overallProgressNote.textContent = `已完成 ${overall.totalCompleted} / ${overall.totalTasks} 个路线任务`;

  resumePanel.innerHTML = `
    <article class="resume-card">
      <p class="section-kicker">Current Route</p>
      <h3>${route.title}</h3>
      <p class="dashboard-copy">${nextTask ? `下一步优先做：${nextTask.label}` : "当前路线任务都已完成，可以切换下一条路线了。"}</p>
      <p class="dashboard-copy">${nextTask ? `所在阶段：${nextTask.phaseTitle}` : "建议去收藏区挑一个项目仓库开始实战。"}</p>
    </article>
  `;
}

function saveChecklist() {
  const values = {};
  checkboxes.forEach((checkbox) => {
    values[checkbox.dataset.check] = checkbox.checked;
  });
  localStorage.setItem(storageKey, JSON.stringify(values));
}

function loadChecklist() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return;

  try {
    const values = JSON.parse(saved);
    checkboxes.forEach((checkbox) => {
      checkbox.checked = Boolean(values[checkbox.dataset.check]);
    });
  } catch (error) {
    console.error("Failed to load checklist", error);
  }
}

routeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    routeButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-selected", String(item === button));
    });
    renderRoute(button.dataset.route);
  });
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", saveChecklist);
});

resetButton.addEventListener("click", () => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  saveChecklist();
});

renderRoute("starter");
loadChecklist();
renderFavorites();
updateDashboard();
