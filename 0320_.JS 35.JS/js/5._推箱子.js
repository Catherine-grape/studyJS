let box = document.getElementById('box');
window.onkeydown = function (e) {
    let style = getComputedStyle(box);
    let left = parseFloat(style.left);
    let top =parseFloat(style.top) ;
    
    let keys = e.keyCode;

    let minL = 0;
    let maxL = document.documentElement.clientWidth - box.offsetWidth;
    let minT = 0;
    let maxT = document.documentElement.clientHeight - box.offsetHeight;

    switch (keys) {
        case 37: left -= 100; break;
        case 39: left += 100; break;
        case 38: top -= 100; break;
        case 40: top += 100; break;
    }
    // 当left 的值小于等于最小的值时，说明盒子已经到达最左边了 就让left等于0即可
    if (left <= 0) {
        left = 0;
    }
    if (left >= maxL) {
        left = maxL;
    }

    /* if (keys == 37) {
        left -= 10
    }
    if (keys == 39) {
        left += 10;
    }
    if(keys==38){
        top-=10  
    }
    if (keys == 40) {
        top += 10
    } */
    box.style.left = left + "px";
    box.style.top = top + "px";
    
}
// 左37 上38 右39 下40