
### Linux简介

Linux 内核最初只是由芬兰人林纳斯·托瓦兹（Linus Torvalds）在赫尔辛基大学上学时出于个人爱好而编写的。

Linux 的发行版说简单点就是将 Linux 内核与应用软件做一个打包。

目前市面上较知名的发行版有：Ubuntu、RedHat、CentOS、Debian、Fedora、SuSE、OpenSUSE、Arch Linux、SolusOS 等。


###  Shell简介

在没有图形界面的时代，Shell是用户与操作系统交互的唯一方式。

用户输入命令，shell将命令传递给操作系统，操作系统执行后返回给shell，显示在终端上，这就是shell执行的一般流程。

终端只是一个图形界面，shell才是“真正的灵魂”。

所以，bash是shell，而不是终端，当你安装了bash之后，你可以在任意终端使用bash。

比如Windows terminal 是Win11自带的终端软件，它里面可以调用的shell包括：powershell、bash（如果已安装）、cmd等。

Windows10上安装的powershell既可以认为是终端，也可以认为是shell，只是因为它们取了相同的名字。不过我们可以在vscode的集成终端环境中使用powershell，此时PowerShell就是shell。

最流行的shell是bourne shell，简称bash，它预装在许多流行的Linux发行版上。当然，还有更现代的zsh、颇受用户喜爱的fish等Shell。

这里更推荐学习Bash，因为一通百通，学会了bash，其它的shell就很容易了。后面的教程都默认使用Bash。


### 在Windows上获取bash

bash是大多数Linux默认的shell，但是我们经常使用的是Windows。

如果不想安装完整的Linux桌面操作系统，而只是想在Windows上获取一个Bash环境，有几种解决方案。

### Cygwin

Cygwin在Windows下提供了具备Linux观感的类Linux环境，提供了大量的POSIX ApI功能的DLL。

但是请注意，cygwin不是在Windows上运行原生Linux程序的方法，如果要这么做，必须从源代码构建

####  wsl

wsl是微软推出的在Windows上运行的Linux子系统，可以直接到应用商店搜索Ubuntu下载安装。

####  git bash

大多数情况下，我们只是想使用shell命令，而并不需要Linux环境，此时可以使用git bash。

安装git 默认安装git bash ，它包括了很多与shell命令同名的exe文件，可以直接使用。实际上这些命令足够我们学习完整的shell了。

###   终端提示符

打开终端后，每次在输入命令前会看到有一段文本，这段文本叫终端提示符：

```
[  username@hostname~  ]$
```

这里的username表示用户名称， hostname表示主机名，~表示当前工作目录是用户的家目录。

中括号后面会接一个美元符号$或井号#。美元符号$表示一般用户，井号地代表管理员。

Linux有两种用户，一般用户和管理员用户，大部分文件系统管理相关的命令只需要一般用户即可。

我们后面的代码示例会省略中括号的内，只显示提示符$，表示后面的内容是你需要输入到终端的。注意，只需要输入$后面的文本，而不能重复输入$。一般紧接着会我们会写出终端返回的结果。例如：

```
$  which ls    # which ls是需要输入的命令
/usr/bin/ls   # 终端显示的结果
```

和大多数编程语言不一样，Linux在命令行和脚本中使用井号#表示将该行后面的内容注释掉。例如上文示例。

###   Bash常用快捷键

Bash常用快捷键如下：

Ctr+C	停止正在运行的任务
Ctrl+D	退出当前Shell
Ctrl+U	清空当前命令行内容
Ctrl+A	移到行首
Ctrl+E	移到行尾
Ctrl+K	从光标出删除到末尾

###  Tab补全

使用命令行最多的按键或许就是Tab键了，所以单独使用一小节讲解。Tab键会根据你已经输入的少数几个字符自动猜测后面的内容并进行补全。常见的情况有以下几种。

-  命令补全： 例如先输入ec两个字符，按Tab键，Bash会补全成echo。不过Linux命令一般都比较简短，一般都是直接写完整的命令。

-  文件名称补全： 这是最实用的功能，一般来说文件名都比较长，如果每次都要输入完整的文件名不仅费时而且极容易出错。此时，只需要输入文件名的前一个或少数几个字符，再按下Tab键就可以自动补全文件名，如果匹配的文件名超过1个，那么终端就会输出匹配的文件名供我们再次输入以缩小范围。


