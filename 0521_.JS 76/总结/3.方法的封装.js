//---------------
// 数组去重

// let ary = [1, 1, 23, 2, 3, 1, 2];
// // 1、循环数组的每一项
// // 2、拿当前项和后面的数依次做比较，如果后面的数和当前项相等了，那就在原数组里删除相等的数(splice)

// function unique(ary) {
//   for (var i = 0; i < ary.length; i++) {
//     let item = ary[i] // 数组的每一项  1
//     // 外面大循环每循环一次，这个小循环就会从头到尾循环一遍
//     for (var j = i + 1; j < ary.length; j++) {
//       let cur = ary[j] // 当前项后面的每一项
//       // 如果当前项和后面的某一项相等了，条件成立
//       if (item === cur) {
//         ary.splice(j, 1); // 从原数组中删除重复的那一项
//         j--; // 为了防止数组塌陷，删除之后要把j--
//         // 从数组中删除一项，后面的每一项的索引都得往前挪一位（数组塌陷）
//       }
//     }
//   }
//   return ary
// }
// console.log(unique(ary));  // 改变原数组
//-----------------------
// function fn(ary) {
//   let newObj = {} // 创建一个新对象用来存储键值对
//   // 循环数组的每一项
//   for (var i = 0; i < ary.length; i++) {
//     // 检测一下当前项在对象里有没有，如果有，那以下条件就成立
//     // 也就是说以前就存储过这一项（证明已经是重复项）
//     if (newObj[ary[i]] !== undefined) {
//       // ary.splice(i, 1); // 删除重复项
//       // i--; // 防止数组塌陷
//       ary[i] = ary[ary.length - 1]; //用数组的最后一项替换重复的那一项 
//       ary.length--; // 删除数组最后一项
//       i-- // 把替换的值还要检测一遍
//       // continue;

//     } else {
//       // 如果对象中没有这个属性名对应的属性值，那就新增这个键值对
//       newObj[ary[i]] = ary[i];
//     }
//   }
// }
// fn(ary)
//---------------------
// [...new Set([1,2,1,2,1,2])]

//***************************************************************************
// queryUrlParams
// let url = 'https://www.baidu.com?wd=自行车&name=333&age=18#index'
// function fn(url) {
//   let index = url.indexOf('?');
//   let params = url.substring(index + 1);
//   // 'wd=自行车&name=333&age=18'
//   let ary = params.split('&');
//   // ["wd=自行车", "name=333", "age=18"]
//   console.log(ary);
//   let obj = {}; // 创建一个存放参数的对象
//   for (var i = 0; i < ary.length; i++) {
//       let newAry = ary[i].split('=');
//       // 把数组的每一项以分隔符 '='分割为数组

//       obj[newAry[0]] = newAry[1]

//   }
//   return obj
// }
// console.log(fn(url))

//******************************************************************* */
// 数组的排序
// let ary = [12,23,11,34,10,9];

// 冒泡排序
// function buble(ary){
//     // 控制的比较的轮数
//     for (var i = 0; i < ary.length-1; i++) {
//         // 控制的是每一轮比较的次数
//         for (var j = 0; j < ary.length-1-i; j++) {
//             // 如果前一项大于后一项就两两交换位置
//            if(ary[j]>ary[j+1]){
//                let temp = ary[j];
//                ary[j] = ary[j+1];
//                ary[j+1] = temp;
//            }
//         }
//     }
//     return ary
// }
// console.log(buble(ary))

// let a = 1;
// let b = 2;
// a = a+b;
// b = a-b;
// a = a-b;

// 插入排序
// let ary = [12,23,11,34,10,9];
// function insert(ary) {
//   let handAry = []; // 用来存放手里的牌
//   handAry.push(ary[0]); // 抓了第一张牌

//   for(let i = 1;i<ary.length;i++){
//     let item =ary[i];
//     for(let j =handAry.length-1;j>=0;j--){
//       let cur = handAry[j]
//       if(item>cur){
//         handAry.splice(j+1,0,item);
//         break;
//       }
//       if(j === 0){
//         handAry.unshift(item)
//       }
//     }
//   }
//   return handAry

// }
// console.log(insert(ary))

//-----------
// 快速排序        let ary = [3,4,2,1];
// function quick(ary) {
//   // 4、如果数组中的length小于等于1，那就结束递归，把原数组return出去
//   if (ary.length <= 1) {
//     return ary
//   }
//   // 1、获取中间的一项作为基准（并且把原数组中的那一项删除）
//   let middleIndex = Math.floor(ary.length / 2) // 拿到中间项的索引
//   let middleValue = ary.splice(middleIndex, 1)[0];
//   // 2、创建两个数组，循环数组的每一项和基准做比较，如果每一项小于基准，就放到左边数组，反之放右边
//   let leftAry = [];
//   let rightAry = [];
//   for (var i = 0; i < ary.length; i++) {
//     if (ary[i] < middleValue) {
//       leftAry.push(ary[i])
//     }
//     else {
//       rightAry.push(ary[i])
//     }
//   }

//   // 3、不断重复1和2步骤（递归）
//   return quick(leftAry).concat(middleValue, quick(rightAry))
// }
// console.log(quick(ary))

//********************************************************************************* */

// 防抖函数
// const debounce = (fn,delay= 1000)=>{
//   let timer = null;
//   return function(...params){
//     clearTimeout(timer);
//     timer = setTimeout(()=>{
//       fn.apply(this,params)
//     },delay)
//   }
// }

// let res = debounce(fn,3000);
//-----------------------------------
// 节流函数
// const throttle = (fn, delay = 500) => {
//   let flag = true;
//   return (...args) => {
//     if (!flag) return;
//     flag = false;
//     setTimeout(() => {
//       fn.apply(this, args);
//       flag = true;
//     }, delay);
//   };
// }

// const throttle = (fn, delay = 1000) => {
//   let time = 0;
//   return function (...args) {
//     let newTime = new Date().getTime();
//     if (newTime - time >= delay) {
//         fn.apply(this,args);
//         time = newTime;
//     }
//   }
// }

// let res = throttle(fn, 3000);

//********************************************************************* */
// 深克隆
// const newObj = JSON.parse(JSON.stringify(oldObj));
// 局限性：
// 1.他无法实现对函数 、RegExp等特殊对象的克隆
// 2.会抛弃对象的constructor,所有的构造函数会指向Object


//************************************************************************* */
// 模拟 instanceof
// L 实例
// R 构造函数
// function instance_of(L, R) {
//   let pro = R.prototype;
//   let int = L.__proto__;
//   while(true){
//     if(int === null) return false;
//     if(pro === L.__proto__){
//       return true;
//     }
//     int = int.__proto__;
//   }
// }

//*************************************************************************** */
// let str = "abcabcabcbbccccc";
// let num = 0;
// let char = '';

// // 使其按照一定的次序排列
// str = str.split('').sort().join('');
// // "aaabbbbbcccccccc"

// // 定义正则表达式
// let re = /(\w)\1+/g;
// str.replace(re, ($0, $1) => {
//   // $0是每一次捕获的大内容，$1是分组捕获的小内容

//   if ($0.length > num) {
//     // 如果当前捕获的内容的length大于之前的了，那就把最新的内容的length赋值为num，
//     num = $0.length;
//     char = $1;
//   }
// });
// console.log(`字符最多的是${char}，出现了${num}次`);

//***************************************************************************** */
// 找到a在b中第一次出现的位置(模拟indexOf的实现)
// a='34';b='1234567'; // 返回 2
// a='35';b='1234567'; // 返回 -1
// a='355';b='12354355'; // 返回 5

// function isContain(a,b){
//   for(let i = 0;i<b.length;i++){
//     let item = b[i];
//     if(item === a[0]){
//       let flag = b.substr(i,a.length);
//       if(flag === a){
//         return i;
//       }
//     }
//   }
//   return -1
// }
// let res = isContain(a,b);
// console.log(res);

//*****************************************************************************/
// 千分符
// function parseToMoney(num) {
//   num = parseFloat(num.toFixed(3)); // 最多保留三位小数
//   let [integer, decimal] = String.prototype.split.call(num, '.'); // 把整数部分和小数部分分开处理
//   integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,'); // $&代表捕获的大内容
//   return integer + '.' + (decimal ? decimal : ''); // 把处理好的整数部分和小数部分拼接到一起
// }

// console.log(parseToMoney(12345678.9));

// let ary = [1,2,3,[4,5,[6]]];
// let arr = [];
// function flat(ary){
//   for(let i = 0;i<ary.length;i++){
//     let item = ary[i];
//     if(!Array.isArray(item)){
//       arr.push(item)
//     }
//     else {
//       flat(item)
//     }
//   }
// }

// flat(ary)
// console.log(arr);
/**********************************************************************/
    // 斐波那锲数列 
    // 0,1,1,2,3,5,8,13,21,34,55
    // 0,1,2,3,4,5,6,7

    // 常规递归方法
    // function fib(n){
    //   if(n === 1 || n === 2){
    //     return 1;
    //   }
    //   return fib(n-1) + fib(n-2)
    //          
    // }
    // console.log(fib(1));


    // 利用创建一个数列的方法实现
    // function fn(n) { // n是数列的索引
    //   // 因为数列的
    //   if (n <= 0) return 0;
    //   if (n <= 1) return 1;
    //   let arr = [0, 1];
    //   let i = n + 1 - 2; // 因为数列的前两项是0和1，如果用户传递的n是5，那就是共有6项数列 ，但是数组中有两项了，那就在创建4项就ok  ，所以i等于 4

    //   while (i > 0) {
    //     // 给数组中增加数列，每增加一次就i--一次
    //     i--;
    //     let a = arr[arr.length - 2];
    //     let b = arr[arr.length - 1];
    //     arr.push(a + b);
    //     // 获取数组的最后两项的和作为下一次的数列的值
    //   }

    //   return arr[arr.length - 1]; // 把数组中最后一个数返回出去
    // }

    // console.log(fn(7));



