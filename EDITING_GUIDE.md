# YDI 官网编辑指南

## 怎么改内容

所有页面内容都在 `content/` 文件夹的 JSON 文件里。用任何文本编辑器打开，改完保存，刷新浏览器就能看到效果。

### 文件对照表

| 要改的内容 | 编辑这个文件 |
|-----------|-------------|
| 网站名称、邮箱、地址 | `content/site.json` |
| 导航菜单 | `content/navigation.json` |
| Hero 大标题和副标题 | `content/hero.json` |
| 三大空间介绍 | `content/spaces.json` |
| 达尔文平台数据 | `content/platform.json` |
| 合作生态伙伴 | `content/ecosystem.json` |
| 新闻动态 | `content/news.json` |
| 关于YDI、发展历程 | `content/about.json` |
| 联系我们CTA | `content/contact.json` |

### 举例

改 Hero 大标题：打开 `content/hero.json`，找到：

```json
"headingLine1": "打造汽车产业",
"headingHighlight": "科技创新策源地",
```

改成：

```json
"headingLine1": "推动中国汽车",
"headingHighlight": "向前进",
```

保存，浏览器刷新，标题就变了。

改合作生态伙伴：打开 `content/ecosystem.json`，在 `partners` 数组里加一项：

```json
{ "name": "新合作伙伴", "role": "技术合作", "description": "简介" }
```

### 配色修改

打开 `src/app/globals.css`，顶部有品牌色彩变量，改色值即可：

```css
--color-brand-blue: #1F91C9;   /* 科创蓝 — 主色调 */
--color-brand-orange: #ED7D31;  /* 暖心橙 — 辅助色 */
--color-brand-deep: #012F84;    /* 深蓝 — Hero/About背景 */
```

---

## 怎么本地预览

```bash
cd /Users/imac/Desktop/xiaoqi/ydi-website
npm run dev
# 浏览器打开 http://localhost:3000
```

## 怎么部署上线

```bash
cd /Users/imac/Desktop/xiaoqi/ydi-website
npx vercel --yes --prod
```

---

## 怎么让 Claude Code（小七）帮你改

终端关了也没关系，新开 Claude Code 后说：

> "我在 /Users/imac/Desktop/xiaoqi/ydi-website 有一个 YDI 官网项目，帮我改 XXX"

或者直接给出具体需求，比如：

> "把 Hero 标题改成 XXXX，更新到 content/hero.json，然后部署上线"

小七会自动读取这个文件和 content/ 目录来恢复上下文。
