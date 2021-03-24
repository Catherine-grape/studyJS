// in (检测是否是我的属性)  hasOwnProperty(是否是我的私有属性)  hasPublicProperty（检测是否是我的公有属性）
let obj = {
    a: 1,
    b: 2
};



let res = Object.prototype.hasOwnProperty('hasOwnProperty');

function hasPublicProperty(key) {
    // this-->obj key-->a
    // 要求key必须是数字或者字符串
    // 在这里进行拦截，如果key的类型不符合咱们的规则，那就直接return false
    let ary = ['number', 'string'];
    let type = typeof key;
    if (!ary.includes(type)) return false;
    

    // 先用in检测一下当前的key是否是我的属性
    // 然后再拿hasOwnProperty检测一下是否是我的私有属性，那这样就可以判断了
    let n = key in this;
    let m = this.hasOwnProperty(key);
    return n && !m
    
    /* if (n && !m) {
        // 如果成立就代表是公有属性
        return true;
    }
    return false; */
}
Object.prototype.hasPublicProperty = hasPublicProperty;
Object.prototype.ss = 100;
console.log(obj.hasPublicProperty('a'));//false