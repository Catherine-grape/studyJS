// 封装timeFormat
/* 
后台 network 随便一个接口 然后headers date 后台的时间

*/
let str = '2021-3-9 17:36:9';//'2021年03月09日 17时36分09秒'
function timeFormat(template = '$0年$1月$2日 $3时$4分$5秒') {
    //this-->str
    // 在替换之前你得先拿到当前的时间
    let ary = this.match(/\d+/g);//['2021','3','09','17','36','9']
    // template = '$0年$1月$2日 $3时$4分$5秒'
    template= template.replace(/\$(\d)/g, function ($1,$2) {
        console.log($2);//0
        let time = ary[$2]||"00";//如果捕获不到时间的话，就赋值一个默认值‘00’
        time = time.length == 1 ? '0' + time : time;
        return time;//不足十位补0
    })
    return template;
}
String.prototype.timeFormat = timeFormat;
let res = str.timeFormat('$0/$1/$2 $3时$4分$5秒');
console.log(res)