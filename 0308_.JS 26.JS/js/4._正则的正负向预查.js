// 正则的正负向预查
// 正向预查
let reg = /feitian(?=xiaonvjing)/;//feitian 后面必须是xiaonvjing
let str = 'feitianxiaonvjingskdiem';//true
//负向预查
let reg1 = /feitian(?!xiaonvjing)/;//后面必须不是xiaonvjing
let str1 = 'feitianskdiem';//true