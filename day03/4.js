/* 
continue:结束本轮循环，继续下一轮循环
break：结束整个循环
 */

for(var i=0;i<10;i++){ //2 4 6 8
    if(i<5){
       i++;//1 3 5
       continue;
    }
    if(i>7){
       i+=2;//10
       break;
    }
    i+=1; //7
}
console.log(i); //10