/*
 * @Description: 日志相关配置
 * @Author: Mankeung
 * @Date: 2022-10-17 13:31:16
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-17 13:45:38
 */

import { resolvePath } from '@/utils/common'

// 日志根目录
const baseLogPath = resolvePath('logs')

// 报错输出日志
// 错误日志目录、文件名 输出路径
const errorPath = '/error'
const errorFileName = 'error'
const errorLogPath = `${baseLogPath}${errorPath}/${errorFileName}`

// 错误日志目录、文件名、输出完整路径
// 响应日志目录、文件名、输出完整路径
const responsePath = '/response'
const responseFileName = 'response'
const responseLogPath = `${baseLogPath}${responsePath}/${responseFileName}`

// 操作数据库进行增删改等敏感操作记录日志
// 操作日志目录、文件名、输出完整路径
const handlePath = '/handle'
const handleFileName = 'handle'
const handleLogPath = `${baseLogPath}${handlePath}/${handleFileName}`

export default {
    appenders: {
        // 日志格式等设置
        'rule-console': {
            type: 'console'
        },
        errorLogger: {
            type: 'dateFile', // 按日期分割
            filename: errorLogPath, // 存储的日志文件位置
            pattern: 'yyyy-MM-dd-hh.log', // 日志文件的命名
            alwaysIncludePattern: true, // 在当前日志文件名中和滚动日志一样包括pattern
            encoding: 'utf-8', // 编码格式，默认为utf-8
            maxLogSize: 1000, // 日志文件的最大大小(以字节为单位),如果未指定，则不会发生日志滚动
            numBackups: 3,
            path: errorPath
        },
        resLogger: {
            type: 'dateFile',
            filename: responseLogPath,
            pattern: 'yyyy-MM-dd-hh.log',
            alwaysIncludePattern: true,
            encoding: 'utf-8',
            maxLogSize: 1000,
            numBackups: 3,
            path: responsePath
        },
        handleLogger: {
            type: 'dateFile',
            filename: handleLogPath,
            pattern: 'yyyy-MM-dd-hh.log',
            alwaysIncludePattern: true,
            encoding: 'utf-8',
            maxLogSize: 1000,
            numBackups: 3,
            path: handlePath
        }
    },
    // 供外部调用的名称和对应设置定义
    categories: {
        default: {
            appenders: ['rule-console'],
            level: 'all'
        },
        resLogger: {
            appenders: ['resLogger'],
            level: 'info'
        },
        errorLogger: {
            appenders: ['errorLogger'],
            level: 'error'
        },
        handleLogger: {
            appenders: ['handleLogger'],
            level: 'all'
        },
        http: {
            appenders: ['resLogger'],
            level: 'info'
        }
    },
    baseLogPath: baseLogPath
}
