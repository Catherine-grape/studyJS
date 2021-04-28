// 主组件

<template>
  <div class="container">
    <div class="left">
      <!-- <ul>
        <router-link to="/customer/list" tag="li">我的客户</router-link>
        <router-link to="/customer/list" tag="li">全部客户</router-link>
        <router-link to="/customer/add"  tag="li">新增客户</router-link>
      </ul> -->

      <el-menu
        background-color="#545c64"
        text-color="#fff"
        class="el-menu-vertical-demo"
        active-text-color="#ffd04b"
        @select="select"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="0">
              我的客户
              <!-- <router-link>我的客户</router-link> -->
            </el-menu-item>
            <el-menu-item index="1">
              全部客户
              <!-- <router-link>全部客户</router-link> -->
            </el-menu-item>
            <el-menu-item index="2">
              新增客户
              <!-- <router-link>新增客户</router-link> -->
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
    我是客户管理大组件
  </div>
</template>

<script>
import Vue from "vue";

export default {
  methods: {
    select(index) {
      console.log(index);
      let ary = [
        "/customer/list?type=my",
        "/customer/list?type=all",
        "/customer/add",
      ];
      let path=ary[index]
      let href=location.href;
    //   如果前一次和后一次跳转的path是一样的那router会在控制台报错，为了解决这个问题，在路由跳转的时候，判断一下当前页面的url是否包含即将跳转的path值，如果一样，说明要跳转的是同一个组件，就直接return就好
      if(href.includes(path))return
      
      this.$router.push(path); 
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  background: lightsalmon;
  height: 100%;
  display: flex;
  .left {
    width: 20%;
    height: 100%;
    background: #545c64;
  }
  .right {
    width: 80%;
    height: 100%;
  }
}
</style>