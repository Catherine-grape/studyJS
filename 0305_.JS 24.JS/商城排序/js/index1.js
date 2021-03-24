/* 

1、向服务器发送请求，获取到对应的数据
    1、创建一个ajax实例
    2、打开一个请求，基于get请求同步完成
    3、监听服务器返回的状态，如果状态码是4，而且请求状态是200，那就证明数据请求成功
    4、发送ajax请求
*/
let data = null;
let cardBox = document.getElementById('cardBox');

let xhr = new XMLHttpRequest;
xhr.open('get', './json/product.json', false);
xhr.onreadystatechange = function () {
  if (xhr.status === 200 && xhr.readyState === 4) {
    data = xhr.responseText
  }
}
xhr.send();
data = JSON.parse(data);

renderHTML()
function renderHTML() {
  let htmlStr = ``;
  data.forEach((item) => {
    htmlStr += `<li data-time="${item.time}" data-hot="${item.hot}" data-price="${item.price}">
        <img src="${item.img}" alt="">
        <span>${item.title}</span>
        <span>${item.time}</span>
        <span>${item.hot}</span>
        <span>${item.price}</span>
    </li>`
  })
  cardBox.innerHTML = htmlStr
}

let btns = document.getElementsByTagName('a');
let cardList = document.getElementsByTagName('li');
cardList = utils.toArray(cardList);

for (var i = 0; i < btns.length; i++) {
  btns[i].index = i;
  btns[i].flag = -1;
  btns[i].onclick = function () {
    this.flag *= -1;
    // console.log(this.index)
    sortList.call(this);
    // clearArrow.call(this);
    // addArrow.call(this);
  }
}

function sortList() {
  // this-->当前点击的元素
  let ary = ['data-time', 'data-hot', 'data-price'];
  cardList.sort((a, b) => {
    a = a.getAttribute(dataAry[this.index]);
    b = b.getAttribute(dataAry[this.index]);
  });
  return (a-b)*this.flag;
}