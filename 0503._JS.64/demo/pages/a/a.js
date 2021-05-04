const app = getApp();
// pages/a/a.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  fn() {
    wx.navigateBack({
      delta: 1,
    })
  },
  go() {
    wx.switchTab({
      url: '/pages/ss/ss',
    })
  },
  check() {
    let curPages = getCurrentPages();
    console.log(curPages);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options, 28);
    console.log(app.globalData.ss);
    console.log("a-load");
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
    console.log("a-show");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("a-hide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("a-unload");
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