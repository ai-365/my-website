import{_ as i,c as a,o as e,ae as t}from"./chunks/framework.CDwmhxVj.js";const k=JSON.parse('{"title":"Linux的进程和服务","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/Linux的进程和服务.md","filePath":"Linux/Linux的进程和服务.md"}'),l={name:"Linux/Linux的进程和服务.md"};function n(p,s,h,d,r,o){return e(),a("div",null,s[0]||(s[0]=[t('<h1 id="linux的进程和服务" tabindex="-1">Linux的进程和服务 <a class="header-anchor" href="#linux的进程和服务" aria-label="Permalink to &quot;Linux的进程和服务&quot;">​</a></h1><h2 id="服务" tabindex="-1">服务 <a class="header-anchor" href="#服务" aria-label="Permalink to &quot;服务&quot;">​</a></h2><h3 id="进程和服务的区别" tabindex="-1">进程和服务的区别 <a class="header-anchor" href="#进程和服务的区别" aria-label="Permalink to &quot;进程和服务的区别&quot;">​</a></h3><p>进程是程序正在运行的实例，是运行着的程序，每个进程都占用系统资源，包括内存、I/O 等。每个进程必须有唯一的进程ID，且在操作系统的进程管理器中也有对应的进程控制块（PCB）实体。</p><p>服务是在操作系统上运行的一种保持长期存在的非交互性进程，它主要负责提供特定的系统或网络服务，以便满足来自客户端的请求或负责某个定时任务的执行，使操作系统保持运行。</p><p>可以简单的理解为，进程一般是是暂时的、一次性的、前台执行的、用户直接交互的；而服务一般是持续性的、后台执行的、非交互性的。</p><h3 id="初始化系统的分类" tabindex="-1">初始化系统的分类 <a class="header-anchor" href="#初始化系统的分类" aria-label="Permalink to &quot;初始化系统的分类&quot;">​</a></h3><p>Linux所提供的持续性服务由守护进程实现，Linux将管理每一个守护进程的方法作为一个服务，并且使用了某一种初始化系统，也叫init系统，主流的init系统分为两种：</p><ul><li>Sysinit 源于20世纪80年代创建的传统init系统，目前，大多数老版本UNIX和Linux采用此init系统。</li><li>systemd 大多数Linux发行版的最新版本都采用了systemd作为 init系统，例如centos7.x及以后，Ubuntu15及以后。</li></ul><p>所以，应该将重点放在systemd上。</p><h3 id="systemd的单元、服务单元、目标单元" tabindex="-1">systemd的单元、服务单元、目标单元 <a class="header-anchor" href="#systemd的单元、服务单元、目标单元" aria-label="Permalink to &quot;systemd的单元、服务单元、目标单元&quot;">​</a></h3><p>systemd的主要任务是启动停止服务。Linux将管理的事项抽象成一个个单元（Units）。单元是一个由名称、类型和配置文件组成的组，专注于某一项服务。</p><p>在处理服务时，systemd分为服务单元和目标单元。</p><p>每个服务单元以.service结尾，每个目标单元以.target结尾。</p><p>列出所有的单元：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list-units</span></span></code></pre></div><p>列出所有的服务单元：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list-units</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  .service</span></span></code></pre></div><p>列出所有的目标单元：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list-units</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  .starget</span></span></code></pre></div><h3 id="systemd单元的配置文件" tabindex="-1">systemd单元的配置文件 <a class="header-anchor" href="#systemd单元的配置文件" aria-label="Permalink to &quot;systemd单元的配置文件&quot;">​</a></h3><p>每个单元对应若干配置文件。Linux单元配置文件位于/lib/systemd/system和/etc/systemd/system中。</p><p>列出所有的服务单元配置文件：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list-units-files</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --type=service</span></span></code></pre></div><p>列出所有的目标单元配置文件：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list-units-files</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --type=target</span></span></code></pre></div><p>显示sshd服务的单元配置文件：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /lib/systemd/system/sshd.service</span></span></code></pre></div><p>服务单元的配置文件主要包括：</p><ul><li>Description 描述</li><li>Documention 手册页</li><li>After 应该在哪些服务启动之后启动本服务</li><li>EnvironmentFile 服务配置文件</li><li>ExecStart 启动服务的命令</li><li>ExecReload 重载服务的命令</li><li>WantedBy 服务所属的目标单元</li></ul><h3 id="启停服务" tabindex="-1">启停服务 <a class="header-anchor" href="#启停服务" aria-label="Permalink to &quot;启停服务&quot;">​</a></h3><p>启动服务：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sshd.service</span></span></code></pre></div><p>停止服务：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sshd.service</span></span></code></pre></div><p>重启服务：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sshd.service</span></span></code></pre></div><p>查看服务状态：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sshd.service</span></span></code></pre></div><h2 id="图形界面" tabindex="-1">图形界面 <a class="header-anchor" href="#图形界面" aria-label="Permalink to &quot;图形界面&quot;">​</a></h2><h3 id="x-window-system" tabindex="-1">X Window System <a class="header-anchor" href="#x-window-system" aria-label="Permalink to &quot;X Window System&quot;">​</a></h3><p>从英文字母看，X在W（Window）后面，所有称为X，有下一代窗口之意。在Unix-like上的图形用户接口（GUI）被称为X或X11。X11只是一个软件而不是操作系统。</p><p>X Window分为X Server和X Client两个组件。X Server管理硬件，X Client管理应用程序。</p><p>由于每个X Clinet是独立的，并不知道其它的X Clinet，这样就会造成GUI界面的显示冲突，所以使用X Window Manager进行管理。X Window Manger，也叫窗口管理器，是一个特殊的X Client，负责管理所有的应用程序GUI。著名的X Window Manager有GNOME、KDE。</p><p>随着技术的发展，X Window窗口管理系统正逐步被淘汰，而被新一代图形界面管理系统——Wayland取代。</p><p>X Window System使用C/S架构,服务端和客户端可以基于网络通信。</p><p>客户端(也就是各种软件)将绘图请求发给服务端,服务端操纵显卡或视频终端把位图图像绘制出来,并处理键盘鼠标的事件,发送给客户端.注意,和人交互的是服务端。</p><ul><li>服务端监听到显示器、鼠标、键盘事件，将事件信息（例如用户在哪个位置点了一下）发送给客户端，请求指示“此时应该怎么显示？”</li><li>客户端接收到该事件信息，计算出显示逻辑（例如在某个地方显示一个图形），将绘制指令发送给客户端。注意，客户端没有绘制能力，它只发送绘制指令。</li><li>服务端接收到绘制指令，然后调用图形API“画”出来（图形、文字等）。</li><li>窗口管理器协调各个客户端的堆叠等状态。</li></ul><p>为什么需要窗口管理器？因为多个客户端是层叠的，谁在前面谁在后面客户端自己是不知道的，只能在窗口管理器中汇总才能知道。</p><p>通俗点解释。</p><ul><li>服务端说： 用户在坐标(50,50)处点了一下，这种情况该怎么显示？</li><li>客户端说：这种情况应该在坐标（100，100）处画一个笑脸图形。</li><li>服务端说：收到！我马上派遣调用图形API在（100，100）出画一个笑脸图形。</li></ul><p>但这种情况只能同时显示一个gui程序。为了管理众多的窗口怎么在屏幕上显示,需要窗口管理器(Window manager).窗口管理器可以实现一个屏幕上显示多个X程序,实现调整程序大小,标题栏,最大化,最小化,关闭按钮,虚拟桌面这些功能.没有WM,一次只能运行一个GUI程序,而且分辨率锁死,显然很不符合使用习惯.</p><p>窗口管理器的例子：</p><ul><li>服务端对客户端A说： 我监听到用户在坐标(50,50)处点了一下，这种情况该怎么显示？</li><li>客户端A对窗口管理器说：我要在（50，50）处画一个笑脸。</li><li>服务端对客户端A说： 我监听到用户在坐标(80,150)处点了一下，这种情况该怎么显示？</li><li>客户端B对窗口管理器说：我要在（80，150）处写一段文本。</li><li>服务端对客户端C说：我监听到用户点击了全屏按钮，这种情况该怎么显示？</li><li>客户端C对窗口管理器说：用户让我全屏显示窗口，并且要在其它客户端的前面。</li><li>窗口管理器：你们的指令都收到了，我来汇总出一个总的绘制指令xxxxxxxx。</li><li>窗口管理器对服务端说：我的总绘制指令是xxxxxxx，你负责给我显示出来。</li><li>服务端：收到！我马上派遣驱动程序显示出来。</li></ul><h3 id="wayland" tabindex="-1">Wayland <a class="header-anchor" href="#wayland" aria-label="Permalink to &quot;Wayland&quot;">​</a></h3><p>Wayland将X中的Server和窗口管理器整合到一起作为服务端，称为合成器（Compositor），架构上只分了客户端和合成器两大部件。</p><ul><li>客户端（Wayland Client），直接计算各自界面的渲染缓冲数据，然后自行绘制，并通知server更新了哪个区域。</li><li>合成器（Wayland Compositor），汇总所有客户端的更新通知，实现各界面窗口“合成”，最后交给显示驱动绘图，呈现最终效果。</li></ul><p>client和server端都会发生绘制。client绘制本地的窗口内容，server端主要用于合成时渲染。两边都可独立选择用软件或者硬件渲染。</p><p>为什么需要通知server再次合成？因为多个客户端窗口一般是层叠的，谁在前面谁在后面客户端自己是不知道的，只有集中在server中处理层叠关系。</p><p>通俗解释：</p><ul><li>合成器对客户端A说： 我监听到用户在坐标(50,50)处点了一下</li><li>客户端A在（50，50）处直接调用图形API画了一个笑脸，然后对Server说 ：我现在通知你，左上角xx区域已经更新了。</li><li>合成器对客户端B说： 我监听到用户在坐标(80,150)处点了一下。</li><li>客户端B直接调用图形API在（80，150）处写一段文本，然后对Server说：我现在通知你你，区域yyyy已经被更新了。</li><li>合成器对客户端C说：我监听到用户点击了全屏按钮。</li><li>客户端C直接调用API重新绘制了全屏下的图形，然后对Server说：全屏区域已经更新了。</li><li>合成器说：你们的通知都收到了，我会汇总你们的更新，看看谁应该在前面显示谁应该被遮挡，然后派遣图形驱动重新合成一个最终的效果呈现给用户。</li></ul><p>总之，x Window的特点是，client是无法调用图形API，只能将指令发送给server，让server去调用图形API绘制。也就是说，x server成为了client和图形API的“传话筒”，但是为什么不让client与图形API直接通信呢？于是Wayland应运而生。Wayland先进的地方在于，每个client都可以自行调用图形API绘制自己的窗口，server汇总信息，调用图形API汇总最终的合成界面。</p><p>这里的图形API指的是OpenGL、Direct X、metal、vulkan，下面还有图形驱动程序，再下面就是显卡。Vulkan是一个高性能的图形API，Wayland插上Vulkan的翅膀一定会带来更大的性能提升。</p>',63)]))}const u=i(l,[["render",n]]);export{k as __pageData,u as default};
