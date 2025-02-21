import{_ as a,c as n,o as p,ae as e}from"./chunks/framework.rTUm5mJw.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"人工智能/Python——MoviePy——添加音频.md","filePath":"人工智能/Python——MoviePy——添加音频.md"}'),t={name:"人工智能/Python——MoviePy——添加音频.md"};function i(o,s,l,c,_,d){return p(),n("div",null,s[0]||(s[0]=[e(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from moviepy.editor import *</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 加载音频文件</span></span>
<span class="line"><span>audio = AudioFileClip(&quot;music.mp3&quot;).subclip(0, 5)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加音频</span></span>
<span class="line"><span>clip.set_audio(audio)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 导出视频</span></span></code></pre></div>`,1)]))}const m=a(t,[["render",i]]);export{u as __pageData,m as default};
