import{_ as a,c as i,o as e,ae as t}from"./chunks/framework.rTUm5mJw.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/React-Native/使用Gradle打包安卓Apk.md","filePath":"前端/React-Native/使用Gradle打包安卓Apk.md"}'),p={name:"前端/React-Native/使用Gradle打包安卓Apk.md"};function l(n,s,d,h,r,k){return e(),i("div",null,s[0]||(s[0]=[t('<p><strong>打包安卓apk</strong></p><p>首先使用USB或无线的方式连接手机与电脑，然后运行如下命令开始安卓的调试：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android</span></span></code></pre></div><p>这会打开Metro程序，这个程序会实时监控源文件的修改，并实时重新编译安卓App。</p><p>源代码编写完成后，就可以构建apk了。首先进入android子项目中：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android</span></span></code></pre></div><p>然后运行如下命令开始打包apk：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">gradlew.bat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> assemble</span></span></code></pre></div><p>实际上gradlew.bat 还有很多其它子命令，表示不同的任务，使用如下命令查看：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">gradlew.bat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tasks</span></span></code></pre></div><p>比较常用的有三个命令：</p><ul><li>.\\gradlew.bat assemble： 打包成apk文件，国内应用商店使用这个文件。</li><li>.\\gradlew.bat bundle： 打包成aar文件，谷歌应用商店使用这个文件。</li><li>.\\gradlew.bat build： 除了打包成安装包，还会进行测试等工作。</li></ul><p>打包完成后，在./android/app/build/outputs/apk/release文件夹下，可以找到app-release.apk文件。将这个文件拷贝到手机安装即可。不过，由于app没有签名，会提示不能直接安装，忽略风险继续安装即可。</p>',13)]))}const g=a(p,[["render",l]]);export{c as __pageData,g as default};
