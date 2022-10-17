import Router from '@koa/router'
import { verfyAuth, verfyUser } from '@/middleware/auth.middleware'
import user from '@/controller/user.controller'

const router = new Router()

// 查看用户信息
router.get('/', verfyAuth, user.getUserInfo)

// 用户登陆
router.post('/', verfyUser, user.logoInfo)

export default router.routes()
