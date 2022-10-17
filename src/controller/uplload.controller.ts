/*
 * @Description: 文件上传
 * @Author: Mankeung
 * @Date: 2022-10-17 09:21:21
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-17 10:34:48
 */

import { Context } from 'koa'
import uploadService from '@/service/upload.service'

class UploadController {
    async getUploadInfo(ctx: Context) {
        const files = ctx.fileArr
        ctx.body = await uploadService.getUploadInfo(files)
    }
}

export default new UploadController()
