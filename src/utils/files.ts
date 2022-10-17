/*
 * @Description: 文件工具
 * @Author: Mankeung
 * @Date: 2022-10-16 11:16:05
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-17 13:32:53
 */

import { v4 as uuidv4 } from 'uuid'
import fs from 'node:fs'
import { resolvePath } from './common'
import log from '@/utils/log'

// TODO 获取文件后缀
export const getExt = (name: string): string => {
    const ext = name.split('.')

    return ext[ext.length - 1].toLowerCase()
}

// TODO 生成文件名
export const getName = (ext: string): string => `${uuidv4()}.${ext}`

// TODO 判断文件是否存在 如果不存在就新建文件夹
export const createDir = (p: string, flg = false) => {
    const src = flg ? `${p}` : `public/upload/${p}`
    p = resolvePath(src)

    if (!fs.existsSync(p)) fs.mkdirSync(p)
}

// TODO 删除文件或文件夹
export const del = (p: string) => {
    fs.stat(p, (err, stats) => {
        if (err) return log.logHandle(err)

        if (stats.isFile())
            fs.unlink(p, (err) => {
                err && log.logHandle(err)
            })
        if (stats.isDirectory())
            fs.rmdir(p, (err) => {
                err && log.logHandle(err)
            })
    })
}

// TODO 根据mimetype生成文件夹
export const getDir = (mimetype: string) => {
    if (!mimetype) return 'other'
    return mimetype.replaceAll('/', '-')
}
