let choose = document.getElementById("choose"),
    list = type.getElementsByTagName('a'),lis=document.getElementsByTagName("li");
let arr = [];
    // 给每一个li增加自定义属性
for (let k = 0; k < lis.length; k++){
    lis[k].index = k;
    // console.log(lis[k].index);
}
for (let i = 0; i < list.length; i++){
    list[i].onclick = function () {
        // 边做边检查
       // console.log(this);
        // 获取当前用户点击的是a元素的父亲li，然后再通过父亲li找到其下的a元素节点集合
        let chil = this.parentNode.children;
        //console.log(chil);
        for (let j = 0; j < chil.length; j++){
            // 循环当前li里的所有a元素，给每一个a元素清空color样式
            chil[j].style = "";
        }
        this.style.color = "red";//给当前点击的a元素加上color样式
        let mark = document.createElement("mark");
        mark.innerHTML = this.innerHTML;
        let index = this.parentNode.index;
        // console.log(index);
        let a = document.createElement('a');
        a.innerHTML = "X";
        a.onclick = function () {
            // console.log(this);
            // 父亲.removeChild(要删除的元素)
            // this.parentNode是当前的mark元素
            // 从choose中溢出当前的mark
            choose.removeChild(this.parentNode);

        }
        mark.appendChild(a);
        // choose.appendChild(mark);
        arr[index] = mark;
        choose.innerHTML = "你的选择:";
        for (let m = 0; m < arr.length; m++){
            if (arr[m]) {
                choose.appendChild(arr[m]);
            }  
        }
    }
}