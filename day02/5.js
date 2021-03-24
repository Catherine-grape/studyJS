var obj={
    n:10,
    b:obj.n*10
}
console.log(obj.b);
/*  Uncaught TypeError: Cannot read property 'n' of undefined
    at 5.js:3 */


var ary1=[3,4];
var ary2=ary1;
ary2[0]=1;
ary2=[4,5];
ary2[1]=2;
ary1[1]=0;
console.log(ary1,ary2); 10 ;42

