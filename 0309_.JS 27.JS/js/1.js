let ary = [10, 20, 30];
Array.prototype.myPush=function myPush(...arg) {
        for (let i = 0; i < arg.length; i++) {
            let item = arg[i];
            this[this.length] = item
        }
        return this.length; 
}
ary.myPush(6);