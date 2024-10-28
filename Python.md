
# 基础

###  推荐书籍： 《Python编程：从入门到实践》

本书是一本针对所有层次的 Python 读者而作的 Python 入门书。全书分两部分。第一部分介绍用Python 编程所必须了解的基本概念，包括 matplotlib、NumPy 和 Pygal 等强大的 Python 库和工具介绍，以及列表、字典、if 语句、类、文件与异常、代码测试等内容 ；第二部分将理论付诸实践，讲解如何开发三个项目，包括简单的 Python 2D 游戏开发，如何利用数据生成交互式的信息图，以及创建和定制简单的Web 应用，并帮读者解决常见编程问题和困惑。本书适合对 Python 感兴趣的任何层次的读者阅读。




###  声明变量

Python是弱类型、动态类型、解释型语言，声明不变可以不指明类型，解释器会根据变量的值推断适合的类型。最近的版本为Python添加了类型支持，旨在构建更健壮的Python代码。声明变量很容易，示例如下：

```
a = 1
arr = ['hello' , 'world']
str = "hello,world"
```

注意，Python变量名称不可以是关键字。而且，应以字母或下划线开头，不可以包含空格，推荐使用连字符连接多个单词成分。

###  注释

Python使用井号进行单行注释，当前行井号右边的内容将不会执行。

要添加多行注释，在注释内容的前后使用三个引号，单双引号均可。

###   使用id()、is、is not、==检测相等性

id()函数返回变量的内存地址。如果两个变量的内存地址相同，那么这两个变量是完全相等的。

is 可以用来检查两个变量是不是指向同一内存。

is not 是 is 的否定。

== 用来检查两个变量的值是不是相等。


###  条件语句

完整的if语句语法格式如下，注意条件后面的冒号一定不能漏掉。

```
if  条件1:
        条件1为真时的操作
elif 条件2:
        条件2为真时的操作
elif 条件3:
        条件3为真时的操作
else
        其它情况的操作
```

示例如下：

```
score = int(input("请输入你的分数："))

if score >= 80:
        print('优秀')
elif score >= 60:
        print('及格')
else:
        print('不及格')
```

# 列表

列表是一个包含任意对象的有序集合。与字符串和元组不同，列表是可变的：不仅长度可变，元素值也可变。同时，列表中的元素值是可以重复的。

### 新建列表

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

可以提取列表的某一范围内的元素，得到一个新的列表。 `[n:m]` 表示第n+1个元素到第m个元素。

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

###  数字列表的数学统计运算

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

###   使用 in 操作符查找元素

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



### 在末尾追加列表元素：append()

使用append()方法可以将新元素添加到列表末尾：

```
li = [1,2]
li.append(3)
```

### 在中间插入列表元素：insert()

使用insert()方法可以在指定位置插入新元素。insert(n,value)表示在第n+1个元素前面插入value这个新元素。例如：

```
li = [1,2]
li.insert(0,3)
# 在第一个元素前面插入3
print(li) # [3,1,2]
```

### 删除列表元素：pop()

使用pop()删除列表末尾的一个元素，例如：

```
li = [1,2,3]
li.pop()
print(li) # [1,2]
```

如果要删除指定位置的元素，只需传入索引即可：

```
li = [1,2,3]

li.pop(0)
# 删除第一个元素
```

### 清空列表对象或其切片：del

del 语句可用于从列表中移除切片或清空整个列表。注意删除和清空的区别。

```
a = [-1, 1, 66.25, 333, 333, 1234.5]
del a[0] # 清除第一个
del a[2:4] # 清除第3到4个
del a[:]  # 清空列表
del a  # 删除列表
```


### 使用for in 遍历列表

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

###  使用map()函数遍历列表

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

###  列表的去重

列表允许值重复，如果要去重，可以利用set类型的不重复特性。

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


###   列表与其它相似类型的互相转换

列表与其它相似类型的互相转换十分常见，例如将列表转为元组或集合：

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

# 面向对象


## 类

###  类的编码风格

- 类名应采用大驼峰命名法，并使用清晰的语义。
- 在类名的下一行包含一个文档字符串，用于写明该类的简要介绍，或者作用等信息。
- 在类中，使用一个空行分隔方法。
- 如果一个文件有多个类，类与类之间使用两个及以上的空行分隔，并写好注释。

###  类的定义

使用class关键字创建类，类名习惯上首字母大写。注意，类名后面一定要跟上括号和冒号。

```
class Dog():
        """一次模拟小狗的简单尝试"""

        def __init__(self, name, age):
                self.name = name
                self.age = age

        def sit(self):
                print(self.name + ' is now sitting.')
```

类定义中的所有方法，第一个参数一定是self，表示对应的实例。

`__init__`为构造方法，在实例化时默认调用。在实例化时，从self之后的第二个参数开始，依次传入实例的实际属性。


###  类的实例化

直接像函数一样调用类名，传入实际的成员属性，即可实例化一个实例。

注意，不要写new。

```
dog = Dog('milk', 3)
```

###  使用句号语法访问属性和成员

```
dog.name
# milk

dog.sit()
# milk is now sitting.
```

##  类型提示

Python中，比较常见的类型有str、int、float。

```
a:int = 1

str:str = 'hello' 
```

# 模块和包


##  模块

大多数情况下，一个模块是一个目录，里面包含许多个文件或子目录，用来定义不同的功能。

要让一个文件夹变成一个Python模块，只需要在该文件夹内新建一个__init__.py文件，当模块被导入时会自动执行里面的代码。注意，__init__py文件一定要存在，哪怕内容为空。同时，每个子目录也要有__init__.py文件。


默认情况下，会按照如下顺序搜索模块：
- 当前目录。
- PYTHONPATH环境变量，这是一个目录列表。
- Python安装目录的site-packages目录。

模块可以指定只导出哪些内容，这是可以使用__all__变量，例如：

```
__all__ = ["a", "foo", "bar"]
```

这样，在使用如下两个语句中的一个时，都只会导入这三个变量：

```
import package
from package import *
```

import 语句导入另一个模块对象，另一个模块导出的内容都是该对象的成员，例如：

```
import package
// 使用
package.foo()
```

要使用from语句导入特定的变量，使用：

```
from package import a, foo
// 使用
print(a)
foo()
```

还可以导入另一个模块导出的全部内容：

```
from package import *
```

还可以在导入时重命名：

```
from package import a  as alias1
```


##   pip包管理器

pip是Python官方的包管理器，默认随着Python程序一起安装。

### 基础用法

要检查pip是否已经安装，在终端中运行：

```
pip
```

如果已经安装，则会输出pip的帮助信息。

要安装Python包，运行：

```
pip install package
```


如果将当前目录下的requirements.txt中列出的依赖安装到当前目录，运行：

```
pip install -r  requirements.txt  .
```

要显示已经安装的包列表，运行：

```
pip list
```

要卸载某个包，运行：

```
pip uninstall package -y
```

加上 -y 或 --yes 选项表示确认卸载，如果不加，则需要在终端中手动确认。

### 换源


可以将包的下载源地址切换到国内源，例如阿里云的源，以提升下载速度。有两种方式：命令替换和手动替换。

第一种方式，命令替换，推荐使用。运行如下命令，切换成阿里云的源：

```
pip config set global.index-url  https://mirrors.aliyun.com/pypi/simple
```

第二种方式，手动替换。在用户家目录下，创建文件pip.ini，并添加如下内容：

```
[global]
index-url = http://mirrors.aliyun.com/pypi/simple/

[install]
trusted-host=mirrors.aliyun.com
```

这样，pip会默认使用这个源。

当然，也可以临时指定，使用 ` -i ` 选项，例如：

```
pip install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple
```

###  自定义安装位置

pip默认会将包安装到如下位置：

```
Python安装目录\Lib\site-packages
```

使用--target选项将Python包安装到自定义的位置。

```
pip install  --target=安装路径名
```

如果按照路径名包含空格，需用双引号包裹。

###  包搜索顺序
Python 解释器运行时会按照如下 1~5 的顺序依次搜索 import 语句指定的包。如果有同名包，那么按照1 ~ 5 的顺序使用先找到的：

1. python主程序所在目录及其子目录
2. 环境变量 PYTHONPATH中的路径列表 
3. 标准库目录，即 Python安装目录\Lib
4. 任何.pth文件中的指定的目录，.pth 文件需要放在 Python 安装目录的根目录下
5. Python安装目录下的 site-packages 主目录



### PYTHONPATH

PYTHONPATH是第三包库的搜索路径，默认第三方包安装在`Python安装目录\Lib\site-packages`，但也可以自定义。

要获取PYTHONPATH，通过os.environ['PYTHONPATH']。

```
import os
os.environ['PYTHONPATH']
```


##   虚拟环境：venv

要创建虚拟环境，请确定要放置它的目录：

```
python -m venv 虚拟环境目录
```

一旦创建虚拟环境，就会在虚拟环境目录的Scripts下面找到两个脚本文件：
- activate.ps1 激活该虚拟环境。
- deactivate.ps1 退出该虚拟环境

虚拟环境本质上是一个文件夹，包含了特定包及其版本。避免了多个项目第三方包版本的冲突。

执行如下命令，安装requirements.txt列出的包依赖：

```
pip install -r requirements.txt
```

 



# 桌面通知

使用plyer库，可以直接发送桌面通知。

安装plyer：

```
pip install plyer
```


如下示例发送了一个桌面通知：

```
from plyer import notification
notification.notify(
    title="test",		#标题
    message="aaaa",	#内容
    timeout=5,		#通知持续时间
)
```



#  执行系统命令

使用os.system()可以执行系统的命令，例如：

```
os.system('ls')

os.system('other.py')
```



#  命令行参数

一些Python脚本需要处理命令行参数。这些参数以列表形式存储在sys模块的argv属性中。

一个脚本demo.py内容：

```
import sys
print(sys.argv)
```

在终端调用：

```
python demo.py one two three
```

输出结果：

```
['demo.py', 'one', 'two', 'three']
```

第一个元素是脚本文件名，后面的元素为依次传入的参数。


# 读写环境变量


系统的所有环境变量都存储在os.environ中，这是一个字典。

要获取特定的环境变量，使用对应的键。例如获取Path环境变量：

```
import os
os.environ['path']
```

经常需要为path添加条目，在Windows平台上，path的本质是分号分隔的字符串，此时可以通过+=添加一个路径。

```
os.environ['path'] += ';'+r'D:\Test'
```


# 函数


## 传递实参

传递实参有三种方式： 按位置传递、 按关键字传递、传递任意数量的参数、 传递任意数量的关键字参数

###  按位置传递

位置参数是最常使用、也是默认的传参方式。

使用位置参数时，必须严格按照定义的顺序依次传入。

```
def foo(first,last):
        print('hello', first, last)

foo('John','Baiden')
# hello Johb Baiden
```

###  按关键字传递

如果指定了形参变量名，可以不严格按照顺序传递实参值，例如：

```
def foo(first,last):
        print('hello', first, last)

foo(last= 'Baiden', first= 'John')
# hello Johb Baiden
```


###  传递任意数量的参数

在参数前面加上星号，就变成了任意数量的实参。

在传递实参时，把后面的所有参数均打包为一个列表。

```
def foo(*names):
    print('welcome:')
    for name in names:
        print(f'- {name}\r')

# 此时names=['mike']
foo('mike')

# 此时names=['mike','bob','smith']
foo('mike','bob','smith')
# welcome:
# - mike
# - bob
# - smith
```


###  传递任意数量的关键字参数

在参数前面加两个星号，就变成了任意数量的关键字参数。

此时，无论传递多少个关键字实参，都会打包成一个字典传给函数调用。

```
def foo(**infos):
    print('welcome')
    for key,value in infos.items():
        print(f'- {key}:{value}')

# 此时infos={'mike':'manager'}
foo(mike='manager')

# 此时infos={'mike':'manager','bob'='programer','smith'='speaker'}
foo(mike='manager',bob='programer',smith='speaker')
```

##  Lambda函数

很多时候为了简化代码量、方便阅读，不需要单独定义函数，而直接使用Lambda函数，例如在map()函数中经常传入的是Lambda函数，而非具名函数。

使用Lambda关键字定义一个Lambda函数，语法如下：

```
lambda 参数列表: 表达式
```

匿名函数的参数列表可以有1个或多个逗号分隔的参数，也可以没有参数。函数体经常只有一个表达式，表达式的结果就是匿名函数的返回值。示例如下：

```
lambda x : x**2
lambda x,y : x+y
```

# 日期和时间


###  导入datetime模块

要处理日期和时间，最常用到datetime模块，首先要导入该模块：

```
from datetime import datetime
```


### 返回当前时间

```
datetime.now()
```


### 返回当前时间戳

```
from datetime import datetime
now = datetime.now()
print(now.timestamp())
```

### 创建时间

```
datetime(2023, 3, 15, 12, 30)
```

### 基于字符串创建时间

```
datetime.strptime("2023-03-15 12:30:00", "%Y-%m-%d %H:%M:%S")
```

### 时间戳转时间

```
datetime.fromtimestamp(1716437763.1540167)
# datetime.datetime(2024, 5, 23, 12, 16, 3, 154017)
# 最后一个是毫秒
```

### 时间转时间戳

返回2023-3-15 12:30对应的时间戳：

```
datetime(2023, 3, 15, 12, 30).timestamp()
```

### 提取时间中的要素

```
now = datetime.now()

# 提取年
now.strftime('%Y')
'2024'

# 提取月
now.strftime('%m')
# '05'

# 提取日
now.strftime('%d')
# '23'

# 提取年月日
now.strftime('%Y-%m-%d')
# '2024-05-23'

# 提取时分秒
now.strftime('%H-%M-%S')
# '12-12-15'
```

各个要素的语法如下：
- %Y， 四位数年
- %m， 两位数月份，单数前补0
- %d， 两位数日期，单数前补0
- %H， 两位数小时，单数前补0
- %M， 两位数分种，单数前补0
- %S， 两位数秒，单数前补0。
