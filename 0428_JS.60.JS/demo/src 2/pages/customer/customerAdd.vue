<template>
  <div>
    <h2>我是新增页面</h2>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="客户名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio :label="0">男</el-radio>
          <el-radio :label="1">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="QQ" prop="QQ">
        <el-input v-model="form.QQ"></el-input>
      </el-form-item>
      <el-form-item label="weixin" prop="weixin">
        <el-input v-model="form.weixin"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="type">
        <el-select v-model="form.type" placeholder="请输入活动类型">
          <el-option label="重点客户" value="重点客户"></el-option>
          <el-option label="放弃客户" value="放弃客户"></el-option>
          <el-option label="一般客户" value="一般客户"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input type="textarea" v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">立即创建</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { addCustomer,queryCustomerInfo,updateCustomer } from "../../api/customer";
var validatePass2 = (rule, value, callback) => {
  // 此函数是用来进行自定义校验的，当不校验通过之后，就调用callback并且给他传递一个new Error('xxxxxx')  ,  如果通过就直接执行callback()
  let reg = /^1[3-8]\d{9}$/;
  if (!reg.test(value)) {
    callback(new Error("手机号格式不对"));
  } else {
    callback();
  }
};
export default {
  name:'add',
  data() {
    return {
      form: {
        name: "",
        sex: 0,
        email: "",
        phone: "",
        QQ: "",
        weixin: "",
        type: "重点客户",
        address:''
      },
      rules: {
        phone: [
          { required: true, message: "请输入输入电话", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },
  activated(){
    console.log('activated');
  },
  created(){
    console.log('我是新增组件，我被重新加载了');
    console.log(this.$route.query,76);
    let {id} = this.$route.query;
    // 如果当前的id有值，说明是从点击编辑按钮那里过来的，这时候的去请求客户详细信息，并且渲染到页面
    // 如果没有id，那说明是点击新增客户按钮进来的，这时候不主要请求客户详细信息
    if(id || id==0){
      queryCustomerInfo({customerId:id}).then((result)=>{
        let {code,data} = result;
        if(code == 0){
          let {name,sex,email,weixin,QQ,address,phone,type} = data;
          this.form = {name,sex,email,weixin,QQ,address,phone,type}
        }
      })
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          this.$message.error("请按规则填写表单");
          return;
        }

        // 发送新增的接口请求
        // 或者发送修改的接口
        let {id}= this.$route.query;
        console.log(id,101);
        let {form} = this;
        if(id || id == 0){
          updateCustomer({
            customerId:id,
            ...form
          }).then((result)=>{
            let {code} = result;
            if(code == 0){
            this.$alert('恭喜您。修改成功',{
              callback:()=>{
                this.$router.push({
                  path:'/customer/list',
                  query:{type:'my'}
                })
              }
            })
          }
          });
          return;
        }
        
        addCustomer(form).then((result)=>{
          let {code} = result;
          if(code == 0){
            this.$alert('恭喜您。您增成功',{
              callback:()=>{
                this.$router.push({
                  path:'/customer/list',
                  query:{type:'my'}
                })
              }
            })
          }
        })
        console.log("正常提交");
      });
    },
    reset() {
      this.$refs.form.resetFields();
    },
  },
};
</script>

<style lang="less">
</style>