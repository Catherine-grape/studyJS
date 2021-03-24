let cardBox = document.getElementById("cardBox");//存放里的盒子
let header = document.getElementById("header");
let nav = header.getElementsByTagName("a");//获取头部点击的a标签

// 发送ajax请求，请求你想要的数据
/* 
1.创建一个ajax实例
2.打开一个请求 xhr.open('请求方式','请求路径',是否同异步)
3.监听一个请求
4.发送一个请求
*/
let data = null
let xhr = new XMLHttpRequest;//创建一个ajax实例
xhr.open('get', './json/product.json', false)//false同步 默认异步 

xhr.onreadystatechange = function () {//状态改变
    if (xhr.readyState === 4 && xhr.status === 200) {//200就代表成功  4开头就是请求路径错误
        // console.log(xhr.response);//response响应
        data = JSON.parse(xhr.response)
    }
}
xhr.send();
console.log(data);

//二、渲染页面
function renderHtml() {
    let str = ``;//创建一个变量用来累加或者存储li
    data.forEach((item) => {//循环数据，并且把数据转换成字符串的标签
        str +=
            `
        <li data_time="${item.time}" data_hot="${item.hot}" data_price="${item.price}">
                <img src="${item.img}" alt="">
                <span>${item.time}</span>
                <span>${item.title}</span>
                <span>${item.price}</span>
                <span>${item.hot}</span>
            </li>
        `
    });
    // console.log(str); 字符串
    cardBox.innerHTML = str;//把创建好的字符串的标签 插入到页面
}
renderHtml();

// 三、给三个a标签去绑定点击事件
// 获取页面中需要排序的li元素并且转换成数组
let list = Array.from(document.getElementsByTagName('li'));
// nav 是获取的页面中的a标签
for (let i = 0; i < nav.length; i++) {
    nav[i].index = i;//给每一个点击按钮a元素增加自定义属性，用来区分用户点击的到底是那个按钮
    nav[i].flag = -1;//每一个a元素都增加一个flag属性，用来存储排序的历史记录
    nav[i].onclick = function () {//给每个a元素绑定点击事件
        // console.log(1);
        // console.log(this.index);
        // 进行排序
        // this-->当前用户点击的元素
        this.flag *= -1;
        clearArrow.call(this);
        sortList.call(this);
        addArrow.call(this);//给箭头加样式
    }
}

function sortList() {
    // 专门用来排序
    // 我想把当前作用域里的this改为当前用户点击的元素，这样就可以直接拿到index了
    // this-->当前点击的元素
    // console.log(this.index, 62);
    let ary = ['data_time', 'data_hot', 'data_price'];//定义一个数组映射表，通过用户点击的a元素的index值作为索引去表中拿到对应的属性名（type就是拿到的属性名）
    // console.log(ary[this.index]);
    let type = ary[this.index];
    list.sort((a, b) => {
        // 通过属性名拿到对应排序的值
        a = a.getAttribute(type);//'2012-01-01'
        b = b.getAttribute(type);//'2020-05-07'
        // 因为时间是带有-的，所以不能直接相减，得把-去掉去做比较
        if (this.index == 0) {
            a = a.replace(/-/g, "");//"20120101"
            b = b.replace(/-/g, "");//"20120101"
        }
        return (a - b) * this.flag;
    });
    // console.log(list);
    // 把排好序的list列表重新插入到页面
    for (let i = 0; i < list.length; i++) {
        cardBox.appendChild(list[i]);
    }
}
function addArrow() {
    //this-->是当前点击的a元素
    let up = this.children[0],//获取i上箭头
        down = this.children[1];//获取i下箭头
    // console.log(up, down);
    // 如果a元素的flag属性大于0，说明是降序（下箭头亮），否则就是升序（上箭头亮）
    if (this.flag > 0) {
        up.classList.add('bg');
        down.classList.remove('bg');
    } else {
        up.classList.remove('bg');
        down.classList.add('bg');
    }
}

function clearArrow() {
    // this-->用户点击的a元素
    // 循环所有的a元素，每一a元素里的i元素的bg类名清除
    for (let i = 0; i < nav.length; i++) {
        if (this !== nav[i]) {
            nav[i].children[0].classList.remove('bg');
            nav[i].children[1].classList.remove('bg');
            nav[i].flag = -1;
        }

    }
}

// 1.获取数据
// 2.渲染数据
// 3.给a元素绑定点击事件
// 4.排序、清除箭头样式、增加箭头样式