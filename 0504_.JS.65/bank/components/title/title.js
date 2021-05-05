// components/title/title.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      default:"标题"
    },
    url:{
      type:String,
      default:''
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
    jump(){
console.log(this.properties.url);
let url=this.properties.url;
      wx.reLaunch({
        url: url,
      })
    }
  }
})
