本文内容:

- 函数的call()和apply()方法
- 函数内部的arguments对象
- 函数内部的this对象
- 函数的暂时性死区

###    函数的call()和apply()方法

函数的call()方法是另一种形式的函数调用，例如`a.b(1,2)`等价于` b.call(a,1,2) `。

再比如Symbol.iterator.call(arr)。由于这个例子中被调用的函数是System.iterator，中间有个句点，所有只能写成这种形式。

apply()与call()相比只是传参的形式不同。


###   函数内部的arguments对象

对于使用了function关键字的函数声明或函数表达式，函数内部有一个arguments对象，这是一个类数组对象，可以通过Array.from(arguments)将其转化为数组。arguments.length表示实参的个数。`arguments[n]`表示第n个参数。

注意，箭头函数没有arguments对象。

有了arguments对象，即便是不写形参，也可以定义函数，例如：

```
function sum(){
        const result=Array.from(arguments).reduce((prev,cur)=>prev+cur)
        return result
}
 
console.log(sum(1,2))
console.log(sum(1,2,3))
```


###   函数内部的this对象

this，顾名思义，就是“这个”。this被用在对象的方法中，表示“这个对象”。

函数可以被用作对象的方法。同一个函数，被不同对象调用时，上下文是不一样的，this指代调用的上下文对象。

```
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

###    函数的暂时性死区

参数是按顺序被赋值的，因此，前面的参数不可以引用后面的参数的默认值，也不能引用函数体中的成员值，这就是“暂时性死区”规则，例如：

```
function  example(a=b,  b=1, c=data){
    const data=1
}
```

这段代码有两处错误：
- 参数a不能引用后面的参数b的值
- 参数c不能引用后面的函数体成员data的值

而下面这个例子是正确的：

```
function  example(a=1 , b=a){
    const data=b
    console.log(data)
}
example()      //=>1
```

其实，简单来讲，所谓“暂时性死区”，不过也遵循了局部作用域的声明规则。使用let和const声明的时候，声明和引用是按顺序来的，即只能先声明后引用，后面的引用前面的，反过来不可以，不存在声明提升。


