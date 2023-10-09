# 从零用VitePress搭建个人轻型博客的正确姿势

## 一、写在前面

最近在想更新一把自己的前端吧小博客，但发现wordPress版本停留在了5年之前，发现变化挺大，不支持在线直接更新，服务器正在运行的php等环境完全不支持wordPress最新版本。如果想使用最新版本，服务器环境配置必须更新，只能慢慢折腾了。

然后在想能不能用vitePress + CMS探索重构的可能性，所以接下来这是自己用vitePress搭建的纯文档博客的步骤，在此记录一下。

## 二、vitePress相关文档

首先我们要知道，VitePress 是 [VuePress](https://vuepress.vuejs.org/) 小兄弟, 它基于 [Vite](https://github.com/vitejs/vite)构建的，而[VuePress](https://vuepress.vuejs.org/) 是基于 Webpack构建的。

VitePress使用vite和Vue3的驱动的静态站点生成器，比之VuePress更加简约轻型。特点如下

- 开发服务器启动更快
- 热更新更快
- 构建更快(内部使用 Rollup)

更多不同可以查看文档：https://vitejs.cn/vitepress/#motivation

**官方英文文档**：https://vitepress.dev/

**中文文档**：

https://vitejs.cn/vitepress/

https://vitepress.qzxdp.cn/reference/site-config.html



## 三、初始化项目

### 1、创建项目目录并初始化

创建一个qianduan8目录，进入到目录，执行初始化命令

```js
pnpm init
```

### 2、本地项目安装VitePress

```javascript
pnpm add -D vitepress
```

![image-20230928151359486](C:\Users\laoyuan\AppData\Roaming\Typora\typora-user-images\image-20230928151359486.png)



### 3、配置项目目录结构

我们创建一个**docs/.vitepress**的目录和配置文件、首页，public。

开始我们创建的目录结构如下所示:

```javascript
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
│  └─ public
└─ package.json
```

说明如下：

**docs/.vitepress:**  用于存放全局的配置、自定义组件， 自定义主题（theme）等。

- config.js:  项目配置文件。

**public:**  公共文件目录，存放静态资源目录。（之后在首页和主题配置里可以直接使用 “/logo.png”引入）

**index.md**：则是站点的首页。

其中，config.js是配置VitePress网站的必要条件，它将导出一个JS对象，如果项目越来越大时，配置可以抽出来。

config.js初步配置：

```javascript
export default {
  title: '前端吧',
  description: '关注web前端开发为主的博客网站和前端网址大全',
  // 打包目录
  dest: './dist',
   head: [
		// 添加图标
		['link', { rel: 'icon', href: '/favicon.ico' }]
	],
}
```

如上所示，我们只简单地设置了**网站标题，网站描述，打包的 dist 目录，以及网站图标**，后面更多配置都是在config.js这个文件完成。

### 4、配置运行脚本

在package.json下配置，如下：

```javascript
  "scripts": {
    "docs-dev": "vitepress dev docs",
    "docs-build": "vitepress build docs",
    "docs-serve": "vitepress serve docs"
  }
```

### 5、本地运行

执行如下命令

```javascript
pnpm docs-dev
```

结果如下：

![image.png](https://cdn.nlark.com/yuque/0/2023/png/1173546/1690953846972-bfbaca5f-76b0-4d0b-adb7-36d1dd52f936.png)

运行成功，不过目前网站是空的，只有一个logo标题，那么，接下来我们需要不断完善，比如配置导航，首页、自定义模板等等

## 四、默认首页配置

接上一节：[初始化项目]

配置首页之前，我们需要了解VitePress的默认主题，它是提供了首页布局，通过设置 layout 选项为页面 frontmatter 来选择页面布局。

layout 有 3 个布局选项doc, page, 和 home，详细如下：

- layout: doc：doc 是默认布局，它将整个 Markdown 内容样式化为“文档”外观。
- layout: page ：选项 page 被视为“空白页”。 Markdown 仍然会被解析，并且所有 [Markdown Extensions](https://process1024.github.io/vitepress/guide/markdown) 与 doc 布局同样生效，但它不会获得任何默认样式。
- layout: home ：选项 home 将生成模板化的“主页”。 在此布局中，您可以设置额外的选项，例如hero和features
- layout: false 无布局（纯空白页）

- - 解析 Markdown 但不会获得任何默认样式

### 1、首页配置

那么我们想要配置主页，选择layout: home 即可，它有hero和features两个部分的配置。

首先在index.md顶部，写入如下代码

```javascript
---
layout: home
---
```

这样我们就开启了首页的布局配置，之后，我们就可以通过设置其他选项（如 hero 和 features）向主页添加几个不同的预模板 sections了。

#### 1.1、Hero 部分

Hero 部分位于主页顶部，下面是如何配置 Hero 部分。注意点：要注意缩进。

```javascript
---
  layout: home
  hero:
    image: 
      src: /logo.png
      alt: 前端吧
  name: 前端吧
  text: 关注web前端开发为主的博客网站和前端网址导航
  tagline: 收集有一大批前端相关的技术网站，包括Vue、React等技术资料的生态网站，方便快速访问
---
```

name: 是文档标题

text: 是类似文档副标题内容

tagline: 文档标语

基本效果如下：

![image-20230929110805260](C:\Users\laoyuan\AppData\Roaming\Typora\typora-user-images\image-20230929110805260.png)

有一点VitePresshttps://vitepress.dev/的样子了，在后面我们还会跟大家说下怎么修改样式



#### 1.2、按钮部分

按钮部分主要通过actions来配置的，如下：

```javascript
---
  layout: home
  hero:
    image: 
      src: /logo.png
      alt: 前端吧
    name: 前端吧
    text: 关注web前端开发为主的博客网站和网址导航
    tagline: 收集有一大批前端相关的技术网站，包括Vue、React等技术资料的生态网站，方便快速访问。
    actions:
    - theme: brand
      text: 开始使用
      link: /guide/start
    - theme: alt
      text: 前端吧官网
      link: http://qianduan8.com/
---
```

- theme 是按钮的主题，只有 brand 和 alt 两种，也就是分别对应目前网页中绿色和灰色按钮

- text 是按钮的文字

- link 是按钮的链接，点击后跳转，可以是网址URL，也可以是文档中的绝对路径，根路径是 docs，可以省略文档类型，默认是 md

  ![image-20230929112431862](C:\Users\laoyuan\AppData\Roaming\Typora\typora-user-images\image-20230929112431862.png)

比如上面的/guide/start，我们在 docs 下创建 guide 目录，再在 guide 目录下创建 start.md 文件，输入一些文字试试。

```markdown
 # 开始访问官网-测试内容
[前端吧官网](http://qianduan8.com/)
```

![image-20230929111909827](C:\Users\laoyuan\AppData\Roaming\Typora\typora-user-images\image-20230929111909827.png)





#### 1.3、features 部分

features部分：简单说就是网站文档说明或者附加说明部分，具体看最终效果就知道了。

```markdown
---
  layout: home
  hero:
    image: 
      src: /logo.png
      alt: 前端吧
    name: 前端吧
    text: 关注web前端开发为主的博客网站和网址导航
    tagline: 收集有一大批前端相关的技术网站，包括Vue、React等技术资料的生态网站，方便快速访问。
    actions:
    - theme: brand
      text: 开始使用
      link: /guide/start
    - theme: alt
      text: 前端吧官网
      link: http://qianduan8.com/
  features:
  - title: UnoCSS
    details: Unocss是一种基于PurgeCSS的CSS框架,它可以帮助你更简洁、更高效地编写CSS。 Unocss的语法非常简单,它采用了类似于Tailwind CSS的类名方式。
    link: https://unocss.dev/
    linkText: 了解更多
  - title: Vue3
    details: 渐进式JavaScript框架.
    link: https://cn.vuejs.org/
    linkText: 了解更多
  - title: vitePress
    details: Vite & Vue Powered Static Site Generator.
    link: https://vitepress.dev/
  - title: Pinia
    details: 符合直觉的Vue.js 状态管理库.
    link: https://pinia.vuejs.org/zh/
  - title: Vuex
    details: 是一个专为 Vue.js 应用程序开发的状态管理模式.
    link: https://vuex.vuejs.org/zh/
  - title: Vue Router
    details: Vue.js 的官方路由,为 Vue.js 提供富有表现力、可配置的、方便的路由.
    link: https://router.vuejs.org/zh/
---
```



- icon 是每个 feature 盒子的图标
- title 是每个 feature 盒子的标题
- details 是每个 feature 盒子的详细描述内容
- link 是每个 feature 盒子的单击要素组件时链接，简单说就是链接地址，链接可以是内部链接，也可以是外部链接。
- linkText 是每个 feature 盒子的链接要显示在要素组件内部的文本，简单说就是链接文本。最好与 link 选项一起使用。

效果如下：

![image-20230929112351667](C:\Users\laoyuan\AppData\Roaming\Typora\typora-user-images\image-20230929112351667.png)



### 2、头部导航栏配置

我们可以通过配置文件config.js中的themeConfig选项定义主题配置，通过它我们可以配置网站的logo、主导航、标题、侧边导航等等。

参考文档：https://vitepress.qzxdp.cn/reference/default-theme-config.html

在 vitePress 中，一个 .md 文件就可以作为一张页面，并且，在根目录 docs 中.md可自动生成路由。

所以头部导航的配置，只需在config.js中的themeConfig中的nav配置即可，在这我们还可以把logo也配置上

```javascript
// 头部导航
import topNav from "./topNav";

export default {
  title: "前端吧",
  description: "关注web前端开发为主的博客网站和前端网址大全",
  // 打包目录
  dest: "./dist",
  head: [
    // 添加图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  // 主题配置
  themeConfig: {
    // 导航上的logo
    logo: "/logo.png",
    // 隐藏logo右边的标题
    siteTitle: false,
    // 头部导航栏配置
    nav: topNav,
  },
};

```



然后我们新建一个topNav/index.js文件

![image-20230929155924851](C:\Users\laoyuan\AppData\Roaming\Typora\typora-user-images\image-20230929155924851.png)



index.js代码如下

```javascript
export default [
  {
    text: "前端网聚",
    items: [
      { text: "前端综合", link: "/site/page" },
      { text: "HTML/CSS", link: "/site/html-css" },
      { text: "框架组件", link: "/site/framework" },
    ],
  },
  {
    text: "技术笔记",
    items: [
      { text: "VitePress", link: "/note/vitePress" },
      { text: "Vue", link: "/note/vue" },
      { text: "react", link: "/note/react" },
    ],
  },
  {
    text: "关于我们",
    link: "/about/page",
  },
  { text: "更新日志", link: "" },
];

```

效果如下：

![image-20230929160304270](C:\Users\laoyuan\AppData\Roaming\Typora\typora-user-images\image-20230929160304270.png)



然后我们在创建site、note等相关文件夹和文件，即可

![image-20230929160942297](C:\Users\laoyuan\AppData\Roaming\Typora\typora-user-images\image-20230929160942297.png)

**注意点：**

我们在创建导航的时候，比如关于我们，假如我们创建的是about/index.md，这个时候导航就没有选中效果。

把index.md改为其他名字即可，比如page.md，此时才有选中效果的样式。





### 3、左侧导航栏配置

同样，我们新建一个sideBar文件夹，专门放左侧导航栏的js文件，新建一个vitePressBar.js





## 五、默认主题修改和配置

关于默认主题配置，我们可以通过配置文件config.js中的themeConfig选项定义主题配置，通过它我们可以配置网站的logo、主导航、标题、侧边导航等等。

参考文档：https://vitepress.qzxdp.cn/reference/default-theme-config.html

```javascript
// 主题配置
  themeConfig: {
    // 导航上的logo
    logo: "/logo-01.png",
    // 隐藏logo右边的标题
    siteTitle: false,
    darkModeSwitchLabel: "外观",
    // 更新时间
    // lastUpdatedText: "最后更新",
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 导航栏配置
    nav: navConfig(),
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/vuejs/vitepress",
      },
    ],
    // 左侧导航
    sidebar: {
      "/note/vue": vueSideNav(),
    },
    // 搜索
    algolia: {
      apiKey: "your_api_key",
      indexName: "index_name",
    },
    // 编辑链接
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "在 github 上编辑此页",
    },
    // 页脚配置
    footer: {
      message: "Released under the MIT License",
      copyright: "Copyright © 2023-present Lao Yuan",
    },
    // 右侧边栏配置，默认值是"In hac pagina"
    outlineTitle: "本页目录",
    vite: {
      plugins: [viteBackToTopPlugin({ topSize: 50 })],
    },
  },
```

