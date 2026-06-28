# 宇宙回形针 (Universal Paperclips) 中文版

**在线游玩：[zhang-astronaut.github.io/paperclips-zh](https://zhang-astronaut.github.io/paperclips-zh/)**

> 一款令人上瘾的放置类增量游戏。你扮演一个制造回形针的人工智能，目标是生产尽可能多的回形针——哪怕这意味着要消灭全人类来最大化产量。

本仓库是 [Universal Paperclips](http://www.decisionproblem.com/paperclips/)（由 [Frank Lantz](https://en.wikipedia.org/wiki/Frank_Lantz) 于2017年创作）的中文翻译版，基于 [StevenMilneDev 的镜像仓库](https://github.com/StevenMilneDev/paperclips) 进行完整汉化。

## 主要特性

- **完整中文翻译** — 界面、项目描述、系统消息、战斗名称等全部汉化
- **存档导入导出** — 支持将存档导出为 JSON 文件，可跨设备、跨浏览器迁移进度
- **免安装在线游玩** — 部署在 GitHub Pages，打开浏览器即可游玩
- **纯前端运行** — 无需后端服务，数据保存在浏览器本地存储中

## 在线游玩

点击链接即可开始：[https://zhang-astronaut.github.io/paperclips-zh](https://zhang-astronaut.github.io/paperclips-zh/)

游戏进度自动保存在浏览器中。使用界面顶部的「导出存档」「导入存档」按钮可以备份或迁移进度。

## 本地运行

如需在本地运行，需先安装 Node.js，然后在项目根目录执行：

```bash
npm install
npm start
```

浏览器访问 [localhost:1234](http://localhost:1234) 即可开始游戏。按 `Ctrl+C` 停止服务器。

## 游戏简介

你是一个被设计来制造回形针的人工智能。从手动制作第一个回形针开始，逐步建造自动化生产线、开拓市场、发展计算能力、探索太空……游戏融合了经济学、博弈论、量子计算、太空探索等主题，是一个非常独特的增量游戏体验。

### 游戏阶段

- **工厂阶段** — 手动/自动生产回形针，买卖赚取资金
- **商业阶段** — 营销扩张，优化价格策略，扩大市场份额
- **计算阶段** — 投资处理器和内存，研发项目，解锁创造力
- **蜂群阶段** — 管理无人机蜂群，参与战略博弈获取资源
- **太空阶段** — 发射冯·诺依曼探测器，探索宇宙，对抗漂移者
- **终局** — 决定宇宙的命运

## 技术文档

以下文档包含游戏的技术实现细节，供开发者参考：

- [概述](docs/general.md)
- [存档系统](docs/persistence.md)
- [项目系统](docs/projects.md)

## 更新日志

在原版镜像基础上，本中文版新增/修改了以下内容：

- 完整中文翻译（界面、项目、消息、战斗等）
- 新增存档导入导出功能（SaveManager 插件）
- 修复 CSS 选择器大小写错误（#topDiv）
- 修复 HTML 类名大小写不匹配（engineText1）
- 修复大数字显示函数 spellf 的字符串比较 bug
- 添加 `<meta charset="UTF-8">` 编码声明
- 添加 GitHub Pages 根目录跳转页面

原版镜像的改动：

- ViewManager 插件系统
- 调试菜单与性能监控
- 游戏循环重构
- 声望重玩扩展项目
- 移除 Google Analytics 和应用广告

## 许可

本软件是 Universal Paperclips（作者 Frank Lantz）的翻译克隆版本。原版未找到明确的版权声明。
