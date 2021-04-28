<template>
  <div class="formBox">
    <el-form ref="form" :model="formData" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="formData.sex">
          <el-radio :label="0">男</el-radio>
          <el-radio :label="1">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="formData.phone"></el-input>
      </el-form-item>
      <el-form-item label="QQ">
        <el-input v-model="formData.QQ"></el-input>
      </el-form-item>
      <el-form-item label="weixin">
        <el-input v-model="formData.weixin"></el-input>
      </el-form-item>
      <el-form-item label="客户类别">
        <el-select v-model="formData.type" placeholder="请选择客户类别">
          <el-option label="重点客户" value="重点客户"></el-option>
          <el-option label="一般客户" value="一般客户"></el-option>
          <el-option label="放弃客户" value="放弃客户"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addCustom, queryCustomInfo, updateCustom } from "../../api/customer";

export default {
  data() {
    return {
      formData: {
        name: "",
        sex: "",
        email: "",
        phone: "",
        QQ: "",
        weixin: "",
        type: "",
      },
    };
  },
  beforeDestroy(){
    this.resetForm()
  },
  created() {
    console.log(this.$route.query,666);
    if (this.$route.query.id) {
      queryCustomInfo({
        customerId: parseInt(this.$route.query.id),
      }).then((res) => {
        let { name, sex, email, phone, QQ, weixin, type } = res.data;
        this.formData = {
          name,
          sex,
          email,
          phone,
          QQ,
          weixin,
          type,
        };
      });
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // alert("submit!");
          // console.log(this.formData);
          let { formData } = this;
          if (this.$route.query.id) {
            updateCustom({
              customerId:this.$route.query.id,
              name: formData.name,
              sex: formData.sex,
              email: formData.email,
              phone: formData.phone,
              QQ: formData.QQ,
              weixin: formData.weixin,
              type: formData.type,
            }).then((res) => {
              if (res.code === 0) {
                this.$alert("修改成功", "提示", {
                  
                  callback: () => {
                    this.$router.push("/custom/list?type=my");
                  },
                });
              }
            });
          } else {
            addCustom({
              name: formData.name,
              sex: formData.sex,
              email: formData.email,
              phone: formData.phone,
              QQ: formData.QQ,
              weixin: formData.weixin,
              type: formData.type,
            }).then((res) => {
              if (res.code === 0) {
                this.$alert("新增成功", "提示", {
                  callback: () => {
                    this.$router.push("/custom/list?type=my");
                  },
                });
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.formBox {
  box-sizing: border-box;
  height: 100%;
  padding: 30px;
  font-size: 14px;
  overflow-y: auto;
}

.formBox .form {
  /* margin-bottom: 15px; */
}

.formBox .form > .inpBox {
  display: flex;
}

.formBox .form > .inpBox > span {
  margin-right: 15px;
  width: 100px;
  line-height: 30px;
  text-align: right;
}

.formBox .form > .inpBox > input[type="text"] {
  box-sizing: border-box;
  width: 300px;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
}

.formBox .form > .inpBox > input[type="radio"],
.formBox .form > .inpBox > input[type="checkbox"],
.formBox .form > .inpBox > label {
  box-sizing: border-box;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
}

.formBox .form > .inpBox > label {
  margin-right: 20px;
}

.formBox .form > .inpBox > select {
  box-sizing: border-box;
  width: 150px;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
}

.formBox .form > .inpBox > textarea {
  box-sizing: border-box;
  width: 300px;
  padding: 0 10px;
  height: 90px;
  line-height: 30px;
}

.formBox .form > span {
  display: block;
  padding-left: 115px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  color: lightcoral;
}

.formBox .submit {
  margin-left: 110px;
  border: none;
  background: #29e;
  color: #fff;
  width: 150px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
</style>