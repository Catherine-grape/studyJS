<style lang="less">
.container {
  width: 90%;
  box-sizing: border-box;
  border: 1px solid lightblue;
  padding: 10px;
  margin: 5%;
  .headerBox {
    display: flex;
    justify-content: space-between;
  }
  .tagBox {
    span {
      margin-right: 10px;
    }
    i {
      color: lightcoral;
    }
  }
  .tableBox {
  }
}
</style>

<template>
  <div id="app">
    <div class="container">
      <header class="headerBox">
        <h2>板牙拖车</h2>
        <el-button type="success" @click="dialogVisible = true"
          >创建任务</el-button
        >
      </header>
      <el-divider content-position="left">
        <i class="el-icon-cold-drink"></i>
      </el-divider>
      <div class="tagBox">
        <!-- 如果函数里的代码只有一句话，可以把 -->
        <el-tag :type="0 == type ? 'success' : 'info'" @click="changeType(0)">
          标签三
        </el-tag>
        <el-tag :type="1 == type ? 'success' : 'info'" @click="changeType(1)">
          标签三
        </el-tag>
        <el-tag :type="2 == type ? 'success' : 'info'" @click="changeType(2)">
          标签三
        </el-tag>

        <el-divider content-position="center"
          ><i class="el-icon-s-promotion"></i
        ></el-divider>
      </div>

      <div class="tableBox">
        <el-table
          :data="tableData"
          style="width: 100%"
          border=""
          :v-loading="true"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
        >
          <el-table-column prop="id" label="编号" width="100">
          </el-table-column>
          <el-table-column prop="task" label="任务描述" width="250">
          </el-table-column>
          <el-table-column
            prop="address"
            label="状态"
            width="100"
            :formatter="changeState"
          >
            <!-- formatter绑定的是一个函数，当前函数return啥，那对应的那一列中就显示什么，而且还会默认给函数的第一个实参传递当前行的所有值 -->
          </el-table-column>
          <el-table-column prop="time" label="完成时间" width="180">
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="scope">
              <!-- 作用域插槽，scope里的row是当前这一行的数据 -->
              <el-button type="text" size="small" @click="del(scope)"
                >删除</el-button
              >
              <el-button type="text" size="small" v-if="scope.row.state == 1"
                >完成</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="inp">
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="80%"
        :before-close="close"
        :close-on-click-modal="false"
      >
        <span>
          <!-- <el-form
            :model="ruleForm"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-date-picker v-model="ruleForm.time" type="datetime" placeholder="选择日期">
          </el-date-picker>
            </el-form-item>
          </el-form> -->
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="描述" prop="desc">
              <el-input v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="时间" prop="time">
              <el-date-picker
                v-model="form.time"
                type="datetime"
              ></el-date-picker>
            </el-form-item>
          </el-form>
        </span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="close">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// import{CHANGE_LIST} from './store/types'
import { removeTask } from "./api/task";
export default {
  /* created( ){
    this.$message.error('alskdjf');
  } */
  data() {
    return {
      type: 0, //切换tag按钮
      dialogVisible: false, //控制dilog的显示隐藏的
      /*    tableData: [
        {
          id: 1,
          time: "2016-05-02",
          task: "我要上厕所",
          state: 1,
        },
        {
          id: 2,
          time: "2016-05-02",
          task: "我要上厕所",
          state: 1,
        },
        {
          id: 3,
          time: "2016-05-02",
          task: "我要上厕所",
          state: 1,
        },
        {
          id: 4,
          time: "2016-05-02",
          task: "我要上厕所",
          state: 1,
        },
      ],
 */ form: {
        time: "", //用户选择的时间
        desc: "", //新增的时候的任务描述
      },
      rules: {
        desc: [
          { required: true, message: "请输入描述", trigger: "blur" },
          { min: 3, max: 50, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        time: [{ required: true, message: "请选择时间", trigger: "blur" }],
      },
      loading:true
    };
  },
  methods: {
    changeType(value) {
      this.type = value;
    },
    handleClose() {},
    submit() {
      // 1.对所有的表单进行校验
      // 2. 如果检验通过，就发送请求
      console.log(this.ruleForm);
      this.$refs.form.validate((valid) => {
        console.log(valid);
        if (!valid) {
          console.log("不行");
          return;
        }
        console.log("正常提交");
      });
      //  this.$refs.form.resetFields();//清空表单
    },
    // reset(){
    //   this.$refs.form.resetFields();//清空表单
    // }
    close() {
      this.$refs.form.resetFields();
      this.dialogVisible = false;
    },
    changeState(row) {
      // row 代表每一行中的所有数据，有多少行循环多少次
      console.log(row, 191);
      let { state } = row;
      return state == 1 ? "已完成" : "未完成";
    },
    del(scope) {
      //看一下scope是什么东西
      console.log(scope, 204);
      let id = scope.row.id;
      this.$confirm(`您确定要删除ID为${id}的数据吗, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 发送删除的接口
          return removeTask({ id });
          // removeTask({id}).then(()=>{})
        })
        .then((res) => {
          let { code } = res;
          if (code == 0) {
            this.$message.success("删除成功");
            this.loading=true;
            this.$store.dispatch("changeList").then(()=>{
              this.loading=false
            })
          } else {
            this.$message.info("删除失败");
          }
        });
    },
  },
  created() {
    this.$store.dispatch("changeList").then(()=>{
      this.loading=false;
    })
  },
  computed: {
    tableData() {
      return this.$store.state.list;
    },
  },
};
</script>

