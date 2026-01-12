# 我的个人网站

这是一个使用 [Next.js](https://nextjs.org) 构建的个人网站，部署在 Cloudflare Pages 上。

## ✨ 特性

- ✅ **完全免费**：使用 Cloudflare Pages 免费套餐
- ✅ **国内可访问**：Cloudflare 全球 CDN，国内可直连
- ✅ **自动部署**：Git 推送自动触发部署
- ✅ **快速构建**：Next.js 16 + Turbopack
- ✅ **现代化 UI**：Tailwind CSS 4

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
# 构建静态文件
npm run build

# 构建输出在 out/ 目录
```

## 📦 部署到 Cloudflare Pages

### 快速部署步骤

1. **推送代码到 GitHub/GitLab**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **在 Cloudflare Pages 创建项目**
   - 访问：https://dash.cloudflare.com/
   - 进入 **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
   - 选择你的仓库

3. **配置构建设置**
   - **构建命令**：`npm run build`
   - **构建输出目录**：`out`
   - **根目录**：`/`

4. **部署完成**
   - 获得免费域名：`https://your-site.pages.dev`
   - 国内可直接访问 ✅

### 详细部署指南

查看 [DEPLOY.md](./DEPLOY.md) 获取完整的部署指南和配置说明。

## 📁 项目结构

```
my-site/
├── app/              # Next.js App Router
│   ├── layout.tsx    # 根布局
│   ├── page.tsx      # 首页
│   └── globals.css   # 全局样式
├── public/           # 静态资源
│   ├── _headers      # Cloudflare Pages 头部配置
│   └── _redirects    # 重定向规则
├── next.config.ts    # Next.js 配置（已配置静态导出）
└── package.json      # 项目依赖
```

## 🔧 技术栈

- **框架**：Next.js 16.1.1
- **语言**：TypeScript
- **样式**：Tailwind CSS 4
- **部署**：Cloudflare Pages
- **CDN**：Cloudflare 全球 CDN

## 📝 注意事项

### 静态导出限制

由于使用 `output: 'export'`，以下功能不可用：
- ❌ Next.js Image 组件的图片优化（已配置 `unoptimized: true`）
- ❌ API Routes（`/api` 路由）
- ❌ Server Components 的动态功能

### 如需动态功能

可以添加：
- **Cloudflare Workers**：免费 100,000 请求/天
- **Cloudflare Functions**：在 `/functions` 目录创建函数

## 📚 学习资源

- [Next.js 文档](https://nextjs.org/docs)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

## 📄 许可证

MIT
