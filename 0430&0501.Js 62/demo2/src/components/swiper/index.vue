<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="lightcoral">
      <van-swipe-item :key="item.id" v-for="(item) in data">
          <img :src="item.image" alt="">
      </van-swipe-item>
     
    </van-swipe>
  </div>
</template>

<script>
export default {
    props:['data'],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.swiper {
  width: 100%;
  height: 5rem;
  .my-swipe {
    height: 100%;
    /* .van-swipe__indicator {
      color: lightcoral ;
    } */
    img{
        width: 100%;
        height: 5rem;
    }
  }
}
/* .my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
} */
</style>