import{_ as a,c as t,o as e,ae as n}from"./chunks/framework.rTUm5mJw.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"人工智能/Python——文件系统——路径处理.md","filePath":"人工智能/Python——文件系统——路径处理.md"}'),p={name:"人工智能/Python——文件系统——路径处理.md"};function i(o,s,l,c,d,h){return e(),t("div",null,s[0]||(s[0]=[n(`<p>相对路径到绝对路径的转化，使用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>os.path.abspath(r&#39;Test&#39;)</span></span>
<span class="line"><span># &#39;D:\\\\Test&#39;</span></span></code></pre></div><p>如下为获取路径的基础路径：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>os.path.basename(r&quot;D:\\Test\\file.txt&quot;)</span></span>
<span class="line"><span># &#39;file.txt&#39;</span></span></code></pre></div><p>如下获取路径所在的文件夹，即去掉最后一个路径部分：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>os.path.dirname(r&quot;D:\\Test\\file.txt&quot;)</span></span>
<span class="line"><span># &#39;D:\\\\Test&#39;</span></span></code></pre></div><p>使用join()合并多段路径：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>os.path.join(r&quot;D:\\Test&quot;, r&quot;Test\\file.txt&quot;)</span></span>
<span class="line"><span># &#39;D:\\\\Test\\\\Test\\\\file.txt&#39;</span></span></code></pre></div><p>如下将拆分文件名和后缀，返回一个元组：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>os.path.splitext(r&quot;D:\\Test\\file.txt&quot;)</span></span>
<span class="line"><span># (&#39;D:\\\\Test\\\\file&#39;, &#39;.txt&#39;)</span></span></code></pre></div>`,10)]))}const _=a(p,[["render",i]]);export{u as __pageData,_ as default};
