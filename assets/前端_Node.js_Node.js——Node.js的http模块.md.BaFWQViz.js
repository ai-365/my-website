import{_ as i,c as e,o as a,ae as n}from"./chunks/framework.rTUm5mJw.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/Node.js/Node.js——Node.js的http模块.md","filePath":"前端/Node.js/Node.js——Node.js的http模块.md"}'),t={name:"前端/Node.js/Node.js——Node.js的http模块.md"};function l(h,s,p,r,k,d){return a(),e("div",null,s[0]||(s[0]=[n(`<h2 id="response的end和write区别" tabindex="-1">response的end和write区别 <a class="header-anchor" href="#response的end和write区别" aria-label="Permalink to &quot;response的end和write区别&quot;">​</a></h2><p>end向客户端发送消息然后终止响应，对于每个请求，都要调用end方法，否则客户端会一直陷入等待。</p><p>write 写入响应消息。</p><p>也就是说可以没有write，但是不能没有end。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createServer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeHead</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;h1&gt;hello&lt;/h1&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;h1&gt;hello&lt;/h1&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8080</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;running on http://localhost:8080&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="request对象" tabindex="-1">request对象 <a class="header-anchor" href="#request对象" aria-label="Permalink to &quot;request对象&quot;">​</a></h2><p>request.url 路由，排除了https、主机名剩下的部分 例如/ /login</p><p>request.method 请求方法</p><p>内置URL模块解析各个部分。</p><p>// req.url 是客户端的请求url地址</p><p>通过on事件监听来获取数据</p><h2 id="http-serverresponse对象上定义的事件和方法" tabindex="-1">http.serverResponse对象上定义的事件和方法 <a class="header-anchor" href="#http-serverresponse对象上定义的事件和方法" aria-label="Permalink to &quot;http.serverResponse对象上定义的事件和方法&quot;">​</a></h2><ul><li>Event:&#39;close&#39; : 如果在调用end方法前连接被关闭，则触发该事件</li><li>Event:&#39;finish&#39; : 发送响应消息后触发</li><li>response.addTrailers(headers) : 追加响应头</li><li>response.connection 底层的socket对</li><li><code>response.end([data][,encoding][,callback])</code> 向客户端发送消息，然后终止响应</li><li>response.finished 布尔值,响应是否结束</li><li>response.getHeadeer(name) 获取已经设置的响应头</li><li>response.getHeaderNames() 获取已设置的响应头列表键(键值)</li><li>response. getHeaders 获取已设置的Header列表（完整内容）</li><li>response. hasHeader(name)：判断是否设置了header</li><li>response. headersSent 布尔值，是否已经发送了header</li><li>response.removeHeader(name) 移除已经设置的header</li><li>response. sendDate 布尔值，是否在header中增加date</li><li>response. setHeader(name,value) 设置header</li><li><code>response.setHeader(&#39;Set-Cookie&#39;, [&#39;key1=value1&#39; , &#39;key2=value2&#39;])</code> 设置cookie</li><li><code> response. setTimeout(msecsp[,callback])</code> 设置socket 超时时间</li><li>response. socket 底层的socket对象</li><li>response. statusCode 设置状态码</li><li>response. statusMessage 设置状态信息</li><li><code>response.write(chunk[,encoding][,callback]) </code> 写入响应信息</li><li>response.writeContinue() 发送HTTP/1.1 100 Continue</li><li><code>response.writeHead(statusCode[,statusMessage][,headers])</code> 向客户端发送响应头</li><li>response.writeProcessing() 发送HTTP/1.1 102 Processing</li></ul>`,13)]))}const g=i(t,[["render",l]]);export{E as __pageData,g as default};
