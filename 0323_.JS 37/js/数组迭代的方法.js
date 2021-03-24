// 数组的迭代的方法
// forEach map every filter some reduce find
// filter 过滤，把数组中符合条件的每一项过滤出来放到一个新数组中进行返回。返回值是新数组
let arr = [100, 200, 300, 400, 500, 600, 700];
let res = arr.filter((item, index) => {
    // 当回调函数执行的时候，如果返回true，那当前的item就会被存放到新数组中
   // return true;//[100, 200, 300, 400, 500, 600, 700];浅克隆数组
    //return item > 300;//[400, 500, 600, 700] 
    // 没有return 返回undefined 就是[]
});


let  words = ['spray', 'limit', 'spray', 'exuberant', 'destruction', 'present'];
let arr = [];
const result = words.filter((item, index) => {//数组去重
    return words.indexOf(item) === index;
});


let ary = [
    {
        name: '陈晓光',
        sex:0
    },
    {
        name: '喵喵',
        sex:1
    },
    {
        name: '陈伟霆',
        sex:0
    },
    {
        name: '万茜',
        sex:1
    }
]
let tat = ary.filter((item, index) => {
    let {sex}=item
    // return  sex === 0 
    return !sex
});
console.log(tat);


// find 查找/发现 只返回符合条件的那一个值  循环数组 只要找到符合条件的那一项就停止循环，然后把符合条件的值return出来（循环次数不固定）。返回值是数组的某一项
// 如果数组中没有符合条件的值 返回undefined
let ary1 = [100, 200, 300, 400, 500, 600, 700];
let res1 = ary1.find((item) => {
    return item > 300;//400 只返回第一个找到的符合值
})
console.log(res1);



// some  只要数组中有符合规则的值就可以，返回true  返回值是布尔
// 如果数组中没有符合条件的值，那最后就会return false
let ary2 = [100, 200, 300, 400, 500];
let res2 = ary2.some((item) => {
  //  return item > 400;//ture
    return item > 500;//false
})
console.log(res2);

// every 数组中每一项必须都符合条件，最后every才会返回true，只要有一项不符合条件，就会返回false
let ary3 = [100, 200, 300, 400, 500, 600];
let res3 = ary3.every((item) => {
   // return item > 200;//false
    return item > 10;//true
})
console.log(res3);


// find的封装:找到符合规则的第一项，然后进行返回


function myFind(callback) {
    for (let i = 0; i < this.length; i++){
       let re= callback(this[i], i);
        if (re) {
            return this[i];
        } 
    }
   
}
Array.prototype.myFind = myFind;
let arr2 = [100, 200, 300, 400];
let res4 = arr2.myFind((item, index) => {
    return item > 200;
})