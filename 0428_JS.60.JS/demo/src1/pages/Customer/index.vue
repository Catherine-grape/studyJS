<template>
  <div class="container">
    <div class="leftBox">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#343D4A"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="activeIndex()"
        @select="changeRouter"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <span>我的客户</span>
            </el-menu-item>
            <el-menu-item index="1-2" v-power="power">
              <span>所有客户</span>
            </el-menu-item>
            <el-menu-item index="1-3">
              <span>新增客户</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <!--右侧内容-->

    <div class="rightBox">
      <!-- KEEP-ALIVE组件可以保证路由切换的时候，当前组件不销毁 -->
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      power:'departcustomer|allcustomer'
    };
  },
  methods: {
    activeIndex() {
      let nowURL = location.href;
      if (nowURL.includes("/custom/list")) {
        let { type } = this.$route.query;
        if (type === "all") return "1-2";
        return "1-1";
      }
      if (nowURL.includes("/custom/handle")) return "1-3";
    },
    changeRouter(index) {
    
      let arr = [
        "/custom/list?type=my",
        "/custom/list?type=all",
        "/custom/handle",
      ];
      index = parseInt(index.slice(2));
      console.log(index);
      if (location.href.includes(arr[index - 1])) return;
      this.$router.push(arr[index - 1]);
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;

  .leftBox {
    width: 18%;
    height: 100%;
    min-width: 200px;
    background: #343d4a;
  }

  .rightBox {
    width: 82%;
    height: 100%;
    background: lightsalmon;
  }
}
</style>