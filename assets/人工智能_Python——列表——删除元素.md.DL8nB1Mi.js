import{_ as i,c as a,o as n,ae as p}from"./chunks/framework.rTUm5mJw.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"人工智能/Python——列表——删除元素.md","filePath":"人工智能/Python——列表——删除元素.md"}'),t={name:"人工智能/Python——列表——删除元素.md"};function h(l,s,k,e,r,E){return n(),a("div",null,s[0]||(s[0]=[p(`<p>使用pop()删除列表元素。</p><p>如果不传参数，则删除最后一个。</p><p>如果传入一个索引位置，则删除该索引位置的元素。</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li.pop()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(li) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># [1,2,3,4]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 删除第一个元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li.pop(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(li) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># [2,3,4]</span></span></code></pre></div><p>pop()是按索引删除元素，如果要按值删除元素，则使用remove()。</p><p>remove()接收一个值，如果列表中存在这个值，则删除第一个。</p>`,6)]))}const y=i(t,[["render",h]]);export{o as __pageData,y as default};
