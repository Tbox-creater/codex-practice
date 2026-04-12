# codex-practice

一个更适合长期复习的编程学习路线网站。

## 当前定位

- 首页只保留路线切换、阶段目标和推荐资源
- 专题页只保留进阶、网络与应用、面试三个高频补充入口
- 已预留正式服务器托管接口，后续可以继续接数据库或后台

## 本地直接查看

直接在浏览器打开 `index.html` 即可。

## 以服务器方式运行

确保本机安装了 Node.js 18 或更高版本，然后执行：

```bash
npm start
```

启动后访问：

```bash
http://localhost:3000
```

## 已预留的托管接口

- `GET /api/health`
- `GET /api/site`
- `GET /api/roadmaps`

首页会优先读取 `/api/roadmaps`，如果接口不可用，会自动回退到前端内置数据。

## 推荐托管方式：GitHub Pages

这个项目当前最适合直接用 GitHub Pages 托管。

原因很简单：

- 当前站点的核心内容已经可以纯静态运行
- 首页即使拿不到 `/api/roadmaps`，也会自动回退到前端内置学习路线
- 仓库已经自带 GitHub Pages 工作流，会在 `main` 分支推送后自动发布静态页面

### 启用步骤

1. 打开 GitHub 仓库 `Tbox-creater/codex-practice`
2. 进入 `Settings`
3. 打开 `Pages`
4. 在 `Build and deployment` 中选择 `GitHub Actions`
5. 等待 Actions 中的 `Deploy GitHub Pages` 工作流跑完

### 预计访问地址

`https://tbox-creater.github.io/codex-practice/`

## 预留的正式托管接口

虽然 GitHub Pages 只托管静态页面，但项目里仍然保留了 Node 服务入口，方便以后切换到正式服务器平台：

- `GET /api/health`
- `GET /api/site`
- `GET /api/roadmaps`

## 其他可选部署平台

- Render
- Railway
- Fly.io
- 自建 Linux 服务器 + Node.js / Nginx

如果后面你想让后端接口真的在线可用，再切去 Render 这类支持 Node.js 的平台会更合适。
