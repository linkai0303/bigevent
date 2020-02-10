// 配置文件
// 用于项目中所有相关的接口地址存放，统一管理

// 所有接口的基地址
var BASEURL = 'http://localhost:8000'

// 所有接口信息
var APILIST = {
    user_login: BASEURL + '/admin/login',
    user_logout: BASEURL + '/admin/logout',
    user_getInfo: BASEURL + '/admin/getuser',

    // 获取文章列表
    category_get: BASEURL + '/admin/category_search',
    // 添加文章列表
    category_add: BASEURL + '/admin/category_add',
    // 删除文章列表
    category_del: BASEURL + '/admin/category_delete',
    // 编辑文章列表
    category_edit: BASEURL + '/admin/category_edit',

    // 文章获取
    article_get: BASEURL + '/admin/search',
    // 文章删除
    article_del: BASEURL + '/admin/article_delete',
}