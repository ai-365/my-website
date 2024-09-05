

<p id="top"></p>

<a style="position: fixed;top:100px;left:-20px;" href="#top">回到顶部</a>

- [渲染模板字符串](#渲染模板字符串)
- [渲染模板HTML](#渲染模板html)
- [使用flask和jinja2渲染模板HTML](#使用flask和jinja2渲染模板html)


Jinja2是一种模板语言，类似于 f 字符串或者format()函数，可以将包含变量的字符串或HTML模板文件渲染成最终的文本。

##   渲染模板字符串

```
from jinja2 import Template
template = Template('Hello {{ name }}!')
template.render(name='John Doe')
# Hello，John Doe
```

通过创建一个 Template 的实例，你会得到一个新的模板对象，提供一 个名为 render() 的方法，该方法在有字典或关键字参数时调用 扩充模板。字典或关键字参数会被传递到模板，即模板“上下文”。

##  渲染模板HTML

首先创建一个HTML文件，将需要解析的变量使用双花括号包裹，示例如下：

```
<html>
<head>
    <title>{{ title }}</title>
</head>
<body>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
</body>
</html>

```

然后，传入变量的实际值，示例如下：

```
# 创建一个 Environment 对象，指定模板文件的路径
env = Environment(loader=FileSystemLoader('templates'))
# 加载模板文件
template = env.get_template('example.html')
# 渲染模板，传入变量的值
html = template.render(title='Python Jinja2', content='This is a blog about Python Jinja2.')
# 打印渲染后的 HTML 字符串
print(html)

```

可以得到如下标准的HTML内容输出：

```
<html>
<head>
    <title>Python Jinja2</title>
</head>
<body>
    <h1>Python Jinja2</h1>
    <p>This is a blog about Python Jinja2.</p>
</body>
</html>

```


##   使用flask和jinja2渲染模板HTML

在使用模板引擎（如Jinja2）构建动态网页时 ，列表数据常被用来生成表格、列表项等重复结构。例如下面的HTML模板文件：

```
<!-- users.html -->
<ul>
{% for user in users %}
  <li>{{ user.name }} (ID: {{ user.id }})</li>
{% endfor %}
</ul>
```

在flask后端：

```
from flask import render_template

@app.route('/users')
def show_users():
    users = [
        {'id': 1, 'name': 'Alice'},
        {'id': 2, 'name': 'Bob'},
    ]
    return render_template('users.html', users=users)
```

