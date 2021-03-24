$('#btn').click(function () {//hide隐藏  show 显示 toggle自动判断 隐藏 显示  显示 隐藏  slideUp 变成上下 显示隐藏  slideToggle自动判断    fadeToggle渐隐渐显   slideUp(300).delay(3000).fadeIn(400)
    $('#box').fadeToggle('slow', 'linear', function () {
        console.log(1);
    });
});