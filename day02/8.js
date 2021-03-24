/* 在js中检测数据类型的几种方式
1、typeof
2、constructor
3、instanceof
4、Object.prototype.toString.call（）
 */

 /*
 typeof 的一个结果首先是字符串类型的 
 "number"
 "string"
" boolean"
 "object"
" function"
注意：typeof null 的结果是"object"
*/
typeof 2
"number"
typeof "1"
"string"
typeof null
"object"
typeof false
"boolean"
typeof undefined
"undefined"
typeof{}
"object"
typeof[]
"object"
typeof/\d/
"object"
typeof function(){}
"function"