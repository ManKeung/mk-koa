/*
 * @Description: 控制器用户
 * @Author: Mankeung
 * @Date: 2022-10-15 13:22:32
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-15 16:58:30
 */

import { Context } from 'koa'
import userService from '@/service/user.service'

class UserController {
    async getUserInfo(ctx: Context) {
        const token = ctx.currentToken
        ctx.body = await userService.getUserInfo(token)
    }

    async logoInfo(ctx: Context) {
        const user = ctx.currentUser
        ctx.body = await userService.loginInfo(user)
    }
}

export default new UserController()
