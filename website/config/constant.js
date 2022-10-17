// 作者
const NAME = 'mankeung'
// title
const TITLE = 'mk-koa'
// 描述信息
const TAG_LINE = 'Koa + ts + ...基础模板'
const GIT_SITE = 'github'
// 仓库名
const GIT_NAME = 'mk-koa'
// 仓库地址
const GIT_URL = `https://${GIT_SITE}.com/${NAME}`
// 分支
const GIT_MASTER = 'master'
// 语言
const LANGS = 'zh-CN'
// 文档url地址
const URL = `https://${NAME}.${GIT_SITE}.io/`
// baseUrl
const BASE_URL = process.env.NODE_ENV === 'development' ? '/' : `/docs/${GIT_NAME}/`


















module.exports = {
    GIT_NAME,
    EDIT_URL: `${GIT_URL}/${GIT_NAME}/edit/${GIT_MASTER}/`,
    LANGS: [LANGS],
    NAME,
    URL,
    BASE_URL,
    TITLE,
    TAG_LINE,
    GIT: `${GIT_URL}/${GIT_NAME}`,
    GIT_SITE
}
