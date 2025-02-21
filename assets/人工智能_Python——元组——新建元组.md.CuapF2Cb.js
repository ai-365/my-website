import{_ as a,c as n,o as p,ae as e}from"./chunks/framework.rTUm5mJw.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"人工智能/Python——元组——新建元组.md","filePath":"人工智能/Python——元组——新建元组.md"}'),l={name:"人工智能/Python——元组——新建元组.md"};function t(i,s,c,o,r,_){return p(),n("div",null,s[0]||(s[0]=[e(`<p>元组与列表非常类似，只不过元组是不可变的。元组有如下两大特点。</p><ul><li>任意对象的有序集合： 与字符串和列表类似，元组是一个基于位置的有序对象集合。</li><li>通过偏移量存取： 与字符串、列表一样，元组通过偏移量读写。也支持所有基于偏移量的操作，例如索引和分片。</li><li>不可变： 这是元组与列表最大的区别，列表中的元素可以改变，而元组中的元素不能改变。</li></ul><p>如下示例给出了元组的常见定义方式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 一个空元组</span></span>
<span class="line"><span>turple1 = ()  </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 单个元素的元组</span></span>
<span class="line"><span>turple2 = (1,) </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 三个元素的元组</span></span>
<span class="line"><span>turple3 = (1, 2.5, &#39;hello&#39;)</span></span></code></pre></div><p>需要特别强调的是，如果只有一个元素，必须加上拖尾逗号，如果不加，就是整数，加了才是元组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># turple1 是整数！</span></span>
<span class="line"><span>turple1 = (2)</span></span>
<span class="line"><span>print(type(turple1))</span></span>
<span class="line"><span># &lt;class &#39;int&#39;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 正确!</span></span>
<span class="line"><span>turple2 = (2,)</span></span></code></pre></div>`,6)]))}const h=a(l,[["render",t]]);export{u as __pageData,h as default};
