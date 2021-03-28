let myFilter = function (callback) {
    let ary = [];
    for (let i = 0; i < callback.length; i++){
        
    }
    let res = callback((index,item) => {
        if (res) {
            ary.push(item);
        }
    })
}
let arr = [1, 2, 3, 4, 5];
let item=arr.myFilter((index, item) => {
    return item > 2
});