/* es6的其他常用语法
ES6：
1.let和const
    1.let和const没有变量提升
    2.let不能够重复声明同一个变量
    3.let可以生成块级作用域
    4.let可以解决暂时性死区
    5.let在全局声明的变量不会给window增加键值对
    1.const声明的常量不允许被修改，在声明的时候必须赋值

2.箭头函数
    1.箭头函数没有this，如果非要在箭头函数里使用this，那就会往上一级作用域查找
    2.没有arguments
    3.在书写箭头函数的时候，如果只有一个形参，那可以省略形参小括号
    4.如果箭头函数只有return一行代码，可以省略return和大括号
    5.如果return的是一个对象，如果要省略的话，给省略之后的结果加一个小括号let a = () => ({});
    6.给函数的形参赋默认值（箭头函数和普通函数都可以）
*/
let a = (s = 100) => ({}); a(1);
/* 
3 ...运算符
    1.收缩运算符(把所有的实参 一般都在函数的形参的位置使用)
    2.展开运算符(一般用在数组的前面，或者对象的前面)

*/
function fn(...a) {
    console.log(a);//[1,2,3,4]
    console.log(...a);//1 2 3 4
}
fn(1, 2, 3, 4)

// 利用...实现浅克隆
let ary = [1, 2, 3, 4];
let ary1 = [...ary];
let ary2 = ary.slice(0);
console.log(ary1);//[1, 2, 3, 4]
console.log(ary === ary1);//false 空间地址不同

let obj = { name: 100 };
let obj1 = { ...obj };//克隆obj
console.log(obj1);//{name:100}


// 深克隆
let arr = [{ name: 100 }, 200, 300];
let arr1 = [...ary];
arr[0].name = 800;
console.log(arr1);//[{name:800},200,300]

//利用JSON.parse和JSON.stringify可以实现深克隆
let arr = [{ name: 100 }, 200, 300];

let arr2 = JSON.stringify(arr)//'[{ name: 100 }, 200, 300]'
let arr2 = JSON.parse(JSON.stringify(arr))//[{ name: 100 }, 200, 300]
arr[0].name = 800;
console.log(arr1);////[{ name: 100 }, 200, 300]


/* 
4.解构赋值
// 数组的解构赋值靠顺序
*/
let ary = [100, 200, 300, 400,[500]];
let a = ary[0];
let b = ary[3];
let c = ary[4][0];

let [a, b, c] = ary;//在当前作用域下创建三个变量a，b，c，他们的值按照位置去右边的数组里去获取
// 在建构赋值之前得保证等号左右两边的结构是一样的

let [a,,, b] = [100, 200, 300, 400];
console.log(a, b);//100 400
let [a, ...b] = [100, 200, 300, 400];//100[200,300,400]

let [a, b, c, d=3] = [100, 200, 300];//100 200 300 undefined 给d赋默认值100 200 300 3

//在当前作用域下创建两个变量 a=100，b=500
let [a, , , [, b]] = [100, 200, 300, [400, 500]]

// 对象的解构赋值 靠名字
let obj = {
    name: 100,
    age: 200,
    
}
let { age } = obj;//在当前作用域下创建一个age变量，它的值是200


// 对象的解构赋值
let obj = { name: 100, age: 200 };
let { age, name } = obj;//在当前作用域创建
let { age: ss } = { age: 100 };//在解构的时候可以改名字  

let obj = {
    name: 'ss',
    age: 10,
    sex: '男',
    friends: ['黑猫警长', '葫芦娃', '奥特曼']
};
// 我想从上边的obj对象中解构出它的name和它的第一个朋友的名字
let { name, friends: [first] } = obj;
console, log(name, first);//'ss' '黑猫警长'


// 在函数中使用解构赋值
function fn({ a, b } = {}) {//直接把实参进行解构，也可以给解构的地方赋默认值
    console, log(a, b);
    
}
fn({ a: 1, b: 2 });
fn();

// ----------
// 模版字符串 `` 一般数据渲染的时候使用${}固定   for循环加模板字符串渲染
let ss = 100;
let str = '12' + ss + '3';
let str1 = `12${ss}3`

let ary = [
    {name:'葫芦娃',age:100},
    {name:'樱桃小丸子',age:80},
    {name:'舒克和贝塔',age:70},
]

let str = ``;
ary.forEach(item => {
    str += `
    <li>
    <span>${item.name}</span>
    <span>${item.age}</span>
    </li>`
})
console.log(str);
box.innerHTML=str