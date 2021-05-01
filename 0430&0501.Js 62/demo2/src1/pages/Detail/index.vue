<template>
  <div v-html="body"></div>
</template>
<script>
import { detail } from "../../api";
export default {
  name:'Detail',
  data() {
    return {
      body: "",
    };
  },
  async created() {
    console.log(this.$route, 9);
    let id = this.$route.params.id;
    let { body, css } = await detail(id);
    this.body = body;
  },
};
</script>
<style lang="less" scoped>
</style>