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
            const allowPaths = userEmail === 'mankueng1011@gmail.com' ? [] : ['config'] // 这里写死

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
