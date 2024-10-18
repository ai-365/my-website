<p id="top"></p>

<a style="position: fixed;top:100px;left:-20px;" href="#top">回到顶部</a>

- [安装Git](#安装git)
- [配置SSH登录](#配置ssh登录)
- [配置用户名和邮箱](#配置用户名和邮箱)
- [Git Bash](#git-bash)
- [Git的原理和 .git 文件夹](#git的原理和-git-文件夹)
- [git clone](#git-clone)
- [使用git clone 而不是 git init](#使用git-clone-而不是-git-init)
- [git add](#git-add)
- [git branch分支管理](#git-branch分支管理)
- [远程仓库管理](#远程仓库管理)
- [git commit](#git-commit)
- [git push](#git-push)
- [个人项目Git常用的命令](#个人项目git常用的命令)
- [查看提交历史](#查看提交历史)
- [回退](#回退)
- [标签](#标签)


##  安装Git

要使用Git有两种方式：使用命令行和使用图形界面。笔者更推荐使用命令行工具，原因如下：

-  命令行的命令是不变的、通用的，而图形界面有很多，或许我们碰到了一个更好的图形界面又要去再次学习，这是浪费精力的。
-  学习命令行能够让我们“知其所以然”，了解版本控制的核心原理。这条原则对其它的软件也同样适用。
-  命令行效率更高。很多人可能觉得图形界面的效率更高，其实不然，与其满屏幕的移动鼠标、寻找按钮，不如一行命令或一个脚本来得轻快。当然，这条原则对其它软件可能不适用。

既然决定使用Git命令行，现在就需要安装Git了。

访问 `https://git-scm.com/ ` ，在页面右下角会有一个醒目的 ` Download for Windows ` 按钮，点击下载安装包，然后一步步使用默认设置安装即可。


 ![pkceOsO.png](https://s21.ax1x.com/2024/06/29/pkceOsO.png)

可以选择安装完整版或便携版，如果安装便携版，需要解压之后将git.exe所在的目录添加到PATH环境变量，不过由于我们之后会频繁的用到Git命令，所以更推荐安装完整版。

安装好Git之后，打开终端工具，输入如下几个命令检测是否安装成功：

```
git --help    # 查看帮助
git --version   # 查看git版本号
```

如果没有错误信息，则表示安装成功。

##   配置SSH登录

我们使用Git命令不可避免的要跟Github打交道。要将本地文件上传到Github的仓库，就需要身份鉴权，基于安全的考量，已经不推荐用户名密码的方式，而推荐SSH非对称秘钥的方式。

首先进入Bash环境，运行如下命令：

```
ssh-keygen -t rsa -C "提示信息"
```

ssh-keygen常用选项如下：

-   ` -f filename `  ： 要保存的文件名，包含路径
-   ` -t ` ：  秘钥类型，一般为rsa
-   ` -b ` ：  指定秘钥长度，一般为2048或4096

这里的提示信息可以随意写，一般为自己的邮箱。

运行上述命令后，终端会问你几个问题以进一步完成秘钥文件的生成，其它的可以直接回车以同意默认设置，最重要的是秘钥文件名，默认是`C:\Users\用户名/.ssh/id_rsa`，秘钥文件一般放在家目录，名称可以随便取。如果已经存在同名的秘钥文件记得要修改以免覆盖其它秘钥文件。我们这里使用默认设置。

然后就会在家目录生成两个文件： ` id_rsa `  和 ` id_rsa.pub `。

带有pub的是公钥文件，可以分发在网络上。另一个是私钥文件，一定不能泄露。

使用VSCode或记事本打开id_rsa.pub文件，内容只有一行，全选复制。

打开浏览器，输入 `https://github.com/settings/keys ` ，点击右边的 ` New SSH Key `，在Title文本框输入一些信息，在Key文本框粘贴我们刚刚复制好的公钥文本，点击 ` Add SSH Key ` ，至此ssh秘钥配置完成。

回到本地bash环境，运行如下命令，如果输出内部包含Successfully表示配置成功。

```
ssh -T git@github.com
```

当然，第一次配置可能不会成功，遇到问题首先多尝试几次，然后将输出内容粘贴到搜索引擎以寻求其它实践者的经验。

另外，由于Github本身的不稳定性，有些时候可能需要一点科学方法才能连上。


##   配置用户名和邮箱
	
在以后提交到仓库的时候需要指定用户名和邮箱，这里提前进行全局设置，以后默认使用该身份。使用如下命令设置用户名和邮箱：

```
git config  --global  user.name "姓名"
git config  --global  user.email "邮箱"
```

##  Git Bash

安装Git后默认会同时安装Git Bash，该工具提供了非常多开箱急用的Linux原生命令，例如cd、touch、vim、sed、grep等。如果要学习Linux Shell，就可以使用该工具。

进入Bash环境的方式有两种。第一种是在桌面或任意文件夹内右击，选择` Git Bash Here ` ，这会以该文件夹为工作目录进入Bash环境。第二种是在任意终端输入` bash ` 即可进入bash环境，工作目录保持不变。

在bash环境下，文件路径会使用Linux风格的 ` / `，例如Windows风格的 ` D:\test ` 在bash环境下就是 `/d/test `。使用 ` cd `切换工作目录时应该注意习惯的转换。

bash也支持家目录，使用 ` cd ~ `会回到用户的个人目录，其实是进入了Windows系统的 ` C:\Users\用户名\ ` 文件夹。

##   Git的原理和 .git 文件夹

- 工作区：  在这里开始编辑。
- 暂存区：  在修改文件后，通过git add 将修改添加到暂存区。暂存区的本质其实是要提交到仓库的文件列表。
- 存储库： 使用git commit -m '提交说明'， 从暂存区提交到仓库

Git的本质直观表现上就是.git文件夹。

在克隆Github仓库的时候，默认会在本地新生成一个文件夹，文件夹名称就是仓库名。除了将仓库内的所有文件都拷贝到这个文件夹内以外，还有一个至关重要的动作，就是在新文件夹内包含一个隐藏文件夹——.git。

.git文件夹可以说就是Git的精华所在，该文件夹完整准确的记录了本地仓库所有的操作，包括修改、删除、新增等等。同时，还记录了分支名、远程仓库地址等等，所以，我们无需手动添加远程仓库地址，直接使用git push即可将本地的更改推送到Github。

##  git clone

git clone的作用是将仓库下载到本地，语法如下：

```
git clone https://github.com/用户/仓库.git
```

## 使用git clone 而不是 git init

由于大多数情况下我们是要将本地仓库推送到远程Github仓库，所以推荐先在Github初始化好仓库，然后拷贝仓库地址，使用git clone。因为这样在本地的.git文件夹内就已经包含了远程地址，之后在本地完成编辑和提交后直接使用git push就可以推送到克隆的那个仓库。

如果使用git init，就要事先使用git remote添加远程仓库，而且很容易造成本地仓库和远程仓库的冲突。

因此，推荐使用git clone而不是git init。

##   git add

git add的作用是在编辑之后，将更改统一提交到暂存区：

```
git add .
```

需要说明的是，在2.x版本之后，`git add .`和`git add -A`的作用是完全一样的。

##   git branch分支管理

命令	|	作用
---	|	---
` git branch ` 	|	查看本地分支，带`*`为当前本地分支
` git branch -r `	|	查看远程的分支，带`*`为当前远程分支
` git branch xxx ` 	|	新建一个名为xxx的分支
` git checkout xxx` 	|	切换当前分支为xxx分支
` git branch -m xxxx ` 	|	将当前分支重命名为xxxx
` git branch -b yyy ` 	|	新建yyy分支并切换到新分支
` git branch -d xxx `	|	删除xxx本地分支
` git branch -D xxx `	|	强制删除xxx本地分支


##   远程仓库管理

命令	|	作用
---	|	---
` git remote `	|	显示远程仓库
` git remote -v `	|	显示远程仓库的详细信息
` git remote add origin 仓库url `	|	新建远程仓库，origin只是命名习惯，可以任意取名，下同
` git remote rm origin `	|	删除远程仓库
` git remote rename origin 新名称 ` 	|	重命名远程仓库
` git push origin 本地分支:远程分支 `	|	将本地仓库的分支上传到远程仓库的分支
` git push origin master `	|	一般情况下，本地和远程仓库的分支名均为master，那么可以这样简写
` git push --force origin 本地分支:远程分支 `	|	忽略其它的提交，强制推送，`--force`等同于`-f`，注意`--force`选项谨慎使用。
` git pull `	|	将本地的仓库与远程仓库对齐

##  git commit

git commit 的作用是将暂存区的内容提交到本地仓库，语法如下：

```
git commit -m '提交说明'
```

注意，这个提交说明一定要写，否则git不让提交。


##  git push

git push的作用是将本地仓库推送到远程仓库，如果之前是用git clone下载下来的仓库，那么在.git文件夹会自动记录远程仓库的地址，那么可以直接运行如下命令推送到远程仓库：

```
git push
```

如果之前是用git init 初始化的本地仓库，那么就需要使用git remote add 先添加远程仓库，一般名称为origin，然后运行：

```
git  push  origin  master:master
```


## 个人项目Git常用的命令

对于个人项目，例如GitHub Pages静态博客页面，往往只需要先将仓库下载下来，然后修改，然后提交推送到Github，这时候不需要用到分支、标签等特性，常用的也就如下几个命令：

命令	|	作用
|---	|	---|
` git clone 仓库url`	|	克隆仓库到本地
` git add .  `	|	将所有改动提交到暂存区
` git commit -m '提交说明' `	|	将暂存区提交到本地仓库
` git push `	|	将本地仓库同步到Github

##  查看提交历史

查看提交历史包括两个命令：git log、 git reflog，这两个命令的区别是后者还记录了回退操作。

使用git reflog 输出关键信息，而且还包括退的记录，推荐使用。

要查看提交的历史，使用git log，这会从近到远依次列出每一次的提交。

还支持根据提交信息中的关键字来过滤提交历史。你可以使用--grep选项并指定要搜索的关键字。以下是使用该选项的示例命令：

```
git log --grep= '关键字'
```

关键字支持通配符。

不过，git log输出的内容较多，第一次不会显示完整，往往需要按住空格以输出更多内容，按q退出输出。推荐使用git reflog。


##   回退

首先，使用git reflog列出提交记录，找到要回退的那条记录的commitID。

然后，使用git checkout命令回退到那次提交对应的状态：

```
get checkout commitID
```

##  标签

Git 可以给仓库历史中的某一个提交打上标签，以示重要。 比较有代表性的是人们会使用这个功能来标记发布结点（ v1.0 、 v2.0 等等）。

在 Git 中列出已有的标签非常简单，只需要输入 git tag。

你也可以按照特定的模式查找标签。 例如，Git 自身的源代码仓库包含标签的数量超过 500 个。 如果只对 1.8.5 系列感兴趣，可以运行：

```
git tag -l "1.8.5*"
```

Git 支持两种标签：轻量标签（lightweight）与附注标签（annotated）。轻量标签很像一个不会改变的分支——它只是某个特定提交的引用。而附注标签是存储在 Git 数据库中的一个完整对象， 它们是可以被校验的。推荐使用附注标签。

给某次提交打标签，并附上该标签的说明：

```
git tag -a v1.0 9fceb02 -m "Release 1.0"
```

-a选项后接标签名称，其后接commitID，-m选项为该标签的附件说明。


