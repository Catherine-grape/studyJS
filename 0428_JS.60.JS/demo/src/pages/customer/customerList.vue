
<template>
  <div>
    <div class="header">
      <!-- 我是客户列表 -->
      <el-select v-model="type" placeholder="请选择" @change="change">
        <el-option label="全部客户" value=""> </el-option>
        <el-option label="重点客户" value="重点客户"> </el-option>
        <el-option label="一般客户" value="一般客户"> </el-option>
        <el-option label="放弃客户" value="放弃客户"> </el-option>
      </el-select>
      <el-input
        class="input"
        v-model="search"
        placeholder="请输入搜索内容"
        @change="change"
      ></el-input>
    </div>
    <el-divider content-position="left">少年包青天</el-divider>
    <div class="tableBox">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column
          prop="name"
          label="姓名"
          align="center"
          min-width="10%"
        >
        </el-table-column>
        <el-table-column prop="sex" label="性别" align="center" min-width="8%">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          align="center"
          show-overflow-tooltip
          min-width="20%"
        >
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话"
          align="center"
          min-width="10%"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="weixin"
          label="微信"
          align="center"
          min-width="10%"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="QQ"
          label="QQ"
          align="center"
          show-overflow-tooltip
          min-width="10%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="类型"
          align="center"
          show-overflow-tooltip
          min-width="15%"
        >
        </el-table-column>
        <el-table-column
          prop="userName"
          label="隶属人"
          align="center"
          min-width="15%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          align="center"
          show-overflow-tooltip
          min-width="30%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
          align="center"
          min-width="25%"
        >
        <el-button type="text">删除</el-button>
        <template slot-scope="scope">
        <el-button type="text" @click="jump(scope)">编辑</el-button>
        <el-button type="text">回访</el-button>
        </template>
        </el-table-column>
        
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="changeSize"
        v-show="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getCustomerList } from "../../api/customer";

export default {
  data() {
    return {
      type: "",
      search: "",
      tableData: [
        {
          name: "",
          sex: "王小虎",
          email: "",
          phone: "",
          weixin: "",
          QQ: "",
          address: "上海市普陀区金沙江路 1518 弄",
          userName: "",
        },
      ],
      limit: 10,
      page: 1,
      total: 0,
    };
  },
  created() {
    this.queryData();
  },
  methods: {
    change(value) {
      console.log(value);
      this.page = 1;
      this.queryData();
    },
    queryData() {
      getCustomerList({
        lx: this.$route.query.type || "my",
        type: this.type,
        search: this.search,
        limit: this.limit,
        page: this.page,
      }).then((result) => {
        let { code, data, total } = result;
        if (code == 0) {
          this.tableData = data;
          this.total = total;
        } else {
          this.tableData = [];
          this.total = 0;
        }
      });
    },
    changeSize(value) {
      //   console.log(value);
      this.page = value;
      this.queryData();
    },
    jump(scope) {
      this.$router.push({
        path: "/customer/add",
        query: {
          id: scope.row.id,
        },
      });
    },
  },
  watch: {
    //侦听器
    $route() {
      //   因为当前我的客户和全部客户公用一个组件，虽然是不同的路由，但是渲染的是同一个组件，这样也就导致了组件不会重新加载，它的钩子函数不会重新执行，咱们可以监听这个$route的变化，只要路由发生变化，那这个watch就能够监听到$route的变化。当路由发生变化之后，就可以重新请求数据了。
      console.log(this.$route.query, 169);
      this.queryData();
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .input {
    width: 200px;
    margin-left: 10px;
  }
}
</style>