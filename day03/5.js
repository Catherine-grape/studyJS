for(var i=1;i<=10;i+=2){//4 7
    if(i<=5){
       i++;//2 5
       continue;
    }else{
       i-=2; //5
       break;
    }
    i--;
    console.log(i);
    
}
console.log(i);//5