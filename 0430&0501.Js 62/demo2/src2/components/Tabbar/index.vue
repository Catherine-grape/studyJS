<template>
  <div class="tabBar">
    <router-link to="/home">
      <span>首页</span>
    </router-link>
    <router-link to="/detail">
      <span>详情</span>
    </router-link>
    <router-link to="/my">
      <span>我的</span>
    </router-link>
    <router-link to="/notice">
      <span>通知</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.tabBar {
  width: 100%;
  height: 10vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 0.48rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  a {
    flex: 1;
    color: black;
  }
  a.router-link-active {
    color:red
  }
}
</style>
