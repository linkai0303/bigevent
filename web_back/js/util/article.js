// 文章内容相关的操作
var article = {
    // 获取文章类别
    get: function (page, type, state) {
        return $.get(APILIST.article_get, { 'page': page, 'type': type, 'state': state })
    },
    /**
     * 根据id获取文章
     * @param {Number} id 
     */
    getById: function (id) {
        return $.get(APILIST.article_get, { 'id': id })
    },
    // 删除文章类别
    del: function (id) {
        return $.get(APILIST.article_del, { 'id': id })
    },
    // 新增文章类别
    add: function (fd) {
        return $.ajax({
            url: APILIST.article_add,
            type: 'post',
            data: fd,
            processData: false, //不允许处理数据
            contentType: false, //不允许设置请求头
        })
    },
    // // 编辑文章类别
    // edit: function (id, name, slug) {
    //     return $.post(APILIST.category_edit, { 'id': id, 'name': name, 'slug': slug })
    // },
}