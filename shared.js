const themeToggle = document.getElementById("theme-toggle");
const recentPanel = document.getElementById("recent-panel");
const themeStorageKey = "codex-practice-theme";
const recentPagesKey = "codex-practice-recent-pages";

function applyTheme(theme) {
  document.body.classList.toggle("theme-dark", theme === "dark");
  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "切换日间" : "切换夜间";
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem(themeStorageKey) || "light";
  applyTheme(savedTheme);
  if (!themeToggle) return;
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("theme-dark") ? "light" : "dark";
    localStorage.setItem(themeStorageKey, nextTheme);
    applyTheme(nextTheme);
  });
}

function recordRecentPage() {
  const title = document.body.dataset.pageTitle;
  if (!title) return;
  const current = {
    title,
    url: window.location.pathname.split("/").pop() || "index.html"
  };
  const saved = JSON.parse(localStorage.getItem(recentPagesKey) || "[]");
  const next = [current, ...saved.filter((item) => item.url !== current.url)].slice(0, 4);
  localStorage.setItem(recentPagesKey, JSON.stringify(next));
}

function renderRecentPages() {
  if (!recentPanel) return;
  const saved = JSON.parse(localStorage.getItem(recentPagesKey) || "[]");
  if (!saved.length) {
    recentPanel.innerHTML = `<article class="resume-card"><p class="dashboard-copy">这里会记录你最近打开过的专题页，方便手机上继续阅读。</p></article>`;
    return;
  }
  recentPanel.innerHTML = saved.map((item) => `
    <article class="resume-card">
      <p class="section-kicker">Recent Page</p>
      <h3>${item.title}</h3>
      <a href="${item.url}">${item.url}</a>
    </article>
  `).join("");
}

initTheme();
recordRecentPage();
renderRecentPages();
