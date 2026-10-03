/*
 * @Description: VitePress配置文件
 * @Author: laoyuan
 * @Date: 2023-10-10 15:06:13
 */

import llmstxt from "vitepress-plugin-llms";
import zhConfig from "../zh/config";
import enConfig from "../en/config";

export default {
  title: "前端吧",
  description: "关注web前端开发为主的博客网站和前端网址大全",
  outDir: "../dist",
  base: "/vitePress-project/",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lastUpdated: true,
  vite: {
    plugins: [llmstxt()],
  },
  rewrites: {
    "zh/:rest*": ":rest*",
  },
  locales: {
    root: { label: "简体中文", lang: "zh-Hans", dir: "ltr", ...zhConfig },
    en: { label: "English", lang: "en-US", dir: "ltr", ...enConfig },
  },
  themeConfig: {
    logo: "/logo.png",
    siteTitle: false,
    // 右侧边栏配置，默认值是"In hac pagina"
    outlineTitle: "本页目录",
    // 编辑链接
    editLink: {
      pattern: "https://github.com/msyuan/vitePress-project",
      text: "在 github 上编辑此页",
    },
    // 站点页脚配置
    footer: {
      // message: "Released under the MIT License",
      copyright: "Copyright © 2023-present Lao Yuan",
    },
    // 社交和项目链接地址配置
    socialLinks: [
      { icon: "github", link: "https://github.com/msyuan/vitePress-project" },
      // 也可以自定义svg的icon:
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
      //   },
      //   link: "...",
      // },
    ],
    // 搜索
    algolia: {
      apiKey: "your_api_key",
      indexName: "index_name",
    },
    //本地搜索
    search: {
      provider: "local",
    },
    // returnToTopLabel: "返回顶部", 未生效，所以自己手动写了一些返回顶部的组件
    lastUpdatedText: "最后更新",
    // 默认是 next page
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
  },
};
