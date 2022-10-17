/*
 * @Description: 公共拦截
 * @Author: Mankeung
 * @Date: 2022-10-15 13:59:15
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-15 16:56:27
 */

import { Context, Next } from 'koa'
import code from '@/config/code'
import { BASE_API } from '@/config/constant'

// TODO 公共拦截
export default (ctx: Context, next: Next) => {
    if (ctx.status === 404 && ctx.request.url.indexOf(BASE_API) !== -1)
        return (ctx.body = {
            code: code.ERR_404,
            message: '没发现~',
            bean: ''
        })

    next()
}
