/* 
node 的内置模块fs
    fs赋予了js在node环境下都可以对服务器上的文件进行读写操作的能力
    READ-DIR
    只有fs的路径是相对于当前项目的
*/

let fs = require('fs');
// readdirSync同步读取指定的项目的目录结构
let res = fs.readdirSync('./');
// 此刻的路径是相对于当前的项目来说的「不是相对于自身」
console.log(res);/* [
  '1.js',
  'A.js',
  'B.js',
  'C.js',
  'D.js',
  'E.js',
  'index.html',
  'node.js',
  'node_modules',
  'package-lock.json',
  'package.json'
] */
// fs.readdir(目录, callback =>{})
fs.readdir('./', (err, res) => {//当目录读取成功之后执行
    // 此函数是异步执行的
    // 当目录读取成功以后就会异步执行此回调函数
    console.log(100);
    console.log(err, res);
    // 形参err代表的是，读取错误
    // res代表的是读取的内容「不光可以读目录，还可以读文件」
});
console.log(200);


// 同步读取文件的内容
let item = fs.readFileSync('./index.css');
console.log(item);//Buffer<Buffer 23 62 6f 78 7b 0a 20 20 20 20 77 69 64 74 68 3a 20 31 30 30 70 78 3b 0a 20 20 20 20 68 65 69 67 68 74 3a 20 31 30 30 70 78 3b 0a 7d>  可以使用"utf8"



// node的内置模块fs
// fs赋予了js在node韩环境下可以对服务器上的文件进行读写操作的能力
// READ-DIR
let fs = require('fs');
//fs里的方法在执行的时候，路径是相对于当前的项目来说的

// 1.readdirSync同步读取指定的项目的目录结构
    // let res = fs.readdirSync('./');

// console.log(res);
// 2.fs.readdir(path,callback)异步读取目录
    // fs.readdir('./ww',(err,res)=>{
    //   // 次函数是异步执行的
    //   // 当目录读取成功以后就会异步执行此回调函数
    //   // console.log(200);
    //   // 形参err带表的是：错误的内容
    //   // res代表的是：读取的内容
    //   console.log(err,res,15);
    // });
    // console.log(100);
//-------------------------------------
  // 同步的读取文件的内容
  // 3.fs.readFileSync([path],[encoding]) ：不设置编码格式，默认得到的是Buffer文件流（编码）格式的数据，设置UTF8，得到的结果是字符串（例如:JSON格式、HTML或者CSS等格式）；但是对于富媒体资源（例如：图片、音视频等）我们读取和传输的过程中就是基于BUFFER文件流格式操作的，所以不要设置UTF8读取；

  // (如果读取的是富媒体资源，就用默认的buffer格式就好，读取其他的使用utf8格式就好)
//  let res = fs.readFileSync('./apple.jpg','utf8');
//  console.log(res);
// utf8格式读取的内容都是字符串
// 4.fs.readFile('./index.css','utf8',(err,res)=>{
//   console.log(res);
// });

//------------------------------
// 当想文件写入内容的时候，如果当前目录没有这个文件，就会创建一个新文件，如果有，那就在文件里去写入，
// 他的写入是覆盖性的
// 5.fs.writeFileSync('./ss.txt','000','utf8')
// 6.fs.writeFile('./ss.txt','1234','utf8',(err,res)=>{
//   console.log(err,res); // null undefined

// });

// 7.fs.appendFileSync('./ss.txt', 'hello world~~', 'utf8'); // 追加性的写入，在执行的基础之上进行写入

//-------------------------------
// 把文件ss.txt复制一份，存储到a.txt中(如果没有a.txt就会创建一个新文件)
// fs.copyFile('./ss.txt', './a.txt', err => {
// 	console.log(err);
// });

//----------------------------
//=>创建目录
//  fs.mkdir('./www', err => {
//   console.log(err);
// }); 

//=>删除目录（但是一定要保证目录中不在有文件，否则不让删除）
//  fs.rmdir('./www', err => {
//   console.log(err);
// }); 

//=>删除文件
// fs.unlink('./index.css', err => {});