import{_ as n,c as a,o as p,ae as e}from"./chunks/framework.rTUm5mJw.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"人工智能/Python——函数——任意数量的实参.md","filePath":"人工智能/Python——函数——任意数量的实参.md"}'),t={name:"人工智能/Python——函数——任意数量的实参.md"};function i(o,s,l,_,c,r){return p(),a("div",null,s[0]||(s[0]=[e(`<p>在参数前面加上星号，就变成了任意数量的实参。</p><p>在传递实参时，把后面的所有参数均打包为一个列表。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>def foo(*names):</span></span>
<span class="line"><span>    print(&#39;welcome:&#39;)</span></span>
<span class="line"><span>    for name in names:</span></span>
<span class="line"><span>        print(f&#39;- {name}\\r&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 此时names=[&#39;mike&#39;]</span></span>
<span class="line"><span>foo(&#39;mike&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 此时names=[&#39;mike&#39;,&#39;bob&#39;,&#39;smith&#39;]</span></span>
<span class="line"><span>foo(&#39;mike&#39;,&#39;bob&#39;,&#39;smith&#39;)</span></span></code></pre></div>`,3)]))}const h=n(t,[["render",i]]);export{d as __pageData,h as default};
