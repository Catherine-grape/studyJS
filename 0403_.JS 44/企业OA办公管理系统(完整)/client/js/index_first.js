$(function () {
    // 获取头部、中间部分、底部
    let $header = $('.headerBox'), $footer = $('.footerBox'), $main = $('.container');
    function resize() {
        // 中间内容的高度===屏幕的总高度-头部的高度-底部的高度
        let winH = document.documentElement.clientHeight;
        $main.css('height', winH - $header.outerHeight() - $footer.outerHeight());//outerHeight()  总高度+padding+border  里面放true 就是加上margin
    }
    resize(); 
    // 当屏幕尺寸发生变化的时候，让中间内容的高度再重新计算即可（只要屏幕尺寸发生变化，onresize事件就会执行）
    window.onresize = function () {
        resize();
    };
    //当样式写完以后，校验当前页面是否是合法进入的（是否携带小饼干） (localStorage 有没有power  )
    let power = localStorage.getItem('power');
    if (!power&&power!='') {
        alert('您当前的权限信息不完整，请重新登录', {
            handled: () => {
                location.href = 'login.html';
            }
        });
    };
    // 当前接口请求时不需要携带参数，只需要把cookie里的connect.sid给后台带过去即可
    axios.get('/user/login').then((res) => {
        let { code } = res;
        if (code == 0) {
            //当校验通过之后应该去发送请求个人信息的接口（串行）
            return axios.get('/user/info')
        } /* else {
            alert('不好意思，您当前是非法进入的，请重新登录', {
                handled: () => {
                    location.href = 'login.html';
                }
            }); */
        // 如果当前的用户是非法登录的，那也就是此时if没有走，也就是说此时的回调函数没有return Promise的实例，这时候下一个里的then的成功的回调函数就会被默认执行，而且形参res是undefined，咱们正常的逻辑是不应该让下一个then中的成功的回调函数执行的。
        return Promise.reject();
        
    }).then((res) => {
        console.log(res);
        // 也可以给data赋默认值，目的是万一后台没有返回data，下面执行data.name的时候不至于报错  {data={}} 赋默认值后 下面的name判断中就可以不用写逻辑或了
        let { data, code } = res;
        if (code == 0) {
            let name = (data && data.name) || '默认值';
            $('.baseBox span').html('您好:' + name);//把当前的用户名字渲染到页面
        }
    }).catch(() => {
        alert('不好意思，您当前是非法进入的，请重新登录', {
            handled: () => {
                location.href = 'login.html';
            }
        });//不写catch的话 就需要写then中的失败的回调函数
        
    });
    // 给退出按钮绑定点击退出的事件
    $('#signout').click(function () {
        axios.get('/user/signout').then((res) => {
            let { code } = res;
            if (code == 0) {
                localStorage.removeItem('power');
                alert('恭喜您，退出成功', {
                    handled: () => {
                        location.href = 'login.html';
                    }
                });  
            } else {
                alert('不好意思，退出失败，请稍后再试');
            }
        });
    });

    // 给左侧菜单绑定显示隐藏功能
    $(".menuBox").click(function (e) {
        let tagName = e.target.tagName;
        console.log(tagName);
        // 如果用户点击的是i标签的话，怎样实现效果
        $(e.target).next().stop().slideToggle(300);
    })

});
