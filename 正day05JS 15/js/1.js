var name="珠峰培训";

function fn(){
    //obj.name
   console.log(this.name)
}
var obj={
  name:"你好世界",
  fn:fn
}
obj.fn();//"你好世界"
fn();//window.name "珠峰培训"

(function(){
    //this window
  //window.fn();
  this.fn();//"珠峰培训"
})();