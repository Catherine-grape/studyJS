<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
<tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/Tabbar'
export default {
  components:{
   'tab-bar' :TabBar
  }
};
</script>
<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #f4f4f4;
}

#app {
  margin: 0 auto;
  max-width: 750px;
  min-height: 100%;
  background: #f4f4f4;
}
</style>