// node 内置模块 http、https
// 127.0.0.1   
// res是服务器给前端响应的数据
// node的内置模块 http、https
let http = require('http');
let server = http.createServer((req, res) => {
    // req是请求过来的内容  Request   req.url请求的链接 没有协议域名端口号  req.method 请求方式  req.headers 获取请求头
    console.log(req.url, req.method, req.headers);
    // res里是响应的时候使用的方法或者属性  Response
    // res.writeHead(404,{
    //   a:100
    // }); // http状态码和响应头
    // res.end('1111'); // 响应体
    console.log(req,res);
    res.end('{code:0}');//通过url请求的会直接在页面也展示一下
});

server.listen(8060, () => {
    //=>当服务创建成功，并且端口号已经监听完成，触发此回调函数执行
    console.log('server is create success！listening on 8080 port！');
});


