/* 
输入url做了什么
ajax
http的请求方式  get post
get没有请求体  send小括号里面放的是请求体

通过请求给后台发送数据
请求头/请求体（post）/通过url携带参数（get）  key：value

请求方式的区别：
get 一般都是得到数据（得到的多，发送的少） /post 一般是发送数据（发送的多，得到的少）
get请求不安全，post相对来说安全一点
get默认走缓存，post不会，只要保证每一次请求的url不一样
传递的参数的长度不一样，get通过url传递的少 多出的长度会被截取导致传递数据不完整  post传递的多


什么可以请求？
url img link  audio video script ajax  a

URL 什么都可以请求  只不过他只能渲染html   
img 请求图片
link css 预解析
ajax 什么都能请求  但是只用来请求数据
*/