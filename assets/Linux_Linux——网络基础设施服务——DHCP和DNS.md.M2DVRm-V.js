import{_ as a,c as n,o as p,ae as i}from"./chunks/framework.rTUm5mJw.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/Linux——网络基础设施服务——DHCP和DNS.md","filePath":"Linux/Linux——网络基础设施服务——DHCP和DNS.md"}'),e={name:"Linux/Linux——网络基础设施服务——DHCP和DNS.md"};function l(t,s,o,c,d,m){return p(),n("div",null,s[0]||(s[0]=[i(`<h2 id="dhcp" tabindex="-1">DHCP <a class="header-anchor" href="#dhcp" aria-label="Permalink to &quot;DHCP&quot;">​</a></h2><p>DHCP，Dynamic Host Configuration Protocol ，动态主机配置协议。DHCP服务器的主要工作，就是自动将正确的网络参数分配给网络中的每台主机，让客户端主机可以在联网的时候立即自动配置好网络的参数值，这些参数包括：IP、子网掩码、网段、网关、DNS地址等。现实生活中，我们的笔记本连上网络后，是不是很少去手动设置这些参数，而是直接就可以上网了，这就是因为DHCP服务器已经为我们配置好了。</p><p>DHCP为客户端提供的信息至少包括以下内容：</p><ul><li>IP地址</li><li>子网掩码</li><li>租赁时间：客户端并不是一直拥有该IP地址，当时间到期后必须再次请求。默认情况下，DHCP服务器会记住客户端并分配相同的地址。</li><li>域名服务器（DNS）地址：通常DHCP服务器会给一到三个DNS地址供客户端使用。</li><li>默认网关。为了让一个网络请求离开本地网络，必须知道网络上的哪个节点提供了到本地的网络之外地址的路由，这个节点就是网关。</li></ul><h2 id="dns" tabindex="-1">DNS <a class="header-anchor" href="#dns" aria-label="Permalink to &quot;DNS&quot;">​</a></h2><p>实际上，要使一台主机连接到另一台主机的服务，必须知道IP地址和端口。端口的问题好说，如果是用浏览器上网，那么基本就是80端口，那么IP地址呢？为什么我们并不知道百度的IP地址却可以访问百度？这就用到了一种网络基础设施服务——DNS。</p><p>DNS，Domain Name System，域名系统，通过将由英文字母和数字组成的主机名转化成IP地址，使得数据包可以到达目的地。这个DNS也是网络中的一台主机，只是专门为我们提供DNS服务，DNS的地址是由DHCP服务器配置的。</p><p>例如，访问baidu.com，我们电脑的缓存中没有查到baidu.com对应的IP地址，此时就将baidu.com发送给DNS主机，DNS主机分析该路径的组成，再通过与全球其它的DNS服务器递归的查找和询问，最终得到了baidu.com的IP地址是xx.xx.xx.xx，再返回给我们的电脑，电脑拿到这个确定的IP地址后，就能够到达百度的服务器了。</p><p>这种询问过程的举例如下，例如访问baidu.com：</p><ul><li>我们的电脑将baidu.com发送给DNS服务器8.8.8.8</li><li>DNS服务器先去询问全球域名根服务器（/），得到管理com的服务器的IP地址</li><li>DNS服务器再去询问管理com的服务器，得到baidu.com的服务器的IP地址</li><li>DNS拿到具体的IP地址后，返回给我们的电脑。</li></ul><p>要知道具体是哪个IP地址，可以使用ping命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PS:&gt; ping baidu.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Pinging baidu.com [39.156.66.10] with 32 bytes of data:</span></span>
<span class="line"><span>Reply from 39.156.66.10: bytes=32 time=25ms TTL=48</span></span>
<span class="line"><span>Reply from 39.156.66.10: bytes=32 time=24ms TTL=48</span></span>
<span class="line"><span>Reply from 39.156.66.10: bytes=32 time=24ms TTL=48</span></span>
<span class="line"><span>Reply from 39.156.66.10: bytes=32 time=27ms TTL=48</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Ping statistics for 39.156.66.10:</span></span>
<span class="line"><span>    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),</span></span>
<span class="line"><span>Approximate round trip times in milli-seconds:</span></span>
<span class="line"><span>    Minimum = 24ms, Maximum = 27ms, Average = 25ms</span></span></code></pre></div><p>也可以使用nslookup命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PS:&gt; nslookup baidu.com</span></span>
<span class="line"><span>Server:  public1.114dns.com</span></span>
<span class="line"><span>Address:  114.114.114.114</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Non-authoritative answer:</span></span>
<span class="line"><span>Name:    baidu.com</span></span>
<span class="line"><span>Addresses:  110.242.68.66</span></span>
<span class="line"><span>          39.156.66.10</span></span></code></pre></div>`,14)]))}const P=a(e,[["render",l]]);export{u as __pageData,P as default};
