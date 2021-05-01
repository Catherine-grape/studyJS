<template>
  <div class="box">
    <div>
      <van-divider content-position="left"> {{ item.date }}</van-divider>
    </div>
    <ul>
      <li :key="index" v-for="(ite, index) in item.list">
        <div class="left">
          <p>
            {{ ite.title }}
          </p>
          <p class="date">
            {{ ite.hint }}
            <!--  <van-divider
  :style="{ color: '#ccdff1', borderColor: '#ccdff1', padding: '0 16px' }"
>
</van-divider> -->
          </p>
        </div>
        <img :src="ite.images[0]" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  box-sizing: border-box;
  padding: 0.1rem;
  font-size: 0.3rem;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.35rem;
    border-bottom: 1px solid #e6e6e6af;
    img {
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid lightslategray;
    }
    p {
      font-size: 0.3rem;
    }
    .date {
      color: #cfcfcf;
      font-size: 0.2rem;
    }
  }
}
</style>