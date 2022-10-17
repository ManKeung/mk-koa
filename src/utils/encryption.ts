/*
 * @Description: 非对称加解密
 * @Author: Mankeung
 * @Date: 2022-10-14 16:28:11
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-15 17:00:55
 */

import NodeRSA from 'node-rsa'
import { PUBKEY, PRIKEY } from '@/config/constant'

export function rsaEncrypt(data: string): string {
    const nodersa = new NodeRSA(PUBKEY)
    nodersa.setOptions({ encryptionScheme: 'pkcs1' })
    return nodersa.encrypt(data, 'base64')
}

export function rsaDecrypt(data: string): string {
    const nodersa = new NodeRSA(PRIKEY)
    nodersa.setOptions({ encryptionScheme: 'pkcs1' })
    return nodersa.decrypt(data, 'utf8')
}
