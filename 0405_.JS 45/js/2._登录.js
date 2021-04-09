/*
 aes解码
 Preview 编写了一下方便阅读
code :0 是登录成功  code:1 是登录失败了
power: 权限
location.href 跳转

登录成功 response  有一个Set-cookies：connet.sid= （连接码）      Exires=（过期时间）
在里面页面发送任何请求的时候，会自动把cookies中的connet_sid（每次  后台都会去做校验）通过请求头发送过去 并对比  



admin 后台的文件夹
client 前端的文件夹
sources 资源

在登录成功之后 会在服务器生成一个session 自动保存一个connect-sid 和属性值 以及 姓名 密码  以后登录是用cookies 去和服务器中的session 的姓名密码做对比

power必须要有
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4]
let ary=[[1,2,3,4],[5,6,7,8],[9,0,1,2]]