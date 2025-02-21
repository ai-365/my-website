import{_ as a,c as n,o as p,ae as i}from"./chunks/framework.rTUm5mJw.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/HTML——段落元素：p.md","filePath":"前端/HTML——段落元素：p.md"}'),t={name:"前端/HTML——段落元素：p.md"};function e(l,s,c,h,d,o){return p(),n("div",null,s[0]||(s[0]=[i(`<p>对于以文本为主的网页来说，最常见的就是段落了，包裹在<code>&lt;p&gt;&lt;/p&gt;</code>中。</p><p>一对标签中的内容就是一段，哪怕在源代码中换行，渲染出的页面也是没有换行的，任何换行、空白行渲染出来都只有一个空格。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;你以为的第一段</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">你以为的第二段</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">你以为的第三段</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>实际上，渲染出来是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>你以为的第一段 你以为的第二段 你以为的第三段</span></span></code></pre></div><p>要想将上面的内容分成真正的三段，只有使用三对<code>&lt;p&gt;&lt;/p&gt;</code>标签。</p>`,6)]))}const E=a(t,[["render",e]]);export{k as __pageData,E as default};
