var fullName="languge";
var obj={
    fullName:'javascript',
    prop:{
        getFullName:function(){
            //this :obj.prop 
            //this:window
            return this.fullName;
        } 
    }
};
console.log(obj.prop.getFullName());//undefined
var test=obj.prop.getFullName;
console.log(test());//"languge"