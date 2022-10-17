/*
 * @Description: 状态码值
 * @Author: Mankeung
 * @Date: 2022-10-14 16:54:12
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-15 16:57:32
 */

enum code {
	OK = 200, // 服务正常，且返回数据
	ERR = 400, // 接口错误
	ERR_AUTH = 401, // 未授权
	ERR_DATA = 402, // 参数错误
	ERR_PERMISSION = 403, // 无权限操作
	ERR_404 = 404, // 找不到资源
	ERR_DB = 405, // 数据库异常
	ERR_SERVER = 500, // 服务端异常
	ERR_OTHER = 600 // 未知错误
}

// TODO 状态码值
export default code
