const express = require("express");
const path = require("path");
const { createDatabase } = require("./db");

const app = express();
const port = process.env.PORT || 3000;
const rootDir = __dirname;

app.use(express.json());
app.use(express.static(rootDir));

const backendHighlights = [
  {
    title: "后端基础栈",
    summary: "HTTP、REST、鉴权、中间件、日志、配置管理和错误处理。",
    level: "核心"
  },
  {
    title: "数据层能力",
    summary: "MySQL/PostgreSQL、Redis、事务、索引、缓存和一致性。",
    level: "进阶"
  },
  {
    title: "服务端工程化",
    summary: "测试、CI/CD、容器化、监控告警、灰度发布和回滚。",
    level: "工程"
  }
];

const interviewTips = [
  "讲后端项目时，不要只说接口数量，要讲业务价值、系统边界和稳定性方案。",
  "回答性能问题时，优先从数据库、缓存、异步和热点流量角度组织答案。",
  "如果提到测试，要讲清单元测试、接口测试和发布前质量门禁各自的作用。"
];

function normalizeEntry(body) {
  return {
    title: String(body.title || "").trim(),
    focusArea: String(body.focusArea || "").trim(),
    status: String(body.status || "planned").trim(),
    note: String(body.note || "").trim()
  };
}

function normalizeFeedback(body) {
  return {
    name: String(body.name || "").trim(),
    message: String(body.message || "").trim()
  };
}

async function startServer() {
  const db = await createDatabase();

  app.get("/api/health", (_req, res) => {
    res.json({
      ok: true,
      service: "study-site-backend",
      framework: "express",
      database: "sqlite",
      timestamp: new Date().toISOString()
    });
  });

  app.get("/api/backend/highlights", (_req, res) => {
    res.json({
      section: "backend",
      items: backendHighlights
    });
  });

  app.get("/api/interview/tips", (_req, res) => {
    res.json({
      category: "backend-and-testing",
      tips: interviewTips
    });
  });

  app.get("/api/study/entries", async (_req, res) => {
    const items = await db.all(`
      SELECT id, title, focus_area AS focusArea, status, note, created_at AS createdAt
      FROM study_entries
      ORDER BY id DESC
      LIMIT 8
    `);
    res.json({ items });
  });

  app.post("/api/study/entries", async (req, res) => {
    const entry = normalizeEntry(req.body);
    if (!entry.title || !entry.focusArea || !entry.note) {
      res.status(400).json({ error: "title, focusArea and note are required" });
      return;
    }

    const result = await db.run(
      `INSERT INTO study_entries (title, focus_area, status, note) VALUES (?, ?, ?, ?)`,
      entry.title,
      entry.focusArea,
      entry.status,
      entry.note
    );

    const saved = await db.get(
      `SELECT id, title, focus_area AS focusArea, status, note, created_at AS createdAt
       FROM study_entries WHERE id = ?`,
      result.lastID
    );

    res.status(201).json(saved);
  });

  app.get("/api/feedback", async (_req, res) => {
    const items = await db.all(`
      SELECT id, name, message, created_at AS createdAt
      FROM feedback_messages
      ORDER BY id DESC
      LIMIT 6
    `);
    res.json({ items });
  });

  app.post("/api/feedback", async (req, res) => {
    const feedback = normalizeFeedback(req.body);
    if (!feedback.name || !feedback.message) {
      res.status(400).json({ error: "name and message are required" });
      return;
    }

    const result = await db.run(
      `INSERT INTO feedback_messages (name, message) VALUES (?, ?)`,
      feedback.name,
      feedback.message
    );

    const saved = await db.get(
      `SELECT id, name, message, created_at AS createdAt
       FROM feedback_messages WHERE id = ?`,
      result.lastID
    );

    res.status(201).json(saved);
  });

  app.get("/api/study/summary", async (_req, res) => {
    const [entryCountRow, feedbackCountRow, latestEntry, latestFeedback] = await Promise.all([
      db.get(`SELECT COUNT(*) AS count FROM study_entries`),
      db.get(`SELECT COUNT(*) AS count FROM feedback_messages`),
      db.get(`SELECT title, focus_area AS focusArea, status, created_at AS createdAt FROM study_entries ORDER BY id DESC LIMIT 1`),
      db.get(`SELECT name, message, created_at AS createdAt FROM feedback_messages ORDER BY id DESC LIMIT 1`)
    ]);

    res.json({
      metrics: {
        studyEntryCount: entryCountRow.count,
        feedbackCount: feedbackCountRow.count
      },
      latestEntry,
      latestFeedback
    });
  });

  app.get("/", (_req, res) => {
    res.sendFile(path.join(rootDir, "index.html"));
  });

  app.listen(port, () => {
    console.log(`Study site backend running at http://localhost:${port}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});
