/* 
一个函数有三种不同的身份，不同的使用环境下。ex：父亲的儿子 儿子的父亲 妻子的丈夫
函数的三种角色 
普通函数：普通函数的执行
构造函数（类）
普通对象
*/
function Fn(name){
    this.name=name;
    console.log("姓名是：",name)
}

Fn(1);
new Fn(1);//this是实例
Fn.play=function(){
    console.log("玩")
}
Fn.play();

//箭头函数能不能new  不能因为new靠的this
var Fn2=(name)=>{
    this.name=name;
    console.log("姓名是：",name)
}
new Fn(2)