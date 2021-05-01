<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item) in data" :key="item.id">
        <img :src="item.image" alt="">
      </van-swipe-item>

    </van-swipe>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.swiper {
  width: 100%;
  height: 5rem;
  .my-swipe {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 5rem;
    }
  }
}
</style>
