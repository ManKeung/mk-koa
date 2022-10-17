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
