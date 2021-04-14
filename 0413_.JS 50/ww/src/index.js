/* // import { ss, lastName, year } from './C.js';
// import * as aa from './C.js'; // 把当前导入的所有的白变量都存储到aa对象中
import fn from './C';

import './static/css/index.less'; // 把index.less文件的内容引入到打包的入口文件内

console.log(fn);



let A = require('./A');
let B = require('./B');
console.log(A.a);
console.log(B.b);
console.log(999000);
// console.log(ss); */

// 动态创建img标签
let img = document.createElement('img');
img.src = require('./static/imgage/moto.jpg');
document.body.appendChild(img);