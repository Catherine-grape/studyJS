
var name="window";
var Tom={
    name:"Tom",
    show:function(){
        //this:window
        console.log(this.name);
    },
    wait:function(){
        //this:Tom
        //var fun= function f
        var fun=this.show;
        fun();
    }
};
Tom.wait();//window