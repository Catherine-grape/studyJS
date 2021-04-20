// 封装组件不能放请求
let bannerFocus = {
    props:['data',"index",'change'],
    template: `
    <div class="pagination">
			<span :class="{active:checkFocus(index)}" :key="index" v-for="(item,index) in data" @click="change(index)"></span>
			
        </div>
        `,
    methods: {
        checkFocus(i) {
            // 如果档期啊你的页面展示的是第一张图片，那this.index是5，但是id 的值是0，1，2，3，4所以不会出现相等的情况，这时候应该让第一个焦点高亮「让第一个焦点高亮的办法就是让flag等于0，就可以了」
            let flag = this.index == this.data? 0 : this.index;
            if (i == flag) {
                return true
            }
           return false
        }
    }
}
let bannerButton = {
    props:['change'],
    template: ` 
        <div>
            <a href="#" class="button-prev" @click="change('left')"></a>
            <a href="javascript:;" class="button-next" @click="change('right')"></a>
         </div>
         `
}
let banner = {
    components: {
        bannerButton,
        bannerFocus
    },
    data() {
        let ss = [...this.data, this.data[0]];//实现轮播图的无缝滚动，要把第一张图片复制放到最后，但是有不能直接修改从外界接收的数据「原始数据」，所以就直接创建了一个新数组。
        console.log(ss);
        let index = this.index;//从外界传过来的index属性
        let duration = this.duration;
        return {
            bannerList: ss,
            activeIndex: index,//控制显示那张图片
            sty: {
                width: ss.length * 1000 + "px",
                transition: `all ${duration} linear`,
                left: -(index * 1000) + "px"
            }
        }
    },
    methods: {
        autoMove() {

            // 当前函数就是用来控制图片轮播的
            this.activeIndex++;
            if (this.activeIndex == this.bannerList.length) {//如果当前的this.activeIndex等于4的话，说明图片已经轮播到最后一张了，我们应该马上让图片切换到第一张（不能有过渡地时间
                /*  clearInterval(this.timer)
                 this.timer = null; */
                this.sty.left = 0 + "px";
                this.sty.transition = `all 0ms linear`
                this.activeIndex = 1;
                // 让视图更新两次，第一次让上面的三个代码先更新一次「图片已经到达最左边」
                // 然后再进行第二次视图的更新，执行nextTick中的回调函数
                // 浏览器也有自己的渲染队列机制，如果有多行修改样式的代码，浏览器只会操作一次,那这样的话，nextTick只是避开了vue的优化机制，但是浏览器的优化机制，还需重新处理
                this.$nextTick(() => {//当前的回调函数会在第一次视图更新完成之后再执行
                    // 浏览器在渲染时读写分离会渲染两次，如果一直都是写的话，浏览器会一次性放到渲染队列中，如果出现读会会先把之前的渲染队列渲染完毕后，然后再读

                    let a = this.$refs.a.clientWidth;
                    console.log(a);
                    this.sty.transition = `all ${this.duration}ms linear`
                    this.sty.left = -(this.activeIndex * 1000) + "px";
                });
                return
            }
            this.sty.transition = `all ${this.duration}ms linear`
            this.sty.left = -(this.activeIndex * 1000) + "px";

        },
        changeSport(flag) {
            console.log(flag);
            if (flag) {
                clearInterval(this.timer);
                this.timer = null;
            } else {
                this.timer = setInterval(this.autoMove, this.interval);
            }
        },
        // 点击焦点进行图片的切换
        changeIndex(id) {
            this.activeIndex = id;
            this.sty.left=-(this.activeIndex*1000)+"px"
        },
        // 点击左右小耳朵进行图片的切换
        buttonChange(flag) {
            if (flag == 'right') {
                this.autoMove();
            }
            else {
                this.activeIndex--;
                if (this.activeIndex < 0) {
                    this.sty.left = -(this.bannerList.length-1)*1000 + "px";
                    this.sty.transition = `all 0ms linear`
                    this.activeIndex = this.bannerList.length - 2;//
                    
                    this.$nextTick(() => {
                        let a = this.$refs.a.clientWidth;
                        console.log(a);
                        this.sty.transition = `all ${this.duration}ms linear`
                        this.sty.left = -(this.activeIndex * 1000) + "px";
                    });
                    return
                }
                this.sty.transition = `all ${this.duration}ms linear`
                this.sty.left = -(this.activeIndex * 1000) + "px"
            }
        }
    },

    mounted() {
        // 把定时器的返回值存储到当前this实例上，这样以后你清除定时器的时候方便获取到定时器的返回值
        // 当mounted执行的时候，说明dom真实存在了，这时候就可以开启定时器让auto
        this.timer = setInterval(this.autoMove, this.interval);
    },

        template: `
    <section class="container" @mouseover="changeSport(true)" @mouseleave="changeSport(false)">
		<div class="wrapper" :style="sty" ref='a'>
			<div class="slide" :key="index" v-for="(item,index) in bannerList">
				<img  :src="item.pic" alt="">
			</div>			
        </div>
        <banner-button v-if="button" :change="buttonChange"></banner-button>
        <bannerFocus :data="bannerList.length-1" :index="activeIndex" :change="changeIndex" v-if="focus" ></bannerFocus>
    </section>
    `,
    props: {
        data: {
            type: Array,
            required: true
        },
        interval: {
            type: Number,
            default: 2000
        },
        duration: {
            type: Number,
            default: 1000
        },
        button: {
            type: Boolean,
            default: false
        },
        focus: {
            type: Boolean,
            default: false
        },
        index: {
            type: Number,
            default: 0
        }
    }


}