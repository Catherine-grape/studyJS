// components/bank/bank.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  data:{
  type:Array,
  default:[]
}
  },

  /**
   * 组件的初始数据
   */
  data: {
    isHeight:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    fn(){
      let isHeight=!this.data.isHeight
      this.setData({
        isHeight:isHeight
      })
    }
  }
})
