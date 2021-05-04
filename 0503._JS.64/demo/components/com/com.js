// components/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msg: {
      type: String,
      default: "Hello Word"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    fn(e) {
      console.log(111);
      this.triggerEvent('event', { "num": 100 })
    }
  }
})
