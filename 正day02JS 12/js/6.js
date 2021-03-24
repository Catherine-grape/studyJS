//var a=100;
function A(){
    //var a=200;
    return function fn(x,y){
        //var a=3;
        //100
        a=300;
    }
}

A()();//后面的()是return的后面小函数执行了
console.log(a);
/* var res=fn();
console.log(res); */
