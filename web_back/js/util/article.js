// 文章内容相关的操作
var article = {
    // 获取文章类别
    get: function (page, type, state) {
        return $.get(APILIST.article_get, { 'page': page, 'type': type, 'state': state })
    },
    // 新增文章类别
    // add: function (name, slug) {
    //     return $.post(APILIST.category_add, { 'name': name, 'slug': slug })
    // },
    // // 删除文章类别
    // del: function (id) {
    //     return $.post(APILIST.category_del, { 'id': id })
    // },
    // // 编辑文章类别
    // edit: function (id, name, slug) {
    //     return $.post(APILIST.category_edit, { 'id': id, 'name': name, 'slug': slug })
    // },
}