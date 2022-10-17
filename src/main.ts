/*
 * @Description: 入口文件
 * @Author: Mankeung
 * @Date: 2022-10-14 14:09:59
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-15 17:01:18
 */

import App from './app'
import { PORT } from './config/constant'
import cons from './utils/cons'

App.start(PORT).then((res) => {
    cons.success(`Koa server has started, running with: http://127.0.0.1:${res.bean}. `)
})
