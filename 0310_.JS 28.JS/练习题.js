// 小练习


// 1.如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc' 
let str = 'AbCdeFg';
let reg = /[a-zA-Z]/g;
let res = str.replace(reg, function (arg) {
  if (arg == arg.toLowerCase()) { return arg.toUpperCase(); }
  if (arg == arg.toUpperCase()) { return arg.toLowerCase(); }
})

// 2. 完成如下需求
// 封装一个获取页面dom元素的方法
//  let ary = attr('class','box'); //=>获取页面中所有class为box的元素
//  let ary = attr('ss','100'); // 获取页面中所有行间属性ss为100的元素
function Obtain(a, b) {
  let res = document.getElementsByTagName('*');
  for (let i = 0; i < res.length; i++) {
    if (res[i].className === b) {
      return res[i]
    }
    if (res[i].getAttribute(a) === b) {
      return res[i]
    }
  }
}
Obtain('ss', '100')

// 3. 英文字母汉字组成的字符串，用正则给英文单词前后加空格

// 处理完成之后的str为 "好 good 好 study 天 day 天 up ！"
let str = "好good好study天day天up！";

let reg = /[a-z]+/g;
let res = (str + "").replace(reg, ' $& ');



// 4. 编写一个程序，将数组扁平化(有几种方法就写几种方法)
let arr = [1, 2, 3, [5, [6]]];
function getArr(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (Array.isArray(item)) {
      console.log(getArr(item))
      res = res.concat(getArr(item))
    } else {
      res.push(item);
    }
  }
  return res;
}
getArr(arr)

let arr1 = arr.toString().split(',');

// 处理完成之后的arr为 [1,2,3,4,5,6]

// 5.实现一个深克隆的方法(不能使用JSON.parse)
let ary = [1, 2, 3, 4, 5, 6];
let ary1 = [...ary]
let ary2 = [].concat(ary);