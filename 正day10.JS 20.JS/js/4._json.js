// JSON 是一种前后端数据交互的一种格式 数据格式 与前端关系不大 可能与后端交互的时候 都感觉不到这个
// 差异在对象上 json都是对象
var obj={
    a:1,
    b:"nihao",
    c:true,
    d:[1,2,3,4]
}
/* 
// JSON.stringify (对象)把对象转成一个JSON字符串
// JSON. parse(JSON字符串) 把JSON字符串转成一个对象
var q=JSON.stringify(obj);
console.log(JSON.stringify(obj));//=>把一个对象 转成一个json字符串
console.log(q);
console.log(JSON.parse(q))
// 本地存储要求要用这个
//属性名必须加“”  如果属性值是字符串也必须用“”
var obj2={
    "a":1,
    "b":"nihao",
    "c":true,
    "1":100
}
// 赋值
var obj2=obj;

// 浅克隆
var obj3={};
for(let k in obj){
    // k是对象中的属性名
    obj3[k]=obj[k]
}
console.log(obj2==obj)//true
console.log(obj3==obj)//false
obj3.a=999;
obj3.d.push(100);
console.log(obj.a)//1
console.log(obj.d)//有100 因为克隆的时候把d的空间地址拿过来了

 */
// 深克隆：互不干扰
 let obj4=JSON.parse(JSON.stringify(obj));