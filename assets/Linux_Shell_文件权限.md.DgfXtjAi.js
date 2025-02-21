import{_ as s,c as i,o as e,ae as t}from"./chunks/framework.rTUm5mJw.js";const k=JSON.parse('{"title":"文件权限","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/Shell/文件权限.md","filePath":"Linux/Shell/文件权限.md"}'),h={name:"Linux/Shell/文件权限.md"};function l(n,a,p,d,o,r){return e(),i("div",null,a[0]||(a[0]=[t('<h1 id="文件权限" tabindex="-1">文件权限 <a class="header-anchor" href="#文件权限" aria-label="Permalink to &quot;文件权限&quot;">​</a></h1><h2 id="修改文件-目录所有者-所属组" tabindex="-1">修改文件/目录所有者/所属组 <a class="header-anchor" href="#修改文件-目录所有者-所属组" aria-label="Permalink to &quot;修改文件/目录所有者/所属组&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [-R]  所有者:所属组  文件或目录</span></span></code></pre></div><p>说明：-R表示递归修改。</p><h2 id="数字方法修改权限" tabindex="-1">数字方法修改权限 <a class="header-anchor" href="#数字方法修改权限" aria-label="Permalink to &quot;数字方法修改权限&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [-R]  xyz  文件或目录</span></span></code></pre></div><p>说明：xyz表示所有者、所属组、其他人对应的权限数字，是r、w、x对应的数字累加的结果，各具体操作权限的数字对照表是r:4、w:2、x:1，如果没有某种操作权，该数字为0。</p><h2 id="符号方法修改权限" tabindex="-1">符号方法修改权限 <a class="header-anchor" href="#符号方法修改权限" aria-label="Permalink to &quot;符号方法修改权限&quot;">​</a></h2><p>用等于的方式：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   u=rwx,g=rx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  文件或目录</span></span></code></pre></div><p>用增减的方式：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   g+w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 文件或目录</span></span></code></pre></div><p>说明：有四种符号表示身份，分别是u（所有者）、g（所属组）、o（其他人）、a（所有人）</p><h2 id="文件与目录的权限区别" tabindex="-1">文件与目录的权限区别 <a class="header-anchor" href="#文件与目录的权限区别" aria-label="Permalink to &quot;文件与目录的权限区别&quot;">​</a></h2><p>某种身份对文件有 r 权限，表示可以读取文件内容；对目录有r权限，表示可以列出（例如使用ls）目录下的文件列表和相关属性。</p><p>某种身份对文件有 w 权限，表示可以向该文件写入内容；对目录有w权限，表示可以向该目录增加、删除文件。</p><p>某种身份对文件有 x 权限，表示可以执行该文件（二进制方式、脚本方式）；对目录有x权限，表示可以以此目录为工作目录（例如cd到该目录）。</p>',17)]))}const u=s(h,[["render",l]]);export{k as __pageData,u as default};
