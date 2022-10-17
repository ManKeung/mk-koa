/*
 * @Description: 业务层用户相关
 * @Author: Mankeung
 * @Date: 2022-10-15 13:20:59
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-15 17:00:09
 */

import { dToken, getToken } from '@/utils/jwt'

class UserService {
    async getUserInfo(data: string) {
        return await dToken(data)
    }

    async loginInfo<T>(data: T) {
        return await getToken(data)
    }
}

export default new UserService()
