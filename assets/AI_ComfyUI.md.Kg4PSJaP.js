import{_ as a,c as e,o as r,ae as i}from"./chunks/framework.BHrE6nLq.js";const o="/assets/ComfyUI%E9%BB%98%E8%AE%A4%E5%B7%A5%E4%BD%9C%E6%B5%81.BGFFpSnz.png",l="/assets/%E8%B4%B9%E7%94%A8%E5%8F%82%E8%80%83.DJdOhh_8.png",d="/assets/%E6%96%87%E4%BB%B6%E5%A4%B9%E7%BB%93%E6%9E%84.D5A6VXKv.png",s="/assets/%E6%96%87%E4%BB%B6%E5%A4%B9%E7%BB%93%E6%9E%842.ORmucxTk.png",n="/assets/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.K8PbqFWE.png",p="/assets/ComfyUI-Manager.CI50acjF.png",h="/assets/ComfyUI-Manger-Git%E6%96%B9%E5%BC%8F%E5%AE%89%E8%A3%85.SmNAqvTT.png",m="/assets/ComfyUI-Manger-%E4%B8%8B%E8%BD%BDZip%E6%96%B9%E5%BC%8F%E5%AE%89%E8%A3%85.AUIrQdjS.png",c="/assets/%E9%87%87%E6%A0%B7%E5%99%A8%E8%8A%82%E7%82%B9.CgbxHDLf.png",f="/assets/AnimateDiff-1.DPMGwt6R.png",u="/assets/AnimateDiff-2.CUeALbbw.png",b="/assets/AnimateDiff-3.CR2JShB1.png",_="/assets/AnimateDiff-4.Cdg_tcLZ.png",A="/assets/AnimateDiff-5.ChENjsGX.png",g="/assets/SDXL%E7%BB%84%E6%88%90.CRwM9CUa.png",I="/assets/%E6%80%A7%E8%83%BD%E5%AF%B9%E6%AF%94.D2VZyPDJ.png",C="/assets/T2I-Idapter%E4%BB%8B%E7%BB%8D.BNv4tYU7.png",E="/assets/IP-Adapter-1.DHhAUPKE.png",P="/assets/IP-Adapter-2.CJdJDiIB.png",y="/assets/IP-Adapter%E5%8A%9F%E8%83%BD%E5%88%86%E7%B1%BB.CuomIVUv.png",S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"AI/ComfyUI.md","filePath":"AI/ComfyUI.md"}'),B={name:"AI/ComfyUI.md"};function U(q,t,D,x,k,L){return r(),e("div",null,t[0]||(t[0]=[i('<h2 id="comfyui简介" tabindex="-1">ComfyUI简介 <a class="header-anchor" href="#comfyui简介" aria-label="Permalink to &quot;ComfyUI简介&quot;">​</a></h2><p>ComfyUI是基于Stable Diffusion 开源绘画大模型的节点可视化工具。comfy，英文释义是轻松的，这表明作者希望用户更轻松的使用Stable Diffusion。与之前的Web UI不同，ComfyUI不使用输入框，而是使用节点工作流，可控制的参数更多，可以更自由的实现各种效果。</p><p>ComfyUI的Github地址： <a href="https://github.com/comfyanonymous/ComfyUI" target="_blank" rel="noreferrer">https://github.com/comfyanonymous/ComfyUI</a></p><p>ComfyUI相比WebUI的优点是： 生成性能高、 节点式界面更直观、 丰富的自定义节点、 丰富的社区生态</p><h2 id="comfyui的默认工作流" tabindex="-1">ComfyUI的默认工作流 <a class="header-anchor" href="#comfyui的默认工作流" aria-label="Permalink to &quot;ComfyUI的默认工作流&quot;">​</a></h2><p>ComfyUI的默认工作流如下，更复杂的工作流都是基于这个默认工作流进行自定义和扩展的。</p><p><img src="'+o+'" alt="ComfyUI默认工作流.png"></p><h2 id="文生视频知识点梳理" tabindex="-1">文生视频知识点梳理 <a class="header-anchor" href="#文生视频知识点梳理" aria-label="Permalink to &quot;文生视频知识点梳理&quot;">​</a></h2><ul><li>部署 <ul><li>本地</li><li>云端</li><li>在线网站</li></ul></li><li>ControlNet <ul><li>风格转移</li><li>骨架</li><li>语义分割</li><li>草绘生图</li><li>inpaint</li><li>openpose骨架</li></ul></li><li>LoRA</li><li>工作流的使用、分享、格式分析</li><li>局部细节修复</li><li>图片放大</li><li>SR、CCSR、APISR</li><li>AnimateDiff</li><li>Segment Anything</li><li>TensorRT</li><li>Adapter</li><li>Deforum</li><li>Reactor 换脸</li><li>SVD AI视频</li><li>应用 <ul><li>换脸</li><li>换衣服</li><li>静图变动图</li><li>目标跟踪</li><li>语义分割</li></ul></li></ul><h2 id="安装和部署" tabindex="-1">安装和部署 <a class="header-anchor" href="#安装和部署" aria-label="Permalink to &quot;安装和部署&quot;">​</a></h2><p>要用到的模型： checkpoint主模型、VAE模型、 ControlNet模型、Lora、Embedding、Hypernetwork ，需要一个超大存储空间。</p><h3 id="硬件要求" tabindex="-1">硬件要求 <a class="header-anchor" href="#硬件要求" aria-label="Permalink to &quot;硬件要求&quot;">​</a></h3><table tabindex="0"><thead><tr><th>硬件</th><th>要求</th></tr></thead><tbody><tr><td>GPU</td><td>4060Ti以上</td></tr><tr><td>GPU存储（显存）</td><td>最低4GB，流畅运行推荐8GB</td></tr><tr><td>CPU</td><td>要求较低，Intel10代i3以上就可以</td></tr><tr><td>CPU存储（内存）</td><td>最低16GB，推荐32GB</td></tr></tbody></table><h3 id="云平台硬件计费说明" tabindex="-1">云平台硬件计费说明 <a class="header-anchor" href="#云平台硬件计费说明" aria-label="Permalink to &quot;云平台硬件计费说明&quot;">​</a></h3><table tabindex="0"><thead><tr><th>硬件</th><th>计费说明</th></tr></thead><tbody><tr><td>GPU+显存</td><td>依据GPU的性能，每GB每秒</td></tr><tr><td>CPU+内存</td><td>依据CPU的性能，每GB每秒</td></tr></tbody></table><p>费用举例：</p><p><img src="'+l+'" alt="费用参考"></p><h3 id="阿里云部署参考文档" tabindex="-1">阿里云部署参考文档 <a class="header-anchor" href="#阿里云部署参考文档" aria-label="Permalink to &quot;阿里云部署参考文档&quot;">​</a></h3><p><a href="https://help.aliyun.com/zh/functioncompute/deploying-comfyui-through-function-computation-to-implement-an-aigc-image-generation-system" target="_blank" rel="noreferrer">函数计算部署</a></p><p><a href="https://help.aliyun.com/zh/pai/user-guide/use-comfyui-to-deploy-an-ai-video-generation-model-service" target="_blank" rel="noreferrer">PAI-EAS部署</a></p><h3 id="文件结构" tabindex="-1">文件结构 <a class="header-anchor" href="#文件结构" aria-label="Permalink to &quot;文件结构&quot;">​</a></h3><p><img src="'+d+'" alt="文件结构"></p><p><img src="'+s+'" alt="文件结构2"></p><p>根目录下的四个文件（夹）的作用如下：</p><ul><li>ComfyUI ： 最关键的文件夹，存放着所有模型、节点。包括checkpoint大模型、LoRA模型、ControlNet模型等。</li><li>run_cpu.bat ： 用CPU运行</li><li>run_nvidia_gpu.bat ： 用GPU运行</li><li>update： 版本升级</li></ul><h3 id="典型文件的位置" tabindex="-1">典型文件的位置 <a class="header-anchor" href="#典型文件的位置" aria-label="Permalink to &quot;典型文件的位置&quot;">​</a></h3><table tabindex="0"><thead><tr><th>位置</th><th>作用</th></tr></thead><tbody><tr><td>模型文件</td><td>ComfyUI/models</td></tr><tr><td>自定义节点</td><td>ComfyUI\\custom_nodes\\</td></tr><tr><td>基础模型（大模型）</td><td>ComfyUI/models/checkpoints</td></tr><tr><td>VAE</td><td>ComfyUI/models/vae</td></tr><tr><td>LoRA模型</td><td>ComfyUI\\models\\loras</td></tr></tbody></table><p><img src="'+n+'" alt="配置文件"></p><h3 id="自定义模型文件的位置" tabindex="-1">自定义模型文件的位置 <a class="header-anchor" href="#自定义模型文件的位置" aria-label="Permalink to &quot;自定义模型文件的位置&quot;">​</a></h3><p>除了默认位置外，还可以自定义位置，在 <code>ComfyUI\\extra_model_paths.yaml</code> 文件中更改。</p><h3 id="sd3下载" tabindex="-1">SD3下载 <a class="header-anchor" href="#sd3下载" aria-label="Permalink to &quot;SD3下载&quot;">​</a></h3><p><a href="https://pan.baidu.com/s/1Su7BzC9GQ1uD_YgCVVpruQ?pwd=tfue" target="_blank" rel="noreferrer">https://pan.baidu.com/s/1Su7BzC9GQ1uD_YgCVVpruQ?pwd=tfue</a></p><h3 id="模型插件管理器-comfyui-manager" tabindex="-1">模型插件管理器 ComfyUI Manager <a class="header-anchor" href="#模型插件管理器-comfyui-manager" aria-label="Permalink to &quot;模型插件管理器 ComfyUI Manager&quot;">​</a></h3><p>下载 <a href="https://github.com/ltdrdata/ComfyUI-Manager" target="_blank" rel="noreferrer">https://github.com/ltdrdata/ComfyUI-Manager</a> ，解压到 <code>ComfyUI\\custom_nodes\\</code> 中。</p><p><img src="'+p+'" alt="ComfyUI Manager"></p><p>有两种方式。第一种是使用git clone。</p><p><img src="'+h+'" alt="ComfyUI-Manger-Git方式安装"></p><p>第二种是直接下载zip包再解压。</p><p><img src="'+m+'" alt="ComfyUI-Manger-下载Zip方式安装"></p><h2 id="常见节点的输入、输出、参数说明" tabindex="-1">常见节点的输入、输出、参数说明 <a class="header-anchor" href="#常见节点的输入、输出、参数说明" aria-label="Permalink to &quot;常见节点的输入、输出、参数说明&quot;">​</a></h2><h3 id="ksampler-采样器节点" tabindex="-1">KSampler 采样器节点 <a class="header-anchor" href="#ksampler-采样器节点" aria-label="Permalink to &quot;KSampler 采样器节点&quot;">​</a></h3><p><img src="'+c+'" alt="采样器节点"></p><table tabindex="0"><thead><tr><th>参数</th><th>作用</th></tr></thead><tbody><tr><td>model</td><td>指定大模型</td></tr><tr><td>positive</td><td>正向提示词</td></tr><tr><td>negative</td><td>反向提示词</td></tr><tr><td>latent_image</td><td>是一个空的图像空间，用于在其中存储生成的图片数据，它来自于Empty Latent Image节点，这个节点提供指定宽高和数量的空图像空间。之所以用Latent这个词，是因为采样产生的图像数据还不是真正的图像格式，是一种图片数据的压缩格式，称为潜空间图像。</td></tr><tr><td>seed</td><td>图片生成的种子，每次使用不同的种子就会引入不同的随机特征，同样的参数就可以生成主题相同但变化的图像。使用完全相同的参数和种子将生成完全相同的图像。</td></tr><tr><td>control_after_generate</td><td>运行后操作，里面有四个选项：固定、增加、减少、随机。一般我们就使用固定或随机即可。</td></tr><tr><td>steps</td><td>迭代步数，一般设置30-40左右。</td></tr><tr><td>cfg</td><td>提示词相关性。参数越大，图片效果越接近提示词。参数越小，AI 发挥空间越大。默认为8，一般设置为10比较好。</td></tr><tr><td>sampler_name</td><td>采样器，反向扩散时去除噪音的方法，不同的方法对速度和质量会有不同的影响。默认选择的是euler，兼顾了生成图片的质量和速度，质量要求高时推荐选择dpmpp类的采样器。</td></tr><tr><td>scheduler</td><td>采样调度器。控制在整个采样过程的时间线上每一步降噪的幅度。如果对默认的调度器不满意，可以试试Karras，它可以让生成获得更高的采样效率和图片质量。</td></tr><tr><td>denoise</td><td>去噪幅度，最大1.0。越高的值代表初识噪音保留的越少，图像特征越清晰；越低的值代表初识噪音保留的较多，图像更抽象或者有某种艺术效果。生成图片时要一起考虑提示词、图像尺寸、采样策略等因素的影响。</td></tr></tbody></table><h3 id="vae-decode" tabindex="-1">VAE Decode <a class="header-anchor" href="#vae-decode" aria-label="Permalink to &quot;VAE Decode&quot;">​</a></h3><p>采样器生成的图片数据是一种特殊的压缩格式，和真正的图片数据格式不同，要获取真正的图片数据，还需要VAE解码。</p><p>VAE解码需要使用一个VAE模型，VAE模型一般包含在SD基础模型中，也可以使用单独的VAE模型。</p><h3 id="加载器-效率" tabindex="-1">加载器（效率） <a class="header-anchor" href="#加载器-效率" aria-label="Permalink to &quot;加载器（效率）&quot;">​</a></h3><ul><li>输入： LoRA堆、ControlNet堆</li><li>输出： 模型、正面、负面、Latent、VAE、Clip、</li><li>参数： CKPT模型名称、VAE、Clip Skip、LoRA、正面、反面提、宽度、高度、批次大小</li></ul><h3 id="k采样器-效率" tabindex="-1">K采样器（效率） <a class="header-anchor" href="#k采样器-效率" aria-label="Permalink to &quot;K采样器（效率）&quot;">​</a></h3><ul><li>输入： 模型、正面、负面、Latent、VAE、脚本</li><li>输出： 模型、正面、负面、Latent、VAE、图像</li><li>参数： 随机种子、步数、CFG、采样器、调度器</li></ul><h3 id="lora堆" tabindex="-1">LoRA堆 <a class="header-anchor" href="#lora堆" aria-label="Permalink to &quot;LoRA堆&quot;">​</a></h3><ul><li>输入：</li><li>输出：</li><li>参数： 输入模式、LoRA数量、LoRA1、LoRA1的权重、LoRA2、LoRA2的权重、......</li></ul><h2 id="animatediff" tabindex="-1">AnimateDiff <a class="header-anchor" href="#animatediff" aria-label="Permalink to &quot;AnimateDiff&quot;">​</a></h2><p><img src="'+f+'" alt="AnimateDiff-1"></p><p><img src="'+u+'" alt="AnimateDiff-2"></p><p><img src="'+b+'" alt="AnimateDiff-3"></p><p><img src="'+_+'" alt="AnimateDiff-4"></p><p><img src="'+A+'" alt="AnimateDiff-5"></p><h2 id="sdxl-组成" tabindex="-1">SDXL 组成 <a class="header-anchor" href="#sdxl-组成" aria-label="Permalink to &quot;SDXL 组成&quot;">​</a></h2><p>SDXL Base模型由U-Net、VAE以及CLIP Text Encoder（两个）三个模块组成，在FP16精度下Base模型大小6.94G（FP32：13.88G），其中U-Net占5.14G、VAE模型占167M以及两个CLIP Text Encoder一大一小（OpenCLIP ViT-bigG和OpenAI CLIP ViT-L）分别是1.39G和246M。</p><p>SDXL Refiner模型同样由U-Net、VAE和CLIP Text Encoder（一个）三个模块组成，在FP16精度下Refiner模型大小6.08G，其中U-Net占4.52G、VAE模型占167M（与Base模型共用）以及CLIP Text Encoder模型（OpenCLIP ViT-bigG）大小1.39G（与Base模型共用）。</p><p>Base的作用是生成图像的Latent特征，Refiner的作用是小噪声去除和细节质量提升。</p><p><img src="'+g+'" alt="SDXL组成"></p><p>SDXL Base 地址： <a href="https://hf-mirror.com/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors" target="_blank" rel="noreferrer">https://hf-mirror.com/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors</a></p><p>SDXL Refinery 地址： <a href="https://hf-mirror.com/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors" target="_blank" rel="noreferrer">https://hf-mirror.com/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors</a></p><p>Stable Diffusion XL模型放到ComfyUI/models/checkpoints/路径下。</p><p>总之，base加refiner比单独的base好，SD XL 比SD好。</p><p><img src="'+I+'" alt="性能对比"></p><h2 id="controlnet" tabindex="-1">ControlNet <a class="header-anchor" href="#controlnet" aria-label="Permalink to &quot;ControlNet&quot;">​</a></h2><h2 id="controlnet简介" tabindex="-1">ControlNet简介 <a class="header-anchor" href="#controlnet简介" aria-label="Permalink to &quot;ControlNet简介&quot;">​</a></h2><p>通过你手上已有的图而不是咒语，实现对AI绘图的控制。比如通过线稿生成图片、风格迁移。</p><p>可以认为是大模型的插件，增强文生图的功能，生成更符合期望的图片。</p><h2 id="adapter" tabindex="-1">Adapter <a class="header-anchor" href="#adapter" aria-label="Permalink to &quot;Adapter&quot;">​</a></h2><p>Adapter ，就是将一张图像的风格，迁移到另一张图像上去。通俗的讲，就是垫图。</p><h3 id="t2i-adpter" tabindex="-1">T2I adpter <a class="header-anchor" href="#t2i-adpter" aria-label="Permalink to &quot;T2I adpter&quot;">​</a></h3><p>T2I adapter 比ControlNet轻量，模型文件只有300M左右。T2I 给输入图片追加一定的条件，比如姿势图、草图、深度图，这样图片根据条件生成新图。</p><p><img src="'+C+'" alt="T2I-Idapter介绍"></p><h3 id="ip-adapter" tabindex="-1">IP Adapter <a class="header-anchor" href="#ip-adapter" aria-label="Permalink to &quot;IP Adapter&quot;">​</a></h3><p>IP adapter 根据参考图控制图像的生成。输入一张参考图和限定文字，可以生成符合文字要求的新图。输入一张参考图和另一张图片，可以生成基于参考图且叠加另一种图片要素的新图。</p><p>IP Adapter 中的“IP”不是网络中的IP，这里的“I”指的是Image（图片），“P”指的是Prompt（提示词）。所以，IP Adapter的直译是“图像提示适配器”。</p><p><img src="'+E+'" alt="IP-Adapter-1.png"></p><p><img src="'+P+'" alt="IP-Adapter-2.png"></p><p>IP adapter 只有22M参数，比ControlNet和T2I更加轻量。</p><p>下载完后需要放在 /ComfyUI/models/ipadapter 目录下</p><p>按照推出的先后时间是： ControlNet -&gt; T2I Adapter -&gt; IP Adapter 。</p><h3 id="ip-adapter-的功能分类" tabindex="-1">IP Adapter 的功能分类 <a class="header-anchor" href="#ip-adapter-的功能分类" aria-label="Permalink to &quot;IP Adapter 的功能分类&quot;">​</a></h3><ul><li>clip ：将参考图整体看作提示。</li><li>face_id： 将人物面部特征作为提示。</li></ul><p>其中，face_id又分为两个版本：</p><ul><li>face_id</li><li>face_id_plus</li><li>face_id_plusV2： 改进版，效果最好。</li></ul><p><img src="'+y+'" alt="IP-Adapter功能分类.png"></p><h3 id="vit-h-和vit-g" tabindex="-1">ViT-H 和ViT-G <a class="header-anchor" href="#vit-h-和vit-g" aria-label="Permalink to &quot;ViT-H 和ViT-G&quot;">​</a></h3><p>这两个都是图像编码器，SDXL默认使用Vit-G，SD1.5默认使用ViT-H。</p><p>例如ip-adapter-clip-sdxl这个模型，只标明了SDXL，没标明图像编码器，那么默认就是ViT-G。而ip-adapter_clip_sdxl_plus_vith则表示sdxl基础模型搭配ViT-H图像编码器。</p>',93)]))}const T=a(B,[["render",U]]);export{S as __pageData,T as default};
