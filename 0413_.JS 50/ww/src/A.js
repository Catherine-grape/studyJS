let a = 9000;
module.exports = {
  a
}

// git clone xxx (git init 、 git remote add origin xxx、git pull、 git push )

// git branch dev -->git checkout dev(git checkout -b dev)-->git merge master-->(git add . -->git commit -m'xx'-->git pull origin dev-->git push origin dev)

// branch 查看当前所有的分支

// 开发完成之后我们要把代码合并到master分支上
// git checkout master-->git merge dev-->git add . -->git commit -m'xx'--->git pull origin master-->git push origin master

// 在更新分支的时候最好把所有的分支都更新了(为了让所有的分支上的代码都是最新最全的代码，下次别的同事在分支上开发的时候就不会产生遗忘代码的错误了)

// 解决冲突(和谁冲突的就把谁叫过来，你俩商量一下，看看到底留谁的代码)
