let timer = null;
let send = () => {
    $.ajax({
        url: './banner.json',
        async: false,
        success: (res) => {
            // console.log(res);
            renderHtml(res);
            timer = setInterval(autoMove, 2000);
            focus();
        }
    });
}
//项目重构  原生用jq写一遍 
let renderHtml = (data) => {
    let imgs = '';
    let list = '';
    $.each(data, (index, item) => {
        let { img } = item;
        imgs += ` <img src="${img}" alt="" >`;
        list += '<li></li>'
    });
    $('#wrapper').html(imgs);
    $('#list').html(list);
    console.log(imgs);
}

let step = 0;//代表当前图片的索引  焦点也会用它 所以写在外面
let autoMove = function () {
    step++;
    if (step == 5) {//如果当前的step是5的时候已经没有对应的图片了，这时候把step改为0，从头进行显示即可
        step = 0;
    }
    $('img').eq(step).fadeIn().siblings().fadeOut();//按照索引找到对应的图片，然后让其渐渐显示，然后再获取其他的图片让其渐渐隐藏
    focus();
}
//实现焦点跟随
let focus = function () {
    $('#list li').eq(step).addClass('select').siblings().removeClass('select')
}
$('#outer').hover(function () {
    //console.log(1);//鼠标划入
    clearInterval(timer)
}, function () {
    //console.log(2);//鼠标划出
    timer = setInterval(autoMove, 2000)
});
send();//防止报错
$('#list li').hover(function () {
    let index = $(this).index();
    step = index - 1;
    autoMove();
});
$('#left').click(function () {
    step -= 2;
    if (step == -2) {
        step = 3
    }
    autoMove();
})
$('#right').click(function () {
    autoMove();
})