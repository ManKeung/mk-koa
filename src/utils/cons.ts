/*
 * @Description: 打印方法封装
 * @Author: Mankeung
 * @Date: 2022-10-14 16:28:11
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-15 17:00:55
 */

import chalk from 'chalk'
import logSymbols from 'log-symbols'

export default {
    success: <T>(str: T) => {
        console.log(logSymbols.success, chalk.green(str))
    },
    error: <T>(str: T) => {
        console.error(logSymbols.error, chalk.red(str))
    },
    info: <T>(str: T) => {
        console.info(logSymbols.info, chalk.blue(str))
    },
    warn: <T>(str: T) => {
        console.log(logSymbols.warning, chalk.yellow(str))
    }
}
