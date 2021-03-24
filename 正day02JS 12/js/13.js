/* 
window 全局作用域：
变量提升：var a 
*/

console.log(a);//undefined
var a=0;//a=0;
if(true){
    //if中 只要条件成立立马赋值function，a：function a(){}
    console.log(a);//function a(){}
    a=1;//a=1 全局的赋值
    function a(){//对function的特殊记忆，会以function 函数作为分割线，上面的是(全局)公有的 ，下面的这个是私有作用域，，如果在下面进行改值的话，改的是私有的；
        a=21;//里面的a
        console.log(a);//21
    }
}
console.log(a);//1


/* 
window 全局作用域：
变量提升：var num  function fn
代码自上而下执行：
*/
console.log(num);//undefined
    console.log(fn);//undefined
    if([]){//转成布尔是true
        fn();//条件成立 fn：function fn(){console.log("a")} //"a"
        var num=100;//num=100
        function fn(){
            console.log("a")
        }
    }
console.log(fn);//function fn(){console.log("a")}
