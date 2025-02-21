import{_ as n,c as a,o as p,ae as e}from"./chunks/framework.rTUm5mJw.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/React/React——任意组件Redux通信.md","filePath":"前端/React/React——任意组件Redux通信.md"}'),t={name:"前端/React/React——任意组件Redux通信.md"};function l(i,s,c,o,r,d){return p(),a("div",null,s[0]||(s[0]=[e(`<p>首先，定义store仓库：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 引入createStore</span></span>
<span class="line"><span>import {createStore} from &#39;redux&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义修改器</span></span>
<span class="line"><span>// state表示当前状态</span></span>
<span class="line"><span>// action表示携带通信数据的事件</span></span>
<span class="line"><span>function reduce(state,action){</span></span>
<span class="line"><span>    // 数据改变了，被赋予了事件的新值payload</span></span>
<span class="line"><span>    // payload命名只是习惯，可以是其它名称</span></span>
<span class="line"><span>    state.data = action.payload</span></span>
<span class="line"><span>    // 返回一个新的状态</span></span>
<span class="line"><span>    return state</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 传入修改器定义中心仓库Store</span></span>
<span class="line"><span>// 第二个参数表示state初始值</span></span>
<span class="line"><span>// 注意，一定要定义初始值</span></span>
<span class="line"><span>const store = createStore(reduce,{data:&#39;&#39;})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default store</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Store和state的区别：</span></span>
<span class="line"><span>// Store是仓库对象</span></span>
<span class="line"><span>// state是仓库对象的某一时刻的数据快照</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Store的三大核心用法:</span></span>
<span class="line"><span>// dispatch()</span></span>
<span class="line"><span>// subscribe()</span></span>
<span class="line"><span>// getState()</span></span></code></pre></div><p>然后，定义事件触发端：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Store from &quot;./定义Store仓库&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default ()=&gt;{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    function handler(event){</span></span>
<span class="line"><span>        // 只要输入框内容改变就会触发，输入内容作为action的payload</span></span>
<span class="line"><span>        Store.dispatch({type:&#39;msg&#39;,payload:event.target.value})</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return &lt;&gt;</span></span>
<span class="line"><span>        &lt;h2&gt;事件触发端：&lt;/h2&gt;</span></span>
<span class="line"><span>        请输入:&lt;input autoFocus id=&quot;input&quot; onInput={handler}/&gt;&lt;br/&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后，定义事件接收端：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useState } from &quot;react&quot;;</span></span>
<span class="line"><span>import Store from &quot;./定义Store仓库&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const style={</span></span>
<span class="line"><span>    width:&#39;300px&#39;,</span></span>
<span class="line"><span>    height:&#39;100px&#39;,</span></span>
<span class="line"><span>    background:&#39;hsl(90,50%,90%)&#39;,</span></span>
<span class="line"><span>    padding:&#39;10px&#39;,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default ()=&gt;{</span></span>
<span class="line"><span>    const [info,setInfo] = useState(&#39;&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 中心仓库监听变化，一旦数据更新则执行函数</span></span>
<span class="line"><span>    // getState()方法获取最新的数据</span></span>
<span class="line"><span>    Store.subscribe(()=&gt;setInfo(Store.getState().data))</span></span>
<span class="line"><span>    return &lt;&gt;</span></span>
<span class="line"><span>        &lt;h2&gt;事件接收端：&lt;/h2&gt;</span></span>
<span class="line"><span>        &lt;div style={style}&gt;{info}&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,6)]))}const h=n(t,[["render",l]]);export{g as __pageData,h as default};
