let express = require('express');
const { fstat } = require('fs');
let { readFile } = require('./promiseFs');//fs.readFile
let app = express(); // createServer(()=>{})
app.listen(8080, () => {
    console.log('server is create success！listening on 8080 port！');
});
// /list  api url
app.get('/list', (req, res) => {
    let { lx = 'my' } = req.query;// {}
    readFile('./data.json', 'utf8').then((result) => {//result是"{"my":[1,2,3,4,5,6]}"
        result = JSON.parse(result);
        result = result[lx];//每次请求的数据不一样 写活的
        res.status(200);
        console.log(result, 14);
        res.send(JSON.stringify({
            code: 0,
            codeText: 'ok',
            data: result
        }));
    }).catch((err) => {
        res.status(500)
        res.send('server is no found');
    });
    
});
app.get('./info', (req, res) => {
    res.send('我是info的响应')
})
//静态资源是固定的

app.post('/sign', (req, res) => {
    let chunk = '';// 创建一个变量，用来接收请求体
    req.on('data', (data) => {//on  'data'固定的写死的 说明接收数据 开始接收请求体的内容   data请求体 // 请求体是分段接收的,当前的回调函数会执行多，每执行一次就会接收一部分请求体，拼接到chunk中
        chunk += data;
    });
    req.on('end', () => {
        let qs = require('qs');
        qs.parse('name=1&age=2');//{name:1,age:2}
        qs.stringify({ name: 1, age: 2 });//'name=1&age=2'
        // 当此处的函数执行的时候说明请求体已经接受完毕，可以正常使用chunk了
        console.log((chunk));
        console.log(qs.parse(chunk));// 把请求体转化为对象
    })
})

//通过请求头中的content-type来确定 请求体以什么数据形式转换


