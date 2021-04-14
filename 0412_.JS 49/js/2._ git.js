/* 
先拉取再提交以免出现冲突 可以解决后再push

多分支管理：
创建一个叫dev的新的分支 git branch dev
js只能展示一个分支 切换命令「分支」  git checkout dev
master上都是最新最纯净的代码没有注释 没什么bug这种
master主分支「最新的只有一个」不参与任何开发，只储存最新的没有bug的纯净代码「与服务器的一致」
查看所处分支：git branch

把谁的代码合并过来 git merge
首次开发分支，会默认把在哪里创建的分支，就把哪里的代码复制过来一份
开发新需求的时候，先创建一个分支，然后 git merge master 相当于复制了一份master上的代码
测试后没有任何问题后，一定！一定要把这个代码更新到master上

//到公司的第一步先把项目克隆下来-->开发功能「写代码」-->创建一个新的分支-->master上的代码合并到当前的分支上，来保证你当前的分支上是最新的代码-->正常开发代码（git add . git commit -m"xx"  git pull origin xxx  git push origin xxx 「中间可能会产生冲突，如果出现来看下面分解」)-->把代码部署到服务器集群上(单点测试）--->切换到master主分支上，把刚才xxx分支上的代码合并过来，并且把master代码上传到远程仓库
git clone 仓库路径

git branch xxx 创建一个叫xxx的分支
git checkout xx 先切换到xxx分支上
git checkout -b xx  创建一个叫xxx的分支并且切换到xxx分支上

git branch   查看有多少分支，且当前处在那个分支上
git merge xxx 把xxx分支上的代码合并到当前的分支上


master分支上的代码是不参与开发的，他永远是最纯洁的代码，当你在其他分支上开发完成后把最干净的代码合并到master分支上


当开发的时候都是在别的分支上开发的，当开发开始的时候，一定要谨记先merge一下master的代码
*/