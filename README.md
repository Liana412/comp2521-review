# COMP2521 Final Review — Demo

一个可直接部署 GitHub Pages 的纯静态单页复习网站。无需服务器、账号或运行 C 代码的环境。

## 功能
- **复习清单**：知识点和全部题目双维度 TODO，按主题 / 来源折叠，并显示完成数和百分比。
- **代码题库 / TODO 刷题**：题目、starter、个人草稿、参考解答、解析。
- **理论知识点 / Past Exam 理论题**：独立学习、独立作答。
- **错题集**：高亮错误代码片段，写复盘注解，再刷一次。
- **模板 / ADT**：浏览、复制 C 算法和数据结构模板。
- **导出**：`COMP2521-templates.md` 和 `COMP2521-mistake-notes.md`；以及全量 JSON 数据备份。

## 使用
直接双击 `index.html`，或把文件上传 GitHub 仓库根目录，在 **Settings → Pages → Deploy from a branch → main / root** 启用 GitHub Pages。

## 重要说明
目前包含的题目只是 **Demo 样例**，并非全部 UNSW Lab / Practice / Past Exam；知识点目录也只是初稿。后续请上传原始 Lab、Slides、Practice 和 Past Exam，由我对照原始文件逐项补充，并按 `source + year/week + topic` 标注出处、核对题目数量，避免漏题。若新增题库使用“题库管理 → 恢复备份 / 导入整理好的题库”，相同 ID 更新、不同 ID 追加，并保留原有本地刷题记录。

刷题记录存储在**当前浏览器的 localStorage**，GitHub Pages 只是托管静态文件，不会自动跨设备同步。更新站点前请先导出完整 JSON 备份。
