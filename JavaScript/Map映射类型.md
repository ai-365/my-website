

Map类型是ES6新增的集合引用类型，对于强调键值映射和迭代的操作来说，Map类型比一般对象类型更加实用。相较于一般对象类型，Map的优势在于：
- 是可迭代对象，这意味着不需要像Object那样使用for in循环来遍历元素。
- 更加方便的增删改查操作。

###   新建Map对象

使用构造函数可以新建一个空Map：

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

###   Map对象的方法

Map对象的方法包括：
-  keys()： 返回由键组成的新数组
-  values()： 返回由值组成的新数组
-  entries()： 返回由键值组成的二维数组
-  set() : 增加或修改键值对
-  has() ： 查询是否存在某个键
-  get() ： 查询键的值
-  delete() : 删除某个键
- size： 注意，这个是属性，返回键的个数
-  clear()： 清空所有的键值对

keys()、values()、entries()的示例如下：

```
const map = new Map().set('a',1).set('b',2).set('c',3)

console.log(map.keys())  
// [Map Iterator] { 'a', 'b', 'c' }

console.log(map.values())
// [Map Iterator] { 1, 2, 3 }

console.log(map.entries())
// [Map Entries] { [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] }
```

此时，再使用Array.from()或者 ` [...iterator] `，就可以将上面几个可迭代对象转换为真正的数组：

```js
// 承接上文代码
console.log([...map.keys()])
//  [ 'a', 'b', 'c' ]

console.log([...map.values()]) 
//  [ 1, 2, 3 ]

console.log([...map.entries()]) 
//  [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
```


要增加或修改Map实例的键值，使用set()方法，允许链式操作，如果set()方法中的键名已在map中存在，那么就会修改键对应的值，否则就是增加键值，例如：

```js
const map =new Map([ ['a',1],['b',2] ])

// 修改键对应的值
map.set('b',3)  
// 增加键值
map.set('c',3)   
// 链式操作
map.set('d',4).set('c',5).set('f',6)  

console.log(map)
// Map(6) { 'a' => 1, 'b' => 3, 'c'=>3,'d'=>4,'e'=>5,'f'=>6}
```

使用has()方法可以查询map是否存在某个键：

```js
// 承接上文的map，下同
map.has(' a ')   //   => true
map.get( ' aa ' )  //  => false
```

使用get()方法可以通过键查询对应的值，如果键不存在，则返回undefined：

```js
map.get('a')     // 1
map.get('aa')    //  undefined
```

使用delete()方法删除map中的键，删除成功返回true，删除不成功(键不存在)则返回false，例如：

```js
map.delete('f')    // =>true
map.delete('f')   // =>false，键已经在上一步被删除了
```

要取得map的键值对的个数，使用size属性：

```js
console.log(map.size)   // =>5
```

如果要清空map中所有的键值对，使用clear()方法，例如：

```js
map.clear()
console.log(map.size)   // 0
console.log(map)  // Map(0) {}
```
