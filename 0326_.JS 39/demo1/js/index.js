let bankContent = document.getElementById('bankContent');
function renderBankHtml() {
    // console.log(data.bankList);
    let str = '';
    data.bankList.forEach((item, index) => {
        let { img, bankName, url } = item;
        str += `<li>
                    <a href="${url}">
                        <img src="${img}" alt="">
                    <span>${bankName}</span>
                    </a>   
                </li>`

    });
    console.log(str);
    bankContent.innerHTML = str;
}
renderBankHtml();
// -------------swiper
var mySwiper1 = new Swiper('#swiper1', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    effect: 'cube',
    on: {
        click: function () {
            // this 当前mySwiper1的实例
            let index = this.realIndex;//
            let { bannerList } = data;
            location.href = bannerList[index].url;
        }
    }
    /* // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    }, */
})


var mySwiper2 = new Swiper('#swiper2', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    /* // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    }, */
})        