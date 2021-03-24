/* 
上级作用域
变量提升
var a =2
function fn
function sum

重点！上级作用域是谁，跟此函数在哪执行没关系，只跟它原来在那定义有关系
*/
var a=2;
function fn(){
    //fn执行 形成一个私有作用域
    //a 不是私有的，向上级作用域找，fn的私有作用域的上机作用域是谁呢？看你的fn在哪定义的，上级作用域就是谁，fn这个函数在window全局作用域定义的，上级作用域就是window
    console.log(a);//2
}
fn();

//sum 执行形成一个私有作用域
function sum(){
    //变量提升 var a
    var a=3;//私有的a=3
    fn();//2
}
sum();