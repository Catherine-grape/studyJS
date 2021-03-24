let box = document.getElementById('box');
let target = document.documentElement.clientWidth - box.offsetWidth;
let left=parseFloat(box.style.left)
/* for (let i = 0; i < target; i++){
    if (left == 0) {
        $('#box').animate({
            left: target
        }, 3000, 'linear')
    }
    if (target == target) {
        $('#box').animate({
            left: 0
        }, 3000, 'linear')

    }
    left = 0;
} */

setInterval(() => {
    $('#box').animate({
        left: target
    }, 3000, 'linear')
    $('#box').animate({
        left: 0
    }, 3000, 'linear')
},0)
    
    