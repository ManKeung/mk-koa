/*
 * @Description: 常量
 * @Author: Mankeung
 * @Date: 2022-10-14 15:25:45
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-15 16:54:48
 */

import fs from 'node:fs'
import { resolvePath } from '@/utils/common'

// 接口路基
export const BASE_API = '/v1/api'

// 端口号
export const PORT = 9999

// 文件服务地址
export const UPLOAD_URL = '/upload'
// 文件服务目录
export const UPLOAD_DIR = resolvePath('public/upload')

// 网页托管目录
export const STATIC_DIR = resolvePath('public/www')

// 上传文件最大
export const UPLOAD_MAX_SIZE = 1024 ** 2 * 10

// 上传文件个数
export const UPLOAD_MAX_NUM = 5

// 公钥
export const PUBKEY = fs.readFileSync(resolvePath('public/keys/id_rsa.pub'))
export const TPUBKEY = fs.readFileSync(resolvePath('public/keys/t_rsa.pub'))
// 私钥
export const PRIKEY = fs.readFileSync(resolvePath('public/keys/id_rsa.key'))
export const TPRIKEY = fs.readFileSync(resolvePath('public/keys/t_rsa.key'))
