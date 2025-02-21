import{_ as a,c as n,o as i,ae as p}from"./chunks/framework.rTUm5mJw.js";const o=JSON.parse('{"title":"Java入门","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/Java入门.md","filePath":"Linux/Java入门.md"}'),l={name:"Linux/Java入门.md"};function t(e,s,h,k,r,d){return i(),n("div",null,s[0]||(s[0]=[p(`<h1 id="java入门" tabindex="-1">Java入门 <a class="header-anchor" href="#java入门" aria-label="Permalink to &quot;Java入门&quot;">​</a></h1><h3 id="helloworld" tabindex="-1">HelloWorld <a class="header-anchor" href="#helloworld" aria-label="Permalink to &quot;HelloWorld&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class HelloJava{</span></span>
<span class="line"><span>        public static void main(String[]  args){</span></span>
<span class="line"><span>                System.out.println(&quot;Hello,Java!&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="包和导入" tabindex="-1">包和导入 <a class="header-anchor" href="#包和导入" aria-label="Permalink to &quot;包和导入&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import javax.swing.*;</span></span></code></pre></div><h3 id="浮点类型" tabindex="-1">浮点类型 <a class="header-anchor" href="#浮点类型" aria-label="Permalink to &quot;浮点类型&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>double d = 8.31;</span></span>
<span class="line"><span>float f = 8.31f;</span></span></code></pre></div><h3 id="泛型数组" tabindex="-1">泛型数组 <a class="header-anchor" href="#泛型数组" aria-label="Permalink to &quot;泛型数组&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.*;</span></span>
<span class="line"><span>public class 学习{</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>      ArrayList&lt;Integer&gt; arr = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>      arr.add(1);   </span></span>
<span class="line"><span>      arr.add(2);   </span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      System.out.println(arr);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="var" tabindex="-1">var <a class="header-anchor" href="#var" aria-label="Permalink to &quot;var&quot;">​</a></h3><p>var关键字的意思是，让编译器自己推断数据类型，而且一旦推断出来，那么类型不可改变，例如：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>等价于</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="arraylist" tabindex="-1">ArrayList <a class="header-anchor" href="#arraylist" aria-label="Permalink to &quot;ArrayList&quot;">​</a></h3><p>ArrayList 类是一个可以动态修改的数组，与普通数组的区别就是它是没有固定大小的限制，我们可以添加或删除元素。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ArrayList&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; sites </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ArrayList&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sites.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Google&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sites.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Runoob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sites.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Taobao&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sites.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Weibo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sites);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Google, Runoob, Taobao, Weibo]</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> java.util.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 学习</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ArrayList arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ArrayList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>会出现警告，原因是类型未经过检查。</p><h3 id="hashmap" tabindex="-1">HashMap <a class="header-anchor" href="#hashmap" aria-label="Permalink to &quot;HashMap&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.*;</span></span>
<span class="line"><span>public class 学习{</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>      HashMap m = new HashMap();</span></span>
<span class="line"><span>      m.put(&quot;a&quot;,1);</span></span>
<span class="line"><span>      m.put(&quot;b&quot;,2);</span></span>
<span class="line"><span>      System.out.println(m);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="泛型hashmap" tabindex="-1">泛型HashMap <a class="header-anchor" href="#泛型hashmap" aria-label="Permalink to &quot;泛型HashMap&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.*;</span></span>
<span class="line"><span>public class 学习{</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>      HashMap&lt;String,Integer&gt; m = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>      m.put(&quot;a&quot;,1);</span></span>
<span class="line"><span>      m.put(&quot;b&quot;,2);</span></span>
<span class="line"><span>      System.out.println(m);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;Map&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Map&lt;String,String&gt; map=new HashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>map.put(&quot;2001&quot;, &quot;张三&quot;);</span></span>
<span class="line"><span>map.put(&quot;2002&quot;, &quot;张三&quot;);</span></span>
<span class="line"><span>map.put(&quot;2003&quot;, &quot;李四&quot;);</span></span>
<span class="line"><span>map.put(&quot;2003&quot;, &quot;王五&quot;);//键重复，会覆盖上一个，留下最新的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>System.out.println(map);//{2003=王五, 2002=张三, 2001=张三}</span></span></code></pre></div><h3 id="线程" tabindex="-1">线程 <a class="header-anchor" href="#线程" aria-label="Permalink to &quot;线程&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class 学习{</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>       Runnable r=()-&gt;{</span></span>
<span class="line"><span>        while(true){</span></span>
<span class="line"><span>            System.out.print(&quot;A&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>       };</span></span>
<span class="line"><span>       Thread t = new Thread(r);</span></span>
<span class="line"><span>       t.start();</span></span>
<span class="line"><span>       while(true){</span></span>
<span class="line"><span>            System.out.print(&quot;B&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="读取输入" tabindex="-1">读取输入 <a class="header-anchor" href="#读取输入" aria-label="Permalink to &quot;读取输入&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.*;</span></span>
<span class="line"><span>public class 学习{</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        Scanner in = new Scanner(System.in, &quot;GBK&quot;);</span></span>
<span class="line"><span>        while(true){</span></span>
<span class="line"><span>            String a = in.nextLine();</span></span>
<span class="line"><span>            System.out.println(a);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><a href="#python运行时">Python运行时</a></li></ul>`,30)]))}const g=a(l,[["render",t]]);export{o as __pageData,g as default};
