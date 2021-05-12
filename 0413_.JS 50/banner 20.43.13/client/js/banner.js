const bannerButton = {
  template: `
  <div>
      <a href="javascript:;" class="button-prev" @click="change('left')"></a>
      <a href="javascript:;" class="button-next" @click="change('right')"></a>
  </div>
  `,
  props:['handle_button'],
  methods:{
    change(flag){
      this.handle_button(flag);
    }
  }

};
const bannerFocus = {
  template: `
    <div class="pagination">
      <span :class="{'active':isActive(index)}" v-for="(item,index) in data" @click="change_index(index)" :key="index"></span>
    </div>
  `,
  props:['data','active_index','change_index'],
  methods:{
    isActive(index){
      // 如果当前的active_index的值是3，那就说明页面展示的是第四张图片，第四张图片吗应该和第一张图片公共一个焦点
      // 因为this.active_index是父级传递过来的属性，只能读，不能改
      let flag = this.active_index;
      if(flag == this.data){ // 3
        flag = 0;
      }
      return flag == index;
    }
  }

};
const banner = {
  template: `
    <div class="container" @mouseover='autoTimer("ok")' @mouseout="autoTimer('no')">
        <div class="wrapper" :style="sty" ref="wrapper">
            <div class="slide" v-for="(item,index) in bannerData" :key="index">
              <img :src="item.pic" alt="">
            </div>
           
        </div>
        
        <banner-focus v-if="focus" :data="bannerData.length-1" :active_index="activeIndex" :change_index="changeIndex"></banner-focus>
        <banner-button v-if="button" :handle_button="handleButton"></banner-button>
    </div>
  `,
  components: {
    bannerButton,
    bannerFocus
  },
  created() {
    this.init(this);
  },
  data() {
    let bannerData = [...this.data, this.data[0]];
    let index = this.index; // 获取父级传递过阿来的index(默认显示的图片的索引)

    //轮播图的核心就是不断的刘永定时器改变wrapper的left值
    return {
      bannerData,
      // 1000是图片的宽度
      sty: {
        left: -index * 1000 + "px", // 设置默认的显示哪张图片
        transition: `left ${this.speed}ms linear`, // 设置过度动画以及过度时间
        width: bannerData.length * 1000 + 'px' // 设置wrapper的总宽度
      },
      activeIndex: index // 他初始的值和index一样，以后就代表页面上显示的图片的索引
    }
  },
  updated() {
    this.transitoned(this);
  },
  props: {
    data: {
      // 接收的是当前轮播图的数据
      type: Array,
      required: true
    },
    button: {
      // 控制左右小耳朵是否显示
      type: Boolean,
      default: true
    },
    focus: {
      // 控制焦点是否显示
      type: Boolean,
      default: true
    },
    speed: {
      // 控制图片的运行速度
      type: Number,
      default: 1000
    },
    interval: {
      // 控制轮播的速度
      type: Number,
      default: 2000
    },
    index: {
      // 初始显示的图片的索引
      type: Number,
      default: 0
    },
    init: {
      // 轮播图初始化完成之后执行的回调函数
      type: Function,
      default: function () { }
    },
    transitoned: {
      // 每切换一张图片就执行一次的回调函数
      type: Function,
      default: function () { }
    }

  },
  methods: {
    autoMove() {
      this.activeIndex++;// 定时器每执行一次就让activeIndex加加一次，他可以代表当前显示的图片的索引
      // 页面一共4张图片，最后一张图片的索引是3


      // 如果activeIndex大于等于4了，说明已经运动到最后一张了，这时候应该马上切换到第一张(因为第一张和最后一张一样，还得把过度时间设置为0)
      if (this.activeIndex >= this.bannerData.length) {
        this.sty.transition = `left 0ms linear`;
        this.sty.left = 0 * 1000 + 'px';
        // 让图片马上运动到第一张，而且过度时间是0
        //------------------------------------------
        this.activeIndex = 1; // 紧接着把activeIndex改为1
        this.$nextTick(() => {
          // 加一个读的过程，在浏览器开就把写分开了
          this.$refs.wrapper.offsetWidth; // 这句话就是为了在浏览器渲染机制中渲染两次视图用的
          this.sty.left = -this.activeIndex * 1000 + 'px';
          this.sty.transition = `left ${this.speed}ms linear`;
        });
        return;
      }
      // 现在只是解决了在vue中让他进行两次模板的生成并且挂载到dom上

      this.sty.left = -this.activeIndex * 1000 + 'px'; // 不断的设置最新的left值
      this.sty.transition = `left ${this.speed}ms linear`;

      // 由于vue内部的性能优化机制，在函数里多次改变this上的数据，最后只触发一次视图的更新
      //在this实例上有一个属性叫做 $nextTick,他可以传递一个回调函数，这个回调函数会等到视图渲染完成之后在执行
    },
    autoTimer(type) {
      if (type == 'ok') {
        clearInterval(this.timer);
      }
      else if (type == 'no') {
        this.timer = setInterval(this.autoMove, this.interval);
      }
    },
    handleButton(flag) {
      // left   right
      if (flag == 'right') {
        this.autoMove()
      }
      else if (flag = 'left') {
        this.activeIndex--;
        // 如果当前的activeIndex的值小于0了，说明用户已经点击到最左边了
        // 应该把图片迅速移动到最后一张(过度时间置为0)，用户感知不到
        // 移动完成把activeIndex改为倒数第二张的索引，然后在加上过度时间，把图片也切换到倒数第二张(改变left)
        if(this.activeIndex<0){
          this.sty.transition = `left 0ms linear`;
          this.sty.left = -(this.bannerData.length-1) * 1000 + 'px';
          this.activeIndex = this.bannerData.length-2; // 倒数第二张的索引
          this.$nextTick(()=>{
            this.$refs.wrapper.offsetWidth; 
            this.sty.transition = `left ${this.speed}ms linear`;
            this.sty.left = -this.activeIndex * 1000 + 'px';
          });
          return;
        }
        this.sty.left = -this.activeIndex * 1000 + 'px';
        this.sty.transition = `left ${this.speed}ms linear`;
      }
    },
    changeIndex(index){
      this.activeIndex = index;
      this.sty.left = -this.activeIndex*1000 + 'px';
    }
  },
  // 生成一个定时器，不断控制wrapper的left的值的变化，从而实现图片的切换
  mounted() {
    // 在这里启动定时器，因为当mounted执行的时候，页面的dom已经渲染完成了，这时候开启定时器再去操作dom的样式

    // 把定时器的返回值存储到当前this实例上，以后好获取
    this.timer = setInterval(this.autoMove, this.interval);
  },
};
