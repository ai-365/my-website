本文主要讲解NumPy的用法。

### 创建数组

如下示例创建了一个2行3列的二维数组：

```
import numpy as npa
arr = np.array([[1,2,3],[4,5,6]])
```

range(n)返回从0到n-1这n个整数组成的一维数组。

arange(m,n,t)表示元素从m到n-1，步长为t。

linspace(m,n,count) 表示最大值n，最小值为m，总数为count个的均匀分隔的数组。

zeros(n)表示n个元素是0的一维数组。zeros(m,n)表示m行n列元素全部为0的二维数组。

ones(n)表示n个元素是1的数组。ones(m,n)表示m行n列元素全部为1的二维数组。

eye(n)表示对角线为1，其它元素全部为0的n行n列的二维数组。对角线指的是从左上角到右下角。


### 基本属性

一维数组就是向量，二维数组就是矩阵。ndim表示维度，也叫做秩。

形状，就是几行几列，使用shape属性得到。m行n列的数组，shape为(m,n)。

reshape(m,n)表示重新编排形状为m行n列。

size属性为元素总个数。

dtype为元素的数据类型。

### 转置

转置就是将shape颠倒，行变成列，列变成行，如果shape为(m,n)，则转置结果就是(n,m)。使用T属性可以得到转置矩阵。例如，矩阵A的转置矩阵是A.T。

### 拷贝

跟Python的规则一样，如果直接用等号将一个数组赋值给新数组，则为浅拷贝，任何一个数组的更改都会导致另一个的同步更改，因为这两个数组的指针指向同一处内存区域。

如果要进行深拷贝，则应该使用copy()方法，这样，两个数组的指针指向不同的内存区域，两个是完全独立的，更改其中一个并不会影响另一个。

### 连接

如果元素的行数相同，则可以进行横向连接，使用hstack()方法。

如果元素的列数相同，则可以进行纵向堆叠，使用vstack()方法。

### 运算

使用mean()求平均值。

使用max()/min()求最大/最小值。

使用std()求标准差。

使用var()求方差。

### 索引

与Python的数组一样，arr[n]表示一维数组的第n+1个元素。arr[m][n]表示二维数组中，第m+1行n+1列的元素。

### 随机数

np.random.rand(n)表示生成n个[0,1)之间的单行数组。

np.random.rand(m,n)表示生成[0,1)之间的m行n列的二维数组。

### 存储数组数据

可以使用.npy文件后缀名保存数组，方便重复使用。

如下示例先将arr数组使用np.save()方法保存到arr.npy文件中，然后使用load()方法读取数组，赋值给arr2：

```
import numpy as np
arr = np.array([[1,2,3],[4,5,6]])

// 存储
np.save('arr.npy',arr)

// 读取
arr2 = np.load('arr.npy')
print(arr2)
```


###  变形

shape属性返回形状，是一个元素，包括行数和列数

reshape(m,n)表示重新编排形状为m行n列。

reval() 还原为一维数组 返回指针，依然指向原数组。

flatteb() 还原为一维数组，返回新数组

###  创建单位数组


- ones 全为1
- zeros 全为0
- eye  对角线全为1


zeros(n)表示n个元素是0的一维数组。zeros(m,n)表示m行n列元素全部为0的二维数组。


```
import numpy as np
arr = np.zeros(3,2)
```

ones(n)表示n个元素是1的数组。ones(m,n)表示m行n列元素全部为1的二维数组。

```
import numpy as np
arr = np.ones(3,2)
```

eye(n)表示主对角线为1，其它元素全部为0的n行n列的二维数组。主对角线指的是从左上角到右下角。

```
import numpy as np
arr = np.eye(4)
```

###  创建数列

arange(m,n,t)表示元素从m到n-1，步长为t，如果省略t，则步长为1。

```
import numpy as np
arr = np.arange(1,10,2)
print(arr)
# [1,3,5,7,9]
```

linspace(m,n,count) 表示最大值n，最小值为m，总数为count个的均匀分隔的数组。

这两个区别在第三个参数，一个是指定步长，一个是指定个数。

### 数学函数



数学函数对每个元素进行运算。

sum 求所有元素的和

abs   绝对值

sin  cos 正余弦

log log10 自然对数，以10为底的对数

exp 自然对数的x次方


mean()求平均值。

max()/min()求最大/最小值。

std()求标准差。

var()求方差。

都是np的方法，括号中传入要运算的数组。

###  随机数

np.random.random(n,m)表示生成n行m列的数组，数组元素在0到1之间。

rand和ramdom的区别是，random传递行列数的元组，而rand传递两个参数。

random((m,n))

rand(m,n)

randint(最小值，最大值) 生成一个任意整数

randint(最小整数，最大整数，（行，列）)

uniform(最小值，最大值，size=（行，列）)

randn(行，列)  平均值0、方差1的正态分布

