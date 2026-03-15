# 屏幕适配

# 屏幕适配

更新时间：2024/10/11 11:55:18

蓝河操作系统支持对不同尺寸和不同形状的屏幕的适配能力。

## 1.等比放缩

在 manifest 文件中配置`designWidth`字段的设计基准宽度，蓝河应用便可以自动完成等比缩放。
[code] 
    // manifest.json
    {
      "config": {
        "designWidth": 466
      }
    }
[/code]

复制代码

如上示例中`designWidth`配置为 466px，那么所有的 px 单位使用都会按照 466px 的基准宽度换算。如下示例中显示为宽高都是屏幕宽度一半。
[code] 
    .box {
      width: 233px;
      height: 233px;
    }
[/code]

复制代码

## 2.非等比屏幕

在非等比屏幕下，使用等比缩放或许不是开发想要的效果，这里蓝河应用提供了使用绝对宽度的方案来实现您想要的布局。

### dp 单位

px 会使布局产生等比缩放效果，而 dp 为绝对的屏幕尺寸。

以宽度为示例，设备 dp 的计算方法如下：
[code] 
    屏幕宽度dp值 = 设备屏幕分辨率的宽度 / DPR
[/code]

复制代码

上述公式中 DPR 的取值可以查如下表格得到

规格 | 取值 | 说明  
---|---|---  
ldpi | 0.75 | 低密度屏幕(~120dpi)  
mdpi | 1 | 中密度屏幕(~160dpi)(基准密度)  
hdpi | 1.5 | 高密度屏幕(~240dpi)  
xhdpi | 2.0 | 加高密度屏幕(~320dpi)  
xxhdpi | 3.0 | 超超高密度屏幕(~480dpi)  
xxxhdpi | 4.0 | 超超超高密度屏幕(~640dpi)  
  
引入 DP 单位，开发者可以解决 `非等比例的屏幕适配` ;比如:在 DPR 为 3 的小屏幕上希望内容显示较少，设置元素 的宽度 dp 较小，在 DPR 为 3 的大屏幕上希望内容显示较多，设置元素的宽度 dp 较大;该单位可以像 px 单位 一样，用于常⻅的 DOM 元素的宽度、高度上。如下示例
[code] 
    .box {
      width: 50dp;
      height: 50dp;
    }
[/code]

复制代码

## 3.媒体查询

结合 dp 值，设备类型，开发者可以针对不同屏幕和设备写不同样式。如下示例：
[code] 
    /* 方表和手机上生效 */
    @media screen and (device: watch-square) or screen and (device: phone) {
      .box {
        background-color: red;
      }
    }
[/code]

复制代码

更多内容参考[媒体查询](</reference/configuration/style-sheet/#%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2>)

## 4.获取设备类型

在 template 或者 js 中，如果我们想差异性处理组件和逻辑，可以判断当前的设备类型。

如下示例，在布局中判断设备类型
[code] 
    <div>
      <header-of-square if="$device.deviceType == 'watch-square'">
      <header-of-round elif="$device.deviceType == 'watch-round'">
    </div>
[/code]

复制代码

$device 的详细文档异步[公共对象](</reference/configuration/script/#%E5%85%AC%E5%85%B1%E5%AF%B9%E8%B1%A1>)

## 5\. 资源管理

资源是与您的应用程序捆绑和部署的文件，它们可以在运行时被访问。常见的资源类型包括静态数据（例如 JSON 文件）、配置文件、以及各种格式的图标和图像（JPEG、WebP、GIF、动画 WebP/GIF、PNG、BMP 和 WBMP）。考虑到您的程序将在各种不同类型和屏幕分辨率的设备上运行，为了追求最佳的用户体验，您需要针对不同的场景、设备和分辨率匹配合适的资源。因此，这里提供了一套匹配规则，使得您的应用可以轻松地适配不同的设备状态。

在项目的根目录下的 `resources` 文件夹中，您可以根据需要创建 JSON 格式的配置文件。这些文件的命名规则为：前缀“res”开头，用连字符“-”连接，再根据需要添加限定词。默认的配置文件命名为 `res-defaults.json`。
[code] 
    ├── resources
      │── res-pad.json
      │── res-watch.json
      └── res-defaults.json
[/code]

复制代码

### 5.1 resources 规则

1、res-watch-分辨率-手表形状-屏幕密度.json，短线连接的为限定词，限定词顺序为：分辨率 > 表盘形状 > 屏幕密度。

2、其中分辨率、手表形状和屏幕密度如无需要可以不用写

3、分辨率使用 宽 x 高的形式，x 为英文字母 X 的小写

4、 屏幕密度的枚举为：`ldpi`/`mdpi`/`hdpi`/`xhdpi`/`xxhdpi`/`xxxhdpi`

5、手表形状枚举值为：`square` 和 `round`

6、 默认资源名为：res-defaults.json

7、 资源的命中权重大小为：分辨率 (1000) > 表盘形状 (100) > 屏幕密度 (10)

为方便理解资源的生效顺序，我们可以假设下权重: 分辨率 = 1000, 表盘形状 = 100, 屏幕密度 = 10，以下权重越高则越会优先命中并生效。
[code] 
    // 匹配402x402，方形手表，屏幕密度120
    // 权重：1110
    res-watch-402x402-square-ldpi.json
    
    // 匹配402x402，圆形手表
    // 权重：1100
    res-watch-402x402-round.json
    
    // 匹配方形手表
    // 权重：100
    res-watch-square.json
    
    // 匹配402x402的手表
    // 权重：1000
    res-watch-402x402.json
    
    // 匹配手表密度为120dpi
    // 权重：10
    res-watch-ldpi.json
    
    // 匹配手表
    res-watch.json
    
    // 匹配所有资源作为兜底
    res-defaults.json
[/code]

复制代码

### 5.2 resources 配置

下面示例演示了如何配置 pad 和 watch 两种设备的资源的配置
[code] 
    // resources/res-pad.json
    {
      "image": {
        "logo": "/common/pad/logo.png",
        "banner": "/common/pad/banner.png"
      },
      "colors": {
        "headerBackGround": "#ffffff"
      }
    }
[/code]

复制代码
[code] 
    // resources/res-watch.json
    {
      "image": {
        "logo": "/common/watch/logo.png",
        "banner": "/common/watch/banner.png"
      },
      "colors": {
        "headerBackGround": "#fff000"
      }
    }
[/code]

复制代码

### 5.3 $res 方法

配置完 resources 后就可以使用$res 在 template 和 script 中使用了

属性 | 类型 | 参数 | 描述  
---|---|---|---  
$res | Function | path: String 资源路径 | 根据开发者配置的 resources 和当前系统的参数返回对应的资源  
  
示例：
[code] 
    <template>
      <div style="background-color: {{ $res('colors.headerBackGround') }}">
        <image src="{{ $res('image.banner') }}"></image>
      </div>
    </template>
    <script>
      export default {
        onInit() {
          console.log(this.$res('image.banner'))
        },
      }
    </script>
[/code]

复制代码

上一篇

[页面启动模式](</reference/extend/launch-mode/>)

下一篇

[手表性能优化](</reference/perf-guide/overview/>)