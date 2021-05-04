<template>
  <div>
    <button>-</button>
    {{ num }}
    {{ state.aa }}
    {{ state.bb }}
    {{aa+bb}}
    {{sex}}
    <button @click="changeNum">+</button>
  </div>
</template>

<script>
// setup 据说在vue初始化之前
// ref 创建一个响应式的数据 如果想修改它的话，要去修改数据的value值才可以  object.defineProperty
// reactive({}) 创建一个响应式的对象 「利用的Proxy进行数据劫持」
// toRefs 把创建的响应式的对象进行分解，拆开，让用户好获取
// ...toRefs(state)  辅助函数，把当前的state拆开，变成多个值，为的就是让用户方便获取数据

// 5.watch(cb,cb)
import { ref, reactive,toRefs,computed,watch, readonly } from "vue";
export default {
  /* name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      num: 0
    }
  } */
  setup(props) {
    let a=ref(300)
    let num = ref(0); //增加一个响应式的数据
    console.log(num);
    let state = reactive({
      //创建响应式的对象 proxy
      aa: 100,
      bb: 200,
    });
   console.log(toRefs(state),32); 
    function changeNum() {
      num.value++; //ref创建的只能这么使用
      state.aa++; //对象的
      copy.value++
    }
    // 计算属性
    let sex=computed(()=>{
      return num.value%2==0?'男':'女'
    })
    // watch侦听器
    /* watch(state,(newVal)=>{
      console.log(newVal,48);
    }) */
    watch(()=>{state.aa},(newVal)=>{
      console.log(newVal,51);
    })

    // 只读的属性
    let copy=readonly(a);
    return {
      num,
      changeNum,
      ...toRefs(state),//辅助函数，把当前的state拆开，变成多个值，为的就是让用户方便获取数据
      state,
      sex,
      copy
    };
  },
};
</script>
