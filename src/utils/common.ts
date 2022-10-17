/*
 * @Description: 公共方法
 * @Author: Mankeung
 * @Date: 2022-10-15 15:37:50
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-15 17:00:36
 */

import path from 'path'

// TODO 路径
export function resolvePath(p: string) {
    return path.resolve(process.cwd(), p)
}
