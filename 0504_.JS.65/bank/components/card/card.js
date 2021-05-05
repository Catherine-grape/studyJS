// components/card/card.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    jump(e){
      let cardCode=e.currentTarget.dataset.code;
      console.log(e);
      wx.navigateTo({
        url: `/pages/detail/detail?code=${cardCode}`,
      })
    }
  }
})
