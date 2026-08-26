/* ============================================================
   陪玩选人 · 内容数据文件
   ------------------------------------------------------------
   【更新指南】
   1. 自介卡图片（建议比例 2096:1279 ≈ 5:3）→ 放入 assets/cards/
   2. 音介视频（建议比例 2096:1279 ≈ 5:3）  → 放入 assets/voices/
   3. 在下方 companions 里添加 / 修改对应条目，保存后提交推送即可
   ------------------------------------------------------------
   字段说明（陪玩 companions）：
     id      唯一标识，英文/数字，不能重复（用于定位）
     name    展示名
     lane    分路：打野 / 中路 / 射手 / 辅助 / 上单 / 全能
     price   价位（数字，单位 r，需在 prices 列表内）
     tags    标签数组（用于筛选展示与搜索）
     intro   一句话自介（用于搜索，可选）
     image   自介卡图片路径（assets/cards/xxx.png 或 http 链接）
     video   音介视频路径（assets/voices/xxx.mp4 或 http 链接；暂无请留空 ""）
   ============================================================ */

window.APP_DATA = {

  /* 更新日期（页面会展示） */
  updateDate: '2026-08-27',

  /* 分路分类（可按需增删） */
  lanes: ['打野', '中路', '射手', '辅助', '上单', '全能'],

  /* 价位筛选（可按需增删，全部=不筛选） */
  prices: [15, 18, 20, 22, 25, 28, 30, 35, 40],

  /* ================= 陪玩列表 =================
     ↓↓↓ 以下 12 条为「示例数据」，请替换成你自己的 ↓↓↓ */
  companions: [
    { id: 'gbb',     name: '顾北北',   lane: '中路', price: 20, tags: ['温柔', '带飞', '声音好听'], intro: '中单法王，三指操作丝滑', image: 'https://aka.doubaocdn.com/s/Mq9ZMfREzZ', video: '' },
    { id: 'xiaolu',  name: '一只小鹿', lane: '辅助', price: 18, tags: ['可爱', '陪聊', '耐心'],       intro: '软辅天花板，保护欲拉满', image: 'https://aka.doubaocdn.com/s/JZZa2JUpBI', video: '' },
    { id: 'ali',     name: '阿离',     lane: '射手', price: 25, tags: ['电竞少女', '操作怪', '爱玩梗'], intro: '公孙离本离，操作拉满',   image: 'https://aka.doubaocdn.com/s/VmA3F8uyAJ', video: '' },
    { id: 'taotao',  name: '桃桃',     lane: '打野', price: 22, tags: ['御姐音', '意识流', '冷静'],     intro: '野区节奏大师，带你翻盘', image: 'https://aka.doubaocdn.com/s/Fa2sasp9Po', video: '' },
    { id: 'wanwan',  name: '林晚晚',   lane: '全能', price: 30, tags: ['全能王', '脾气好', '话痨'],     intro: '全分路补位，百搭陪玩',   image: 'https://aka.doubaocdn.com/s/oVjuspDAeV', video: '' },
    { id: 'suli',    name: '苏离',     lane: '上单', price: 20, tags: ['阳光', '开朗', '搞笑'],        intro: '对抗路战神，单带无敌',   image: 'https://aka.doubaocdn.com/s/mLeyVCg3UE', video: '' },
    { id: 'tangtang',name: '糖糖',     lane: '辅助', price: 15, tags: ['元气', '话痨', '氛围组'],      intro: '元气少女，快乐游戏',     image: 'https://aka.doubaocdn.com/s/ATPDGbKlSc', video: '' },
    { id: 'btwl',    name: '白桃乌龙', lane: '中路', price: 28, tags: ['高冷', '大神', '声音苏'],      intro: '国服法师，细节拉满',     image: 'https://aka.doubaocdn.com/s/yFjfaNvPV9', video: '' },
    { id: 'yuanyuan',name: '圆圆',     lane: '射手', price: 22, tags: ['甜妹', '稳', '好相处'],        intro: '射手核弹，输出爆炸',     image: 'https://aka.doubaocdn.com/s/2LnOSfl7gP', video: '' },
    { id: 'wanyin',  name: '江晚吟',   lane: '打野', price: 35, tags: ['职业级', '强', '专业'],        intro: '顶尖打野，全程带节奏',   image: 'https://aka.doubaocdn.com/s/VTFOp7agEV', video: '' },
    { id: 'luoluo',  name: '洛洛',     lane: '上单', price: 18, tags: ['温柔', '有耐心', '教操作'],    intro: '对抗路萌新之友',         image: 'https://aka.doubaocdn.com/s/jVo3w15cej', video: '' },
    { id: 'zhizhi',  name: '栀栀',     lane: '全能', price: 40, tags: ['老板首选', '全能', '服务好'],  intro: '全能天花板，点谁都有',   image: 'https://aka.doubaocdn.com/s/lCquszstAg', video: '' }
  ],

  /* ================= 服务清单 ================= */
  services: {
    price: [
      { name: '娱乐陪玩',   meta: '随便玩玩 · 开心最重要', price: '15r/局' },
      { name: '五排车队',   meta: '满编车队 · 氛围拉满',   price: '18r/局' },
      { name: '排位上分',   meta: '星耀→王者 · 全程稳车', price: '20r/局' },
      { name: '教学陪玩',   meta: '包教包会 · 语音指导',   price: '25r/局' },
      { name: '巅峰赛陪玩', meta: '2000分以下 · 稳带',     price: '30r/局' },
      { name: '通宵包段',   meta: '专业高效 · 通宵在线',   price: '40r/局' }
    ],
    prepaid: [
      { name: '充 100',  amount: '到账 120',  bonus: '+20',  note: '新人尝鲜' },
      { name: '充 200',  amount: '到账 260',  bonus: '+60',  note: '人气之选' },
      { name: '充 500',  amount: '到账 680',  bonus: '+180', note: '畅玩推荐' },
      { name: '充 1000', amount: '到账 1500', bonus: '+500', note: '老板专属' }
    ],
    gift: [
      { name: '小心心',   price: '1r',   color: '#E98A8A', ch: '心' },
      { name: '荧光棒',   price: '5r',   color: '#E0A24C', ch: '荧' },
      { name: '玫瑰',     price: '9r',   color: '#D97A9A', ch: '玫' },
      { name: '豪华跑车', price: '50r',  color: '#5B8BD9', ch: '跑' },
      { name: '热气球',   price: '66r',  color: '#9A7BD9', ch: '球' },
      { name: '浪漫火箭', price: '100r', color: '#E08A4C', ch: '火' },
      { name: '梦幻城堡', price: '520r', color: '#4C9AD9', ch: '堡' }
    ],
    activity: {
      /* 活动图：放入 assets/ 后填路径；留空 "" 则使用内置渐变底 */
      image: 'https://aka.doubaocdn.com/s/doUBGAHta4',
      tag:   '限时活动',
      title: '新人首单 8 折',
      sub:   '预约即享 · 周末开黑更划算 · 私聊领取'
    }
  }
};
