let str = 'https://www.baidu.com/s?wd=es6&rsv_spt=1&rsv_iqid=0xb68293590000d154&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=1&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug=es6&rsp=5&inputT=1305&rsv_sug4=1306#index'
 function queryUrlParams() {
    // this-->url
  
    let res = this.indexOf('?');
    let hashIndex = this.indexOf('#');
    let queryStr = this.slice(res + 1, hashIndex);
    let hash = this.slice(hashIndex + 1);
    let queryAry = queryStr.split('&');
    let obj = {};
    for (let i = 0; i < queryAry.length; i++){
        let item = queryAry[i];
        let ary = item.split('=');
        obj[ary[0]]=ary[1]
    }
    obj.hash = hash;
    return obj;
}

String.prototype.queryUrlParams = queryUrlParams;
url.queryUrlParams();


let reg = /([^?=&#]+)=([^?=&#]+)/g;
// console.log(str.match(reg));
function queryUrlParams() {
    let obj = {};
    let reg = /([^?=&#]+)=([^?=&#]+)/g;
    this.replace(reg, function (...arg) {
        // console.log(arg);
        let key = arg[1];
        let value = arg[2];
        obj[key] = value;
    })
} 
function queryUrlParams(key) {
    let obj = {};
    let reg = /([^?=&#]+)=([^?=&#]+)/g;
    // 利用replace可以进行捕获的特点
    this.replace(reg, ($1, $2, $3) => { obj[$2] = $3; });
    /* 
    $1 代表的是大正则捕获的内容
    $2 捕获的是等号左边的属性名
    $3 捕获的是等号右边的属性值
    */
    this.replace(/#([^?=&#]+)/, function ($1, $2) { obj.hash = $2 });
    return key?obj[key]:obj;//如果用户点击实参了，那就返回key属性名代表的属性值，如果用户没有传实参，那就返回obj
}
String.prototype.queryUrlParams = queryUrlParams('wd');
let res = url.queryUrlParams();

let url = 'https://www.baidu.com/s?wd=es6&rsv_spt=1';
function queryUrlParams() {
    // this-->url
    let obj = {}
    let reg = /([^?=&#]+)=([^?=&#]+)/g;
    this.replace(reg, ($1, $2, $3) => { obj[$2] = $3 });
    this.replace(/#([^?=&#]+)/, function ($1, $2) { obj.hash = $2 });
    return obj;
}
String.prototype.queryUrlParams = queryUrlParams;

console.log(res);