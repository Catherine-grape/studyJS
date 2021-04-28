let data = null;
// 轮播图
let send = () => {
    $.ajax({
        url: "./banner.json",
        type: "get",
        async: false,
        success: function (data) {
            bindHtml(data);
        }
    });
}
let bindHtml = (data) => {
    let imgs = '';
    $.each(data, (index, item) => {
        let { banner_img } = item;
        imgs += `<li class="swiper-slide"> <img src="${banner_img}" alt=""> </li>`
        $("#wrapper").html(imgs);
    })
}
var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
})
send();
// 菜单导航
let sendGo = () => {
    $.ajax({
        url: "./nav.json",
        type: "get",
        async: false,
        success: function (data) {
            navHtml(data);
        }
    });
}
let navHtml = (data) => {
    let img = '';
    $.each(data, (index, item) => {
        let { nav_img, nav_title } = item;
        img += `<li>
                <img src="${nav_img}" alt="">
                <p>${nav_title}</p>
            </li>`
        $("#su_menu").html(img);
    })
}
sendGo();
(function () {
    let data = null;
    $.ajax({
        url: "./list.json",
        method: "get",
        async: false,
        dataType: 'json',
        success: result => {
            data = result;
        }
    });
    renderHtml();
    function renderHtml() {
        let str = ''
        for (let i = 0; i < 50; i++) {
            let index = Math.round(Math.random() * 9);
            let newImg = data[index];
            $.each(data, (index, item) => {
                index = newImg;
                let { img, title, price }  = item;
                str += ` <li>
                <img src="${img}" alt="">
                    <p>${title}</p>
                    <span class="price">
                        <i>¥</i>
                    ${price}</span>
            </li>`
                $("#alsoLike").html(str);
            })
            $("li").sort((a, b) => {
                return a.scrollHeight - b.scrollHeight
            });
        }
    }
    let imgs = document.getElementsByTagName('img');
    check();
    function check() {
        for (let i = 0; i < imgs.length; i++) {
            dype(imgs[i])
        }
    }
    function dype(imgc) {
        if (imgc.flag) {
            return;
        }
        let imgH = imgc.offsetHeight, imgT = utils.offset(imgc).top, winT = utils.win('scrollTop'), winH = utils.win('clientHeight');
        if (winT + winH >= imgH + imgT) {
            imgc.flag = true;
        }
    }
   window.onscroll = function () {
        check();
        let bodyH = utils.win('scrollHeight'), winH = utils.win('clientHeight'), winT = utils.win('scrollTop');
        if (winH + winT >= bodyH - 100) {
            renderHtml();
        }
    }
    }());

/* arr.flat(Infinity);数组降维  全部*/