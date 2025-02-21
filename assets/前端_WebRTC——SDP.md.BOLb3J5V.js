import{_ as s,c as n,o as p,ae as e}from"./chunks/framework.rTUm5mJw.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/WebRTC——SDP.md","filePath":"前端/WebRTC——SDP.md"}'),l={name:"前端/WebRTC——SDP.md"};function c(i,a,t,r,o,d){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="sdp" tabindex="-1">SDP <a class="header-anchor" href="#sdp" aria-label="Permalink to &quot;SDP&quot;">​</a></h2><p>SDP是基于文本的描述协议，描述了自己的媒体信息、能接受的媒体信息。SDP不是网络协议，而是一种在用户之间传递媒体信息所遵循的标准格式，就好比markdown标准一样，规定了标题怎么写、加粗怎么加，大家都按照这个语法写文件即可，这样别人也能看懂你的markdown源码。SDP文本可以附加在HTTP报文的body中传给对方。如下是一个SDP示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>v=0</span></span>
<span class="line"><span>o=- 2397106153131073818 2 IN IP4 127.0.0.1</span></span>
<span class="line"><span>s=-</span></span>
<span class="line"><span>t=0 0</span></span>
<span class="line"><span>a=group:BUNDLE video</span></span>
<span class="line"><span>a=msid-semantic: WMS gLzQPGuagv3xXolwPiiGAULOwOLNItvl8LyS</span></span>
<span class="line"><span>m=video 9 UDP/TLS/RTP/SAVPF 96 97</span></span>
<span class="line"><span>c=IN IP4 0.0.0.0</span></span>
<span class="line"><span>a=rtcp:9 IN IP4 0.0.0.0</span></span>
<span class="line"><span>a=ice-ufrag:l5KU</span></span>
<span class="line"><span>a=ice-pwd:+Sxmm3PoJUERpeHYL0HW4/T9</span></span>
<span class="line"><span>a=ice-options:trickle</span></span>
<span class="line"><span>a=fingerprint:sha-256 7C:93:85:40:01:07:91:BE:DA:64:A0:37:7E:61:CB:9D:91:9B:44:F6:C9:AC:3B:37:1C:00:15:4C:5A:B5:67:74</span></span>
<span class="line"><span>a=setup:actpass</span></span>
<span class="line"><span>a=mid:video</span></span>
<span class="line"><span>a=sendrecv</span></span>
<span class="line"><span>a=rtcp-mux</span></span>
<span class="line"><span>a=rtcp-rsize</span></span>
<span class="line"><span>a=rtpmap:96 VP8/90000</span></span>
<span class="line"><span>a=rtcp-fb:96 goog-remb</span></span>
<span class="line"><span>a=rtcp-fb:96 transport-cc</span></span>
<span class="line"><span>a=rtcp-fb:96 ccm fir</span></span>
<span class="line"><span>a=rtcp-fb:96 nack</span></span>
<span class="line"><span>a=rtcp-fb:96 nack pli</span></span>
<span class="line"><span>a=rtpmap:97 rtx/90000</span></span>
<span class="line"><span>a=fmtp:97 apt=96</span></span>
<span class="line"><span>a=ssrc-group:FID 2527104241</span></span>
<span class="line"><span>a=ssrc:2527104241 cname:JPmKBgFHH5YVFyaJ</span></span>
<span class="line"><span>a=ssrc:2527104241 msid:gLzQPGuagv3xXolwPiiGAULOwOLNItvl8LyS c7072509-df47-4828-ad03-7d0274585a56</span></span>
<span class="line"><span>a=ssrc:2527104241 mslabel:gLzQPGuagv3xXolwPiiGAULOwOLNItvl8LyS</span></span>
<span class="line"><span>a=ssrc:2527104241 label:c7072509-df47-4828-ad03-7d0274585a56</span></span></code></pre></div>`,3)]))}const _=s(l,[["render",c]]);export{m as __pageData,_ as default};
