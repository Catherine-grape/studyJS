let timer1 = null;
let timer2 = null;
let target = document.documentElement.clientWidth - box.offsetWidth;


/* function toRight() {
    timer1 = setInterval(() => {
        let left = parseFloat(box.style.left);
        left += 30;
        if (left >= target) {
            clearInterval(timer1);
            box.style.left = target + "px";
            toLeft()
        }
        box.style.left = left + "px";
    },17)
}
function toLeft() {
    timer1 = setInterval(() => {
        let left = parseFloat(box.style.left);
        left -= 30;
        if (left <= 0) {
            clearInterval(timer1);
            box.style.left = 0 + "px";
            toRight();
        }
        box.style.left = left + "px";
    },17)
}
toRight(); */



let flag = true;
function fn(){
    let left = parseFloat(box.style.left);
    if (flag == true) {
        left += 10;
        if (left >= target) {
            box.style.left = target + 'px'
            flag = false;
        }
    }
    else {
        left -= 10;
        if (left <= 0) {
            box.style.left = 0 + 'px'
            flag = true;
        }
    }
    box.style.left = left + "px"
   // window.requestAnimationFrame(fn);
}
setInterval(fn, 17);

//window.requestAnimationFrame(fn);