let utils = (function(){
    function toArray(likeAry){
        let ary = [];
        try{
            ary = Array.prototype.slice.call(likeAry);
        }catch(e){
            for (var i = 0; i < likeAry.length; i++) {
               ary.push(likeAry[i]);
            }
        }
        return ary
    }
    return {
        toArray:toArray
    }
})()