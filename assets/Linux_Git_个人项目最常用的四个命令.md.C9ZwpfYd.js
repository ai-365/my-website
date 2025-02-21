import{_ as s,c as t,o as a,ae as e}from"./chunks/framework.rTUm5mJw.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/Git/个人项目最常用的四个命令.md","filePath":"Linux/Git/个人项目最常用的四个命令.md"}'),p={name:"Linux/Git/个人项目最常用的四个命令.md"};function l(n,i,h,d,o,c){return a(),t("div",null,i[0]||(i[0]=[e('<p>对于个人项目，如果仅仅把Github当成一个“云端文件夹”，例如存放个人博客的页面，这时候基本不需要考虑分支、版本、协作等等。最常用的其实也就是四个命令：</p><ul><li>git clone</li><li>git add</li><li>git commit</li><li>git push</li></ul><p>第一个命令：git clone，首先将仓库下载到本地：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/用户名/仓库名</span></span></code></pre></div><p>第二个命令：git add，在进行编辑之后，将更改统一提交到暂存区：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><p>需要说明的是，在2.x版本之后，<code>git add .</code>和<code>git add -A</code>的作用是完全一样的。</p><p>第三个命令：git commit，将暂存区的内容提交到本地仓库：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;提交信息&#39;</span></span></code></pre></div><p>注意，这个提交信息一定要写，否则git不让提交。</p><p>第四个命令：git push，将本地仓库推送到远程仓库：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre></div><p>这里不需要添加远程仓库，因为在执行git clone的时候已经记住了远程仓库的地址了。</p><p>综上，对于个人项目，使用Git最常用的也就是四个命令，在实践中，我们往往需要频繁的修改、提交、推送，可以将后三个命令写在一个脚本中，然后每次只需要运行该脚本即可。</p>',14)]))}const r=s(p,[["render",l]]);export{k as __pageData,r as default};
