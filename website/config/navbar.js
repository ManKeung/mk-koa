/* eslint-disable @typescript-eslint/no-var-requires */
const pkg = require('../../package.json')
const CONST = require('./constant')

const navbar = [
    {
        type: 'search',
        position: 'right'
    },
    {
        type: 'doc',
        docId: 'intro',
        position: 'right',
        label: '👉指栏'
    },
    {
        type: 'doc',
        docId: 'config',
        position: 'right',
        label: '📝配置参考'
    },
    {
        type: 'doc',
        docId: 'function',
        position: 'right',
        label: '🪧基础功能'
    },
    {
        type: 'dropdown',
        position: 'right',
        label: `✨v${pkg.version}`,
        items: [
            {
                type: 'doc',
                label: '🔖更新日志',
                docId: 'changelog'
            }
        ]
    },
    {
        type: 'doc',
        docId: 'reward',
        position: 'right',
        label: '🙈打赏'
    },
    {
        href: 'https://gitee.com/mankeung/mk-react',
        label: 'Gitee',
        position: 'right'
    }
]










navbar.push({
    href: CONST.GIT,
    label: CONST.GIT_SITE.substring(0,1).toUpperCase() + CONST.GIT_SITE.substring(1),
    position: 'right'
})

module.exports = navbar
