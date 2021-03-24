// 如果有冲突可以用闭包包一下
(function () {
    let data = null;
    let imgs = document.getElementsByClassName('bg')
    let cardBox = Array.from(document.getElementsByTagName('ul'));
    // let cardBox = document.getElementsByTagName('ul');
    // Array.prototype.sort.call(cardBox,(a,b)=>a-b); // 通过改变sort的this指向，也可以让cardBox排序
    let xhr = new XMLHttpRequest;
    xhr.open('get', './data.txt', false);
    xhr.onreadystatechange = function () {
        if (/^(2|3)\d{2}$/.test(xhr.status) && xhr.readyState === 4) {
            // xhr.status应该是2或者3开头的三位数
            data = JSON.parse(xhr.response)
        }
    };
    xhr.send();

    // 数据渲染
    function renderHtml() {
        for (let i = 0; i < 50; i++) {
            let index = Math.round(Math.random() * 9);
            let curImg = data[index]; // {src:'xxx',title:'xxx',height:'200px'}
            let li = document.createElement('li');
            let img = document.createElement('img');
            let p = document.createElement('p');
            p.innerHTML = curImg.title;
            img.setAttribute('true-img', curImg.src);
            img.style.height = curImg.height;
            img.classList.add('bg');
            li.appendChild(img);
            li.appendChild(p);
            cardBox.sort((a, b) => {
                return a.scrollHeight - b.scrollHeight;
            });
            cardBox[0].appendChild(li);
        }
    };
    renderHtml();

    function check() {
        for (let i = 0; i < imgs.length; i++) {
            delay(imgs[i]);
        }
    }
    function delay(img) {
        let imgH = img.offsetHeight;
        let imgT = utils.offset(img).top;
        let winH = utils.win('clientHeight');
        let winT = utils.win('scrollTop');

        if (winH + winT >= imgH + imgT) {
            let address = img.getAttribute('true-img');
            img.src = address;
            img.onerror = function () {
                img.src = './img/timg.gif'
            }
            img.classList.remove('bg');
        }
    }
    check();
    window.onscroll = function () {
        check();
        // body的真实高度 === 浏览器滚动条的卷曲距离+ 浏览器可视区域的高度
        let bodyH = utils.win('scrollHeight');
        let winH = utils.win('clientHeight');
        let winT = utils.win('scrollTop');
        if (winH + winT >= bodyH - 100) {
            // 如果此条件成立，说明用户即将滑动到底部，应该二次去加载数据
            renderHtml()
        }

    }

}())