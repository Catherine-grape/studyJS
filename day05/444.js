var ary = [1, 2, 3, 2, 4, 3, 5];

function unique(ary) {
    for (var i = 0; i < ary.length - 1; i++) {
        var getItem = ary[i];
        for (var g = i + 1; g < ary.length; i++) {
            
            if (getItem == ary[g]) {
                ary.splice(g, 1);
                g--;
            }
        }
    }
    return ary;
}
var res = unique(ary);
console.log(res);