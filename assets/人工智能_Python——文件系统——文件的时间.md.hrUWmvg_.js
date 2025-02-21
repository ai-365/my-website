import{_ as t,c as i,o as a,ae as e}from"./chunks/framework.rTUm5mJw.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"人工智能/Python——文件系统——文件的时间.md","filePath":"人工智能/Python——文件系统——文件的时间.md"}'),p={name:"人工智能/Python——文件系统——文件的时间.md"};function n(h,s,l,o,k,r){return a(),i("div",null,s[0]||(s[0]=[e(`<p>创建（create）时间： os.path.getctime()</p><p>访问（access）时间：os.path.getatime()</p><p>修改（modify）时间： os.path.getctime()</p><p>皆传入文件的路径，如果是当前目录下的文件，则传入文件名即可。</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> os</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">os.path.getctime(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;file.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">os.path.getatime(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;file.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">os.path.getmtime(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;file.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>上述方法返回的皆为时间戳。</p>`,6)]))}const d=t(p,[["render",n]]);export{E as __pageData,d as default};
