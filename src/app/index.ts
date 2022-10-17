/*
 * @Description: 创建Koa实例，运行全局中间件
 * @Author: Mankeung
 * @Date: 2022-10-14 15:09:01
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-17 10:43:17
 */

import Koa, { DefaultContext, DefaultState } from 'koa'
import router from '@/router'
import cons from '@/utils/cons'
import code from '@/config/code'
import koaStaic from 'koa-static'
import mount from 'koa-mount'
import jsonp from 'koa-jsonp'
import koaBody from 'koa-body'
import helmet from 'koa-helmet'
import compress from './compress'
import cors from './cors'
import common from './common'
import log from './log'
import * as constant from '@/config/constant'
import * as Fil from '@/utils/files'

class Application {
    private app: Koa<DefaultState, DefaultContext>

    constructor() {
        this.app = new Koa()
        this.init()
    }

    // TODO 初始化
    private init() {
        // 初始化创建文件夹
        Fil.createDir('public', true)
        Fil.createDir('public/upload', true)
        Fil.createDir('public/www', true)

        // logger
        this.app.use(log)

        // 配置后台允许跨域 允许跨域安全性如何解决 签名验证
        this.app.use(cors)

        // 提高安全
        this.app.use(helmet())

        // 压缩
        this.app.use(compress)

        // jsonp
        this.app.use(jsonp())

        // 配置post提交数据的中间件
        this.app.use(
            koaBody({
                multipart: true,
                // 设置上传文件大小最大限制，默认2M
                formLimit: constant.UPLOAD_MAX_SIZE,
                onError: () => {
                    throw new Error(`上传文件不能超过${constant.UPLOAD_MAX_SIZE / 1024 ** 2}MB~`)
                }
            })
        )

        // 配置静态资源中间件
        // .use(static('.')) // 不安全 根目录
        // 文件托管
        this.app.use(
            mount(
                constant.UPLOAD_URL,
                koaStaic(constant.UPLOAD_DIR, {
                    index: false, // 默认为true  访问的文件为index.html  可以修改为别的文件名或者false
                    hidden: false, // 是否同意传输隐藏文件
                    defer: true // 如果为true，则在返回next()之后进行服务，从而允许后续中间件先进行响应
                })
            )
        )
        // 网页托管
        this.app.use(
            koaStaic(constant.STATIC_DIR, {
                hidden: false,
                defer: true
            })
        )

        // 路由
        this.app.use(router.routes()).use(router.allowedMethods())

        // 公共拦截
        this.app.use(common)
    }

    // TODO 启动服务
    public start(port = 3000): Promise<Result> {
        return new Promise((resolve, reject) => {
            this.app
                .listen(port, () => {
                    console.clear()
                    resolve({
                        code: code.OK,
                        message: '服务启动成功~',
                        bean: port
                    })
                })
                .on('error', (err: Error) => {
                    console.clear()
                    cons.error(err)

                    reject({
                        code: code.ERR,
                        message: '服务启动出错~',
                        bean: err.message ?? err
                    })

                    process.exit(1)
                })
        })
    }
}

export default new Application()
