/* 
变量提升第二个特殊性：变量提升阶段：只对等号左边的进行变量提升：
var fn
*/


console.log(fn);//undefined
console.log(fn(1,2));//undefined(1,2);报错 fn is not a function
var fn=function (n,m){
    return n+m;//return 3+4
}
console.log(fn(3,4));//7





