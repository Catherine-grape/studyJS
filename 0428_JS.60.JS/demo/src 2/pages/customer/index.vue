<template>
  <div class="container">
    <div class="left">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        class="el-menu-vertical-demo"
        active-text-color="#ffd04b"
        @select = "select"
       
        :default-openeds="['1']"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>客户</span>
          </template>
          <el-menu-item index="0">我的客户</el-menu-item>
          <el-menu-item index="1" v-power="flag">全部客户</el-menu-item>
          <el-menu-item index="2">新增客户</el-menu-item>
        </el-submenu>
        
      </el-menu>
    </div>
    <div class="right">
      <!--include数组里有谁，那谁就会被缓存，可以控制缓存的范围  -->
      <!--exclude数组里有谁，就不能缓存谁，意思就是除了数组里的，剩下的都能够被缓存  -->
      <!-- max是最大缓存数量，如果超过了这个数量，他就会把最久没有访问的组件实例销毁 -->
      <keep-alive  :exclude="['add']" :max="10">
        <router-view></router-view>
      </keep-alive>
      
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      arr:['a'],
      flag:'allcustomer'
    }
  },
  methods:{
    select(index){
      console.log(index,37);
      let ary = [
        '/customer/list?type=my',
        '/customer/list?type=all',
        '/customer/add'
      ];
      let path = ary[index];
      let href = location.href;
      // 如果前一次和后一次跳转的path是一样的，那router是会在控制台报错的，为了解决这个问题，咱们在路由跳转的时候，判断一下当前页面的url是否包含即将要跳转的path值，如果一样，说明要跳转的是同一个组件，就直接return就好
      if(href.includes(path)) return;
      this.$router.push(path)
    },
    changeActive(){
      let url = location.href;
      let [a,b]= url.split('#');
      let [c,d] = b.split('?');
      if(b.includes('/customer/list')){
          if(d == undefined || d == 'type=my'){
            return '0'
          }
          if(d == 'type=all'){
            return '1'
          }
      }
      
      return '2'
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  // background: red;
  height: 100%;
  display: flex;
  .left {
    width: 200px !important;
    height: 100%;
    background: #545c64;
  }
  .right {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>