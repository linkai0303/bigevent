// 文章分类相关的操作
var category = {
    get: function () {
        return $.get(APILIST.category_get)
    },
    // 新增文章类别
    add: function (name, slug) {
        return $.post(APILIST.category_add, { 'name': name, 'slug': slug })
    },
}