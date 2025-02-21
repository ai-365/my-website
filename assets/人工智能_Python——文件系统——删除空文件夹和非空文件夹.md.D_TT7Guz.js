import{_ as i,c as a,o as t,ae as e}from"./chunks/framework.rTUm5mJw.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"人工智能/Python——文件系统——删除空文件夹和非空文件夹.md","filePath":"人工智能/Python——文件系统——删除空文件夹和非空文件夹.md"}'),n={name:"人工智能/Python——文件系统——删除空文件夹和非空文件夹.md"};function p(h,s,l,o,d,r){return t(),a("div",null,s[0]||(s[0]=[e(`<p>使用rmdir()删除空文件夹：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">os.rmdir(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">D:</span><span style="--shiki-light:#22863A;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\T</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">est</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>如果文件夹不是空的，则会报错。</p><p>使用removedirs()递归删除空文件夹：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>os.removedirs()</span></span></code></pre></div><p>如果要删除非空文件夹，应使用shutil库的rmtree()方法。</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> shutil</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">shutil.rmtree(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;目录&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,7)]))}const _=i(n,[["render",p]]);export{c as __pageData,_ as default};
