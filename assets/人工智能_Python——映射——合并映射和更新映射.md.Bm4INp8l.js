import{_ as a,c as n,o as p,ae as e}from"./chunks/framework.rTUm5mJw.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"人工智能/Python——映射——合并映射和更新映射.md","filePath":"人工智能/Python——映射——合并映射和更新映射.md"}'),t={name:"人工智能/Python——映射——合并映射和更新映射.md"};function l(i,s,c,d,o,_){return p(),n("div",null,s[0]||(s[0]=[e(`<p>映射可以合并，后面的操作数中的元素如果覆盖前面的同名键，增加新的键。</p><p>使用 | 操作符更新映射。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>d1 = {&#39;a&#39;:1,&#39;b&#39;:2}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 键a的值会覆盖前面的</span></span>
<span class="line"><span>d2 = {&#39;a&#39;:11,&#39;c&#39;:3}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(d1 | d2)</span></span>
<span class="line"><span># {&#39;a&#39;: 11, &#39;b&#39;: 2, &#39;c&#39;: 3}</span></span>
<span class="line"><span># d1和d2都没有变</span></span></code></pre></div><p>如果想就地更新映射，使用 |=。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>d1 = {&#39;a&#39;:1,&#39;b&#39;:2}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 键a的值会覆盖前面的</span></span>
<span class="line"><span>d2 = {&#39;a&#39;:11,&#39;c&#39;:3}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>d1 |= d2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(d1)</span></span>
<span class="line"><span># {&#39;a&#39;: 11, &#39;b&#39;: 2, &#39;c&#39;: 3}</span></span></code></pre></div>`,5)]))}const u=a(t,[["render",l]]);export{h as __pageData,u as default};
