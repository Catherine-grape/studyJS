/* 
git
用来管理版本控制系统的；
版本1
版本2
版本3
如果有一个东西可以控制记录你的版本信息，通过一条命令，我想回到哪一版，就迅速的能回到那个版本
- svn 集中式版本控制系统
- git 分布式的版本控制系统
## git

- 用来管理版本控制系统的；
- 如果有一个东西可以控制记录你的版本信息，通过一条命令，我想回到哪一版，就迅速的能回到那个版本
	- svn 集中式版本控制系统
	- ![Alt text](./1612059532871.png)
	- 公司一般使用svn 都有备份服务器 。 无论干嘛都需要联网

	- git 分布式的版本控制系统
		- 工作区
		- 暂存区
		- 历史区
		- 每天早上第一件事更新自己的代码
- ![Alt text](./1612060522206.png)

## 常用的dos命令

-  git --version
-  git version 2.24.3 (Apple Git-128)

- mkdir f 创建f文件夹
- cd Desktop
- cd a
[mac终端命令大全](https://zfj1128.blog.csdn.net/article/details/53282785?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control)


## git的命令

- git init 初始化一个git仓库
- git status 查看状态
	- 红色代表：工作区的内容还没提交到暂存区
	- 绿色代表：工作区的内容已经提交到暂存区，还没提交到历史区
- git add 文件名
- git add A （包含删除的）
- git add . （把你所有的文件抛去删除掉）从工作区-提交到暂存区
- git commit -m“注释的内容” 从暂存区到历史区
 + git status(查看当前文件提交状态)【红色代表在工作区；绿色代表在暂存区；没有文件，并显示clear之类的单词，说明文件已经提交到历史区或者没有任何更改】
            clear:清屏
        + 3、把文件提交到历史区
            + git commit -m'描述' (把文件提交到历史区，并生成此次提交的历史版本)
            + git log(查看提交的历史版本信息，不包括回滚)
            + git reflog(查看所有的历史版本信息,包括回滚信息)
        + 4、回滚指定历史版本的代码
            + git reset --hard 七位历史版本号
### 远程仓库的使用
- 1、介绍远程仓库github
  + github是一个开源的代码分享平台；每一个github账户都可以把自己的代码分享到这个平台上，那他就是充当中央服务器的角色，把代码提交到这个平台上之后，你可以在任何一个有网络的地方去下载代码，还可以配置下载的权限
    - 2、创建一个远程仓库(点击左上角绿色的按钮 New)
        + Repository name：新建仓库的名称
        + Description：新建仓库的描述
        + Public/Private:新建仓库是公开还是私密的
        + Initialize this repository with:为仓库增加初始化文件(暂时不选)
        + 绿色按钮 Create repository: 创建新的仓库
    - 3、把本地仓库的代码提交到远程仓库
        + 1、本地仓库和远程仓库建立连接
            + git remote -v(查看本地和远程仓库的连接状态)
            + git remote add origin 远程仓库地址(和远程仓库的某个新项目建立连接，origin这个名可以改，但是大家都统一叫这个)
        + 2、git pull origin master (拉取远程仓库的代码到本地)
        + 3、git push origin master (推送本地的代码到远程仓库)
        【要输入用户名和密码 username  password】
    - 4、git clone 远程仓库地址 仓库的名字(如果不写默认原仓库名)
        + 其真正的开发中，大家都使用这个
        + 你们的项目老大把项目骨架搭建好之后你们每一个项目小组成员都去把远程的代码拉取到你们的本地去开发
        + git clone
*/