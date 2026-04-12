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

## 适合后续部署的平台

- Render
- Railway
- Fly.io
- 自建 Linux 服务器 + Node.js / Nginx
