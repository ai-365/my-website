import{_ as a,c as t,o as i,ae as e}from"./chunks/framework.rTUm5mJw.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/React/React——新建React项目.md","filePath":"前端/React/React——新建React项目.md"}'),p={name:"前端/React/React——新建React项目.md"};function n(l,s,c,h,r,d){return i(),t("div",null,s[0]||(s[0]=[e(`<p>运行如下三行命令即可快速新建并启动一个React 项目：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npx create-react-app my-app</span></span>
<span class="line"><span>cd my-app</span></span>
<span class="line"><span>npm run start</span></span></code></pre></div><p>这会初始化一个新项目，my-app就是项目和文件夹的名称，然后下载相关的依赖，运行 npm run start 命令会自动打开浏览器，呈现React项目默认页面。</p><p>React主要的入口文件包括：</p><ul><li>./src/App.js ：这个文件是根组件，其它的组件都会被导入到这里。</li><li>./src/index.js： 入口脚本。作用是导入react包，挂载和渲染根组件到页面的某个元素上。</li><li>./public/index.html： 入口页面。有一个id为root的div，React将会挂载到这个元素下面。</li></ul><p>现在，编辑./src/App.js文件内容如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello, React !&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>浏览器会自动刷新为新的内容。</p>`,8)]))}const _=a(p,[["render",n]]);export{k as __pageData,_ as default};
