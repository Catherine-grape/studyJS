let data = null;
let xhr = new XMLHttpRequest;
xhr.open('get', './json/product.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        data = JSON.parse(xhr.response);
    }
}
xhr.send();

let cardBox = document.getElementById('cardBox');
renderHtml();
function renderHtml() {
    let str = ``;
    data.forEach(item => {
        str += `
       <li data-time=${item.time} data-hot=${item.hot} data-price='${item.price}'>
                <img src="${item.img}" alt="">
                <span>${item.title}</span>
                <span>${item.time}</span>
                <span>${item.price}</span>
                <span>${item.hot}</span>
            </li>
        `
    });
    cardBox.innerHTML = str;
}
let btn = document.getElementsByTagName('a');
let list = document.getElementsByTagName('li');
list = Array.from(list);
for (let i = 0; i < btn.length; i++) {
    btn[i].index = i;
    btn[i].flag = -1;
    btn[i].onclick = function (){
        this.flag *= -1;
        liSort.call(this);
        clearArrow.call(this);
        addArrow.call(this);
    }
}

function liSort() {
    let ary = ['data-time','data-hot','data-price'];
    let type = ary[this.index];
    list.sort((a, b) => {
        a = a.getAttribute(type);
        b = b.getAttribute(type);
        if (this.index == 0) {
            a = a.replace(/-/g, '');
            b = b.replace(/-/g, '');
        }
        return (a - b) * this.flag;
    });
    for (let i = 0; i < list.length; i++) {
        cardBox.appendChild(list[i]);
    }
}
function clearArrow() {
    for (let i = 0; i < btn.length; i++){
        if (btn[i] !== this) {
            btn[i].children[0].classList.remove('bg');
            btn[i].children[1].classList.remove('bg');
            btn[i].flag = -1;
        }
    }
}
function addArrow() {
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