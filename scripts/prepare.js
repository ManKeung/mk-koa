const { prompt } = require('enquirer')
const chalk = require('chalk')
const { funExec } = require('./utils')

async function init() {
    const arr = ['pnpm', 'yarn', 'npm']
    let name = null

    for (let i = 0; i < arr.length; i++) {
        name = await funExec(`${arr[i]} --version`)

        if (name) {
            name = arr[i]
            break
        }
    }

    // 没有包管理工具
    if (!name) throw new Error('请安装包管理工具')

    const git = await funExec('git init')

    // 没有git
    if (!git) throw new Error('请你使用git办理管理工具')

    // 处理husky
    const husky = await funExec('npx husky install')

    // 命令失败
    if (!husky) throw new Error('npx husky install error')

    console.clear()
    console.log(chalk.cyan('项目初始化 ...'))

    const answer = await prompt([
        {
            type: 'confirm',
            name: 'q1',
            message: '是否需要lint',
            initial: true
        },
        {
            type: 'confirm',
            name: 'q2',
            message: '手否需要commitlint',
            initial: true
        }
    ]).catch(() => {
        throw new Error('出错了')
    })

    if (!answer) {
        throw new Error('出错了')
    }

    let npm = `${name} run precommit`
    if (answer.q1) npm += `&& ${name} run lint`

    if (npm) {
        const d = await funExec(`npx husky add .husky/pre-commit "${npm}"`)
        if (d) console.log(chalk.cyan(d))
    }

    if (answer.q2) {
        const d = await funExec('npx husky add .husky/commit-msg "npx --no-install commitlint --edit "$1""')
        if (d) console.log(chalk.cyan(d))
    }

    console.log(chalk.cyan('项目初始化完成'))
}

init()
