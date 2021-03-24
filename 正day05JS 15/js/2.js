let obj={
    name:"li",
    fn:(function(n){
         // 这里的this
         //自执行函数 指的window
         console.log(this);
         return function(){
            // 这里的this
            //fn对应的是这个小函数 obj
            console.log(this);
         }
    })(10),
  }
  obj.fn();