

//思路：首先得是对象能够调用到的属性，然后不是私有属性
//就是是对象的一个属性并且不是私有属性 这样的才是公有属性
Object.prototype.hasPublic=function(key){
/*     if(key in this){
        if(this.hasOwnProperty(key)){
            return false
        }else{
            return ture
        }
    }
    return false;
 */
return (key in this)&&(!this.hasOwnProperty(key))?true:false;
}
f1.hasPublic("x")//false
f1.hasPublic("getX")//true
f1.hasPublic("abc")//false

