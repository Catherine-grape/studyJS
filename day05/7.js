
/* 
递归：自己调自己
*/
function fn(){
    fn();
}
fn();
//打印1到10

for(var i=0;i<=10;i++){
    console.log(i);
}

function fn(n){
    if(n>10){
        return;
    }
   console.log(n) ;//1 2
   fn(n+1);//fn(2)
}
fn(1)

function fn(n){
    if(n>10){
        return;
    }
    console.log(n);
    fn(n+1);
}
fn(1);