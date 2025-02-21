import{_ as i,c as l,o as e,ae as t}from"./chunks/framework.rTUm5mJw.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/React-Native——Android项目源码结构.md","filePath":"前端/React-Native——Android项目源码结构.md"}'),r={name:"前端/React-Native——Android项目源码结构.md"};function d(n,a,o,s,_,p){return e(),l("div",null,a[0]||(a[0]=[t("<p><strong>Android项目源码结构</strong></p><p>react native项目通过Gradle工具编译后的安卓项目代码放在android子文件夹下，而安卓子项目的源代码又放在app/src/main目录下，该目录有三个子文件（夹）：</p><ul><li>java： 存放Java或Kotlin代码。</li><li>AndroidManifest.xml： Android应用配置文件。</li><li>res ： 存放资源文件。</li></ul><p>其中，res文件夹又有4个子目录：</p><ul><li>drawable： 存放图片文件或图片描述文件。</li><li>layout： 存放页面描述文件，后缀名为xml。</li><li>values： 存放变量定义文件。例如字符串变量strings.xml、颜色变量colors.xml、样式变量styles.xml等。</li></ul><p>由于设备的分辨率不同，所以同一张图片往往需要准备不同的分辨率的图片。因此，drawable又有几个子目录：</p><ul><li>drawable-xhdpi： 存放适配720P屏幕的图片。</li><li>drawable-xxhdpi： 存放适配1080P屏幕的图片。</li><li>drawable-xxxhdpi： 存放适配1.5K及以上屏幕的图片。</li></ul><p>在这三个目录存放不同分辨率的同名图片，应用在运行时，会自动根据屏幕分辨率选择具体文件夹下的图片。</p><p>大致明白了Android项目结构，就可以分析AndroidManifest.xml文件的内容了。因为后缀名是xml，所以AndroidManifest.xml遵循标准的XML语法。一个XML文件的内容是由多级嵌套节点组成的，每个节点通常包含开始标签、节点属性、子节点、结束标签。下面剖析常见的几个节点。</p>",9)]))}const x=i(r,[["render",d]]);export{m as __pageData,x as default};
