# 📤 推送到 GitHub 指南

## 步骤 1：在 GitHub 创建仓库

1. 访问：https://github.com/new
2. 填写信息：
   - **Repository name**: `my-site`
   - **Description**: `我的个人网站 - Next.js + Cloudflare Pages`
   - **Visibility**: 选择 **Public**（Cloudflare Pages 需要公开仓库，或使用 Private + 授权）
   - ⚠️ **不要**勾选 "Initialize this repository with a README"
3. 点击 **"Create repository"**

## 步骤 2：添加远程仓库并推送

创建仓库后，GitHub 会显示仓库 URL，格式类似：
- `https://github.com/你的用户名/my-site.git`
- 或 `git@github.com:你的用户名/my-site.git`

### 使用 HTTPS（推荐，简单）

```bash
# 添加远程仓库（替换 你的用户名）
git remote add origin https://github.com/你的用户名/my-site.git

# 推送代码
git push -u origin main
```

### 使用 SSH（如果已配置 SSH 密钥）

```bash
# 添加远程仓库（替换 你的用户名）
git remote add origin git@github.com:你的用户名/my-site.git

# 推送代码
git push -u origin main
```

## 步骤 3：验证

推送成功后：
- 访问 `https://github.com/你的用户名/my-site`
- 应该能看到所有代码文件

## 下一步：部署到 Cloudflare Pages

代码推送到 GitHub 后，就可以在 Cloudflare Pages 连接这个仓库进行部署了！

查看 [QUICK_START.md](./QUICK_START.md) 获取部署步骤。

