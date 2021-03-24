/* 
重名的话该怎么处理？
重名的话，只声明一次，但是可以重复的赋值

变量提升阶段：a 已经声明过的不需要再声明了，
*/

/* console.log(a);//function a(){}
var a=3;
function a(){

} 
*/
console.log(a)//2
function a(){
    console.log(1);
}
function a(){
    console.log(2);
}