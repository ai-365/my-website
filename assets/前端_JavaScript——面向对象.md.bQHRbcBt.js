import{_ as s,c as n,o as p,ae as l}from"./chunks/framework.rTUm5mJw.js";const u=JSON.parse('{"title":"面向对象","description":"","frontmatter":{},"headers":[],"relativePath":"前端/JavaScript——面向对象.md","filePath":"前端/JavaScript——面向对象.md"}'),e={name:"前端/JavaScript——面向对象.md"};function i(c,a,t,o,d,r){return p(),n("div",null,a[0]||(a[0]=[l(`<h1 id="面向对象" tabindex="-1">面向对象 <a class="header-anchor" href="#面向对象" aria-label="Permalink to &quot;面向对象&quot;">​</a></h1><h3 id="新建类" tabindex="-1">新建类 <a class="header-anchor" href="#新建类" aria-label="Permalink to &quot;新建类&quot;">​</a></h3><p>使用class关键字新建一个类，示例如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Example{</span></span>
<span class="line"><span>        a = 0;</span></span>
<span class="line"><span>        b = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        function foo(){</span></span>
<span class="line"><span>                console.log(“hello，world”)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class p1 = new Example()</span></span>
<span class="line"><span>p1.a=1</span></span>
<span class="line"><span>p1.b=2</span></span>
<span class="line"><span>p1.foo()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class p2 = new Example()</span></span>
<span class="line"><span>p2.a =&#39;hello&#39;</span></span>
<span class="line"><span>p2.b=&#39;world&#39;</span></span></code></pre></div><p>在上面的代码中，a、b都是实例属性，foo是实例方法。通过new 新建一个实例，然后可以读写属性、方法。</p><h3 id="静态成员" tabindex="-1">静态成员 <a class="header-anchor" href="#静态成员" aria-label="Permalink to &quot;静态成员&quot;">​</a></h3><p>静态成员是属于类，而不属于实例，通过类读取和修改。要设置静态成员，使用static关键字，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Example{</span></span>
<span class="line"><span>        static a = 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Example.a = &quot;hello,world&quot;</span></span>
<span class="line"><span>console.log(Example.a)</span></span></code></pre></div><h3 id="私有属性" tabindex="-1">私有属性 <a class="header-anchor" href="#私有属性" aria-label="Permalink to &quot;私有属性&quot;">​</a></h3><p>普通属性可以通过 <code>实例.属性</code> 的方式获取和修改，而私有成员则不能通过这种方式获取和修改，如果要读写私有成员，只能通过方法。要设置私有属性，使用#符号，无论是初始化还是引用私有属性，都需要使用井号。示例如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>class Example {</span></span>
<span class="line"><span>        a = 0;</span></span>
<span class="line"><span>        #b = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        getB(){</span></span>
<span class="line"><span>                return this.#b</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        setB(newValue){</span></span>
<span class="line"><span>                this.#b = newValue</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const p = new Example()</span></span>
<span class="line"><span>console.log(p.getB())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p.setB(&#39;hello&#39;)</span></span>
<span class="line"><span>console.log(p.getB())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="属性默认值" tabindex="-1">属性默认值 <a class="header-anchor" href="#属性默认值" aria-label="Permalink to &quot;属性默认值&quot;">​</a></h3><p>可以在定义类的时候，给属性一个默认值，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Example{</span></span>
<span class="line"><span>        a = 0;</span></span>
<span class="line"><span>        b = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        function fun1(){</span></span>
<span class="line"><span>                console.log(“hello，world”)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>虽然不给a、b赋默认值也可以通过语法检测，但给属性赋默认值是一个好的编程习惯。</p>`,15)]))}const b=s(e,[["render",i]]);export{u as __pageData,b as default};
