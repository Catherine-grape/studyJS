let data = require('../../mock/data.js');
let app = getApp();
let animate = wx.createAnimation({
    duration: 400,
    timingFunction: '"linear"',
    delay: 0,
    transformOrigin: '"50% 50% 0"',
});
let audio = wx.getBackgroundAudioManager();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cardItem: {},
        animationData: {},
        deg: 10,
        flag: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let id = options.id;
        let cardList = data.cardList.filter(item => item.cardCode === id);
        this.setData({
            cardItem: cardList[0]
        });

        // 动画部分
        let {
            flag,
            deg
            } = app.data;

        this.setData({
            flag,
            deg

        });
        if (flag) {
            this.setAnimate();
            this.setBackgroundAudio();
        }
        else {
            let animationData = animate.rotate(deg).step();
            this.setData({
                animationData: animationData.export()
            })
        }
            
    },

    // 设置动画
    setAnimate() {
        clearInterval(this.int);
        this.int = setInterval(() => {
            let deg = this.data.deg;
            let animationData = animate.rotate(deg).step();
            this.setData({
                animationData: animationData.export(),
                deg: deg + 10
            })
        }, 80)
    },
    // 点击小红心
    musicTap() {
        let flag = this.data.flag;
        if (flag) {
            clearInterval(this.int);
            audio.pause();
            this.setData({
                flag: false
            })
        }
        else {
            this.setAnimate();
            audio.play();
            this.setData({
                flag: true
            })
        }
    },

    // 这是背景音乐
    x() {
        audio.src ="http://dl.stream.qqmusic.qq.com/C400002DDUww1eqmwO.m4a?guid=2798094811&vkey=98EDED7D871BB370003138A713A3DEA79848773171C436E0F63FD2C8483EEA099FCCDB4103326A16ACD57A25B9EC6E597F125F0415C885C9&uin=5372&fromtag=66",
        audio.title="小白兔"
    },


    // 点击申请
    apply() {
        wx.showModal({
            title: '申请通知',
            content: '恭喜您，申请成功！',
            showCancel: false,
            confirmText: '知道了',
            confirmColor: '#EE2C2C'
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
        console.log('页面卸载')
        let {
            deg,
            flag
        } = this.data;
        app.data.flag = flag;
        app.data.deg = deg;
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