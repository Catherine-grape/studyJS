<template>
  <div class="home">
    <!-- 头部部分 -->
    <my-header></my-header>

    <!-- 轮播图部分 -->
    <my-swiper :data="swiperData"></my-swiper>

    <!-- 新闻列表的部分 -->
    <van-skeleton v-if="!news.length" title :row="3" />
    <div class="news">
      <my-newsitem :key="index" v-for="(item, index) in news" :item="item">
      </my-newsitem>
      <div v-show="flag" style="height: 100px; background: lightblue">
        正在加载
      </div>
            <!-- <div v-show="isEnd">已经加载完毕了</div> -->

    </div>
  </div>
</template>

<script>
import Header from "../../components/header";
import swiper from "../../components/swiper";
import newsItem from "./newsitem";
import { latest, before } from "../../api/index";

import { delay } from "../../assets/utils";
export default {
  props: {},
  data() {
    return {
      date: "",
      news: [
        /* {
                date:'20210430',
                list:[...]
            } */
      ],
      swiperData: [],
      flag: false,
    };
  },
  created() {
    this.getData();
    window.addEventListener("scroll", this.getMore);
  },
  methods: {
    getData() {
      latest().then((res) => {
        console.log(res, 52);
        let { date, stories, top_stories } = res;
        this.date = date;
        this.swiperData = top_stories;
        this.news.push({ date: date, list: stories });
      });
    },
    getMore() {
      if (this.flag) {
        return;
      }
      let realH = document.getElementById("app").offsetHeight,
        winH = document.documentElement.clientHeight,
        winS = document.documentElement.scrollTop;
      if (winH + winS + 100 >= realH) {
        this.flag = true;
        console.log(111);
          this.getBefore();
      }
    },
    async getBefore() {
      /*  before(this.date).then(()=>{
           //当前函数里的代码会等到promise的实例变成成功态以后才会执行
       }) */
      /* await new Promise((resolve,reject)=>{
           setTimeout(()=>{
               resolve();
           },3000)
       }) */
      await delay();
      let res = await before(this.date);
      //   await下面的代码已经变成了异步的，什么时候上边的实例变成成功态，什么时候下面的代码才会执行
      console.log(res);
      // 每一次请求的数据都是10条，假设后台数据库一共有102条数据，咱们最多可以请求11次,如果当前请求的数据的length小于10条，那说明已经是最后一次请求了，你就可以让flag永远改为true， 让isEnd永远改为true    ,isEnd

      let { date, stories} = res;
      this.date = date; //'20210429' '20210428'
      this.flag = false;
      this.news.push({
        date: date,
        list: stories,
      });


/* this.isEnd=isEnd;
      if(!isEnd){//isEnd和后台商量已经没有数据的时候作为判断 false就可以继续请求
        this.flag = false;
      } */

      /* if (stories.length == 10) {
        //后台如果不给字段标识的话，通过判断length
        this.flag = false;
      } else {
        this.isEnd = true;
      }
 */
      /* let res1=await before(this.date);
    console.log(res1); */



    /* // 当一个请求成功后再请求下一个  
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
getData() */
    },
  },
  components: {
    "my-header": Header,
    "my-swiper": swiper,
    "my-newsitem": newsItem,
  },
};
</script>

<style lang="less" scoped>
.home {
  //   background: lightpink;
  width: 100%;
  height: 100%;
  .news {
    padding-bottom: 10vh;
  }
}
</style>

