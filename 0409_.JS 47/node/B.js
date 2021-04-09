/* let a = 800;
function fn() {
    console.log(999);
} */
//自定义模块
let A = require('./A.js');//把当前A模块中的东西导入到B中
let B = require('./B.js');//A模块执行了  { a: 100, fn: [Function: fn] }
// 模块的导入是同步的，导入不完下面的代码不会执行
// 导入的时候，被导入的模块里面的代码会从上往下执行一遍
// 如果重复导入同一个模块，那模块里的代码只会执行一次
console.log(A);

// 内置模块
let url = require('url');//用的时候不需要写路径，直接写模块名即可
console.log(url);/* { a: 100, fn: [Function: fn] }
fivegl@bogon node % node B.js
A模块执行了
{ a: 100, fn: [Function: fn] }
{
  Url: [Function: Url],
  parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  URL: [class URL],
  URLSearchParams: [class URLSearchParams],
  domainToASCII: [Function: domainToASCII],
  domainToUnicode: [Function: domainToUnicode],
  pathToFileURL: [Function: pathToFileURL],
  fileURLToPath: [Function: fileURLToPath]
} */


// 第三方模块
let express = require('express');//在node_modules（npm下载的）可以不用路径

let expres = require('aaa');