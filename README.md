# hexo-theme-webstack

[中文文档](https://github.com/HCLonely/hexo-theme-webstack/blob/master/README_CN.md)

> A Hexo theme based on [WebStackPage](https://github.com/WebStackPage/WebStackPage.github.io).

![screenshot](https://github.com/HCLonely/hexo-theme-webstack/raw/master/screenshot/screenshot.png)

## Installation

### hexo >= 4.0

```shell
git clone https://github.com/HCLonely/hexo-theme-webstack themes/webstack

# Install dependencies
npm install hexo-renderer-pug pug --save
```

### hexo >= 5.0

```shell
npm install hexo-theme-webstack --save
```

or

```shell
cnpm install hexo-theme-webstack --save
```

## Configuration

### hexo >= 4.0

Copy the `_config.example.yml` file in the `themes/webstack/` directory to the `rootDir/source/_data/` directory and rename it to `webstack.yml`.

Configure it by editing `webstack.yml`.

### hexo >= 5.0

- If this theme is newly installed, a `_config.webstack.yml` file will be generated in the root directory after the installation is complete, and you can directly edit the `_config.webstack.yml` file for configuration.
- If it is a theme upgrade, you can use the configuration method of hexo >= 4.0, or you can move the original configuration file to the root directory and rename it to `_config.webstack.yml`.

> Note: Please keep only one of `rootDir/_config.webstack.yml` and `rootDir/source/_data/webstack.yml`!

### favicon

> Website icon.

Examples:
```yml
favicon: /favicon.ico
```

### banner

> [Optional] Banner when sharing website to twitter and facebook.

Examples:
```yml
banner: /images/webstack_banner_cn.png
```

### logo

> Website logo.

- `expanded`: The logo in the upper left corner of the expanded sidebar.
- `collapsed`: The logo in the upper left corner of the retractable sidebar.
- `dark`: The logo in the upper left corner when the top bar is dark, only the `about` page takes effect.

Examples:
```yml
logo:
  expanded: /images/logo@2x.png
  collapsed: /images/logo-collapsed@2x.png
  dark: /images/logo_dark@2x.png
```

### flag

> Language identifier, multi-language please cooperate with [Subpage](#Subpage-configuration) use.

- icon: Language icons, by default only `flag-cn` and `flag-us`, other icons please look for and store in `theme directory/source/images/flags/`.
- name: Language name
- default: Whether the language is the default language
- index: The page link

Examples:
```yml
flag:
  - name: Chinese
    default: true
    icon: flag-cn
    index: /index.html
```

### search

> Whether to show search box

Examples:
```yml
search: true
```

### userDefinedSearchData

> Custom search engine

- custom: Whether to enable custom configuration
- thisSearch: Current search engine search link
- thisSearchIcon: Current search engine icon link, format: `url(图片链接)`
- hotStatus: Whether to enable hot word search function
- data: Multiple search engine configurations
  - name: Search engine name
    img: Search engine search link
    url: Search engine icon link, format: `url(图片链接)`

示例：
```yml
userDefinedSearchData:
  custom: true
  thisSearch: https://www.baidu.com/s?wd=
  thisSearchIcon: url(https://www.baidu.com/favicon.ico)
  hotStatus: true
  data:
    - name: 百度
      img: url(https://www.baidu.com/favicon.ico)
      url: https://www.baidu.com/s?wd=
    - name: 谷歌
      img: url(https://www.google.com/favicon.ico)
      url: https://www.google.com/search?q=
```

### githubCorner

> [Github corner](http://tholman.com/github-corners/) in the upper right corner.

Examples:
```yml
githubCorner: '<a href="https://github.com/HCLonely/hexo-theme-webstack" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>'
```

### since

> Year of site establishment, shown at the bottom of the page.

Examples:
```yml
since: 2020
```

### menu

> **[Main] Sidebar menu settings**

- name: Group name
- icon: Group icon
- config: [Main] Grouped content (see [Config](#config) for detailed settings), if there is a submenu, this item is not needed!
- submenu: If there is a submenu, `config` is not required, this option contains `name`, `icon`, `config` options.

Examples:
```yml
menu:
  - name: 常用工具
    icon: far fa-star
    config: hotTools
  - name: 其他工具
    icon: fas fa-tools
    submenu:
      - name: 开发工具
        icon: fas fa-tools
        config: devTools
      - name: 我的博客
        icon: fas fa-blog
        config: myBlog
```

### expandAll

> Whether to expand the sidebar.

示例：

```yml
expandAll: true
```

### about

> About this site in the sidebar.

- url: The link of about page.
- name: Text displayed in the sidebar.
- icon: Icon.

Examples:
```yml
about:
  url: /about/
  icon: far fa-heart
  name: 关于本站
```

### aboutPage

> About page settings.

1. Generate about page.

```shell
hexo new page about
```

2. Edit `source/about/index.md` and add `type:'about'`

```yml
---
title: about
date: 2020-06-04 18:11:54
type: 'about'
---
```

3. Editing `aboutPage` in theme configuration files.

- website: The content of about this site.
  - head: Headline.
  - html: Content, support `html` syntax.
- webmaster: The content of about webmaster.
  - head: Headline.
  - name: Webmaster's name
  - url: Link.
  - img: Avatar.
  - description: Description.
  - html: Content, support `html` syntax.

Examples:
```yml
aboutPage:
  website:
    head: 关于本站
    html: '<blockquote><p>本站是hexo主题<a href="https://github.com/HCLonely/hexo-theme-webstack">hexo-theme-webstack</a>的demo站。</p></blockquote>'
  webmaster:
    head: 关于站长
    name: HCLonely
    url: https://blog.hclonely.com/
    img: /images/logos/myblog.png
    description: 懒人一个
    html: '<br /><blockquote><p>本站是<a href="https://github.com/HCLonely">HCLonely</a>基于<a href="https://github.com/WebStackPage/WebStackPage.github.io">WebStackPage</a>项目做的一款<a href="https://hexo.io/">Hexo</a>主题。</p></blockquote>'
```

### busuanzi

> Website statistics by busuanzi.

- enable: Whether to enable this feature.
- position: The number of visits is displayed, `footer` is displayed in the footer, and `sidebar` is displayed in the sidebar.
- pv: The number of visits displayed by the traffic, `$pv` will be replaced by the number of visits.
- uv: The number of visitors displayed, `$uv` will be replaced by the number of visitors.

Examples:
```yml
busuanzi:
  enable: true
  position: sidebar
  pv: 本站总访问量$pv
  uv: 本站总访客数$uv
```

### custom

> Customize `html` content.

- head: Content inserted into the `<head></head>` tag.
- body: Content inserted before the `</body>` tag.

Examples:
```yml
custom:
  head: |- # The following content is inserted into the <head></head> tag, you can set up multiple lines, pay attention to at least four spaces at the beginning of each line.
    <link rel="stylesheet" type="text/css" href="custom.css">
    <script src="custom.js"></script>
  body: |- # Insert the following content before the </body> tag, you can set multiple lines, pay attention to at least four spaces at the beginning of each line.
    <div>custom text</div>
    <script src="custom.js"></script>
```

## config

> [Main] Website content settings

### Parameter

- name: Website name.
- url: Website link.
- img: Website icon.
- description: Website description.

Examples:
```yml
- name: HCLonely Blog
  url: https://blog.hclonely.com/
  img: /images/logos/myBlog.png
  description: 一个懒人的博客。
```

### Associate setting name and add website

The content of `config` set in `menu` and `submenu` is the name of this option.

Examples `menu`：
```yml
menu:
  - name: Common tools
    icon: far fa-star
    config: hotTools
```
There are two ways to add websites in the `Common Tools` group:

- In the theme's `_config.yml` add:
```yml
hotTools:
  - name: HCLonely Blog
    url: https://blog.hclonely.com/
    img: /images/logos/myBlog.png
    description: 一个懒人的博客。
  - name: Github
    url: https://github.com/
    img: /images/logos/github.png
    description: 面向开源及私有软件项目的托管平台。
```
- Create a new `hotTools.yml` file in the `source/_data/` (not created by yourself), the content of the file is as follows:
```yml
- name: HCLonely Blog
  url: https://blog.hclonely.com/
  img: /images/logos/myBlog.png
  description: 一个懒人的博客。
- name: Github
  url: https://github.com/
  img: /images/logos/github.png
  description: 面向开源及私有软件项目的托管平台。
```

Either of the above two methods can be selected. The second method is recommended.

## Subpage configuration

### Create subpage

Use `hexo new page xxx` to create a child page, including the following descriptions, using `hexo new page child` as an example.

### Modify the subpage configuration file

After using the above command to generate the subpage, open the `root directory/source/child/index.md` file (subpage configuration file), and add a line `type:'child'` between the two `---` This configuration file takes effect. The sub-page uses the configuration of the homepage by default, and the sub-page preferentially uses the configuration between the two `---` sub-page configuration files. Each configuration item has the same configuration function as the homepage.

See the example[https://github.com/HCLonely/hexo-theme-webstack/raw/refs/heads/gh-pages/source/child/index.md](https://github.com/HCLonely/hexo-theme-webstack/raw/refs/heads/gh-pages/source/child/index.md)

> Since the subpage was basically completed a long time ago, it was later put on hold when it was busy. There may be some configuration or bugs that have been forgotten. If you have any questions, please feedback in time!
