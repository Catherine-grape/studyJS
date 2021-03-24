console.log(b);
function fn(){
    b=13;
    console.log(b);
}

fn();
console.log(b);




console.log(a,b);//undefined
var a=12,
b=12;//==var a=12;var b=12;简写
function fn(){
    console.log(a,b);//undefined 12
    var a=b=13;
    console.log(a,b);//13，13
}
fn();
console.log(a,b);//12，13