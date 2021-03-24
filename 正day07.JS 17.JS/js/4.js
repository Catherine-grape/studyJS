//原型上放置的都是方法 都是公用的
function Fn(name){
    this.name=name;
    this.age=age;
    this.say=function(){
        console.log('姓名是${this.name},年龄是${this.age}')
        //自己有没有 
    }
}
Fn.prototype.say=function(){
    console.log('Fn类：姓名是${this.name},年龄是${this.age}')
    //自己没有向上查找  属性的查找机制是原型链
}
Object.prototype.say=function(){
    console.log('基类：姓名是${this.name},年龄是${this.age}')
    //如果基类也没有就会报错

}
let f1=new Fn('张三',23);
let f2=new Fn('李四',25);
f1.say();
f2.say();

//已经存在的类可以修改 可以自行封装一个方法
let ary=[1,2,3,4];
ary.push(10);//返回值是改变后的数组长度 新增一个   __proto__上的push
console.log(ary)
Array.prototype .push=function(){
    //可以覆盖
    console.log('自己的push方法')
}
ary.push(1000);//[1,2,3,4,10]自己的push方法 数组上没有1000 __proto__：push：function(){console.log('自己的push方法')}
Array.prototype.mypush=function(...arg){//用了剩余运算符
    console.log('自己的push的方法');
    for(let i=0;i<arg.length;i++){//arguments.length 功能能实现 代码尽量少
        this[this.length]=arg[i]
    }
    return this.length//与原生的push方法一样
}
ary.mypush(1000)//实现这个mypush的方法
console.log(ary);

//链式调用  联系点的  显示点sort 再点pop
let ary2=[1,2,3,7,3,5,4];
ary2.sort((a,b)=>{
    return a-b
});
ary2.pop();
ary2.push(1000);//把这个转成链式
ary2.sort((a,b)=>{
    return a-b
}).pop().toFixed(2)
//想实现链式调用的大前提是 上一个函数的返回结构需要能够调用到下一个函数
console.log(ary2)
console.log(res);//7.00

Array.prototype.mypush = function (...arg) {
    // console.log('自己的push方法')
    for (let i = 0; i < arg.length; i++) {
      this[this.length] = arg[i]
    }
    return this.length
  }