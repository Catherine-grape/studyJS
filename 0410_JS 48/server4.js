let qs=requrie('qs')
const bodyParser = require('body-parser');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.get('/list', () => {//服务响应的接口
    
});
// 更便捷的中间键  也就是post请求中冗余的代码  i body-parser
app.use(bodyParser.urlencoded({ extended: true }));//接收请求的内容挂在到req.body上 「和下边的代码是一摸一样的」

// 中间键的使用
// app.use(express.static('./client'))
// 自定义中间键「类似axios拦截器」
app.use(function (req, res, next) {//req res与下面的是通的
    // 每一个请求都会走此处函数 全局中间键
    console.log(123);
    req.ss = 100;//在所有接口被响应之前做点公共的事情  所有的请求在被处理之前都会走这个函数
    let data = '';
    req.on('data', (a) => {
        data += a;
    });
    req.on('end', () => {
        req.body =qs.parse(data) ;
        next();//如果不调用next的话代码不会往下走的。在当前函数中手动调用next()代码才会往下走
 
    })
})
app.post('/sign', (req,res) => {
    let ss = '';
    console.log(req.ss);
    req.on('data', (data) => {
        ss += data; //执行多次，接收几次就会执行几次
    });
    req.on('end', () => {
        console.log(ss);
        // 当此函数执行的时候，说明请求体已经接收完毕了
    })
})
app.listen(8080, () => {
    console.log('当前8080端口已经监听成功');
});


app.post('/sign', (req, res) => {
   console.log(req.body); 
})


// 什么时候放在下面
app.use(function (req,res) {
    // 只要代码走到这，说明资源路径不正确
    res.status(404)
    res.send(`您当前的路径${req.path}不正确`);
})


// 原地址 当前所在页面的地址


/* 
let express = require('express');
let {readFile} = require('./promiseFs');
let qs = require('qs');
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
// url:http://127.0.0.1:8080/list
// method:get
// params: lx=my (lx代表请求的类型，all代表。。。，此参数不是毕传的，如果不传默认lx的值为my)

// result：{
//   code:0,
//   codeText:'ok',
//   data:[xxxxxx] // []
// }

app.get('/list',(req,res)=>{
let {lx='my'} = req.query;
readFile('./dataa.json','utf8').then((result)=>{
  // '{"my":[1,2,3,4],"all":[1,2,3,43,]}'
  result = JSON.parse(result); //{"my":[1,2,3,4],"all":[1,2,3,43,]}
  result = result[lx];
  // console.log(result,37);
  res.status(200);
  res.send(JSON.stringify({
    code:0,
    codeText:'ok',
    data:result
  }))
}).catch((err)=>{
  res.status(500);
  res.send('server is bad')
})
});
app.get('/info',(req,res)=>{
  res.send('我是info的响应')
})
app.post('/sign',(req,res)=>{
  let chunk = ''; // 创建一个变量，用来接收请求体
  req.on('data',(data)=>{
    console.log(11);
    // 请求体是分段接收的,当前的回调函数会执行多，每执行一次就会接收一部分请求体，拼接到chunk中
    chunk+=data;
  });
  req.on('end', () => {
    // 当此处的函数执行的时候说明请求体已经接受完毕，可以正常使用chunk了
    console.log(chunk,100);
    // console.log(qs.parse(chunk)); // 把请求体转化为对象
	});
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

*/



/* 

let express = require('express');
let app = express();
app.listen(8888,()=>{
  console.log('8888端口已经启动成功')
});
app.use((req, res, next) => {
  // 如果允许所有源，(不安全、不能携带凭证)
  // 单一源，(安全、可以携带凭证，只能是单一源)

  // 可以配置一个白名单，可以允许多个指定的源向我方进行跨域请求
  // 当此中间键响应的时候可以在请求头里拿到当前的源，看看当前的源在不在ary中，如果在就把当前的源设置到Allow-Origin中
  console.log(req.get('Origin'),12);
  let origin = req.get('Origin'); // 当前请求的原地址http://127.0.0.1:5509
  let ary = ['http://127.0.0.1:5500','http://127.0.0.1:5501','http://127.0.0.1:5502']; // 配置白名单
  let ss = ary.includes(origin) ? origin:''
	res.header("Access-Control-Allow-Origin", ss);
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Allow-Headers", 'Content-Type,Content-Length,Authorization, Accept,X-Requested-With');
	res.header("Access-Control-Allow-Methods", 'PUT,POST,GET,DELETE,OPTIONS,HEAD');

  next();
});

app.get('/list',(req,res)=>{
  res.send('123456789')
});
*/