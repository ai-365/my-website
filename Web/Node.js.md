


## 文件处理

### 引入fs模块


使用如下代码引入fs模块：

```js
const fs = require('fs')
```

###  读取文本文件

比较常见的就是使用utf8编码读取文件，返回字符串，例如：

```js
const content = fs.readFileSync('file.txt', 'utf8')  
console.log(content)
```

当然还有fs.readFile()和fs.promise.readFile()这两种异步读取方式，还有更低级的read()方法，这几种方式的代码更复杂一些。对于大部分数据量不大的文本文件，只需要使用readFileSync()这种同步方式即可。

### 写入文本文件

要写入文件内容，使用writeFileSync()方法：

```js
fs.writeFileSync('file.txt', 'some content', 'utf8')
```

与读取文件类似，写文件操作也有对应的异步方法和低级API，大部分情况下使用同步方式即可。

### 追加文本文件

要追加文件内容，使用appendFileSync()方法：

```js
fs.appendFileSync('file.txt','new content','utf8')
```

### 复制文件

要复制文件，使用copyFileSync()方法：

```js
fs.copyFileSync('old.txt' ,  'new.txt')
fs.copyFileSync('old.txt' ,  'new.txt')
```

### 删除文件

要删除文件，使用rmSync()方法，如下命令删除当前工作目录下的old.txt文件：

```js
fs.rmSync('old.txt')
```

### 重命名文件

要重命名文件，使用renameSync()方法，例如：

```js
fs.renameSync('old.txt','new.txt')  // 重命名
```

### 移动文件

值得一提的是，移动文件的本质也是重命名文件——对文件的路径进行重命名，fs模块并没有类似moveSync()的方法，仍然是使用renameSync()以重命名路径的方式完成文件的移动，如下示例将old.txt移动到文件夹dir下：

```js
fs.renameSync('old.txt','dir/old.txt')
```


如下示例移动且重命名文件：

```js
fs.renameSync('old.txt','dir/new.txt') 
```

fs.readDirSync()方法用于列举文件或目录下的文件列表，类似于ls命令，如下示例读取当前目录下的文件列表：

```js
console.log(fs.readdirSync('.'))
```

这会输出一个由字符串组成的数组，每个元素就是文件或目录名。

### 创建和删除目录

使用mkdirSync()新建目录，使用rmdirSync()删除目录，例如：

```js
fs.mkdirSync('newdir')
fs.rmdirSync('newdir')
```

注意，如果目录已经存在，则会报错。

### 检查文件或目录是否存在

existsSync()方法检查文件或目录是否存在，传入相对或绝对路径：

```js
console.log(fs.existsSync('file.txt'))  // 检查文件是否存在
console.log(fs.existsSync('dir'))  // 检查目录是否存在
```

fs.statSync()返回文件或目录的属性，包括修改时间、创建时间、文件大小等元数据。

```js
console.log(fs.statSync('file.txt')) 
```

## 路径处理

### 引入path模块


如果需要处理路径，则需要用到path模块。首先使用如下代码引入path模块：

```js
const path = require('path')
```

### 内置路径

下面列出了一些常用的内置路径：
- process.cwd() 当前工作目录的绝对路径。
- __filename  当前代码文件的绝对路径。
-  __dirname 当前代码文件所在目录的绝对路径。
- os.homedir() 家目录，需要先引入os模块。
- path.sep  /或\，取决于操作系统。

### 路径提取

如下是使用path模块进行路径解析的示例代码：

```js
const p = "D:\\Test\\example.js"
console.log(path.basename(p))  // example.js，含后缀的文件名
console.log(path.extname(p))  // .js ， 后缀名
console.log(path.basename(p, path.extname(p))) // example，不含后缀的文件名
console.log(path.dirname(p)) //  D:\Test ，所在目录
```

### 合并路径

path.join()用于组合多个路径，它会自己处理路径中存在的'/'、'//'、'..'。
```js
console.log(path.join('a','//b','./c')) // a\b\c

// 自动解析相对路径符号
console.log(path.join('a',  '.',  'b',  '..',  'c')) // a\c 
```

### 解析路径：normalize()、resolve()

path.normalize()规范化路径为当前操作系统的格式。

```js
console.log(path.normalize('a/b/c')) // a\b\c

'/foo/bar/baz/asdf'
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'))  // '/foo/bar/baz/asdf'

```

path.resolve()从最后一个路径开始，反向处理。

```js
path.resolve('/foo/bar', './baz')   // returns '/foo/bar/baz'
path.resolve('/foo/bar', 'baz')   // returns '/foo/bar/baz'
path.resolve('/foo/bar', '/baz')   // returns '/baz'
path.resolve('/foo/bar', '../baz')   // returns '/foo/baz'
path.resolve('home','/foo/bar', '../baz')   // returns '/foo/baz'
path.resolve('home','./foo/bar', '../baz')   // returns '/home/foo/baz'
path.resolve('home','foo/bar', '../baz')   // returns '/home/foo/baz'
path.resolve('home', 'foo', 'build','aaaa','aadada','../../..', 'asset') //return '/home/foo/asset'
```




## 模块导出与导入

###   CommanJS模块语法

CommanJS语法也叫cjs。这种方式在ES6推出之前解决了Node端JavaScript文件模块化问题，当时浏览器还不支持模块化。这种方式，只适用于Node环境，不能用于浏览器。

要使用CommanJS语法，有两种方式：
- 使用.js或.cjs扩展名。
- 在本目录下的package.json中，添加一行：`  "type" : "commonjs" ` 。

要使用CommanJS语法，将需要导出的值用逗号分隔、花括号包裹，然后赋给module.exports，示例如下：

```js
const a =1 
const foo=()=>console.log('hello,world')

module.exports = {a,foo}
```

导入时，可以作为一个整体对象导入，其成员就是被导入文件导出的对象。如下示例：

```js
const datas = require('./export.js')
datas.foo()
```

也可以只导入部分变量，如下示例：

```js
const {foo} = require('./export.js')
fun()
```


###   ESM模块语法

ESM，即ES Module，在2015年的ES6版本中被推出，这种语法同时支持Nodejs和浏览器环境。

要使用ESM语法，有两种方式：
- 将扩展名改为.mjs。
- 在同目录下的package.json中，添加一行：` "type" : "module" ` 。

ESM语法主要包括：
-  具名导出
-  具名导入
-  默认导出
-  默认导入

要导出变量，使用export 关键字加上花括号，填入要导出的对象，用逗号隔开，例如export.mjs文件：

```
const a = 1;
const str = "hello";
const arr = [1,2,3];
const foo = ()=>console.log("hello,world");

export {a,str,arr,foo}
```

请注意，这里的花括号不是对象，这个语法也不是对象简写，只是语法规则规定将要导出的对象写在export {} 中而已。

如果要导入，使用import关键字和花括号，填入需要导入的对象，用逗号隔开，例如// import.mjs：

```js
import {a,str,arr,fun} from "./export.js"
console.log(str)
console.log(arr)
foo()
```

如果需要导入所有对象，则可以使用如下import.mjs文件中的语法。

```js
import * as vars from "./export.js"

console.log(vars.str)
console.log(vars.arr)
vars.foo()
```

有些时候从不同的文件导入同名变量，这时候就发生了命名冲突，可以使用as起个别名，如下import.mjs文件：

```js
import { data as data1 } from "./export1.js"
import { data as data2} from "./export2.js"
 ```

使用具名导入时，需要查看源文件中导出了哪些对象，需要在import{} 中填入准确的变量名，虽然可以使用as重命名，但终归不是很方便。

为了解决这个问题，可以使用默认导出，使用export default 关键字加上花括号，例如：

```js
// export.mjs
const a = 1;
const b = 2;
const str = "hello";
const arr = [1,2,3];
const foo = ()=>console.log("hello,world");

export default {a,b,str,arr,foo}
```

在默认导入时，可以在本文件中使用一个自定义的名称，例如：

```js
import  datas  from './export.js'

console.log(datas.a)
console.log(datas.arr)
datas.foo()
```

在实践中，具名导出导入、默认导出导入均有使用，应熟练掌握。


## HTTP模块

### HTTP服务端实现：使用Node.js http模块

一个Node.js HTTP服务端的基本代码骨架如下：

```js
const http = require('http')

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  res.end('Hello, World!'); // 发送响应内容
})

// 让服务器监听 3000 端口
server.listen(3000, () => {
  console.log('服务器运行在 http://localhost:3000/')
})
```

通常使用req，res表示请求对象和响应对象，这是惯用的写法。

请求的URL包括三大部分：主机名+端口、路径、查询参数。

req.url只包括路径和查询参数，而调用new URL()需要传入完整的URL，因此需要补上主机名+端口：

```js
const url = new URL(req.url, ' http://localhost:8080')
```

此时，就可以分别得到路径和查询参数了：

```
console.log(url.pathname)           //  路径
console.log(url.searchParams)  //  查询参数，是一个可迭代对象。
```

解析请求体需要监听req对象的data事件，得到请求体：

```js
req.on('data',data=>console.log(data.toString()))
```

由于安全原因，HTTP服务器默认不能跨域访问，如果在浏览器script脚本中使用fetch()方法会被拒绝访问。要解除这个限制，可以添加一行如下代码：

```js
res.setHeader("Access-Control-Allow-Origin", "*")
```

要返回数据，会用到两个方法：res.write()和res.end()。res.write()可以重复调用，表示不断开连接的情况下多次返回。而一旦遇到了res.end()，就会在返回这一次的数据后立即断开。如下示例表示返回了三次数据后断开连接：

```js
res.write('hello')
res.write('world')
res.end('res end')
```

### HTTP服务端实现：使用express库

express是非常流行的Node.js HTTP库，可以实现生产级的HTTP服务器。示例如下：

```
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// 使用第三方库bodyParser处理json格式的请求体
app.use(bodyParser.json()) 

app.post('/post', (req, res) => {
    // 获取请求体，为对象类型
    console.log(req.body)

    res.status(200)
    res.header("Content-Type", "application/json")
    res.send('{"key":"value"}') // 返回json
})

app.listen(8080, () => {
    console.log('Example app listening on port 8080')
})
```



###  HTTP客户端实现：使用Fetch

在Node.js和浏览器环境中均可使用fetch()发送HTTP请求、接收服务器响应，语法相同。

基本示例如下：

```
//  请求四件套：method、url、headers、body
const method = 'post'
const url = 'http://127.0.0.1:8080/post'
const headers = new Headers({'Content-Type': 'application/json'})
const body = '{"key":"value"}'

async function request(){
    const response = await fetch(url, {method, headers,body})
    // 状态码
    const status = await response.status
    console.log(status)
    // 响应体，json格式
    const result = await response.json()
    console.log(result)
}

request()
```

请求方法有两种：GET和POST，如果要携带正文（即请求体），应使用POST方法。

请求头使用new Headers()初始化，传入一个JavaScript对象，每个键值对对应着HTTP请求报文的头部的键值对。

```js
new Headers({'Content-Type': 'application/json'})
```

请求体是一个JavaScript对象，包括method、headers、body三个属性。其中，headers属性的是是一个Headers对象。

```js
const req = {
    method: 'POST',
    headers: new Headers({})
    body: 'req body'
}
```

fetch()函数返回的是一个期约对象，使用await解析期约值。如上面示例代码。

上面示例中的res对象还可以有如下属性和方法：
- status，取得返回码，如200。
- statusText，取得返回码状态，例如OK。
- headers，取得响应头。
- body， 取得响应体，这是一个ReadableStream对象。
- json()，如果响应体是一个JSON对象，使用该方法可以直接解析为JavaScript对象。



## npm的使用

npm是Node.js官方的包管理器工具，默认随着node一起安装，无需单独安装。可以运行npm -v确认是否已安装。

在确认npm安装后，一般需要更换镜像源以加速下载，运行如下命令更换为阿里云的npm镜像源：

```
npm config set registry https://registry.npmmirror.com/ 
```

运行如下命令，如果输出新的镜像地址则表示镜像源更换成功：

```
npm config get registry
```

通常，在项目根目录下，有一个package.json文件，文件中有scripts项，使用如下命令运行脚本：

```
npm run 脚本名称
```

在scripts之下，可以添加一个条目，条目的属性名为脚本名称，属性值为要运行的命令，例如：

```
"hello":"echo hello"
```

此时，运行 npm run hello，命令行会执行echo hello。

有些比较大的npm包会自带二进制命令，如果是本地安装的（本地安装的意思是将文件下载到当前目录下），二进制命令会被放在./node_modules/.bin目录下，无需将该目录下的命令添加到系统PATH环境变量，直接使用如下命令运行二进制程序：

```
npx 二进制命令名称
```

上述命令只能在二进制命令所在的项目目录内运行。如果是经常需要使用的命令，那么推荐全局安装，此时在任意目录内都可以运行。
