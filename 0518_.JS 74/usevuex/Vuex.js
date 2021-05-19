let Vuex = (function () {
    class Store {
        constructor(options) {//options 当前的options 就是new Store时传递的配置对象
            let { state, actions, mutations } = options;
            // 这里要把state状态里的数据劫持以后再赋值到this上
            let vm = new Vue({//利用vue中的data中的数据可以实现自动的劫持，所以把用户传递进来的state在vue的data中再包装一下，这样就具有响应式了
                data: { state: state }
            })
            console.log(vm, 9);
            this.state = vm.state;
            this.dispatch = (type, payload) => {
                console.log(type, payload);
                // 洗衣部是执行actions中的方法
                // actions.changeNum(this,payload)  this是当前仓库的实例
                //actions[type].call(this, this, payload);//让actions对象中的方法执行，并且把方法里的this指向当前的store实例
                // (!payload) / typeof type==="object"&&!==null
                if (typeof payload === "undefined") {
                    actions[type.type].call(this, this, type);
                    return;
                }
                actions[type].call(this, this, payload);
            }
            this.commit = (type, payload) => {
                console.log(type, payload);
                // 下一步让mutations中的对应的方法执行
                // mutations.changeNum(this.state,payload)
                mutations[type].call(this, this.state, payload);
            }
        }

    }
    function install(vm) {
        // vm 就是Vue类
        vm.mixin({
            created() {
                // 第一次执行的时候，先执行最外层的vue根实例  this-->vue实例
                // 因为只有最外层的实例的$options里才会有store仓库，里面的儿子实例上是没有的，只有最外层可以直接过去到store仓库
                // let store = this.$options.store;
                // this.$Store = store;
                if (this.$options.store) {
                    // 只有第一次会走，后面的都走else
                    // let store = this.$options.store;
                    this.$store = store;
                } else {
                    // 从当前的父亲身上拿到store仓库，赋值到自己身上
                    this.$store = this.$parent.$store;
                }
                /* if (this.$options.store) {
                    Object.freeze(_this = this.$options.store) 
                    this.$store = store;
                } else {
                    this.$store = _this;
                } */
                console.log(this);
            }
        })
    }
    function mapState(arr) {//['num']
        // {   num: function() { return this.$store.state.num } }
        let obj = {};
        arr.forEach((item) => {
            // 这个函数在创建的时候并没有执行，在vue实例执行的时候this就是vue的实例或者组件的实例
            obj[item] = function () { return this.$store.state[item] }
        })
        return obj
    }
    function mapActions(arr = []) {
        let obj = {};
        arr.forEach(item => {
            obj[item] = function (payload) {
                this.$store.dispatch(item, payload);
            }
        })
        return obj;
        // {changeNum:function(payload){this.$store.dispatch('changeNum', payload); }}
    }
    return {
        Store: Store,
        install,
        mapState,
        mapActions
    }
}())