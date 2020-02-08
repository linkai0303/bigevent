// 模块化开发
// 把所有跟用户相关的功能集合在一个对象中

var user = {
    // 用户登录功能
    login: function (name, password) {
        // $.post(APILIST.user_login, {
        //     'user_name': name,
        //     'password': password
        // }).then(function (res) {
        //     console.log(res);

        //     if (res.code === 200) {
        //         alert('登录成功')
        //         //页面跳转
        //         window.location.href = "index.html"
        //     } else {
        //         alert(res.msg)
        //     }
        // })


        // 价值3000千块的代码优化
        return $.post(APILIST.user_login, {
            'user_name': name,
            'password': password
        })

    },

    // 用户退出功能
    logout: function () {
        return $.post(APILIST.user_logout, function (res) {
            if (res.code === 200) {
                window.location.href = 'login.html'
            }
        })
    },

    // 获取用户信息功能
    getInfo: function () {
        return $.get(APILIST.user_getInfo)
    }
}
