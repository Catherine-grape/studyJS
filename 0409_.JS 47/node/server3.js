// 只有ajax能控制请求方式  其他的都是get请求
// http://127.0.0.1:8060/index.html
// http://127.0.0.1:8060/list?name=1&age=2
// http://127.0.0.1:8060/info?name=1&age=2
let express = require('express'),
    app = express();
app.listen(8080, () => {
    console.log('server is create success！listening on 8080 port！');
});
app.use(express.static('./client'));//获取当前静态资源文件所在的位置
app.use((req, res, next) => {//如果当前请求的资源路径不正确的时候，会走这里
    res.status(404);
    res.send('NOT FOUND!');
    res.send('NOT FOUND!');
    res.send('NOT FOUND!');
    res.send('NOT FOUND!');
    // res.end();
})
app.get('list', (req, res) => {
    console.log(111);
    console.log(req.path, req.query, req.get('Accept'), 21);
    res.status(211);//unknown浏览器不知道这个211是什么意思
    res.set('set-Cookie', 'ss=100');
    res.type('application/json');//快速设置响应头中的content-type的值
    res.send(JSON.stringify({ code: 0, codeText: 'ok',data:[1,2,3,4,5]}));
});


let express = require('express');
let { readFile } = require('./promiseFs');
let app = express(); // createServer(()=>{})
app.listen(8080, () => {
    console.log('server is create success！listening on 8080 port！');
});

// http://127.0.0.1:8080/index.html
// http://127.0.0.1:8080/list?name=1&age=2
// http://127.0.0.1:8080/info?name=1&age=2
// app.get('/list',(req,res)=>{
//   console.log(111111);
//   // console.log(req.path,req.query,req.get('Accept'),12);
//   res.status(211);
//   res.set('set-Cookie','ss=100');
//   res.type('application/json'); // 可快速设置响应头中的content-type的值
//   res.send(JSON.stringify({code:0,codeText:'ok',data:[1,2,3,4]}));

// });

app.get('/list', (req, res) => {
    let { lx = 'my' } = req.query;// {}
    readFile('./data.json', 'utf8').then((result) => {

    }).catch(() => {

    })
});

app.use(express.static('./clinet'));// 获取当前静态资源文件所在的位置
app.use((req, res) => { // 如果当前 请求的资源路径不正确的时候，会走这里，
    res.status(404);
    res.send('NOT FOUND!11111');
    // res.end()
});

// req和res身上常见的属性和方法

// req
// *    req.path：存储请求地址的路径名称
// *    req.query：存储问号传参的相关信息（对象）
//      req.method：请求方式
//  *   req.get：获取响应头信息
//      req.body:代表请求体(但是请求体得做特殊处理才能使用)
// url.parse(req.url,true) // {patenname,query,port}
//----------------------------------
// res
// res.send：最常用的给客户端返回信息（可以传递对象/PATH/BUFFER/TXT等），基于SEND是通过响应主体返回给客户端信息
// res.end：类似于原生的操作,结束响应并返回内容
// res.status：返回状态码
// res.set：设置响应头信息  res.set([KEY],[VALUE])  res.set({KEY:VALUE,...})
// res.set('ss',100)
// res.set({
//   ss:100,
//   a:200
// })