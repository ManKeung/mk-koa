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
        label: 'đææ '
    },
    {
        type: 'doc',
        docId: 'config',
        position: 'right',
        label: 'đéçœźćè'
    },
    {
        type: 'doc',
        docId: 'function',
        position: 'right',
        label: 'đȘ§ćșçĄćèœ'
    },
    {
        type: 'dropdown',
        position: 'right',
        label: `âšv${pkg.version}`,
        items: [
            {
                type: 'doc',
                label: 'đæŽæ°æ„ćż',
                docId: 'changelog'
            }
        ]
    },
    {
        type: 'doc',
        docId: 'reward',
        position: 'right',
        label: 'đæè”'
    },
    {
        href: 'https://gitee.com/mankeung/mk-koa',
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
