let lis = document.getElementsByTagName('li');
let ems = document.querySelectorAll(".info em");//
for (let i = 0; i < lis.length; i++) {
    // lis[i] 代表每一个li
    // 给每一个li中的i元素增加点击事件
    addEvent(lis[i]);
}
function addEvent(li) {
    let tags = li.getElementsByTagName('i');//[i,i]
    let em = li.getElementsByTagName('em')[0];
    let strongs = li.getElementsByTagName('strong');
    tags[0].onclick = function () {
        console.log('-');
        if (em.innerHTML <= 0) return;
        em.innerHTML = Number(em.innerHTML) - 1;
        strongs[1].innerHTML = Number(em.innerHTML) * parseFloat(strongs[0].innerHTML) + '元';
        computed();
    }
    tags[1].onclick = function () {
        console.log('+');
        if (em.innerHTML > 9) return;
        em.innerHTML = Number(em.innerHTML) + 1;
        strongs[1].innerHTML = Number(em.innerHTML) * parseFloat(strongs[0].innerHTML) + '元';
        computed();
    }
}
function computed() {
    // 专门用来计算下边三个em的值
    // 1.先创建一个变量用来累加所有商品的数量
    // 2.循环li 拿到每一个li里的em元素的内容（拿到每一个商品的数量），把商品数量累加到一起，然后设置到页面
    let allCount = 0;//初始化一个变量，用来存储商品的数量
    let allPrice = 0;//初始化一个变量，用来存储商品的小计
    let ary = [0];//创建一个变量，用来存储购买商品的单价
    for (let i = 0; i < lis.length; i++){
        let em = lis[i].getElementsByTagName('em')[0];
        let strongs = lis[i].getElementsByTagName('strong');//获取到每一个li中的strong元素
        allCount += Number(em.innerHTML);//把em元素中的数量累加到allCount中
        allPrice += parseFloat(strongs[1].innerHTML);//把strong元素中的小计累加到allPrice中
        // 把购买的商品单价push到单价中
        if (Number(em.innerHTML) != 0) {
                    ary.push(parseFloat(strongs[0].innerHTML))

        }
    }
    ary.sort((a, b) => b - a);
    ems[0].innerHTML = allCount;//把数量渲染到页面
    ems[1].innerHTML = allPrice;//总计展示到页面
    ems[2].innerHTML = ary[0];//把最大的单价渲染到页面


}