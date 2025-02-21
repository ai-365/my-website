import{_ as s,c as t,o as a,ae as n}from"./chunks/framework.rTUm5mJw.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/Linux——fcitx5.md","filePath":"Linux/Linux——fcitx5.md"}'),e={name:"Linux/Linux——fcitx5.md"};function p(l,i,c,h,o,r){return a(),t("div",null,i[0]||(i[0]=[n(`<p>几个概念区分</p><ul><li>输入法框架，即fcitx5程序，只装这个没有什么用</li><li>输入法引擎，只有安装中文输入法引擎才能输入中文，fcitx5-chinese-addons 包含了大量中文输入方式：拼音、双拼、五笔拼音、自然码、仓颉、冰蟾全息、二笔等</li><li>配置 fcitx5 的配置文件位于 ~/.config/fcitx5 ，你可以使用文本编辑器编辑配置文件，也可使用 GUI 配置。</li><li>词典可以帮助改善输入法的使用体验，<a href="https://github.com/wuhgit/CustomPinyinDictionary" target="_blank" rel="noreferrer">https://github.com/wuhgit/CustomPinyinDictionary</a> <a href="https://github.com/felixonmars/fcitx5-pinyin-zhwiki" target="_blank" rel="noreferrer">https://github.com/felixonmars/fcitx5-pinyin-zhwiki</a></li></ul><p>请根据仓库的 README 文件将下载或下载解压后的 .dict 文件放置到 ~/.local/share/fcitx5/pinyin/dictionaries/ 文件夹中（如果文件夹不存在，你需要手动新建此文件夹），再重启一下 fcitx5 即可。</p><p>仓库内的主题数量有限，如果需要更多主题，可以去 GitHub （<a href="https://github.com/search?q=fcitx5+theme&amp;type=Repositories%EF%BC%89" target="_blank" rel="noreferrer">https://github.com/search?q=fcitx5+theme&amp;type=Repositories）</a> 发现更多主题。</p><p>找到你喜欢的主题并下载到本地后，将解压后的文件放到 ~/.local/share/fcitx5/themes/ 目录下。</p><p>然后从，配置 -&gt; 配置附加组件 -&gt; 经典用户界面 -&gt; 主题 ，切换到你喜欢的主题即可。</p><p>新方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yay -S fcitx5 fcitx5-gtk fcitx5-qt fcitx5-configtool #  fcitx5 输入法框架包</span></span>
<span class="line"><span>yay -S fcitx5-chinese-addons #中文引擎</span></span>
<span class="line"><span>yay -S fcitx5-material-color #美化</span></span>
<span class="line"><span>yay -S fcitx5-pinyin-zhwiki # 词库</span></span></code></pre></div><p>fcitx5-im包组下包含了我们需要的软件，直接安装fcitx5-im即可。</p><p>在/etc/environment文件中加入：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> XMODIFIERS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@im</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fcitx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GTK_IM_MODULE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fcitx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QT_IM_MODULE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fcitx</span></span></code></pre></div><p>然后重新加载：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>source /etc/environment</span></span></code></pre></div><p>说明，/etc/environment 文件仅包含系统的默认环境变量，但是我们也可以把自定义的环境变量放入这里， /etc/environment里的环境变量不再针对哪一个用户，他对整个系统都生效无论是哪个用户。</p><p>对于Manjaro 用户，直接运行一行命令即可：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yay -S  manjaro-asian-input-support-fcitx5</span></span></code></pre></div>`,16)]))}const g=s(e,[["render",p]]);export{k as __pageData,g as default};
