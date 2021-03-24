/* 
让你封装一个检测公有属性的方法:
如果是公有的，就返回true
不是公有的，或者说没有此属性返回值就是false

怎么判断是不是公有的？
一条：有这个属性（无论公还是私）
二条：不是公有就是私有；
*/
//学完原型后再改造
function hasPublicProperty(attr){
    //this
    if(attr in this){
        if(this.hasOwnProperty("attr")){
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
}
f1.hasPublicProperty("toString");//true
f1.hasPublicProperty("name");//false

//第二种：文兴
function hasPublicProperty(n){
    if(n in this){
        return !(this.hasOwnProperty(n))
    }
    return false;
}


