# blog
personal blog

## 安装

```
pip install gradio
```

## 导入

```
import gradio as gr
print(gr.__version__)
# 4.15.0
```

- 界面（Interface）：Gradio的核心是Interface类，它允许用户定义输入和输出类型，创建交互式的Web界面。
- 输入类型：Gradio支持多种输入类型，如gr.Text用于文本输入，gr.Image用于图像上传，gr.Audio用于音频输入等。
- 输出类型：输出类型与输入类型相对应，包括gr.Text、gr.Image和gr.Audio等，用于展示模型的输出结果。


## 一个简单的示例

```
import gradio as gr

def greet(name):
    return "Hello " + name + "!"

iface = gr.Interface(fn=greet, inputs=gr.Textbox(), outputs=gr.Textbox())
iface.launch()
```



## Interface()的参数

- fn 处理函数
- inputs 输入
- outputs 输出
- title 
- description 
- layout 输入输出组件的布局
- theme 界面主题风格，如dark
- css  css文本
- layout layout="grouped"或layout="stacked"来更改组件的排列方式，使界面更加紧凑或分散。


## 输入组件 (Inputs)

输入组件的数量与函数的参数数量要对应。如果是多个输入，则inputs为数组，同时，函数有相应数量的参数，切每个参数的类型已经确定。

-  Audio：允许用户上传音频文件或直接录音。参数：source: 指定音频来源（如麦克风）、type: 指定返回类型。 示例：gr.Audio(source="microphone", type="filepath")
- Checkbox：提供复选框，用于布尔值输入。参数：label: 显示在复选框旁边的文本标签。 示例：gr.Checkbox(label="同意条款")
-  CheckboxGroup：允许用户从一组选项中选择多个。参数：choices: 字符串数组，表示复选框的选项、label: 标签文本。示例：gr.CheckboxGroup(["选项1", "选项2", "选项3"], label="选择你的兴趣")
-  ColorPicker：用于选择颜色，通常返回十六进制颜色代码。参数：default: 默认颜色值。示例：gr.ColorPicker(default="#ff0000")
-  Dataframe：允许用户上传CSV文件或输入DataFrame。参数：headers: 列标题数组、row_count: 初始显示的行数。示例：gr.Dataframe(headers=["列1", "列2"], row_count=5)
-  Dropdown：下拉菜单，用户可以从中选择一个选项。参数：choices: 字符串数组，表示下拉菜单的选项、label: 标签文本。示例：gr.Dropdown(["选项1", "选项2", "选项3"], label="选择一个选项")
-  File：用于上传任意文件，支持多种文件格式。参数：file_count: 允许上传的文件数量，如"single"或"multiple"、type: 返回的数据类型，如"file"或"auto"。示例：gr.File(file_count="single", type="file")
-  Image：用于上传图片，支持多种图像格式。参数：type图像类型，如pil。示例：gr.Image(type='pil')
-  Number：数字输入框，适用于整数和浮点数。参数：default: 默认数字、label: 标签文本。示例：gr.Number(default=0, label="输入一个数字")
-  Radio：单选按钮组，用户从中选择一个选项。参数：choices: 字符串数组，表示单选按钮的选项、label: 标签文本。示例：gr.Radio(["选项1", "选项2", "选项3"], label="选择一个选项")
-  Slider：滑动条，用于选择一定范围内的数值。参数：minimum: 最小值、maximum: 最大值、step: 步长、label: 标签文本。示例：gr.Slider(minimum=0, maximum=10, step=1, label="调整数值")
-  Textbox：单行文本输入框，适用于简短文本。参数：default: 默认文本、placeholder: 占位符文本。示例：gr.Textbox(default="默认文本", placeholder="输入文本")
-  Textarea：多行文本输入区域，适合较长的文本输入。参数：lines: 显示行数、placeholder: 占位符文本。示例：gr.Textarea(lines=4, placeholder="输入长文本")
-  Time：用于输入时间。参数：label: 标签文本。示例：gr.Time(label="选择时间")
-  Video：视频上传组件，支持多种视频格式。参数：label: 标签文本。示例：gr.Video(label="上传视频")
-  Data：用于上传二进制数据，例如图像或音频的原始字节。参数：type: 数据类型，如"auto"自动推断。示例：gr.Data(type="auto", label="上传数据")

## 输出组件
-  Audio：播放音频文件。参数：type 指定输出格式。示例：gr.Audio(type="auto")
-  Carousel：以轮播方式展示多个输出，适用于图像集或多个数据点。参数：item_type 设置轮播项目类型。示例：gr.Carousel(item_type="image")
-  Dataframe：展示Pandas DataFrame，适用于表格数据。参数：type 指定返回的DataFrame类型。示例：gr.Dataframe(type="pandas")
-  Gallery：以画廊形式展示一系列图像。
-  HTML：展示HTML内容，适用于富文本或网页布局。
-  Image：展示图像。参数：type 指定图像格式。 示例：gr.Image(type="pil")
-  JSON：以JSON格式展示数据，便于查看结构化数据。
-  KeyValues：以键值对形式展示数据。
-  Label：展示文本标签，适用于简单的文本输出。
-  Markdown：支持Markdown格式的文本展示。
-  Plot：展示图表，如matplotlib生成的图表。
-  Text：用于显示文本，适合较长的输出。
-  Video：播放视频文件。


## 集成大模型
如下代码集成了HuggingFace的图像分类模型：
```
import gradio as gr
from transformers import pipeline

# 加载预训练模型
model = pipeline('image-classification')

# 定义处理函数
def classify_image(img):
    return {i['label']: i['score'] for i in model(img)}

# 创建Gradio界面
iface = gr.Interface(
    fn=classify_image,
    inputs=gr.Image(type="pil"),
    outputs=gr.Label(num_top_classes=5))
iface.launch()

```
