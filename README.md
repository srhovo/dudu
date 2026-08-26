# 养成系club · 请宝宝挑选心仪陪玩
一个面向「老板/宝宝」的陪玩选人与服务展示页面。移动端优先，含：
- **挑选陪玩**：按价位 + 分路双维度筛选（价位/分路旁显示对应人数），双列卡片墙展示自介卡，点击卡片自动播放音介视频
- **服务清单**：价格表 / 预存表 / 活动图 / 礼物单（均以图片形式展示），每项标注更新日期
- **管理层信息**：团长 / 副团 / 管理微信号卡片，点击即可复制
- **注意事项弹窗**：左上角问好按钮打开
- **搜索**：支持名字、分路、价位关键字，以及拼音首字母组合（如 `dy`=打野、`zl`=中路、`yuji`=雨季）
- 底部 Tab 切换四个页面，纯静态、无后端，可直接部署到 GitHub Pages
## 目录结构
```
dudu/
├── index.html        # 应用主体（界面 + 逻辑，一般不需要改）
├── data.js           # ★ 内容数据（陪玩 / 价格 / 预存 / 活动 / 礼物 / 管理层 / 注意事项，日常更新改这里）
├── assets/
│   ├── cards/        # 自介卡图片（放这里）
│   ├── voices/       # 音介视频（放这里，务必用 .mp4）
│   └── services/     # 服务清单四项图片（价格表/预存表/礼物单/活动图）
└── README.md         # 本文档
```
## 素材规范（重点）
| 素材 | 推荐比例 | 建议格式 | 存放位置 / 命名 |
|---|---|---|---|
| 自介卡图片 | **2096:1279（约 5:3）** | png / jpg / webp | `assets/cards/`（建议 `名字.jpeg`） |
| 音介视频 | **2096:1279（约 5:3）** | **mp4**（手机/电脑都能播） | `assets/voices/`（建议 `名字.mp4`） |
| club 标题图 | 横幅即可 | png / jpg / webp | `assets/club-logo.png`（见下） |
| 价格表 / 预存表 / 礼物单 / 活动图 | 不限 | png / jpg / webp | `assets/services/price.png` 等（见下） |

> ⚠️ **视频一定要用 .mp4**：`.mov` 在安卓/微信/部分 Chrome 上无法播放。若手头只有 `.mov`，可用任意视频转换工具或 ffmpeg 转成 mp4 再上传。

### club 标题图 / 服务图「自动生效」
图片**按约定命名上传后无需改代码**，页面会自动识别：
- club 标题图：`assets/club-logo.png`（或 `club-title.png` / `club.png`，也支持 .jpg/.jpeg/.webp）
- 服务四项图：`assets/services/price.png`、`prepaid.png`、`gift.png`、`activity.png`（支持 .jpg/.jpeg/.webp）
- 上传前页面会显示「待上传」占位框；也可以直接改 `data.js` 里 `club.logo` 与各 `services.*.image` 手动指定路径。
## 部署到 GitHub Pages（一次性）
1. 在 GitHub 上新建仓库，如 `dudu`，不要勾选「Add a README」（空仓库即可）。
2. 本地把项目推进仓库：
```bash
cd dudu
git init
git add .
git commit -m "init: 养成系club"
git branch -M main
git remote add origin https://github.com/<你的用户名>/dudu.git
git push -u origin main
```
3. 打开仓库 → **Settings → Pages** → Source 选择 **Deploy from a branch** → 分支 `main`、目录 `/ (root)` → Save。
4. 等 1～2 分钟访问：
```
https://<你的用户名>.github.io/dudu/
```
以后每次 `git push` 页面自动更新，无需重新配置。
## 日常更新内容
### 新增 / 修改一位陪玩
1. 自介卡图片放 `assets/cards/`，音介视频放 `assets/voices/`（**转成 mp4**）。
2. 打开 `data.js`，在 `companions` 里加一条（或改对应条目）：
```js
{ id: 'yuji', name: '雨季', lanes: ['打野','中路'], price: 30,
  tags: ['顶技','镜'], intro: '无忧无虑 · 主玩英雄：镜',
  image: 'assets/cards/雨季.jpeg',
  video: 'assets/voices/雨季.mp4' }
```
字段说明：
| 字段 | 必填 | 说明 |
|---|---|---|
| `id` | 是 | 唯一标识，英文/数字，不能重复（也可用于拼音搜索） |
| `name` | 是 | 展示名 |
| `lane` / `lanes` | 是 | 单分路写 `lane`；多分路写数组 `lanes`，如 `['打野','中路']` |
| `price` | 是 | 价位数字（单位 r），需在 `prices` 列表内 |
| `tags` | 否 | 标签数组，用于搜索 |
| `intro` | 否 | 一句话自介，用于搜索 |
| `image` | 否 | 自介卡路径；留空显示占位 |
| `video` | 否 | 音介视频路径（mp4）；留空则点击卡片显示自介卡并提示待上传 |
> 图片/视频既可用相对路径（`assets/cards/xx.png`），也可用外链（`https://...`）。
3. 提交推送：
```bash
git add .
git commit -m "新增陪玩：雨季"
git push
```
### 修改价格表 / 预存表 / 礼物单 / 活动
图片形式：直接替换 `assets/services/` 下对应图片即可；文字版数据在 `data.js` 的 `services` 里。改完把 `updateDate` 更新为当天日期，页面会展示「更新于 日期」。
### 修改管理层 / 注意事项
在 `data.js` 的 `management`（团长/副团/管理微信号）与 `notes`（注意事项标题与条目）里改即可。
### 修改价位档位 / 分路分类
改 `data.js` 顶部的 `prices`、`lanes` 数组，页面的筛选按钮与数量会自动重算。
## 本地预览
直接双击 `index.html` 用浏览器打开即可；也可以起本地服务：
```bash
python3 -m http.server 8080
# 浏览器打开 http://localhost:8080
```
## 常见问题
- **点卡片没视频播放？** 检查 `video` 字段是否填了路径、视频是否已放进 `assets/voices/` 并推送；确认是 **mp4** 格式。
- **图片变形？** 自介卡请按 5:3 制作；非 5:3 的图会以居中裁剪方式展示，主体建议放在画面中上部。
- **搜索新名字搜不到拼音？** 中文关键字搜索始终可用；拼音首字母依赖 `index.html` 里的拼音字典，新字未收录时可在字典补一条（`'字':'首字母'`），或直接搜中文。
