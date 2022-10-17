const zipFolder = require('folder-zip-sync')
const pkg = require('../package.json')

try {
    zipFolder('./dist', `./dist/${pkg.warName}.war`)
} catch (error) {
    throw new Error('压缩文件出错了')
}
