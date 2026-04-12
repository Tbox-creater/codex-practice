const express = require("express");
const path = require("path");

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

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "study-site-backend",
    framework: "express",
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

app.get("/", (_req, res) => {
  res.sendFile(path.join(rootDir, "index.html"));
});

app.listen(port, () => {
  console.log(`Study site backend running at http://localhost:${port}`);
});
