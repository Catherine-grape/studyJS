let A = require('./C.js');
let AVG = function (...arg) {
    arg=arg.sort((a, b) => b-a).slice(1,arg.length-1)
    return (A.sum(...arg)/arg.length).toFixed(2)
}
module.exports = {
    AVG
}