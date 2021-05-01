##vant
vant专门写移动端的ui组件库

## async await

// 当一个请求成功后再请求下一个  
// getList,getItem,getInfo
getList().then((res)=>{
  this.xxx=res;
  return getItem()
}).then((res)=>{
  this.xxxxx=res;
  return getInfo()
}).then((res)=>{
  this.x=res;
})

async function getData(){
  let res1=await getList();
      this.xxx=res1;

  let res2=await getItem();
  this.xxxxx=res2;
  
  let res3=await getInfo();
  this.x=res3;
}
getData()
