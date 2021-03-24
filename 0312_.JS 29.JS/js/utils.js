let utils = (function () {
    function queryUrlParams() {
        let obj = {};
        let reg = /([^#&?=]+)=([^#&?=])/g;
        url.replace(reg, ($$1, key, value) => {
            obj[key] = value;
        });
        url.replace(/#([^#&?=]+)/, ($1, value) => {
            obj.hash = value;
        })
    }
    function timeFormat(time,template='$$0年$$1月$$2日 $$3时$$4分$$5秒') {
        let ary = time.match(/\d+/g);//['2021']
        template = template.replace(/\$\$\d/g, (a, b)=>{
            let time = ary[b] || '00';//'2020'
            time=time.length<2?'0'+time:time
            return time;
        })
        return template
    }
    function qian(value) {
        value += '';
        let reg = /\d{1,3}(?=(\d{3})+$)/g;
        value = value.replace(reg, '$&,');
    }
    function screen(key, value) {
        if (value === undefined) {
            return document.documentElement[key] || document.body[key];
        } else {
            document.documentElement[key] = value
            document.body[key] = value
        }

    }
    function offset(ele) {
        let left = ele.offsetLeft;//上来先获取一下当前元素的左偏移量
        let top = ele.offsetTop;//获取一下当前元素的上偏移量
        let parent = ele.offsetParent;//获取当前元素的父级参照物
        while (parent !== document.body) {//直接parent  看一下当前元素的父级参照物是不是body，如果不是那就把父级参照物的左border和左偏移量累以及上border和上偏移量分别加给left和top
            left += (parent.clientLeft + parent.offsetLeft);
            // left+=parent.offsetLeft
            top += (parent.clientTop + parent.clientTop);
            parent = parent.offsetParent;
        }
        return {
            left,
            top
        }
    }
    return {
        queryUrlParams,
        timeFormat,
        screen,
        offset
    }
}())
/* utils.queryUrlParams(url);
utils.timeFormat(time);
utils.qian(num);
let url = 'https://www.baidu.com/s?wd=es6&rsv_spt=1&rsv_iqid=0xb68293590000d154';
let time = '2021-3-9 17:36:9'
let num = 12345678;
// exec match matchAll replace 利用正则类实现捕获
// 正则的懒惰性，默认值捕获符合规则的第一个内容 在正则后加修饰符g，就会取消正则的懒惰性
// 正则的贪婪性，在正则捕获的时候，能多捕获就不会少捕获（按照最多的次数处理）在正则的量词元字符的后面加？就可以取消其贪婪性

let str = "sdlk3jfh4sj5d"
let reg = /([a-z])(\d)([a-z])/;
reg.test(str);
console.dir(RegExp);// $0:k3f $1:k $2:3 $3:f */