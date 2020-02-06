// 配置文件
// 用于项目中所有相关的接口地址存放，统一管理

// 所有接口的基地址
var BASEURL = 'http://localhost:8000'

// 所有接口信息
var APILIST = {
    user_login: BASEURL + '/admin/login',
    user_logout: BASEURL + '/admin/logout',
    user_getInfo: BASEURL + '/admin/getuser'
}