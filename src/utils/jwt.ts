/*
 * @Description: token封装
 * @Author: Mankeung
 * @Date: 2022-10-14 16:28:11
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-15 17:00:55
 */

import jwt from 'jsonwebtoken'
import { TPRIKEY } from '@/config/constant'
import code from '@/config/code'
import log from '@/utils/log'

// TODO 生成token
export const getToken = <T>(data: T, time = 60 * 60 * 24 * 365 * 100): Promise<Result> => {
    return new Promise((resolve) => {
        try {
            resolve({
                code: code.OK,
                message: '成功~',
                bean: jwt.sign(
                    {
                        data,
                        exp: Math.floor(Date.now() / 1000) + time
                    },
                    TPRIKEY
                )
            })
        } catch (err) {
            log.logError({
                title: 'token获取失败',
                err
            })
            resolve({
                code: code.ERR,
                message: 'token获取失败',
                bean: ''
            })
        }
    })
}

// TODO token解密
export const dToken = (token: string): Promise<Result> => {
    return new Promise((resolve) => {
        try {
            const result: any = jwt.verify(token, TPRIKEY)
            resolve({
                code: code.OK,
                message: '成功~',
                bean: result.data
            })
        } catch (err) {
            log.logError({
                title: 'token解密失败',
                err
            })
            resolve({
                code: code.ERR,
                message: 'token解密失败',
                bean: ''
            })
        }
    })
}
