// ajax 不区分大小写

let xhr = new XMLHttpRequest;
console.log(xhr);//0:unsent  1:opened  2:Headers_received   3:loading  4:done
console.log(xhr.readyState);//0 刚刚创建完成ajax实例，而且没有调用xhr.open() 没有打开请求 请求配置好
xhr.open('get', "./data.json?name=1&age=2");
console.log(xhr.readyState);//1 已经打开一个open请求，
xhr.onreadystatechange = function () {//监听当前请求发生变化  监听是为了拿到后台给的数据
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            xhr.response;
            console.log(response);//拿到所有的数据
        }
    }
    console.log(xhr.readyState);//2\3\4
    console.log(xhr.status);//在2 的时候就已经返回了 2/200/3/200/4/200
    console.log(xhr.response);//2/200/""  /3/200 刚刚接收后台返回的响应体 不一定接收完整了  /4/200 肯定拿到所有的响应体
    let res = xhr.getAllResponseHeaders();
    res.split(/\n/);//split 也可以传递正则 
    console.log(xhr.getAllResponseHeaders());
    // 响应报文在2的时候就可以拿到响应头  2状态码 响应头
}
xhr.send();//这就可以发送请求只是没法拿到结果而已  只有执行的时候 里面才会变化这个码


/* 
xhr 中的redyState分别代表的意思是
0: unsent   刚刚建立一个xhr实例
1: opened   已经执行了open方法

send（）执行后 响应后
2: Headers_received   已经开始响应可以拿到http的状态码和拿到响应头
3: loading      开始接收响应体
4: done         响应体已经接收完毕（所有东西都已经接收完毕）
*/


/* 
ajax 方法 
xhr.getAllResponseHeaders()//获取所有的响应头的数据
xhr.getResponseHeader('Date')//获取单个的响应头，传递一个属性名 可以获取到属性名对应的属性值
xhr.setRequestHeader('key','value');//open之后 send之前  所有的值都是字符串类型的 跟后台商量好（后台要什么东西），在请求头中给后台   设置请求头的信息
xhr.ontimeout=function(){//设置请求超时之后执行的回调函数
    console.log(1)   
}
xhr.abort() //手动终止  （在里面就终止2之后的响应体） 在send后面就abort 就会关闭了
onreadystatechange=function(){}：监听readyState的变化的事件

属性
xhr.timeout=1000//设置请求的超时时间
status//http状态码
readyState请求的步骤
response 返回的请求体
responseURL 请求的完整的url
xhr.withCredentials:false //在跨域的时候 是否允许携带资源凭证 cookies凭证的一种
open：配置一个请求的基本信息




get 传参只能这样传   get请求没有请求体
xhr.open('GET', "./data.json?name=1&age=2");//Query String Parameters 'name:1 age:2'

post  只有post有请求主体
xhr.send("name=1&age=2");  Request Payload 请求主体
*/
