import{_ as n,c as a,o as p,ae as e}from"./chunks/framework.rTUm5mJw.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"人工智能/Python——函数——关键字参数.md","filePath":"人工智能/Python——函数——关键字参数.md"}'),t={name:"人工智能/Python——函数——关键字参数.md"};function l(o,s,i,_,c,r){return p(),a("div",null,s[0]||(s[0]=[e(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>def foo(first,last=&#39;Baiden&#39;):</span></span>
<span class="line"><span>    print(f&#39;hello,{first} {last}&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># last参数没传递实参，使用默认值</span></span>
<span class="line"><span>foo(&#39;John&#39;)</span></span>
<span class="line"><span># hello,John Baiden </span></span>
<span class="line"><span></span></span>
<span class="line"><span># last参数传递了实参，覆盖默认值</span></span>
<span class="line"><span>foo(&#39;John&#39;,&#39;Smith&#39;)</span></span>
<span class="line"><span># hello,John Smith</span></span></code></pre></div>`,1)]))}const f=n(t,[["render",l]]);export{h as __pageData,f as default};
