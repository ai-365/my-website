import{_ as i,c as a,o as n,ae as p}from"./chunks/framework.rTUm5mJw.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"人工智能/Python——列表——排序.md","filePath":"人工智能/Python——列表——排序.md"}'),t={name:"人工智能/Python——列表——排序.md"};function h(l,s,k,e,r,E){return n(),a("div",null,s[0]||(s[0]=[p(`<p>列表的sort方法就地改变列表本身。</p><p>sorted()内置函数会返回一个新的列表。</p><p>sorted方法的语法如下：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sorted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, reverse, key)</span></span></code></pre></div><ul><li>list ：要排序的列表</li><li>reverse： 值为True时逆序，默认为False，从小到大。可选关键字参数。</li><li>key： 排序依据。 例如key=str.lower不按大小写排序。可选关键字参数。</li></ul><p>排序有两种情况：</p><ul><li>对数字列表的排序： 这会按照自然数从小到大排。</li><li>对字符串列表的排序： 这会按照字符串的ASCII码值排序。</li></ul><p>数字列表排序：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">digits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">345</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">22</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sorted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(digits)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># [6, 22, 345]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认从小到大</span></span></code></pre></div><p>字符串列表排序：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fruits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;grape&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;raspberry&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;apple&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;banana&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认按字符串字符的ASCII码从小到大排</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sorted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fruits)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># [&#39;apple&#39;, &#39;banana&#39;, &#39;grape&#39;, &#39;raspberry&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 根据字符串的长度排序</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sorted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fruits, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># [&#39;grape&#39;, &#39;apple&#39;, &#39;banana&#39;, &#39;raspberry&#39;]</span></span></code></pre></div><p>key还可以是一个函数。</p><p>形参表示每个元素，返回一个值，表示排序依据。</p><p>如下示例，<code>[: :-1]</code>表示字符串逆序。</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fruits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;strawberry&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fig&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;apple&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cherry&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;raspberry&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;banana&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sorted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fruits, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=lambda</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> word: word[::</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># [&#39;banana&#39;, &#39;apple&#39;, &#39;fig&#39;, &#39;raspberry&#39;, &#39;strawberry&#39;, &#39;cherry&#39;]</span></span></code></pre></div>`,15)]))}const g=i(t,[["render",h]]);export{y as __pageData,g as default};
