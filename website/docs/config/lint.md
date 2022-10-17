# 代码规范

:::tip 注意
这里不做详细配置说明，你可以查看之前文章[**前端代码工作流**](https://mankeung.github.io/docs/mk-data/tools_article/23.html)、[**从 0 到 1 搭建一个企业级前端开发规范**](https://mankeung.github.io/docs/mk-data/tools_article/23.html)了解。
:::

## EditorConfig

### .editorconfig

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```ini
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 4
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

```mdx-code-block
</details>
```

### .vscode/settings.json

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```json
{
    // highlight-next-line
	"editor.tabSize": 4,
	"cSpell.words": [
		"cmfcmf"
	]
}
```

```mdx-code-block
</details>
```

## eslint

### 安装

```bash
pnpm add eslint eslint-plugin-import eslint-plugin-promise -D
```

### .eslintrc.js

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```js
module.exports = {
    root: true, // 作用的目录是根目录
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'], // 继承标准规则
    // extends: 'tslint:recommended', // 继承标准规则
    plugins: [
        '@typescript-eslint', // 使用eslint-plugin-html
        'import',
        'promise'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module' // 按照模块的方式解析
    },
    env: {
        node: true, //
        es6: true
    },
    rules: {
        // 重新覆盖 extends: 'standard'的规则
        // 自定义的规则
        // 'linebreak-style': [0, 'error', 'windows'],
        indent: ['error', 4], // error类型，缩进4个空格
        // 'space-before-function-paren': 0, // 在函数左括号的前面是否有空格
        'eol-last': 0, // 不检测新文件末尾是否有空行
        quotes: [1, 'single'], // 字符串没有使用单引号
        // 'no-console': ['error', {
        //     allow: ['log', 'warn']
        // }], // 允许使用console.log()
        // 'arrow-parens': 0,
        'no-new': 0, // 允许使用 new 关键字
        '@typescript-eslint/no-explicit-any': 0,
        'no-eval': 0,
    },
    globals: {
        // 允许全局变量,将$设置为true，表示允许使用全局变量$
        // 'jQuery': true,
        // $: true
    }
}
```

```mdx-code-block
</details>
```

### .eslintignore


```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```ini
# 根据自己的实际需求进行添加

# npm

node_modules

# folder

dist
public
scripts
www

# file

# vscode

.vscode
```

```mdx-code-block
</details>
```

### npm命令配置

```json
"lint:eslint": "eslint ./src/\*_/_.ts --fix"
```

## prettier

### 安装

```bash
pnpm add prettier --dev
```

### .prettierrc.js

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```js
module.exports = {
    printWidth: 180, //一行的字符数，如果超过会进行换行，默认为80
    tabWidth: 4, //一个tab代表几个空格数，默认为80
    useTabs: true, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
    singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
    semi: false, //行位是否使用分号，默认为true
    trailingComma: 'none', //是否使用尾逗号，有三个可选值"<none|es5|all>"
    bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
    endOfLine: 'auto'
}
```

```mdx-code-block
</details>
```

### npm命令配置

```json
"lint:perttier": "prettier --write --loglevel warn src/\*_/_.ts"
```

## husky

### 安装

```bash
pnpm add husky @commitlint/cli @commitlint/config-conventional
```

### commitlint.config.js

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新特性
                'improvement', // 加强现有特性
                'fix', // 修补bug
                'refactor', // 重构
                'docs', // 文档
                'test', // 单元测试
                'config', // 配置文件
                'style', // 格式需改
                'perf', // 性能提升
                'ci', // ci 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
                'revert', // 版本回退
                'chore', // 其他修改
                'scope' // commit 影响的范围（选填）, 比如: route, component, utils, build
            ]
        ],
        'type-empty': [2, 'never'], // type不能为空
        'type-case': [0, 'always', 'lower-case'], // type不限制大小写
        'subject-empty': [2, 'never'], // subject（简短得描述）不能为空
        'subject-max-length': [1, 'always', 50], // subject最大长度，超出只会警告，不阻止提交
        'body-leading-blank': [1, 'always'],
        'footer-leading-blank': [1, 'always'],
        'header-max-length': [2, 'always', 72]
    }
}
```

```mdx-code-block
</details>
```

### scripts/prepare.js

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```js
const { funExec } = require('./utils')
const chalk = require('chalk')

async function init() {
    const child = await funExec('git diff --cached --name-only')

    if (!child) {
        console.log(chalk.red('没有待提交内容'))
        process.exit(1)
    }

    const disSubmitFiles = await inExcludeFile(child.trim().split('\n'))

    if (disSubmitFiles.length) {
        disSubmitFiles.forEach(file => {
            console.log(`${chalk.red('禁止提交文件：')}${chalk.green(file)}`)
            console.log(`${chalk.red('你可以使用：')}${chalk.green(`git reset -- ${file}`)} ${chalk.red('撤销暂存区')}`)
        })
        process.exit(1)
    } else {
        console.log(chalk.green('用户权限校验完成'))
    }
}

function inExcludeFile(files) {
    return new Promise(async resolve => {
        // 获取用户
        let userEmail = await funExec('git config --get user.email')
        userEmail = userEmail.replaceAll('\n', '')
        console.log(chalk.green(`校验${userEmail}的权限...`))

        setTimeout(() => {
            // 请求服务器拉取当前用户可操作目录文件（src下根文件哦！）
            const allowPaths = userEmail === 'mankueng1011@gmail.com' ? [] : ['pages'] // 这里写死

            let disSubmitFiles = Array.from(new Set(files.map(item => {
                const arr = item.split('/')
                const isSrc = arr[0] === 'src'

                if (isSrc) return item

                return null
            }))).filter(file => file)

            if (!allowPaths.length) return resolve([])

            disSubmitFiles.forEach((file, i) => {
                allowPaths.some(allowPath => {
                    const reg = new RegExp(`^src/${allowPath}`, 'i')

                    if (reg.test(file)) {
                        disSubmitFiles[i] = null
                        return true
                    }

                    return false
                })

                disSubmitFiles = disSubmitFiles.filter(file => !!file)
                resolve(disSubmitFiles)
            })
        }, 300)
    })
}

init()
```

```mdx-code-block
</details>
```

### npm命令配置

```json
"precommit": "node ./scripts/precommit.js"
```
