/*
 * @Description: 日志程序
 * @Author: Mankeung
 * @Date: 2022-10-17 13:41:59
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-17 13:47:05
 */

import { Context } from 'koa'
import Log4js from 'log4js'
import logConfig from '@/config/log'
import moment from './moment'

Log4js.configure(logConfig)

// TODO 调用预先定义的日志名称
const resLogger = Log4js.getLogger('resLogger')
const errorLogger = Log4js.getLogger('errorLogger')
const handleLogger = Log4js.getLogger('handleLogger')
const consoleLogger = Log4js.getLogger()

// TODO 格式化日志文本 加上日志头尾和换行方便查看 ==>  普通日志、请求日志、响应日志、操作日志、错误日志
const formatText = {
    info(info: any) {
        let logText = new String()
        // 响应日志头信息
        logText += '\n' + '***************info log start ***************' + '\n'
        // 响应内容
        logText += 'info detail:' + '\n' + JSON.stringify(info) + '\n'
        // 时间
        logText += 'log time: ' + moment().format('LLLL') + '\n'
        // 响应日志结束信息
        logText += '*************** info log end ***************' + '\n'
        return logText
    },
    request(req: Context, resTime: number): string {
        let logText = new String()
        const method = req.method
        // 访问方法
        logText += 'request method: ' + method + '\n'
        // 请求原始地址
        logText += 'request originalUrl:  ' + req.originalUrl + '\n'
        // 客户端ip
        logText += 'request client ip:  ' + req.ip + '\n'

        if (method.toUpperCase() === 'GET') {
            logText += 'request query:  ' + JSON.stringify(req.query) + '\n'
        } else {
            logText += 'request body: ' + '\n' + JSON.stringify(req.body) + '\n'
        }

        // 服务器响应时间
        logText += 'response time: ' + resTime + '\n'

        return logText as string
    },
    response(ctx: any, resTime: number) {
        let logText = new String()
        // 响应日志开始
        logText += '\n' + '*************** response log start ***************' + '\n'
        // 添加请求日志
        logText += formatText.request(ctx.request, resTime)
        // 响应状态码
        logText += 'response status: ' + ctx.status + '\n'
        // 响应内容
        logText += 'response body:' + '\n' + JSON.stringify(ctx.body) + '\n'
        // 时间
        logText += 'log time: ' + moment().format('LLLL') + '\n'
        // 响应日志结束
        logText += '*************** response log end ***************' + '\n'
        return logText
    },
    handle(info: any) {
        let logText = new String()
        // 响应日志开始
        logText += '\n' + '***************handle log start ***************' + '\n'
        // 响应内容
        logText += 'handle info detail:' + '\n' + JSON.stringify(info).replace(/\\n/g, '\n') + '\n'
        // 时间
        logText += 'log time: ' + moment().format('LLLL') + '\n'
        // 响应日志结束
        logText += '*************** handle log end ***************' + '\n'
        return logText
    },
    error(ctx: any, err?: any, resTime?: number) {
        if (ctx && err) {
            let logText = new String()
            // 错误信息开始
            logText += '\n' + '*************** error log start ***************' + '\n'
            // 添加请求日志
            logText += formatText.request(ctx.request, resTime ?? 0)
            // 错误名称
            logText += 'err name: ' + err.name + '\n'
            // 错误信息
            logText += 'err message: ' + err.message + '\n'
            // 错误详情
            logText += 'err stack: ' + err.stack + '\n'
            // 时间
            logText += 'log time: ' + moment().format('LLLL') + '\n'
            // 错误信息结束
            logText += '*************** error log end ***************' + '\n'
            return logText
        }

        let logText = new String()
        // 错误信息开始
        logText += '\n' + '*************** error log start ***************' + '\n'
        // 响应内容
        logText += 'error detail:' + '\n' + JSON.stringify(ctx) + '\n'
        // 时间
        logText += 'log time: ' + moment().format('LLLL') + '\n'
        // 错误信息结束
        logText += '*************** error log end ***************' + '\n'

        return logText
    }
}

export default {
    // TODO 封装普通日志
    logInfo(info: any) {
        if (info) {
            consoleLogger.info(formatText.info(info))
        }
    },
    // TODO 封装响应日志
    logResponse(ctx: any, resTime: number) {
        if (ctx) {
            resLogger.info(formatText.response(ctx, resTime))
        }
    },
    // TODO 封装操作日志
    logHandle(res: any) {
        if (res) {
            handleLogger.info(formatText.handle(res))
        }
    },
    // TODO 封装错误日志
    logError(ctx: any, error?: any, resTime?: number) {
        if (ctx && error) {
            errorLogger.error(formatText.error(ctx, error, resTime))
        } else {
            errorLogger.error(formatText.error(ctx))
        }
    }
}
