let data = null;
let timer = null;
let step = 0;
// 1.获取数据
let getData = ()=>{
    $.ajax({
        url:'./banner.json',
        type: 'get',
        async:false,
        success:(res)=>{
            console.log(res);
            data = res;
        }
    })
};
getData();

// 2.数据渲染
let bindHtml = ()=>{
    let imgs = '';
    let lis = '';
    $.each(data,function(index,item){
        imgs+=` <img src="${item.img}" alt="">`;
        lis+=`<li></li>`
    });
    $('#wrapper').html(imgs);
    $('#list').html(lis)
}
bindHtml();

// 启动定时器，完成轮播
let autoMove = ()=>{
    step++; // 0 1 2 3 4
    if(step == 5){
        step = 0;
    }
    changeFocus()
    $('img').eq(step).fadeIn().siblings().fadeOut()
}
timer = setInterval(autoMove,2000);

// 3.实现焦点跟随 step =1
let changeFocus = ()=>{
    $('#list li').eq(step).addClass('select').siblings().removeClass('select');
    // get：获取的是原生版的元素
    // eq:获取的是jq版的元素
    // index：获取当前元素在自己兄弟姐妹中的索引
}
changeFocus();

$('#outer').hover(function(){
    clearInterval(timer);
},function(){
    timer = setInterval(autoMove,2000);
});


$('#list li').hover(function(){
    let index = $(this).index();
    step = index-1;
    autoMove();
});
$('#right').click(function(){
    autoMove()
});

$('#left').click(function(){
    step-=2;
    if(step == -2){
        step = 3   // data.length-2
    }
    autoMove()
});
//-----------------------------------------------------------

// // 等到dom加载完成之后就会执行
// $(document).ready(function(){
//     // 在这里写你的代码...

// });
// window.DomContentLoaded = function(){}

// // 等页面所有的资源加载完成之后才会执行
// window.onload = function(){

// }


//---------------------------------
// function ajax(params){
//     let {url,type = 'get',async = true,success = ()=>{}} = params;
//     let xhr = new XMLHttpRequest;
//     xhr.open(type,url,async);
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)){
//             success(JSON.parse(xhr.response))
//         }
//     }
//     xhr.send()
// }

// ajax({
//     url:'./banner.json',
//     // type: 'get',
//     // async:false,
//     success:(res)=>{
//         console.log(res);
//         data = res;
//     }
// })



// attr('class','ss');// []
// attr('box','a');
// attr('id','box');

