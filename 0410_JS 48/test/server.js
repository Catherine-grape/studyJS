let express = require('express');
let app = express();
app.listen(8888,()=>{
  console.log('8888端口已经启动成功')
});
app.use((req, res, next) => {
  // 如果允许所有源，(不安全、不能携带凭证)
  // 单一源，(安全、可以携带凭证，只能是单一源)

  // 可以配置一个白名单，可以允许多个指定的源向我方进行跨域请求
  // 当此中间件响应的时候可以在请求头里拿到当前的源，看看当前的源在不在ary中，如果在就把当前的源设置到Allow-Origin中
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