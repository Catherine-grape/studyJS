let str = 'good good study day day up';
str = str.replace(/\b[a-z]/g, function (...ary) {
    return ary[0].toUpperCase()
});
let str = 'good good study day day up';
str = str.replace(/\b[a-z]/g, function (...ary) {
    return ary[0].toUpperCase();
});



function format(num) {
    let reg = /\d{1,3}(?=(\d{3})+$)/g;
    return (num + '').replace(reg, '$&,');
}
function format(num) {
    let reg = /\d{1,3}(?=(\d{3})+$)/g;
    return (num + '').replace(reg, '$&,')
}



let str = '2021-3-9 17:36:9'
String.prototype.timeFormat = function timeFormat(template = '$0年$1月$2日 $3时$4分$5秒') {
    let ary = this.match(/\d+/g);
    template = template.replace(/\$(\d))/g, function ($1, $2) {
        console.log($2);//0
        let time = ary[$2] || "00";
        time = time.length == 1 ? '0' + time : time;
        return time;
    })
    return template;
}
let res = str.timeFormat('$0年$1月$2日 $3时$4分$5秒');
console.log(res);
String.prototype.timeFormat = function timeFormat(template = '$0年$1月$2日 $3时$4分$5秒') {
    let ary = this.match(/\d+/g);
    template = template.replace(/\$(\d)/g, function ($1, $2) {
        let time = ary[$2] || '00';
        time = time.length == 1 ? '0' + time : time;
        return time;
    });
    return template;
}



let str = 'https://www.baidu.com/s?wd=es6&rsv_spt=1&rsv_iqid=0xb68293590000d154&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=1&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug=es6&rsp=5&inputT=1305&rsv_sug4=1306#index';

String.prototype.queryUrlParams = function queryUrlParams(key) {
    let obj = {};
    let reg = /([^?=&#]+)=([^?=&#]+)/g;

    this.replace(reg, ($1, $2, $3) => {
        obj[$2] = $3
    });
    this.replace(/#([^?=&#]+)/, function ($1, $2) {
        obj.hash = $2
    });
    return key ? obj[key] : obj;
}

String.prototype.queryUrlParams = function queryUrlParams(key) {
    let obj = {};
    let reg = /([^?=&#]+)=([^?=&#]+)/g;
    this.replace(reg, ($1, $2, $3) => {
        obj[$2] = $3
    });
    this.replace(/#([^?=&#]+)/, function ($1, $2) {
        obj.hash = $2
    });
    return key ? obj[key] : obj;
}