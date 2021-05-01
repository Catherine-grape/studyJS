<template>
  <div>
    <div class="header">
      <el-select v-model="type" placeholder="请选择" @change="change">
        <el-option label="全部客户" value=""> </el-option>
        <el-option label="重点客户" value="重点客户"> </el-option>
        <el-option label="一般客户" value="一般客户"> </el-option>
        <el-option label="放弃客户" value="放弃客户"> </el-option>
      </el-select>
      <el-input
        v-model="search"
        @change="change"
        placeholder="请输入搜索内容"
        class="input"
      ></el-input>
    </div>
    <el-divider content-position="left">haha</el-divider>
    <div class="tableBox">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="name" label="姓名" min-width="8%" align="center">
        </el-table-column>
        <el-table-column align="center" prop="sex" label="性别" min-width="8%">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          show-overflow-tooltip
          min-width="10%"
        >
        </el-table-column>

        <el-table-column
          prop="phone"
          show-overflow-tooltip
          label="电话"
          min-width="10%"
        >
        </el-table-column>
        <el-table-column
          prop="weixin"
          show-overflow-tooltip
          label="微信"
          min-width="10%"
        >
        </el-table-column>
        <el-table-column
          prop="QQ"
          show-overflow-tooltip
          label="QQ"
          min-width="10%"
        >
        </el-table-column>
        <el-table-column prop="type" label="客户类型" min-width="10%">
        </el-table-column>
        <el-table-column prop="userName" label="隶属人" min-width="10%">
        </el-table-column>
        <el-table-column
          prop="address"
          show-overflow-tooltip
          label="地址"
          min-width="10%"
        >
        </el-table-column>
        <el-table-column label="操作" min-width="14%">
          <template slot-scope="scope">
            <el-button type="text">删除</el-button>
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
      limit: 10,
      page: 1,
      total: 0,
      tableData: [],
    };
  },
  beforeRouteUpdate(to, from, next) {
    // 路由给提供的组件内的守卫，他的执行机制和watch中的$route是一样的，切换路由的时候组件没有被切换，但是路由信息发生了变化，这时候此函数就会被执行
    console.log(123456);
    next();
  },
  created() {
    this.queryData();
  },
  watch: {
    $route() {
      // 因为当前的我的客户和全部客户是共用的一个组件，虽然是不同的路由，然是渲染的是同一个组件，这样也就导致了，组件不会重新加载，他的钩子函数不会重新执行，咱们可以监听$route的变化，只要路由发生变化了，那watch就能够监听到$route的变化     侦听器
      // 当路由发生变化之后，你就可以重新请求数据了
      console.log(this.$route.query, 98);
      this.queryData();
    },
  },
  methods: {
    change(value) {
      this.page = 1;
      this.queryData();
    },
    changeSize(value) {
      this.page = value;
      this.queryData();
    },
    jump(scope){
      this.$router.push({
        path:'/customer/add',
       query:{
          id:scope.row.id
       }
      })
    },
    queryData() {
      console.log(this.$route.query, 61);
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
  },
};
</script>

<style lang="less">
.header {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  .input {
    width: 250px;
    margin-right: 10px;
  }
}
</style>