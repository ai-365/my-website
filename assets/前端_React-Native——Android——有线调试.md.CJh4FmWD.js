import{_ as a,c as t,o as s,ae as i}from"./chunks/framework.rTUm5mJw.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/React-Native——Android——有线调试.md","filePath":"前端/React-Native——Android——有线调试.md"}'),p={name:"前端/React-Native——Android——有线调试.md"};function d(n,e,o,c,_,r){return s(),t("div",null,e[0]||(e[0]=[i('<p>将电脑连接到手机是安卓开发的必备步骤。</p><p>以小米手机为例，进入 “设置—— 我的设备——全部参数与信息” ，连续点击 “MIUI版本” 7次，即可打开开发者选项 。</p><p>进入“设置——更多设置——开发者选项”，开启“USB调试”、“USB安装”、“USB调试（安全设置）”。</p><p>使用数据线连接电脑和手机，会自动触发打开一个弹窗，在弹窗中有“传输照片”、“传输文件”等选项，选择传输文件。</p><p>运行：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  devices</span></span></code></pre></div><p>输出的内容中，手机设备标识符右边的状态是device表示已连接。注意，一定要是device，其它的单词都表示未连接。</p>',7)]))}const v=a(p,[["render",d]]);export{h as __pageData,v as default};
