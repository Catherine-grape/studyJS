// 1. 请求数据
// 1.创建一个ajax请求实例
// 2.打开一个请求（配置请求信息）
// 3.监听请求的过程
// 4.发送请求

let data = null;
let cardBox = document.getElementById("cardBox");
let nav = document.getElementsByTagName("a");
let list = document.getElementsByTagName("li");
let xhr = new XMLHttpRequest;
xhr.open("get", "./json/product.json", false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        data = JSON.parse(xhr.response);
    }
}
xhr.send();

// 2.渲染数据
// 循环data，生成若干个字符串的元素
// 把生成的字符串的元素插入到页面
function rederHtml() {
    let str = ``;
    data.forEach((item) => {
        let { img, title, hot, price, time } = item;
        str += `

        <li data-time="${time}" data-hot="${hot}" data-price="${price}">
                <img src="${img}" alt="">
                <span>手机型号：${title} </span>
                <span>上市时间：${time}</span>
                <span>价格${price}</span>
                <span>热度${hot}</span>
            </li>
            `
    });
    cardBox.innerHTML = str;
}
rederHtml();
// 给a元素绑定点击事件
list = Array.from(list);//这时就不需要映射关系了
for (let i = 0; i < nav.length; i++){
    nav[i].index = i;//用来作为区分用户点击的到底是那个a元素的标识，并且还会把index的值作为获取排序值的属性名
    nav[i].flag = -1;//存储当前a元素的排序的历史记录的
    nav[i].onclick = function () {
        this.flag *= -1;
        sortList.call(this);
        clearArrow.call(this);
        addArrow.call(this);
    }
}

function sortList() {
    let ary = ['data-time', 'data-hot', 'data-price'];
    let type = ary[this.index];
    list.sort((a, b) => {
        a = a.getAttribute(type);
        b = b.getAttribute(type);
        if (this.index == 0) {
           a= a.replace(/-/g, "");
            b=b.replace(/-/g, "");
        }
        return (a - b)*this.flag;
    });
    for (let i = 0; i < list.length; i++){
        cardBox.appendChild(list[i]);
    }
}

function clearArrow() {
    // this-->用户点击的元素a
    for (let i = 0; i < nav.length; i++){
        if (nav[i] !== this) {
             nav[i].children[0].classList.remove('bg');
            nav[i].children[1].classList.remove('bg');
            nav[i].flag = -1;
        }
    }
}
function addArrow() {
    // this-->用户点击的元素
    let up = this.children[0];
    let down = this.children[1];
    if (this.flag > 0) {
        up.classList.add('bg');
        down.classList.remove('bg');
    } else {
        up.classList.remove('bg');
        down.classList.add('bg');
    }
}