import{_ as n,c as a,o as p,ae as e}from"./chunks/framework.rTUm5mJw.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/CSS——TailwindCSS——媒体查询.md","filePath":"前端/CSS——TailwindCSS——媒体查询.md"}'),l={name:"前端/CSS——TailwindCSS——媒体查询.md"};function i(c,s,t,d,o,r){return p(),a("div",null,s[0]||(s[0]=[e(`<p>在tailwindcss中，一般而言，默认是手机竖直状态下的屏幕宽度，如果要在手机横屏、大屏上使用不同样式，加前缀md：。</p><p>媒体查询一般会添加到样式表的底部，对css优先级的覆盖</p><p>移动端-&gt;pc端的适配规则：min-width从小到大</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 注意 700 和 1000 上下的顺序问题</span></span>
<span class="line"><span>@media (min-width:700px) {</span></span>
<span class="line"><span>    .box {</span></span>
<span class="line"><span>        background: green;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>@media (min-width:1000px) {</span></span>
<span class="line"><span>    .box {</span></span>
<span class="line"><span>        background: red;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>当宽度大于等于700px</span></span>
<span class="line"><span>@media (min-width: 700px) {</span></span>
<span class="line"><span>    .box {</span></span>
<span class="line"><span>        width: 200px;</span></span>
<span class="line"><span>        height: 200px;</span></span>
<span class="line"><span>        background-color: skyblue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>当宽度小于等于960时</span></span>
<span class="line"><span>@media (max-width: 960px) {</span></span>
<span class="line"><span>    .box {</span></span>
<span class="line"><span>        width: 200px;</span></span>
<span class="line"><span>        height: 200px;</span></span>
<span class="line"><span>        background-color: skyblue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>} */</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>当竖屏时</span></span>
<span class="line"><span>media (orientation: portrait) {</span></span>
<span class="line"><span>    .box {</span></span>
<span class="line"><span>        width: 200px;</span></span>
<span class="line"><span>        height: 200px;</span></span>
<span class="line"><span>        background-color: skyblue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>当横屏时</span></span>
<span class="line"><span>@media (orientation: landscape) {</span></span>
<span class="line"><span>    .box {</span></span>
<span class="line"><span>        width: 1000px;</span></span>
<span class="line"><span>        height: 200px;</span></span>
<span class="line"><span>        background-color: red;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@media screen and (orientation: landscape) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 横向样式定义 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media screen and (orientation: portrait) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 纵向样式定义 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div>`,7)]))}const b=n(l,[["render",i]]);export{g as __pageData,b as default};
