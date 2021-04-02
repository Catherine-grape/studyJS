/* 
浏览器只能get请求
ajax 数据请求  不区分大小写
html、css、js 静态资源文件
video audio img 

Preview二次处理后的
Response 真正后台给你返回的数据
Timing 请求时间
*/

/* 
async 异步 javascript and XML（json）数据
异步的js和xml
html：超文本标记语言
js一种逻辑的表现形式
XML ：标记语言 可扩展的标记语言，用自己定一个标签来存储数据（在很早以前，我们基于ajax和服务器进行交互的，数据格式一般都是XML格式为主，因为它能清晰的展示出对应的数据和结构层级，但是随着时代的发展，开始流行起了一种新的数据格式JSON，它不仅比XML更加清晰的展示的数据结构，而且同样还能存储数据，JSON更加轻便，所以现在前后端的数据交互都以JSON为主
*/

<student>
    <name>二丫</name>
    <age>18</age>
    <sex>女</sex>
</student>
[
    {
    "name": "erya",
    "age": 18,
    "sex":"女"
},
    {
    "name": "lilei",
    "age": 22,
    "sex":"男"
},

]

let xhr = new XMLHttpRequest;
xhr.response;//不知道接收的是什么类型的   Text也可以字符串