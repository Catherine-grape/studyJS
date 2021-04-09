// web静态资源服务器
let fs = require('./promiseFs');
let http = require('http');
let url= require('url');
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
});


//text/html   application/javascript