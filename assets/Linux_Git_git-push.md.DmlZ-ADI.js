import{_ as a,c as s,o as e,ae as i}from"./chunks/framework.rTUm5mJw.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/Git/git-push.md","filePath":"Linux/Git/git-push.md"}'),p={name:"Linux/Git/git-push.md"};function n(o,t,r,c,d,l){return e(),s("div",null,t[0]||(t[0]=[i('<h2 id="git-push" tabindex="-1">git push <a class="header-anchor" href="#git-push" aria-label="Permalink to &quot;git push&quot;">​</a></h2><p>git push的作用是将本地仓库推送到远程仓库，如果之前是用git clone下载下来的仓库，那么在.git文件夹会自动记录远程仓库的地址，那么可以直接运行如下命令推送到远程仓库：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git push</span></span></code></pre></div><p>如果之前是用git init 初始化的本地仓库，那么就需要使用git remote add 先添加远程仓库，一般名称为origin，然后运行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git  push  origin  master:master</span></span></code></pre></div>',5)]))}const g=a(p,[["render",n]]);export{u as __pageData,g as default};
