// 模块化开发
// 把所有跟用户相关的功能集合在一个对象中

var user = {
    // 用户登录功能
    login: function (name, password) {
        $.post('http://localhost:8000/admin/login', {
            'user_name': name,
            'password': password
        }).then(function (res) {
            console.log(res);

            if (res.code === 200) {
                alert('登录成功')
                //页面跳转
                window.location.href = "index.html"
            } else {
                alert(res.msg)
            }
        })
    },
    // 用户退出功能
    logout: function () {
        $.post('http://localhost:8000/admin/logout', function (res) {
            if (res.code === 200) {
                window.location.href = 'login.html'
            }
        }).then(function (res) {
            if (res.code === 200) {
                window.location.href = 'login.html'
            }
            else {
                alert(res.msg)
            }
        })
    },
    // 获取用户信息功能
    getInfo: function () {
        $.get('http://localhost:8000/admin/getuser').then(function (res) {
            console.log(res);
            $('#userName').text(res.data.nickname)
            $('.userImg').attr('src', res.data.user_pic)
        })
    }
}
