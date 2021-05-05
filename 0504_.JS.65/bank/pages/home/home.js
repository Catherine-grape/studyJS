let data = require("../../mock/data");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData: [],
    bankList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 小程序的请求在这里发送
    this.getData()
  },
  getData() {
    wx.showLoading({
      title: '加载中',
    })
    // 假设定时器里的函数就是请求成功以后调用的回调函数  wx.request
    setTimeout(() => {
      wx.hideLoading();
      let {
        swiper,
        bankList,
        cardList
      } = data;
      this.setData({
        swiperData:swiper,
        bankList:bankList,
        cardList
      })
    }, 2000)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})