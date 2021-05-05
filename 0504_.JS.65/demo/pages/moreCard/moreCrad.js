let data = require('../../mock/data.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cardList: [],
        index: 1
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(data.cardList, 1555)
        this.setData({
            cardList: data.cardList
        })
    },

    // 上拉机加载
    downFetch() {
        let {
            cardList,
            index  
        } = this.data;
        wx.showLoading({
            title: '正在加载'
        });
        setTimeout(()=> {
            this.setData({
                cardList: cardList.concat(data.cardList),
                index: index + 1
            });
            wx.hideLoading();
        }, 1000)

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
    // 上拉刷新
    onReachBottom: function () {
        console.log(22222)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})