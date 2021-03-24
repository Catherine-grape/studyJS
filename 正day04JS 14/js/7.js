//报错 a is not defind
console.log(a);
a=12;
function fn(){
    console.log(a);
    a=13;
}
fn();
console.log(a);