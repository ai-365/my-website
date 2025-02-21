import{_ as a,c as n,o as e,ae as p}from"./chunks/framework.rTUm5mJw.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/React-Native/Android——签名.md","filePath":"前端/React-Native/Android——签名.md"}'),l={name:"前端/React-Native/Android——签名.md"};function i(t,s,o,d,r,c){return e(),n("div",null,s[0]||(s[0]=[p(`<p>在构建安卓apk时，为apk签名之后才能提交到应用商店。</p><p>首先需要使用keytool命令生成密钥文件，keytool命令位于JDK安装目录的bin目录下，在安装JDK时已经将该目录添加到PATH环境变量中了。</p><p>进入到项目的android/app/ 目录下，运行如下命令，这会在当前目录生成密钥文件release.keystore：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>keytool -genkey -v -keystore release.keystore -alias release -keyalg RSA -keysize 2048 -validity 10000</span></span></code></pre></div><p>然后编辑项目的android/app 目录下的build.gradle，新增release代码段如下所示，storePassword和keyPassword是运行keytool时输入的密码。然后在buildTypes的release代码段中，将debug改成release。修改后的代码部分内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>signingConfigs {</span></span>
<span class="line"><span>        release {</span></span>
<span class="line"><span>            storeFile file(&#39;release.keystore&#39;)</span></span>
<span class="line"><span>            storePassword &#39;android&#39;</span></span>
<span class="line"><span>            keyAlias &#39;release&#39;</span></span>
<span class="line"><span>            keyPassword &#39;android&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        debug {</span></span>
<span class="line"><span>            storeFile file(&#39;debug.keystore&#39;)</span></span>
<span class="line"><span>            storePassword &#39;android&#39;</span></span>
<span class="line"><span>            keyAlias &#39;androiddebugkey&#39;</span></span>
<span class="line"><span>            keyPassword &#39;android&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>buildTypes {</span></span>
<span class="line"><span>          // ...</span></span>
<span class="line"><span>   release {</span></span>
<span class="line"><span>       signingConfig signingConfigs.release</span></span>
<span class="line"><span>         // ....</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,6)]))}const y=a(l,[["render",i]]);export{k as __pageData,y as default};
