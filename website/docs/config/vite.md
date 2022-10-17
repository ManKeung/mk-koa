# vite

:::tip 提示
更多关于[**vite配置请看官网**](https://cn.vitejs.dev/)，这里只是简单介绍本模板的配置信息。
:::

## 常量

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```ts
// 需要px转rem
export const PX2REM = false

// 是否打开浏览器
export const OPEN = false

// 服务端口
export const PORT = 3000

// baseURL
export const BASE_URL = './'

// 包依赖分析
export const ANALYSIS = true

// 输出文件
export const OUT_DIR = 'dist'

// 静态打包文件夹
export const ASSETS_DIR = 'assets'

// 打包chunk大小警告值
export const CHUNKS_SIZE = 12 * 1000
```

```mdx-code-block
</details>
```

## 基础配置

### base

`base`配置读取的常量`BASE_URL`默认值为`./`，你可以根据自己项目修改常量。

### server

1. `open`与`port`

请看常量配置，默认不打开浏览器，默认端口`3000`。

2. proxy

代理，读取环境变量`VITE_APP_PROXY`是否开启，`ON`开启，默认只有`.env.dev`开发模式开启。

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```ts
export default {
    '/api': {
        target: 'http://www.mkimq.com',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
    },
    '/soket.io': {
        target: 'ws://www.mkimq.cn'
    }
}
```

```mdx-code-block
</details>
```

## resolve

模板配置`alias`，`@` => `src`，你可以更具实际情况添加更多，或者选择删除。

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```ts
import path from 'path'

const paths = [
    {
        name: '@',
        path: 'src'
    }
]

const alias: any = {}

paths.forEach(item => {
    alias[item.name] = getPath(item.path)
})

export default {
    alias
}

function getPath(p: string) {
    return path.resolve(process.cwd(), p)
}
```

```mdx-code-block
</details>
```

## css

模板默认把`@/style/themes.scss`和`@/style/mixins.scss`注入到每个模块，这样你就可以直接使用，不需要手动引入了，例子：`.color: { color: $color;}`；你可以开启`px2rem`，默认没开启，如果你项目需要移动端适配，你可以在`常量`里开启，你也可以删除项目代码不使用`px2rem`。

```mdx-code-block
<details>
    <summary>查看css.ts配置</summary>
```

```ts
import { CSSOptions } from 'vite'
import postCssPxToRem from 'postcss-pxtorem'
import config from './px2rem'
import { PX2REM } from '../constant'

const css: CSSOptions = {
    preprocessorOptions: {
        scss: {
            javascriptEnabled: true,
            additionalData: `
                    @import "@/style/themes.scss";
                    @import "@/style/mixins.scss";
                `
        }
    }
}

if (PX2REM) css.postcss = {
    plugins: [
        postCssPxToRem(config)
    ]
}
```

```mdx-code-block
</details>
```

```mdx-code-block
<details>
    <summary>查看px2rem.ts配置</summary>
```

```ts
export default {
    rootValue: 37.5, // 1rem的大小
    propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
    selectorBlackList: ['.px']
}
```

```mdx-code-block
</details>
```

### 小技巧

:::danger 注意
当运行`pnpm lint:prettier`命令时，会自动把`PX`单位转为`px`，你可以在`.prettierignore`添加`*.scss *.css *.less`
:::

如果你开启了`px2rem`，但是有的不需要转换，你可以在写`px`单位时大写，如：`PX`这时就不会转换成`rem`，你也可以在上面代码`px2rem.ts`配置里`selectorBlackList`里添加选择器，默认配置不转换的选择器为`.px`。

## build

打包相关基础配置，静态变量可以设置输出的文件夹，静态文件打包出来文件夹，chunks超过发出警告，具体配置信息你可以查看上面的**静态变量**，更多配置你可以查询[vite官网](https://cn.vitejs.dev/config/build-options.html)。

## 插件

:::tip 提示
模板具体相关配置，你可以查看`build/vite/plugins`下文件，更多配置可以查看相关文档。你可以更具自己实际情况**增减**插件
:::

+ [vite-plugin-restart](https://www.npmjs.com/package/vite-plugin-restart)，作用：当有配置信息修改自动启动服务，默认监听`['.env.dev', 'build/**/*.ts']`。

+ [@vitejs/plugin-legacy](https://www.npmjs.com/package/@vitejs/plugin-legacy)，作用：支持就浏览器。

+ [vite-plugin-html](https://www.npmjs.com/package/vite-plugin-html)，作用：html插件默认会注入一些变量到`index.html`中，注入了`title`、`debugTool`和`cdn`，具体配置与逻辑请查看相关文件。

+ [vite-plugin-banner](https://www.npmjs.com/package/vite-plugin-banner)，作用：添加代码注释。

+ [vite-plugin-svg-icons](https://www.npmjs.com/package/vite-plugin-svg-icons)，作用：svg icon。

+ [vite-plugin-resolve-externals](https://www.npmjs.com/package/vite-plugin-resolve-externals)，作用：cdn导入的包文件。

+ [vite-plugin-mock](https://www.npmjs.com/package/vite-plugin-mock)，作用：mock数据。

+ [rollup-plugin-visualizer](https://www.npmjs.com/package/rollup-plugin-visualizer)，作用：依赖分析。

+ [vite-plugin-compression](https://www.npmjs.com/package/vite-plugin-compression)，作用：压缩。

+ [vite-plugin-progress](https://www.npmjs.com/package/vite-plugin-progress)，作用：构建显示进度条。

+ [vite-plugin-react-inspector](https://www.npmjs.com/package/vite-plugin-react-inspector)，作用：点击页面元素，自动打开本地IDE并跳转到对应的React组件。
