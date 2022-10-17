/*
 * @Description: 文件上传
 * @Author: Mankeung
 * @Date: 2022-10-15 17:16:15
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-17 10:03:17
 */

import type { Context, Next } from 'koa'
import fs from 'node:fs'
import fileType from 'file-type'
import code from '@/config/code'
import * as Fil from '@/utils/files'
import * as constant from '@/config/constant'

export async function verfyUpload(ctx: Context, next: Next) {
    // 获取文件
    const files = (ctx.request.files as any).file

    if (!files)
        return (ctx.body = {
            code: code.ERR_DATA,
            message: '没有文件~',
            bean: ''
        })

    const fileArr = []

    Array.isArray(files) ? fileArr.push(...files) : fileArr.push(files)

    // TODO 校验文件一致性
    let extFlg = false
    // TODO 校验文件大小
    let sizeFlg = false

    // TODO 校验文件个数
    if (fileArr.length > constant.UPLOAD_MAX_NUM)
        return (ctx.body = {
            code: code.ERR_DATA,
            message: '文件上传数量超了~',
            bean: ''
        })

    for (let i = 0; i < fileArr.length; i++) {
        const ext = Fil.getExt(fileArr[i].originalFilename)
        const reader = fs.createReadStream(files.filepath)
        const type = await fileType.fromStream(reader)
        reader.close()
        const size = fileArr[i].size

        if (size > constant.UPLOAD_MAX_SIZE) {
            sizeFlg = true
            break
        }

        if (ext === 'jpg' && type?.ext.replace('e', '') === ext) return

        // ! 注意有的文件类型返回的undefined 例如 .js .txt...等类型
        if (type && ext === type?.ext) {
            extFlg = true
            break
        }
    }

    if (sizeFlg)
        return (ctx.body = {
            code: code.ERR_DATA,
            message: '文件过大~',
            bean: ''
        })

    if (extFlg)
        return (ctx.body = {
            code: code.ERR_DATA,
            message: '文件类型不一致~',
            bean: ''
        })

    ctx.fileArr = fileArr

    await next().catch((err) => {
        return ctx.app.emit('error', err, ctx)
    })
}
