/* 
instanceof：
语法：实例 instanceof 类
作用：用来判断当前实例是不是隶属于某个类（构造函数）
结果：布尔数据类型，如果是true 是当前类的实例，false就不是

实例属于对象
*/
function Fn(){
    this.name="li";
    this.age=20;
}


function Fn2(){

}
var f1=new Fn();
var f2=new Fn();

f1 instanceof Fn;

/* 
in (不区分公有还是私有)
语法： attr in obj
结果：布尔
- true 有这个属性（这个对象不论私有还是公有，只要有这个属性，返回值就是true）
- false 没有
*/

"name" in f1//"toString" in f1==>true

/* 
hasOwnProperty:
语法：对象.hasOwnProperty("属性名")
作用：检测某个属性是不是某对象的私有属性，只有返回值是true 代表就是私有

*/
f1.hasOwnProperty("name");//true
f1.hasOwnProperty("toString");//false 



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


//老师的 
/* function hasPublicProperty(obj,attr){
    //this 有这个属性 并且不是私有的就是公有的
    if(attr in obj&&!obj.hasOwnProperty){
        return true;
    }
    return false;``
} */

console.log(hasPublicProperty(f1,"toString"));//true
console.log(hasPublicProperty(f1,"name"));//false
console.log(hasPublicProperty(f1,"job"));//false

function hasPublicProperty(obj,attr){
    //this 有这个属性 并且不是私有的就是公有的
    return attr in obj&&!obj.hasOwnProperty(attr)?true:false;
} 