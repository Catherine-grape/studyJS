// set/map
let s = new Set([1, 2, 3, 2, 3, 4, 3, 2]);//引用数据类型 size类似于length
s = [...s];
let ary = [2, 3, 2, 324, 4, , 5, 6];
ary = [...new Set(ary)];
[...new Set('asdbabsdbas')].join('');//字符串也可以

[].forEach.call(arguments);
Map//升级版的普通对象  属性名可以任意结构


let  a = 1;
let b = 2;
[a, b] = [b, a];//2 1
 

function ss({ a, b }={}) {
    console.log(a, b);//1,2
}
ss({a:1,b:2})