// node内置的url模块
let url = require('url'); // 解析url的
let path = require('path'); // 获取路径的
let str = 'https://www.baidu.com:8080/list?name=1&age=2#index';
let res = url.parse(str, true);
// 第二个参数true就是把当前字符串的参数转化成对象的格式，存储到query属性上
// console.log(res);
// console.log(__dirname); // 当前模块的绝对路径
// console.log(__filename); // 当前模块的绝对路径+模块名字  webpack 获取文件名字
// console.log(path.resolve()); // 当前项目的绝对路径(应该是打开终端的路径)

// web静态资源服务器
let fs = require('./promiseFs');
let http = require('http');
let url = require('url');
let mime = require('mime');

let server = http.createServer((req, res) => {
    // console.log(req.url); // '/index.html?name=1&age=2'
    // req.url 代表的是当前请求的url(不包含协议、域名、端口号)
    let { query, pathname } = url.parse(req.url, true); // index.html 
    let suffixREG = /\.([0-9a-zA-Z]+)$/;   //['.html','html']
    let suffix = suffixREG.test(pathname) ? suffixREG.exec(pathname)[1] : null; // 'html'
    suffix = mime.getType(suffix);


    fs.readFile(`./clinet${pathname}`, 'utf8').then((result) => {
        res.writeHead(200, {
            'content-type': 'text/css'
        });
        res.end(result);
    }).catch(() => {
        res.writeHead(404, {});
        res.end('not found!');
    });
    // fs.readFile(`./clinet${pathname}`,'utf8',(err,result)=>{
    // 	res.end(result)
    // })
});
// console.log(mime.getType('js'),33); // 'text/css'
server.listen(8080, () => {
    console.log('server is create success！listening on 8080 port！');
});



/* 

function ss(ary,num){
  let arr = [];
  for(let i = 0;i<ary.length;){ // 4 8
      arr.push(ary.slice(i,i+=num)); // 0,4    4,8   8,12
  }
  return arr;
}
*/