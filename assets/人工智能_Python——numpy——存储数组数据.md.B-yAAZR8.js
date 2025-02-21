import{_ as n,c as s,o as p,ae as e}from"./chunks/framework.rTUm5mJw.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"人工智能/Python——numpy——存储数组数据.md","filePath":"人工智能/Python——numpy——存储数组数据.md"}'),t={name:"人工智能/Python——numpy——存储数组数据.md"};function r(l,a,i,o,c,_){return p(),s("div",null,a[0]||(a[0]=[e(`<h2 id="存储数组数据" tabindex="-1">存储数组数据 <a class="header-anchor" href="#存储数组数据" aria-label="Permalink to &quot;存储数组数据&quot;">​</a></h2><p>可以使用.npy文件后缀名保存数组，方便重复使用。</p><p>如下示例先将arr数组使用np.save()方法保存到arr.npy文件中，然后使用load()方法读取数组，赋值给arr2：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import numpy as np</span></span>
<span class="line"><span>arr = np.array([[1,2,3],[4,5,6]])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 存储</span></span>
<span class="line"><span>np.save(&#39;arr.npy&#39;,arr)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 读取</span></span>
<span class="line"><span>arr2 = np.load(&#39;arr.npy&#39;)</span></span>
<span class="line"><span>print(arr2)</span></span></code></pre></div>`,4)]))}const m=n(t,[["render",r]]);export{h as __pageData,m as default};
