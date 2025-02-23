<p id="toc">目录：</p>
<a href="#toc" style="position:fixed; opacity:0.1;bottom:5vw;left:5vw;font-size:1.5rem ">🔼</a>

- [新建或转换为数组](#新建或转换为数组)
  - [使用Array()构造函数新建数组](#使用array构造函数新建数组)
  - [使用数组字面量新建数组](#使用数组字面量新建数组)
  - [使用Array.from()方法新建数组](#使用arrayfrom方法新建数组)
  - [使用Array.of()方法新建数组](#使用arrayof方法新建数组)
  - [使用三点运算符(…)新建数组](#使用三点运算符新建数组)
- [数组的特性](#数组的特性)
  - [数组的长度](#数组的长度)
  - [数组元素的默认值](#数组元素的默认值)
  - [数组的拖尾逗号](#数组的拖尾逗号)
  - [数组的本质也是对象](#数组的本质也是对象)
- [数组的方法](#数组的方法)
  - [数组的迭代](#数组的迭代)
  - [数组的归并](#数组的归并)
  - [数组的at()方法](#数组的at方法)
  - [数组的concat()方法](#数组的concat方法)
  - [数组的fill()方法](#数组的fill方法)
  - [数组的flat()方法](#数组的flat方法)
  - [数组的includes()方法](#数组的includes方法)
  - [数组的indexOf()和lastIndexOf()方法](#数组的indexof和lastindexof方法)
  - [数组的find()和findIndex()方法](#数组的find和findindex方法)
  - [数组的join()方法](#数组的join方法)
  - [数组的slice()方法](#数组的slice方法)
  - [数组的splice()方法](#数组的splice方法)
  - [在数组首尾插入删除元素](#在数组首尾插入删除元素)
  - [数组元素的排序](#数组元素的排序)



##  新建或转换为数组

有多种方式新建或转化为数组。

###  使用Array()构造函数新建数组

第一种方式是使用Array()构造函数，如下：

```js
const arr1 = new Array()  // 建立一个空数组

const arr2 = new Array(3)  // 建立一个包含3个元素的数组
```

###  使用数组字面量新建数组

第二种方式是使用数组字面量，外层用中括号(`[]`)包裹，数组元素之间用逗号隔开，如下：

```js
const arr1 = []  // 建立一个空数组
const arr2 = [1,2,3]  // 建立一个数组，包括3个元素
```

###   使用Array.from()方法新建数组

第三种方式是使用Array.from()静态方法，该方法接收一个可迭代对象，例如：

```js
const str = 'hello'  // 字符串是可迭代对象
const arr1 = Array.from(str) 
console.log(arr1)  // ['h','e','l','l','o']
const set = new Set(1,2,3)  // 集合是可迭代对象
const arr2 = Array.from(set)
console.log(arr2)  // [1,2,3]
```

###   使用Array.of()方法新建数组

第四种方式是使用Array.of()静态方法，该方法与Array.from()类似，区别是Array.of()接收若干个元素作为参数组成新数组的元素，例如：

```js
const arr = Array.of(1,2,3)
console.log(arr) // [1,2,3]
```

###   使用三点运算符(…)新建数组

第五种方式是使用三点运算符(...)，该方法可以看作是Array.from()方法的语法糖，接收一个可迭代对象，通常用于快速将字符串转化为数组，例如：

```js
const str = 'hello'
const arr = [...str]
console.log(arr)  // ['h','e','l','l','o']
```

当然，还有许多方法可以新建或返回新数组，比如:Object.keys()、Object.values()、Object.entries(),这将在后面会讲到。

##  数组的特性

### 数组的长度

数组的长度不是固定的，哪怕一开始指定数组的长度，其长度也是可以动态伸缩的。例如：

```js
const arr= new Array(3)
arr[3] = 1
console.log(arr) // 4
```


###  数组元素的默认值

如果没有给定数组的某个元素的具体值，那么该元素就会被赋予默认值undefined，例如：

```js
const arr = new Array(3)
console.log(arr[0]) // undefined 
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

##  数组的方法


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

在上面的代码中，元素{a:1}是Object类型，任意Object类型使用toString()均会返回字符串`[object Object]`，所以会打印出上面的结果。


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
