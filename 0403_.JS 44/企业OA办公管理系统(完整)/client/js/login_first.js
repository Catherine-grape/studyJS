$(function () {
    // 获取要操作的元素
    let $account = $('.userName'), $password = $('.userPass'), $submit = $('.submit');
    console.log($account, $password, $submit);
    // submit 绑定点击事件，当点击的时候：
    // 1. 进行表单的校验
    // 1. 如果表单校验通过，就发送登录接口的请求
    // 2. 如果表单校验没有通过，那就直接用alert弹框通知用户校验失败，并且终止代码的执行。
    let phoneReg = /^1[3-8]\d{9}$/;

    $submit.click(function () {
        let account = $account.val().trim().replace(/ /g, '');//获取到原生字符串内容 trim字符串原生去空格 只能去除左右的空格。中间的空格没办法 只能使用正则 replace
        let password = $password.val().trim();
        console.log(account, password);
        if (account === '' || password == '') {
            alert('当前用户名或者密码不能为空');
            return;
        }
        console.log(1);
        /* 
        if (!phoneReg.test(account)) {
            alert('当前用户名不是一个手机号码');
            return;
        } 
        */
        // 如果正则校验通过，就发送请求把用户名和密码传递给后台
        // 接口API （接口文档）
        axios.post('/user/login', {
            account,
            password: md5(password)
        }).then((res) => {
            console.log(res);//有可能是修改过的，看network中的
            let { code, power, codeText } = res;
            if (code == 0) {
                // 当登录成功以后，先通知用户登录成功，然后再把power存储到本地存储中，然后再跳转到首页
                alert(codeText, {
                    handled: () => {//这个封装好的alert 里面必须是handled
                        location.href = 'index.html';
                }});//codeText变成动态的 后台给到的 PM怎么说就怎么写
                localStorage.setItem("power", encodeURIComponent(power));
                //location.href = 'http://127.0.0.1:5501/client/index.html'; 会立即跳转 等价于index.html 会拿当前域名当前端口号
                
            } else {
                alert('不好意思，登录失败')
            }
        })
        /* axios.get('/user/login', {
            params: {
                
            }
        }); */
        // Set-Cookie:登录的令牌

        // upload 埋点 用户登录过多少次，浏览过多少次，点击过什么/区分用户（登录后）/不区分用户
        // localhost==127.1.1   localhost不支持cookies 并且在config.js中的跨域规定了是127.1  如果是localhost就不能成功了
    })
})