import{_ as e,c as s,o as t,ae as n}from"./chunks/framework.rTUm5mJw.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/Node.js/Node.js——zx.js——内置函数.md","filePath":"前端/Node.js/Node.js——zx.js——内置函数.md"}'),i={name:"前端/Node.js/Node.js——zx.js——内置函数.md"};function o(p,a,l,c,d,h){return t(),s("div",null,a[0]||(a[0]=[n('<p>zx.js有一些内置函数，名称和作用基本和Linux的Shell命令类似。内置函数不需要使用import关键字导入，可以直接使用。</p><h2 id="cd" tabindex="-1">cd（） <a class="header-anchor" href="#cd" aria-label="Permalink to &quot;cd（）&quot;">​</a></h2><p>该函数允许更改当前的工作目录，类似于Linux的cd命令。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd(&#39;/tmp&#39;)</span></span>\n<span class="line"><span>await $`pwd` // outputs /tmp</span></span></code></pre></div><h2 id="fetch" tabindex="-1">fetch（） <a class="header-anchor" href="#fetch" aria-label="Permalink to &quot;fetch（）&quot;">​</a></h2><p>该函数用于执行http网络请求，具体用法可参考JavaScript内置的fetch API用法。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let response = await fetch(&#39;https://wttr.in&#39;){  console.log(await response.text())}</span></span></code></pre></div><h2 id="question" tabindex="-1">question（） <a class="header-anchor" href="#question" aria-label="Permalink to &quot;question（）&quot;">​</a></h2><p>该函数用于提示用户输入，以便为变量取得用户设定的值，类似于Linux的read命令。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const name = question(&#39;请输入你的名字：&#39;)</span></span></code></pre></div><h2 id="chalk" tabindex="-1">chalk() <a class="header-anchor" href="#chalk" aria-label="Permalink to &quot;chalk()&quot;">​</a></h2><p>该函数用于修改终端输出的文字颜色。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>console.log(chalk.blue(&#39;This is blue&#39;));</span></span></code></pre></div>',13)]))}const _=e(i,[["render",o]]);export{u as __pageData,_ as default};
