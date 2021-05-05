// pages/note/note.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        notes: []
    },
    jumpAddNote() {
        wx.navigateTo({
            url: '/pages/addNote/addNote'
        })
    },
    delete() {
        wx.showModal({
            title: '提示',
            content: '确认删除吗?',
            showCancel: true,
            cancelText: '不删除了',
            cancelColor: 'green',
            confirmText: '当然',
            confirmColor: 'red',
            success: res => {
                if(res.confirm) {
                    wx.clearStorageSync();
                    wx.showToast({
                        title: '删除成功',
                        duration: 1000
                    });
                    let notes = wx.getStorageSync('notes');
                    this.setData({
                        notes
                    })
                }
                else {

                }
            }
        })
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
        let notes = wx.getStorageSync('notes') || [];
        this.setData({
            notes
        })
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