let str="http://www.baidu.com?skdjf=3lsk&askd=iejf&ksdjf=aoi"

function queryUrlParmas(str,sec) {
    let reg = /([^?=&#]+)=([^#?=&]+)/g;
    let res = {};
    str.replace(reg, ($1,key,value)=> {
        res[key] = value;
    });
    str.replace(/#([^?=&#]+)/, ($1, hash) => {
        obj.hash = hash;
    })
    return sec === undefined ? res : obj[key];
}
queryUrlParmas(str)


let data = null;
let xhr = new XMLHttpRequest;
xhr.open('get', './json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 & xhr.status == 200) {
        data = JSON.parse(xhr.response);
    }
}
xhr.send();

// 渲染数据 `` forEach
let cardBox = document.getElementById('cardBox');
let btn = document.getElementsByTagName('a');
let list = document.getElementsByTagName('li');
renderHTML()
function renderHTML() {
    let str = ``;
    data.forEach(item => {
        str += `
    <li data-time="${item.time}" data-hot="${item.hot}" data-price="${item.price}">
                <img src="./img/1.jpg" alt="">
                <span>2019-08-21</span>
                <span>500</span>
                <span>12</span>
            </li>
    `
    })
    cardBox.innerHTML=str
}