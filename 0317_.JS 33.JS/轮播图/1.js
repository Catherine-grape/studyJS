let outer = document.getElementById('outer');//外层窗口
let wrapper = document.getElementById('wrapper');//获取存放图片的ul
let list = document.getElementById('list');//存放焦点的ul

// 请求数据
let data = null;
function getDate() {
    let xhr = new XMLHttpRequest;
    xhr.open('get', './banner.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /^(2|3)\d{2}$/.test(xhr.status)) {
            data = JSON.parse(xhr.response);
        }
    }
    xhr.send();
}
getDate()

// 数据渲染
function renderHtml() {
    let str = ``;
    let listItem = ``;
    data.forEach((item) => {
        let { img } = item;
        str += `
      <li><img src="${img}" alt=""></li>
        `
        listItem += `<li></li>`
    });
    str += `<li><img src="${data[0].img}" alt=""></li>`//手动拼接 复制第一张图片放到最后
    wrapper.innerHTML = str;
    list.innerHTML = listItem;
}
renderHtml();

// 图片轮播
let timer = null;
let step = 0;//图片的索引

function autoMove() {
    step++;//定时器每执行一次 就让step加加一次，-800乘图片的索引step就是要显示图片的left值
    //wrapper.style.left = step * (-800) + "px";
    if (step == data.length + 1) {//data.length 5
        //如果step等于5的时候，说明页面上的图片已经达到了最后一条
        wrapper.style.left = 0 + "px";//让wrapper的left值马上等于0，
        step = 1; //然后再把step值为1，让图片正常轮播第二张即可
    }
    focus();
    utils.animate(wrapper, { left: step * (-800) }, 1000)////utils 里面的animate 过度动画  切换图片的时候需要的1s过渡时间
}
//$('#wrapper').animate({ left = step * (-800) }, 1000);//jq版
timer = setInterval(autoMove, 2000);//2s切换一次图片

// 鼠标划入清空定时器
outer.onmouseover = function () {
    clearInterval(timer)
}
// 鼠标划出重新开启定时器
outer.onmouseout = function () {
    timer = setInterval(autoMove, 2000);
}

// 焦点跟随
let dian = list.getElementsByTagName('li');
function focus() {
    // 执行让焦点高亮的逻辑
    //当前页面只有4个li，li最大的索引是3 没有对应的li焦点高亮 解决办法就是在最后多写一个if判断，如果当前的step等于4，那就可以让第一个焦点高亮
    for (let i = 0; i < dian.length; i++){
        //假设当前页面展示的是第二张图片，那step就是1
        if (step == i) {
            dian[i].classList.add('active')
        }
        else {
            dian[i].classList.remove('active');
        }
    }
    if (step == data.length) {//页面展示第5张图片 step是4 
        dian[0].classList.add('active')
    }
}
focus();

// 给焦点循环绑定点击事件，当点击的时候切换图片
for (let i = 0; i < dian.length; i++){
    dian[i].onclick = function () {
        step=i-1;//把焦点的索引赋值给图片的索引step（这里的-1是为了和autoMove里的step++相互抵消）
        autoMove();
    }
}
let left = document.getElementById('left');
let right = document.getElementById('right');

left.onclick = function () {
    step -= 2;
    if (step <= -2) {
        //如果档期啊你的step等于-2，那说明用户现在想从第一张切换到倒数第二张，应该立刻把图片切换到倒数第一张，再平滑过度到倒数第二张
        wrapper.style.left=(data.length*-800)+"px"
        step = data.length-2;
    } 
    autoMove();
    },2000) 
right.onclick = function () {
        autoMove(); 
}
