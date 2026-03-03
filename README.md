# Resume React Engine

> **数据驱动的响应式计算机研究生简历生成引擎**
> 核心理念：实现简历内容（JSON）与视觉排版（CSS/React）的高度解耦，为开发者提供最优雅的简历维护方案。

## 🛠️ 技术栈

* **框架**: React 18
* **样式**: CSS3 (Flexbox, Grid, Media Queries)
* **数据**: JSON
* **部署**: GitHub Pages / Vercel

## 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/rainsin/resume-react.git
cd resume-react

```

### 2. 安装与运行

```bash
npm install
npm start

```

访问 `http://localhost:3000` 即可看到实时生成的简历。

### 3. 定制你的简历

编辑 `src/config.json` 文件，按照你的个人信息、项目经历和技能矩阵进行修改。页面会自动热重载（HMR）显示最新内容。

## 导出 PDF 指南

为了获得最佳的 PDF 效果，建议使用 **Chrome 浏览器**：

1. 在浏览器中打开简历页面。
2. 按下 `Ctrl + P` (Windows) 或 `Cmd + P` (Mac)。
3. **设置**:
* 目标打印机：保存为 PDF
* 布局：纵向
* 纸张尺寸：A4
* 边距：**无**（非常重要，项目已内置安全边距）
* 选项：勾选“背景图形”



## 核心架构描述

项目通过将简历拆分为多个原子组件（Header, Skills, Projects, Education），利用 React 的组件化能力实现：

* **解耦**：内容更新不影响排版样式。
* **密度优化**：通过算法逻辑，根据内容长度动态调整展示细节，确保技术栈信息不拥挤。

## 贡献与反馈

欢迎提交 Issue 或 Pull Request。如果你觉得这个项目对你有帮助，欢迎点一个 **Star** 🌟。

---

**Author**: [尉旭胜 (RainSin)](https://www.google.com/search?q=https://github.com/rainsin)

**Blog**: [blog.rainsin.cn](https://blog.rainsin.cn)
