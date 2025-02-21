import{_ as a,c as n,o as e,ae as p}from"./chunks/framework.rTUm5mJw.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"人工智能/Python——MoviePy——画面裁切.md","filePath":"人工智能/Python——MoviePy——画面裁切.md"}'),t={name:"人工智能/Python——MoviePy——画面裁切.md"};function i(o,s,l,c,_,r){return e(),n("div",null,s[0]||(s[0]=[p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from moviepy.editor import *</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clip = VideoFileClip(&#39;./input.mp4&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#画幅裁切</span></span>
<span class="line"><span>clip.crop(x1=0,y1=100,x2=400,y2=600) </span></span>
<span class="line"><span>clip.write_videofile(&#39;output.mp4&#39;)</span></span></code></pre></div>`,1)]))}const h=a(t,[["render",i]]);export{m as __pageData,h as default};
