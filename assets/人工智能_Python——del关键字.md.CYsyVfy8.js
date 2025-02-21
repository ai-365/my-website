import{_ as n,c as s,o as p,ae as e}from"./chunks/framework.rTUm5mJw.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"人工智能/Python——del关键字.md","filePath":"人工智能/Python——del关键字.md"}'),t={name:"人工智能/Python——del关键字.md"};function l(i,a,o,c,d,r){return p(),s("div",null,a[0]||(a[0]=[e(`<p>del不是函数而是语句，表示删除指针。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a = [1,2,3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>b = a  # b复制了a的指针</span></span>
<span class="line"><span>del a  # 删除a的指针</span></span>
<span class="line"><span>print(b)</span></span>
<span class="line"><span># [1,2,3] b依然存在</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(a)</span></span>
<span class="line"><span># NameError: name &#39;a&#39; is not defined</span></span>
<span class="line"><span># 因为a的指针被删了，所以a没有定义</span></span></code></pre></div>`,2)]))}const m=n(t,[["render",l]]);export{h as __pageData,m as default};
