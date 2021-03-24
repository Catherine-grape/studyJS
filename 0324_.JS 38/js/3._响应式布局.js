// 响应式布局 （自适应屏幕）一般是宽度  高度都是撑开的
// 由于市面上屏幕的尺寸不同，项目在不同尺寸屏幕上显示的时候元素的单位要根据屏幕的宽度的变化去做不同的调整

// 1. 流式布局（百分比布局） vh整个屏幕高度  vw整屏宽度 pc/移动通用
// 2. 媒体查询 主要用于pc端
// 3. rem布局  主要应用于移动端
// 在工作的时候 由 pm产品经理 出原型图--->ui出设计稿--->rd开发-->fe（前端）-->qa（测试）测试case一下  code review（代码回顾）
// ui出的设计稿一般情况下都是以750px屏幕的宽度为基础去设计
// 1rem=html的font-size值  如果屏幕尺寸发生变化咱们只需要把html的font-size的值去做出相应比例的变化就好了

// 750px     font-size 100px 容易算就可以 750/375=100/x  x=375*100/750

//原理 
window.onresize = function () {//监听window的尺寸变化  当屏幕尺寸发生变化就执行下面的
    let winW = document.documentElement.clientWidth;
    let res = 100 * winW / 750;
    document.documentElement.style.fontSize = res + "px";
}


// window.onoffline=function(){console.log('断网')} offline
// window.ononline=function(){ console.log('恢复')}  No throttling
