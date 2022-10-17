/*
 * @Description: 压缩
 * @Author: Mankeung
 * @Date: 2022-10-15 14:31:29
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-15 16:56:46
 */

import compress from 'koa-compress'
import zlib from 'zlib'

export default compress({
    // 只有在请求的content-type中有gzip类型，我们才会考虑压缩，因为zlib是压缩成gzip类型的
    filter(content) {
        return /text/i.test(content)
    },
    // 阀值，当数据超过1kb的时候，可以压缩
    threshold: 1024,
    gzip: {
        flush: zlib.constants.Z_SYNC_FLUSH
    },
    deflate: {
        flush: zlib.constants.Z_SYNC_FLUSH
    },
    br: false
})
