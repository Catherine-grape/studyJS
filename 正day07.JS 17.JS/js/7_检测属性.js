var obj={
    name:"珠峰",
    age:12
}
obj.toString();
Object.prototype.qqq=123;
//for in 循环一般用来循环对象
//for in 是可以循环到公有属性的（自己添加的，内置的公有属性是循环不到的）
//hasOwnProperty 是用来判断一个属性是否是一个对象的私有属性
//用法： 对象.hasOwnProperty('属性名') 是私有属性的话返回true，不是返回false
for(var k in obj){
    if(obj.hasOwnProperty(k)){
        console.log('私有属性',k)
    }else{
        console.log('共有属性：',k)
    }
}
console.log(Object.keys(obj))
Object.keys(obj).map(function(item){
    console.log("私有属性:",item)
})

