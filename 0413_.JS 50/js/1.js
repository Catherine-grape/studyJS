/* 
webpack 基于node.js开发的 支持commonJs规范。
Es6新增import 模块 vue

git clone xxx(git init git remote add origin xxx git pull git push )

git branch dev \ git checkout dev (git checkout -b dev)
git merge master (git add.-->git commit -m"xxx"-->git pull origin dev-->git push origin dev)

别人需要测试的时候，再打包push就可以  看需不需要部署到别的服务器上

开发完成之后我们要把代码合并到master分支上
git checkout master-->git merge dev-->git add .-->git commit -m"xx"-->git pull origin master -->git push origin master
更新分支的时候，最好把所有的分支都更新了（为了让所有的分支上的代码都是最新最全的代码，下次别的同事在别的分支上开发的时候就不会产生遗忘代码的错误了）

解决冲突（最好和谁产生冲突的，就把谁叫过来商量一下，看看到底留谁的代码）
*/