/*
 * @Description: 路由
 * @Author: Mankeung
 * @Date: 2022-10-14 15:16:26
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-15 16:59:47
 */

import Router from '@koa/router'
import { BASE_API } from '@/config/constant'
import common from './common'

const router = new Router()

router.use(`${BASE_API}/common`, common)

export default router
