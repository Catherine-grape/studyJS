// 操作dom的方法
document.createElement();//动态创建dom元素
父元素.removeChild(子元素);
[].appendChild([元素]);//追加到元素的末尾
[].insertBefore()//把元素插入到另一个元素的前面

document.getElementById();
元素.getElementsByClassName();
document.getElementsByTagName();

document.querySelector();//获取的元素没有映射功能(括号内支持选择器) 获取符合规则的第一个元素
document.querySelectorAll();

childNodes
children
firstChild
lastChild
lastElementChild
previousSibling
previousElementSibling
nextSibling
nextElementSibling

元素.getAttribute(key)
元素.setAttribute(key, value)
元素.removeAttribute(key)

元素.classList.add()
元素.classList.remove()
元素.replace(a, b)
元素.className = ''
box.style//设置/获取元素的行间样式
getComputedStyle//获取计算之后的样式

btn.onclick = function () {
    box.classList.toggle("c")//如果当前元素有c类名，那就移除c，如果没有，那就加上c
}