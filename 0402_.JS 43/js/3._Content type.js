/* 
content-type
用于说明请求或返回的消息主体是用何种方式编码
https://blog.csdn.net/u013453787/article/details/88224587

提前告诉服务器 发送什么东西 以什么方式接收这个类型

request header 请求头（我给后台发送的文件格式，你以这种格式接收）  response header 响应头（后台给你的文件格式）

application/x-www-form-urlencoded
get不允许更改 xx=xx&xx=xx 的方式进行编码

multipart/form-data

application/json //{"title":"test","sub":[1,2,3]}
*/