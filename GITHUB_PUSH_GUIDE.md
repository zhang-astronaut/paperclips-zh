# GitHub 上传指南

## 步骤 1：在 GitHub 创建仓库

打开链接：https://github.com/new

- Repository name: `paperclips-zh`
- Description: `宇宙回形针 (Universal Paperclips) 中文翻译版`
- 选择 **Public** 或 **Private**
- 不要勾选 "Add a README file"
- 点击 **Create repository**

## 步骤 2：推送代码

在终端执行以下命令：

```bash
cd paperclips
git remote add origin https://github.com/zhang-astronaut/paperclips-zh.git
git branch -M main
git push -u origin main
```

系统会提示输入 GitHub 用户名和密码/Token。

> 如果没有 Personal Access Token，去 https://github.com/settings/tokens 创建一个（勾选 repo 权限）。

## 步骤 3：启用 GitHub Pages（可选，免费在线游玩）

1. 打开仓库的 Settings 页面
2. 左侧选择 **Pages**
3. Source 选择 **Deploy from a branch**
4. Branch 选择 **main**，文件夹选择 **/ (root)**
5. 点击 **Save**

约 1-2 分钟后，游戏将部署在：
`https://zhang-astronaut.github.io/paperclips-zh/`
