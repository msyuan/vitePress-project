/*
 * @Description: VitePress 英文 locale 配置
 * @Author: laoyuan
 * @Date: 2023-10-10 15:06:13
 */

export const enTopNav = [
  {
    text: "Frontend Nav",
    items: [
      { text: "Frontend Hub", link: "/en/site/page" },
      { text: "HTML/CSS", link: "/en/site/html-css" },
      { text: "Frameworks", link: "/en/site/framework" },
    ],
  },
  {
    text: "Tech Notes",
    items: [
      { text: "VitePress", link: "/en/note/vitePress/page1" },
      { text: "Vue", link: "/en/note/vue" },
      { text: "React", link: "/en/note/react" },
    ],
  },
  {
    text: "Components",
    link: "/en/examples/button",
  },
  {
    text: "About",
    link: "/en/about/page",
  },
  { text: "Changelog", link: "https://github.com/msyuan/vitePress-project" },
];

export const enVitePressNote = [
  {
    text: "VitePress Tutorial: Build a Personal Blog from Scratch",
    items: [
      { text: "1. Installing and Running VitePress", link: "/en/note/vitePress/page1" },
      { text: "2. Default Homepage and Nav Configuration", link: "/en/note/vitePress/page2" },
      { text: "3. Default Theme Details Configuration", link: "/en/note/vitePress/page3" },
      { text: "4. Custom Homepage Layout and Theme Styling", link: "/en/note/vitePress/page4" },
      { text: "5. Using Third-Party UI Libraries", link: "/en/note/vitePress/page5" },
      { text: "6. Auto Deploy to GitHub Pages with Actions", link: "/en/note/vitePress/page6" },
      { text: "7. Manual Deploy to GitHub Pages", link: "/en/note/vitePress/page7" },
      { text: "8. Fix Styling Issues After Deployment", link: "/en/note/vitePress/page8" },
    ],
  },
];

export const enThemeConfig = {
  nav: enTopNav,
  sidebar: {
    "/en/note/vitePress": enVitePressNote,
  },
  outlineTitle: "On this page",
  editLink: {
    pattern: "https://github.com/msyuan/vitePress-project",
    text: "Edit this page on GitHub",
  },
  lastUpdatedText: "Last updated",
  docFooter: {
    prev: "Previous page",
    next: "Next page",
  },
};

export default {
  themeConfig: enThemeConfig,
};
