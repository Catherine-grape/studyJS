let data = require('../../mock/data.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperData: [],
        bankList: [],
        cardList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let {
            swiper,
            bankList,
            cardList
        } = data;
        this.setData({
            swiperData: swiper,
            bankList,
            cardList: cardList.slice(0, 4)
        })
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
        setTimeout(()=> {
            wx.showToast({
                title: '刷新成功',
                duration: 1000
            });
            wx.stopPullDownRefresh();
        }, 1000)
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