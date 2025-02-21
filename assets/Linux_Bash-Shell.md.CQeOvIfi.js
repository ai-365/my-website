import{_ as i,c as a,o as e,ae as t}from"./chunks/framework.CDwmhxVj.js";const d=JSON.parse('{"title":"Bash Shell","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/Bash-Shell.md","filePath":"Linux/Bash-Shell.md"}'),r={name:"Linux/Bash-Shell.md"};function h(s,l,c,o,n,p){return e(),a("div",null,l[0]||(l[0]=[t('<h1 id="bash-shell" tabindex="-1">Bash Shell <a class="header-anchor" href="#bash-shell" aria-label="Permalink to &quot;Bash Shell&quot;">​</a></h1><h2 id="bash的配置文件" tabindex="-1">Bash的配置文件 <a class="header-anchor" href="#bash的配置文件" aria-label="Permalink to &quot;Bash的配置文件&quot;">​</a></h2><p>登录shell之后会从5个不同的文件中读取命令：</p><ul><li>etc/profile ： 主启动文件，每个用户登录后都会读取 其余的四个文件都用于同一个目的：提供用户专属的启动文件来为该用户使用shell时提前设置，例如设置环境变量，预先执行一些命令。另外要注意，shell会按顺序执行第一个被找打的文件，余下的则被忽略。</li><li>$HOME/.bash_profile</li><li>$HOME/.bashrc</li><li>$HOME/.bash_login</li><li>$HOME/.profile</li></ul><h2 id="bash-shell的快捷键" tabindex="-1">Bash Shell的快捷键 <a class="header-anchor" href="#bash-shell的快捷键" aria-label="Permalink to &quot;Bash Shell的快捷键&quot;">​</a></h2><p>移动光标：</p><ul><li>ctrl+a:光标移到行首</li><li>ctrl+e:光标移到行尾</li><li>ctrl+b:光标左移一个字母</li><li>ctrl+f: 光标右移一个字母</li><li>esc+f: 往右跳一个单词</li><li>esc+b: 往左跳一个 单 词</li></ul><p>删除：</p><ul><li>ctrl+h:删除光标前一个字符，同 backspace 键相同</li><li>ctrl+w: 删除光标前的一个单词</li><li>esc+d: 删除光标后的一个词</li><li>ctrl+k:清除光标后至行尾的内容。</li><li>ctrl+u: 清除光标前至行首间的所有内容。</li><li>ctrl+d: 删除光标所在字母;注意和backspace以及ctrl+h的区别，这2个是删除光标前的字符</li></ul><p>修改：</p><ul><li>ctrl+t: 交换光标位置前的两个字符</li><li>esc+t: 交换光标位置前的两个单词</li></ul><p>其他：</p><ul><li>ctrl+y: 粘贴或者恢复上次的删除</li><li>ctrl+l:清屏，相当于clear。</li><li>ctrl+r:搜索之前打过的命令。会有一个提示，根据你输入的关键字进行搜索bash的history</li><li>ctrl+d:退出当前 Shell</li><li>ctrl+c:杀死当前进程</li><li>ctrl+z : 把当前进程转到后台运行，使用’ fg ‘命令恢复。比如top -d1 然后ctrl+z ，到后台，然后fg,重新恢复</li></ul>',13)]))}const _=i(r,[["render",h]]);export{d as __pageData,_ as default};
