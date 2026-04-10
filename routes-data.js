window.routeCatalog = [
  {
    key: "starter",
    title: "零基础路线",
    summary: "适合从 0 开始建立编程基础的人，先学语言、Git、SQL 和网页基础，再做完整项目。",
    duration: "12 周",
    focus: "Python + Git + SQL + Web 基础",
    output: "3 个小项目 + 1 个完整项目",
    tags: ["all", "python", "habit"],
    phases: [
      { title: "第 1-3 周：语法与基本功", body: "变量、条件、循环、函数、列表、字典、文件读写。", tasks: ["完成 15 个 Python 小练习", "写一个命令行计算器", "学会用 VS Code 调试代码"] },
      { title: "第 4-6 周：项目与工具", body: "引入 Git、GitHub、命令行和基础算法。", tasks: ["把练习代码推到 GitHub", "学习数组、栈、队列、哈希表", "完成一个学生信息管理系统"] },
      { title: "第 7-9 周：数据库与接口感知", body: "学习 SQL 和数据存储。", tasks: ["使用 SQLite 或 MySQL", "完成 20 条 SQL 练习", "给练手项目增加数据存储"] },
      { title: "第 10-12 周：网页与综合项目", body: "学习 HTML、CSS、JavaScript 基础。", tasks: ["做个人学习主页", "做待办或记账应用", "整理作品集和学习笔记"] }
    ],
    resources: {
      docs: [{ label: "Python 官方教程", url: "https://docs.python.org/3/tutorial/" }, { label: "GitHub 入门文档", url: "https://docs.github.com/en/get-started" }, { label: "MDN Learn Web Development", url: "https://developer.mozilla.org/en-US/docs/Learn" }],
      videos: [{ label: "YouTube: freeCodeCamp Python 全课程", url: "https://www.youtube.com/results?search_query=freeCodeCamp+Python+full+course" }, { label: "YouTube: freeCodeCamp HTML CSS 初学者课程", url: "https://www.youtube.com/results?search_query=freeCodeCamp+HTML+CSS+full+course+beginners" }],
      repos: [{ label: "firstcontributions/first-contributions", url: "https://github.com/firstcontributions/first-contributions" }, { label: "florinpop17/app-ideas", url: "https://github.com/florinpop17/app-ideas" }]
    }
  },
  {
    key: "frontend",
    title: "前端路线",
    summary: "面向网页与交互开发，按页面基础、JavaScript、React 和部署上线推进。",
    duration: "10-14 周",
    focus: "HTML + CSS + JavaScript + React",
    output: "响应式页面 + React 应用 + 作品集站点",
    tags: ["all", "frontend"],
    phases: [
      { title: "阶段 1：页面基础", body: "把语义化、布局和响应式打牢。", tasks: ["手写 3 个静态页面", "掌握 Flex、Grid、媒体查询", "独立临摹一个落地页"] },
      { title: "阶段 2：JavaScript 核心", body: "掌握 DOM、事件、异步和模块化。", tasks: ["做轮播图与表单校验", "理解 Promise 和 async/await", "排查常见浏览器报错"] },
      { title: "阶段 3：React 与组件化", body: "进入组件、状态和数据获取。", tasks: ["做一个天气或笔记应用", "拆分可复用组件", "练习基础状态管理"] },
      { title: "阶段 4：工程与上线", body: "理解构建、接口联调和部署。", tasks: ["部署到 Vercel 或 GitHub Pages", "掌握环境变量和打包流程", "完成个人作品集"] }
    ],
    resources: {
      docs: [{ label: "MDN Learn Web Development", url: "https://developer.mozilla.org/en-US/docs/Learn" }, { label: "React 官方 Learn", url: "https://react.dev/learn" }],
      videos: [{ label: "YouTube: freeCodeCamp JavaScript 全课程", url: "https://www.youtube.com/results?search_query=freeCodeCamp+learn+JavaScript+full+course+for+beginners" }, { label: "YouTube: freeCodeCamp React 全课程", url: "https://www.youtube.com/results?search_query=freeCodeCamp+React+full+course+for+beginners" }],
      repos: [{ label: "wesbos/JavaScript30", url: "https://github.com/wesbos/JavaScript30" }, { label: "practical-tutorials/project-based-learning", url: "https://github.com/practical-tutorials/project-based-learning" }]
    }
  },
  {
    key: "backend",
    title: "后端路线",
    summary: "适合想做服务端、接口、数据库和系统逻辑的人，从语言、SQL、API 到部署展开。",
    duration: "12-16 周",
    focus: "后端语言 + SQL + API + 部署",
    output: "用户系统 + 接口服务 + 可部署项目",
    tags: ["all", "backend"],
    phases: [
      { title: "阶段 1：语言与网络基础", body: "掌握一门后端语言并理解 HTTP。", tasks: ["学习 Python 或 Node.js 基础语法", "理解 GET POST PUT DELETE", "看懂接口文档"] },
      { title: "阶段 2：数据库", body: "掌握表设计、查询、索引和事务。", tasks: ["完成用户表和订单表设计", "练习联表查询", "为项目设计数据库结构"] },
      { title: "阶段 3：框架与 API", body: "用框架开发接口。", tasks: ["做一个任务管理 API", "加入注册登录功能", "用 Postman 或 Apifox 测试接口"] },
      { title: "阶段 4：部署与工程能力", body: "进入 Linux、Docker 和云部署。", tasks: ["部署项目到云服务器或 Render", "记录接口日志和错误日志", "完成可演示后端项目"] }
    ],
    resources: {
      docs: [{ label: "FastAPI 官方教程", url: "https://fastapi.tiangolo.com/tutorial/" }, { label: "PostgreSQL 官方 Tutorial", url: "https://www.postgresql.org/docs/current/tutorial.html" }],
      videos: [{ label: "YouTube: freeCodeCamp FastAPI 课程", url: "https://www.youtube.com/results?search_query=freeCodeCamp+FastAPI+course" }, { label: "YouTube: freeCodeCamp Node.js 全课程", url: "https://www.youtube.com/results?search_query=freeCodeCamp+Node.js+full+course+beginners" }],
      repos: [{ label: "fastapi/full-stack-fastapi-template", url: "https://github.com/fastapi/full-stack-fastapi-template" }, { label: "public-apis/public-apis", url: "https://github.com/public-apis/public-apis" }]
    }
  },
  {
    key: "python",
    title: "Python 路线",
    summary: "适合从高效率语言入手的人，可延伸到后端、自动化、数据处理和 AI 工具开发。",
    duration: "10-12 周",
    focus: "Python 基础 + 项目 + 自动化 + Web",
    output: "脚本工具 + 数据处理练习 + Web 小项目",
    tags: ["all", "python"],
    phases: [
      { title: "阶段 1：核心语法", body: "掌握类型、流程控制、函数、模块与文件操作。", tasks: ["写 20 个基础练习", "做批量重命名文件脚本", "用函数重构重复代码"] },
      { title: "阶段 2：面向对象与实用库", body: "学习类对象与常用库。", tasks: ["写一个账户管理类", "抓取并保存公开 API 数据", "处理本地 CSV 文件"] },
      { title: "阶段 3：自动化与数据处理", body: "把 Python 放进真实效率场景里。", tasks: ["写自动整理文件脚本", "做网页内容抓取练习", "体验 pandas 数据处理"] },
      { title: "阶段 4：Web 或 AI 工具方向", body: "进入 FastAPI/Flask 或命令行工具。", tasks: ["做一个待办 API", "做命令行问答工具", "整理 Python 项目模板"] }
    ],
    resources: {
      docs: [{ label: "Python 官方教程", url: "https://docs.python.org/3/tutorial/" }, { label: "FastAPI First Steps", url: "https://fastapi.tiangolo.com/tutorial/first-steps/" }],
      videos: [{ label: "YouTube: freeCodeCamp Python 初学者全课程", url: "https://www.youtube.com/results?search_query=freeCodeCamp+Python+for+Beginners+full+course" }, { label: "YouTube: freeCodeCamp Pandas 课程", url: "https://www.youtube.com/results?search_query=freeCodeCamp+pandas+course" }],
      repos: [{ label: "vinta/awesome-python", url: "https://github.com/vinta/awesome-python" }, { label: "practical-tutorials/project-based-learning", url: "https://github.com/practical-tutorials/project-based-learning" }]
    }
  },
  {
    key: "testing",
    title: "软件测试路线",
    summary: "面向前后端质量保障，覆盖单元测试、集成测试、接口测试、自动化、性能测试和测试面试表达。",
    duration: "8-12 周",
    focus: "测试基础 + 自动化 + 性能 + 质量工程",
    output: "测试方案 + 自动化用例 + CI 质量检查",
    tags: ["all", "testing", "backend"],
    phases: [
      { title: "阶段 1：测试基础认知", body: "建立测试金字塔、测试左移和缺陷生命周期概念。", tasks: ["区分单元、集成、E2E 测试", "写出 10 条高质量测试用例", "理解冒烟测试与回归测试"] },
      { title: "阶段 2：单元与接口测试", body: "进入断言、Mock、覆盖率和 API 测试。", tasks: ["用 Jest、Vitest 或 Pytest 写单元测试", "为一个接口系统做 API 测试集", "理解 Mock 与真实依赖取舍"] },
      { title: "阶段 3：自动化与稳定性", body: "学习 UI 自动化与测试环境问题。", tasks: ["使用 Playwright 或 Cypress 完成核心流程自动化", "处理测试数据准备与清理", "减少 flaky test"] },
      { title: "阶段 4：性能与质量治理", body: "把测试接进持续交付。", tasks: ["用 k6 或 JMeter 做基础压测", "把测试接进 GitHub Actions", "整理一个质量治理复盘案例"] }
    ],
    resources: {
      docs: [{ label: "Playwright Docs", url: "https://playwright.dev/" }, { label: "Vitest Docs", url: "https://vitest.dev/" }, { label: "Pytest Docs", url: "https://docs.pytest.org/" }],
      videos: [{ label: "YouTube: software testing roadmap", url: "https://www.youtube.com/results?search_query=software+testing+roadmap" }, { label: "YouTube: Playwright tutorial", url: "https://www.youtube.com/results?search_query=Playwright+tutorial+testing" }],
      repos: [{ label: "microsoft/playwright", url: "https://github.com/microsoft/playwright" }, { label: "vitest-dev/vitest", url: "https://github.com/vitest-dev/vitest" }]
    }
  },
  {
    key: "daily",
    title: "每日执行版",
    summary: "适合先建立学习习惯的人，按天推进，持续 30 天后再选深入路线。",
    duration: "30 天起步",
    focus: "每日节奏 + 小步快跑 + 项目复盘",
    output: "形成稳定学习习惯和第一批作品",
    tags: ["all", "habit"],
    phases: [
      { title: "每天固定动作", body: "每天都要落到代码上。", tasks: ["读 20 分钟教程", "写 50 分钟代码", "复盘 20 分钟"] },
      { title: "每周固定动作", body: "周中学基础，周末做项目。", tasks: ["周一到周五做基础练习", "周六完成一个小功能", "周日总结并推送到 GitHub"] },
      { title: "每月验收", body: "用作品来判断进步。", tasks: ["完成 1 个可运行项目", "写 1 篇学习总结", "解决 10 个真实报错"] }
    ],
    resources: {
      docs: [{ label: "GitHub Hello World", url: "https://docs.github.com/en/get-started/start-your-journey/hello-world" }, { label: "MDN Web Tutorials", url: "https://developer.mozilla.org/en-US/docs/Web/Tutorials" }],
      videos: [{ label: "YouTube: 编程学习节奏", url: "https://www.youtube.com/results?search_query=programming+study+routine+for+beginners" }],
      repos: [{ label: "practical-tutorials/project-based-learning", url: "https://github.com/practical-tutorials/project-based-learning" }]
    }
  }
];
