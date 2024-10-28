<p id="top" style="font-size:48px;color:green; font-weight:bolder;">Frontend</p>

<p><a href="#top" style="position:fixed;">回到顶部</a></p>

目录：
- [DOM](#dom)
- [样式优先级](#样式优先级)
- [选择器](#选择器)
- [文字样式](#文字样式)


# DOM 

- [窗口尺寸](#窗口尺寸)
- [窗口事件](#窗口事件)
- [使用document获取元素对象](#使用document获取元素对象)
  - [预置元素](#预置元素)
  - [document.querySelector()](#documentqueryselector)
  - [document.querySelectorAll()](#documentqueryselectorall)
  - [document.getElementById()](#documentgetelementbyid)
  - [document.getElementsByTagName()](#documentgetelementsbytagname)
  - [getElementsByClassName()](#getelementsbyclassname)
- [使用innerHTML属性设置元素内容](#使用innerhtml属性设置元素内容)
- [添加元素](#添加元素)
- [复制元素](#复制元素)
- [删除元素](#删除元素)
- [元素、节点的区别](#元素节点的区别)
- [节点属性](#节点属性)



##   窗口尺寸

关于窗口尺寸，window对象有如下属性：
- innerHeight： 获取窗口内容区域的高度，返回一个数值。
- innerWidth： 获取窗口内容区域的宽度。
- outerHeight： 获取窗口的高度，包括边框和菜单栏等。
- outerWidth： 获取窗口的宽度，包括边框和菜单栏等。
- screenLeft、SreenX： 获取从窗口左边缘到屏幕左边缘的像素数。返回一个数值。
- screenTop、SreenY： 获取从窗口上边缘到屏幕上边缘的像素数。

##   窗口事件

window对象定义了许多与资源加载或变化相关的事件，包括：
- onabort： 在资源加载过程中被终止时触发。
- onerror： 在资源加载出错时触发。
- onload： 在资源加载完成后触发。
- onresize： 在窗口缩放时触发。
- onunload： 在窗口从浏览器卸载时触发。

在发生交互行为时，会传递一个event对象，如下是该对象的一些表示窗口位置的相关属性：
- event.pageX 表示页面内的位置。
- event.scrollTop 表示滚动条的位置。
- event.scrillTo(x,y) 的作用是滚动一定的位置。

##  使用document获取元素对象

###  预置元素

document对象有一些预置元素成员，可以直接定位到该元素，包括：
-  document.head：	head元素
-  document.body：	body元素
-  document.title： 文档标题
-  document.images：文档中的img元素组成的类数组
-  document.links：文档中的a元素组成的类数组

使用document获取对象元素主要包括两类方法：getElement系列和querySelector系列。
getElement 系列方法比较古老，已经被querySelector系列方法替代，实际中应该优先使用querySelector()和querySelectorAll()两种方法。

###  document.querySelector()

document.querySelector()返回一个Element对象，表示找到的第一个节点。下面的例子中，样式包含title的元素可能有多个，但该方法只返回找到的第一个。

```js
const element1 = document.querySelector('.title')
```

###  document.querySelectorAll()

document.querySelectorAll()方法返回Element对象数组，表示所有找到的节点组成的类数组对象。下面的例子中，样式包含title的元素可能有多个，该方法找到所有匹配的元素并返回一个类数组。

```js
const elements = document.querySelectorAll('.title')
console.log(elements.length)
```

###    document.getElementById()

document.getElementById()方法返回指定id值的元素，由于id是唯一的，因此返回的是一个元素对象。如下示例得到一个id值为title的元素。注意，不要在id值前面加 # 。

```js
const element1 = document.getElementById('title')
```

###  document.getElementsByTagName()

document.getElementsByTagName()方法通过元素标签查找元素，一般会找到多个元素，返回的结果是HTMLElement对象组成的集合。例如如下代码返回所有div元素的集合。

```js
const divs = document.getElementsByTagName('div')
console.log(divs.length)
```

###  getElementsByClassName()

getElementsByClassName()方法返回指定class值的元素对象，无论找到0个、1个还是多个，始终返回`HTMLCollection []`，这是一个类数组对象。


## 使用innerHTML属性设置元素内容

元素对象的innerHTML属性的作用是读取或设置元素的内容，元素的内容本质上是一个字符串，但是可以使用HTML标签，浏览器会按照HTML语法渲染出内容。

如下示例分别读取body和head的内容：

```
console.log(document.body.innerHTML)
console.log(document.head.innerHTML)
```

innerHTML元素既可以读，也可以写，如下示例表示覆盖原有内容，使用新内容：

```
document.body.innerHTML='<h1>new content</h1>'
```

许多时候并不想要覆盖原内容，而只是想追加新的内容，则应该使用+=：

```
document.body.innerHTML += '<h1>appended new content</h1>'
```

## 添加元素

添加元素要针对具体的情况选择合适的方法，主要有五种方式：
-  innerHTML ： 通过+=的方式设置新的HTML内容，达到添加元素的目的
-  append()： 添加到父元素的末尾
-  prepend()： 添加到父元素的开头
-  before()： 添加到元素的前面
-  after()： 添加到元素的后面

另外，appendChild()方法和insertBefore()方法已经过时，应该弃用。

添加子元素最简单的方式就是使用innerHTML。innerHTML的值是符合HTML语法的字符串。如下示例将新的段落添加到页面的末尾：

```html
<body>
        <p>原始内容</p>
</body> 

<script>
      // 注意是+= ，表示追加，如果是 = 则会覆盖原内容
        document.body.innerHTML +=  '<p>new content</p> '
</script>
```

append()和prepend()这两个方法用于为父元素挂载新的子元素。前者挂载到末尾，后者挂载到开头。示例如下：

```html
<body>
        <p>other content</p>
</body> 

<script>
        
        const p1 = document.createElement('p')
        p1.innerHTML='p1 content'
        
        const p2 = document.createElement('p')
        p2.innerHTML='p2 content'
        
        // 挂载到body的开头
        document.body.prepend(p1)
        
        // 挂载到body的末尾
        document.body.append(p2)
</script>
```

before()和after()分别在之前和之后添加同辈元素。示例如下：

```html
<body>
      <p id="old">old content</p>
</body> 

<script>
        const p= document.querySelector('#old')

        // 新建元素
        const p1 = document.createElement('p')
        p1.innerHTML='p1 content'
        
        // 新建元素
        const p2 = document.createElement('p')
        p2.innerHTML='p2 content'

        // 插入到前面
        p.before(p1)  
        // 添加到后面 
        p.after(p2)
</script>
```

## 复制元素
使用cloneNode()方法可以复制元素，该方法返回新的元素对象，使用true选项复制全部内容。

```
<body>
        <p id='old'>old content</p>
</body> 

<script>
        const p = document.querySelector('#old')
        const p2 = p.cloneNode(true)
        p.after(p2)
</script>
```

## 删除元素
元素对象调用remove()方法可以删除自己，例如：

```
<body>
        <p>will be deleted content</p>
</body> 
<script> 
        const p = document.querySelector('p')
        p.remove()
</script>
```

replaceChild() 和removeChild()方法已经过时，不推荐使用。

##  元素、节点的区别

元素一定是节点，节点不一定是元素，带有尖括号标签的是HTML元素，例如`<body>`、`<head>`、`<div>`等，HTML元素是一种节点，除了HTML元素以外，还有Text节点、Comment节点、Document对象，这些都不是HTML元素。

不再包含下一级元素的纯文本就是节点，而非元素。

nodeType数值	|节点类型
|---|---|
Document|	9
Element|	1
Text	|3
Comment	|8

##  节点属性

属性   | 说明
|---|---|
parentNode	|父节点
children	|包含所有子元素的类数组对象，不包括非元素节点
childNodes|	包含所有子节点的类数组对象
firstElementChild|	第一个子元素
firstChild	|第一个子节点
lastElementChild	|最后一个子元素
lastChild	|最后一个子节点
previousElementSibling|	前一个紧邻同辈元素
nextElementSibling	|后一个紧邻同辈元素
nodeType|	节点类型
nodeValue	|Text或Comment节点的文本内容
nodeName	|作为元素的HTML标签名，全部大写，例如'DIV'、'IMG'

上面，如果没有子节点或者子元素，则返回null。

```js
const element1 = document.body.children[0]
const element2 = document.body.firstElementChild

const element3 = document.body.children.at(-1)
const element4 = document.body.lastElementChild
```

# 样式优先级


###   样式优先级

可以在多处为同一个元素多次设置样式，这需要基于某种规则进行优先级排序，优先级高的会覆盖掉优先级低的属性。CSS样式的优先级从高到底排序如下：

- 元素内嵌样式： 使用style属性写在元素的标签内。
- 文档内嵌样式： 定义在style标签中的样式。
- 外部样式：由link标签的ref属性指定css文件的相对或绝对路径。

如果在属性值结尾带上!important标记，那么就表示此处的优先级最高。例如下面的例子中，根据优先级规则，h1标题的文本应该为蓝色，但是由于style中使用了!important，所以最终结果为红色。

```html
<style>
h1{ color: red !important }
</style>

<h1 style="color:blue;">Hello,CSS</h1>
```



# 选择器


选择器的语法说明汇总如下。

常见的选择器：

- `*`  选取所有元素
- ` type ` ： 选取指定类型的元素
- ` .className ` ： 选取包含class样式名的元素
- ` #idName `   ： 选择指定id值的元素

根据属性选取：

- ` [attr] ` ：选取定义了attr属性的元素
- ` type[attr] ` ：选取定义了attr属性的type类型的元素
- ` [attr="val"] ` ：选取定义了attr属性,且值为val的元素
- ` [attr^="val"] ` ：选取定义了attr属性,且值以val开头的元素
- ` [attr$="val"] ` ： 选取定义了attr属性,且属性值以val结尾的元素
- ` [attr*="val"] ` ：选取定义了attr属性,且属性值包含val的元素
- ` [attr~="val"] ` ：选取定义了attr属性,且属性值包含多个值,而其中一个为val的元素
- ` [attr|="val"] ` ：选取定义了attr属性,且值是以连字符分割的值,而第一个为val的元素

根据元素间的层级关系选取：

- ` 选择器 , 选择器 ` ： 逗号表示或的意思,选择匹配至少一个选择器的元素.
- ` 选择器1  选择器2 ` ： 空格表示后代，从匹配选择器1的后代中，选择匹配选择器2的元素。
- ` 选择器1 > 选择器2 ` ： 尖括号表示子元素，从匹配选择器1的子元素中，选择匹配选择器2的元素。
- ` 选择器1 + 选择器2 `： 加号表示紧跟其后，在匹配选择器1之后，紧跟其后匹配选择器2.
- ` 选择器1 ~ 选择器2 `： 破浪号表示后面，在匹配选择器1之后，从后续元素匹配选择器2.

选取第n个子元素：

- ` ::first-line ` ：选择块级元素文本的首行
- ` ::first-letter ` ：选择块级元素文本的首字母。
- ` :before` 或 `:after ` ：在选取元素之前或之后插入内容
- `:root`：选取根元素
- ` :first-child ` ：选择第一个子元素
- ` :last-child ` ：选择最后一个子元素
- ` :only-child ` ：如果只有唯一一个子元素，选择该元素
- ` only-of-type ` ： 选取属于父元素的特定类型的唯一子元素
- ` nth-child(n) `： 选取父元素的第 n 个子元素。
- `:nth-last-child(n)`：选取父元素的倒数第n个子元素。
-  ` nth-of-type ` ：选取属于父元素的特定类型的第n个子元素
- ` nth-last-of-type(n) ` ：选取属于父元素的特定类型的倒数第n个子元素

根据元素的启用与否选取：

- ` enabled ` ：选取已启用的元素
- ` disabled ` ：选取被禁用的元素
- ` checked ` ：选取所有选中的复选框和单选按钮
- ` default ` ：选取默认元素
- ` :valid ` 或 ` :invalid `： 选取基于输入验证判定的有效或者无效的input元素。
- ` in-range ` 或  ` out-of-range `： 选取被限定在指定范围之内或者之外的input元素。
- ` required `  或 ` :optional ` ：根据是否允许使用required属性选取input元素。

根据用户的交互状态选取；

- ` :link `  ：选取未访问的链接元素
- ` :visited `  ：选取已访问的链接元素
- ` :hover `  ：选取鼠标指针悬停在其上面的元素
- ` :active `  ：选取当前用户激活的元素，这通常意味着用户即将点击该元素
- ` :focus `  ：选取获得焦点的元素
- ` :not(选择器) `  ：否定选择，选择不匹配选择器的元素。
- ` :empty `  ：选取不包含任何子元素或文本的元素
- ` :lang(语言) `  ：选取lang属性为指定值的元素
- ` :target `  ：选取URL片段标识符指向的元素。


# 文字样式

- [单个文字样式](#单个文字样式)
  - [文本颜色](#文本颜色)
  - [字体](#字体)
  - [字号](#字号)
  - [字重（加粗）](#字重加粗)
  - [倾斜](#倾斜)
  - [文本阴影](#文本阴影)
- [段落样式](#段落样式)
  - [首行缩进：text-indent](#首行缩进text-indent)
  - [文本对齐：text-align](#文本对齐text-align)
  - [行间距：line-height](#行间距line-height)
  - [单词间距：word-spacing、 字符间距：letter-spacing](#单词间距word-spacing-字符间距letter-spacing)
  - [段落中的空格和空行](#段落中的空格和空行)
  - [文字渐变](#文字渐变)




##    单个文字样式

###  文本颜色

颜色使用color，如下定义段落的颜色：

```
p{color:red;}
```

###  字体

```css
p{font-family:Arial;}

```

一些字体名称：
- 微软雅黑："MicroSoft YaHei"
- 幼圆："YouYuan"
- 隶书："LiSu"
- 楷体："KaiTi"    
- 宋体："SimSun"
- 新宋体："NSimSun"

###  字号

字号，font-size，表示文字的大小。字号的大小有多种设置形式。

第一种方式是绝对大小。分为两类：像素值和单词形式。

像素值是最常见的形式，使用px（Pixel）作为单位。1像素约等于0.4毫米。例如：

```
<style>
    p {
        font-size: 18px;
    }
</style>

<p>文字示例</p>
```

单词形式包括：xx-small、x-small、small、medium、large、x-large、xx-large、smaller、larger。这些值是绝对大小，每个值对应一个绝对像素值，medium是默认值，相当于16px。

第二种方式是相对大小。分为两种：百分数、em和rem。

对应font-size属性，em和百分数都是相对于父元素的字号计算的。1em等价于100%，表示与父元素字号相等，1.5em等价于150%，表示父元素字号的1.5倍。例如：

```html
<style>
    div {
        font-size: 16px;
    }

    p {
        font-size: 2em;
    }
</style>

<div>父元素字号：16px
    <p>子元素字号：2em，即32px</p>
</div>
```

使用em需要特别注意的是，只有对于font-size来说，em才与百分比等价。但是，对于其它属性来说，em相对的是：

```
当前元素的font-size
```

举个例子可以说明这个问题，下面的例子中，子元素的边框宽度为0.5em，通过getComputedStyle()得到的结果约16px，这就说明除了font-size外的其它属性的em是相对于本元素的font-size计算的。

```html
<style>
    div {
        font-size: 16px;
    }

    p {
        font-size: 2em;
        border: black solid 0.5em;
    }
</style>

<div>父元素字号：16px
    <p>子元素字号：2em，即32px；边框宽度：0.5em，约16px</p>
</div>


<script>
            const p = document.getElementsByTagName('p')[0] // 获取p元素
            console.log(getComputedStyle(p).fontSize) // 获取p的字号
    console.log(getComputedStyle(p).border) // 获取p的边框宽度
</script>
```

rem是新增的标准，r 是 root 的意思，表示在em的基础上，相对于根元素即body的字号。body元素默认16px字号。所以，一般情况下，1rem即16px。如下示例：

```html
<style>
    div {
        font-size: 32px;
    }

    p {
        font-size: 0.5rem;
    }
</style>

<div>父元素字号：32px
    <p>子元素字号：0.5rem，相对于body的16px，结果是8px</p>
</div>


<script>
        // 获取p元素对象
        const p = document.getElementsByTagName('p')[0] 
        // 获取p的字号
        console.log(getComputedStyle(p).fontSize) 
</script>
```


###  字重（加粗）

字重，font-weight，也就是通常所说的加粗。

font-weight的属性值有两种写法。

第一种写法是单词。 包括lighter、normal、bold、bolder。

第二种写法是数字：100-900，取整百数，共有9个数。

这两种写法存在一种对应关系，不过，不同浏览器可能不同，笔者在 Edge(Chromium) 122 上测试的对应关系如下：
- 100、200、300对应lighter，细体。
- 400、500对应normal，正常粗细，这是默认值。
- 600、700、800、900对应bold，加粗。

###  倾斜

文本倾斜比较简单，一般只使用如下样式即可：

```
font-style: italic;
```

默认值为normal。

###  文本阴影

有时候，你希望为文本加个阴影，此时可以使用text-shadow属性。需要指定三个值：阴影颜色、横向偏移距离、纵向偏移距离，顺序不强制要求。示例如下：

```html
<style>
    span {
        text-shadow: lightblue 0.5em 0.5em;
    }

</style>

<span>文本阴影</span>
```

这表示阴影颜色为浅蓝，阴影向下向右均偏移半个字号。



##  段落样式

###  首行缩进：text-indent

我们经常在书本看到，每个段落的第一行是空了两个汉字的，这叫做段落缩进，也叫首行缩进，使用text-indent。text-indent的取值单位与font-size类似，既可以是使用px作为绝对值，也可以使用em和百分号作为相对值。

不过，需要特别注意的是，这里的em和百分比没有等价关系，em是相对于本元素的font-size，而百分比不是的。

由于标准格式是首行缩进2个汉字，因此不要使用px和百分比，直接使用如下样式即可：

```
text-indent: 2em;
```

这样，不管文字大小怎么变换，首行始终是缩进2个汉字。

### 文本对齐：text-align

如同文字编辑软件Word一样，文本对齐也是段落的基础设置，使用text-align，可取如下值：
- left：左对齐，默认
- right： 右对齐
- center ： 居中对齐
- justify： 两端对齐

### 行间距：line-height

行距控制行之间的距离，使用line-height。如果属性值是纯数字，则表示几倍行距，例如1.5表示1.5倍行距。这里的倍数是相对于font-size的倍数，因此纯数字与em是等效的。也就是说，如果要设置2倍行距，下面两种方式是一样的：

```css
line-height: 2;
line-height: 2em;
```

###  单词间距：word-spacing、 字符间距：letter-spacing

word-spacing 表示单词间的距离。对于英文文本来说，就是单词与单词间的距离。而对于中文文本来说，是标点符号隔开的两小串文本之间的距离。

letter-spacing表示字符间的距离。对于英文文本来说，就是字母间的距离。对于中文文本来说，就是汉字间的距离。

基于上面两种分析，可以发现，对于中英文夹杂的文章来说，没有哪一种是可以兼顾的。

###  段落中的空格和空行

默认情况下， 一段文本中，连续多个空格会被压缩成1个空格。同时，在一对`<p>`标签中永远只会输出一个段落，哪怕源代码中写了几段。

例如，下面两个段落在浏览器的呈现是一样的：

```html
<p>
    空白测试          空白测试 
    
    换行测试
</p>

<p>
    空白测试 空白测试 换行测试
</p>
```

第一个段落中，虽然有很多空白，虽然看似写了两段话，但是渲染结果与下面那个段落并无二致。

如果需要人为保留源码中的空白和换行，使用如下样式：

```
white-space: pre;
```

###  文字渐变

有些时候，需要对文字的颜色加上渐变效果，则可以使用如下的样式设置：

```html
<style>
    span {
        background-image: linear-gradient(45deg, red, green);
        background-clip: text;
        color: transparent;
        display: inline;
    }
</style>

<span>文字渐变示例</span>
```

注意，某些浏览器可能不支持文字渐变。


