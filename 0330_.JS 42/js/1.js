// 也可以循环到页面
let res = ary.map(item => {
    return `<li>${item}</li>`
}).join('');


/* 
转码：
http://www.baidu.com:8080/info?name=二丫
url出现汉字不好看，发送请求的时候 会把汉字变成乱码  浏览器转译（转码）  到达服务器解码
转码解码的工具

1、基于encodeURI进行编码，也可以基于decodeURI进行解码，一般用它进行编译整个url，urlli的特殊字符进行特殊编译（只会对汉字进行编码）

*/
let url = 'http://www.baidu.com:8080/info?name=二丫'
url = encodeURI(url);//转码   http://www.baidu.com:8080/info?name=%E4%BA%8C%E4%B8%AB
console.log(url);
url = decodeURI(url);//解码   http://www.baidu.com:8080/info?name=二丫

/* 
2、encodeURIComponent ：基于encodeURIComponent 进行编码，它会对字符串的数字和字母以外的值进行编码，一般用于给参数部分进行编码
有一种特殊情况会用到这个，假设当前传递的参数的属性值是一个完整的url，这时候就用到encodeURIComponent去转码了
不让用户看到参数  
window上的属性可以直接使用
encodeURIComponent：仅仅适用于参数转码，不适用于整个url
encodeURI：适用于转码整个url
*/
url = encodeURIComponent(url);//http%3A%2F%2Fwww.baidu.com%3A8080%2Finfo%3Fname%3D%25E4%25BA%258C%25E4%25B8%25AB
console.log(url);

let params = encodeURIComponent('ss=www.ss.com:5555/ss')
let url1 = 'http://www.baidu.com:8080/info?' + params;//"http://www.baidu.com:8080/info?ss%3Dwww.ss.com%3A5555%2Fss"


// md5：是一个js插件下载才可以使用 不可逆的加密  是不能转码的  你的注册和密码 可能用md5
md5(12345)//32位字符
let ary = ['asd', 'sdfs', 'salkj'];//网上解密用简单存在自己的数据库中，挨个去碰


/* 
location和history

location：你当前打开的页面是那个
history：历史记录

*/
/* 
location（url）：window上的属性，location的使用

- location 是一个大对象，里面存储着当前url里的各种信息
	- hash：当前的hash值 //"#hhhh"
	- host：域名+端口号//"www.javascriptpeixun.cn"
	- hostname：域名//"www.javascriptpeixun.cn"
	- href：整个url//"http://www.javascriptpeixun.cn/?name=hahahaha#hhhh"
	- origin：协议+域名+端口号//"http://www.javascriptpeixun.cn"
	- pathname：资源路径名称 //  "/"
	- port：端口号// ""
	- protocol：协议 //"http:"
	- search：问号传参 //"?name=hahahaha"
- 方法
    - reload（） 刷新页面
    - replace（"www.baidu.com"）//直接替换成百度页面 无法返回 替换当前的url 打开一个新的页面
	- href（“www.baidu.com”）//跳转到百度 可以返回
*/
throw (new Error('必须传参'));//页面抛出错误



/* 
- history是一个对象，里面存储着一些跳转页面的方法
- 方法
		- back():返回上一页（必须有历史记录）
		- forward（）：去到下一页（必须有历史记录）
		- history.go(1):可以跳转到指定的页面 正数向前 负数向后

location和history是配合使用的，一个是打开新页面，一个是进行前后的跳转
*/