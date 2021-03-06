// 现在页面把图片的宽高和位置写出来(把图片的真实路径保存到img 的结构上)
// 当用户滚动滚动条的时候去判断当前图片的位置是否已经在浏览器中显示出来了，如果显示出来了，那就把真实的路径赋值给img的src即可
let img = document.getElementsByTagName('img')[0];

// body 顶部距离图片的下边框的距离===body顶部距离浏览器可视区域的下边框的距离
// 图片的总高度+图片相对于body的上偏移量===浏览器滚动条卷曲的高度+浏览器可视区域的高度
let imgH = img.offsetHeight;//图片的总高度
let imgT = utils.offset(img).top;//图片相对于body 的上偏移量
let winH = utils.screen('clientHeight');//浏览器可视区域的高度

function delay() {
    if (img.flag) {
        return;
    }
    let winT = utils.screen('scrollTop');
    //console.log(imgH+imgT, winH+ winT);
    if (winH + winT >= imgH + imgT) {
        img.flag = true;
        let address = img.getAttribute('true-img')
        // 应该先检测一下路径的真实性，然后再给img赋值src
        let newImg = document.createElement('img');//动态创建一个img元素
        newImg.src = address;//把真实路径赋值给newImg的src检测一下是否能够正常请求
        newImg.onload = function () {//如果能够正常请求onload执行
            img.src = address;//把图片的真实路径赋值给img的src让图片加载
        }
        newImg.onerror = function () {//如果不能正常请求onerror执行
            img.src = './img/default.jpg'
        }
        /* img.onload = function () {
           img.src = address;
           fadeIn(img);
       }
       img.onerror = function () {
           img.src = './img/default.jpg'
       } */
    }
}
//做渐渐显示的效果
function fadeIn() {
    //先把img的opacity设置为0，然后再利用定时器不断的累加img的opacity值直到为1为止
    img.style.opacity = 0;
    let mean = parseFloat(img.style.opacity = 0)
    let timer = setInterval(() => {
        mean += 0.02;

        if (winT >= 1) {
            clearInteral(timer);
            mean.style.opacity = 1;
            return;
        }
        img.style.opacity = mean;
    }, 17)

}
delay();//当页面初始化的时候去判断首屏的图片是否需要加载
window.onscroll = function () {//滑动滚轴的时候
    delay();
}
