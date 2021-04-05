// 本地存储
// 1. Local Storage 本地永久性存储，如果你不手动删除，那么它会永远存储在你的浏览器里
localStorage.setItem("key", value);//设置新的本地存储
// 当设置的时候浏览器会默认把value转成字符串再去存储：如果存储的值是引用数据类型的，可以先拿JSON.stringify转一下再存储
let obj = { a: 1, b: 2 };
obj = JSON.stringify(obj);
localStorage.setItem("obj", obj);
// 当获取的时候，把获取的值再拿JSON.parse转回来
localStorage.getItem("key");//获取存储的值
localStorage.removeItem("key");//移除
localStorage.clear();// 清除全部localStorage

// 本地存储在存储的时候，如果域名和端口号不一致，那存储的数据是相互独立的
// 每当点击按钮之后 再数组中push
btn.onclick = function () {
    let arr = localStorage.getItem("arr") || "[]";
    arr = JSON.parse(arr);
    arr.push(100);
    arr = JSON.stringify(arr);
    arr = localStorage.setItem("arr", arr);
}

// SessionStorage 会话存储 仅限于当前页面，页面关闭就没有了


// Cookies 
document.cookie = "a=1";//同样的名字会覆盖 
document.cookie = "b=2";
document.cookie;//"a=1;b=2"
/*
1.大小限制：一般浏览器允许在同一个域下最多8kb。而localStorage会存储5mb左右
2.兼容性：cookie几乎可以兼容所有浏览器，但是localStorage是H5新增的，低版本的浏览器不支持
3.稳定性：cookie可以设置过期时间，但是一般情况下载没有到达时间之前cookie都被清除了(比如你的各种安全卫士在清除缓存垃圾的时候，就有可能把cookie清除，浏览器里的清除浏览记录也可以清除cookie，无痕浏模式不会设置cookie)

4.cookie会自动通过请求头发送给服务端
后台也可以设置cookie信息，在响应头设置一个字段 setCookies: 'a=1;b=2', 当请求成功的时候，浏览器i会检测当前的响应头中有没有setCookies字段，如果有的话，就会把此字段对应的信息存储到浏览器的cookie中

cookie经常会穿梭于浏览器和服务器之间

    */

//   不管是哪一种存储，每一个不同的域下都会有一套独立的本地存储，相互不冲突


// CORS就是跨域

// URL就是非同源策略 audio video link script img
// ajax就是同源策略  我把自己的域名告诉后台就可以了