import{_ as s,c as p,o as e,ae as n}from"./chunks/framework.rTUm5mJw.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/React-Native/Gradle.md","filePath":"前端/React-Native/Gradle.md"}'),l={name:"前端/React-Native/Gradle.md"};function r(i,a,t,d,o,g){return e(),p("div",null,a[0]||(a[0]=[n(`<p><strong>gradle简介</strong></p><p>gradle是React Native和Flutter调试、构建安卓App的打包工具。gradle可以简单的类比为前端的webpack，webpack将源文件打包成HTML、CSS、JavaScript，而gradle将源文件打包成apk或aar（Android Assemble Bundle）。</p><p>React Native项目的android子项目的文件结构如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.gradle </span></span>
<span class="line"><span>app</span></span>
<span class="line"><span>gradle</span></span>
<span class="line"><span>        └─wrapper</span></span>
<span class="line"><span>                └─gradle-wrapper.jar</span></span>
<span class="line"><span>                └─gradle-wrapper.propertier</span></span>
<span class="line"><span>build.gradle</span></span>
<span class="line"><span>gradle.properties</span></span>
<span class="line"><span>gradlew</span></span>
<span class="line"><span>gradlew.bat</span></span>
<span class="line"><span>settings.gradle</span></span></code></pre></div><p>每个文件的含义如下：</p><ul><li>.gradle : gradle本地配置</li><li>app：apk的输出目录</li><li>gradle/wrapper/gradle-wrapper.propertier： gradle-wrapper的配置文件</li><li>gradle/wrapper/gradle-wrapper.jar： 与gradle-wrapper.propertier对应</li><li>build.gradle ： gradle项目的配置文件</li><li>gradle.properties： gradle项目的配置文件</li><li>gradlew： Linux、MacOS平台构建安卓app时运行的脚本</li><li>gradlew.bat： Windows平台构建安卓app时运行的脚本</li><li>settings.gradle： gradle项目的配置文件</li></ul><p><strong>gradle和gradle-wrapper的区别</strong></p><p>gradle是一个全局、通用的构建工具，而gradle-wrapper是在项目本地目录使用的构建工具。</p><p>对于React Native或Flutter而言，并不需要使用gradle，直接运行gradlew.bat脚本即可，gradlew就是gradle-wrapper对应的脚本工具。</p><p><strong>添加国内镜像仓库</strong></p><p>换源几乎是包管理器的必备操作。有些软件包的仓库在国内是无法访问的，因此需要增加国内的镜像仓库，实际上只需要改两个文件：</p><ul><li>./android/gradle/wrapper/gradle-wrapper.properties</li><li>./android/build.gradle</li></ul><p>下面依次说明怎么修改。</p><p>要修改的第一个文件是gradle-wrapper.properties，只需要修改distributionUrl的那一行，把后面的链接改成国内阿里云的，文件是gradle-8.6-all.zip，注意版本。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>distributionBase=GRADLE_USER_HOME</span></span>
<span class="line"><span>distributionPath=wrapper/dists</span></span>
<span class="line"><span>distributionUrl=https://mirrors.aliyun.com/macports/distfiles/gradle/gradle-8.6-all.zip</span></span>
<span class="line"><span>networkTimeout=10000</span></span>
<span class="line"><span>validateDistributionUrl=true</span></span>
<span class="line"><span>zipStoreBase=GRADLE_USER_HOME</span></span>
<span class="line"><span>zipStorePath=wrapper/dists</span></span></code></pre></div><p>这里补充说明一下每一行的含义：</p><ul><li>distributionBase ： gradle的根目录。GRADLE_USER_HOME默认为家目录下的.gradle文件夹，保持默认，不要修改。</li><li>distributionPath ：gradle的路径，与上面的根目录组合就是gradle的实际位置。</li><li>zipStoreBase和zipStorePath ： 第三方工具的放置位置。</li></ul><p>要修改的第二个文件是build.gradle。这里面的repositories部分定义了gradle应该去哪里下载第三方插件，默认内容是google()和mavenCentral()两个国外仓库。</p><p>这两个仓库需要使用挂代理才能使用，但是不能删除，因为有些插件的有些版本国内的镜像仓库并没有，必须要去这里下载。所以保留这两个仓库，在后面添加三个仓库，修改后的内容是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>repositories {</span></span>
<span class="line"><span>     google()</span></span>
<span class="line"><span>     mavenCentral()</span></span>
<span class="line"><span>     maven { url &#39;https://maven.aliyun.com/repository/google&#39; }</span></span>
<span class="line"><span>     maven { url &#39;https://maven.aliyun.com/repository/jcenter&#39; }</span></span>
<span class="line"><span>     maven { url &#39;https://maven.aliyun.com/nexus/content/groups/public&#39;}</span></span>
<span class="line"><span>    }</span></span></code></pre></div>`,20)]))}const b=s(l,[["render",r]]);export{u as __pageData,b as default};
