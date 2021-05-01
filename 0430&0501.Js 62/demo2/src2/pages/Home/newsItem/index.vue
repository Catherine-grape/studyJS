<template>
    <div class="box">
      <div class="date">
        <span>{{item.date}}</span>
        <span class="line"></span>
      </div>
      <ul>
        <li v-for="(ite,index) in item.list" :key="index">
          <div>
            <p>{{ite.title}}</p>
            <p>{{ite.hint}}</p>
          </div>
            <img :src="ite.images[0]" alt="">
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    props: ['item'],
    data() {
        return {

        };
    },
};
</script>

<style scoped lang="less">
  .box {
    width: 100%;
    box-sizing: border-box;
    padding:.2rem;
    padding-bottom: .3rem;
    font-size:.3rem;
      .date {
        position: relative;
        .line {
          display: block;
          width: 70%;
          height: 2px;
          background: black;
          position: absolute;
          right:2px;
          top:35%
        }
      }
    li {
    
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom:1px solid rgb(92, 90, 90);
      img {
        display: block;
        height: 1rem;
        width: 1rem;
        border:1px solid black
      }
    }
  }
</style>
