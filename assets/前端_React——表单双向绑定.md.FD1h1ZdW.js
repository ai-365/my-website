import{_ as n,c as a,o as p,ae as e}from"./chunks/framework.rTUm5mJw.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/React——表单双向绑定.md","filePath":"前端/React——表单双向绑定.md"}'),t={name:"前端/React——表单双向绑定.md"};function l(c,s,i,o,r,_){return p(),a("div",null,s[0]||(s[0]=[e(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import { useState } from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default ()=&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const [msg, setMsg] = useState(&#39;&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 处理输入框的Change事件</span></span>
<span class="line"><span>  // event.target 表示事件发生的源头，这里就是输入框</span></span>
<span class="line"><span>  function handler(event) {</span></span>
<span class="line"><span>    setMsg(event.target.value)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return &lt;&gt;</span></span>
<span class="line"><span>    {/* 输入框内容改变时会不断触发Change事件 */}</span></span>
<span class="line"><span>    &lt;input onInput={handler} /&gt;</span></span>
<span class="line"><span>    &lt;div&gt;输入的内容是：{msg}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/&gt;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,1)]))}const u=n(t,[["render",l]]);export{g as __pageData,u as default};
