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
        :default-active="changeActive()"
        :default-openeds="['1']"
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
            <el-menu-item index="1" v-power="flag">
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
      <!-- :include="['add']" include数组里有谁，那谁就会被缓存，可以控制缓存的范围    max是最大缓存数量，如果超过里这个数量，他就会把最久没有访问的组件实例销毁-->
      <keep-alive :exclude="['add']" :max="10">
        <router-view></router-view>
      </keep-alive>
      
    </div>
    <!-- 我是客户管理大组件 -->
  </div>
</template>

<script>
// import Vue from "vue";

export default {
  data(){
    return{
      // arr:['a','b'],
      flag:'allcustomer'
    }
  },
  methods: {
    select(index) {
      // console.log(index);
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
    changeActive(){
      let url=location.href;
      let [a,b]=url.split('#');
      let [c,d]=b.split('?')
      console.log(a,b,c,d);
      if(b.includes('/customer/list')){
        if(d==undefined||d=="type=my"){
        return '0'
      }else{
        return '1'
      }
      /* if(d=='type=all'){
        return '1'
      } */
      }
      
      return '2'
    }
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
    min-width: 200px;
    height: 100%;
    background: #545c64;
  }
  .right {
    width: 80%;
    height: 100%;
    overflow: auto;
  }
}
</style>