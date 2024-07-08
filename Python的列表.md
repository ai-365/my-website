###  列表基础

列表是一个包含任意对象的有序集合。与字符串和元组不同，列表是可变的：不仅长度可变，元素值也可变。同时，列表中的元素值是可以重复的。

通常使用中括号包裹、逗号分隔的语法新建一个列表，如下新建了一个包含三个元素的列表：

```
li = [1, 'hello' ,2.5] 
```

有些时候需要快速创建一个连续正整数数组，range()可以很方便的快速创建连续整数序列，range(m,n)表创建从m到n-1的整数序列，再使用list()包装成列表，例如：

```
li = list(range(2,5))
print(li)
// 2,3,4
```

range()还可以接收第三个参数，用于指定步长：

```
li = list(range(2,10,2))
print(li)
// 2,4,6,8
```

要获取列表的长度，即列表中有多少个元素，可以通过内置的len()函数得到：

```
li = [1,2,3]
print(len(li)) // 3
```

通过中括号和索引可以得到某一位置该元素的值，索引从0开始，li[n]表示列表li的第n+1个元素。索引还可以是负数， li[-1]表示最后一个元素，li[-2]表示倒数第二个元素，依此类推。

```
li = [1,2,3,4]

// 第二个元素
print(li[1])

// 最后一个元素
print(li[-1])
```

可以提取列表的某一范围内的元素，得到一个新的列表。[n:m]表示第n+1个元素到第m个元素。

```
li = [1,2,3,4,5,6,7,8]
li2 = li[2:5]  
print(li2) # [3,4,5]
```

如果省略了冒号左边的值，则从第一个元素开始。如果省略了冒号右边的值，则一直到最后一个元素。如果都省略，相当于拷贝了一份列表的副本。

```
li = [1,2,3,4,5,6,7,8]
li3 = li[2:]  
print(li2) # [3,4,5,6,7,8]

li4 = li[:5]
print(li4) # [1,2,3,4,5]

li5 = li[:]
print(li5 is li) # False
# is 的作用是比较两个对象的指针
```

###  使用range()创建数字序列


很多时候，需要快速生成一个数字序列，这时可以使用range()。

range()返回的是一个range序列对象，并非列表。可以使用list()进一步将序列封装成列表。

range(n,m)返回从n到m-1的序列。

```
list(range(1,6))
# [1, 2, 3, 4, 5]
```

还可以指定第三个参数，指定步长。

```
list(range(1,9,2))
#[1,3,5,7]
```

数字列表的数学统计运算

有几个方法可以对数字列表进行简单的统计运算，将列表传入这几个函数即可。

max()返回列表的最大值。

min()返回列表的最小值。

sum()返回列表的总和。

```
digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

min(digits)
# 0
max(digits)
# 9
sum(digits)
# 45
```

使用 in 操作符查找元素

首先，使用 in 操作符用于检查某个值是否在列表中，这非常有用和方便。

index()方法用于查找元素首次出现的的索引，如果找不到就会返回ValueError异常。

```
[1,2,3,4].index(2) 
```


###   使用列表推导式筛选元素
 
一个常见的场景是要筛选出序列中的元素，此时推导式很有用。

如下示例返回当前目录下以 .py 结尾的文件。

```
import os
files = os.listdir('.')

[x for x in file if x.endswith('.py')]

```


##   使用append()、insert()、pop()、del为列表增删元素

append()
使用append()方法可以将新元素添加到列表末尾：

```
li = [1,2]
li.append(3)
```

insert()
使用insert()方法可以在指定位置插入新元素。insert(n,value)表示在第n+1个元素前面插入value这个新元素。例如：

```
li = [1,2]
li.insert(0,3)
print(li) # [3,1,2]
```

pop()
使用pop()删除列表末尾的一个元素，例如：

```
li = [1,2,3]
li.pop()
print(li) # [1,2]
```

如果要删除指定位置的元素，只需传入索引即可：

```
li = [1,2,3]

// 删除第一个元素
li.pop(0)
```

del

del 语句可用于从列表中移除切片或清空整个列表。注意删除和清空的区别。

```
a = [-1, 1, 66.25, 333, 333, 1234.5]
del a[0] # 清除第一个
del a[2:4] # 清除第3到4个
del a[:]  # 清空列表
del a  # 删除列表
```


##  列表的遍历：for in 、map()

### for in 遍历列表

使用for in 语句可以遍历整个列表，示例如下：

```
li = [1,2,3]
for item in li:
        print(li)
```

for in 语句不仅可以遍历列表，只要是可迭代对象，都可以，例如range()返回的对象。

```
for item in range(1,4):
        print(item**2)
```

###  使用map()遍历列表

很多使用，需要对列表的每一个元素执行相同的操作，这叫做列表的迭代。使用内置的map()函数可以完成，map()函数的用法是：

```
map(迭代函数, 可迭代对象)
```

非常需要注意的是，map()函数的返回结果是一个map对象，map对象也是可迭代对象，并不是我们所期待的传入对象的类型。

迭代函数通常是一个匿名函数，例如：

```
li = [1,2,3]
li2 = map(lambda x:x**2, li)

print(list(li2)) # [1,4,9]
```

注意，示例中的li2只是一个map对象，需要使用list()包装成一个新列表。


##  元组

不可变的列表称为元组。

### 新建元组

元组的字面量使用圆括号包括、逗号分隔元素，例如：

```
tu = (1,2,3)
```


###  元组的不可变性

为什么有了列表还要使用元组？关键就在于元组的不可变性，我们可以修改列表的元素，但是无法对元组的元素。例如，如果要更改元组中某个位置的值：

```
turple8 = (1,2,3,4)
# 期望修改第1个元素
turple8[0] = 10 
```

解释器会报出如下错误：

```
TypeError: 'tuple' object does not support item assignment
语法错误： 元组对象不支持元素赋值
```


### 通过可迭代对象得到新元组

tuple()函数接受一个可迭代对象，例如字符串或列表，从而得到一个新元组。例如，通过字符串得到元组：

```
tu = tuple("hello")
```

通过列表得到元组：

```
li = [1,2,3]
tu = turple(li)
```

### 使用for in 遍历元组

元组也是可迭代对象，因此可以使用for in 遍历：

```
tur = (1,2,3)
for i in tur:
        print(i)
```


###  元组的索引和分片


通过中括号和从0开始的索引得到元组的元素：

```
turple6 = (1, 2.5, 'hello')
print(turple6[2]) # 'hello': 读取第3个位置
```

可以对元组进行分片得到新元组，`[n:m]`表示从第n+1个元素到第m个元素，例如：

```
turple7= (1,2,3,4,5,6,7)
turple8 = turple7[3:6]  # (4,5,6) ：从第4个元素到第6个元素
```

拖尾逗号

元组的最后一个元素后面可以选择性的添加一个逗号，这并不会影响元素个数，这种逗号叫做“拖尾逗号”，在有些编辑场景下很实用。如下两种写法是等价的：

```
turple1 = (1,2,3,4)
turple2 = (1,2,3,4,)
```

##  序列

###   序列的概念

序列就是有序的队列，在Python中，包括列表、元组、字符串都是序列。

序列是可迭代对象。

之所以将序列单独挑出来，因为列表、元组、字符串的很多操作都是通用的，例如迭代、加法、乘法、推导式等。换言之，列表之所以适用于前述操作，就是因为列表是序列。

列表、元组、字符串共用的操作总结如下：
- 加法： 拼接
- 乘法： 重复
- for in ： 遍历元素。对字符串而言，是遍历每个字符。
- in或not in： 查找元素是否存在。对字符串而言，查找子串是否在文本中。
- 推导式： for in 的简化版。
- len() ：求长度。


##  列表（序列）的方法
###  count()

```
fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple']

fruits.count('apple')
# 3
```

count()方法还适用于字符串和元组，因为它们都是序列，用法相同。


###  加法和乘法

通过加法可以将两个甚至多个序列合成一个新序列。

```
[1,2,3]+[4,5,6]
```

```
(1,)+(2,3)
```

注意，序列加法和乘法的前提是操作数必须是同种数据类型。

```
[1,2,3]*3
# [1,2,3,1,2,3,1,2,3]
```

字符串也是序列，因此也适用于加法和乘法：

```
'abc'+'def'
# 'abcdef'

'abc'*3
# 'abcabcabc'
```

### 列表的去重

序列允许值重复，如果要去重，可以利用set类型的不重复特性。

```
li = [1,2,2,3,3]
set1 = set(li)
print(set1)
# {1, 2, 3}
```

###  列表的排序

列表的sort方法就地改变列表本身。

sorted()内置函数会返回一个新的列表。

sorted方法的语法如下：

```
sorted(list, reverse, key)
```

- list ：要排序的列表
- reverse： 值为True时逆序，默认为False，从小到大。可选关键字参数。
- key： 排序依据。 例如key=str.lower不按大小写排序。可选关键字参数。

排序有两种情况：

- 对数字列表的排序： 这会按照自然数从小到大排。
- 对字符串列表的排序： 这会按照字符串的ASCII码值排序。

数字列表排序：

```
digits = [345, 6, 22]
sorted(digits)
# [6, 22, 345]
# 默认从小到大
```

字符串列表排序：

```
fruits = ['grape', 'raspberry', 'apple', 'banana']

# 默认按字符串字符的ASCII码从小到大排
sorted(fruits)
# ['apple', 'banana', 'grape', 'raspberry']

# 根据字符串的长度排序
sorted(fruits, key=len)
# ['grape', 'apple', 'banana', 'raspberry']
```

key还可以是一个函数。

形参表示每个元素，返回一个值，表示排序依据。

如下示例，` [: :-1] `表示字符串逆序。

```
fruits = ['strawberry', 'fig', 'apple', 'cherry', 'raspberry', 'banana']
sorted(fruits, key=lambda word: word[::-1])
# ['banana', 'apple', 'fig', 'raspberry', 'strawberry', 'cherry']
```


###   列表与其它类型的转换

列表与其它数据结构之间的转换十分常见，例如将列表转为元组或集合：

```
number_list = [1, 2, 3, 4, 5]
tuple_version = tuple(number_list)
set_version = set(number_list)

print(tuple_version)  # (1, 2, 3, 4, 5)
print(set_version)  # {1, 2, 3, 4, 5}
```

若要将列表转为字典，通常需要提供一个与之对应的键列表：

```
keys = ['apple', 'banana', 'cherry']
values = [10, 20, 30]
fruit_dict = dict(zip(keys, values))

print(fruit_dict)  # {'apple': 10, 'banana': 20, 'cherry': 30}
```

反过来，集合和字典也可以转换为列表，例如：

```
fruit_set = {'apple', 'banana', 'cherry'}
fruit_list_from_set = list(fruit_set)

fruit_dict = {'apple': 10, 'banana': 20, 'cherry': 30}
fruit_keys_list = list(fruit_dict.keys())
fruit_values_list = list(fruit_dict.values())

print(fruit_list_from_set)  # ['apple', 'banana', 'cherry']
print(fruit_keys_list)  # ['apple', 'banana', 'cherry']
print(fruit_values_list)  # [10, 20, 30]
```

