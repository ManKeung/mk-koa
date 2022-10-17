/*
 * @Description: 文件上传
 * @Author: Mankeung
 * @Date: 2022-10-15 17:15:12
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-17 11:36:32
 */

import Router from '@koa/router'
import { verfyUpload } from '@/middleware/upload.middleware'
import upload from '@/controller/uplload.controller'

const router = new Router()

router.post('/', verfyUpload, upload.getUploadInfo)

export default router.routes()
