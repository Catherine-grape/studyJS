/* 
计算器案例
*/
let allGoods=document.querySelectorAll("#main ul li");
let totalNumBox=document.querySelector(".totalNum"),
totalMoneyBox=document.querySelector(".totalMoney"),
specileMoneyBox=document.querySelector(".specileMoney");
let goodsData=[];
//querySelectorAll获取的元素 原型上的forEach可以用
//[...allGoods]转成数组
//这个forEach不是 数组原型上的方法 而是NodeList原型上的一个方法，但是用法是跟数组上一样
//只有通过querySelectAll 获取类数组的才能使用
//箭头函数若只用一个形参（）可以省略。多个的时候不行
allGoods.forEach((item,index)=>{
    //item 代表的是每一个li
    let addBtn=item.querySelector(".add"),
    subBtn=item.querySelector(".sub"),
    numBox=item.querySelector(".num"),
    itemPrice=item.querySelector(".itemPrice"),
    xjMoney=item.querySelector(".xjMoney");
    
    //获取单价 在点击事件里面获取还是外面获取合适？外面合适
    //因为单价是固定的 不需要每次点击都获取一次
    let price=itemPrice.innerHTML;
    goodsData.push({
        num:0,
        price:price
    });
    addBtn.onclick=function(){
        let num=numBox.innerHTML;
        /* num=num/1;//隐式转换 乘1或者除1都可以把字符串转成 数字
        num+=1; 
        */
       num++;//上面两个写法的合并 num++也可以转成数字
        // 累加完成之后 再把改变之后的数字赋值给 numBox
        numBox.innerHTML=num;
        xjMoney.innerHTML=price*num;
        //修改完数量之后 我们把修改之后的数组更新到数组中对应的数据
        goodsData[index].num=num;
        setTotal();
    }
    subBtn.onclick=function(){
        let num=numBox.innerHTML;
        //num=num/1;
        //num-=1;
        num--;
        num=num<0?0:num;//让商品的数量最少是0
        //累减完成之后 再把改变之后的数字赋值给numBox
        numBox.innerHTML=num;
        xjMoney.innerHTML=price*num;
        goodsData[index].num=num;
        setTotal();
    }
})


function setTotal(){
    
    let totalNum=0,totalMoney=0,specileMoney=0;
    goodsData.forEach(function(item){
        totalNum+=item.num;
        totalMoney+=item.num*item.price;
        //怎么找到最贵的？
        if(item.num>0){
            //specileMoney拿到最大值
            specileMoney= item.price >specileMoney?item.price:specileMoney
        }
    })
    totalNumBox.innerHTML=totalNum;
    totalMoneyBox.innerHTML=totalMoney;
    specileMoneyBox.innerHTML=specileMoney;
}


/* 
先去处理每一条的结构
一条一条的粗粝完成之后再去处理总体
处理总体问题的时候 发现一个问题 就是怎么比较简单获取每一条的单价和数量？
我们是通过 一个数组的方式 去对应每一条的结构
然后通过处理数组的方式获取我们想要的总体数据
*/