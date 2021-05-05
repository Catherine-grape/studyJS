let utils = require('../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputValue: '',
        textValue: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    inputValue(e) {
        this.setData({
            inputValue: e.detail.value
        })
    },
    textValue(e) {
        this.setData({
            textValue: e.detail.value
        })
    },

    add() {
        console.log(222)
        let {
            inputValue,
            textValue 
        } = this.data;
        if (!inputValue || !textValue) {
            let text = (!inputValue && !textValue) ? '标题和内容都不能为空！' : !inputValue ? '标题不能为空' : '内容不能为空';
            wx.showModal({
                title: '提示',
                content: text,
                showCancel: false,
                confirmText: '知道了',
                confirmColor: '#EE2C2C'
            });
            return;
        }
        let time = utils.formatTime(new Date());
        let notes = wx.getStorageSync('notes')|| [];
        notes.unshift({
            title: inputValue,
            content: textValue,
            time
        });
        wx.setStorageSync('notes', notes);
        wx.navigateBack({
            delta: 1
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