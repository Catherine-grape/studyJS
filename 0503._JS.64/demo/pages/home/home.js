


// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 'Hello Word'
  },
  fn(e) {
    console.log(111, e);
    // 点击hello跳转到a页面
    // wx.navigateTo({
    //   url: '/pages/a/a',
      
    // });
    wx.redirectTo({
      url: '/pages/a/a?type=1',
    })
    // wx.reLaunch({
    //   url: '/pages/home/home',
    // })
  },
  fn1(e) {
    console.log("fn1", e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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