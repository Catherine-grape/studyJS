import './static/css/index.less';//把index.less文件的内容引入打包到入口文件内

let A = require('./3');
let B = require('./4');
console.log(A.a);

console.log(B.b);