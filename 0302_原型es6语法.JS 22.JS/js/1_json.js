// js 只是一种数据格式，并不是数据类型
// 一般情况下都是从后来请求来的数据（json格式的数据）
// json数据类型所属的数据类型
// json格式的对象
// json格式的字符串

let obj ={ "name": 'haha' };//json格式的对象
let str = '{ "name": "haha"}'// json格式的字符串。
// Ajex传过来的都是字符串
JSON.stringify();//把对象转换成字符串
JSON.parse();//把字符串转换成对象

console.log(Json.parse(str));//对象
console.log(Json.stringify(obj));//字符串

