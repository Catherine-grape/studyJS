import './static/css/index.less'; // 把index.less文件的内容引入到打包的入口文件内

let A = require('./A');
let B = require('./B');
console.log(A.a);
console.log(B.b);
console.log(999000)