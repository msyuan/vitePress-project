---
url: /en\note\vitePress/page1.md
---
# 1. The Right Way to Build a Lightweight Personal Blog with VitePress from Scratch (1)

## 1. Preface

Recently I was thinking about giving my little Frontend8 blog an update, but I found that the WordPress version had been stuck at five years ago. A lot has changed since then — it doesn't support direct online updates, and the PHP environment running on the server completely doesn't support the latest WordPress version. If I want to use the latest version, the server environment configuration must be updated, so I can only tinker with it slowly.

Then I wondered whether I could explore the possibility of rebuilding it with VitePress + CMS, so the following are the steps I took to build a pure-documentation blog with VitePress, recorded here.

## 2. VitePress Documentation

First, we should know that VitePress is the little brother of [VuePress](https://vuepress.vuejs.org/). It is built on [Vite](https://github.com/vitejs/vite), while [VuePress](https://vuepress.vuejs.org/) is built on Webpack.

VitePress is a static site generator powered by Vite and Vue 3. Compared with VuePress, it is more minimal, lightweight, and efficient. Its features are as follows:

* Faster dev server startup
* Faster hot updates
* Faster builds (uses Rollup internally)

For more differences, see the documentation: https://vitejs.cn/vitepress/#motivation

**Official English Documentation**: https://vitepress.dev/

**Chinese Documentation**:

https://vitejs.cn/vitepress/

https://vitepress.qzxdp.cn/reference/site-config.html

## 3. Initializing the Project

### 1. Create and Initialize the Project Directory

Create a qianduan8 directory, enter it, and run the initialization command

```js
pnpm init
```

### 2. Install VitePress in the Local Project

```javascript
pnpm add -D vitepress
```

![image-20230928151359486](./images/1.png)

### 3. Configure the Project Directory Structure

We create a **docs/.vitepress** directory along with a config file, a homepage, and public.

The directory structure we create at the start is as follows:

```javascript
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
│  └─ public
└─ package.json
```

The explanation is as follows:

**docs/.vitepress:**  Used to store global configuration, custom components, custom themes, etc.

* config.js:  The project configuration file.

**public:**  The public file directory, where static assets are stored. (Later, in the homepage and theme configuration, you can reference them directly with "/logo.png")

**index.md**: This is the site homepage.

Among these, config.js is a necessity for configuring a VitePress site. It exports a JS object, and as the project grows larger, the configuration can be extracted out.

Initial config.js configuration:

```javascript
export default {
  title: 'Frontend8',
  description: 'A blog site and frontend directory focused on web frontend development',
  // Output directory
  outDir: './dist',
   head: [
		// Add icon
		['link', { rel: 'icon', href: '/favicon.ico' }]
	],
}
```

As shown above, we only simply set the **site title, site description, the dist output directory, and the site icon**. More configurations will later be done in the config.js file.

### 4. Configure Run Scripts

Configure it in package.json as follows:

```javascript
  "scripts": {
    "docs-dev": "vitepress dev docs",
    "docs-build": "vitepress build docs",
    "docs-serve": "vitepress serve docs"
  }
```

### 5. Run Locally

Run the following command

```javascript
pnpm docs-dev
```

The result is as follows:

![image.png](./images/2.png)

It ran successfully, but the site is currently empty — it only has a logo title. So next we need to keep improving it, for example configuring navigation, the homepage, custom templates, and so on
