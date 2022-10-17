/*
 * @Description: 中间件用户
 * @Author: Mankeung
 * @Date: 2022-10-15 13:02:06
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-15 16:59:20
 */

import type { Context, Next } from 'koa'
import code from '@/config/code'

// TODO 校验权限
export async function verfyAuth(ctx: Context, next: Next) {
    // 获取请求头中的token
    const authorization = ctx.headers.authorization

    if (!authorization) {
        const error: Result = {
            code: code.ERR_AUTH,
            message: '没有token信息~',
            bean: ''
        }

        return (ctx.body = error)
    }

    ctx.currentToken = authorization

    await next().catch((err) => {
        return ctx.app.emit('error', err, ctx)
    })
}

// TODO 验证用户提交参数
export async function verfyUser(ctx: Context, next: Next) {
    // 获取用户提交参数
    const { username, age } = ctx.request.body

    if (username === void 1 || age === void 1)
        return (ctx.body = {
            code: code.ERR_DATA,
            message: '参数错误~',
            bean: ''
        })

    ctx.currentUser = {
        username,
        age
    }

    await next().catch((err) => {
        return ctx.app.emit('error', err, ctx)
    })
}
