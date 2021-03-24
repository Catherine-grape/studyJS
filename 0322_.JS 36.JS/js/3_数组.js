let arr = [100, 200, 300];
function myForEach(callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i],i)
    }
}
Array.prototype.myForEach = myForEach;
arr.myForEach((item, index) => {
    console.log(item,index);
})


function myMap(callback) {
    let ary = [];
    for (let i = 0; i < this.length; i++){
      let res=  callback(this[i], i);
        ary.push(res);
    }
    return ary;
}
Array.prototype.myMap = myMap;
arr.myMap((item, index) => {
    console.log(item, index);
});

// for in遍历所有可枚举的属性 包括原型上的属性

/*  for in 在这里不合适
 function myMap(callback) {
    let ary = [];
    for (let key in this) {
        if (!this.hasOwnProperty(key)) break;
        let res = callback(this[key], key);
        ary.push(res);
    }
    return ary;
}
Array.prototype.myMap = myMap;
arr.myMap((item, index) => {
    console.log(item, index);
}); */

// indexOf
let str = 'asdfgsdf';
console.log(str.indexOf('asd'));//0