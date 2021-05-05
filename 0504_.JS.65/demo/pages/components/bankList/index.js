// pages/components/bankList/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        bankList: {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        showMore: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        isShow() {
            let showMore = this.data.showMore
            if (showMore) {
                this.setData({
                    showMore: false 
                })
            }
            else {
                this.setData({
                    showMore: true
                }) 
            }
        }
    }
})
