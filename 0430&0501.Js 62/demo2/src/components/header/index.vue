<template>
    <div class="header">
    <div class="base">
      <span class="time">
        <em>30</em>
        <em>四</em>
      </span>
      <h1 class="title">知乎日报</h1>
    </div>
    <div class="user">
      <img src="../../assets/images/timg.jpg" alt="" />
    </div>
  </div>
</template>

<script>

export default {
props:[],
data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style lang="less" scoped>
.header{
    width: 100%;
    box-sizing:border-box;
    padding: .1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .base{
        font-size:.24rem;
        display: flex;
        align-items: center;
        .time{
            padding-right: .2rem;
            display: flex;
            flex-direction: column;
            em{
                font-style: normal;
                
            }
        }
        h1{
            padding:0 .2rem;
            border-left:1px solid black;
        }
    }
    .user{
        width: .6rem;
        height: .6rem;
         img {
        display: block;
        width: 100%;
        height: 100%;

      }
    }
}

</style>