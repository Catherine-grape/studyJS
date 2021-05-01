<style lang='less'>
html,
body,
#app {
  height: 100%;
  font-size: 14px;
  overflow: hidden;
  .headerBox {
    height: 60px;
    width: 100%;
    background: #545c64;
    display: flex;
    align-items: center;
    h1 {
      box-sizing: border-box;
      padding-left: 20px;
      width: 30%;
    }
    .middle {
      width: 50%;
    }
    .right {
      width: 20%;
    }
  }
}
</style>
<template>
  <div id="app">
    <header class="headerBox" ref="headerBox">
      <h1>后台管理系统</h1>
      <div class="middle">
        <!--在刷新页面的时候default-active和哪个menu-item上的inex一致，就让谁高亮  -->
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          :default-active="changeActive()"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <router-link to="/customer">客户管理</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/orgaine">组织结构</router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <span>欢迎:{{ name }}</span>
        <a href="javascript:;" @click="dialogVisible = true">修改密码</a>
        <a href="javascript:;" @click="signout">安全退出</a>
      </div>
    </header>

    <main class="mainBox" ref="mainBox">
      <router-view></router-view>
    </main>

    <el-dialog
      title="修改密码"
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="handleClose"
    >
      <span>
       新密码： <el-input v-model="password" placeholder="请输入内容" show-password></el-input>
       <br/>
        确认密码： <el-input v-model="secondPassword" placeholder="请输入内容" show-password></el-input>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handlePass">确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import md5 from 'blueimp-md5';
import { getInfo, signOut,updatePassword} from "./api/main";
export default {
  data() {
    return {
      name: "",
      dialogVisible:false,
      password:'',
      secondPassword:''
    };
  },
  created() {
    getInfo().then((result) => {
      let { code, data } = result;
      if (code == 0) {
        this.name = data.name;
      } else {
        this.$message.error("请求个人信息失败，请刷新重试");
      }
    });
  },
  methods: {
    changeActive() {
      // 让页面刷新的时候，此函数就会执行，
      // 1,。获取当前页面对应的url上的hash值
      // 2.如果hash的值为customer，那就return '1';如果hash的值为orgaine，那就return '2'
      let hash = location.hash;
      if (hash.includes("customer")) {
        return "1";
      } else {
        return "2";
      }
    },
    signout() {
      this.$confirm("您确定要退出吗?", "温馨提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          return signOut();
        })
        .then((result) => {
          let { code } = result;
          if (code == 0) {
            this.$alert("恭喜您，退出成功", {
              callback: () => {
                location.href = "/login.html";
              },
            });
          } else {
            this.$message.error("不好意思退出失败，请稍后重试");
          }
        })
        .catch(() => {
          console.log("取消");
        });
    },
    handleClose(){
      this.$confirm('提示','您确定要关闭am')
    },
    handlePass(){
        if(this.password !== this.secondPassword){
          this.$message.error('您两次密码不一致，请重新输入');
          return;
        }
        updatePassword({
          password:md5(this.password)
        }).then((result)=>{
          let {code} = result;
          if(code == 0){
            this.$message.success('密码修改成功')
          }
          else{
            this.$message.error('密码修改失败')
          }
          this.dialogVisible = false;
          this.password = '';
          this.secondPassword = ''
        })

    }
  },
  mounted() {
    let winH = document.documentElement.clientHeight,
      headerBox = this.$refs.headerBox,
      mainBox = this.$refs.mainBox;
    mainBox.style.height = winH - headerBox.offsetHeight + "px";
    this.$forceUpdate(); // 让视图强制刷新
  },
};
</script>

