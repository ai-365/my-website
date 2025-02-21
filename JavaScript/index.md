[[toc]]

#  基础

##  JavaScript的历史

JavaScript问世于1995年，最初是用于控制浏览器页面行为的脚本语言，例如验证某个字段是否已经填写，或者测试输入值的合法性。后来，欧洲计算机制造商协会（Ecma）下属的TC39委员会发布了ECMA-262，作为ECMAScript的语言标准。1998年，ECMAScript被纳入国际标准。此后，各大浏览器厂商以ECMAScript标准为依据，分别实现了自己的JavaScript语言。时至今日，对ECMAScript支持最好的浏览器是Google Chrome和Microsoft Edge，这两个浏览器均使用了Chromium开源内核。Chromium基于Google开源的V8引擎。

除了作为浏览器的脚本语言，在2009年，Node.js问世。Node.js是一个基于Chrome V8引擎的JavaScript运行时。Node.js在语法上采用了JavaScript语言，同时带来了用于操作服务端的模块，例如：文件系统模块fs、操作系统模块os。Node.js将JavaScript的宿主环境从浏览器端带到了服务器端。

经过了27年的发展，如今的JavaScript已经成长为了最流行的语言之一，以及开发者们最喜爱的编程语言之一。

##  JavaScript的组成

一般而言，我们所说的Javascript指的是客户端Javascript，也就是浏览器中的Javascript脚本。但是，严格来讲，根据使用环境，我们将Javascript分为两类：

* __客户端Javascript__：在浏览器中运行的Javascript。

* __服务端Javascript__：可以访问本地操作系统的Javascript。比如最初的Node.js，以及近几年比较热门的Deno.js、Bun.js。


客户端JavaScript由ECMAScript、BOM、DOM三部分组成：

* __EcmaScript__：即ECMA-262定义的国际标准，定义了语法规则、数据类型、关键字、模块、全局对象等核心语言特性。

* __DOM__（Document Object Model）：文档对象模型，规定了JavaScript如何操作HTML元素。

* __BOM__（Browser Object Model）：浏览器对象模型，用于与浏览器窗口交互，例如页面导航、浏览历史、离线存储等。


以Node.js为例，其Javascript的组成分为如下几部分：

* __EcmaScript__：即ECMA-262定义的国际标准，定义了语法规则、数据类型、关键字、模块、全局对象、异步、代理等核心语言特性。

* __CommonJS__：用于访问本地操作系统的API，包含了大量开箱急用的模块，例如文件系统模块fs、操作系统模块os、Web服务器模块http等。





## ES6标准

ECMAScript 标准自2015年以来每年6月会发布一个新版本。ECMAScript 的某个特性从想法到最终的标准一般会经历stage0——stage4 五个阶段，分别是：strawman（最初想法）、proposal（提案）、draft（草案）、candidate（候选）、finished（完成）。一般而言，一个提案一旦进入草案阶段就很有可能会纳入最终的标准。

在以前，从标准的发布到浏览器厂商的支持又会经历很长的时间，这时可以使用polyfill框架用于实现浏览器暂不支持的特性。不过现在这种情况已经得到了好转，甚至对于很多特性，往往是浏览器厂商率先推出，而后TC39委员会将其作为标准纳入。

## ES6的新增特性

下面列出了自ECMAScript 2015 发布以来的新增特性：

* __ES6__：发行于2015年6月，新增了许多影响深远的特性：箭头函数、模块、迭代器、生成器、期约、反射、代理。ES6的发布对于JavaScript来说是一个里程碑事件，这是经典JavaScript和现代JavaScript的分水岭，奠定了JavaScript繁荣的基础。之后的ES版本也可以统称为“ES6”。

* __ES7__：发布于2016年6月，新增了指数操作符。

* __ES8__：发布于2017年6月，`async/await`、`Object.values()/keys()/entries()`、对象字面量拖尾逗号。async和await又是现代JavaScript发展史上另外一个极其重要的特性。

* __ES9__：发布于2018年6月，新增了`Promise finally()`、异步迭代、剩余和扩展属性。

* __ES10__：发布于2019年6月，新增了数组打平、字符串定长填充等特性。

* __ES11__：发布于2020年6月，新增了可选链、空位合并等特性。

* __ES12__：发布于2021年6月，新增了`Promise any()`、`String.prototype.replaceAll()`等特性。

* __ES13__：发布于2022年6月，新增了顶层`await`、`Array.prototype.at()`、class私有方法 / 静态方法等特性。

* __ES14__：发布于2023年6月，主要新增了数组的非破坏性方法，例如`Array.prototype.toReversed()`、`Array.prototype.toSorted()`等

##  原始值和引用值

Javascript的数据类型大体上分为两类：原始类型和引用类型。原始类型的数据值保存于栈中，引用类型的值保存于堆中，这是这两种类型最根本的区别，也决定了后续对这两种类型的赋值、修改、拷贝操作的不同。

原始类型保存于栈中，它是一种先进后出的数据结构，从管理角度来讲，它是由操作系统分配管理的，也就是说它是规整的，内存的大小在申请之后不会发生变化。因此，它不会出现碎片化，并且读取速度非常的快，因此基本的原始数据类型就非常适合存放于栈中。

原始数据类型分为如下几类，后面我们会一一详细讲到：
- 数值
- 字符串
- 布尔值
- null
- undefined
- Symbol

相比于栈的固定大小，堆的分配非常自由，它是由程序员自己去分配的，比如程序员考虑到某些情况需要更多的内存，它就可以在堆上面申请一个足够大的内存。除此之外，内存的分配非常自由，它并不要求是连续的内存，只要有空间，都可以被拿来分配。不过这样就会导致产生很多碎片，不利于高速读取，因此堆的操作的速度要比栈慢很多。堆主要存放的是大小不固定的内存结构，因此，对象、数组、结构体等引用类型经常被存放到堆上。

基于栈的存储特性，当我们为一个引用类型赋值时，本质上赋予的是一个指针，也叫内存地址，这才导致了声明方式和拷贝方式与原始类型的不同。

引用数据类型分为如下两个大类：基本引用类型、集合引用类型。

基本引用类型又分为：
* 原始值包装类型：包括Number、String、Boolean。
* 内置引用类型：包括Date、RegExp、Math等。

集合引用类型是我们经常使用的类型，分为：
* 对象（狭义的）
* 数组
* 集合（弱集合）
* 映射（弱映射）

##  typeof 操作符

由于Javascript的类型是松散的，不像静态语言那样需要事先声明，Javascript会根据数据值本身去推导数据类型，typeof操作符就是为此而生的。对一个值使用typeof操作符会返回如下字符串之一：

- "undefined" : 未定义的值
- "boolean" : 布尔值
- "string" : 字符串 
- "number" : 数值
- "object" : 表示值为对象(非函数)或null
- "function" : 表示值为函数
- "symbol" ：表示值为符号


##  布尔类型


布尔（英语：Boolean）是计算机科学中的逻辑数据类型，以发明布尔代数的数学家乔治·布尔为名。它是只有两种值的原始类型 : true和false。

下面这些值可以被显示或隐式地转换为true：

* 非空字符串，注意，`" "`中间有一个空格，也算非空。
* 任意对象，包括空对象
* 正负无穷大（ Infinity、- Infinity）
* 非零数值

下面这些值可以被显示或隐式地转换为false：

* 空字符串`""`
* NaN
* 数字0
* null
* undefined

可以使用`!!()`和`Boolean()`将其它形式的值显示地转换为布尔类型，以便于条件判断，前者是后者的简写形式。

来看下面的示例：

```js
// 下面这些值都视作true
Boolean(hello')  // => true
Boolean('  ')  // 非空字符串，空格也算非空
Boolean(5/0)  // 正负无穷大
Boolean({})   // 任意对象，包括空对象

// 下面这些值都视作false
Boolean('')   // =>false 空字符串
Boolean(0)   
Boolean(NaN)
Boolean(null)
Boolean(undefined)
```

在`if`语句中，不必显式地使用`!!()`，会自动隐式调用:

```js
const a=2
if (a){console.log(true)}   //=> true
let b
if (b){console.log(true)}
else {console.log(false)}   //=> false
```

## 可选链


如果对象obj不存在属性c，则obj.c返回undefined。而如果继续对obj.c读取属性，例如obj.c.d，则此时会报错，使用EcmaScript 2020新增的可选链(?.)特性， 可以解决这个报错的问题。如下示例：

```js
const obj = {a:1,b:2}
console.log(obj.c)  // undefined
console.log(obj.c.d)  // 报错，因为obj.c为undefined
console.log(obj?.c?.d)  // 存在属性则返回，不存在则会返回undefined，而不会报错 
```

可选链加强了程序的健壮性，无需开发者手动处理潜在的报错问题。

##  数值类型


数值类型是最常见的原始类型，包括整数、浮点数、无穷大（小）、NaN。

使用如下方式新建数值类型的变量：

```js
let num = 1     // 整数
let floatNum = 0.1   // 浮点数
let num=1.0  // 虽然跟了小数点，但依然会被处理成整数
```

NaN是一种特殊的数值，表示运算错误，但不会报错。Infinity表示无穷大，-Infinity表示无穷小，例如：

```js
console.log(0/0)   //=> NaN
console.log(5/0)   // => Infinity，很多语言会报错，但是这里为无穷大
console.log(5/-0)  // => -Infinity
```

有三种函数用于将其它形式的值转为数值，Number()是通用的，可将类似数值的字符串或单数值元素的数组转换为数组。parseInt()和parseFloat()用于将开头是数字而存在非数字的字符串提取成数值，例如：

```js
console.log(Number(true))  // 遇布尔值转为1或0
console.log(Number(null))  // 0
console.log(Number(undefined))  // NaN
console.log(Number('123'))           // =>123
console.log(Number('123 456'))    // => NaN
console.log(Number('123hello'))   // => NaN
console.log(Number(''))  //=>0
console.log(parseInt('123hello'))  //=> 123
console.log(parseFloat('1.23hello')) //=> 1.23
```

由于乘法运算和减法运算在碰到数值时会隐式调用Number()，因此可以使用此方法快速调用Number()，可以看作一种语法糖，例如：

```js
console.log(true * 1)    //=>1，等同于Number(true) 
console.log('123' * 2)   // => 246，等同于Number('123')
```



## 原始值的相等判定

JavaScript原始值的相等性判定有两种情况：严格相等、不严格相等。分别使用两个和三个等号。

这两种相等性判定的区别只有一个：

```
是否进行类型转换
```

用一个示例可以很好的进行说明：

```js
console.log(1==true)  // true ，进行了类型转换，true转换成了1，相等

console.log(1===true)  // false 不进行类型转换
```

## 引用值的相等判定

引用值的相等性判定不区分严格与否，两个和三个等号是等价的。引用值的相等判定只有一个依据：

```
比较两个引用值的指针是否指向同一处
```

例如，如下两个对象，虽然内容上看起来一样，但是它们实际的内容却存储在内存的不同地方，即指针的指向不一样，因此永远不会相等：

```js
const objA = {name:"bob"}
const objB = {name:"bob"}
console.log(objA==objB)  // false 
console.log(objA===objB)  // false 
```

由于对象使用等号拷贝值时，默认使用浅拷贝，即只拷贝指针，那么这两个对象的指针指向同一处，因此相等，如下示例：

```js
const objC = {name:"bob"}
objD = objC // 此时只拷贝了指针
console.log(objC==objD)  // true
console.log(objC===objD) // true
```



# 字符串


###  字符串简介


字符串类型表示零个或多个16为Unicode字符序列，可以用三种符号包裹：单引号、双引号和反引号（ES6新增）。

双引号和单引号在Javascript中没有区别，这是与其它语言不同的地方。但是，引号必须成对使用。

有些时候，需要嵌套使用引号，这时候需要将使用一种引号包裹另一种引号，以区分不同的部分，例如：

```js
eval("console.log("hello,world")") // 语法错误
eval("console.log('hello,world')") // 正确
```

### 字符串的不可变性

字符串是不可变的，意思是一旦创建，就不能改变，例如：

```js
let str = "hello,world"
str.replace("h","H")
console.log(str)  // hello,world
```

在上面的例子中，我们本意是像将字符串"hello,world"中的“h"替换为“H”，但事与愿违了，因为字符串是不能改变的。

### 字符串的长度

字符串的长度可以通过length()方法获得，例如：

```js
let str = "hello,world"
console.log(str.length)  // 11
```

### 原始值引用类型

读者可能会纳闷儿，字符串不是原始类型吗？为什么它可以像引用类型一样可以调用方法？

其实，数值、字符串、布尔值这三种原始类型比较特殊，可以被包装成原始值引用类型，调用一些方法，不过，这个过程是系统帮我们自动完成的。例如，当调用str.length()时，系统会先为str生成一个对应的引用类型，这个引用类型包含各种方法供str调用。



### 大小写转换

可以使用如下两种方法对字符串进行大小写转换。

```js
let str='Hello'
console.log(str.toLowercase())   // =>'hello'
console.log(str.toUpperCase())   // =>'HELLO'
```

### indexOf()和lastIndexOf()方法

可以使用indexOf()返回字符或子串在字符串中第一次出现的索引位置，lastIndexOf()方法类型，只是从字符串的末尾开始查找。

```js
let str = 'hello,world'
console.log(str.indexOf('o'))  //=>4
console.log(str.lastIndexOf('o')) //=>7
console.log(str.indexOf('wo')) //=>6
```

### includes()方法

可以使用includes()方法确认字符串是否包含某个字符或子串，例如：

```js
let str='hello,world'
console.log(str.includes('hello'))    //=>true
```

### startWith()和endsWith()方法

startWith()方法用于确认字符串是否以某个字符或子串开头，而endsWith()方法用于确认字符串是否以某个字符或子串结尾。例如：

```js
let str='hello,world'
console.log(str.startsWith('hello'))  //=> true
console.log(str.endsWith('world'))    //=>true
```

### 去除字符串的首尾空格

有三种方法去除字符串的首尾空格，如下所示：

```js
let str='  hello,world  '  // 首尾各有两个空格
console.log(str.trim())      //=>'hello,world'，同时去除首尾空格
console.log(str.trimLeft())  //=>'hello,world  '，只去除左边的空格
console.log(str.trimRight()) //=>'  hello,world'，只去除右边的空格
```

### 重复字符串

使用repeat()方法对字符串进行重复，例如：

```js
let str='hello'
console.log(str.repeat(3))  //=>'hellohellohello'
```

### padStart()和padEnd()方法

有时候需要保证字符串的长度是固定的，就需要在左右使用字符进行填充。

```js
let str='hello'
console.log(str.padStart(10))  //=> '     hello'，在左侧填充默认的5个空格
console.log(str.padEnd(10))    //=>'hello     '，在右侧填充5个空格
console.log(str.padStart(3))   //=>'hello'，长度足够，原样返回
console.log(str.padStart(10,',')) // =>',,,,,hello'，在左侧使用逗号填充
```

### slice()、substring()和substr()方法

要提取子字符串，有三种方法。slice()和substring()需要传入提取开始的位置和结束位置，而substr()需要传入开始位置和提取的字数量。

```js
let str='hello,world'
console.log(str.slice(4,7))  //=>'o,w' ，从索引4位置开始提取，到索引7位置之前结束（左闭右开原则）
console.log(str.slice(4))    //=> 'o,world'，从索引4位置开始提取，一直到结束
console.log(str.substr(4,3)) // =>'o,w'，从索引4位置开始提取，提取3个字符
```

### 阻止反斜杠转义

Windows平台下的路径字符串带有反斜杠，反斜杠在字符串中会进行转义，这并不是我们期待的现象。为了阻止转义，可以使用`String.raw` 函数，这个函数返回反引号中未经处理的文本，示例如下：

```js
// 反斜杠默认转义
const path1 = "D:\test"
console.log(path1)  // D:  est （\t表示一个Tab空格）

// 阻止转义

const path2 = String.raw`D:\test`
console.log(path2)  // D:\test
```


### 字符串模板字面量

模板字面量取代了早期和其它语言的`%d`、`%f`等写法，使得变量化的字符串更容易书写，也更易阅读。模板字符串使用反单引号包容，它有最主要的两个特点：保留了换行符等不可见字符（以往只能用`\n`）；提供了变量解析和运算。

```js
let str = `第一行 (这里按回车) 
第二行`
console.log(str)   // =>'第一行\n第二行'

let a=1
let b=2
console.log(`a的值是${a}`)  // =>'a的值是1'
console.log(`a+b的结果是${a+b}`)    // => 'a+b的结果是3'
```

虽然string类型是原始值，但是表现出像对象一样使用属性和方法。

```js
let str='hello'
console.log(str.length)  // =>5， 字符串的长度
console.log([...str])  //=>[ 'h', 'e', 'l', 'l', 'o' ] ，将字符串快速打平为数组
```




# JSON

JSON全称是JavaScript对象表示法，是通用的数据交换格式，许多软件的配置文件均使用JSON文件格式。

可以包括三种语法：
* 原始值
* 对象
* 数组

JSON无法包括如下的数据类型:
- 集合
- 映射

## JSON语法

JSON存在四组标记符号：
- 中括号`[]`表示数组
- 花括号`{}`表示键值对
- 引号包裹住键的名称和字符串类型的键值，键值为数字是不加引号。
- 逗号区分数组的各个元素和各个键值对

## JSON与JavaScript对象的区别

JSON的格式与JavaScript对象（包括数组）的字面量格式非常类似，使用时容易搞混，要注意几个区别：
- JSON的键必须使用引号包裹，而JavaScript对象的键可以用也可以不用引号包裹。
- JavaScript对象允许用双斜杠添加注释，而JSON不能添加任何注释。
- JavaScript允许使用拖尾逗号，而JSON不能使用，逗号只能放在元素之间，不能用在末尾。

## 将对象转换为JSON

要将对象转换为JSON字符串，使用JSON.stringify()方法，例如：

```js
const obj = {a:1, b:2, c:3}

const json = JSON.stringify(obj)  
console.log(json)   //  {"a":1,"b":2,"c":3}
```

可以在第二个参数中指定一个数组，表示筛选哪些属性进入JSON字符串：

```js
const obj = {a:1, b:2, c:3}

const json = JSON.stringify(obj,['a','c'])  
console.log(json)   //  {"a":1,"c":3}
```

## 将JSON序列化为对象

可以将JSON序列化为对象，使用JSON.parse()方法。例如：

```
const json = '{"a":1,"b":2,"c":3}'

const obj = JSON.parse(json)
console.log(obj)
```

再来看一个例子，从本地的配置文件中读取JSON字符串转化为对象，修改后保存回配置文件。
如下是配置文件settings.json的内容：

```JSON
{
	"a":1,
  	"b":2,
  	"c":3
}
```

如下读取配置文件并解析为对象，然后写回配置文件中：

```js
const fs = require('fs')

const json = fs.readFileSync('settings.json','utf8')
const obj = JSON.parse(json)  
console.log(obj)   // { a: 1, b: 2, c: 3 }

obj.a = 2
obj.c = 5
const json2 = JSON.stringify(obj)
fs.writeFileSync('settings.json',json2,'utf8')

```

## JSON不是对象，而是字符串

需要特别强调的是，JSON不是对象，而是字符串。许多人习惯称呼JSON格式为“JSON对象”，这种说法是错误的。JSON的本质就是字符串，可以使用typeof关键字验证：

```js
const obj = {a:1, b:2, c:3}
const json = JSON.stringify(obj)  
console.log(typeof json)  // string
```





# 数组


### 新建数组

有多种方式新建数组。

**使用Array()构造函数新建数组**

第一种方式是使用Array()构造函数，如下：

```js
const arr1 = new Array()  // 建立一个空数组

const arr2 = new Array(3)  // 建立一个包含3个元素的数组
```

**使用数组字面量新建数组**

第二种方式是使用数组字面量，外层用中括号(`[]`)包裹，数组元素之间用逗号隔开，如下：

```js
const arr1 = []  // 建立一个空数组
const arr2 = [1,2,3]  // 建立一个数组，包括3个元素
```

**使用Array.from()方法新建数组**

第三种方式是使用Array.from()静态方法，该方法接收一个可迭代对象，例如：

```js
const str = 'hello'  // 字符串是可迭代对象
const arr1 = Array.from(str) 
console.log(arr1)  // ['h','e','l','l','o']
const set = new Set(1,2,3)  // 集合是可迭代对象
const arr2 = Array.from(set)
console.log(arr2)  // [1,2,3]
```

**使用Array.of()方法新建数组**

第四种方式是使用Array.of()静态方法，该方法与Array.from()类似，区别是Array.of()接收若干个元素作为参数组成新数组的元素，例如：

```js
const arr = Array.of(1,2,3)
console.log(arr) // [1,2,3]
```

**使用三点运算符(…)新建数组**

第五种方式是使用三点运算符(...)，该方法可以看作是Array.from()方法的语法糖，接收一个可迭代对象，通常用于快速将字符串转化为数组，例如：

```js
const str = 'hello'
const arr = [...str]
console.log(arr)  // ['h','e','l','l','o']
```

当然，还有许多方法可以新建或返回新数组，比如:Object.keys()、Object.values()、Object.entries(),这将在后面会讲到。

### 数组的长度

数组的长度不是固定的，哪怕一开始指定数组的长度，其长度也是可以动态伸缩的。例如：

```js
const arr= new Array(3)
arr[3] = 1
console.log(arr) // 4
```


### 数组的拖尾逗号

有些时候，我们会看到数组元素的结尾也存在一个逗号，这种逗号叫做拖尾逗号，通常是为了在频繁地增减数组元素的时候同时保证语法的正确，拖尾逗号不占用数组的长度，例如：

```js
// 下面两种写法的结果是一样的
const arr1 = [1,2,3]
const arr2 = [1,2,3,]
console.log(arr1.length, arr2.length)  // 3  3
```


###  数组的本质也是对象



我们知道，数组的索引使用中括号，中括号里面是数字，表示元素的序号，从0开始，例如：

```js
const arr = [1,2,3]

console.log(arr[0])  // 1
```

这种中括号的访问方式类似于对象的属性访问。我们知道，对于是字面量的属性名称，对象属性的访问需要使用引号，将这种规则加到数组上试试：

```js
const arr = [1,2,3]

console.log(arr["0"])  // 1
```

依然能够找到第一个元素。

这就说明，数组的本质也是对象，只不过基于对象做了一些特殊处理，包括：
- 默认情况下，数组元素的属性名是整数，且从0开始整数递增。
- 数组不能使用点号语法访问元素值，例如arr.0是错误的。

既然属性的本质是对象，那么除了只能是数值的默认属性之外，也可以添加一些自定义属性，例如：

```js
const arr = [1,2,3]

arr['key1'] = 'hello'
arr['key2'] = 'world'

console.log(arr)   // [ 1, 2, 3, key1: 'hello', key2: 'world' ]
console.log(arr.key1)  // hello, 对象的点号访问语法
console.log(arr['key2'])  // world,  对象的中括号加引号访问语法
```

### 数组的迭代



数组有五个迭代函数，它们都接收一个函数作为参数，传入的函数接收三个参数：元素、索引位置、数组本身。这五个迭代函数分别是：
* **Array.prototype.map()**：返回对每个元素进行操作后的新数组。
* **Array.prototype.filter()**：返回回调函数返回值为true的元素组成的新数组。
* **Array.prototype.every()**：如果回调函数返回值均为true，则返回true，否则返回false。
* **Array.prototype.some()**：只要有一个或以上的回调函数返回值为true，则返回true，否则返回false。
* **Array.prototype.forEach()**：不返回新数组，而是直接在原来的数组上对每个元素执行回调函数定义的操作。

来看几个例子：

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]
const arr2 = arr.map((element,index,array)=>element*2)  
// 对每个元素乘以2，存储到新数组中，arr2=[2,4,6,8,10,12,14,16,18]

const arr3 = arr.filter((element,index,array)=>element > 5) 
// 找出大于5的值，存储到新数组中，arr3=[6,7,8,9]

const arr4=arr.every((element,index,array)=>element%2==0) 
// 所有元素都是偶数吗？显然不是，arr4 = false
const arr5=arr.some((element,index,array)=>element%2==0)  
// 存在元素是偶数吗？arr5=true

arr.forEach((element,index,array)=>element**2)  
// 直接修改原数组，对每个元素进行平方，arr=[1,4,9,16,25,36,49,64,81]
```


###  数组的归并



归并操作是对数组的元素进行叠加运算，例如累加或累积，涉及reduce()和reduceRight()，这两个方法的区别只是叠加运算的方向相反。

reduce()方法接收一个函数参数，这个函数与前面的函数参数有所不同，它期待4个参数：
* prev：叠加运算的初始值，默认为第一项
* cur：迭代的当前元素，第一次迭代为第二项
* index：索引位置
* array：数组本身

来看下面的示例——数组累加求和。

```js
const arr = [1, 2, 3, 4]
const result = arr.reduce( (prev, cur)=> prev + cur )
console.log(result)
```
该归并操作的细分步骤如下：

* 第一次归并：`prev=1，cur=2`
* 第二次归并：`prev = prev+cur=1+2=3，cur = 3`
* 第三次归并：`prev=prev+cur=3+3=6 ，cur=4`
* 第四次归并：`prev=prev+cur=6+4=10`





### 数组的at()方法

ES2019新增了`at()`方法，该方法可以从倒数第一位开始访问数组元素，以往我们要找到数组的最后一个元素，使用的是：

```js
const arr = [1,2,3]
console.log(arr[arr.length-1])  // 3
```

现在，有了`at()`方法，便可以非常方便地返回最后一个元素值:
```js
const arr = [1,2,3]
console.log(arr.at(-1))  // 3
```

通过索引返回元素，`at()`方法比中括号形式更加通用，因为`at()`可以接收一个正整数或负整数，正整数就是正序索引，等同于中括号形式`([])`,而负整数就是逆序索引，例如：

```js
const arr = [1,2,3]
console.log(arr.at(0))  // 1 , 等价于arr[0]
console.log(arr.at(-1))  // 3 , 返回倒数第一个元素值
console.log(arr.at(-2)) // 2 , 返回倒数第二个元素值
```


### 数组的concat()方法
使用concat()方法可以合并数组，返回有原数组和实参组成的新数组：

```js
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 =arr1.concat(arr2)
console.log(arr3)  // [1,2,3,4,5,6]
```

当然，也可以使用扩展运算符更便捷的操作：

```js
cosnt arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3=[...arr1 , ...arr2 ]         
console.log(arr3)//[1,2,3,4,5,6]
```

需要特别注意的是，这两种方法只有在所有元素均为原始值的前提下，新数组与源数组是相互独立的。如果源数组中存在引用值元素，那么新数组与源数组同时关联着这些引用值元素。

这是由引用值自身的特性决定的，为了保险起见，建议只对所有元素都为原始值的数组使用这两种操作。


### 数组的fill()方法

数组的fill()可以让数组在指定的索引范围内填入相同的值，该方法接收三个参数： 要填充的值、起始索引(默认为0)、终止索引(默认为最后一个元素，可以用负整数表示倒数)。

fill()方法会修改源数组，来看下面的例子：

```js
const arr1 = [1,2,3,4,5,6]
const arr2=[...arr1]
const arr3=[...arr1]

arr1.fill(20)
console.log(arr1)
// [20,20,20,20,20,20]
// => 所有位置都填充为20

arr2.fill(20,2)
console.log(arr2)
// [1,2,20,20,20,20]
// 从第3个元素开始，一直到结尾

arr3.fill(20,1,-2)
// [1,20,20,20,5,6]
// 从第2个开始(包含)，到倒数第二个结束(不包含)
```




find()和findIndex()在找到第一个匹配的元素之后就不再往后迭代，因此，倘若要找到全部匹配的元素，则应该使用filter()方法。


### 数组的flat()方法

有些场景下，我们需要将具有嵌套结构的数组打平，ES2019新增了flat()方法用于数组的打平操作，例如：

```j
const arr1= [ 1, [2,3],4 ]
const arr2=arr.flat()
console.log(arr2)   //=>[1,2,3,4]
```

该方法还可以接收一个整数，表示打平的深度，默认情况下，打平一级嵌套，例如：

```js
const arr=[[[1]]]   // 三级嵌套
const arr1=arr.flat()  
console.log(arr1)    //=> [[1]]

const arr2=arr.flat(2)
console.log(arr2)  //=>[1]
```
  
注意，当打平深度高于嵌套层级时，永远只会返回一维数组：

```js
// const arr=[[[1]]]
const arr3=arr.flat(6)
console.log(arr)   //=>[1]
```

也就是说，打平的结果永远还是数组。


### 数组的includes()方法

仅仅是查看是否包含某个元素，可使用Array.prototype.includes()方法，该方法返回一个布尔值，例如：

```js
const arr = [1,2,3]
console.log(arr.includes(1)) // true
console.log(arr.includes(5)) // false
```


### 数组的indexOf()和lastIndexOf()方法

如果不仅要看是否包含某个元素，还要找出第一次出现的位置，则应该使用Array.prototype.indexOf()方法，如果能找到，则返回第一次出现的索引位置，如果没有，则返回-1。如果要返回最后一次出现的索引位置，则使用Array.prototype.lastIndexOf()，例如：

```js
cosnt arr = [1, 2, 3, 4, 2, 5]

const result1 = arr.indexOf(2)  // 第一次出现2的索引位置
console.log(result1)  // 1
const result2= arr.indexOf(6)  //第一次出现6的索引位置，没有找到
console.log(result2)  // -1

const result3 = arr.lastIndexOf(2)  // 最后一次出现2的索引位置
console.log(result3)  // 4
```

请注意indexOf()和lastIndexOf()只能找到第一次和最后一次出现的位置，如果需要将所有的位置都找到，则应该使用filter()方法。

### 数组的find()和findIndex()方法

上面的查找方法只能查看是否包含特定的元素，如果要查找符合某些要求的元素，则需要使用Array.prototype.find()和Array.prototype.findIndex()方法。find()方法返回第一个匹配的元素，findIndex()方法返回第一个匹配的元素的索引位置。

这两个方法都接收一个callback函数，该函数接收三个参数：元素、索引位置、数组本身。例如：

```js
const arr = [1, 2, 3, 4, 5, 6 ] 
const result1 = arr.find(item => item%2==0)  // 返回第一个偶数
console.log(result1)  // 2
const result2 = arr.findIndex(item => item%2==0)  // 返回第一个偶数的索引位置 
console.log(result2)  // 1
```


### 数组的join()方法

可以使用join()将数组元素用指定的符号拼接起来，再转换为字符串，例如：

```js
const arr = [1,2 ,3, 4 ]
const str = arr.join('&')
console.log(str)  // '1&2&3&4'
```

如果没有给定符号，则默认使用英文逗号拼接(,)，例如：

```js
const arr = [1,2 ,3, 4 ]
const str = arr.join()  // 等价于 arr.join('') 和 arr.join(',')
console.log(str)
```

注意，在开始拼接之前，每个元素会先隐式调用toString()方法转成字符串，然后用给定的符号拼接。例如：

```js
const arr = [1,2,{a:1},3]
const str = arr.join()
console.log(str) // '1,2,[object Object],3'
```

在上面的代码中，元素`{a:1}`是Object类型，任意Object类型使用toString()均会返回字符串`[object Object]`，所以会打印出上面的结果。


### 数组的slice()方法

数组实例的slice()用于返回一个子数组，也叫数组切片，该方法接收两个参数：
* 起点的索引位置(包含)
* 终点的索引位置(不包含)

例如：

```js
const arr1 = [1,2,3,4,5,6]
const arr2 = arr1.slice(1,3)
console.log(arr2)  // [2,3]
```

有一种简便的记忆方法：slice(n,m)返回第 n+1 到第 m 个元素组成的新数组。


### 数组的splice()方法

splice()方法可以在任意位置对数组插入、删除元素。一个完整的splice()方法依次接收如下参数：

* 插入或删除的起点索引位置
* 要删除的元素个数，如果不指定，那么从起点位置开始的后面的所有元素都被删除
* 后面的参数为要从起点位置之后开始填充的元素

例如，arr.splice(n,m,x,y)表示从arr的第n+1个元素开始删除m个元素，然后在此处插入x、y元素。

需要注意的是，splice()方法直接修改源数组，而不是返回新数组，来看下面的例子：

```js
const arr=[1,2,3,4,5,6]
arr.splice(1,3,20,30,40)
console.log(arr) // [ 1, 20, 30, 40, 5, 6 ]
// 从第2个位置开始删除3个元素，然后在第2个位置之后填充20，30，40
```

### 在数组首尾插入删除元素

在数组首尾插入/删除元素，有四种情况：
* push() :在数组尾部增加任意数量的元素，并选择性返回数组的新长度。
* pop(): 删除数组的最后一项，并选择性返回刚刚删除的最后一项。
* shift() :删除数组的第一项，并选择性返回刚刚删除的第一项。
* unshift():在数组开头添加任意数量的元素，并选择性返回数组的新长度。

上述"选择性返回"的意思是可以接收返回值，也可以不接收。例如：

```js
const arr1 = [1,2,3]
arr1.push(4)  // 不接收返回值，此时arr1=[1,2,3,4]

const arr2 = [4,5,6]
```

对数组的首尾进行增减元素的示例如下：

```js
const arr =[2,3]  
arr.push(4)  // 在尾部压入一个新元素，此时arr = [2,3,4]
arr.push(5,6,7)  // 在尾部一次性压入3个新元素，此时arr=[2,3,4,5,6,7]
arr.pop()   // 从尾部弹出最后一个元素，此时 arr = [2,3,4,5,6]
arr.unshift(1)  //从首部压入一个新元素，此时arr= [1,2,3,4,5,6]
arr.unshift(-3,-2,-1,0)  // 在首部一次性压入4个新元素，此时 arr= [-3,-2,-1,0,1,2,3,4,5,6]，注意压入的顺序
arr.shift()  // 从首部弹出第一个元素，此时arr =[-2,-1,0,1,2,3,4,5,6]
console.log(arr) // [-2,-1,0,1,2,3,4,5,6]
```

###  数组元素的默认值


如果没有给定数组的某个元素的具体值，那么该元素就会被赋予默认值undefined，例如：

```js
const arr = new Array(3)
console.log(arr[0]) // undefined 
```


### 数组元素的排序



对数组排序要用到两个函数：sort()和reverse()，这两个函数本质一样，只是一个正序一个倒序。

sort()函数接收一个callback函数作为参数，该函数只需要给出谁大谁小的定义逻辑即可，该函数接收两个值，需要返回正数、0、负数表示排序谁排在前面。这两个函数都会直接修改原数组。

需要特别提醒的是，如果不给sort()传入排序函数，sort()会按照字符串的形式升序排序，哪怕所有元素都是数字，例如：

```js
const arr = [1,3,11,222,2]
arr.sort() )
console.log( arr )    //=> [1,11,2,222,3]，这显然不符合我们的预期
```

来继续看下面几个例子。

对元素均为字符串的数组进行升序排序：

```js
const arr = ['zhang san', 'li si', 'wang wu','zhao liu']
arr.sort( )  
console.log(arr)         // => ['li si', 'wang wu', 'zhang san', 'zhao liu'] ，默认会按照元素的字符进行排序
```

对元素均为数值的数组进行排序，默认为升序：

```js
const arr = [1,3,11,222,2]   
arr.sort( (value1,value2)=>value1-value2 )  
console.log(arr)  //=> [ 1, 2, 3, 11, 222 ]
```

这个例子让参数作减法，返回正数、负数以决定排序逻辑。

在实际应用中，并不是都只对数值或字符串进行排序，比如下面这个例子，无论是什么数组，都应该按照赵、钱、孙、李、周、吴、郑、王的顺序排列：

```js
const str = "赵、钱、孙、李、周、吴、郑、王"
const standard = str.split('、')
const arr = ['王' , '李' ,'周', '赵' ,'吴','钱','郑','孙' ]
arr.sort ( (value1,value2) => standard.indexOf(value1)-standard.indexOf(value2)) 
console.log(arr)
```

这个例子使用了数组的indexOf()方法，通过在标准数组中查询索引，再将索引作减法，以确定谁排在前面。

# 原型链


JavaScript最最初就支持类的定义，不过，ES6之前是使用构造函数的方式，ES6正式支持使用class关键字定义一个类。这两种方式的底层原理是相同的，都是基于原型的继承。

多个实例往往需要共享一些方法，因此我们定义一个类，作为多个实例的构造器，每个实例都使用这个命名空间中的成员。例如，通过Array构造函数实例化了arr1和arr2，我们就说arr1和arr2都继承了Array。Array默认存在一个共享空间，供实例调用，这个共享空间就是实例的原型，默认为构造函数或类的prototype属性的值，即Array.prototype。

类本质上是一个命名空间，包含两个空间：

* 静态成员，可以直接被类调用，例如Array.from()、Object.values()。

* prototype对象，这个对象里面的成员是供实例使用、供子类继承的。例如Array.prototype.forEach()。

虽然不是ES标准，但是大多数浏览器都为实例或子类提供了`__proto__`属性，该属性的值有两种情况：

* 实例对应的类的prototype对象

* 子类的prototype对象对应的父类的prototype对象

例如：

```js
console.log([].__proto__===Array.prototype)
// =>true，空数组实例对应的类是Array

console.log(Array.prototype.__proto__===Object.prototype)
//=> true，Array的父类是Object

console.log(Object.prototype.__proto__===null)
//=> true，Object的父类是null
```

Object的父类是null，这只是标准上的规定，我们需要知道的是，所有类型的起点都源于Object。
我们将上面两个操作串联起来，就形成了一条原型链：

```js
console.log([].__proto__.__proto__===Object.prototype)
```

由此我们可以得出JavaScript的继承逻辑：Object是所有引用类型的继承起点，Object生出Array、Map、Set、Function等类型，再由这些类型生成实例。这些实例拥有丰富的方法，是因为可以通过原型链往上追溯，直到追溯到Object。

因此，要全面了解一个数据类型，从三方面入手：

* 看静态成员

* 看prototype对象中有哪些方法提供给了实例

* 通过`[类名].prototype.__proto__.__proto__....`不断往上追溯，寻找更丰富的方法，提供给实例使用

拿Array类型举例，从三方面入手：

* 看静态成员，有Array.from()、Array.of()、Array.isArray()等静态方法

* 看Array.prototype，有Array.prototype.length、Array.prototype.sort()、Array.ptototype.splice()、Array.prototype.forEach()等诸多方法供数组实例使用。

* 往上追溯，有Object.prototype.toString()、Object.prototype.toString()等方法，这些方法也可以被数组实例使用。

另外要提醒的是，追溯的过程遵循就近原则，从实例本身开始追溯，如果已经找到了成员，那么就会直接使用该成员，而不再继续追溯。

最后要强调的是，不要修改内置类型的prototype对象，也不要修改默认的`__proto__`指向，这些都会改变内置类型本身的行为。实际上，JavaScript语言规定的原型链是让我们去使用的，不是让我们去修改的，在绝大部分情况下，我们用好实例及其API就足够了。JavaScript不是偏向面向对象的语言，其更多侧重于函数式编程。但是对于原型和原型链这个知识点，我们一定要深入理解，这是Javascript语言的核心特性之一。


# 代理

ES6标准新增的代理与反射为开发者提供了拦截并向基本操作嵌入额外行为的能力。比如我们在读取或设置一个Object的属性的值的时候，有时候需要加入额外操作，以提供响应式的能力。大受欢迎的Vue3.x就大量运用了这种特性，成为最受欢迎的响应式框架。

## 代理

代理就是目标对象的抽象，它拦截了外界对目标对象的直接访问，从而有效的保护了目标对象。拦截操作全部都定义在捕获器对象中。

虽然ES5时代的Object.defineProperty()方法也能实现类似的目标，但是它对于目标对象是破坏性的操作，而我们今天要说的代理是一种非破坏性的操作。

## 创建空代理

空代理就是什么操作也不拦截，这个时候的代理对象只是起到一个“传话筒”的作用。从代码表现来看，此时捕获器是一个空对象。

```js 
const target = {a:1, b:2}
const handler = {}    // 拦截操作是空的
const proxy = new Proxy(target,handler)
proxy.a // => 1  // 如实返回
proxy.b  // =>2
```

## get()捕获器、set()捕获器和反射API

实际上，使用代理最常见的就是在捕获器之中添加get()和set()方法。get()方法接收三个参数，分别是：目标对象，正在读取的目标对象的属性，代理对象。set()方法接收四个参数，分别是：目标对象，正在设置的目标对象的属性，设置的新值，代理对象。

同时，利用Reflect对象的API，可以快速将对代理的操作传递到目标对象上。

```js
const obj = {a:1, b:2}
const handler = {
    get(target,property,receiver){
        console.log(`你正在读取${property}属性`)
    },
    set(target,property,value,receiver){
        console.log(`你将${property}属性的值改成了${value}`)
        Reflect.set(...arguments)      // 将修改操作传递到目标对象上
    },
}
const proxy = new Proxy(obj,handler)
console.log(proxy.a)  // =>'你正在读取a属性'
proxy.b = 3    // => '你将b属性的值改成了3'
console.log(obj.b)  //=>3，目标对象的属性值也跟着改了
```


# 迭代器和生成器

## 可迭代对象

对于某种数据类型，如果它的元素可以按照确定的顺序进行有限的读取，那么我们认为这个数据类型是可迭代对象。所以，可迭代对象有两大关键特征：元素的数量是有限的；元素的顺序是确定的。

因此，数组、Map、Set都是可迭代类型。要特别注意两种类型：string是可迭代对象，里面的字符是它的元素；而Object类型不是可迭代对象，因为Object的元素的顺序是不确定的。

## 从可迭代对象创建迭代器

所有的可迭代对象都有一个`[Symbol.iterator]()`方法，使用该方法可以返回一个迭代器

```js  
const arr = [1,2,3]  
const iter = arr[Symbol.iterator]()  
```

返回的迭代器有一个next()方法，不断得弹出元素值，done属性为false表示还有值可以被弹出，直到done属性变为true表示至此所有元素已经“耗尽”：

```js
iter.next()   //=> {value:1, done:false}
iter.next()  // => {value:2, done:false}
iter.next()  // => {value:3, done:true}，元素耗尽
iter.next()  //=> {value:undefined ,done:true}，后面的值都将是undefined
```

## 生成器

生成器的作用是生成一个自定义的可迭代对象，通过yield不断生成元素，通过return生成终止。生成器是一个函数，与普通函数的区别是在函数名称前面加上了一个星号。

```js
function * generator() {
    yield 1
    yield 2
    return 3
}
const iter = generator()
iter.next()   //=> {value:1, done:false}
iter.next()  // => {value:2, done:false}
iter.next()  // => {value:3, done:true}，元素耗尽
iter.next()  //=> {value:undefined ,done:true}，后面的值都将是undefined
```

## 可迭代对象的forEach()方法

forEach()是大多数可迭代对象都具有的方法，forEach()方法接收一个回调函数作为参数，该函数接收三个参数：

element：可迭代对象的元素

index：该元素的索引位置

array/map/set：可迭代对象本身，可以根据当前可迭代对象的类型定义一个意义明显的参数名称。

```js
const map = new Map().set('a',1).set('b',2).set('c',3)
map.forEach((element,index,map)=>{
console.log(`键${index}的值是${element}`)
})
// 输出：
// 键a的值是1
// 键b的值是2
// 键c的值是3
```


# 对象



###  新建对象实例

Object是JavaScript中最常见的数据类型，也是其它引用类型的基类。一个对象实例由一个或多个名 / 值对组成。

创建对象的方法有多种，第一种是使用对象字面量的方式新建一个对象实例：

```js
const obj = {a:1,b:2}
```

第二种方式是使用new Object()创建对象，如下：

```js
const obj = new Object({a:1, b:2})
```
第三种方式是使用Object.fromEntites()创建对象，这个方法接受一个可迭代对象，例如一个二维数组：

```js
const arr = [ ['a',1],['b',2] ]

const obj = Object.fromEnties(arr)

console.log(obj)  // {a:1, b:2}
```

也可以接收一个Map类型的实例，例如：

```js
const map = new Map([ ['a',1],['b',2] ])

const obj = Object.fromEnties(map)

console.log(obj)  // {a:1, b:2}
```

第五种方式是读取一个JSON字符串创建对象，该字符串包裹的是一个对象字面量，也可以是通过Node.js的fs模块的readFileSync()方法从本地某个.json文件读取的。

通过JSON字符串创建对象的示例如下所示：

```js
const str = '{'a':1,'b':2}'

const obj = JSON.parse(str)

console.log(obj)  // {a:1, b:2}
```


###  对象的简写属性


Ecamscript 6为对象新增了简写特性，这并没有改变对象本身的行为，但极大地提升了编码和阅读的效率。

上面这个例子演示的是属性值是变量的情况，但是又有一个特征，就是：属性名和属性值的标识符是一样的，例如：

```js
const a=1
const b=2
const obj={a:a,b:b} 
console.log(obj)  // {a:1, b:2}
```

这时候，就可以使用简写方式：

```js
const a=1
const b=2
const obj={a,b} // 等价于 const obj = {a:a, b:b}
console.log(obj)  // {a:1, b:2}
```

除了属性可以简写以外，方法也有简写的方式，就是去掉冒号和function关键字，例如：

```js
const obj = {
	a:1,
   	b:2,
   	sum(){
    	return a+b
	}
}

console.log(obj.sum())
```

在有些场景中，可以看到对象的最后一个属性值后面还留有一个逗号，这种逗号叫做拖尾逗号。拖尾逗号可用在需要经常增加、删除对象属性的情况，可以保证每次操作的一致性，避免发生低级的语法错误。

不过，要特别注意的是，JSON格式不支持拖尾逗号。

###  对象的可计算属性

对象的可计算属性是ES6新增的特性。有些情况下，属性名是一个变量，无法使用点号语法得到属性值，此时可以使用方括号的方式读取属性，例如：

```js
const key1 = 'a'
const key2 = 'b'
const obj = {}

obj[key1] = 1
obj[key2] = 2

console.log(obj)   // {a:1, b:2}
```

使用中括号的优势是可以通过变量访问属性。

对于一个确定的属性名称，除了使用点号外，也可以使用中括号读取属性，但此时需要使用引号：

```js
const obj = {}

obj['a'] = 1
obj['b'] = 2
console.log(obj)  // {a:1, b:2}
```

### 对象的枚举

对象是一组名/值对，可以使用如下方法枚举属性名、属性值、名/值对：

```js
const obj =  {a:1, b:2, c:3}

const keys = Object.keys(obj)
console.log(keys)  //   [ 'a', 'b', 'c' ]

const values = Object.values(obj)
console.log(values)  //  [ 1, 2, 3 ]

const entries = Object.entries(obj)
console.log(entries)  // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
```


###  对象的属性名和属性值


使用点号可以访问或者设置对象的属性值：

```js
const obj = {a:1,b:2}
console.log(obj.a)
obj.a=2
comsole.log(obj)
```

除了点号，还可以使用中括号访问或设置对象的属性值，注意需要对属性名使用引号：

```js
const obj = {a:1,b:2}
console.log(obj["a"])  
``` 

以上两种方式适用于属性名是字面量的情况下，如果属性名是个变量标识符，那么只能使用中括号，且不能加引号，例如：

```js
const key1='a'
const key2='b'
const  obj = {}
obj[key1]=1   // 解析为obj["a"]=1
obj[key2]=2 // 解析为obj["b"]=2
```

对象的属性值也可以是变量，例如：

```
const a=1
const b=2
const obj={a:a,b:b}
// 解析为 const obj={a:1,b:2}
```

对象的成员不仅可以是变量，也可以是函数。按照习惯，在对象中，变量被称呼为属性，函数被称呼为方法。例如：

```js
const obj = {
  a:1 ,
  b:2,
  c:function(){
    console.log('hello,world')
  }
}
```

在上面的代码中，对象实例obj有两个属性a和b，有一个方法c()。


###  对象的属性特性


对象的属性的特性属于比较复杂但不是很难的知识点。

对象的成员分为属性和方法，而对象的属性又分为：
- 数据属性
- 访问器属性

### 对象的数据属性

一般情况下，对象的属性就是数据属性，例如：

```js
const obj = {a:1,b:2}
```

这里，a、b均为数据属性。

对象的数据属性有4个特性：

- **value**：表示该属性的值
- **writable**：表示该属性的值是否可以被修改
- **enumerable**：表示该属性是否可以通过for-in 循环遍历，默认情况下为true，如果将该特性设置为false，则for-in循环时将遍历不到该属性。
- **configurable**：表示是否可以通过delet删除该属性，或者是否可以修改其特性。

这里要注意的是writable和configurable的区别，writable侧重于能不能修改属性的值，而configurable侧重于能不能配置该属性的特性。

### 对象的属性的特性使用

Object.defineProperty()方法来定义：

```js
const obj = {}

Object.defineProperty(obj,'a',{
	value:1,
  	writable:false,   // 不能修改该属性的值
  	enumerable:true,
  	configurable:true
})

console.log(obj.a)    // 1
obj.a = 2
console.log(obj.a)  //  1 ： 不会报错，但是静默失败
```

### 对象的访问器属性

对象的访问器属性有4个特性：

- **get**：获取函数，在读取该属性时调用。
- **set**：获取函数，在写入属性时被调用。
- **enumerable**：与数据属性的作用相同。
- **configurable**：与数据属性的作用相同。

这里的难点是get和set，如果对属性只定义了get函数，那么该属性就是只读的，必须同时定义get和set函数才说明该属性是可写的，例如：

```js
const obj = {a:1}

Object.defineProperty(obj,'b',{
	get(){return this.a},
  	set(value){this.a = value}
})

console.log(obj.b)    // 1
obj.b = 2
console.log(obj.a)  //   2
```

这里a是数据属性，b是a的访问器属性，可读可写。再来看一个只读访问器的例子：

```js
const obj = {a:1}

Object.defineProperty(obj,'b',{
	get(){return this.a},
})

console.log(obj.b)    // 1
obj.b = 2
console.log(obj.a)  //   1 ： 不会报错，但是静默失败
```

### 对象的拖尾逗号

一个对象往往有多个名/值对，各个名/值对之间使用逗号隔开，需要说明的是，最后一个名/值对后面的逗号也是允许的，并不会报错：

```js
const obj = {
	a:1,
	b:2,
	c:3,
}
```

这个宽松的语法特性在需要频繁复制粘贴追加的属性时非常有用，因为格式是统一的，我们不需要频繁的增减逗号。

不过，需要特别说明的是，JSON的写法类似于对象，不过，JSON的写法与对象有两个最大的不同：
* JSON字符串中的对象的属性名必须加引号。
* JSON字符串中，对象不允许使用拖尾逗号，使用会报错。

###  对象的for in方法


可迭代对象可以使用for of 循环遍历，而Object类型并非可迭代对象，不过可以使用for in 方法遍历其属性名和属性值，例如：

```js
const obj = {a:1, b:2, c:3}

for (let key in obj){
	console.log(key)  // a  b  c
}
```

从这里可以看出，如果只有一个参数，那么只遍历属性名称。




### 对象的toString()方法

所有对象实例的toString()方法会返回一个固定的字符串`[object Object]`，例如：

```js
console.log({}.toString())  // [object Object]

console.log({a:1, b:2}.toString())  // [object Object]
```

当对象与对象相加，对象与字符串相加时，会隐式调用toString()，如下：

```js
console.log({}+{})  //   [object Object][object Object]
console.log(({}+{}).length)  // 30

console.log({}+'Hello')  // [object Object]Hello
```

### 对象的valueOf()方法

对象示例的valueOf()返回对象本身，例如：

```js
console.log({}.valueOf())  //  {}
console.log({a:1, b:2}.valueOf())  //  { a: 1, b: 2 }
```


###  对象方法的简写

对象往往具备多个方法，方法其实就是函数，只不过在对象的命名空间中我们称之为方法，例如：

```js
const obj = {
	a:1,
  	b:2,
  	say:function(){
    	console.log('Hello,World!')
    }
}

obj.say()
```

此时可以省略方法名称后面的冒号和function关键字：

```js
const obj = {
  a:1,
  b:2,
  say(){
    console.log('Hello,World!')
  }
}

obj.say()
```

### 对象属性的读取和赋值

通常情况下，对象的属性名是明确的字面量，这时候时候点号选取对象属性，读取或写入属性的值，例如：

```js
const obj = {a:1, b:2}
console.log(obj.a)

obj.a = 2
console.log(obj.a)
```

使用点号可以连续读取属性，例如：

```js
const obj = {a:{a:1,b:2}, b:2}

console.log(obj.a.a)
```

这里的两个属性名a并不冲突，因为它们从属于不同的对象命名空间。


###  对象属性名的简写

在很多时候，对象的属性值是一个变量标识符，而这个标识符和属性名是一样的，例如：

```js
const a = 1
const b = 2

const obj = {a:a, b:b}
console.log(obj)  // {a:1, b:2}
```

这种情况下，可以使用一种简化的语法，如下：

```js
const a = 1
const b = 2

const obj = {a , b}
console.log(obj)  // {a:1, b:2}
```


### 使用Object.assign()合并对象

可以使用Object.assign()合并对象，例如：

```js
const obj1 = {a:1, b:2}
const obj2 = {a:2, c:3}

const obj = Object.assign(obj1,obj2)
console.log(obj)  // { a: 2, b: 2, c: 3 }
```

合并对象时，如果存在同名属性，则后边的对象属性值会覆盖前面的属性值。

### 使用三点操作符合并对象

作为一种语法糖，可以使用三点操作符合并对象：

```js
const obj1 = {a:1, b:2}
const obj2 = {a:2, c:3}

const obj = {...obj1,...obj2}
console.log(obj)  // { a: 2, b: 2, c: 3 }
```

最后，要特别说明的是，无论使用Object.assign()，还是使用三点运算符，只推荐源对象不包括嵌套属性、并且属性值是原始值的时候使用，此时新对象对于源对象是独立的，不存在深浅拷贝的问题。如果源对象包括嵌套属性、或者属性值存在非原始值（其实嵌套属性本身也意味着属性值非原始值了），那么新对象的某些属性可能还引用着源对象，这里面有一些“语法陷阱”需要避免，建议先使用其它方式将对象打平，再进行合并。


# Map和Set


### Map类型基础
Map类型是ES6新增的集合引用类型，对于强调键值映射和迭代的操作来说，Map类型比Object类型更加实用。Map的优势在于：
* 是可迭代对象，这意味着不需要像Object那样使用for-in循环来遍历元素。
* 更加方便的增删改查操作。

使用构造函数新建一个空Map：

```js
const map = new Map()
```

要在新建的时候同时填充内容，可以使用set链式操作：

```js
const map =new Map().set('a',1).set('b',2)
```

除此之外，new Map()方法接收一个二维数组作为新Map实例的键值对：

```js
const map =new Map([ ['a',1],['b',2] ])
```

因此，可以使用Object.entreis()静态方法将对象的元素填充进map：

```js
const obj = {a:1,b:2}
const map=new Map(Object.entries(obj))   
```
 
打印map时，输出结果是这样的：

```js
const map =new Map().set('a',1).set('b',2)
console.log(map)
// => Map(2) { 'a' => 1, 'b' => 2 }
```

### Map到数组的转换

对map实例使用下面三种方法，可以返回可迭代对象：
* keys()，返回由键组成的新数组
* values()，返回由值组成的新数组
* entries()，返回由键值组成的二维数组

例如：

```js
const map = new Map().set('a',1).set('b',2).set('c',3)

console.log(map.keys())  //=>[Map Iterator] { 'a', 'b', 'c' }

console.log(map.values())// => [Map Iterator] { 1, 2, 3 }

console.log(map.entries())// => [Map Entries] { [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] }
```

使用Array.from()或者`[...iterator]`，就可以将上面几个可迭代对象转换为真正的数组：

```js
// 承接上文代码
console.log([...map.keys()])// => [ 'a', 'b', 'c' ]

console.log([...map.values()]) // => [ 1, 2, 3 ]

console.log([...map.entries()]) // => [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
```


### Map的方法

要增加或修改Map实例的键值，使用set()方法，允许链式操作，如果set()方法中的键名已在map中存在，那么就会修改键对应的值，否则就是增加键值，例如：

```js
const map =new Map([ ['a',1],['b',2] ])
map.set('b',3)   //修改键对应的值
map.set('c',3)   // 增加键值
map.set('d',4).set('c',5).set('f',6)   //链式操作
console.log(map)
//=> Map(6) { 'a' => 1, 'b' => 3, 'c'=>3,'d'=>4,'e'=>5,'f'=>6}
```

使用has()方法可以查询map是否存在某个键：

```js
// 承接上文的map
map.has(' a ')   //   => true
map.get( ' aa ' )  //  => false
使用get()方法可以通过键查询对应的值，如果键不存在，则返回undefined：
// 承接上文的map
map.get('a')     // 1
map.get('aa')    //  undefined
```

使用delete()方法删除map中的键，删除成功返回true，删除不成功(键不存在)则返回false，例如：

```js
// 承接上文的map
map.delete('f')    // =>true
map.delete('f')   // =>false，键已经在上一步被删除了
```

要取得map的键值对的个数，使用size属性：

```js
// 承接上文
console.log(map.size)   // =>5
```

如果要清空map中所有的键值对，使用clear()方法，例如：

```js
// 承接上文
map.clear()
console.log(map.size)   // 0
console.log(map)  // Map(0) {}
```

### Set类型

Set数据类型类是ES6新增的集合引用类型，表示元素唯一的集合。结构上类似于数组，与数组的区别是Set的元素不能重复。

可以使用构造函数新建一个空的Set实例：

```js
const set = new Set()
```

该函数也接收一个可迭代对象：

```js
const set = new Set([1,2,3])
```

打印一个set实例会输出如下结果：

```js
const set = new Set([1,2,3]
console.log(set)  //=> Set(3) { 1, 2, 3 }
```

set实例的size属性返回set的元素个数：

```js
const set = new Set([1,2,3])
console.log(set.size)
```

使用add()方法添加元素，可使用链式操作：
```js
const set = new Set().add(1).add(2).add(3)
```

要查询是否包含某个元素，使用has()方法，该方法返回一个布尔值：

```js
const set = new Set([1,2,3])
console.log(set.has(2))
console.log(set.has(6))
```

要删除某个元素，使用delete()方法，可以选择接收返回值，返回值是一个布尔值，表示是否已删除成功:

```js
const set = new Set([1,2,3])
set.delete(1)
console.log(set.delete(2))  //=>true
console.log(set.delete(2))  //=> false
```

要清空set的所有严元素，使用clear()方法：

```js
const set = new Set([1,2,3])
set.clear()
console.log(set.size)  //=>0
```


# 函数



###  箭头函数


箭头函数省去了function关键字，改而使用胖箭头来隔开参数列表和函数体：

```js
let fun = (arg1,arg2,...) =>{ 
    // statements
}
```

箭头函数通常被当作参数传递给其它函数使用，例如：

```js
const  arr=[1,2,3]
arr.forEach(x=>x*2)
console.log(arr)  //=>[2,4,6]
```

使用箭头函数有几个注意事项。

第一，当参数只有一个参数时，可不加圆括号。没有参数或者多于1个参数，都需要加圆括号，例如：

```js
const  fun1 = x=>x+1  // 只有一个参数
const  fun2 = ()=>1   // 没有参数
const  fun3 = (x,y)=>x+y  // 多于一个参数
```

第二，当箭头函数的函数体只有一行，并且这一行是赋值、打印、返回值的时候，不能加花括号，也不能写return，例如：

```js
// 这两种写法都是错的：
const  fun1= x => return x+1
const  fun2= x => {return x+1}

// 这三种写法是对的：
const  fun3= x =>x+1
const  fun4= x =>console.log(x)
const  fun5= x =>x.a=1
```

第三，当箭头函数的函数体只有一行，并且这一行返回一个对象时，需要在花括号两边加上圆括号，例如：

```js
const fun = () => ({a:1,b:2})
console.log(fun())  // {a:1,b:2}
```

### 立执行函数


匿名立执行函数


```
(function() {

  console.log(1)

})()
```


具名立执行函数
```
(function log() {

  console.log(1)

})()

```

传参

```
(function add(a, b) {

  console.log(a + b)

})(1, 2)
```


###  默认参数值


在定义函数时，可以为参数赋予一个默认值。如果调用该函数时没有传递实参，那么就会使用默认值传递，这比以往的默认undefined值更方便了一步。

```js
function  sum(a=0,b=0){
  return a+b
}

console.log(sum())    // => 0
console.log(sum(1))   //=> 1
console.log(sum(1,2)) //=>3
```



###  函数的arguments对象


对于使用了function关键字的函数声明或函数表达式，函数内部有一个arguments对象，这是一个类数组对象，可以通过Array.from(arguments)将其转化为数组。arguments.length表示实参的个数。`arguments[n]`表示第n个参数。

注意，箭头函数没有arguments对象。

有了arguments对象，即便是不写形参，也可以定义函数，例如：

```js
function sum(){
	const result=Array.from(arguments).reduce((prev,cur)=>prev+cur)
	return result
}
 
console.log(sum(1,2))
console.log(sum(1,2,3))
```




### 函数内部的this对象

this，顾名思义，就是“这个”。

this被用在对象的方法中，表示“这个对象”。

函数可以被用作对象的方法。同一个函数，被不同对象调用时，上下文是不一样的，this指代调用的上下文对象。

```js
function sayName(){
	console.log(`I am ${this.name}`)   
}

const zhangsan = {
	name: 'Zhang San',
	sayName: sayName
}
const lisi = {
	name : 'Li Si',
	sayName : sayName
}

zhangsan.sayName()   // I am Zhang San  
lisi.sayName()   // I am Li Si   
```


###  参数收集和参数扩展


定义函数时，如果不确定参数的个数，可以进行参数收集。参数收集的意思是只定义一个参数列表，未来传递实参时，无论参数有多少个，都会作为一个数组传递进来。这样我们就解决了参数个数不确定的问题，例如定义一个求和函数：

```js
functionsum(...values){
     constresult = values.reduce((prev,cur)=>prev+cur)
     console.log(result)
}
```

这里将参数打包成一个数组，函数只针对数组进行处理，规避了参数个数不确定的问题。调用函数时，使用sum(1,2)或者sum(1,2,3,4)都是能进行求和的，因为总是会打包成一个数组处理：

```js
[1,2].reduce((prev,cur)=>prev+cur)
[1,2,3,4].reduce((prev,cur)=>prev+cur)
```

现在，假设有一个现成的数组：

```js
constarr = [1,2,3,4]
```

我们想调用上面定义的sum()函数对其元素进行求和，我们就需要先将这些元素一一取出，再依次传参，就像这样：

```js
sum(arr[0],arr[1],arr[2],arr[3])
```

这无疑是麻烦的，使用扩展操作符，可以自动将数组解包：

```js
sum(...arr)
```

这一行将会被解析为：

```js
sum(1,2,3,4)
```

这就是参数扩展。

另外，请注意，大家可能会跟上面的参数收集搞混，认为直接传数组是可以的，实际上，如果直接传递数组sum(arr)，那么函数体中就会是这样的操作：

```js
[[1,2,3,4]].reduce((prev,cur)=>prev+cur)
```

这是无法求出结果的。

可以看到，参数收集和参数扩展分别用于函数定义和函数调用。一个将形参列表打包，一个用于实参的快速解包。



### 函数的call()和apply()方法

函数的call()方法是另一种形式的函数调用，例如`a.b(1,2)`等价于`b.call(a,1,2)`。

再比如Symbol.iterator.call(arr)。由于这个例子中被调用的函数是System.iterator，中间有个句点，所有只能写成这种形式。

apply()与call()相比只是传参的形式不同。


###  函数的暂时性死区

参数是按顺序被赋值的，因此，前面的参数不可以引用后面的参数的默认值，也不能引用函数体中的成员值，这就是“暂时性死区”规则，例如：

```js
function  example(a=b,  b=1,c=data){
    const data=1
}
```

这段代码有两处错误：
* 参数a不能引用后面的参数b的值
* 参数c不能引用后面的函数体成员data的值

而下面这个例子是正确的：

```js
function  example(a=1 , b=a){
    const data=b
    console.log(data)
}
example()      //=>1
```

其实，简单来讲，所谓**暂时性死区**，不过也遵循了局部作用域的声明规则。使用let和const声明的时候，声明和引用是按顺序来的，即只能先声明后引用，后面的引用前面的，反过来不可以，不存在声明提升。


# 类和实例


###    新建类

使用class关键字新建一个类，示例如下：

```
class Example{
        a = 0;
        b = 0;

        function foo(){
                console.log(“hello，world”)

        }
}

class p1 = new Example()
p1.a=1
p1.b=2
p1.foo()


class p2 = new Example()
p2.a ='hello'
p2.b='world'
```

在上面的代码中，a、b都是实例属性，foo是实例方法。通过new 新建一个实例，然后可以读写属性、方法。

###   静态成员

静态成员是属于类，而不属于实例，通过类读取和修改。要设置静态成员，使用static关键字，例如：

```
class Example{
        static a = 0;
}

Example.a = "hello,world"
console.log(Example.a)
```

###   私有属性

普通属性可以通过 ` 实例.属性 ` 的方式获取和修改，而私有成员则不能通过这种方式获取和修改，如果要读写私有成员，只能通过方法。要设置私有属性，使用#符号，无论是初始化还是引用私有属性，都需要使用井号。示例如下：

```
<script>
class Example {
        a = 0;
        #b = 0;

        getB(){
                return this.#b
        }
        
        setB(newValue){
                this.#b = newValue
        }
}

const p = new Example()
console.log(p.getB())

p.setB('hello')
console.log(p.getB())

</script>

```

###   属性默认值
可以在定义类的时候，给属性一个默认值，例如：

```
class Example{
        a = 0;
        b = 0;

        function fun1(){
                console.log(“hello，world”)

        }
}
```

虽然不给a、b赋默认值也可以通过语法检测，但给属性赋默认值是一个好的编程习惯。


# 期约和异步


## 期约

期约是为了简化异步编程而设计的语言特性。

使用new Promise()构造函数可以新建一个期约，该函数接收一个函数作为参数，我们先传入一个空函数：

```js
const p=new Promise(()=>{})
console.log(p)
// 输出： Promise { <pending> }
```

上述输出表示期约的状态，目前为`<pending>`。

上面的函数参数又可以接收如下两个函数参数：

* resolve() : 可将期约的状态变为resolved

* reject() : 可将期约的状态变为rejected

示例如下：

```js
const p=new Promise((resolve,reject)=>resolve())
console.log(p)
// 输出：Promise { undefined }
```

这个表示期约的值是undefined，期越的状态是resolved（默认）。

现在，给定一个期约值：

```
const p=new Promise((resolve,reject)=>resolve(1))
console.log(p)
//输出： Promise { 1 }
```

将期约变为rejected状态：


```
const p=new Promise((resolve,reject)=>reject(1))
console.log(p)
// 输出： Promise { <rejected>  1 }
```

这个输出结果表示期约当前的状态是rejected，期约值是1。同时，此时控制台会输出一些错误信息，我们先不管它。

通过打印期约对象，我们可以发现，期约分为三种状态：

* pending 

* resolved

* rejected

期约的状态决定了后续的操作是调用then()还是调用catch()。期约值是期约链式操作的数据流转的第一步。

除了构造函数以外，可以使用如下方式快速创建期约：

```js
const  p1= Promise.resolve(1)
console.log(p1)
// 输出：Promise { 1 }

const  p2= Promise.reject(1)
console.log(p2)
//输出： Promise { <rejected> 1 }
```

## async

async是ES2017推出的异步函数关键字。

把函数声明为async意味着该函数的返回值将会是一个`<resolved>`状态的期约：

```js
async function test(){
      return 1 
      // 等价于：
     // return Promise.resolve(1)
}
console.log(test())  
//  输出：promise { 1 }
```

## 期约的实例方法和期约链

多层串联的回调函数本质上是多个函数的链式操作，上一个函数的返回值作为参数传递给下一个函数，使用期约对象的then()方法，就能实现链式操作，例如：

```js
const p = Promise.resolve(1)

p.then(x=>x+1)
.then(x=>x*2)
.then(x=>console.log(x))   //=>4
```

期约对象的链式操作有三个方法：then()、catch()、finally()。这三个方法都接收一个函数作为参数，表示下一步的操作。

当期约对象的状态变为resolved时，就可以调用then()，例如：

```js
const p = Promise.resolve(1)
p.then(x=>x+1)
           .then(x=>x*2)
           .then(x=>console.log(x))   //=>4
```


当期约对象的状态变为rejected时，就可以调用catch()，不过，一次正常的catch()之后，状态就会变为resolved，例如：

```js
const p= Promise.reject(1)
p.catch(x=>x+1)
             .then(x=>x*2)
             .then(x=>console.log(x))   //输出：4
```

期约对象无论是什么状态，都可以调用finally()。如下：

```js
const p= Promise.reject(1)
p.finally(()=>console.log('期约链开始'))
         .catch(x=>x+1)             
         .then(x=>x*2)
         .then(x=>console.log(x))
         .finally(()=>console.log('期约链停止'))  
```

期约链是一个串行操作，像流水线一样，每道工序可能包含：自己的操作、流转的数据，如果不显式或隐式地使用return为下一个操作提供数据，那么该步操作会直接将上一步的数据流转到下一步。

也就是说，每一步肯定有一个流转数据，就看你用不用、处不处理，每一步也肯定会输出流转数据到下一步。流转的数据就是每一步都回调函数的第一个参数，如下示例：

```js
const p= Promise.resolve(1)        
p.then((x)=>console.log('期约链开始'))
         .then(x=>{
               x=x+1                                
              return 3                    
          })
         .then(x=>x*2)                      
         .then((x)=>console.log(`现在流转的数          据是${x}`))
```

在上面这个例子中，由Promise.resolve()产生期约链条的流转数据1，每一步的操作其实就是一个箭头函数，箭头函数的第一个参数是流转的数据，函数体是对流转数据的处理或其它行为，第一个then()没有对流转数据进行处理，所以直接往下传递。第二个then()对流转数据进行处理，但是显式地return 3，此时流转数据就是3。第三个then()对流转数据乘以2，注意，根据箭头函数的规则，这一行其实隐式地return了6。最后一个then()是获取流转数据并输出。

由上面的几个例子还可以看出，期约的链式操作是打平的，解决了以往的回调函数层层嵌套的问题，写法上更直观，理解起来也更直接。不过，人们
对语法简洁性的追求是无限的，比起不断地使用then()，还有个更简洁的方式，那就是使用await。

## 顶层await

顶层await特性在ES2022标准中被推出。

async定义的函数依然是同步求值的，await关键字才是真正的异步。

以往，await只能写在async函数里面，ES2022新增了顶层await特性，允许await在函数外面书写。

要在node环境中测试最新(ES2022)的顶层await特性，需要将后缀名改为mjs。


           
# 正则表达式

###   正则表达式常用符号汇总

表示匹配数量的字符：

符号	|	说明
---	|	---
` + `	|	常用，一个或多个前一个字符（组）
` * `	|	0个或多个前一个字符（组）
` ？`	|	0个或1个前一个字符


用中括号表示单字符分组。中括号表示字符范围中的一个，只能匹配一个字符，例如：

示例	|	说明
---	|	---
` [1-9] `	|	数字1-9中的任意一个数字
` [a-f] ` 	|	字母a-f中的任意一个字母
` [a-zA-Z] `	|	大写和小写字母中的任意一个
` [abc123] ` 	|	这六个字符中的一个
` [^abc123] `	|	不是这六个字符中的一个
` [茴回囘囬] ` 	|	茴字的四种写法中的一个
` [abc|cde] `	|	匹配abc或cde，注意这里不是匹配一个字符

用圆括号包裹的内容视同一个字符，用于多字符分组。

表示字母、数字集合的符号：

符号	|	说明
---	|	---
` \d `	|	digital，任意数字，相当于` [0-9]` 
` \D `	|	任意非数字，相当于` [^0-9] ` 
` \w `	|	word，任意字母
` \W `	|	任意非字母
` \s `	|	space，任意空白字符
` \S `	|	任意非空白字符

需要转义的符号：

需要转义的符号	|	说明及使用方式
---	|	---
` ^ `	|	文本的开头，若要匹配该字符本身，需使用`\^`
` $ `	|	文本的结尾，若要匹配该字符本身，需使用`\$`
` . `	|	任意字符，若要匹配该字符本身，需使用`\. `
` * `	|	匹配0个或多个前一个字符（组），若要匹配该字符本身，需使用`\*`
` + `	|	匹配1个或多个前一个字符（组），若要匹配该字符本身，需使用`\+`
` ？`	|	匹配0个或1个前一个字符（组），若要匹配该字符本身，需使用`\?`
` = `	|	若要匹配该字符本身，需使用`\=`
` ! `	|	范围取反，若要匹配该字符本身，需使用`\!`
` : `	|	若要匹配该字符本身，需使用`\:`
` \| `	|	任选，匹配左边的子表达式或右边的子表达式。若要匹配该字符本身，需使用`\|`
` \ `	|	转义，若要匹配该字符本身，需使用`\\`
` / `	|	若要匹配该字符本身，需使用`\/`
` ( `	|	表示分组的起始，若要匹配该字符本身，需使用`\(`
` ) `	|	表示分组的结束，若要匹配该字符本身，需使用`\)`
` [ `	|	若要匹配该字符本身，需使用` \[ `  
` ] `	|	若要匹配该字符本身，需使用` \] `
` { `	|	命名捕获组，若要匹配该字符本身，需使用` \{ `
` } `	|	命名捕获组，若要匹配该字符本身，需使用` \} `

其它的不常见字符例如` @ `、` # `、` % `、` & `、` ~ `、` ' `、` " `则不需要转义。

匹配模式：

符号	|	说明
---	|	---
` g `	|	全局标志，意味着要找到所有匹配而不仅仅是第一个。
` i `	|	不区分大小写。
` m `	|	多行模式。类似于sed，对每一行进行匹配。这意味着`^`和`$`会匹配到每一行的开头和末尾，而不仅仅是文件的开头和结尾。

###   分组、前瞻和后顾

(?=@) 返回@符号前边的子字符串

正向后顾语法结构是`(?<=pattern)`
`(?<=@)`返回@符号后边的子字符串



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


# WebSocket

## HTTP协议的问题

HTTP协议有两大特点：
- 无状态的：不保存之前请求的数据。
- 被动的： 服务器被动的接受客户端的请求。

所以，HTTP协议只适用于请求网页、Web API这类情况，不适用于聊天这种情况，因为聊天需要服务器和客户端保持长时间的连接，且要让服务器可以主动向客户端发送数据。

虽然有些方法可以让HTTP协议实现聊天功能，就是轮询。客户端每隔一段时间（例如1秒中）就发送一次请求，看有没有新的消息，这种方式有点取巧，不够直接。

为了实现长连接和双向通信，WebSocket标准应运而生，目前大多数浏览器都能很好的支持WebSocket。


##  WebSocket服务端：Node.js ws模块实现

我们使用Nodejs的ws模块实现WebSocket服务器。首先安装ws模块：

```sh
npm i ws
```

然后编写server.js：

```js
const ws = require('ws')

const wss = new ws.Server({port: 3000})

// 监听connection事件
wss.on('connection', client => {
        
         // 监听message事件
    client.on('message', msg => {
            console.log(`from client:${msg}`)
       client.send(`from server:${msg} has been received`)
    })
})
```

首先导入ws模块，使用Server类指定端口即可开启一个WebSocket Server，一般命名为wss。

wss有一个connection事件，表示监听客户端的连接，当有新的客户端连接时触发。回调函数会传入一个client参数，表示特定的客户端对象。

每个客户端对象都有一个message事件，表示监听客户端的消息。回调函数会传入一个msg参数，表示该客户端发过来的消息。

客户端对象还有一个send()方法，表示发送消息给该客户端。

wss对象还有一个clients成员，这是一个类数组对象，表示所有的客户端对象。利用这个类数组对象的forEach()方法可以实现广播功能，即发消息给所有的客户端，进而实现群聊的功能。

运行 node server.js 就可以开启一个简单的WebSocket服务器。

##  WebSocket客户端：浏览器实现

WebSocket客户端使用浏览器实现，示例如下：

```html
<span>消息输入框：</span>
<input id="input" />

<button onclick="send()">发送</button>
<p>消息列表：</p>
<div id="lists"></div>

<script>

    const client = new WebSocket('ws://localhost:3000')

    // 输入框元素对象
    const input = document.querySelector('#input')
        
         // 发送消息给服务端
    function send() {
        client.send(input.value)
    }

    // 监听message，接收服务器的消息
    client.onmessage = msg => {
        document.querySelector("#lists").innerHTML += msg.data+'<br />'
    }

</script>
```

使用new WebSocket()传入ws协议地址加端口即可连接ws服务器，前提是ws服务器已开启。

示例中的ws是客户端对象，ws.send()表示发送数据到服务器。ws.onmessage监听服务器的消息，并指定如何处理消息。

# Socket

## Socket通信

### Socket服务端：Node.js net 模块实现

Socket通信的服务端代码示例如下：

```js
const net = require('net')
const server = net.createServer()

// 监听客户端的连接
server.on("connection", client => {

    // 监听客户端的消息：data事件
    client.on("data", data => {
        console.log(data.toString().trim())

        // 发送给客户端
        client.write('服务器已收到')
    })
})
server.listen(8888, () => console.log('服务器已启动'))
```

### Socket客户端：Node.js net模块实现

Socket通信的客户端使用Node.js实现，代码如下：

```js
const net = require('net')
const client = net.createConnection({host:'127.0.0.1',port:8888})

// 监听客户端命令行的输入：data事件，发送给服务端
process.stdin.on('data',data=>client.write(data.toString()))

// 监听服务端的消息：data事件
client.on('data',data=>console.log(data.toString().trim()))
```


# Web API

## 位置
要获取设备的位置和速度，可以通过navigator.geoloaction.getCurrentPosition()方法，通过解析回调函数的参数可以得到经度、纬度、设备前进方向和速度，示例如下：

```html
<script>
        navigator.geolocation.getCurrentPosition(position=>{
                // 经度
                console.log('经度', position.coords.latitude)
                // 纬度
                console.log('纬度', position.coords.longitude)
        
        })
</script>
```

##  桌面通知

可以直接调用Notification()函数即可创建一条通知，代码示例如下：

```html
<script>
        new Notification( 'Title', {body:'content', icon:'notice.png'} )
</script>
```

不过，需要注意两点：
-  不能直接以本地文件运行，要以服务器形式运行
-  需要手动允许通知权限

首先，点击浏览器链接左边的标记，点击“此网站的权限”。

![通知权限](img/通知权限.png)

找到通知那一栏，设置为“允许”。

![通知权限2](img/通知权限2.png)

这样，就可以看到桌面通知了。

##  Local Storage

要在浏览器本地存储数据，可以使用cookie、local storage、session storage，这三种对象的区别如下：
- cookie： 最古老的方式，使用特定的格式字符串存储和传输本地数据。
- local storage： 持久化的本地存储，在关闭浏览器后依然有效。
- session storage： 临时的本地存储，在关闭窗口后删除。

下面讲解localStorage对象的使用方法。

要存储键值对，使用setItem()方法：

```js
localStorage.setItem(key, value)
```

也可以直接使用点号语法：

```js
localStorage.key = value
```

使用getItem()方法读取键对应的值：

```js
localStorage.getItem(key)
```

也可以直接使用点号语法：

```js
console.log(localStorage.key)
```

使用removeItem()方法可以删除键值对：

```js
localStorage.removeItem(key)
```

使用clear()方法可以清空所有本地存储的键值对：

```js
localStorage.clear()
```

##   postMessage()

postMessage()方法用于主页面向子页面发送消息。

首先，在需要发送消息的源窗口中，通过 iframe 标签嵌入另一个窗口，然后，iframe元素调用postMessage()方法发送消息，主页面main.html的代码如下：

```html
<h1>main page</h1>
<!-- 嵌入sub.html -->
<iframe src="sub.html" id="sub"><iframe>   

<script>
        // 向sub.html发送消息
        document.querySelector('#sub').contentWindow.postMessage('message from main page!')
</script>
```

然后，在子页面sub.html就可以监听消息：

```html
<h2>sub page</h2>
<script>
window.onmessage=e=> document.body+=e.data
</script>
```

##  自定义事件

大部分情况下，我们都是使用的浏览器提供的默认事件，这些事件都由用户触发，如鼠标单击、键盘按键。其实，可以自定义事件。

要创建自定义事件，使用如下方式定义一个事件对象event，事件名称是myevent，注意事件对象和事件名称概念要区分，不要搞混了。

```js
const event = document.createEvent("CustomEvent")
event.initCustomEvent("myevent", true, false, "event happened!")
```

上面的示例中，initCustomEvent的四个参数的含义是：
- 自定义事件的名称，如示例中的myevent
- 事件是否冒泡
- 事件是否可以取消
- 任意值，作为事件传递的detail数据。

定义好事件后，任意的HTML元素都可以订阅这个事件了：

```js
document.addEventListener("myevent",event=>console.log(event.detail))
```

然后，使用disPatchEvent()函数触发：

```js
document.dispatchEvent(event)
```

该示例的完整代码如下：

```js
<script>
    const event = document.createEvent("CustomEvent")
    event.initCustomEvent("myevent", true, false, "event happened!")
    
    document.addEventListener("myevent",event=>console.log(event.detail))
    document.dispatchEvent(event)
</script>
```

##   Style API

可以使用JavaScript操作样式，包括内联样式和外部样式表。

如果属性名称是一个单词，在HTML元素中的style属性名称就是JavaScript设置的style属性名称。

```js
document.querySelector('p').color='red'
document.querySelector('p').display='inline'
```

如果在HTML中，元素的style属性里面的样式名称是用两个单词用连字符连接，例如background-color，那么在JavaScript中的style属性名称为backgroundColor，而不是background-color。例如：

```js
document.querySelector('p').backgroundColor='red'
document.querySelector('p').fontSize='20px'
```

还有一点要注意，JavaScript操作的样式值都必须是字符串，例如颜色值是'#ffffff'，而不是#ffffff。再比如字体大小应该写成'20px'，写成20px、20、'20'都是错误的。

可以使用JavaScript引入外部的CSS文件，示例如下：

```js
const link = document.createElement('link')
link.rel='stylesheet'
link.href='custom.css'
document.head.append(link)
```

className设置或返回HTML中class属性的值，是一个字符串。classList是一个包含class名称的类数组对象。

```js
<p class="aaa bbb">
<script>
const p = document.querySelector('p')
console.log(p.className)  // 'aaa bbb'
p.classList.add('ccc')
p.classList.remove('aaa')
console.log(p.className)  // 'bbb ccc'
console.log(p.classList.length)
console.log(…p)
</script>
```

## URL API

浏览器和Node.js都有一个全局类型URL，使用new URL可以新建一个url实例，便于对链接进行解析。

new URL()的第一个参数可以是绝对路径或相对路径，如下是一个绝对路径示例：

```js
let url = new URL("https://example.com:8000/path/file.txt?key=value")
```

如果是相对路径，则必须将主机名和端口作为第二个参数：

```js
let url = new URL("/path/file.txt?key=value", "https://example.com:8000")
```

生成了url对象后，就可以得到各个部分了，包括：

- url.href： 完整链接，例如https://example.com:8000/path/file.txt?key=value。
- url.host：主机名和端口，例如example.com:8000。
- url.protocol： 协议，例如https。
- url.port：端口，例如8000。
- url.host：主机名，例如example.com。
- url.pathname：路径，例如/path/file.txt。
- url.searchParams：查询参数对象。

查询参数对象url.searchParams是一个包含键值对的对象，可以获取、设置、添加、删除键值对。例如：

```js
// 获取键对应的值：
url.searchParams.get("key") 
// 修改键的值：
url.searchParams.set("key","newValue")
// 查看是否存在某个键：
url.searchParams.has("key")
// 添加一个键值对：
url.searchParams.append("ke2","value2")
// 删除一个键值对：
url.searchParams.delete("ke2","value2")
```

另外，很多时候需要对链接中的中文字符或空格字符进行编解码，这主要用到两个内置函数：

- encodeURI()	：	将非ASCII字符编码成机器可读的字符。
- decodeURI()	：	将ASCII反转成人类可读的字符。

这两个函数的用法示例如下：

```js
console.log(encodeURI('你好 世界'))  
// out： %E4%BD%A0%E5%A5%BD%20%E4%B8%96%E7%95%8C
//  20%表示空格

console.log(decodeURI('%E4%BD%A0%E5%A5%BD%20%E4%B8%96%E7%95%8C'))
// out： 你好 世界
```

## 定时器API

JavaScript定时器API可以延迟执行、循环执行另一个函数，有三种方法：setTimeout() 、 setInterval() 、 requestAnimationFrame() 。

###  setTimeout()
setTimeout()的作用是在一定延时之后执行某个函数。它接受两个参数，第一个参数是函数名称，也可以是箭头函数，第二个参数是延迟的时间，单位为毫秒。

如下示例先定义了要执行的函数，然后将函数名称传给setTimeout()，注意，函数名称后面不可以加括号。

```html
function foo(){
        console.log('2秒后')
}
setTimeout(foo, 2000)
```

上述示例在Node.js环境下也同样适用。

### setInterval()

setInterval()的作用是按照给定的时间间隔重复执行一个函数。它接受两个参数，第一个参数是函数名称，也可以是箭头函数，第二个参数是间隔时间，单位为毫秒。

可以使用clearInterval()函数取消定时。只需要将setInterval()赋给一个变量，如果要取消定时，将该变量传给clearInterval()即可。如下是一个按秒更新的计数器，在5秒之后便不再更新：

```html
<script>
    
    let a = 0
   
    function foo() {
        a = a + 1
        console.log(a)
        if (a == 5) clearInterval(循环)
    }

    const 循环 = setInterval(foo, 1000)

</script>
```

上述示例在Node.js环境下也同样适用。

###  requestAnimationFrame()

requestAnimationFrame() 告诉浏览器希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

requestAnimationFrame()的基本语法如下：

```js
function animation(){
      // 每次执行的逻辑
      requestAnimationFrame(animation)
}
animation()
```


如下示例代码，变量a会在每帧之后加1：

```html
<body>
</body>

<script>
     let a = 0
     function animation() {
            a = a + 1
            document.body.innerHTML = a
            requestAnimationFrame(animation)
      }
     animation()
</script>
```



##  Flie System API：浏览器读写本地文件

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>
    <button id="button">打开文件</button>

    <script>
        document.getElementById('button').onclick = async () => {
            const [fileHandle] = await window.showOpenFilePicker();
            const file = await fileHandle.getFile()
            const text = await file.text()
            console.log('旧内容:',text)
            const  writable = await fileHandle.createWritable()
            await writable.write(text+'\n新内容\n新内容\n')
            await writable.close();

            const file2 = await fileHandle.getFile()
            const text2 = await file2.text()
            console.log('新内容:',text2)

        }
    </script>

</body>

</html>

```


