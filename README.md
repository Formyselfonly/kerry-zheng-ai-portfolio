# Kerry Zheng AI Engineer Portfolio

这是 Kerry Zheng / Shijie Zheng 的个人主页静态项目，适合直接部署到 GitHub Pages。

## 页面内容

- 首页 Hero
- 核心优势
- 技能栈
- 工作经历时间线
- 代表项目卡片
- 教育背景
- 论文与荣誉
- 联系方式

## 本地预览

直接双击 `index.html` 即可在浏览器中打开。

也可以在项目目录运行：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 部署到 GitHub Pages

### 方式一：部署到个人主页仓库

1. 在 GitHub 创建仓库，仓库名使用：

```text
Formyselfonly.github.io
```

2. 将本项目中的所有文件上传到仓库根目录。
3. 打开仓库的 `Settings` -> `Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 GitHub Pages 发布。

发布地址通常是：

```text
https://Formyselfonly.github.io/
```

### 方式二：部署到普通项目仓库

1. 创建任意仓库，例如：

```text
kerry-zheng-ai-portfolio
```

2. 将本项目中的所有文件上传到仓库根目录。
3. 打开 `Settings` -> `Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。

发布地址通常是：

```text
https://Formyselfonly.github.io/kerry-zheng-ai-portfolio/
```

## 自定义信息

如需修改邮箱、项目链接或文案，编辑 `index.html`。

如需修改颜色、布局和移动端样式，编辑 `styles.css`。

如需关闭首页动态网络背景，删除 `index.html` 底部的 `script.js` 引用，或清空 `script.js`。
