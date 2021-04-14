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
    //当样式写完以后，校验当前页面是否是合法进入的（是否携带小饼干） (localStorage 有没有power  )如果手动写了power就无法识别了
    let power = localStorage.getItem('power');
    if (!power&&power!='') {
        alert('您当前的权限信息不完整，请重新登录', {
            handled: () => {
                location.href = 'login.html';
            }
        });
    };
    // 当前接口请求时不需要携带参数，只需要把cookie里的connect.sid给后台带过去即可  带给后端这样就安全了 connect.sid的值在后台的session中
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
            console.log(data);
            let name = (data && data.name) || '默认值';
            $('.baseBox span').html('您好:' + name);//把当前登录的用户名字渲染到页面
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
        axios.get('/user/signout').then((res) => {///user/signout 发送这个请求就是告诉后台清除session  后台的session一定要清
            let { code } = res;
            if (code == 0) {
                localStorage.removeItem('power');//清除权限  cookies前端清不清都行
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
        // e.target是原生的 需要用$()去转换为jq的   stop是先清除之前的样式   slideToggle是300毫秒上下伸展
        if (tagName == "H3") {
            $(e.target).next().stop().slideToggle(300);
        }
        if (tagName == "I") {
            $(e.target).parent().next().stop().slideToggle(300);
        }
    });
    
    // 去按照权限渲染左侧菜单
    function render() {
        let str = `
            <div class="itemBox">
                <h3>
                    <i class="iconfont icon-yuangong"></i>
                    员工管理
                </h3>
                <nav class="item">
                    <a href="page/userlist.html" target="_iframe">员工列表</a>
                    ${power.includes('userhandle') ? `<a href="page/useradd.html" target="_iframe">新增员工</a>` : ""}
                </nav>
            </div>
            
            <div class="itemBox">
                <h3>
                    <i class="iconfont icon-guanliyuan"></i>
                    部门管理
                </h3>
                <nav class="item">
                    <a href="page/departmentlist.html" target="_iframe">部门列表</a>
                    <a href="page/departmentadd.html" target="_iframe">新增部门</a>
                </nav>
            </div>
            <div class="itemBox">
                <h3>
                    <i class="iconfont icon-zhiwuguanli"></i>
                    职务管理
                </h3>
                <nav class="item">
                    <a href="page/joblist.html" target="_iframe">职务列表</a>
                    <a href="page/jobadd.html" target="_iframe">新增职务</a>
                </nav>
            </div>
            <div class="itemBox">
                <h3>
                    <i class="iconfont icon-kehuguanli"></i>
                    客户管理
                </h3>
                <nav class="item">
                    <a href="page/customerlist.html?lx=my" target="_iframe">我的客户</a>
                    ${power.includes('allcustomer') ? '<a href="page/customerlist.html?lx=all" target="_iframe">全部客户</a >':""}
                    <a href="page/customeradd.html" target="_iframe">新增客户</a>
                </nav>
            </div>
`
        $(".menuBox").html(str);
    }
    render();
    //${}不光可以写变量 还可以写js代码   $(function())jq的自执行是页面所有dom元素加载完毕后才会执行
    // 使用自己写一个数组去循环渲染
   /*  let ary = [
        {
            title: "员工管理",
            icon: 'icon-guanliyuan',
            children: [{
                href: 'page/departmentlist.html',
                content: '员工列表',
                flag:''//用来配合权限校验的  flag空 不需要权限
            }]
        }, {
            title: "员工管理",
            icon: 'icon-guanliyuan',
            children: [{
                href: 'page/departmentlist.html',
                content: '员工列表',
                flag:'userhandle'
            }]
        }
    ]
    function render(ary) {
        let str = ``;
        ary.forEach(item => {
            let { title, icon, children,flag } = item;
            str += `<div class="itemBox">
                <h3>
                    <i class="iconfont ${icon}"></i>
                    ${title}
                </h3>
                <nav class="item">
                ${chaildren.map(item => {
                let { href, content } = item;
                return `${power.includes(flag)?`<a href="${href}" target="_iframe">${content}</a>`:''}`
                //return `<a href="${href}" target="_iframe">${content}</a>`
            }).join('')}
                </nav>
            </div>`
        });
        console.log(str);
        $('.menuBox').html(str)
    }
    render(ary); */


    // 给头部的两个按钮绑定点击事件
    // 获取前三个菜单列表 
    // 再获取最后一个菜单列表
    let $organize = $(".menuBox .itemBox").filter(':lt(3)'); //:lt(3)索引 小于3   gt索引 大于
    console.log($organize);
    // 获取索引小于3的itemBox（前三个itemBox）
    let $custormer = $(".menuBox .itemBox").filter(':gt(2)');
    
    function change(index) {
        $(".navBox a").eq(index).addClass('active').siblings().removeClass('active');
        console.log(index);
        
        if (index == 0) {
            $organize.css("display","block");
            $custormer.css("display", "none");
            // 当点击组织结构的时候，让iframe默认显示员工列表页面
            $(".iframeBox").attr('src', 'page/userlist.html');
        }
        if (index == 1) {
            $organize.css("display", "none");
            $custormer.css("display", "block");
            // 当点击客户管理的时候，让iframe默认显示客户管理
            $(".iframeBox").attr('src','page/customerlist.html')
        }
    };
// 当页面刷新的时候，url里的hash值是不会变的，所以我们可以把哈希值作为唯一不变的表示，从2⃣️判断当前应该展示那个页面（organize对应的组织结构页面：customer对应的是客户管理页面）
    // 所以当页面代码刷新的时候先获取当前页面的hash，通过对hash值的判断，从而去确定执行change的时候传递0还是传递1
    // 找到不变的值就可以，也可以放在Local Storage/Session Storage 里面 每个页面的值不一样就可以 判断flag的值 localstorage.setItem('flag','origze')
    let hash = location.hash || "#organize";
    // let hash=location.href.queryURLParams()['HASH'];   location.href「全部的url」   queryURLParams()['HASH']自己封装的url获取hash
    let index = 0;
    if (hash == '#customer') {
        index = 1;
    }
    change(index);
    /* if (hash == "#organize") {
        change(0);
    }
    if (hash == "#customer") {
        change(1);
    }
    change(hash = "#organize");//代码初始化的时候，rangchange执行一次，默认展示组织结构 */
    
    $(".navBox a").click(function () {
        let index = $(this).index();//获取当前元素在兄弟姐妹中的索引
        change(index);
    });

});
// spa 单页面
// localStorage.getItem("power") 
//"userhandle%7Cdeparthandle%7Cjobhandle%7Cdepartcustomer%7Callcustomer%7Cresetpassword"
// decodeURI(url)
// "userhandle|departhandle|jobhandle|departcustomer|allcustomer|resetpassword"

// 后台写了几个接口 前端没写完  后端就用postman去测试接口



/* let num = 100;
let str = `alksjdf${num++}lask`
任何js代码都有返回值，就算是undefined也是一个值。${返回值} 里面代码的返回值是什么里面就是什么 */


