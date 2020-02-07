// 文章分类相关的操作
var category = {
    get: function () {
        return $.get(APILIST.category_get)
    }
}