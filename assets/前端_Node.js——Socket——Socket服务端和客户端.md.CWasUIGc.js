import{_ as s,c as n,o as e,ae as t}from"./chunks/framework.rTUm5mJw.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/Node.js——Socket——Socket服务端和客户端.md","filePath":"前端/Node.js——Socket——Socket服务端和客户端.md"}'),p={name:"前端/Node.js——Socket——Socket服务端和客户端.md"};function o(c,a,l,i,r,d){return e(),n("div",null,a[0]||(a[0]=[t(`<h2 id="socket服务端" tabindex="-1">Socket服务端 <a class="header-anchor" href="#socket服务端" aria-label="Permalink to &quot;Socket服务端&quot;">​</a></h2><p>Socket通信的服务端代码示例如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const net = require(&#39;net&#39;)</span></span>
<span class="line"><span>const server = net.createServer()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 监听客户端的连接</span></span>
<span class="line"><span>server.on(&quot;connection&quot;, client =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 监听客户端的消息：data事件</span></span>
<span class="line"><span>    client.on(&quot;data&quot;, data =&gt; {</span></span>
<span class="line"><span>        console.log(data.toString().trim())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 发送给客户端</span></span>
<span class="line"><span>        client.write(&#39;服务器已收到&#39;)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>server.listen(8888, () =&gt; console.log(&#39;服务器已启动&#39;))</span></span></code></pre></div><h2 id="socket客户端" tabindex="-1">Socket客户端 <a class="header-anchor" href="#socket客户端" aria-label="Permalink to &quot;Socket客户端&quot;">​</a></h2><p>Socket通信的客户端使用Node.js实现，代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const net = require(&#39;net&#39;)</span></span>
<span class="line"><span>const client = net.createConnection({host:&#39;127.0.0.1&#39;,port:8888})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 监听客户端命令行的输入：data事件，发送给服务端</span></span>
<span class="line"><span>process.stdin.on(&#39;data&#39;,data=&gt;client.write(data.toString()))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 监听服务端的消息：data事件</span></span>
<span class="line"><span>client.on(&#39;data&#39;,data=&gt;console.log(data.toString().trim()))</span></span></code></pre></div>`,6)]))}const h=s(p,[["render",o]]);export{k as __pageData,h as default};
