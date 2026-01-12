# 🔧 Cloudflare Pages 部署修复方案

## 问题

Cloudflare Pages 执行 `npx wrangler deploy` 时失败，因为 wrangler 不知道要部署哪个目录。

## ✅ 解决方案（两种方法）

### 方法一：在 Cloudflare Pages 设置中修改（推荐）

1. **进入 Cloudflare Pages 项目设置**
   - 在 Cloudflare Dashboard 中找到你的 `my-site` 项目
   - 点击 **Settings** → **Builds & deployments**

2. **修改部署命令**
   - 找到 **Deploy command** 字段
   - 将 `npx wrangler deploy` 改为：`npm run deploy`
   - 或者直接改为：`npx wrangler deploy --assets=./out`

3. **保存并重新部署**

### 方法二：使用 wrangler.toml（已配置）

我已经在项目中添加了 `wrangler.toml` 配置文件，但如果 Cloudflare Pages 仍然失败，请使用方法一。

## 📝 当前配置

- ✅ `wrangler.toml`：已配置静态资源目录为 `./out`
- ✅ `package.json`：已添加 `deploy` 脚本

## 🎯 推荐操作

**最佳方案**：在 Cloudflare Pages 设置中：
- **Deploy command**：改为 `npm run deploy` 或 `npx wrangler deploy --assets=./out`
- 或者**删除 Deploy command**（留空），让 Cloudflare Pages 自动部署静态文件

## 🔍 如何找到 Cloudflare Pages 设置

1. 登录 Cloudflare Dashboard
2. 左侧菜单 → **Workers & Pages**（或在 **Compute & AI** 下）
3. 点击你的 `my-site` 项目
4. 顶部标签 → **Settings**
5. 找到 **Builds & deployments** 部分
6. 修改 **Deploy command** 字段

---

**提示**：如果找不到设置选项，可以尝试删除项目重新创建，这次在创建时不要填写 Deploy command。

