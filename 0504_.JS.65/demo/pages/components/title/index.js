// pages/components/title/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        titleName: {
            type: String,
            value: '标题'
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
        jumpRouter() {
            wx.navigateTo({
                url: '/pages/moreCard/moreCrad'
            })
        }
    }
})
