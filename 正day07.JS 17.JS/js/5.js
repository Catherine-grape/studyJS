let ary2=[1,2,3,7,3,5,4];
ary.sort((a,b)=>{
    return a-b
});
ary2.pop();
ary2.push(1000);
ary2.sort((a,b)=>{
    return a-b
}).pop().push(1000)//转成链式 直接这样报错
//pop是删除的哪一项7  7没有办法用push
console.log(ary2)
console.log(res);//7.00
Array.prototype.pop=function(){
    this.length--;
    return this;
}
let res = ary2.sort((a, b) => {
    return a - b
  }).pop().push(1000).push(2000)
  Array.prototype.mypush=function(...arg){
    console.log('自己的push的方法');
    for(let i=0;i<arg.length;i++){
        this[this.length]=arg[i]
    }
    return this;
}
