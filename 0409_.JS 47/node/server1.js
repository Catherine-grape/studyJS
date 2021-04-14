// web静态资源服务器
/* let fs = require('./promiseFs');
let http = require('http');
let url= require('url');//专门用来解析url链接的
let server = http.createServer((req, res) => {
	// console.log(req.url);
	// req.url 代表的是当前请求的url(不包含协议、域名、端口号)

	let {query,pathname} = url.parse(req.url,true);

	fs.readFile(`./clinet${pathname}`,'utf8').then((result)=>{
		console.log(result,6);
		res.writeHead(200,{

		});
		res.end(result)
	}).catch(()=>{
		res.writeHead(404,{

		});
		res.end('not found!')
	});
	// fs.readFile(`./clinet${pathname}`,'utf8',(err,result)=>{
	// 	res.end(result)
	// })
});
server.listen(8080, () => {
	console.log('server is create success！listening on 8080 port！');
}); */


//text/html   application/javascript



// web静态资源服务器
let fs = require('./promiseFs');
let http = require('http');
let url = require('url');//专门用来解析url链接
let mime = require('mime');//根据后缀名识别当前文件

let server = http.createServer((req, res) => {
	// console.log(req.url); // '/index.html?name=1&age=2'
	// req.url 代表的是当前请求的url(不包含协议、域名、端口号)
	let { query, pathname } = url.parse(req.url, true); // index.html 
	let suffixREG = /\.([0-9a-zA-Z]+)$/;   //['.html','html']
	let suffix = suffixREG.test(pathname) ? suffixREG.exec(pathname)[1] : null; // 'html' -->捕获到当前的后缀名
	suffix = mime.getType(suffix);//通过后缀名获取contentTypede的值 例如：html-->text/html
	


	fs.readFile(`./clinet${pathname}`, 'utf8').then((result) => {
		res.writeHead(200, {
			'content-type': 'text/css'//根据请求的内容不同返回不同的格式
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

// express 后台一款框架专门用来写nodejs的  npm i express


