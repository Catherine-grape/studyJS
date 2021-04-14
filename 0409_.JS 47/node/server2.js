// 用express 快速创建一个静态资源服务
let express = require('express'),
    server = express();//createServer()  静态资源文件它自动帮你获取资源路径名称
server.listen(8080, () => {
    console.log('server is create success！listening on 8080 port！');
});

server.use(express.static('./client'));//获取当前静态资源文件所在的位置
server.use((req, res, next) => {//如果当前请求的资源路径不正确的时候，会走这里
    res.status(404);
    res.send('NOT FOUND!');
    // res.end();
})

// req和res身上常见的属性和方法

// req
/*
 req.path:存储请求地址的路径名称 
 req.query：存储问号传参的相关信息（对象）
 req.method：请求方式
 req.get：获取响应头信息
 req.body：代表请求体（但是请求体得做特殊处理才能使用）
 url.parse（req.url,true）//{pathenname,query,port}
*/


// res

/* 
res.send：最常用的给客户端返回信息（可以传递对象/PATH/BUFFER/TXT等），基于SEND是通过响应主体返回给客户端信息    执行多次
res.end：类似于原生的操作，结束响应并返回内容
res.status：返回状态码
res.set：设置响应头信息 res.set（[KEY],[VALUE]) res.set({KEY:VALUE,...});

res.set('ss',100)
res.set({
    ss:100,
    a:200
})
*/


function readFile(path, encode) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encode, (err, res) => {
            if (!err) {
                resolve()
            }
            else {
                reject()
            }
        })
    })
}
