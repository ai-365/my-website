
<p id="top"></p>

<a style="position: fixed;top:100px;left:-20px;" href="#top">回到顶部</a>

- [fcitx5](#fcitx5)
- [flatpak](#flatpak)
- [gnome-tweaks](#gnome-tweaks)
- [中文输入法](#中文输入法)
- [文档资源管理器](#文档资源管理器)
- [virtualbox](#virtualbox)
- [U盘启动器](#u盘启动器)
- [openbox安装Manjaro-kde](#openbox安装manjaro-kde)
- [文档资源管理器](#文档资源管理器-1)
- [需要解决的问题](#需要解决的问题)
- [办公软件](#办公软件)
- [安装包](#安装包)
- [pacman](#pacman)
- [安装WPS](#安装wps)
- [输入法](#输入法)
- [oh-my-zsh](#oh-my-zsh)
- [安装oh-my-zsh](#安装oh-my-zsh)
- [内置变量和目录约定](#内置变量和目录约定)
- [使用ohmyzsh的方式管理插件](#使用ohmyzsh的方式管理插件)
- [使用zsh的方式管理插件](#使用zsh的方式管理插件)
- [主题](#主题)
- [自定义脚本](#自定义脚本)
- [incr\_实时补全](#incr_实时补全)
- [autojump](#autojump)
- [zsh-autosuggestions：历史补全](#zsh-autosuggestions历史补全)
- [语法检查zsh-syntax-highlighting](#语法检查zsh-syntax-highlighting)
- [zsh-history-substring-search 历史记录关键字匹配](#zsh-history-substring-search-历史记录关键字匹配)
- [Linux平台软件包管理方案](#linux平台软件包管理方案)
  - [原生包管理方案](#原生包管理方案)
  - [跨发行版包管理方案](#跨发行版包管理方案)
  - [最佳实践](#最佳实践)


## fcitx5


几个概念区分
- 输入法框架，即fcitx5程序，只装这个没有什么用
- 输入法引擎，只有安装中文输入法引擎才能输入中文，fcitx5-chinese-addons 包含了大量中文输入方式：拼音、双拼、五笔拼音、自然码、仓颉、冰蟾全息、二笔等
- 配置  fcitx5 的配置文件位于 ~/.config/fcitx5 ，你可以使用文本编辑器编辑配置文件，也可使用 GUI 配置。
- 词典可以帮助改善输入法的使用体验，https://github.com/wuhgit/CustomPinyinDictionary https://github.com/felixonmars/fcitx5-pinyin-zhwiki


请根据仓库的 README 文件将下载或下载解压后的 .dict 文件放置到 ~/.local/share/fcitx5/pinyin/dictionaries/ 文件夹中（如果文件夹不存在，你需要手动新建此文件夹），再重启一下 fcitx5 即可。


仓库内的主题数量有限，如果需要更多主题，可以去 GitHub （https://github.com/search?q=fcitx5+theme&type=Repositories） 发现更多主题。

找到你喜欢的主题并下载到本地后，将解压后的文件放到 ~/.local/share/fcitx5/themes/ 目录下。

然后从，配置 -> 配置附加组件 -> 经典用户界面 -> 主题 ，切换到你喜欢的主题即可。



新方法：

```
yay -S fcitx5 fcitx5-gtk fcitx5-qt fcitx5-configtool #  fcitx5 输入法框架包
yay -S fcitx5-chinese-addons #中文引擎
yay -S fcitx5-material-color #美化
yay -S fcitx5-pinyin-zhwiki # 词库
```

fcitx5-im包组下包含了我们需要的软件，直接安装fcitx5-im即可。

在/etc/environment文件中加入：

```sh
export XMODIFIERS=@im=fcitx
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
```

然后重新加载：

```
source /etc/environment
```

说明，/etc/environment 文件仅包含系统的默认环境变量，但是我们也可以把自定义的环境变量放入这里， /etc/environment里的环境变量不再针对哪一个用户，他对整个系统都生效无论是哪个用户。


对于Manjaro 用户，直接运行一行命令即可：
```
yay -S  manjaro-asian-input-support-fcitx5
```


## flatpak


安装flatpak：

```
sudo apt install flatpak // 用于 Ubuntu 和相关发行版
sudo dnf install flatpak // 适用于 Fedora 和基于 RPM 的发行版
```


设置flatpak仓库：

```
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

Linux 中大多数重要的基于 GUI 的软件商店都默认允许安装 Flatpak 应用程序。例如，如果你正在使用“软件(Software)”（适用于 Ubuntu 或 Fedora GNOME 版），你可以找到应用程序并点击安装按钮进行安装。

要搜索，使用search，例如：

```
flatpak search 关键字
```

但是，最简单的方法是复制 Flathub 商店 中的安装命令（可在每个应用程序信息页面的底部找到）并将其粘贴到终端。这是安装 Flatpak 应用程序的最快方法。例如：

```
flatpak install org.kde.kdenlive
```

一个简单的 flatpak 命令可以列出所有安装的应用程序。这包括系统应用和你的应用：

```
flatpak list
```

现在，你已经通过上述 Flatpak 命令安装了一个应用程序。但是，如果你想知道架构、版本、分支、许可证和其他信息，该怎么办呢？你可以使用 info 参数来实现。这个命令需要 Flatpak 的 “应用 ID”，你可以通过上面的 flatpak list 命令得到它。例如：
```
flatpak info org.kde.kdenlive
```

也可以先下载好安装包到本地再安装：

```
sudo flatpak install xxx.flatpak
```

flatpak 命令中的 histroy 开关会列出在你的系统中发生的活动，包括安装、更新、卸载和日期时间戳。如果你想调查一些事情，这非常有用。

```
flatpak history
```

flatpak 命令中的 update 参数可以更新所有的应用程序和运行时。当你运行这个命令时，它会显示可用的更新，并要求你确认是否继续。

```
flatpak update
```

要卸载单个应用程序，使用 uninstall 参数和应用程序 ID。例如：
```
flatpak uninstall org.kde.kdenlive
```


要卸载所有应用程序，使用 —all 开关：
```
flatpak uninstall --all
```

即使你卸载了 Flatpak 应用程序，一些应用程序的数据仍然保留在你的系统中，除非你在运行卸载程序时增加一些开关。在你可能想删除所有东西并重新开始使用 Flatpak 的情况下，这是必要的。

要卸载和删除特定应用程序的数据，请使用以下命令。例如：
```
flatpak uninstall -y --delete-data org.kde.kdenlive
```


- flatpak install flathub com.visualstudio.code
- flatpak install flathub com.microsoft.Edge
- flatpak install flathub org.flameshot.Flameshot
- flatpak install flathub md.obsidian.Obsidian
- flatpak install flathub com.obsproject.Studio
- flatpak install flathub org.shotcut.Shotcut

## gnome-tweaks
使用apt安装如下工具：

- gnome-tweaks 
- gnome-tweak-tool 
- gnome-shell-extensions

插件在
```
~/.local/share/gnome-shell/extensions/
```

- ~/.local/share/cursor
- ~/.local/share/themes/
- ~/.local/share/icons

打开对应扩展目录下的metadata.json文件，查看uuid。插件文件夹要和uuid相同。

https://extensions.gnome.org/extension/2015/no-title-bar-forked/ 去掉上部标题栏

4.7 Coverflow Alt-Tab
很棒的切换效果

https://extensions.gnome.org/extension/1036/extensions/ 管理插件

https://extensions.gnome.org/extension/543/backslide/ 壁纸幻灯片

Clipboard Indicator
剪贴板


Dash to Panel
Windows风格的任务栏

## 中文输入法
## 文档资源管理器

pacman/yay  apt  yum/dnf  fluthub

两种桌面环境：
- kde plasma：类似Windows
- gnome：类似MacOS
- xfce



manjaro可以自由选择桌面环境。地址：https://manjaro.org/download/

## virtualbox

去  https://www.virtualbox.org/  下载。

- 新建
- 设置内存大小，如果电脑内存为8G，则给2G
- 虚拟硬盘，vdi类型、固定大小、40G
- 设置-存储，，没有盘片，选择虚拟盘。

## U盘启动器

有了Ventoy你就无需反复地格式化U盘，你只需要把 ISO/WIM/IMG/VHD(x)/EFI 等类型的文件直接拷贝到U盘里面就可以启动了，无需其他操作。

你可以一次性拷贝很多个不同类型的镜像文件，Ventoy 会在启动时显示一个菜单来供你进行选择。

![https://www.ventoy.net/static/img/screen/screen_uefi.png](https://www.ventoy.net/static/img/screen/screen_uefi.png)

使用Ventory启动时，大部分时候需要关闭BIOS的“安全启动”选项。


## openbox安装Manjaro-kde

- 硬盘大小给80G，单文件虚拟硬盘
- 内存给2G
- 安装启动程序时选择中文、闭源驱动
- 启动程序中不分区
- 设置用户名密码电脑名称、为管理员设置相同的账户
- 





## 文档资源管理器

Dolphin 是 KDE 的文件管理器，您可以使用它来浏览硬盘、U 盘、SD 卡和其他存储设备中的内容，也可以方便快捷地创建、移动、删除文件和文件夹。

Dolphin 内建了许多有助于提高工作效率的功能。多标签页窗口、拆分视图等功能可以让您同时浏览多个文件夹，还可以在标签页和拆分的视图之间拖放、复制、移动文件。Dolphin 的右键菜单内建了许多快捷操作功能，例如压缩、分享、创建文件的副本等。您还可以将自定义操作添加到右键菜单。

Dolphin 还整合了命令行终端，可以在当前文件夹中执行命令行指令。您还可以通过插件来进一步增强 Dolphin 的功能，适应您的使用习惯。例如您可以使用 git 整合插件来与 git 源代码仓库进行交互。

## 需要解决的问题

- 中文输入法
- 
## 办公软件

- 浏览器：Firefox（自带）、Chrome、edge
- vscode
- 笔记：obsidian
- office：WPS、libreoffice
- 截屏
- PDF查看
- 图片查看
- 视频录制：OBS
- VPN：https://geph.io/zhs


## 安装包

- flatpak：使应用程序可以安装在任何一个发行版上，


## pacman


安装：pacman -S package_name

删除指定软件包，及其所有没有被其他已安装软件包使用的依赖关系：
pacman -Rs package_name

Pacman的配置文件位于/etc/pacman.conf。


yay是一个用Go语言写的一个AUR助手，有些时候官方仓库没有你想要的软件，就需要通过yay来安装，有了yay，以后就不用sudo pacman了


## 安装WPS

```
sudo pacman -Syu yaourt
yaourt -S wps-office
```

## 输入法


参考：https://zhuanlan.zhihu.com/p/114296129?from=androidqq&wd=&eqid=fc0dd00f0009c74800000002645ba393&utm_id=0


listary 替代
fences 替代
snipaste 替代
copyq 替代

## oh-my-zsh


## 安装oh-my-zsh

使用如下一行命令安装ohmyzsh。本质上是先获取安装脚本，然后执行脚本安装。
```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

针对国内用户，如果上述方式网络不佳，使用如下方式：

```
sh -c "$(curl -fsSL https://install.ohmyz.sh)
```

## 内置变量和目录约定

ohmyzsh分为内置插件、内置主题、第三方插件、第三方主题。

ohmyzsh的配置文件在~/.zshrc。安装目录在~/.oh-my-zsh。

为了便于重复使用，定义了如下两个环境变量，推荐先检查一下有没有定义：
- ZSH ： ~/.oh-my-zsh
- ZSH_CUSTOM： $ZSH/custom

几个位置：
- 内置插件：$ZSH/plugins
- 内置主题：$ZSH/themes
- 第三方插件：$ZSH_CUSTOM/plugins
- 第三方主题：$ZSH_CUSTOM/thems


![目录约定](https://pic2.zhimg.com/80/v2-f2459e9598a567df3fa36a8eff964265_1440w.webp)
## 使用ohmyzsh的方式管理插件

在\$ZSH/plugins或\$ZSH_CUSTOM/plugins下面，每个目录的名称就是插件的名称，下面有个同名的.plugin.zsh文件，因此目录结构是：

```
.../plugins/
     autojump/
        autojump.plugin.zsh
        ...

```

在~/.zshrc中，修改plugins数组：

```
plugins=(rails git ruby autojump)
```

内置插件名称见 https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins 

如果在\$ZSH/plugins和\$ZSH_CUSTOM/plugins存在同名插件，优先使用ZSH_CUSTOM。

## 使用zsh的方式管理插件

ohmyzsh不是必装的，有的插件并没有为ohmyzsh设计，也就是说没有`插件名.plugin.zsh`入口文件。此时，先下载插件到指定目录，然后在zshrc添加一行source插件的入口脚本，重启zsh即可。
## 主题

在themes目录下，每个主题以.zsh-theme为后缀，前面的就是主题的名字，如 agnoster.zsh-theme。

如下是自带主题列表：

![主题](https://pic3.zhimg.com/80/v2-8581fd2ee5c54625ca112f0377f382f2_1440w.webp)

```
$ZSH_CUSTOM
└── themes
    └── my_awesome_theme.zsh-theme
```

![anoster](https://user-images.githubusercontent.com/49100982/108254745-777cb400-716c-11eb-800a-a8cfa612253f.jpg)

然后在~/.zshrc文件里面中，修改ZSH_THEMES的变量值，指向文件名称（不带.zsh-theme后缀）：

```
- ZSH_THEME="my_awesome_theme"
```

如果不想设置任何主题，则保留变量名为空：

```
ZSH_THEME=""
```

每种主题的预览效果见  https://github.com/ohmyzsh/ohmyzsh/wiki/Themes  

如果在\$ZSH和\$ZSH_CUSTOM存在同名主题，优先使用$ZSH_CUSTOM。


## 自定义脚本

在$ZSH_CUSTOM下面一个或多个新建.zsh文件或房子子目录里面，zsh每次启动时都会执行这些脚本。
## incr_实时补全

incr
incr是一款自动提示插件，功能非常强大，官网演示demo，感受一下：

![incr](https://pic1.zhimg.com/v2-a9a9cc115d4fc56dce323fd3db1e1128_b.gif?consumer=ZHI_MENG)

去这里 http://mimosa-pudica.net/src/incr-0.2.zsh 下载文件，放到plugins的incr目录下。

```
##创建文件夹
mkdir $ZSH_CUSTOM/plugins/incr

##下载
curl -fsSL https://mimosa-pudica.net/src/incr-0.2.zsh -o $ZSH_CUSTOM/plugins/incr/incr.zsh

##配置
echo 'source $ZSH_CUSTOM/plugins/incr/incr.zsh' >> ~/.zshrc

##激活
source ~/.zshrc
```




## autojump

autojump这款插件基本上算是必备插件了，在终端操作里面比较常用的算是文件夹之间的切换，这款插件极大地简化了路径跳转的操作

```
yum install autojump-zsh
chmod 777 /usr/share/autojump/autojump.bash
echo "/usr/share/autojump/autojump.bash" >> ~/.zshrc
source ~/.zshrc
```

![autojump](https://pic1.zhimg.com/v2-fffd39bdd01464f8df7ad17fa6c7ada0_b.gif?consumer=ZHI_MENG)

以前的cd code现在可以直接j c，路径越长，该插件效果就越明显

## zsh-autosuggestions：历史补全

这是一个命令自动补全插件，当你输入命令的几个字母，它会自动根据历史输入进行自动补全，然后按→，安装也很简单：
```
git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
vim ~/.zshrc
# 加入插件列表
plugins=(
  git
  zsh-autosuggestions
)
source ~/.zshrc
```


![自动补全](https://pic4.zhimg.com/v2-8195a9fb188ff4e892a7bba1d178890b_b.gif)


## 语法检查zsh-syntax-highlighting

平时我们输入Linux命令的时候，只有在执行的时候才知道输错命令了，这款插件可以实时检测命令是否出错。命令错误显示红色，直至正确才为绿色，路径正确会添加下划线。

新版本的插件使用脚本形式（.zsh）而不是插件形式（.plugin.zsh），因此不是修改plugins数组了，而是在结尾添加source命令。

下载到指定目录：

```
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
```

修改.zshrc：

```
echo  "source  zsh-syntax-highlighting.zsh的路径"  >> ~/.zshrc
```

## zsh-history-substring-search 历史记录关键字匹配



https://github.com/zsh-users/zsh-history-substring-search/


##  Linux平台软件包管理方案

依赖，是软件包管理的永恒话题，无论是前端领域的npm依赖，还是Linux下的软件包依赖，都是令人比较头疼的问题，这种问题并不是多难的技术问题，而是代码的管理问题。

### 原生包管理方案

以下是早期的两种知名包管理方案：
- debian：使用deb作为二进制格式，使用apt管理deb的依赖
- Redhat：借鉴了debian的思想，使用rpm作为二进制格式，使用yum管理rpm的依赖。

上述的方案我们统一称之为“原生包管理方案”，也就是说只能在少数几个发行版上运行。同时，上述两种方式最明显的问题就是依赖，主要包括：

- 二进制文件之间的依赖。例如一个软件依赖于另一个软件，甚至是另一个软件的特定版本，如果依赖链条中的某个环节出了问题，那么本次安装就会出错。
- 对于本地库文件的依赖。本质上也跟第一点相同，如果本地缺少库文件、或者找不到正确的位置、或者版本不对应，安装就会出错。其实Windows上有时候也有这样的问题，例如偶尔会弹出“缺少某个.dll文件”。

### 跨发行版包管理方案

从2016年左右开始，一些大的发行版厂商推出了新的包管理方式，就是尽量将需要的依赖文件都打包好，避免从外部或发行版本地寻找依赖文件，类似于Windows的msi格式。这样就减少了依赖，虽然这样打包后的体积增大，但是对于现代硬件存储成本来说已经不是问题了。这种格式称之为“跨发行版包管理方案”，也就是说不绑定发行版，直接面向Linux。

遵循这种思想的主要有.appimage格式、snap格式和flatpak格式。

- appimage格式有点像Windows上的“便携软件”，就是解压到/tmp目录下直接运行，这通常适用于即用即走、不依赖本地存储状态的情况。
- snap格式是Ubuntu主导的，为每个snap提供一个隔离的沙箱环境，不过这种方式无法换源。
- flatpak是由社区主导的一种Linux打包规范，其目标是“一次打包，到处运行”，让开发人员和用户能在不同Linux发行版之间共享应用程序。

### 最佳实践

对应现行技术框架下的发行版，个人推荐的软件安装方案的优先顺序是：

```
跨发行版方案 > 原生包管理方案 > 下载二进制执行文件 >>下载源码手动编译
```

而对于跨发行版方案，个人推荐的优先顺序是：

```
flatpak > snap > appimage
```