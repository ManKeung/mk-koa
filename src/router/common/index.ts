/*
 * @Description: 公共接口
 * @Author: Mankeung
 * @Date: 2022-10-14 15:16:54
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-16 14:24:49
 */

import Router from '@koa/router'
import user from './user'
import upload from './upload'

const router = new Router()

router.use('/user', user).use('/upload', upload)

export default router.routes()
