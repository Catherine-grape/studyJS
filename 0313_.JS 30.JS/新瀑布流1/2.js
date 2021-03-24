(function () {
    let data = null;
    let imgs = document.getElementsByClassName('bg')
    let cardBox = Array.from(document.getElementsByTagName('ul'));
    let xhr = new XMLHttpRequest;
    xhr.open('get', './data.txt', false);
    xhr.onreadystatechange = function () {
        if (/^(2|3)\d{2}$/.test(xhr.status) && xhr.readyState == 4) {
            data = JSON.parse(xhr.response)
        }
    };
    xhr.send();

    function renderHtml() {
        for (let i = 0; i < 50; i++) {
            let index = Math.round(Math.random() * 9);
            let curImg = data[index];
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
        let imgH = img.offsetHeight, imgT = utils.offset(img).top, winH = utils.win('clientHeight'), winT = utils.win('scrollTop');
        if (winH + winT >= imgH + imgT) {
            let address = img.getAttribute('true-img');
            img.src = address;
            img.onerror = function () {
                img.src = './img/timg.gif'
            }
            img.classList.remove('bg');
        }
    };
    check();
    window.onscroll = function () {
        check();
        let bodyH = utils.win('scrollHeight'), winH = utils.win('clientHeight'), winT = utils.win('scrollTop');
        if (winH + winT >= bodyH - 100) {
            renderHtml();
        }
    }

}());