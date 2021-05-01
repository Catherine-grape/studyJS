<template>
  <div class="container">
    <!-- MAINBOX -->
    <main class="mainBox">
      <h1 class="title">CRM客户管理系统</h1>
      <p class="tip">为保护企业的数据安全，请妥善保管密码</p>
      <section class="loginBox">
        <div class="form">
          <i class="iconfont icon-yonghuming"></i>
          <input
            v-model="account"
            type="text"
            class="userName"
            placeholder="请输入用户名/手机号/邮箱"
          />
        </div>
        <div class="form">
          <i class="iconfont icon-mima"></i>
          <input
            v-model="password"
            type="password"
            class="userPass"
            placeholder="请输入登录密码"
          />
        </div>
        <button class="submit" @click="submit">登录</button>
      </section>
    </main>
    <!-- FOOTER -->
    <footer class="footerBox">
      <span>北京珠峰世纪技术培训有限公司</span>
      <span>京ICP备09041920号</span>
      <span>京公网安备110108400531号</span>
    </footer>
  </div>
</template>

<script>
import md5 from "blueimp-md5";
import {login} from './api/login';
export default {
  data(){
    return {
      account:'',
      password:''
    }
  },
  methods:{
    checkAccount(){
      let argArr = [
        /^((\w{2,20})|([\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}))$/,
        /^1\d{10}$/,
        /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
      ];
      // 循环所有的正则，只要有一个匹配成功就可以，最后some函数的返回结果就是true
      return argArr.some(item=>{
          return item.test(this.account)
      });
    
    },
    submit(){
      console.log(111);
      // 1.对内容的格式进行校验
      // 2.如果校验通过进行发送登录接口的请求
              // 1.登录成功跳转到index首页
              // 2.登录失败提示用户登录失败
      let res = this.checkAccount(); // 如果当前函数返回true就是校验通过，否则就是没有通过
      if(!res){
        this.$alert('不好意思，用户名匹配不对');
        return;
      }
      login({
        account:this.account,
        password:md5(this.password)
      }).then((result)=>{
        let {code} = result;
        if(code ==0){
          this.$alert('登录成功',{
            callback:()=>{
              location.href = '/index.html'
            }
          })
        }
        else {
          this.$alert('登录失败')
        }
      })

    }
  }
};
</script>

<style lang='less'>
html,
body,
.container {
  height: 100%;
  font-size: 14px;
  overflow: hidden;
}

.container {
  overflow: hidden;
  height: 100%;
  font-size: 14px;
  background: url("./assets/login_bg.jpg") repeat-x;
  background-size: 100% 50%;
}

.mainBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 400px;

  .title,
  .tip {
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-weight: normal;
  }

  .tip {
    font-size: 18px;
    color: #bebebf;
  }

  .loginBox {
    box-sizing: border-box;
    margin-top: 20px;
    padding: 25px;
    background: #fff;
    border: 1px solid #f4f4f4;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);

    .form {
      position: relative;
      margin: 10px 0;

      input {
        box-sizing: border-box;
        padding-left: 40px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        border: 1px solid #aaa;
      }

      i {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
        &.icon-mima {
          left: 7px;
          font-size: 26px;
        }
      }
    }

    .submit {
      box-sizing: border-box;
      margin: 10px 0;
      width: 100%;
      height: 48px;
      line-height: 48px;
      text-align: center;
      font-size: 18px;
      color: #fff;
      background: #2299ee;
      border: none;
      border-radius: 2px;
      cursor: pointer;
    }
  }
}

.footerBox {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  line-height: 50px;
  text-align: center;
  color: #999;

  span {
    padding: 0 10px;
  }
}
</style>