<template>
  <div class="home">
    <!-- 头部组件 -->
    <my-header></my-header>

    <!-- 轮播图的部分 -->
    <my-swiper :data="swiperData"></my-swiper>

    <!-- 新闻列表的部分 -->
    <van-skeleton v-if="!news.length" title :row="3" />
    <div class="news">
      <news-item
        v-for="(item, index) in news"
        :key="index"
        :item="item"
      ></news-item>
      <div v-show="flag" style="height: 100px; background: red">正在加载</div>
    </div>
  </div>
</template>

<script>
import { delay } from "../../assets/utils";

import { latest, before } from "../../api/index";
import Header from "../../components/header";
import swiper from "../../components/swiper";
import newsItem from "./newsItem/index.vue";

export default {
  components: {
    "my-header": Header,
    "my-swiper": swiper,
    "news-item": newsItem,
  },
  created() {
    this.getData();
    window.addEventListener("scroll", this.getMore);
  },
  methods: {
    async getData() {
      // await delay(5000)
      latest().then((result) => {
        let { date, stories, top_stories } = result;
        this.date = date;
        this.swiperData = top_stories;
        console.log(top_stories);
        this.news.push({
          date: date,
          list: stories,
        });
      });
    },
    getMore() {
      if (this.flag) {
        return;
      }
      let realH = document.getElementById("app").offsetHeight;
      let winH = document.documentElement.clientHeight;
      let winS = document.documentElement.scrollTop;

      if (winH + winS + 100 >= realH) {
        this.flag = true;
        console.log(123);
        this.getBefore();
      }
    },
    async getBefore() {
      //  before(this.date).then((res)=>{
      //    // 当前函数里的代码会等到promise的实例变成成功态以后才会执行
      // let {date,stories} = res;
      //   this.date = date; // '20210429' '20210428
      //   this.flag = false;
      //   this.news.push({
      //     date:date,
      //     list:stories
      //   });
      //  })
      // await delay() // delay返回的promise实例会在3000ms之后变成成功态

      let res = await before(this.date);
      // await下边的代码已经变成了异步的，什么时候上边的实例变成成功态，什么时候下边的代码才会执行
      let { date, stories } = res;
      
      this.date = date; // '20210429' '20210428
      
      this.news.push({
        date: date,
        list: stories,
      });
    },
  },
  data() {
    return {
      date: "",
      flag: false,
      news: [
        // {
        //   date:'20210430',
        //   list:[....]
        // },
        // {
        //   date:'20210430',
        //   list:[....]
        // }
      ],
      swiperData: [],
    };
  },
};
</script>

<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  background: pink;
  .news {
    padding-bottom: 10vh;
  }
}
</style>

