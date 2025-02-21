[[toc]]




# 命令行语法规则

## 管道

管道可以说是命令行的灵魂，如同管道的名字一样，管道使得命令行的操作如行云流水一般。

一个实用的例子是求出本目录下文件的数量：

```sh
ls -l    |   nl   |  tail  -1    
```

这里暂且先不考虑链接文件的情况， 本例子先使用`ls -l`将每个文件一行的形式输出，然后使用`nl`为每一行打上行号，然后使用`tail`倒序查看最后一行，这样便得出了本目录下文件的数量。

##  重定向

### 覆写

使用` > ` 符号将左边本来应该输出到终端的内容重定向到文件，例如：

```sh
ls > file.txt
```

### 追加

不过这会覆盖file.txt本来的内容，有些时候我们只是想追加输出，则可以使用` >> ` 符号：

```sh
ls >> file.txt
```

###  将输出和错误分别重定向

如果要将输出和错误定向到不同文件，使用 ` > ` 和 ` 2> ` 符号。 

例如，当前目录中，exist.txt存在，noexist.txt不存在，运行如下命令：

```sh
cat exist.txt noexist.txt > sure.txt 2> error.txt
```

这把 exist.txt 的文件拷贝到sure.txt。而由于noexist.md不存在，所以读取出错，会把错误信息“no such file...”等信息输出到error.txt。

###  将输出和错误集中输出

如下命令将输出和错误发送到同一文件：

```sh
cat exist.txt noexist.txt  >& out.txt 
```

###  丢弃输出

如果要丢弃输出，使用 ` >  /dev/null  2>&1 ` ，例如：

```sh
cat file.txt  >  /dev/null  2>&1
```

###  多个命令组重定向

可以使用多个命令组合重定向，例如：

```sh
pwd; ls; date > file.txt
```

pwd和ls依然会输出到屏幕，只会把date的结果保存到1.md

可以使用括号，先在子shell中执行，然后重定向：

```sh
(pwd ; ls ; date ) > file.txt
```

##  子命令（命令替换）
shell命令行或脚本最有用的特性之一是可以从命令输出中提取信息并将其赋值给变量，称为子命令，也可以叫做命令替换。

有两种等价的方式使用子命令：
- 使用反引号包裹
- 美元符加圆括号： ` $(子命令) `

例如：

```sh
today1=`date`
echo $today1

today2=$(date)
echo $today2
```

命令替换会创建出子 shell来运行指定命令，这是由运行脚本的 shell所生成的一个独立的shell。因此，在子 shell 中运行的命令无法使用脚本中的变量。如果在命令行中使用./路径执行命令，就会创建子 shell，但如果不加路径，则不会创建子 shell。不过，内建的 shell 命令也不会创建子 shell。在命令行中运行脚本时要当心。

##  命令行的Tab补全

使用命令行最多的按键或许就是Tab键了，所以单独使用一小节讲解。Tab键会根据你已经输入的少数几个字符自动猜测这个单词剩下的内容并进行补全。

可以通过bash shell补全的单词有：
- 命令、别名或函数
- 变量，如果以美元符`$`开头，则会寻找当前环境下的变量名
- 用户名，如果以~开头，则shell尝试使用用户名补齐
- 主机名，如果以@开头，则会寻找主机名补全

常见的情况有以下几种。

-  命令补全：例如先输入ec两个字符，按Tab键，Bash会补全成echo。不过Linux命令一般都比较简短，一般都是直接写完整的命令。

-  文件名称补全：这是最实用的功能，一般来说文件名都比较长，如果每次都要输入完整的文件名不仅费时而且极容易出错。此时，只需要输入文件名的前一个或少数几个字符，再按下Tab键就可以自动补全文件名，如果匹配的文件名超过1个，那么终端就会输出匹配的文件名供我们再次输入以缩小范围。

## 通配符

- `*` 匹配任意数量的字符
- `?`  字符占位，表示有且只有一个字符
- `[]`，匹配其中的任何一个单字符
- `{str1,str2}`，匹配以逗号分隔，匹配其中的任何一个单词

通配符在命令行中用的非常多。

例如，输出以.txt的文件名：

```sh
ls  *.txt
```

使用连字符指定范围，例如：

```sh
$ list file[1-3].txt
file1.txt file2.txt file3.txt
```

使用单个字符组成的逻辑或分组，例如如下命令表示匹配以file开头，紧接着以A或B或C结尾的文本文件：

```sh
ls file[ABC].txt
fileA.txt fileB.txt fileC.txt
```

有时候需要用到字符串组成的逻辑或分组，这时候就用到了花括号。例如如下命令表示筛选以txt或md结尾的文件：

```sh
ls *.{txt,md}
```

## 命令的返回值

既然两个命令有依赖性，而这个依赖性的判断地方就在于前一个命令执行的结果。在shell中，如果前一个命令成功执行或逻辑为真，则内置变量环境变量`$?`的值会设为0。如果执行有错误或逻辑为假，则`$?≠0`。例如：

```sh
$  pwd # 成功执行
$  echo $?  # 输出0

$  ls 不存在的文件  # 执行错误
$  echo $?   # 输出2 不同的错误有不同的返回值

$  [ 2 -eq 1 ]  # 不会输出内容，但是这个表达式逻辑值为假
$  echo $?  #  输出1 

$  [ 2 -gt 1 ]  # 不会输出内容，但是这个表达式逻辑值为真
$  echo $?  # 输出0
```

##  单行多命令

有些情况下，可以在一行中同时执行多个逻辑相关的命令，以提高效率。有三种情况：
- `命令1 && 命令2` ： 如果命令1成功执行或逻辑为真`（$?=0）`，则执行命令2。如果命令1执行发生错误或者逻辑为假`（$?≠0）`，则命令2不执行。
- `命令1 || 命令2` ： 如果命令1执行发生错误或者逻辑为假`（$?≠0）`，则命令2执行。如果命令1成功执行或者逻辑为真`（$?=0）`，则命令2不执行。
- `命令1 ; 命令2` ： 两个命令没有相关性，按顺序执行。其中一个命令的成功与否与逻辑真假都不影响其它的命令的执行。

需要说明的是，这三种情况可以随意的组合搭配出自己的逻辑链条，例如比较使用的三元条件表达式：

```sh
expression  && 条件为真时执行 || 条件为假时执行
```

具体的示例如下，这个例子的意思是：如果file.txt存在，就查看其内容；如果不存在，就先新建。

```sh
ls file.txt  && cat file.txt || touch file.txt 
```

再比如：如果目录不存在就新建目录，如果存在就读取文件列表：

```sh
ls dir && ls dir || mkdir dir
```

##  Shell子进程和脚本的执行方式

- 相对路径执行：例如./test，新开一个子进程执行。
- source命令执行：直接在当前进程中执行，不开子进程。
- bash或sh命令执行：与相对路径执行的方式等价，新开一个子进程执行

由于bash命令会新开子进程，所以在设置环境变量时，无法真正的生效，当这个子进程退出时，相当于没有设置环境变量，所以如果要设置环境变量，只能是 `source $HOME/.bashrc`，而不能是 `bash $HOME/.bashrc`。


# 文件权限

## 修改文件/目录所有者/所属组

```sh
chown  [-R]  所有者:所属组  文件或目录
```

说明：-R表示递归修改。

## 数字方法修改权限

```sh
chmod  [-R]  xyz  文件或目录
```

说明：xyz表示所有者、所属组、其他人对应的权限数字，是r、w、x对应的数字累加的结果，各具体操作权限的数字对照表是r:4、w:2、x:1，如果没有某种操作权，该数字为0。

## 符号方法修改权限

用等于的方式：  

```sh
chmod   u=rwx,g=rx  文件或目录
```

用增减的方式：  

```sh
chmod   g+w 文件或目录
```

说明：有四种符号表示身份，分别是u（所有者）、g（所属组）、o（其他人）、a（所有人）

## 文件与目录的权限区别

某种身份对文件有 r 权限，表示可以读取文件内容；对目录有r权限，表示可以列出（例如使用ls）目录下的文件列表和相关属性。

某种身份对文件有 w 权限，表示可以向该文件写入内容；对目录有w权限，表示可以向该目录增加、删除文件。

某种身份对文件有 x 权限，表示可以执行该文件（二进制方式、脚本方式）；对目录有x权限，表示可以以此目录为工作目录（例如cd到该目录）。


# 系统管理常见命令

##   文件系统管理命令汇总

如下表格是常见的文件系统管理命令，涵盖目录的操作、文件内容的操作，会使用这些命令，那么基本就能使用命令行熟练操作文件系统了。

|命令	|	作用|
|---	|	---|
cd	|	设置工作目录
pwd	|	显示当前工作目录
ls	|	列出目录下的文件列表
mkdir	|	建立一个空目录
rmdir	|	删除一个空目录
rm	|	删除文件
touch	|	新建文件
rename	|	文件重命名
cp	|	复制文件或目录
mv	|	移动文件或目录
cat	|	读取文件内容
tac	|	从最后一行往前读取文件内容
head	|	取出文件内容的前几行
tail	|	取出文件内容的后几行
nc	|	显示行号
wc	|	统计字数、行数
sed	|	查询、替换、增减文件内容
awk	|	以列为单位编辑结构化数据文件
grep	|	查询文件内容


##  Linux目录树的组织原则

Linux目录的组织是有一定的规律的，虽然不是强制的，但是用户在使用时也应该尽量遵循这种约定：
- /bin 常见的Linux用户命令，如ls、date、chmod
- /boot 包含Linux内核、启动配置文件（GRUB）
- /dev  包含设备访问的文件位置。包括终端设备tty、硬盘、鼠标、键盘等
- /etc  管理配置文件
- /home 用户的家目录，root是个例外，以/root为家目录
- /media 自动挂载的设备的位置，例如一个名为myusb的USB设备被挂载到/media/myusb
- /lib /bin和/sbin所需要的共享库
- /mnt  许多常见设备的挂载点，例如硬盘分区、远程文件系统
- /opt  附近应用程序软件
- /sbin  root用户使用的管理命令
- /sys 包含管理某些内核行为的控制文件
- /usr  UNIX resource 系统资源的简称，注意，不是user。
- /var 不同应用程序的数据目录，例如/var/ftp、/var/www。
- ~ 每个用户是家目录，存放用户自己的文件，自定义是配置文件等


## ls命令

ls是用的最多的命令，其作用是列出目录下的文件列表，或者列出某个文件信息。

ls的选项如下：

选项	|	作用
|---|---|
-a   	|	显示使用文件包括隐藏文件，以及.和..
-A  	|	类似-a，但不显示.和..
-l 	|	使用长列表格式，每行显示一个文件的详细信息
-t | 按照修改时间排序
-d | 只列出目录本身，而不是目录下的文件
-r 	|	逆序排列
-R 	|	递归显示子目录
-1 	|	每行只显示一个文件名
-S 	|	按照文件大小排序

##  切换当前目录：cd命令

cd命令的作用是切换当前目录。

有一些特定目录的简写，包括：
- `~`或者不写任何内容：回到当前用户的家目录，即$HOME。
- `.`   ：一个点，当前目录
-` .. ` 两个点，当前目录的上一级目录
- `$PWD`  ：当前目录
- `$OLDPWD`：  当前目录之前的目录


## 复制文件

复制一个文件到目标目录下：

```sh
cp  1.txt   dir 
```

复制的同时重命名：

```sh
cp 1.txt dir/2.txt
```

复制多个文件到目标目录下，这种情况就不能重命名了：

```sh
cp 1.txt 2.txt dir
```

## 复制目录

```sh
cp -r  dir1 dir2
```

此时，dir1会放到dir2下，形成dir2/dir1路径。

-r表示递归，在复制目录时，必须带上-r。

##  mv命令

mv命令的作用是移动文件，其主要选项如下：

选项	|	说明
|---	|	---|
-f	|	即force，如果目标文件已存在，则不会询问直接覆盖
-i	|	如果目标文件已存在，会询问
-u	|	如果目标文件已经存在，只有源文件较新才会覆盖

## rm命令

rm命令的作用是删除文件或目录，其主要选项如下：

选项	|	说明
|---	|	---|
-f	|	即force，忽略不存在的文件，不会出现警告信息
-I	|	交互模式，在删除前会询问是否确认删除
-r	|	递归删除，常用于目录的删除，*这个选项非常危险*。

例如：

```sh
rm -r dir # 删除dir目录本身及其子项
rm -r dir/*  # 删除dir目录下的东西，此时dir是个空目录
```

##  获取文件名和目录名：basename和dirname命令

有时候需要根据路径获取文件名和目录名，可以使用basename命令和dirname命令，这两个命令分别用于获取文件名和目录名，例如：


```sh
basename  /usr/bin/sed  # 取得路径的最后一个名称
输出：sed
dirname /usr/bin/sed  # 去掉路径最后一个名称
输出：/usr/bin
```

## 查看文件内容

查看文件内容的方式有很多，可以根据具体的情况选择，查看文件内容的命令汇总如下：

|命令	|	作用|
|---	|	---|
cat	|	最常用，正常显示文件内容
tac	|	从最后一行开始显示
nl	|	显示的时候，输出行号
more	|	一页一页的显示
less	|	于more类似，但可以往前翻页
head	|	只看前面几行
tail	|	只看后面几行
od	|	以二进制的方式显示文件内容

##   cat命令

查看文件内容最常用的就是cat命令，其选项如下：

|选项	|	说明|
|---	|	---|
-b	|	对非空白行显示行号，空白行则不显示
-E	|	将结尾的换行符`$`显示出来
-n	|	显示行号，包括空白行
-v	|	列出不可见的特殊字符

## head和tail命令

与cat读取文件的全部内容不同，head和tail命令用于读取文件的前几行或最后几行，在部分情况下非常有用。

head命令的作用是读取文件内容的前多少行。使用head命令一般只使用-n选项，该选项指定要读取前面多少行。

例如，如果想输出前25行，下面三个命令是等价的：

```sh
head -n25   1.md
head -n       25   1.md
head -25   1.md
```

-n 后面也可以跟负数，例如下面的命令输出除了最后5行以外的全部内容：

```sh
head  -n -5 input.txt
```

与head相反，tail命令用于读取文件内容的后多少行。下面两个命令均读取文件最后10行。

```sh
tail   -n   10   1.md
tail -10    1.md
```

如果数字带加号，表示从第几行开始输出，例如从第一行开始输出，即全部输出：

```sh
tail   -n   +1 
```

从第25行开始输出：

```sh
tail  -n   +25    1.md
```


## 比较文件内容： cmp命令

Linux cmp 命令用于比较两个文件是否有差异。当相互比较的两个文件完全一样时，则该指令不会显示任何信息。若发现有所差异，预设会标示出第一个不同之处的字符和列数编号。若不指定任何文件名称或是所给予的文件名为"-"，则cmp指令会从标准输入设备读取数据。

cmp命令的语法如下：

```sh
cmp [-clsv][-i <字符数目>][--help][第一个文件][第二个文件]
```

cmp命令的选项如下：

|选项	|	作用|
|---	|	---|
-c或--print-chars	|	除了标明差异处的十进制字码之外，一并显示该字符所对应字符。
`-i<字符数目>`或`--ignore-initial=<字符数目>` 	|	指定一个数目。
-l或--verbose 　	|	标示出所有不一样的地方。
-s或--quiet或--silent 　	|	不显示错误信息。
-v或--version 　	|	显示版本信息。
--help 　	|	在线帮助。

如下命令比较两个文本文件的差异：

```sh
cmp file1.txt   file2.txt 
```

## split命令

Linux split命令用于将一个文件分割成数个。该指令将大文件分割成较小的文件，在默认情况下将按照每1000行切割成一个小文件。

split命令语法如下：

```sh
split [--help][--version][-<行数>][-b <字节>][-C <字节>][-l <行数>][要切割的文件][输出文件名]
```

split命令的选项如下：

|选项	|	说明|
|---	|	---|
-行数	|	指定每多少行切成一个小文件
-b 字节数	|	 指定每多少字节切成一个小文件
-C 字节数	|	 与参数"-b"相似，但是在切 割时将尽量维持每行的完整性
输出文件名	|	设置切割后文件的前置文件名， split会自动在前置文件名后再加上编号

将文件file.txt每6行切割成一个文件，可使用如下命令：

```sh
split -6 file.txt
```


##   cut

cut命令的作用是以指定的分隔符分割文件内容，常用于结构化的文本内容，类似于Excel的数据分列。

cut命令的主要选项如下：

* -d : 指定分隔符
* -f  n ： 取出第n列
* -f  n-m ： 取出第n到第m列

例如有如下文本文件1.md：

```sh
127.0.0.1
10.0.0.20
192.168.0.4
```

可以看到每一行都以点号分隔，可以使用如下命令取出第一列：

```sh
cut -d '.' -f 1  1.md
输出：
127
10
192
```

使用如下命令取出第2-3列：

```sh
$  cut  -d  '.'  -f  2-3  1.md
# 输出：
0.0
0.0
168.0
```

##  排序：sort命令

可以使用sort命令对每行进行排序，默认每从第一个字符开始，比较ASCII值进行排序。

sort命令选项如下：
* -r ： 逆序
* -f ： 不区分大小写
* -n ： 以数字为依据

对于文本的排序，例如如下文本文件1.md：

```sh
aa
abd
A
abc
```

运行`sort 1.md`后输出如下： 

```
A
aa
abc
abd
```

对于数值的排序，假设一个文件2.md如下：

```
2
3
10
111
```

必须加上-n告诉以数值为依据，否则会当成字符串以ASCII逐字符比较。如下示例：

```sh
sort -n  2.md
输出：
2
3
10
111
```



删除重复行前先进行排序，然后使用管道传递给uniq命令即可。

如下文本文件3.md：

```
A
B
A
A
B
```
运行如下命令删除重复行：

```sh
sort 3.md | uniq 
输出：
A
B
```

## grep命令

可以在一个或多个文件中查找字符串

按行查找的。

在文本文件1.txt中查找word：

```sh
grep word 1.txt
```

在多个文件中，在输出前加上文件名及冒号，然后是包含搜索内容的文本。

```sh
grep word  *.txt
1.txt :
        1.txt中包含word的行
2.txt:
        2.txt中包含word的行
3.txt:
        3.txt中包含word的行
```

只显示包含内容的文件名：

```sh
grep  -l   text  *.txt
```

不区分大小写，如下示例搜索包含word、Word、WORD的行：

```sh
grep -i  word 1.txt
```

grep命令也支持管道，如下示例筛选出以.txt为后缀的文件：

```sh
ls | grep  *.txt
```


#  系统管理常见命令

## which命令

which命令用于查找命令的路径，例如：

```sh
which ls
/usr/bin/ls
```

## type命令

type命令用于检查命令是否是shell自带命令，也就是说安装了这个shell就可以执行这个命令。与之相对的，外部命令是指系统安装的，与Shell无关的命令，一般情况下，一般用户执行的命令存放于/usr/bin/里面的，管理员命令存放于/usr/sbin里面。

如果输出一个路径则表示是系统命令，如下示例检测是Shell自带还是系统命令：

```sh
type cd
# cd is shell builtin  # cd是shell自带

type awk
# awk is /usr/bin/awk  # 系统命令
```
## 输出到终端——echo命令

echo是非常常见的命令，它的作用是输出内容到终端，例如：

```sh
echo  hello  bash 
# hello bash
```

echo会解析所有的命令行参数，而且会忽略空白符：
```sh
$a="bash"
$echo   hello        $data
# hello bash  
```

要想保留空白字符，需要将其放入单引号或双引号中：

```sh
echo   '   hello     bash   '  
echo  "   hello     bash   "
```

单引号和双引号的区别是对变量的解析与否，双引号会读取以$开头的单词并尝试解析变量值，再插入到字符串中，这种方式叫做“内插”。而单引号则不理会进行变量解析。

如果不需要解析变量，则使用单引号即可：

```sh
echo  'hello $bash'
hello $bash
```

## 写内容到文件的快速方式

echo命令经常用来快速将少量文本内容写入到文本文件，使用重定向符号`>`或`>>`将内容保存到文件而不输出到终端。这两个符号分别可以覆盖内容和追加内容到文件。例如：

```sh
echo hello bash  >    1.md
echo hello bash  >>  1.md
```

## read命令

Linux read命令用于从标准输入读取值。

read命令选项如下：

|选项	|	说明|
|---	|	--- |                
-p 	|	后面跟提示信息，即在输入前打印提示信息。
-n 	|	后跟一个数字，定义输入文本的长度，很实用。
-a	|	 后跟一个变量，该变量会被认为是个数组，然后给其赋值，默认是以空格为分割符。
-s 	|	安静模式，在输入字符时不再屏幕上显示，例如login时输入密码。


-p 参数很常用，允许在 read 命令行中直接指定一个提示信息。例如：

```sh
read -p "your name:"  name
echo "welcome，$name"
```

上面的示例运行后，在终端会看到提示字符“your name：”，此时直接输入后按回车，即可将输入的值赋予给变量name。

##  将输入存入数组

如果需要用户依次输入多个单词，彼此以空格隔开，那么可以使用-a将输入存入数组。

```sh
read  -p "arr: " -a arr
echo "arr的长度: ${#arr[*]}"
```

## 查看系统与内核相关信息

要查看系统与内核相关信息，使用uname命令。-a选项表示输出所有信息。-r选项输出内核版本。

## 远程连接：ssh命令

ssh命令用于登录远程主机

要登录远程主机，使用如下命令：

```sh
ssh  user@ip
```

此时会提示你输入密码。

输入`exit`退出登录。

在文件 ~/.ssh/known_hosts 中可查询该服务器公钥。

##  网络请求：curl命令

curl命令的作用是执行网络请求，取回响应结果，主要是http请求。

cURL是一个利用URL语法在命令行下工作的文件传输工具，1997年首次发行。它支持文件上传和下载，所以是综合传输工具，但按传统，习惯称cURL为下载工具。

cURL支持的通信协议有FTP、FTPS、HTTP、HTTPS、TFTP、SFTP、Gopher、SCP、Telnet、DICT、FILE、LDAP、LDAPS、IMAP、POP3、SMTP和RTSP。

curl还支持SSL认证、HTTP POST、HTTP PUT、FTP上传, 

例如如下一行命令访问百度，可用于检测是否联网：

```sh
curl https://www.baidu.com
```

这会输出百度首页的HTML代码。

如下命令将返回的内容保存到本地：

```sh
curl URL >> 1.html
curl  https://www.baidu.com   -o  2.html
curl   https://www.baidu.com  -O 
```

-o选项在本地重命名，-O选项使用服务器上的名称。

如下示例保存图片：

```sh
curl  图片链接  -o image.png  
```

如下示例保存cookie：

```sh
curl -c cookie.txt  http://www.linux.com
```

如下示例发送cookie：

```sh
curl  -b 'a=1'  -b  'b=2'  https://www.baidu.com
```

如下示例保存header：

```sh
curl -D header.txt http://www.baidu.com
```

如下示例模拟Chrome访问：

```sh
$ curl -A 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36' https://google.com
```


## find

```
find  要查找的目录  查找选项
```


查找选项包括：
- -name  根据文件名，支持通配符
- -type 根据类型，fS文件、d目录
- -size 根据大小
- -user  根据所有者
- -mmin -10 过去10分钟修改的文件

还可以对找到的文件执行命令，语法：

```sh
find 要查找的目录  查找选项 -exec 命令 {} \;
```

- 花括号表示查找出来的文件名
- 在命令末尾，需要家反斜杠和分号

例如：

```sh
find $HOME -name *.txt -exec echo "已经找到{}"  \;
```

## locate

与find从文件系统查找文件不同，locate命令从一个包含系统文件名的数据库中查找，因此查找效果更快。

如果运行完update后又新建了文件，那么locate是查找不到的，此时必须再次运行update命令。

更新数据库：

```sh
updatedb
```

查找文件：

```sh
locate.bashrc
/etc/skel/.bashrc
/home/student/.bashrc
```


## 进程管理

进程管理命令汇总：
-  ps aux ： 查看系统所有进程
-  kill  -9  进程ID： 终止进程
-  命令  &  ： 后台执行
-  jobs：  查看后台
-  fg  编号：  将任务拿到前台
-  bg  编号： 使后台任务由Stopped变为Running

使用`ps aux`查看系统所有进程。不过这会输出很多内容，通常使用`grep`管道过滤需要查看的进程。

要终止进程，运行 `kill -9  进程ID  `。

在命令行后面加上`&`，可以将命令放到后台执行。此时会输出   `[任务编号]   进程编号`。

如果已经在执行某个操作，例如vim正在编辑文件，或者find正在查找文件，此时使用`Ctrl-Z`可以暂时将其放到后台。不过，使用`Ctrl-Z`会使任务变为暂停Stopped状态。

使用`jobs`查看后台。会在输出到任务编号后面看到`+`、`-`。这表示最近放到后台和最近第二个放到后台的任务。

使用`fg   任务编号` 将某个任务拿到前台。如果使用`fg`会将最近放到后台的任务拿到前台，就是任务列表中带加号的那个任务。

要使后台的某个任务由Stopped变为Running，使用`bg 任务编号`命令。


##  更改apt镜像源

Ubuntu的/etc/source/sourcs.list 文件格式如下：

```
deb或deb-src  仓库地址 发行版代号-软件类别 自由软件 非自由软件 ......
```

我们说镜像加速，实际上就是修改仓库地址即可，其它结构是完全同步过来的。比如默认仓库地址是`http://archive.ubuntu.com/ubuntu/ `，把这个换成 `https://mirrors.aliyun.com/ubuntu/ `即可。

使用如下命令更换镜像源：

```
sudo  sed  -i  s*http://archive.ubuntu.com/ubuntu/*https://mirrors.aliyun.com/ubuntu/*g  /etc/apt/sources.list
```

然后，运行如下命令：

```
cat /etc/apt/sources.list  # 检查文件内容
sudo apt  update    # 更新软件列表
sudo  apt  upgrade  # 更新软件
```

## 使用apt管理软件包

apt是Ubuntu系统默认的软件包管理器，其主要操作如下表：

-  apt search ^python$ ：  搜索软件包
-  apt update： 更新包列表
-  apt install python ： 安装包

这里在搜索软件包时，使用了 ` ^ ` 和 ` $ ` 正则符号，分别表示匹配单词首部和尾部，目的是严格限定软件的名称，避免搜索结果过多。

#  Bash Shell

##  Bash的配置文件

登录shell之后会从5个不同的文件中读取命令：
- etc/profile ： 主启动文件，每个用户登录后都会读取
其余的四个文件都用于同一个目的：提供用户专属的启动文件来为该用户使用shell时提前设置，例如设置环境变量，预先执行一些命令。另外要注意，shell会按顺序执行第一个被找打的文件，余下的则被忽略。
- $HOME/.bash_profile 
- $HOME/.bashrc
- $HOME/.bash_login
- $HOME/.profile

## Bash Shell的快捷键  

移动光标：
- ctrl+a:光标移到行首
- ctrl+e:光标移到行尾
- ctrl+b:光标左移一个字母
- ctrl+f: 光标右移一个字母
- esc+f: 往右跳一个单词
- esc+b: 往左跳一个 单 词

删除：
- ctrl+h:删除光标前一个字符，同 backspace 键相同
- ctrl+w: 删除光标前的一个单词
- esc+d: 删除光标后的一个词
- ctrl+k:清除光标后至行尾的内容。
- ctrl+u: 清除光标前至行首间的所有内容。
- ctrl+d: 删除光标所在字母;注意和backspace以及ctrl+h的区别，这2个是删除光标前的字符

修改：
- ctrl+t: 交换光标位置前的两个字符
- esc+t: 交换光标位置前的两个单词

其他：
- ctrl+y: 粘贴或者恢复上次的删除
- ctrl+l:清屏，相当于clear。
- ctrl+r:搜索之前打过的命令。会有一个提示，根据你输入的关键字进行搜索bash的history
- ctrl+d:退出当前 Shell
- ctrl+c:杀死当前进程
- ctrl+z : 把当前进程转到后台运行，使用’ fg ‘命令恢复。比如top -d1 然后ctrl+z ，到后台，然后fg,重新恢复


# Vim


## 打开文件

使用`vim <file> `即可打开文件，如果该文件不存在就会新建。

如果仅仅是删除、移动，而不增加内容，那么只在命令模式就可以完成操作。

## 三种模式的切换

vim默认打开的模式为命令模式。

按 i 进入编辑模式，按 v/V 进入字符/整行选择模式，按 Esc 重新回到命令模式。

## 命令模式下的操作

单行删除、复制、粘贴：

若要	|	依次按下
|---	|	---|
整行删除	|	dd
整行复制	|	yy
粘贴到光标所在行的下一行/上一行	|	p/P 

多行删除、复制、粘贴：

若要	|	依次按下
|---	|	---|
删除光标所在到最后一行/第一行	|	 dG/d1G  
复制光标所在行到最后一行/第一行	|	yG/y1G

行内删除、复制、粘贴：

若要	|	依次按下
|---	|	---|
删除光标所在到该行的行尾/行首	|	 d$/d0 
复制光标所在到该行的行尾/行首	|	 y0/y$ 

查找、替换：

若要	|	在底部输入命令
|---	|	---|
从光标所在处正向查找	|	 `:/<text> `
从光标所在处逆向查找	|	`:?<text>`
全部替换不确认：  	|   `	:1,$s/<oldText>/<newText>/g`
逐一确认是否替换（加c）|	`:1,$s/<oldText>/<newText>/gc`

说明：上面两种查找中，按 `n` 键查找下一个，按 `N` 键查找上一个。

保存：

若要	|	在底部输入命令
|---	|	---|
保存	|	:w 
强制退出而不保存	|	 :q! 
保存后退出（最常用）	|	:wq
另存为新文件	|	` :w <filename>`
读入另一个文件内容追加到光标所在行的下一行	| `	:r  <filename> `

## 选择模式下的操作

若要	|	按下
|---	|	---|
进入上下左右字符选择模式	|	v
进入行选择模式	|	V
进入列选择模式	|	Ctrl+V
复制选择的内容	|	y
将选择的内容粘贴到游标之后	|	p
将选择的内容删除	|	d

## 插入内容

在命令模式下按i进入编辑状态，此时编辑器下部显示` ---insert--- `。

编辑状态就和一般的编辑器一样，按键盘上的上下左右键可移动光标，按`Ctrl+C`可复制、按`Ctrl+V`可粘贴。

## 回到命令模式

按`Esc`键回到命令模式。

## 常用按键汇总

|模式	|	按键	|	含义|
|---	|	---	|	---|
命令模式	|	:w	|	保存更改，加 ! 强制保存
命令模式	|	:q	|	退出，加 ! 强制退出
命令模式	|	:wq	|	保存并退出，常用
命令模式	|	u	|	撤销
命令模式	|	dd	|	删除整行
命令模式	|	yy	|	复制整行
命令模式	|	p	|	粘贴到下一行
命令模式	|	v	|	进入单字符选择-- VISUAL --
命令模式	|	V	|	进入整行字符选择-- VISUAL --
-- VISUAL --	|	d	|	删除已选择的字符
-- VISUAL --	|	y	|	复制已选择的字符
-- VISUAL --	|	p	|	粘贴到光标后面
命令模式	|	:1,$s/旧文本/新文本/g	|	查找替换，/ 可以换成其它字符
命令模式	|	i	|	进入 -- INSERT --
    
# VirtualBox

1. 下载Virtual Box最新版本，安装。如果报错内容是缺少VC++2019，则去[https://learn.microsoft.com/ZH-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170](https://learn.microsoft.com/ZH-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170)下载支持文件。

![VC++2019](https://pics5.baidu.com/feed/91529822720e0cf39f8620b98bd2ee14bf09aa9a.png@f_auto?token=af0b3c59d267ec1cf710db8a2579d98c)


2. 启动VirtualBox，新建

![](https://img-blog.csdnimg.cn/89a5eb1afb894bd48806e011767ec2ce.png)

![](https://img-blog.csdnimg.cn/ef67b02d6a8f462185c4e45fe2e6c8af.png)

内存大小、硬盘容量基本选择默认即可。

3. 新建好后，点击设置，修改启动顺序为：光驱第一、硬盘第二。因为我们是通过光驱来安装系统的，如果选错顺序将会导致后续的安装失败。

![](https://img-blog.csdnimg.cn/116ff2b533f946cb8c857b2b15c7c113.png)

4. 继续点击设置里面的存储，点击“没有盘片”，选择下载好的系统镜像。点击确定，启动虚拟机即可。
![](https://img-blog.csdnimg.cn/8431cd167ced46c98c46b002a860333b.png)

# 列字段筛选工具：awk命令

##  语法

```
awk  选项  '行筛选条件{列编辑指令}' 文件或列表
```

选项：
-F 指定分隔符

## 示例

```
cat /etc/passwd | awk -F ":' "{print $1,$3,$4}''
```

以":"为分隔符，输出1，3，4列内容

## 内部变量

- FS：指定每行文本的字段分隔符，默认为空格或制表位。 与-F一样
- NF：当前处理的行的字段个数。 
- NR：当前处理的行的行号（序数）。 
- $0：当前处理的行的整行内容。 
- $n：当前处理行的第 n 个字段（第 n 列）。 
- FILENAME：被处理的文件名。
- RS：数据记录分隔，默认为\n，即每行为一条记录。

## 行筛选条件

输出奇数行：

```
nl /etc/passwd | awk '(NR%2)==1{print}' 
```

输出1、3行的内容：

```
cat /etc/passwd | awk 'NR==1||NR==3{print}' 
```


## if语句

必须用在{}中，且比较内容用()扩起来

```
awk -F: '{if($1~/mail/) print $1}' /etc/passwd                                       //简写
```

```
awk -F: '{if($1~/mail/) {print $1}}'  /etc/passwd                                   //全写
```


```
awk -F: '{if($1~/mail/) {print $1} else {print $2}}' /etc/passwd            //if...else...
```



# 管理分区与文件系统

## 设备名称

在Linux中，硬盘一般命名为/dev/sda，如果有第二块，则继续命名为/dev/sdb。

分区一般在硬盘名称后加数字，例如/dev/sda1、/dev/sda2。

不过，对于Windows和Linux双系统而言，这种命名方式可能不适应，具体硬盘名称需要打开 /etc/fstab 查看。
## 分区、挂载、挂载点的概念

一块硬盘往往分为几个区，例如Windows的C盘、D盘、E盘，就是三个分区。

在Linux中，一个分区只有连接到文件系统中的某个目录才能使用这个分区，将硬盘的某个分区对应到Linux的某个目录称为“挂载”。

将U盘这个“特殊的分区”对应到某个目录（例如/mnt/sandisk）也称为“挂载”。


每个硬盘、每个分区都统一使用“设备”来称呼，每个硬盘、每个分区都使用一个设备名称来唯一标识。

关于分区、设备名称、挂载点的信息都记录在/etc/fstab文件中，该文件的每一行都表示一个分区及其挂载点，还包括分区容量等其它信息。



## 分区表

分区表用来存储关于硬盘每个分区的大小和布局信息，有两种标准：
- 传统的MBR，适用于古老的BIOS启动方式，MBR分区大小限制在了2TB。
- 新兴的GUID，gpt分区，适用于UEFI体系，取代BIOS。GUID分区可以支持高达9.4ZB的分区。


由于fdisk并不支持gpt分区，所以使用parted命令。

## 分区管理

查看硬盘分区信息：

```
parted -l 硬盘名称
```


## 挂载

### 自动挂载

编辑/etc/fstab文件

### 手动挂载

```
mount -t ext3 -o ro dev/sdb1 /mnt/tmp
```


# 基础

## Linux简介

Linux 内核最初只是由芬兰人林纳斯·托瓦兹（Linus Torvalds）在赫尔辛基大学上学时出于个人爱好而编写的。

Linux 的发行版说简单点就是将 Linux 内核与应用软件做一个打包。

目前市面上较知名的发行版有：Ubuntu、RedHat、CentOS、Debian、Fedora、SuSE、OpenSUSE、Arch Linux、SolusOS 等。


##  Shell简介

在没有图形界面的时代，Shell是用户与操作系统交互的唯一方式。

用户输入命令，shell将命令传递给操作系统，操作系统执行后返回给shell，显示在终端上，这就是shell执行的一般流程。

终端只是一个图形界面，shell才是“真正的灵魂”。

所以，bash是shell，而不是终端，当你安装了bash之后，你可以在任意终端使用bash。

比如Windows terminal 是Win11自带的终端软件，它里面可以调用的shell包括：powershell、bash（如果已安装）、cmd等。

Windows10上安装的powershell既可以认为是终端，也可以认为是shell，只是因为它们取了相同的名字。不过我们可以在vscode的集成终端环境中使用powershell，此时PowerShell就是shell。

最流行的shell是bourne shell，简称bash，它预装在许多流行的Linux发行版上。当然，还有更现代的zsh、颇受用户喜爱的fish等Shell。

这里更推荐学习Bash，因为一通百通，学会了bash，其它的shell就很容易了。后面的教程都默认使用Bash。


## 在Windows上获取bash

bash是大多数Linux默认的shell，但是我们经常使用的是Windows。

如果不想安装完整的Linux桌面操作系统，而只是想在Windows上获取一个Bash环境，有几种解决方案。

- Cygwin

Cygwin在Windows下提供了具备Linux观感的类Linux环境，提供了大量的POSIX ApI功能的DLL。

但是请注意，cygwin不是在Windows上运行原生Linux程序的方法，如果要这么做，必须从源代码构建。

- wsl

wsl是微软推出的在Windows上运行的Linux子系统，可以直接到应用商店搜索Ubuntu下载安装。

- git bash

大多数情况下，我们只是想使用shell命令，而并不需要Linux环境，此时可以使用git bash。

安装git 默认安装git bash ，它包括了很多与shell命令同名的exe文件，可以直接使用。实际上这些命令足够我们学习完整的shell了。

##   终端提示符

打开终端后，每次在输入命令前会看到有一段文本，这段文本叫终端提示符：

```
[  username@hostname~  ]$
```

这里的username表示用户名称， hostname表示主机名，~表示当前工作目录是用户的家目录。

中括号后面会接一个美元符号`$`或井号#。美元符号`$`表示一般用户，井号地代表管理员。

Linux有两种用户，一般用户和管理员用户，大部分文件系统管理相关的命令只需要一般用户即可。

我们后面的代码示例会省略中括号的内，只显示提示符`$`，表示后面的内容是你需要输入到终端的。注意，只需要输入$后面的文本，而不能重复输入`$`。一般紧接着会我们会写出终端返回的结果。例如：

```
$  which ls    # which ls是需要输入的命令
/usr/bin/ls   # 终端显示的结果
```

和大多数编程语言不一样，Linux在命令行和脚本中使用井号#表示将该行后面的内容注释掉。例如上文示例。

##   Bash常用快捷键

Bash常用快捷键如下：

|快捷键|作用|
|---|---|
Ctr+C	|停止正在运行的任务
Ctrl+D	|退出当前Shell
Ctrl+U	|清空当前命令行内容
Ctrl+A	|移到行首
Ctrl+E	|移到行尾
Ctrl+K	|从光标出删除到末尾

##  Tab补全

使用命令行最多的按键或许就是Tab键了，所以单独使用一小节讲解。Tab键会根据你已经输入的少数几个字符自动猜测后面的内容并进行补全。常见的情况有以下几种。

-  命令补全： 例如先输入ec两个字符，按Tab键，Bash会补全成echo。不过Linux命令一般都比较简短，一般都是直接写完整的命令。

-  文件名称补全： 这是最实用的功能，一般来说文件名都比较长，如果每次都要输入完整的文件名不仅费时而且极容易出错。此时，只需要输入文件名的前一个或少数几个字符，再按下Tab键就可以自动补全文件名，如果匹配的文件名超过1个，那么终端就会输出匹配的文件名供我们再次输入以缩小范围。





##  环境变量

### Bash的内置环境变量

以下是直接可以使用的环境变量，注意区分大小写。
- HOME ： 当前用户家目录
- USER：用户名
- CDPATH： 以冒号分隔的目录列表，作为cd命令的搜索路径
- PS1 ： shell命令行的主提示符
- PS2： shell命令行的次提示符
- PATH： shell查找命令时检索的目录列表，以冒号分隔
- BASH ： bash shell 当前实例的完整路径名
- BASH_VERSION：bash版本
- LANG ：当前环境的语言
- HISTFILE：历史文件的位置，通常位于`$HONE/.bash_history`
- HISTFILESIZE：可以存储的历史命令条数，默认为1000，这个值对于大多数情况够用。
- HOSTNAME： 当前主机名称
- OSTYPE：操作系统类型。
- LINES ：终端山可见的行数
- PS0：执行命令之前显示的内容
- PWD：当前工作目录

### 修改PATH环境变量

一个非常常见的场景是将一些路径添加到PATH环境变量的路径列表中，也就是修改PATH环境变量的值。

例如，将家目录的bin目录添加到PATH环境变量：

```
$PATH="${PATH}:/${HOME}/bin"
```

### 新增和修改自定义环境变量


export命令可以将指定的变量设置为环境变量。

```
$ ENV_EXANPLE=ENV_EXAMLLE_VALUE
$ export ENV_EXANPLE
```

也可以写在一起：

```
export ENV_EXANPLE=ENV_EXAMLLE_VALUE
```

读取环境变量和普通变量的方式一样，使用美元符`$`。

不过，此时环境变量还没有永久生效，当重启后，自定义环境变量就就会被清除，要让自定义环境变量永久生效，一个常用的方式是将该行命令添加到`$HOME/.bashrc`。然后执行：

```
source $HOME/.bashrc
```

这会立即生效，而无需重启或注销。

### 普通变量和环境变量的区别

普通变量和自定义环境变量本质上都是变量，声明和使用的方式一模一样，这两者的区别主要在于生命周期的不同。
- 普通变量是临时的，只在此次使用shell时有用，下次使用shell（注销或重启后）就不存在了。
- 环境变量包括内置的和自定义的，是永久可以使用的。

是否要将普通变量永久保存，也就是变为环境变量，取决于自己的实际需求。一般而言，需要重读多次使用的变量应该提升为环境变量，少数几次使用的则使用普通变量即可。

# Docker


##  镜像和容器的概念区别

一个镜像只是一个压缩文件，这是一种模板，可以使用镜像实例化多个容器。一个容器表示具体的一个实例，有自己的生命周期，包括启动、停止、删除。

镜像好比操作系统安装文件，容器好比通过此文件安装到机器上并运行起来的操作系统。

##  docker主要命令汇总

-  docker create imageName：从镜像创建一个容器
-  docker start imageName ：从镜像启动一个容器，或重启一个运行的容器
-  docker run imageName ： 从镜像启动一个容器
-  docker pause container ：挂起，也叫暂停
-  docker stop containerName：停止容器
-  docker kill containerName：停止容器
-  docker restart containerName ：重启
-  docker rm containerName：删除
-  docker ps : 查看容器信息
-  docker image ls ：查看本地镜像列表

##  docker run命令

docker run 用来启动一个容器，优先从本地寻找镜像，如果本地找不到，则从远程仓库拉取。

- ` -d `  后台启动，并返回容器ID。
- ` -i `： 交互模式运行容器
- ` -P ` ： 随机端口映射，容器内部端口映射到主机是随机端口
- ` -p ` ： 指定端口映射，格式为 ` -p 主机端口:容器端口 `，如果端口一样，可以只写一个
- ` -t `：  为容器重新分配一个伪输入终端，通常与-i搭配：-it
- ` --name ` ： 指定容器名称
- ` -v ` 指定一个目录映射到本地某个文件夹

##  docker build命令

根据Dockerfile配置文件，创建一个镜像。

默认配置文件为项目目录下的Dockerfile文件。

```
docker build -t 镜像名称:tag  .
```

最后的点号(.)表示将本目录下的所有文件打包成一个镜像，一定不能忽略。

##  目录映射

使用 ` -v ` 选项，可以将容器内的目录映射到本地主机，这样，两个目录下的内容始终是同步的。语法如下：

```
docker run -it -v 宿主机目录:容器目录
```

##  编写Dockerfile文件

Dockerfile是构建镜像的配置文件，Docker依据Dockerfile文件逐行执行其中的命令，从而构建我们所需的镜像。

###  FROM ： 获取基础镜像

FROM的作用是获取基础镜像，必须写且必须写在第一行。

FROM的格式为：

```
FROM image:tag
```

image是镜像名称，tag是版本标签，一般为数字或latest，如果不写默认为最新版。

###  COPY：复制本地文件到镜像

COPY 的作用是将本地文件复制到镜像内的虚拟目录。COPY的语法格式为：

```
COPY src1 src2 ...  dest
```

src可以是文件或目录。dest是镜像的目标目录。不过，尽量不要将src写成文件夹，因为会复制整个目录的内容,包括文件系统元数据。

文件名支持使用通配符。

COPY命令的示例如下：

```
COPY  *.html  *.js  *.css  /opt
```

复制文件还有一个命令是ADD。ADD和COPY都是复制，但由于COPY命令更透明，一般优先使用COPY。

###  RUN：执行命令
 
RUN的作用是在构建时执行一条或多条命令，例如通过yum或apt下载软件包。

需要特别指出的是，Dockerfile的每一行命令被执行后都会新增一层镜像。因此，最佳的做法是将RUN执行的多条命令合并在一行写，用&&连接，这样有助于减小最终镜像的体积。

RUN命令示例如下：

```
RUN echo 1 && echo 2
```

###  WORKDIR ：设置初始目录

WORKDIR的作用是设置容器启动后的初始目录，类似于cd。此后的命令都将以此为工作目录。

###  ENV：设置环境变量

ENV的作用是设置环境变量，可以一次设置一个：

```
ENV key1=value1 key2=value2
```

###  CMD ：容器启动后的初识命令

从镜像开启容器实例后运行的初始命令，初始命令只能有一个。

CMD命令包括各选项参数用引号包裹，各个部分逗号隔开。例如：

```
CMD echo "hello"
```


# Linux的进程和服务

##  服务

### 进程和服务的区别


进程是程序正在运行的实例，是运行着的程序，每个进程都占用系统资源，包括内存、I/O 等。每个进程必须有唯一的进程ID，且在操作系统的进程管理器中也有对应的进程控制块（PCB）实体。

服务是在操作系统上运行的一种保持长期存在的非交互性进程，它主要负责提供特定的系统或网络服务，以便满足来自客户端的请求或负责某个定时任务的执行，使操作系统保持运行。

可以简单的理解为，进程一般是是暂时的、一次性的、前台执行的、用户直接交互的；而服务一般是持续性的、后台执行的、非交互性的。

### 初始化系统的分类

Linux所提供的持续性服务由守护进程实现，Linux将管理每一个守护进程的方法作为一个服务，并且使用了某一种初始化系统，也叫init系统，主流的init系统分为两种：

- Sysinit  源于20世纪80年代创建的传统init系统，目前，大多数老版本UNIX和Linux采用此init系统。
- systemd  大多数Linux发行版的最新版本都采用了systemd作为 init系统，例如centos7.x及以后，Ubuntu15及以后。

所以，应该将重点放在systemd上。

###  systemd的单元、服务单元、目标单元

systemd的主要任务是启动停止服务。Linux将管理的事项抽象成一个个单元（Units）。单元是一个由名称、类型和配置文件组成的组，专注于某一项服务。

在处理服务时，systemd分为服务单元和目标单元。

每个服务单元以.service结尾，每个目标单元以.target结尾。

列出所有的单元：

```sh
systemctl list-units 
```

列出所有的服务单元：

```sh
systemctl list-units | grep  .service
```

列出所有的目标单元：

```sh
systemctl list-units | grep  .starget
```

###  systemd单元的配置文件

每个单元对应若干配置文件。Linux单元配置文件位于/lib/systemd/system和/etc/systemd/system中。

列出所有的服务单元配置文件：

```sh
systemctl list-units-files --type=service
```

列出所有的目标单元配置文件：

```sh
systemctl list-units-files --type=target
```

显示sshd服务的单元配置文件：

```sh
cat /lib/systemd/system/sshd.service
```

服务单元的配置文件主要包括：
- Description 描述
- Documention 手册页
- After 应该在哪些服务启动之后启动本服务
- EnvironmentFile 服务配置文件
- ExecStart 启动服务的命令
- ExecReload 重载服务的命令
- WantedBy 服务所属的目标单元

### 启停服务

启动服务：

```sh
systemctl start sshd.service
```


停止服务：

```sh
systemctl stop sshd.service
```

重启服务：

```sh
systemctl restart sshd.service
```

查看服务状态：

```sh
systemctl status sshd.service
```


## 图形界面

### X Window System

从英文字母看，X在W（Window）后面，所有称为X，有下一代窗口之意。在Unix-like上的图形用户接口（GUI）被称为X或X11。X11只是一个软件而不是操作系统。

X Window分为X Server和X Client两个组件。X Server管理硬件，X Client管理应用程序。

由于每个X Clinet是独立的，并不知道其它的X Clinet，这样就会造成GUI界面的显示冲突，所以使用X Window Manager进行管理。X Window Manger，也叫窗口管理器，是一个特殊的X Client，负责管理所有的应用程序GUI。著名的X Window Manager有GNOME、KDE。

随着技术的发展，X Window窗口管理系统正逐步被淘汰，而被新一代图形界面管理系统——Wayland取代。

X Window System使用C/S架构,服务端和客户端可以基于网络通信。

客户端(也就是各种软件)将绘图请求发给服务端,服务端操纵显卡或视频终端把位图图像绘制出来,并处理键盘鼠标的事件,发送给客户端.注意,和人交互的是服务端。

- 服务端监听到显示器、鼠标、键盘事件，将事件信息（例如用户在哪个位置点了一下）发送给客户端，请求指示“此时应该怎么显示？”
- 客户端接收到该事件信息，计算出显示逻辑（例如在某个地方显示一个图形），将绘制指令发送给客户端。注意，客户端没有绘制能力，它只发送绘制指令。
- 服务端接收到绘制指令，然后调用图形API“画”出来（图形、文字等）。
- 窗口管理器协调各个客户端的堆叠等状态。

为什么需要窗口管理器？因为多个客户端是层叠的，谁在前面谁在后面客户端自己是不知道的，只能在窗口管理器中汇总才能知道。

通俗点解释。

- 服务端说： 用户在坐标(50,50)处点了一下，这种情况该怎么显示？
- 客户端说：这种情况应该在坐标（100，100）处画一个笑脸图形。
- 服务端说：收到！我马上派遣调用图形API在（100，100）出画一个笑脸图形。

但这种情况只能同时显示一个gui程序。为了管理众多的窗口怎么在屏幕上显示,需要窗口管理器(Window manager).窗口管理器可以实现一个屏幕上显示多个X程序,实现调整程序大小,标题栏,最大化,最小化,关闭按钮,虚拟桌面这些功能.没有WM,一次只能运行一个GUI程序,而且分辨率锁死,显然很不符合使用习惯.

窗口管理器的例子：
- 服务端对客户端A说： 我监听到用户在坐标(50,50)处点了一下，这种情况该怎么显示？
- 客户端A对窗口管理器说：我要在（50，50）处画一个笑脸。
- 服务端对客户端A说： 我监听到用户在坐标(80,150)处点了一下，这种情况该怎么显示？
- 客户端B对窗口管理器说：我要在（80，150）处写一段文本。
- 服务端对客户端C说：我监听到用户点击了全屏按钮，这种情况该怎么显示？
- 客户端C对窗口管理器说：用户让我全屏显示窗口，并且要在其它客户端的前面。
- 窗口管理器：你们的指令都收到了，我来汇总出一个总的绘制指令xxxxxxxx。
- 窗口管理器对服务端说：我的总绘制指令是xxxxxxx，你负责给我显示出来。
- 服务端：收到！我马上派遣驱动程序显示出来。

### Wayland

Wayland将X中的Server和窗口管理器整合到一起作为服务端，称为合成器（Compositor），架构上只分了客户端和合成器两大部件。

- 客户端（Wayland Client），直接计算各自界面的渲染缓冲数据，然后自行绘制，并通知server更新了哪个区域。
- 合成器（Wayland Compositor），汇总所有客户端的更新通知，实现各界面窗口“合成”，最后交给显示驱动绘图，呈现最终效果。

client和server端都会发生绘制。client绘制本地的窗口内容，server端主要用于合成时渲染。两边都可独立选择用软件或者硬件渲染。

为什么需要通知server再次合成？因为多个客户端窗口一般是层叠的，谁在前面谁在后面客户端自己是不知道的，只有集中在server中处理层叠关系。

通俗解释：

- 合成器对客户端A说： 我监听到用户在坐标(50,50)处点了一下
- 客户端A在（50，50）处直接调用图形API画了一个笑脸，然后对Server说 ：我现在通知你，左上角xx区域已经更新了。
- 合成器对客户端B说： 我监听到用户在坐标(80,150)处点了一下。
- 客户端B直接调用图形API在（80，150）处写一段文本，然后对Server说：我现在通知你你，区域yyyy已经被更新了。
- 合成器对客户端C说：我监听到用户点击了全屏按钮。
- 客户端C直接调用API重新绘制了全屏下的图形，然后对Server说：全屏区域已经更新了。
- 合成器说：你们的通知都收到了，我会汇总你们的更新，看看谁应该在前面显示谁应该被遮挡，然后派遣图形驱动重新合成一个最终的效果呈现给用户。


总之，x Window的特点是，client是无法调用图形API，只能将指令发送给server，让server去调用图形API绘制。也就是说，x server成为了client和图形API的“传话筒”，但是为什么不让client与图形API直接通信呢？于是Wayland应运而生。Wayland先进的地方在于，每个client都可以自行调用图形API绘制自己的窗口，server汇总信息，调用图形API汇总最终的合成界面。

这里的图形API指的是OpenGL、Direct X、metal、vulkan，下面还有图形驱动程序，再下面就是显卡。Vulkan是一个高性能的图形API，Wayland插上Vulkan的翅膀一定会带来更大的性能提升。



# PowerShell



## 别名

- Get-Alias 	 获取当前会话中的所有别名
- New-Alias 	 创建新别名
- Set-Alias 	 创建或更改别名
- Remove-Alias 	 删除别名
- Export-Alias 	 将一个或多个别名导出到文件
- Import-Alias 	 将别名文件导入 PowerShell





## 获取内置别名：Get-Alias

获取以p开头的别名：

```sh
Get-Alias -Name p*
```

##  创建别名

```
New-Alias -Name gas -Value Get-AuthenticodeSignature
Set-Alias
```


## 内置的常用别名

```sh
cat -> Get-Content
cd -> Set-Location
cp -> Copy-Item
del -> Remove-Item
dir -> Get-ChildItem
echo -> Write-Output
gc -> Get-Content
gl -> Get-Location
ls -> Get-ChildItem
mv -> Move-Item
rm -> Remove-Item
sc -> Set-Content
write -> Write-Output
```


##  具有参数的命令的备用名称

可以将别名分配给 cmdlet、脚本、函数或可执行文件。 不能为命令及其参数分配别名。 例如，可以将别名分配给 Get-Eventlog cmdlet，但不能将别名分配给 Get-Eventlog -LogName System 命令。

这种情况的解决办法是：可以创建包含命令的函数。 若要创建函数，请键入单词“function”，后跟函数的名称。 键入命令，并将其括在大括号 ({}) 中。

##创建文件或文件夹
使用如下命令创建文件：


```sh
New-Item  1.txt -ItemType file
New-Item  2.txt   # 简写形式
```

使用如下命令创建文件夹：

```sh
New-Item  folder -ItemType Directory
```

使用-Force选项覆盖已存在的文件或文件夹。

##  读取文本文件内容

Get-Content 将从文件读取的数据视为数组，其中每行文件内容为一个元素。

```sh
$arr = Get-Content  .\1.md  -encoding utf8
$arr  # 逐行输出文件的每行内容
```

使用utf8是为了避免中文文件的乱码。

可以通过检查返回的内容的长度来确认此点：



```sh
$ (Get-Content -Path C:\boot.ini).Length
6
```

如下命令将剪贴板读取到数组中：

```sh
$arr = Get-clipboard 
$arr[0]  # 第一行内容
```

# 多命令组合

## 管道

使用管道运算符将两个命令连接起来，管道符是一条竖线。注意，竖线两边必须有至少一个空格。管道的格式如下：

```sh
命令1 |  命令2
```

## 子命令

可以将命令的输出值赋给另一个变量而不是打印出来。

```sh
$files = ls
```

如果存在空格，只需要用圆括号括起来即可：

```sh
> $files = (ls *.txt) #得到后缀为txt的文件列表

> echo (ls *.txt).length #输出后缀为txt的文件数量
```

## 单行多命令

```sh
(mkdir test) -and (cd test)
```

Copy-Item命令的作用是复制文件或文件夹，例如：

```sh
Copy-Item -Path 1.txt -Destination 2.txt
```

如果文件已存在，则会失败，使用-Force选项覆盖：

```sh
Copy-Item -Path 1.txt -Destination 2.txt -Force
``

以下命令以递归方式将文件夹 C:\temp\test1 复制到新文件夹 C:\temp\DeleteMe：

```sh
Copy-Item C:\temp\test1 -Recurse C:\temp\DeleteMe
```

下面的命令将 C:\data 中任意位置包含的所有 .txt 文件都复制到 C:\temp\text：

```sh
Copy-Item -Filter *.txt -Path c:\data -Recurse -Destination C:\temp\text
```

## 工作目录

打印工作目录

```sh
Get-Location
```

切换工作目录

```sh
Set-Location $HOME\Desktop
```

## 相对路径和绝对路径

相对有两个符号：
- `.` 一个点号，当前目录
- `..`   两个点号，上级目录

回到上一级：

```sh
Set-Location ..   
```

很多时候需要获取剪贴板的内容，PowerShell提供了内置的命令Get-Clipboard。

复制一段文本，运行如下命令在控制台输出剪贴板内容：

```sh
Get-Clipboard
```

如下命令将剪贴板读取到数组中：

```sh
$arr = Get-clipboard 
$arr[0]  # 第一行内容
$arr[-1]  # 最后一行内容
```

使用h（Get-History的别名）获取历史记录。

## F7显示历史记录

键入一个或多个字符，然后按 F8。 再次按 F8 会查找下一个实例。
`#text` Tab - 在历史记录中搜索 `text` 并返回最近的匹配项。 如果重复按 Tab，将循环访问历史记录中的匹配项。

使用Get-ChildItem列出目录下的文件列表，类似与Linux的ls命令。

```sh
Get-ChildItem -Path   C:\ 
Get-ChildItem -Path C:\ -Force #  显示隐藏项
```

## 使用通配符

可以使用通配符以便缩小文件列表范围。通配符主要有三种：

*	表示任意数量的字符
?	表示任意单个字符

例如，若要在 当前文件夹中查找带有后缀 .md 并且基名称中正好有五个字符的所有文件，请输入以下命令：

```sh
Get-ChildItem ?????.md
```

若要在 当前目录中查找以字母 x 开头的所有文件，请键入：

```sh
Get-ChildItem x*
```

若要在 当前目录中查找所有md文件，请键入：

```sh
Get-ChildItem *.md
```

若要查找名称以“x”或“z”开头的所有文件，请键入：

```sh
Get-ChildItem [xz]*
```

##  删除文件和文件夹

使用如下命令删除文件和文件夹：

```sh
Remove-Item 1.txt 
Remove-Item folder -Recurse
```

在删除文件时默认需要二次确认是否删除，使用 -Recurse不询问。

在powershell中，一切皆对象。对象由三种类型的数据组成：对象类型、其方法和属性。

例如定义了一个字符串：

```sh
$str = "hello,world"
```

使用如下命令查看该字符串对象的成员：

```sh
get-member  $str
```
这会输出字符串对象的所有属性和方法。

Linux输出的结果是纯文本，而Powershell输出的结果为对象或包含对象的集合。

使用where-object命令从字段中筛选匹配的值，该命令的别名是where和?。

例如，get-alias的输出结果如下，有两个字段：CommandType和Name

```sh
CommandType     Name  
|-----------  ----     
Alias           % ->  ForEach-Object
Alias           ? ->  Where-Object
......
```

要筛选出包含where的别名，可以使用：

```
get-alias | where-object {$_.name -contains "where"}
```

where-object会依次迭代集合中的每个对象，`$_`表示当前对象。

还可以省略$_ 和 花括号，如下是简写模式：

```sh
get-alias | where-object name -contains "where"
```

还可以使用？作为别名，如下是最精简的方式：

```sh
get-alias | ? name -contains "where"
```

## out-host

out-host是管道命令，接受管道前一部分传递过来的命令，然后将数据发送到主机窗口。

```sh
ls  | out-host
```

注意，out-host只能作为管道命令，不能写在一行命令的开头。

## out-file

out-file是管道命令，接收管道前一部分传递过来的命令，然后将数据保存到文件，如果本来应该显示在终端，则此时不会显示。例如：

```sh
ls | out-file 1.txt
```

由于中文可能会显示为乱码，很多时候需要使用特定的编码保存，如下示例使用utf8保存：

```sh
ls | out-file 1.txt -encoding utf8
```

## 创建数组

有多种方式创建数组，如下示例所示：

```sh
$nums1 = 1,2,3     # 用逗号分割元素
$nums2 = 1..3    #  创建1~3的数组，元素是1 2 3
$nums3 = @(1,2,3)  # 推荐使用@()
$strs1=@('hello','world') # 元素为字符串的数组
$arr=@('hello','world',1,2,3) # 元素的类型不需要相同
```

## 读取文本文件到数组中

上面几个例子是从无到有创建包含简单元素的数据，实际上，一个更常见的场景是从文本文件读入内容，即get-content命令。

get-content命令会读入文本内容，并返回一个数组，每一行就是一个元素。例如一个文本文件test.txt：

```sh
hello
world
```

```sh
> $lines = (get-content test.txt)
echo $lines
```

## 访问数组元素

```sh
$arr = @(1,2,3,4,5,6)
$arr  # 打印数组，分行输出 1 2 3
$arr[0]   # 索引位置0也就是第1个元素 1
$arr[-1]   # 最后一个元素
$arr[-2]   # 倒数第二个元素
$arr[1..4]  #  第2到第5个元素  2 3 4 5
$arr[1,4]  #  第2个和第5个元素  2 5
$a[-3..-1]   # 最后3个元素  4 5 6 
$a[-1..-3]   #  最后3个元素  6 5 4  ，注意与上一行的区别
```

## 修改数组

```sh
$arr = @(1,2,3,4,5,6)
$arr.SetValue(22,1) #   将索引位置1的值改为22
$arr[1]  # 22
```

可以使用 += 运算符将元素添加到数组：

```sh
$a = @(1..4)
$a += 5
$a  # 1 2 3 4 5
```

## 数组的长度

使用数组的length和count属性得到数组的长度。

```sh
$arr = 1..9
$arr.length   #  9
$arr.count #   9 
```

### 合并两个数组

```sh
$arr1 = 1,2
$arr2 = 3,4
$arr = $arr1 + $arr2
```

## 迭代数组

使用foreach()函数迭代数组。

```sh
$arr = 1..9
foreach ($element in $arr) {
  $element    # 依次输出1-9
}
```

## 筛选数组

使用where{} 筛选数组，通过传递一个表达式，筛选出值为true或可以视为true的元素。

一般而言，如果表达式得到的结果是0，则视为false。

例如，筛选所有奇数元素：

```sh
(0..9).Where{ $_ % 2 }
```

这里`$_`指代每次遍历的元素。

再比如，筛选出非空元素：

```sh
('hi', '', 'there').Where({$_.Length})
```

## 比较运算符

在命令行或脚本中经常会用到比较操作，比较操作主要分为数值的比较和文本的比较，返回True或False。

与bash shell使用中括号的语法不同，powershell直接书写比较参数和比较符号，例如：

```sh
> 2 -eq 2
True
```

常见的比较运算符如下表所示：

比较运算符|含义
---|---
-eq	|	等于	|	
-ne	|	不等于	|	
-lt	|	小于	|	
-le	|	小于等于	|	
-gt	|	大于	|	
-ge	|	大于等于	
-like	|	相似（通配符比较）	|
`-notlike`	| 不相似，使用通配符
`-contains`	|	`包含	`
`-notcontains`	|不包含

注意，文本的比较默认不区分大小写。要区分大小写，需要加上c符号例如：

```sh
$str1 = 'hello'
$str2 = 'HELLO'

$str1 -eq  $str2  # True 默认不区分大小写  
$str1 -ceq  $str2  # False  区分大小写
```

## 在PowerShell启动时运行的脚本

在Linux中，~/.bash_profile 和.bashrc 文件的作用是启动bash时预先执行一些命令。在Powershell中也可以实现这个功能。
	
首先打印$profile 变量获取启动脚本的路径：

```
$profile
```

默认的输出结果是：

```sh
C:\Users\你的用户名\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1
```

按照这个路径新建.ps1脚本文件，如果目录或文件不存在就新建。

然后在该文件中输入启动时运行的命令即可。


字典是一种键值对的映射，有些说法也叫哈希表。



使用@符号加花括号创建一个字典：

```sh
$dic=@{name='张三';age=39}
echo $data
```

如下示例访问字典的元素：

```sh
$dic['name']   # 括号加引号访问键的值
$dic.name  # 直接使用点号访问键的值
$dic.keys    # 返回所有键
$dic.values   # 返回所有值
```

如下示例对字典进行增删改查：


```sh
$data.add('c',1)    # 添加键c，值为1
$data['d']=4   # 添加键d，值为4
$data.containskey('d') # 查找哈希表的键是否存在
$data.remove('d')  #根据键删除元素
```

cmdlet是PowerShell中特有的一个概念，可以简单的类比为bash shell中的命令，我们也可以使用命令这个称呼表示cmdlet。我们所说的命令，有时候指一行中的第一个单词，此时后面的部分称为选项和参数；有时候就指包括选项和参数的那一行命令。

与bash shell采用短单词的习惯不一样，cmdlet采取动-宾结构，例如get-childitem，优点是语义明确，缺点是冗长，对于习惯了Linux命令的用户和社区来说需要适应。

cmdlet的动词大致包括：
- get 读取
- set 设置，写入，更改
- add  添加，追加
- clear  删除，清除
- invoke 执行
- where 查询
- new 新建
- copy/move  复制移动
- out 重定向，通常位于管道符的后面
- write 写入，输出
- start/stop 开启/停止，例如开启/停止某个服务
- remove 删除
- import/export  导入导出
- convert  格式转换

PowerShell内置了对CSV文件的读取和写入。

## CSV

例如有一个1.csv文件，内容如下：

```
名称,数量
苹果,5
橘子,10
梨子,8
```

如下命令读取CSV内容：

```sh
import-csv  1.csv
```

这将按对象格式打印出CSV内容，PowerShell会自动识别首行作为字段名：

```
名称 数量
---- ----
苹果 5
橘子 10
梨子 8
```

如下示例打印每一行并且打印每个字段：

```sh

$rows = import-csv  1.csv
$rows.length  # 3  有几条记录（排除第一行）
foreach （$row in $rows）{
	echo $row   # 打印每一行
}
```

这里的rows是一个数组，CSV中的每一行记录对应数组的一个元素。

## JSON 

PowerShell也内置对JSON文件的读取和写入。

使用如下命令从CSV转为JSON：

```sh
import-CSV   1.csv    -delimiter  ','  |  ConvertTo-Json
```

## 变量的声明和打印

变量以美元符号$开头，后接一个等号，然后是变量值：

```sh
> $a=1
> $b = 2   # 空格可有可无，没有像bash shell那样严格
```

打印变量使用 `$变量名`即可，也可以与bash shell一样使用echo，不过为了习惯统一，推荐使用echo。

```sh
> $a=1  
> $a
1
> echo $a
1
```

PowerShell能根据值自动确定变量的类型。

不过变量不存在而打印，powershell会报错：

```
> $foo
The varible '$foo' connot bebe retried because it has not been set.
```

## 字符串

使用单引号或双引号可以设置字符串的值：

```sh
> $a = "hello"  #单引号
> echo $a
hello

> $b = 'world'  # 双引号
> echo $b
world
```

## 变量内插

但是这两种引号有很大的区别。如果引号中没有对其它变量的引用，那么两种引号均可，如果有，那么在双引号中使用变量会被解析成值，这就是变量内插，而在单引号则不会。这个规则与bash shell是一致的。

```sh
> $name = '张三'
> echo "welcome,${name}"
welcome,张三   # 双引号，存在变量的解析

> echo 'welcome,${name}'
welcome,${name} # 单引号，原样输出
```

## 布尔值

- `$true`  真
- `$false` 假

```sh
> $isOk = $true
> $isNotOk = $false

> echo $isNotOk
True
> echo $isOk
False
```

## 数值

### 整数

```
> $num = 2
> echo $num1
```

### 浮点数

```
> $num= 0.8
> echo $num
0.8
```

PowerShell中的函数可以整体执行几行命令，如下是一个简单的函数示例：

```sh
function cdd(){
	cd ~\Desktop
}
```

此后，执行如下命令就可以快速进入桌面目录：

```sh
cdd
```

## 没有参数的函数

定义语法如下：

```sh
function 函数名() { 函数体 }
```

执行语法如下：

```sh
函数名
```

## 有参数的函数

定义一个有参数的函数的语法如下：


```sh
function 函数名([类型]$参数1,[类型]$参数2) {
    函数体
}
```

定义参数的类型不是必须的，如果不定义，那么不管传入的参数是什么类型，都始终将其视作字符串。

一个简单的带参数的函数示例如下：

```sh
function Info($name,$age) {  
   echo "姓名：$name，年龄：$age"
}
```

传参：

```sh
> Info -name 张三 -age 39
姓名：张三，年龄：39
```


## 参数的默认值

在函数定义时可以给参数一个默认值，例如：

```sh
function Info($name,$age=38) {  
   echo "姓名：$name，年龄：$age"
}

Info -name 张三 

##姓名：张三，年龄：38（age没有赋值，取默认）

```

## for循环

示例语法如下：

```sh
for($i=0; $i -lt 10; $i++){
    echo $i
}
```

## foreach语句

```sh
$strs = @('hello','world')
foreach($str in $strs){
    echo $str
}
```

## foreach()方法

```
$strs = @('hello','world')
$strs.foreach({echo $_})
```

这里比较重要的知识点是`$_`，代表每次跌倒时的值。

if语句以if关键字开头，后跟一对圆括号，其中写有条件。后跟一对花括号，其中写有满足条件时要执行的语句。如果语句比较简单，也可以省略花括号。

```sh
if(条件){
  # 执行语句
}
```

if-else的格式

```sh
if(条件){
  # 执行语句
}else{
  # 不满足条件时的执行语句
}
```

if-elseif-else格式：

```sh
if(条件1){
  # 执行语句
}elseif(条件2){
  # 不满足条件1但满足条件2执行的语句
}else{
 #所有条件都不满足执行的语句
}
```

```sh
switch(表达式)
  值1{ }
  值2{ }
  值3{ }
  default{ 没找到匹配时执行 }
```

## 内置变量

- `$null`   代表空值，将`$null`赋值给变量表示只创建该变量，但是不赋值。
- `$LASTEXITCODE`  调用外部程序时，运行结束后会返回一个退出码，0表示成功，非0表示发生错误。
- `$?`，最近一个命令的执行状态，为0为成功执行。
- `$_`  在管道对象中包含当前对象，在迭代时表示每次的迭代值。
- `$Home`  此变量用于表示用户主目录的完整路径
- `$IsLinux`  如果当前会话在Linux操作系统上运行，则此变量值为`True`，否则为`False`。
- `$IsWindows`  如果当前会话在Windows操作系统上运行，则此变量值为True，否则为False。
- `$PID`   此变量显示进程的PID，该进程正在托管当前PowerShell的会话。
- `$PSHome`   此变量表示Windows PowerShell安装目录的完整路径。
- `$PSVersionTable`   此变量用于表示只读哈希表，该哈希表显示有关当前会话中运行的PowerShell版本的详细信息。
- `$PROFILE`  powershell配置文件的路径

## 内置环境变量

使用`Get-ChildItem Env:`列出所有环境变量和它们的值。

一些内置的环境变量：
- `$env：path`，常用，执行脚本和二进制命令时按顺序搜索的目录。
- `$env:temp`或`$env：tmp` 临时文件路径
- `$env:USERPROFILE`  指定当前用户的个人文件夹的路径

使用如下语法读取或修改：

```sh
$env:变量名
```

这里的env和变量名都不区分大小写。

## 读取和修改PATH环境变量

`$env:PATH` 环境变量包含操作系统搜索可执行文件的文件夹位置列表。 在 Windows 上，文件夹位置列表由分号 (;) 字符分隔。

修改path环境变量：

```sh
$env:path = "$env:path;D:\Program Files\MyApp\bin"
```

或者使用简洁语法：

```sh
$env:path += ";D:\Program Files\MyApp\bin"
```

这里有两点需要注意：
1. 应该用管理员权限打开powershell
2. 修改完要注销或重启才能生效

## 新增和修改自定义环境变量

首先获取powershell的配置文件路径，没有就新建一个：

```sh
echo $profile
```

在此文件中加入变量的声明，注销或重启即可。

## 普通变量和环境变量的区别

普通变量和自定义环境变量本质上都是变量，声明和使用的方式一模一样，这两者的区别主要在于生命周期的不同。
- 普通变量是临时的，只在此次使用shell时有用，下次使用shell（注销或重启后）就不存在了。
- 环境变量包括内置的和自定义的，是永久可以使用的。

是否要将普通变量永久保存，也就是变为环境变量，取决于自己的实际需求。一般而言，需要重读多次使用的变量应该提升为环境变量，少数几次使用的则使用普通变量即可。

从存储库（`https://www.powershellgallery.com/`）下载一个或多个模块，并将其安装到本地PowerShell中。

例如下载PSReadline模块：

```sh
Install-Module -Name PSReadLine
```

## PSReadLine

PSReadLine模块为powershell提供了历史记录的预测支持。使用方向键右，可以自动使用当前预测的历史命令。例如：

![psreadline历史预测](https://img-blog.csdnimg.cn/20200711171032190.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpZ21hcmlzaW5n,size_16,color_FFFFFF,t_70)

## 以管理员身份运行

在powershell点击右键，单击“以管理员身份打开”

## 获取帮助

最好的学习方式是查看帮助，使用get-help命令：

```sh
get-help  命令名称
```

## 不区分大小写

与bash shell不同，powershell命令名称和参数名称不区分大小写。

## 提示符约定

为方便讲解，约定使用右尖括号（>）作为命令输入提示符，该符号不需要输入，只需要复制该符号后面的命令导powershell命令行即可。

## 注释

与bash shell一样，powershell使用井号（#）注释，该符号后面的内容不会被执行。

## 配置文件

配置文件的路径保存在内置变量`$profile`中，默认为位置： `$HOME\Documents\WindowsPowerShell\Profile.ps1` ，没有就新建一个，这里可以写入启动powershell后预先执行的命令。

基于安全的考虑，PowerShell默认是不能执行脚本的，需要更改执行策略。

先以管理员方式运行PowerShell，输入如下命令行得到当前执行策略：

```sh
get-ExecutionPolicy
```

输出为：

```sh
Restricted 
```

这表示执行脚本是受限的。

现在，使用如下命令修改执行策略:

```sh
set-executtionpolicy remotesigned
```

此时终端会要求你输入一个字母确认你是否要更改执行策略，这里输入`Y`即可。

再次运行如下命令，可以发现执行策略依据更改完成：

```sh
get-executtionpolicy
输出：RemoteSigned
```

在管理员权限下，PowerShell可以设置的执行策略有如下四种：
* restriced ： 受限，默认策略，不能执行脚本
* allsigned  ：只允许执行加密签名的脚本
* **remotesigned**：推荐，远程签名，允许执行自己编写的或下载的脚本
* unrestricted ： 允许任何脚本

select-string的功能类似于Linux的grep，用于在一个或多个文件中根据字符串查找匹配的行，并将改行的内容输出。

select-string的别名是sls。

- -Pattern 要查找的字符串，支持正则表达式。
- -CaseSensitives，如果加上则区分大小写。默认不区分大小写。
- -Path ：要查找的文件路径。

例如，在文件file.txt中查找包含ex（不区分大小写）的行：

```sh
sls -Pattern ex file.txt
```

select-string还支持管道。例如：

```sh
cat file.txt | sls ex
```


# sed命令

## sed命令语法

sed命令语法如下：

```sh
sed   选项   '命令部分'  文件
```

常见的选项如下：

* -n : 只打印被sed处理的行，默认是处理后的结果，经常与p搭配。

* -i : 默认情况下，会将待处理的文件内容拷贝到缓存中，处理之后输出到屏幕上，此时无论是删除，还是查找替换，都对源文件的内容没有任何影响。-i 选项直接修改原文件，而不在屏幕上输出。这种无损操作可以提前测试查找替换的结果，避免产生不可逆的修改。
sed最重要的是命令部分，命令部分又分为三个小部分：找到匹配的行、具体操作、可选的新增内容 

## 找到匹配的行

要确定哪些行被找到，有两种方式:

* 直接指定行，使用n1,n2表示第n1行到第n2行，不指定就是所有行被找到。

* 基于内容的查找，使用 /text/ 去查找text文本，支持正则表达式。通过这两种方式找到的行，进入下一步等待操作。

上一部通过直接指定或查找的方式找到了待操作的行，这一步就要指定基于行的具体的操作，具体操作分为两大类：基于整行的操作、基于字符的操作。

基于整行的操作又分为打印、删除、追加、替换、插入。

## 基于整行的打印

打印操作符是p，为了只打印需要的行，需要加上-n选项，否则会重复输出需要的行。

例如，打印前5行：

```sh
sed  -n 1,5p file.txt 
```

打印所有行：

```sh
sed -n p file  # 打印所有行
```

打印包含“word”文本的行：

```sh
sed -n /word/p  
```

打印前5行中包含“word”文本的行：

```sh
sed -n 1,5/word/p file.txt  
```

## 基于整行的删除

删除的操作符是d，在匹配到行之后，使用如下操作删除：

```sh
sed  1,3d  file.txt    
```

这行命令删除了前3行。

或者使用：

```sh
sed  /text/d  file.txt
```

这行命令将包含有“text”文本的行删除。

## 基于整行的追加、插入和替换

基于整行的追加、插入、替换的指令分别是a、i、c。例如：

要在第一行前面加入新文本内容，运行：

```sh
sed  "1i new text" file.txt
```

要在最后一行后面追加新内容，运行：

```sh
sed  "$a  new text" file.txt
```

这里$表示最后一行。

而要将第3行整行换成新内容，运行：

```sh
sed  "3c   new text "  file.txt
```

注意，由于后面的文本中出现了空格，故而上面这三个操作都是需要添加引号的，否则会被识别为命令行参数。

前面提到的替换操作是整行替换，sed还可以基于字符替换。

## 基于字符的查找替换

基于字符的查找替换是sed最常见的操作。在找到行之后，使用`s/旧文本/新文本/g`  以执行基于字符的替换操作。这里的`g`表示行内全局替换，否则只替换找到的每行的第一个。例如：

```sh
sed s/old/new/g file.txt  
```
上面这行命令将所有old文本替换成new文本。

```sh
sed 1,5s/old/new/gi file.txt 
```

上面这行命令将前5行的old文本替换成new文本，且忽略大小写。

值得提醒的的是，一般情况下使用 `s/旧文本/新文本/g` 进行替换，但这里的` / `可以换成其它字符，如果遇到文本中本来就包含` / `的情况，可以使用转义符号`\`转义，不过更加建议更换成其它字符，比如` * `。

例如，更换apt包管理器的软件仓库地址，以提升下载速度，而仓库地址包含`/`字符，此时，就可以使用：

```sh
sed  -i  s*http://archive.ubuntu.com/ubuntu/*https://mirrors.aliyun.com/ubuntu/*g   /etc/apt/sources.list
```

这里我们使用了`*`进行分隔。注意加`-i` 将修改应用到源文件。

## sed配合管道、重定向

sed可以配合管道使用：

```sh
nl file.txt | sed -n 1,5p
```

上面这行命令先显示文件的行号，然后打印前5行。

重定向的意思是把本来要输出到屏幕上的内容复制到新文件中，例如：

```sh
sed -n 1,5p file.txt > new.txt
```

上面这行命令将文件的前5行复制到new.txt中。

再比如：

```sh
sed -n /文本/p 文件 > new.txt
```

这行命令将文件中包含word文本的那些行复制到new.txt中。


# TCP IP

 - [OSI七层模型](#osi七层模型)
  - [TCP/IP](#tcpip)
  - [传输层：TCP与UDP](#传输层tcp与udp)
    - [端口](#端口)
    - [TCP 三次握手](#tcp-三次握手)
    - [TCP的四次挥手](#tcp的四次挥手)
  - [HTTP协议](#http协议)
    - [请求报文与响应报文](#请求报文与响应报文)
    - [简介](#简介)
    - [报文结构](#报文结构)
    - [状态码](#状态码)
    - [URL的结构](#url的结构)
    - [方案](#方案)
    - [查询](#查询)
    - [Cookie](#cookie)
    - [BASIC认证](#basic认证)
    - [digest认证](#digest认证)
    - [https/3](#https3)
    - [方法](#方法)
    - [响应码](#响应码)
  - [DHCP](#dhcp)
  - [DNS](#dns)
  - [远程文件服务器：ftp](#远程文件服务器ftp)
    - [客户端连接](#客户端连接)
    - [服务器配置](#服务器配置)
  - [网络文件系统：NFS](#网络文件系统nfs)
  - [网络层（IP层）](#网络层ip层)
    - [五类IP地址](#五类ip地址)
    - [路由](#路由)
    - [NAT（网络地址转换）](#nat网络地址转换)
  - [远程连接服务器：SSH](#远程连接服务器ssh)
  - [OAuth](#oauth)
    - [Github 授权](#github-授权)
    - [Access Token](#access-token)
    - [微信授权](#微信授权)
    - [Github授权登陆流程](#github授权登陆流程)
    - [微信授权登陆流程](#微信授权登陆流程)
  - [加密协议](#加密协议)
    - [加密算法的分类](#加密算法的分类)
    - [非对称秘钥的文件位置和内容](#非对称秘钥的文件位置和内容)
    - [非对称加密传递信息](#非对称加密传递信息)
    - [数字证书和数字签名](#数字证书和数字签名)
    - [ssh](#ssh)
    - [ssh-keygen](#ssh-keygen)
    - [ssh-copy-id](#ssh-copy-id)

## OSI七层模型

将网络分为几个层次，每个层次都有特定独立的功能，每层独立实现、互不干扰。这就是TCP/IP的基础——OSI七层网络协议。

- 第一层 物理层  

由于网络传输介质只能传送0与1这种比特位，因此物理层必须定义所使用的传输设备的电压与信号灯，同时还必须了解数据帧转换成比特流的编码方式，最后连接实际传输介质并发送/接收比特信号。

- 第二层 数据链路层 

这一层是比较特殊的一个层，因为其下层都是实体的定义，而其上层则是软件封装的定义。因此第二层又分为两个子层进行数据的转换操作。在偏硬件部分，主要负责的MAC（Media Access Control），我们称这个数据包裹为MAC数据帧（frame），MAC是网络接口设备所能处理的主要数据包裹，这也是最终被物理层编码成比特流的数据。MAC必须要经过通信协议来取得网络介质的使用权，目前最常使用的则是IEEE 802.3的以太网络协议。 至于偏向软件的部分则是由逻辑链路层（Logical Link Control，LLC）所控制，主要在多任务处理来自上层的数据包数据（packet）并转成MAC的格式，负责的工作包括信息交换、流量控制、失误问题的处理等。

- 第三层 网络层

这一层就是IP（Internet Protocol）层，即路由协议层。同时也定义出计算机之间的连接建立、终止与维持、数据包的传输路径选择等。

- 第四层 传输层

这一个分层定义了发送端与接收端的连接技术（如TCP、UDP技术），同时包括该技术的数据包格式、数据包的发送、流程的控制、传输过程的侦测检查与重新传送等，以确保各个资料数据包可以正确无误的到底目的端。

- 第五层 会话层  

在这个层次当中主要定义了两个地址之间的连接信道的连接与中断，此外，也可建立应用程序之间的会话、提供其他加强型服务如网络管理、建立与断开、会话控制等。如果说传输层是在判断数据包是否可以正确的到达目标，那么会话层则是在确定网络服务建立连接的确认。

- 第六层 表示层  

我们通过应用程序生成出来的数据格式不一定符合网络传输的标准编码格式，所以，在这个层次当中，主要的操作是：将来自本地端应用程序的数据格式转换（或者重新编码）为网络的标准格式，然后再交给下面的传输层等的协议来进行处理。所以，在这个层次上面主要定义的是网络服务（或程序）之间的数据格式的转换，包括数据的加解密也是在这个层次上处理。

- 第七层 应用层 

应用层本身不属于应用程序所有，而是在定义应用程序如何进入该层的沟通接口，以将数据接收或发送给应用程序，并最终展示给用户。

## TCP/IP

不过，事实上，OSI七层协议只是一个参考的模型，目前并没有什么知名的操作系统严格按照OSI七层协议实现。不过，OSI七层模型可以认为是TCP/IP的简化模型，将原来的七层简化为四层，实际的互联网程序代码都是基于TCP/IP模型。OSI七层协议与TCP/IP协议的对应关系如下：
- 将最底下两层（物理层和链路层）简化为一层——网络接口层
- OSI的网络层还是对应TCP/IP的网络层
- OSI的传输层还是对应TCP/IP的传输层
- 将最上三层（会话层、表示层、应用层）简化为一层——应用层

TCP/IP每层的相关通信协议与标准如下：
- 网络接口层：WAN、LAN、ARP
- 网络层：IP、ICMP
- 传输层：TCP、UDP
- 应用层：HTTP(s)、FTP、SMTP、POP3、NFS、SSH

拿一个访问网页的例子来演示TCP/IP协议的工作：
- 应用程序阶段：打开浏览器，在地址栏输入网址，按下回车。此时网址信息与相关数据会被浏览器打包成一个数据包，向下传给应用层。
- 应用层：由应用层提供的HTTP通信协议，将来自浏览器的数据封装起来，并给予一个应用层报头，再向传输层丢去。
- 传输层：由于HTTP为可靠连接，因此将该数据包丢入TCP封装内，并给予一个TCP封装的报头，向网络层丢去。
- 网络层：将TCP数据封装到IP数据包内，再给予一个IP报头（主要就是来源于目标的IP），向网络接口层丢去。
- 网络接口层：如果使用以太网络事，此时IP会依据CSMA/CD的标准，封装到MAC数据帧中，并给予MAC帧头，再转成比特流后，利用传输介质发送到远程主机上。
- 等到目的主机收到数据包后，再以相反的方向拆解开头，每次交给对应的层次进行分析，最后WWW服务器软件获知你想要的数据，再取得正确的资料后，又遵循上述流程，一层一层的封装起来，最后传送到你的浏览器上。

## 传输层：TCP与UDP

### 端口

我们都知道IP数据包的传送的起点和终点是IP地址，那么达到后具体应该连接到哪里去呢？一台主机可以部署多个服务，那么是连接到WWW服务器，还是FTP服务呢？这就需要通过端口区分不同的服务，一个特定的服务由两部分组成：

```
地址:端口
```

地址可以是IP地址，也可以是主机名称。

端口的取值范围为0-65535，不过，0-1023已经分给了常用的应用程序，因此一般的取值范围是1024~65535。

常见的服务与端口的对应如下：

服务 | 端口
--- | ---
20| FTP
22 |SSH  安全远程连接服务
25 | SMTP  简单邮件传递协议
80|  HTTP，超文本传输协议服务
110  | POP3  邮件接收协议
443 | HTTPS  安全加密的HTTP服务
3306  |MySQL 默认端口号


### TCP 三次握手

![TCP的三次握手](https://pics4.baidu.com/feed/1ad5ad6eddc451da91dfe64756fd5b6bd016327a.jpeg@f_auto?token=6a788b3425a128f386466dad924ccf99)

在TCP的连接模式中，在建立连接之前都必须通过三个确认的动作，所以这种连接方式也被称为三次握手，大致分为四个阶段。

- 第一阶段，数据包发起   当可以的想要对服务器端连接时，就必须要送出一个要求连接的数据包，此时客户端必须随机取用一个大于1024的空闲的端口来作为程序沟通的接口。然后再TCP的报头当中，必须要带有SYN的主动连接（SYN=1），并且记下发出连接数据包给服务器端的序号（Sequence number = 10001）。

- 第二阶段，数据包接收与确认数据包发送  当服务器接收到这个数据包，并且确定要接收这个数据包后，就会开始制作一个同时带有SYN=1，ACK=1 的数据包，其中那个Acknowledge的号码是要给Client端确认用的，所以该数字会比A步骤里面的Sequence号码多一号（ack=10001+1=10002），那服务器也必须确认客户端确实可以接收我们的数据包才行，所以也会发送出一个Sequence（seq=20001）给客户端，并且开始等待客户端与服务器端的回应。

- 第三阶段，回送确认数据包  当客户端收到来自服务器端的ACK数字（10002）后，就能确认之前那个请求连接的数据包被正确接收了，接下来如果客户端也同意与服务器建立连接时，就会再次发送一个确认数据包（ACK=1）给服务器，即Acknowledge = 20001+1 = 20002.

- 第四阶段  取得最后确认  若一切都顺利，在服务器端收到带有ACK=1 且ack = 20002序号的数据包后，就能够建立起这次的连接了。

举个通俗得了例子，好比两个人A和B在谈论事情之前打招呼：
- A说： B你听得到吗？
- B说：我听得到，A你听得到吗？
- A说：我也听得到

可能有的人会有疑问，为什么B要再次询问一遍呢？B收到消息后直接建立连接不行吗？假设A说中文但听不懂英文，B说英文也可以听懂中文，这时候直接建立后A是听不懂的，必须要保证双方都能听懂对方说的话才行。

那为什么不来回更多次呢？理论上也是可以的，不过，为了节省资源，只需要双方都说一次，然后确认对方听懂了就够了。

总之，三次握手就是要确认两件事：
- 服务端能有效识别客户端的信息
- 客户端能有效识别服务端的信息

### TCP的四次挥手

![TCP的四次挥手](https://pics1.baidu.com/feed/c8177f3e6709c93d3b2db2957e3df1d1d0005486.jpeg@f_auto?token=d1003b5bd35811075409c512e0503094)


TCP的四次挥手是为了结束已建立的连接，确保双方都能正确地关闭连接并释放资源。下面是四次挥手的过程：

- 第一次挥手：客户端发送一个带有FIN（结束）标志的数据包，表示自己已经没有数据要发送了，请求关闭连接。

- 第二次挥手：服务器接收到客户端的结束请求后，会发送一个带有ACK（确认）标志的数据包作为响应，表示已收到客户端的结束请求。

- 第三次挥手：服务器发送一个带有FIN标志的数据包，表示自己也没有数据要发送了，请求关闭连接。

- 第四次挥手：客户端接收到服务器的结束请求后，会发送一个带有ACK标志的数据包作为确认，表示已收到服务器的结束请求。

在关闭连接时，需要确保双方都完成了数据的传输和接收，以防止数据丢失或错误。如果只有三次挥手，可能会导致一些问题。

假设只有三次挥手，当客户端发送结束请求后，服务器收到后会发送确认，表示已收到客户端的结束请求。但是在此过程中，服务器可能还有未发送完的数据，如果直接关闭连接，那么这些数据就会丢失。因此，引入第三次挥手，服务器在发送结束请求前，先发送所有未发送完的数据，并等待客户端的确认。客户端接收到服务器的结束请求后，会确认并处理完未接收的数据，然后发送确认，表示自己已准备好关闭连接。

通过四次挥手，可以确保双方都能正确地结束连接，并处理未发送和未接收的数据，保证数据的完整性和可靠性。因此，关闭连接需要四次挥手。


##  HTTP协议

###  请求报文与响应报文


客户端发送请求报文，服务器返回响应报文，报文有一定的格式约定，将格式约定好以便于发送和解析，这既是协议。

要查看报文实例，最好的方法是使用浏览器。

使用Edge浏览器，打开百度首页，按F12进入开发者工具，切换到网络选项卡，这时候应该有很多网络传输记录。

在右边的表头选项卡，我们能看到“常规”、“响应标头”、“请求标头”。这就是报文的内容。

我们解释几个典型的参数。

* 请求URL：这就是我们常说的链接，只有通过链接才能拿到资源如HTML页面、文件、图片、视频。
* 请求方法：一般为GET，表示向服务器拿资源。开发中会用到POST表示携带正文向服务器发送。
* 状态代码：表示是成功还是错误，如果是200 OK表示成功返回了正确的资源。如果是4或5开头的代码，表示有错误。
* 远程地址：服务器的IP地址，这个地址是DNS系统通过解析之后得到的机器能够理解的地址。
* 请求标头：请求报文的头部，是对请求报文的概括和描述，如协议版本、能接受的编码等。
* 响应标头：响应报文的头部，是对响应报文的概括和描述，如字节大小等。


### 简介


一般而言，网络传输的两端分为客户端和服务器。请求数据的叫做客户端，浏览器就是典型的客户端。接收请求，处理请求，将数据返回的机器叫做服务器。

客户端请求资源，就要用到资源定位符URI，URI是一个明确的地址，通过这个地址就能去到响应的服务器请求资源。

至于这中间是怎么从我们面前的浏览器到达世界另一个地方的服务器的过程比较复杂，包括数据的编码、打包、IP地址查询、路由、DNS轮询、握手、解包等，我们只需要知道有网络基础设施无时无刻都在为我们服务即可。

例如，我们访问百度。在浏览器地址栏输入`https://www.baidu.com`，这就是全球唯一的地址，通过这个地址就可以到达百度的服务器，然后服务器立即响应将HTML页面发回本地，我们就看到了百度的首页。



### 报文结构

请求和响应信息统称报文，结构：

```
首部
<空行>
body
```


首部每一行是一个键值对。

### 状态码

- 1字头 正在处理的信息
- 2字头 成功时的响应，常用的是200 OK
- 3字头 服务器给客户端的命令，例如重东西或缓存
- 4字头 当客户端发送的请求中存在异常内容时发送的响应码
- 5字头 当服务器内部发生错误时发送给客户端的状态码


### URL的结构

常见URL路径的结构：

```
协议://主机名/路径
```

而完整的URL路径的结构：

```
协议:// 用户:密码@主机名:端口/路径?查询#片段
```

###  方案

主要包括：
- http
- https
- mailto
- file
- ftp


### 查询

用户要搜索的关键词，语法如下：

```
key1=value1&key2=value2
```


### Cookie

Cookie是将网站信息保存在浏览器的一种结构，由服务器指示客户端（浏览器）保存数据。

例如服务器发送的报文：

```
Set-Cookie: key1=value1
Set-Cookie: key2=value2
```


客户端就会存储起来，下次请求时可以带上：

```
Cookie: key1=value1
Cookie: key2=value2
```


###  BASIC认证

如今大多数服务器需要登录，但通常的方式是只需要第一次登录，然后在一定的时间内免登陆。
basic认证是最简单的认证方式，通过base64编码，因为base64可逆，所以服务器可以还原出来原来的用户名和密码。将还原出来的用户名和密码与数据库中进行对比。如下是对用户名和密码进行编码后的示例：


```
base64(用户名+":"+密码)
```


示例：
```
base64('zhangsan'+':'+'123456')  // emhhbmdzYW46MTIzNDU2
authorization: "Basic emhhbmdzYW46MTIzNDU2"
```

### digest认证

使用哈希函数。

### https/3

udp和tcp的区别：
- 可靠的，需要进行三次我手
- 不可靠的，只负责发出去，不管有没有收到。

http/2在与http同一层的tcp套接字上进行了实现，但google为了进一步提高通信速度，在udp套接字上提供了quic协议。





### 方法

HTTP协议有两种最常用的方法：

- get	 通过url和query向服务器获取数据
- post	 	在body中添加数据发给服务器，请求数据
- put 新增文件
- delete 删除文件

### 响应码

HTTP有4种常用的响应码，如下：

- 200	|	客户端成功请求，服务器成功响应
- 3xx	|	服务器指示客户端需要完成的工作，例如重定向
- 404	|	客户端出了错误，例如请求不存在的文件
- 5xx	|	服  务器出了错误


## DHCP

DHCP，Dynamic Host Configuration Protocol ，动态主机配置协议。DHCP服务器的主要工作，就是自动将正确的网络参数分配给网络中的每台主机，让客户端主机可以在联网的时候立即自动配置好网络的参数值，这些参数包括：IP、子网掩码、网段、网关、DNS地址等。现实生活中，我们的笔记本连上网络后，是不是很少去手动设置这些参数，而是直接就可以上网了，这就是因为DHCP服务器已经为我们配置好了。

DHCP为客户端提供的信息至少包括以下内容：
- IP地址
- 子网掩码
- 租赁时间：客户端并不是一直拥有该IP地址，当时间到期后必须再次请求。默认情况下，DHCP服务器会记住客户端并分配相同的地址。
- 域名服务器（DNS）地址：通常DHCP服务器会给一到三个DNS地址供客户端使用。
- 默认网关。为了让一个网络请求离开本地网络，必须知道网络上的哪个节点提供了到本地的网络之外地址的路由，这个节点就是网关。

## DNS

实际上，要使一台主机连接到另一台主机的服务，必须知道IP地址和端口。端口的问题好说，如果是用浏览器上网，那么基本就是80端口，那么IP地址呢？为什么我们并不知道百度的IP地址却可以访问百度？这就用到了一种网络基础设施服务——DNS。

DNS，Domain Name System，域名系统，通过将由英文字母和数字组成的主机名转化成IP地址，使得数据包可以到达目的地。这个DNS也是网络中的一台主机，只是专门为我们提供DNS服务，DNS的地址是由DHCP服务器配置的。

例如，访问baidu.com，我们电脑的缓存中没有查到baidu.com对应的IP地址，此时就将baidu.com发送给DNS主机，DNS主机分析该路径的组成，再通过与全球其它的DNS服务器递归的查找和询问，最终得到了baidu.com的IP地址是xx.xx.xx.xx，再返回给我们的电脑，电脑拿到这个确定的IP地址后，就能够到达百度的服务器了。

这种询问过程的举例如下，例如访问baidu.com：
- 我们的电脑将baidu.com发送给DNS服务器8.8.8.8
- DNS服务器先去询问全球域名根服务器（/），得到管理com的服务器的IP地址
- DNS服务器再去询问管理com的服务器，得到baidu.com的服务器的IP地址
- DNS拿到具体的IP地址后，返回给我们的电脑。

要知道具体是哪个IP地址，可以使用ping命令：

```
$ ping baidu.com

Pinging baidu.com [39.156.66.10] with 32 bytes of data:
Reply from 39.156.66.10: bytes=32 time=25ms TTL=48
Reply from 39.156.66.10: bytes=32 time=24ms TTL=48
Reply from 39.156.66.10: bytes=32 time=24ms TTL=48
Reply from 39.156.66.10: bytes=32 time=27ms TTL=48

Ping statistics for 39.156.66.10:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 24ms, Maximum = 27ms, Average = 25ms
```

也可以使用nslookup命令：

```sh
$ nslookup baidu.com
Server:  public1.114dns.com
Address:  114.114.114.114

Non-authoritative answer:
Name:    baidu.com
Addresses:  110.242.68.66
          39.156.66.10
```


##  远程文件服务器：ftp


### 客户端连接

一般要提供如下参数：
- 主机
- 端口，默认21
- 用户名和密码，如果允许匿名，则用户名为anonymous

有三种方式连接到FTP服务器：
- 命令行
- 客户端，例如FIlezilla
- 浏览器

如果要使用浏览器连接ftp服务器，则在地址栏输入：

```sh
ftp://用户名:密码@主机地址
```


### 服务器配置

如果要自己搭建ftp服务器，则可以使用vsftpd这个软件。


## 网络文件系统：NFS

NFS，Network File System，网络文件系统，作用是让不同的机器、不同的操作系统可以彼此共享文件。最主要的设置就是文件的权限。设置NFS服务器主要用到两个软件：rpcbind、nfs。

客户端如果要连接NFS服务器，只需要将NFS资源挂载到相关目录之下即可。


## 网络层（IP层）

目前IP协议有两种版本：
- IPv4（因特网协议第四版）：由于地址仅有32位，预计2020年左右分配完毕。
- IPv6（因特网协议第六版）：为了应对IPV4地址枯竭的问题，诞生了IPv6。ipv6的地址可以达到128位，这样的IP数据几乎是用不完的。不过，由于IPv6与IPv4协议互不兼容，需要从上而上大幅更换软硬件设施，因此推广问题值得关注。

IP的组成是32位的数据，即由32个0与1组成的一连串数字。为了方便读写，将32位分为四小段，每段8位，又将每段换算为十进制，并且每段以小数点隔开，这就形成了我们日常见到的IP地址。例如：

```
00000000.00000000.00000000.00000000   ==>  0.0.0.0
11111111.11111111.11111111.11111111   ==>  255.255.255.255
```

这串数字中，又分为网络号码和主机号码。在同一个物理网段内，主机的IP具有相同的网络号码，并且具有唯一的主机号码。同时，同一个物理网段内，可以根据不同的IP设置，而设置成多个“IP网络”，也叫“子网段”。

另外，主机号码不能全部为0或1，全部为0表示整个网段的地址，全部为1表示广播地址。

###  五类IP地址

为了便于管理和方法，IP地址被分为了五类：

类别 | 二进制网络号码开头 | 号段
---|:---:|---
A类 | 0 | 0.xx.xx.xx ~ 127.xx.xx.xx
B类  | 10  |  128.xx.xx.xx ~ 191.xx.xx.xx
C类  | 110 |  192.xx.xx.xx ~ 223.xx.xx.xx
D类（组播使用）  | 1110 |  224.xx.xx.xx  ~ 239.xx.xx.xx   
E类（保留网段） | 1111  |   240.xx.xx.xx ~ 255.xx.xx.xx

能够用来一般系统上面的，只有A类、B类、C类地址，而普通人大概率只能申请到C类地址。

但是，上面的A、B、C类地址显示是不够用的，如果一个企业有10台主机，就要购买10个IP吗？为了解决这个问题，又提出了公有地址和私有地址。一个企业持有一个公有地址，下面可以规划若干了私有地址，这就解决了企业内部的IP地址问题。私有地址包括：

- A类私有地址： 10.0.0.0  ~  10.255.255.255
- B类私有地址 ： 172.16.0.0   ~  172.31.255.255
- C类私有地址 ： 192.168.0.0  ~  192.168.255.255

### 路由

同一个网络段的主机可以直接通信，那么不同网络段呢？每一台主机都有一个路由表，每台主机传递数据时依据这个路由表决定“下一跳”。

### NAT（网络地址转换）

如果私有IP要访问公网，需要通过NAT（网络地址转换）。一个公网IP加一个端口号映射到私有地址，这样私有地址的主机就可以访问公网了。

我们的手机可以访问公网，是因为连接到WiFi后，就会得到一个私有地址，持有公网IP的网络地址转换访问的公网。

## 远程连接服务器：SSH

远程连接服务器通过文字或图形的方式来远程登录系统，让你在远程的终端面前登录Linux主机以取得可操作得Shell，而登录后的感觉上就像坐在系统前面一样。

可以使用OpenSSH软件设置SSH服务。

客户端连接的语法如下：

```sh
ssh [-p 端口号] [账号@]主机地址 [命令]
```

端口号一般默认为22，如果服务器设置了另外一个端口，使用新端口即可。

##  OAuth

OAuth 是 Opne Authorizations的简写。

openid是微信用户在公众号appid下的唯一用户标识（appid不同，则获取到的openid就不同）

![OAuth | 1200](https://bkimg.cdn.bcebos.com/pic/86d6277f9e2f0708ca1c2b2ceb24b899a901f285?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto)

- AppID 应用ID
- AppSecret 应用的密钥
- Code 临时票据 
- 返回access_token


### Github 授权


打开https://github.com/settings/developers 注册一个OAuth应用。需要填写如下信息：

- Application Name：为应用取个名字。
- homepageURL：主页地址
- Authorization Callback URL为回调地址，当用户同意授权后，会回调该地址，并将授权码拼接到地址后面。

注册完毕后会得到Client ID和Client Secret。



获取授权码请求路径 ： 

```sh
GET  https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirect_uri}
```

替换成应用的clientId和redirect_url。访问到授权服务器会重定向到redirect_url，并且在地址后面拼接授权码。

```sh
POST  https://github.com/login/oauth/access_token
```

设置Accept: application/json。

带上body：

```json
{
	code: 授权码
	client_id: your_client_id,
	client_secret: your_secret_id,
}
```

得到Access Token，通过此令牌得到用户的信息：

```
Authorization: Bearer OAUTH-TOKEN
GET https://api.github.com/user
```

### Access Token

最终的目的是获得一个Access Token，Access Token 唯一标识用户。

使用Refresh Token 获得一个新的Access Token。


三个地址：

- 请求授权地址，例如 `授权服务器主机名/auth/login` 参数 client_id  redict_id，请求后会打开授权页面
- 点击后，授权服务器返回的地址，即回调地址（携带Code）
- 请求回调地址，会得到Code
- 请求token地址，例如 `授权服务器主机名/auto/access_token` 参数Code + client_id + client_secret 
- 获取Access_token
- 通过Access Token获取用户的OpenID

### 微信授权

参考 ： https://blog.csdn.net/qq_36389060/article/details/124047449

获取 access_token 后可以进行哪些操作？

开发者可通过 OpenID 来获取用户基本信息

### Github授权登陆流程

步骤| 请求方式 | 请求URL | 请求参数|返回内容
---| ---| ---|---|---
1|GET|`https://github.com/login/oauth/authorize`|client-id| redict-url|授权登陆GitHub的页面
2|GET|`redict_url`|无|request-code
3|POST|`https://github.com/login/oauth/access_token`|client-id、client-secret、request-code|access-token
4|GET|`https://api.github.com/user`|请求头中添加access-token|github-id、github-url等GitHub用户信息

### 微信授权登陆流程

打开微信开发平台，地址：

步骤| 请求方式 | 请求URL | 请求参数|返回内容
---| ---| ---|---|---
1 | GET | `https://open.weixin.qq.com/connect/qrconnect`       | client-id                 | redict-url                 | 授权登陆微信的页面 |
2   | GET  | `redict_url`                                         | 无                         | request-code               |           |
 3   | POST | `https://api.weixin.qq.com/sns/oauth2/access_token`  | appid、secret、request-code | access-token、refresh-token |           |
4   | GET  | `https://api.weixin.qq.com/sns/userinfo`             | 请求头中添加access-token        | 微信用户个人信息                   |           |
5   | GET  | `https://api.weixin.qq.com/sns/oauth2/refresh_token` | appid、refresh-token       | 新的access-token             |           |

##  加密协议

### 加密算法的分类

- 对称加密算法：在加密和解密时使用同一个密钥，这种算法不安全，几乎不再使用了。
- 非对称加密算法：通过密钥算法同时一对密钥：公钥和私钥，分别用于加密和解密。目前在各大安全协议中被使用。

非对称加密算法主要包括：
- rsa：主流，ssh-keygen工具默认
- dsa

### 非对称秘钥的文件位置和内容

公钥和私钥都是一个文本文件，里面存放着一定长度的字符串，默认放在~/.ssh目录。

公钥私钥是成对生成、成对存在的，其名字也应该对应。假设是用rsa算法生成的一对公私钥，那么其名称默认是：
- ~/.ssh/id_rsa  私钥
- ~/.ssh/id_rsa.pub   公钥

当然，名称也可以自己取一个有辨识度的名字。

公钥顾名思义就是可以公开的，A和B首先把自己的公钥发给对方，然后把对方的的公钥追加进自己的~/.ssh/known_hosts文件中，这个文件存放的是从网络上接收到的各个主机的公钥，每条信息占一行，每一行的格式如下：

```
主机  加密算法   公钥字符串==
```

### 非对称加密传递信息

假设网络上的两台主机A和B需要传递信息。那么A和B首先生成自己的私钥和公钥。

现在A要跟B发送信息，A就使用B的公钥将原始信息加密，得到一条加密信息通过网络发送给B，由于原始信息是通过B的公钥加密的，那么加密信息只能通过B的私钥解密，A的公钥私钥、B的公钥、其它网络上任何人的公钥私钥都无法解密这条加密信息。B收到后通过自己的私钥成功界面，就看到了原始信息。在这个过程中，哪怕加密信息被别人截取到了，也无法解密。

总而言之，公钥是用来加密的，私钥是用来解密的。要给对方发送消息，就用对方的公钥加密，等信息到达对方主机后，对方就可以解密了。

非对称秘钥有几个特点：
- 全局唯一：不同的人在同一时间，或同一个人在不同时间生成公钥私钥一定是不同的。也就是说，每个人的私钥一定是不同的，这确保了身份的准确性。
- 一对一：公钥和私钥是成对生成的，用公钥加密的信息只能通过对应的私钥解密，其它私钥绝对不可能解密。
- 确定性：用对应的私钥一定能解密，不用对应的私钥一定不能解密。

### 数字证书和数字签名

现在，又有一个问题，如何保证这条加密信息是由a发出来的？换句话说，C也可以生成一对公私钥，发送给B，然后对B说：“我是A，这是我的公钥”。

这种问题的漏洞在于，每个人都可以生成公钥私钥，但无法根据识别身份。这个时候，有一个第三方的权威机构，A向这家机构发动自己的公钥以及能够证明身份的信息（例如营业执照），完成自己在网络上的“实名认证”。这家权威机构在核实了A的信息和公钥之后，颁发给A一张数字证书，这家机构也叫数字证书颁发机构。有了权威机构的背书，任何人也无法冒充A了，因为现在人们获取公钥都直接从权威机构获取。

现在，A要向B发生信息，首先使用B的公钥加密原始信息，然后再用自己（A）的私钥再进行一道加密，这个过程就是数字签名。B收到加密信息后，首先向第三方权威机构获取A的公钥，然后使用A的公钥进行第一级解密，再用自己（B）的的私钥进行二级解密，就获取了原始信息。

数字证书颁发机构的作用就是完成公钥信息的“实名制”。

第一级加密和数字签名是对称的：
- 第一级加密使用对方的公钥加密
- 第二级数字签名使用自己的私钥加密
- 收到信息后，首先向数字证书颁发机构获取发送方的公钥，完成数字签名信息的解密
- 然后使用自己的私钥解密出原始信息。

总之，原始信息加密解密的方式是：接收的公钥加密，接收方的私钥解密。数字签名的加密解密方式是：发送方的私钥加密，发送到的公钥解密。

### ssh

ssh命令用于登录远程主机

要登录远程主机，使用如下命令：

```sh
ssh  远程用户名@远程主机
```
此时会提示你输入密码。

输入`exit`退出登录。

如果是第一次登录该远程主机，则默认会将远程主机的公钥追加到文件~/.ssh/known_hosts 的末尾。

### ssh-keygen

ssh-keygen可以用了生成一对公私钥，运行命令后，会提示你：
- 输入私钥的文件名，默认为id_rsa。如果已经有一个私钥而想增加一个，可以自定义一个名称。公钥的名称为`私钥名称.pub`。
- 公钥的密码，默认不设密码

### ssh-copy-id

使用ssh-copy-id将客户端的公钥复制到远程主机的同名家目录的.ssh目录的 `authorized_keys` 文件中。以后就可以直接连接而不用输入密码了。

```sh
ssh-copy-id -i 公钥路径 远程用户名@远程主机地址
```



