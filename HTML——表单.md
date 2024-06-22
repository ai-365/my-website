
制作一个表单至少需要三个元素： from、input、button。

## form元素

- action ： 数据发送的目的地，通常是一个URL。
- method： 发送到服务器的方法，应该在 get 和 post 中二选一，如果不写，默认值为get。然而，大多数表单发送数据时需要使用post。
- enctype： 浏览器发送到服务器的数据采用的编码方式。详情见下文。
- autocomplete： 控制表单的自动完成。on表示开启，off表示关闭。
- target ： 提交表单后服务器反馈的信息显示在哪里。默认情况下反馈信息会替换表单所在的原页面。可选值见下文。
- name： 为表单设置一个独一无二的标识符。该属性与id不是一回事。


表单的enctype编码方式有三种。

第一种编码方式是application/x-www-form-urlencoded，这是默认方式，也是最常使用的方式。它将每项数据的名值对以&符号链接，组成一个新的字符串，这与URL链接的query部分的语法相同。这种方式的缺点是无法将文件上传。语法示例如下：

```
name1=value1&name2=value2
```
		
第二种编码方式：multipart/form-data。它更为冗长，处理起来更复杂。这种编码方式用于将文件上传到服务器。

第三种编码方式是text/plain。这种编码要谨慎使用，因为没有正式的规范，在各个浏览器中的方式也不相同。

target属性指定提交表单后服务器反馈信息的显示位置，与a元素类似，该属性有如下值：

- `_blank`： 服务器反馈信息显示在新窗口。
- `-parent`：服务器反馈信息显示在父窗框组中。
- `_self`：服务器反馈信息显示在当前窗口，这是默认行为。
- `-top`：服务器反馈信息显示在顶层窗口。
- `<frame>`：服务器反馈信息显示在指定窗框中。

HTML4规定表单元素必须写在`<form></form>中`，在HTML5没有这个约束。只要为form设置了id属性，然后将其它地方的表单元素的form属性值设置为这个id属性值即可。示例如下：

```html
<form id="myform">
	Name:<input />
</form>
<button form="myform" type="reset">Reset</button>
```

在上面这个例子中，button元素写在了form的外面，但由于使用form属性指向了表单的id值，因此与将button直接写在`<form></form>`里面的效果一样。
