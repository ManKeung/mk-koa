/*
 * @Description: 响应错误日志拦截
 * @Author: Mankeung
 * @Date: 2022-10-17 13:47:46
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-17 13:47:59
 */

import log from '@/utils/log'
import { Context, Next } from 'koa'
import code from '@/config/code'

export default async (ctx: Context, next: Next) => {
    // 响应开始时间
    const start = new Date().getTime()
    // 响应间隔时间
    let intervals: number

    try {
        await next()
        intervals = new Date().getTime() - start
        // 记录响应日志
        log.logResponse(ctx, intervals)
    } catch (error) {
        ctx.body = ctx
        intervals = new Date().getTime() - start
        // 记录响应日志
        log.logResponse(ctx, intervals)
        // 记录异常日志
        log.logError(ctx, error, intervals)

        ctx.body = {
            code: code.ERR_SERVER,
            msg: (error as any)?.message ?? '服务报错了~',
            bean: ''
        }
    }
}
