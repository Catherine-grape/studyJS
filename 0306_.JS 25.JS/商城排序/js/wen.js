

let data = null;
let cardBox = document.getElementById('cardBox');
let nav = document.getElementsByTagName('a');
let list = document.getElementsByTagName('li');

let xhr = new XMLHttpRequest;
xhr.open('get', './json/product.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        data = JSON.parse(xhr.response);
    }
}
xhr.send();


function renderHtml() {
    let str = ``;
    data.forEach(item => {
        let { img, title, hot, price, time } = item;
        str += `
    <li data-time="${time}" data-hot="${hot}" data-price="${price}">
        <img src="${img}" alt="">
        <span>手机型号:${title}</span>
        <span>上市时间：${time}</span>
        <span>价格:${price}</span>
        <span>热度:${hot}</span>
      </li>
    `
    });

    cardBox.innerHTML = str;
}
renderHtml();
list = Array.from(list);

for (let i = 0; i < nav.length; i++) {
    nav[i].index = i;
    nav[i].flag = -1;
    nav[i].onclick = function () {
        this.flag *= -1;
        sortList.call(this);
        addArrow.call(this);
        clearArrow.call(this);
    }
}

function sortList() {
    let ary = ['data-time', 'data-hot', 'data-price'];
    let type = ary[this.index];
    list.sort((a, b) => {
        
        a = a.getAttribute(type);
        
        b = b.getAttribute(type);
        
        for (let i = 0; i < list.length; i++) {
            if (this.index == 0) {        
                a = a.replace(/-/g, '');
                b = b.replace(/-/g, '');
            } 
            cardBox.appendChild(list[i]);
        }
        return (a - b) * this.flag;
    });
}

function clearArrow() {
    for (let i = 0; i < nav.length; i++) {
        if (nav[i] !== this) {
            nav[i].children[0].classList.remove('bg');
            nav[i].children[1].classList.remove('bg');
            nav[i].flag = -1;
        }

    }
}

function addArrow() {
    let up = this.children[0];
    let down = this.children[1];
    if (this.flag > 0) {
        up.classList.add('bg');
        down.classList.remove('bg');
    }
    else {
        up.classList.remove('bg');
        down.classList.add('bg')
    }
}