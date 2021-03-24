//实现 myapply
Function.prototype.myapply=function(ctx,arg){
    arg=arg||[];
    ctx.qqq=this;
    let r=ctx.qqq(...arg);
    delete ctx.qqq;
     return r;
}
let res2=f2.myapply([],[1,2,3,4]);

