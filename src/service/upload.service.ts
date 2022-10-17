/*
 * @Description: 文件上传
 * @Author: Mankeung
 * @Date: 2022-10-17 09:34:36
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-17 12:15:05
 */

import fs from 'node:fs'
import * as Fil from '@/utils/files'
import { resolvePath } from '@/utils/common'
import code from '@/config/code'
import log from '@/utils/log'

class UploadService {
    async getUploadInfo(data: any[]) {
        const arr: any[] = []

        return new Promise((resolve) => {
            data.forEach((file, index) => {
                const ext = Fil.getExt(file.originalFilename)
                const dirName = Fil.getDir(file.mimetype)
                const name = Fil.getName(ext)
                Fil.createDir(dirName)
                const filepath = `${dirName}/${name}`
                const reader = fs.createReadStream(file.filepath)
                const url = resolvePath(`public/upload/${filepath}`)
                const write = fs.createWriteStream(url)

                reader.pipe(write)

                reader.on('error', (err) => {
                    reader.close()
                    write.close()
                    Fil.del(url)
                    log.logError({
                        title: '文件读取错误',
                        err
                    })
                    resolve({
                        code: code.ERR_SERVER,
                        message: '文件读取错误~',
                        bean: ''
                    })
                })

                write.on('error', (err) => {
                    reader.close()
                    write.close()
                    Fil.del(url)
                    log.logError({
                        title: '文件写入错误',
                        err
                    })
                    resolve({
                        code: code.ERR_SERVER,
                        message: '文件写入错误~',
                        bean: ''
                    })
                })

                write.on('finish', () => {
                    reader.close()
                    write.close()
                    arr.push({
                        name,
                        size: file.size,
                        url: filepath,
                        time: Date.now()
                    })
                    if (index < data.length - 1) return
                    resolve({
                        code: code.OK,
                        message: '文件上传上传~',
                        bean: arr
                    })
                })
            })
        })
    }
}

export default new UploadService()
