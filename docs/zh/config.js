/*
 * @Description: VitePress 中文 locale 配置
 * @Author: laoyuan
 * @Date: 2023-10-10 15:06:13
 */

export const zhTopNav = [
  {
    text: "前端导航",
    items: [
      { text: "前端综合", link: "/zh/site/page" },
      { text: "HTML/CSS", link: "/zh/site/html-css" },
      { text: "框架组件", link: "/zh/site/framework" },
    ],
  },
  {
    text: "技术笔记",
    items: [
      { text: "VitePress", link: "/zh/note/vitePress/page1" },
      { text: "Vue", link: "/zh/note/vue" },
      { text: "React", link: "/zh/note/react" },
    ],
  },
  {
    text: "组件使用",
    link: "/zh/examples/button",
  },
  {
    text: "关于我们",
    link: "/zh/about/page",
  },
  { text: "更新日志", link: "https://github.com/msyuan/vitePress-project" },
];

export const zhVitePressNote = [
  {
    text: "从零开始用VitePress搭建个人博客的教程笔记",
    items: [
      {
        text: "1. VitePress的安装和运行",
        link: "/zh/note/vitePress/page1",
      },
      {
        text: "2. VitePress默认首页和头部导航配置",
        link: "/zh/note/vitePress/page2",
      },
      {
        text: "3. VitePress默认主题相关细节配置",
        link: "/zh/note/vitePress/page3",
      },
      {
        text: "4. 如何自定义首页布局和主题样式修改？",
        link: "/zh/note/vitePress/page4",
      },
      {
        text: "5. 第三方组件库的使用-搭建组件库文档？",
        link: "/zh/note/vitePress/page5",
      },
      {
        text: "6. 如何用Github Actions自动化部署到Github Pages？",
        link: "/zh/note/vitePress/page6",
      },
      {
        text: "7. VitePress如何非自动化部署到Github Pages？",
        link: "/zh/note/vitePress/page7",
      },
      {
        text: "8. VitePress部署到Github Pages后发现样式全错乱了怎么办？",
        link: "/zh/note/vitePress/page8",
      },
    ],
  },
];

export const zhThemeConfig = {
  nav: zhTopNav,
  sidebar: {
    "/zh/note/vitePress": zhVitePressNote,
  },
  outlineTitle: "本页目录",
  editLink: {
    pattern: "https://github.com/msyuan/vitePress-project",
    text: "在 github 上编辑此页",
  },
  lastUpdatedText: "最后更新",
  docFooter: {
    prev: "上一篇",
    next: "下一篇",
  },
};

export default {
  themeConfig: zhThemeConfig,
};
