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
    <router-link to="/notify">
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

<style lang="less" scoped>
.tabBar {
  width: 100%;
  height: 10vh;
  background: lightcyan;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 0.48rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    flex: 1;
    text-align: center;
    color: lightseagreen;
  }
  a.router-link-active{
      color:lightpink;
  }
}
</style>