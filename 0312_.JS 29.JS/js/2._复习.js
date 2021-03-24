// 解决getComputedStyle在ie报错，currentStyle在谷歌报错的
function fn(ele, key) {
    let res = null;
    try {
        let res = getComputedStyle(ele);
    } catch (error) {
        res = ele.currentStyle;
    }
    return res[key];
}
fn(box, 'width');

window.onscroll = function () {//监听滚动条
    
}