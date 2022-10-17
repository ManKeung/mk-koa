/*
 * @Description: 跨域配置
 * @Author: Mankeung
 * @Date: 2022-10-15 14:27:06
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-15 16:55:48
 */

import cors from 'koa2-cors'

export default cors({
    origin: (ctx: any) => {
        // 允许所有域名请求
        return ctx?.headers.origin
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['OPTIONS', 'GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'token', 'fromType']
})
