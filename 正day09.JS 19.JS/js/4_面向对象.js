function Counter(selection){
    this.box=document.querySelector(selection);
    this.lis=this.box.querySelectorAll("ul li");
    this.totalNumBox=this.box.querySelector(".totalNum")
    this.totalMoneyBox=this.box.querySelector(".totalMoney")
    this.specileMoneyBox=this.box.querySelector(".specileMoney")
    this.goodsData=[];
    
    this.bindEvent();
}
Counter.prototype.bindEvent=function(){
    //this 是实例
    let _this=this;
    this.lis.forEach((item,index)=>{
        let addBtn=item.querySelector(".add"),
        subBtn=item.querySelector(".sub"),
        numBox=item.querySelector(".num"),
        itemPriceBox=item.querySelector(".itemPrice"),
        xjMoneyBox=item.querySelector(".xjMoney");
        let price=itemPriceBox.innerHTML/1;
        this.goodsData.push({
            num:0,
            price:price
        })
        
        addBtn.onclick=()=>{
            let num=numBox.innerHTML/1;
            num++;
            numBox.innerHTML=num;
            xjMoneyBox.innerHTML=price*num;
            this.goodsData[index].num=num;
            this.getTotal()
        }
        subBtn.onclick=()=>{
            let num=numBox.innerHTML/1;
            num--;
            num=num<0?0:num;
            numBox.innerHTML=num;
            xjMoneyBox.innerHTML=price*num;
            this.goodsData[index].num=num;
            this.getTotal();
        }
    })
}
Counter.prototype.getTotal=function(){
    let totalNum=0,totalMoney=0,specileMoney=0;
    //根据 goodsData重新计算以上三个值
    this.goodsData.forEach(item=>{
        totalNum+=item.num;
        totalMoney+=item.num*item.price;
        if(item.num>0){
            specileMoney= item.price >specileMoney?item.price:specileMoney
        }
    })
        this.totalNumBox.innerHTML=totalNum;
        this.totalMoneyBox.innerHTML=totalMoney;
        this.specileMoneyBox.innerHTML=specileMoney;
   
}
new Counter("#main")