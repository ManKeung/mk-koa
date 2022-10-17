# 快速开始

```mdx-code-block
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
```

本项目适合了解一定基础的前端工程师，如您对前端知识还不了解，你可以阅读我的[在线文档](https://mankeung.github.io/docs/mk-data)，里面有关于基础前端的介绍。
## 技能准备

:::danger 注意
项目搭建是node版本为`v18.8.0`所以你需要注意，肯能由于版本导致报错哦！
:::

![Node.js](https://img.shields.io/badge/-Node-333333?style=flat&logo=node.js) ![Koa.js](https://img.shields.io/badge/-Koa-333333?style=flat&logo=koa) ![TypeScript](https://img.shields.io/badge/-TypeScript-333333?style=flat&logo=typescript) ![npm](https://img.shields.io/badge/-Npm-333333?style=flat&logo=npm) ![rollup](https://img.shields.io/badge/-rollup.js-333333?style=flat&logo=rollup.js) ![pm2](https://img.shields.io/badge/-pm2-333333?style=flat&logo=pm2) ![ts-node](https://img.shields.io/badge/-ts_node-333333?style=flat&logo=ts-node) ![git](https://img.shields.io/badge/-Git-333333?style=flat&logo=git)


## 安装

[📦 CodeSandbox](https://codesandbox.io/s/github/mankeung/mk-koa?file=/README.md) | [⚡ StackBlitz](https://stackblitz.com/github/mankeung/mk-koa?file=README.md)

```mdx-code-block
<Tabs>
<TabItem value="github">
```

```bash
git clone https://github.com/mankeung/mk-koa.git
```

```mdx-code-block
</TabItem>
<TabItem value="gitee">
```

```bash
git clone https://gitee.com/mankeung/mk-koa.git
```

```mdx-code-block
</TabItem>
</Tabs>
```

## 目录结构

如下图所示，打开[github1s查看](https://github1s.com/mankeung/mk-react)

![目录结构](/file.png)

> ~~这里就不再做过多目录结构介绍了，如需要后面就补充说明。~~

## 常用命令介绍

:::tip 提示
我使用的`pnpm`包管理工具，你还可以使用`yarn`或者`npm`
:::

+ `pnpm install`

初始化项目安装依赖

+ `pnpm dev`

启动项目

+ `pnpm build`

生产环境打包

+ `pnpm lint`

语法校验

> 这里只是做简单介绍，具体详细介绍请看[配置参考scripts](/docs/config/scripts.md)

## 启动

```bash
pnpm dev
```
