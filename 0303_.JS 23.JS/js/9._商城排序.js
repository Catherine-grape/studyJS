/* let ary = [34, 25, 67, 82, 11, 32, 44];
ary.sort((a, b) => {
    return a - b;
}); */
// 后台给的数据是对象
let ary = [
    {
        type: 'huawei p10',
        price: 3900
    },
    {
        type: 'iphone7',
        price: 3500
    },
    {
        type: 'iphone8',
        price: 3000
    }
];

/* let flag = true;
btn.onclick = function () {
    ary.sort((a, b) => {
        if (flag) {
            return a.price - b.price;
        }
        else {
            return b.price - a.price;
        }     
    });
    flag = !flag
} */

let flag = -1;
btn.onclick = function () {
    flag *= -1;
    ary.sort((a, b) => {
        return (a.price - b.price) * flag
    })
}


//修改字符串空格
let str = ' 1 ';
str.trim();//"1"
str.trimLeft();//"1 "
str.trimRight();//" 1"


//获取时间
console.time();
for (var i = 0; i < 1000; i++) {

}
console.timeEnd();