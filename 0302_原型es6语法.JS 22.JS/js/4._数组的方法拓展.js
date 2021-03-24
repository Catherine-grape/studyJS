//数组的拓展
// 类数组转数组 Array.from()
function fn() {
 let arr = Array.from(arguments);

}
fn(1, 2, 3, 4, 5)

// 将一组值转为数组 Array.of()
let arr1 = Array.of(1, 2, 3, 4, 5);//[1, 2, 3, 4, 5]


// 对象的新增方法
// Object.is()比较两个值是否相等，和===基本一致，两个值如果一样就是相等的（NaN）
Object.is(NaN, NaN);//true
Object.is('1', 1);//false

// 对象的合并
// Object.assign();用于对象的合并
let obj = { name: 1, age: 2 };
let obj1 = { sex: 3, ss: 100 };
let res = Object.assign(obj, obj1);//{name: 1, age: 2, sex: 3, ss: 100}  不会产生新的对象，只是把第二参数开始的对象合并到第一个参数对象中(返回值就是第一个实参的空间地址)
console.log(obj === res);//true  


//let res = { ...Object.assign(obj, obj1) };
let res = Object.assign({}, obj, obj1, obj2);//如果想打多个对象合并成一个新的对象，那就在执行Object.assign的时候第一个参数传空对象就可以了

let res = { ...obj, ...obj1, ...obj2, ff: 789 }

// es5对象上的新增方法Object.keys()  Object.values();快速的把对象中的属性名/值拿过来放在数组中，
let obj = { a: 1, b: 2, c: 3 };
let res = Object.values(obj);//[1, 2, 3]
let res1 = Object.keys(obj);//["a", "b", "c"]


console.log(typeof a);//暂时性死区 还没有声明 就检测 报的是undefined