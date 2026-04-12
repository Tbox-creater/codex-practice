const { useEffect, useMemo, useState } = React;
const html = htm.bind(React.createElement);

const routeProgressKey = "codex-practice-route-progress";
const favoriteResourcesKey = "codex-practice-favorite-resources";
const activeRouteKey = "codex-practice-active-route";
const routeFilterKey = "codex-practice-route-filter";
const routeQueryKey = "codex-practice-route-query";

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch (error) {
    return fallback;
  }
}

function getRouteTasks(route) {
  return route.phases.flatMap((phase, phaseIndex) =>
    phase.tasks.map((task, taskIndex) => ({
      id: `${route.key}-${phaseIndex}-${taskIndex}`,
      phaseTitle: phase.title,
      label: task
    }))
  );
}

function getRouteCompletion(route, progressMap) {
  const tasks = getRouteTasks(route);
  const completed = tasks.filter((task) => progressMap[task.id]).length;
  return { completed, total: tasks.length, percent: tasks.length ? Math.round((completed / tasks.length) * 100) : 0 };
}

function ResourceSection({ title, category, items, favorites, onToggleFavorite, routeTitle }) {
  return html`
    <section className="resource-card">
      <p className="section-kicker">${category}</p>
      <h4>${title}</h4>
      <ul className="resource-list">
        ${items.map((item) => {
          const saved = favorites.some((favorite) => favorite.url === item.url);
          return html`
            <li className="resource-item" key=${item.url}>
              <a href=${item.url} target="_blank" rel="noreferrer">${item.label}</a>
              <button
                className=${`favorite-toggle ${saved ? "saved" : ""}`}
                type="button"
                onClick=${() => onToggleFavorite({ route: routeTitle, category, ...item })}
              >
                ${saved ? "已收藏" : "收藏"}
              </button>
            </li>
          `;
        })}
      </ul>
    </section>
  `;
}

function RoutePanel({ route, progressMap, favorites, onToggleTask, onToggleFavorite }) {
  const completion = getRouteCompletion(route, progressMap);
  return html`
    <article className="roadmap-card">
      <p className="section-kicker">可执行路线</p>
      <h3>${route.title}</h3>
      <p>${route.summary}</p>
      <div className="roadmap-meta">
        <span className="meta-pill">周期：${route.duration}</span>
        <span className="meta-pill">重点：${route.focus}</span>
        <span className="meta-pill">成果：${route.output}</span>
        <span className="meta-pill">完成度：${completion.percent}%</span>
      </div>
      <div className="roadmap-grid">
        ${route.phases.map((phase, phaseIndex) => html`
          <section className="phase-card" key=${phase.title}>
            <h4>${phase.title}</h4>
            <p>${phase.body}</p>
            <ul className="task-list">
              ${phase.tasks.map((task, taskIndex) => {
                const taskId = `${route.key}-${phaseIndex}-${taskIndex}`;
                return html`
                  <li key=${taskId}>
                    <label className="task-item">
                      <input type="checkbox" checked=${Boolean(progressMap[taskId])} onChange=${(event) => onToggleTask(taskId, event.target.checked)} />
                      <span>${task}</span>
                    </label>
                  </li>
                `;
              })}
            </ul>
          </section>
        `)}
      </div>
      <div className="resource-groups">
        <${ResourceSection} title="官方文档" category="Docs" items=${route.resources.docs} favorites=${favorites} onToggleFavorite=${onToggleFavorite} routeTitle=${route.title} />
        <${ResourceSection} title="YouTube 学习入口" category="Videos" items=${route.resources.videos} favorites=${favorites} onToggleFavorite=${onToggleFavorite} routeTitle=${route.title} />
        <${ResourceSection} title="项目仓库" category="Repos" items=${route.resources.repos} favorites=${favorites} onToggleFavorite=${onToggleFavorite} routeTitle=${route.title} />
      </div>
    </article>
  `;
}

function FavoritesPanel({ favorites }) {
  if (!favorites.length) {
    return html`<article className="favorite-empty"><p className="dashboard-copy">还没有收藏资源，看到合适的文档、视频或仓库时点一下“收藏”就会汇总到这里。</p></article>`;
  }
  return html`${favorites.map((item) => html`
    <article className="favorite-card" key=${item.url}>
      <p className="section-kicker">${item.category}</p>
      <h3>${item.route}</h3>
      <a href=${item.url} target="_blank" rel="noreferrer">${item.label}</a>
    </article>
  `)}`;
}

function LearningApp() {
  const routes = window.routeCatalog || [];
  const [progressMap, setProgressMap] = useState(() => readJson(routeProgressKey, {}));
  const [favorites, setFavorites] = useState(() => readJson(favoriteResourcesKey, []));
  const [query, setQuery] = useState(() => localStorage.getItem(routeQueryKey) || "");
  const [filter, setFilter] = useState(() => localStorage.getItem(routeFilterKey) || "all");
  const [activeRouteKeyValue, setActiveRouteKeyValue] = useState(() => localStorage.getItem(activeRouteKey) || routes[0]?.key || "starter");

  useEffect(() => localStorage.setItem(routeProgressKey, JSON.stringify(progressMap)), [progressMap]);
  useEffect(() => localStorage.setItem(favoriteResourcesKey, JSON.stringify(favorites)), [favorites]);
  useEffect(() => localStorage.setItem(routeQueryKey, query), [query]);
  useEffect(() => localStorage.setItem(routeFilterKey, filter), [filter]);
  useEffect(() => localStorage.setItem(activeRouteKey, activeRouteKeyValue), [activeRouteKeyValue]);

  const matchedRoutes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return routes.filter((route) => {
      const filterOk = filter === "all" || route.tags.includes(filter);
      const text = `${route.title} ${route.summary} ${route.focus}`.toLowerCase();
      const queryOk = !normalizedQuery || text.includes(normalizedQuery);
      return filterOk && queryOk;
    });
  }, [routes, query, filter]);

  const activeRoute = useMemo(() => {
    return matchedRoutes.find((route) => route.key === activeRouteKeyValue) || matchedRoutes[0] || routes[0];
  }, [matchedRoutes, activeRouteKeyValue, routes]);

  useEffect(() => {
    if (activeRoute) {
      setActiveRouteKeyValue(activeRoute.key);
    }
  }, [activeRoute?.key]);

  const totals = routes.map((route) => getRouteCompletion(route, progressMap));
  const completedCount = totals.reduce((sum, item) => sum + item.completed, 0);
  const totalCount = totals.reduce((sum, item) => sum + item.total, 0);
  const overallPercent = totalCount ? Math.round((completedCount / totalCount) * 100) : 0;
  const nextTask = activeRoute ? getRouteTasks(activeRoute).find((task) => !progressMap[task.id]) : null;

  function handleToggleTask(taskId, checked) {
    setProgressMap((current) => ({ ...current, [taskId]: checked }));
  }

  function handleToggleFavorite(item) {
    setFavorites((current) => current.some((favorite) => favorite.url === item.url)
      ? current.filter((favorite) => favorite.url !== item.url)
      : [item, ...current]);
  }

  return html`
    <div className="learning-react-app">
      <div className="dashboard-grid">
        <article className="dashboard-card">
          <p className="section-kicker">Progress</p>
          <h2>学习进度面板</h2>
          <div className="progress-ring-card">
            <div className="progress-ring" style=${{ "--progress-angle": `${overallPercent * 3.6}deg` }}>
              <strong>${overallPercent}%</strong>
            </div>
            <div>
              <p className="dashboard-copy">这里会汇总你在所有路线里的任务完成度，方便你快速判断最近是在积累，还是只在收藏。</p>
              <p className="dashboard-copy">已完成 ${completedCount} / ${totalCount} 个路线任务</p>
            </div>
          </div>
        </article>
        <article className="dashboard-card">
          <p className="section-kicker">Resume</p>
          <h2>继续学习</h2>
          <div className="resume-panel">
            <article className="resume-card">
              <p className="section-kicker">Current Route</p>
              <h3>${activeRoute?.title || "暂无路线"}</h3>
              <p className="dashboard-copy">${nextTask ? `下一步优先做：${nextTask.label}` : "当前路线任务都已完成，可以切换下一条路线了。"}</p>
              <p className="dashboard-copy">${nextTask ? `所在阶段：${nextTask.phaseTitle}` : "建议去收藏区挑一个项目仓库开始实战。"}</p>
            </article>
          </div>
        </article>
      </div>

      <div className="dashboard-grid">
        <article className="dashboard-card">
          <p className="section-kicker">Search</p>
          <h2>路线搜索与筛选</h2>
          <div className="tool-stack">
            <input className="search-input" type="search" placeholder="搜索路线、方向或关键词" value=${query} onInput=${(event) => setQuery(event.target.value)} />
            <div className="filter-chips">
              ${[
                ["all", "全部"],
                ["frontend", "前端"],
                ["backend", "后端"],
                ["python", "Python"],
                ["testing", "软件测试"],
                ["habit", "习惯养成"]
              ].map(([value, label]) => html`
                <button key=${value} className=${`filter-chip ${filter === value ? "active" : ""}`} type="button" onClick=${() => setFilter(value)}>${label}</button>
              `)}
            </div>
            <p className="dashboard-copy">${matchedRoutes.length ? `当前找到 ${matchedRoutes.length} 条路线：${matchedRoutes.map((route) => route.title).join("、")}` : "没有匹配的路线，可以换个关键词或筛选标签。"}</p>
          </div>
        </article>
        <article className="dashboard-card">
          <p className="section-kicker">Favorites</p>
          <h2>已收藏资源</h2>
          <div className="favorites-panel">
            <${FavoritesPanel} favorites=${favorites} />
          </div>
        </article>
      </div>

      <section className="section-heading">
        <div>
          <p className="section-kicker">Roadmaps</p>
          <h2>选择你的主路线</h2>
        </div>
      </section>
      <div className="chip-group" role="tablist" aria-label="学习路线">
        ${matchedRoutes.map((route) => html`
          <button
            key=${route.key}
            className=${`route-chip ${activeRoute?.key === route.key ? "active" : ""}`}
            type="button"
            onClick=${() => setActiveRouteKeyValue(route.key)}
          >
            ${route.title}
          </button>
        `)}
      </div>
      <div className="roadmap-panel">
        ${activeRoute ? html`<${RoutePanel} route=${activeRoute} progressMap=${progressMap} favorites=${favorites} onToggleTask=${handleToggleTask} onToggleFavorite=${handleToggleFavorite} />` : null}
      </div>
    </div>
  `;
}

const root = ReactDOM.createRoot(document.getElementById("learning-app-root"));
root.render(html`<${LearningApp} />`);

function BackendPanel() {
  const [health, setHealth] = useState(null);
  const [highlights, setHighlights] = useState([]);
  const [tips, setTips] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadBackendData() {
      try {
        const [healthRes, highlightsRes, tipsRes] = await Promise.all([
          fetch("/api/health"),
          fetch("/api/backend/highlights"),
          fetch("/api/interview/tips")
        ]);

        if (!healthRes.ok || !highlightsRes.ok || !tipsRes.ok) {
          throw new Error("Backend API request failed");
        }

        const [healthJson, highlightsJson, tipsJson] = await Promise.all([
          healthRes.json(),
          highlightsRes.json(),
          tipsRes.json()
        ]);

        if (cancelled) return;
        setHealth(healthJson);
        setHighlights(highlightsJson.items || []);
        setTips(tipsJson.tips || []);
      } catch (loadError) {
        if (cancelled) return;
        setError("当前还没有通过后端启动站点。运行 npm install 和 npm start 后，这里会显示 API 数据。");
      }
    }

    loadBackendData();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return html`
      <article className="dashboard-card">
        <p className="dashboard-copy">${error}</p>
      </article>
    `;
  }

  return html`
    <div className="dashboard-grid">
      <article className="dashboard-card">
        <p className="section-kicker">Health</p>
        <h2>${health ? "后端在线" : "检查后端中"}</h2>
        <p className="dashboard-copy">${health ? `服务：${health.service}` : "正在请求 /api/health"}</p>
        <p className="dashboard-copy">${health ? `框架：${health.framework}` : "请稍候"}</p>
      </article>
      <article className="dashboard-card">
        <p className="section-kicker">Interview</p>
        <h2>后端面试提示</h2>
        <ul>
          ${tips.map((tip) => html`<li key=${tip}>${tip}</li>`)}
        </ul>
      </article>
      <article className="dashboard-card backend-span">
        <p className="section-kicker">Highlights</p>
        <h2>后端技术主线</h2>
        <div className="content-grid three-col">
          ${highlights.map((item) => html`
            <article className="content-card" key=${item.title}>
              <p className="section-kicker">${item.level}</p>
              <h3>${item.title}</h3>
              <p>${item.summary}</p>
            </article>
          `)}
        </div>
      </article>
    </div>
  `;
}

const backendRoot = document.getElementById("backend-api-root");
if (backendRoot) {
  ReactDOM.createRoot(backendRoot).render(html`<${BackendPanel} />`);
}
