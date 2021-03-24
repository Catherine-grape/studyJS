(function () {
  let data = null;
  // 1.请求数据
  $.ajax({
    url: `./data.txt`,
    method: 'get',
    async: false,
    dataType: 'json',
    success: result => {
      data = result;
    }
  });

  // 2.数据绑定

  let renderHtml = () => {
    $.each(data, (index, item) => {
      let $ul = $('ul');
      $ul.sort((a, b) => {
        return $(a).outerHeight() - $(b).outerHeight();
      });
      let { title, src, height } = item;
      let $li = $(`
        <li >
        <img true-img="${src}" class="bg" style="height:${height}"/>
        <p>${title}</p>
        </li>
      `);
      $li.appendTo($ul.eq(0));
    })


  };
  renderHtml();
  // 3.图片懒加载
  function check() {
    $('img').each(function (index, item) {
      delay(item)
    });
  }
  function delay(img) {
    img = $(img);
    if (img.attr('flag')) {
      return;
    };

    let imgH = img.outerHeight();
    let imgT = img.offset().top;
    let winH = $(window).innerHeight();
    let winT = $(window).scrollTop();
    if (winH + winT > imgH + imgT) {
      let address = img.attr('true-img');
      img.css('display', 'none');
      img.attr({
        'src': address,
        flag: true
      });
      img.fadeIn("slow");
    }

  }
  check();
  $(window).on('scroll', _.throttle(function () {
    check();
    let winH = $(window).outerHeight(),
      pageH = document.documentElement.scrollHeight || document.body.scrollHeight,
      scrollT = $(window).scrollTop();
    if (scrollT + winH > pageH - 30) {
      // console.log(renderHtml);
      renderHtml()
    }
  }, 500))
}());

