function fn(){
    // 这里的this window
    console.log(this);
  }
    box.onclick=function(){
      console.dir(this);//box
      fn()
    }