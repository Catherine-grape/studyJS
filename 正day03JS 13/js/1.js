var b=1;//作用域链

function fn(x){
    b=3;//看自己有没有有就是私有的
    //没有的话就向上查找 直到找到window  window有重新赋值没有给他window属性
}
fn();
console.log(b);//3

console.log(a);//undefined
console.log(fn);//undefined 不管成不成立只声明不定义  成立后function 立马变量提升 赋值
if(false){
    var a=3;
    function fn(){

    }
}

if(true){
    console.log(a);//function a(){}
    a=1;//改变的外面的 公有的 window的
    console.log(a);//1
    function a(){//以function作为分隔，上面的话改变的就是上级作用域，下面的话就是私有作用域
        a=21;
        console.log(a);//私有的 21
    }
}
//只对等号左边的进行变量提升
var f=function(){

}

function fn(){
return function(){

}
var a=3;//参与到变量提升 但是return后面的不会进行变量提升  return 下面的代码虽然不能执行了，但是变量提升，return 后面的值即使是函数，在当前作用域也不会进行变量提升
}
fn();//函数执行的时候