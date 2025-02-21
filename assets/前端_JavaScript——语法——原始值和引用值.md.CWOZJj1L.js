import{_ as i,c as t,o as a,ae as e}from"./chunks/framework.rTUm5mJw.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/JavaScript——语法——原始值和引用值.md","filePath":"前端/JavaScript——语法——原始值和引用值.md"}'),_={name:"前端/JavaScript——语法——原始值和引用值.md"};function p(r,l,n,o,c,s){return a(),t("div",null,l[0]||(l[0]=[e("<p>Javascript的数据类型大体上分为两类：原始类型和引用类型。原始类型的数据值保存于栈中，引用类型的值保存于堆中，这是这两种类型最根本的区别，也决定了后续对这两种类型的赋值、修改、拷贝操作的不同。</p><p>原始类型保存于栈中，它是一种先进后出的数据结构，从管理角度来讲，它是由操作系统分配管理的，也就是说它是规整的，内存的大小在申请之后不会发生变化。因此，它不会出现碎片化，并且读取速度非常的快，因此基本的原始数据类型就非常适合存放于栈中。</p><p>原始数据类型分为如下几类，后面我们会一一详细讲到：</p><ul><li>数值</li><li>字符串</li><li>布尔值</li><li>null</li><li>undefined</li><li>Symbol</li></ul><p>相比于栈的固定大小，堆的分配非常自由，它是由程序员自己去分配的，比如程序员考虑到某些情况需要更多的内存，它就可以在堆上面申请一个足够大的内存。除此之外，内存的分配非常自由，它并不要求是连续的内存，只要有空间，都可以被拿来分配。不过这样就会导致产生很多碎片，不利于高速读取，因此堆的操作的速度要比栈慢很多。堆主要存放的是大小不固定的内存结构，因此，对象、数组、结构体等引用类型经常被存放到堆上。</p><p>基于栈的存储特性，当我们为一个引用类型赋值时，本质上赋予的是一个指针，也叫内存地址，这才导致了声明方式和拷贝方式与原始类型的不同。</p><p>引用数据类型分为如下两个大类：基本引用类型、集合引用类型。</p><p>基本引用类型又分为：</p><ul><li>原始值包装类型：包括Number、String、Boolean。</li><li>内置引用类型：包括Date、RegExp、Math等。</li></ul><p>集合引用类型是我们经常使用的类型，分为：</p><ul><li>对象（狭义的）</li><li>数组</li><li>集合（弱集合）</li><li>映射（弱映射）</li></ul>",11)]))}const m=i(_,[["render",p]]);export{d as __pageData,m as default};
