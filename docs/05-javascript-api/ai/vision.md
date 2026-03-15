# 视觉技术

# 视觉技术

更新时间：2025/04/30 20:56:55

## 使用前提条件

该接口底层依赖以下接口实现，开发者使用前需要在 manifest.json 中声明以下接口:
[code] 
    { "name": "blueos.network.fetch" }
[/code]

复制代码

## 使用
[code] 
    import vision from "@blueos.ai.vision"
    
[/code]

复制代码

## 接口总览

接口名称 | 接口说明  
---|---  
commonOcr | 识别图片中的所有文字，并返回文字在图片中的位置信息，方便用户进行文字排版的二次处理参考  
segmentFace | 基于 AI 抠图技术，对图像中的人体头部进行分割，可用于图片背景切换或换脸玩法。  
segmentForeground | 对人像、猫、狗、车的图像进行分割  
inpaintForeground | 一种图像编辑方式。去除图片中不希望存在的人、猫、狗、车等，并填充以自然的图案，力求看不出修复痕迹。  
cropImage | 基于图像的主体内容及画幅要求，提供优质的图像智能裁剪能⼒  
generateIdPhoto | 通过人像分割算法识别照片面部区域，将其抠出后修改背景色，使之成为证件照。  
idCardOcr | 识别提取身份证中的姓名、性别、民族、出生日期、住址、公民身份证号码信息  
demoire | 对屏幕拍摄的带摩尔纹的图像进行摩尔纹去除  
deshadow | 提供文档图像阴影去除能力，同时保证原图文字清晰度  
  
### vision.commonOcr(params:OcrParams):Promise<OcrResult>

识别图片中的所有文字，并返回文字在图片中的位置信息，方便用户进行文字排版的二次处理

#### OcrParams 参数

属性 | 必填 | 类型 | 说明  
---|---|---|---  
auth | 是 | Auth | 请求的身份验证信息，确保请求来源合法  
image | 是 | string | 图片的 base64 编码（目前只支持识别 jpg、png、bmp 格式的图片）  
options | 否 | OcrOptions | 请求的参数配置  
  
#### Auth

属性 | 必填 | 类型 | 说明  
---|---|---|---  
appId | 是 | string | 应用 appId  
appKey | 是 | string | 应用 appKey  
  
注： appId & appKey，需要在 [vivo 开发者平台](<https://developers-ai.vivo.com.cn/documents?id=720>) 申请

#### OcrOptions 说明

参数 | 必填 | 类型 | 说明  
---|---|---|---  
pos | 否 | string | 默认为 2，可取值为 0,1,2。0 代表只需要文字信息，1 代表提供文字信息和坐标信息(坐标绝对值)，2 代表将 0 和 1 的信息同时提供.  
checkDirection | 否 | boolean | 选择是否支持旋转图像、非正向文字识别，默认为 false 不支持  
  
#### OcrResult 返回值

参数 | 类型 | 说明  
---|---|---  
words | Array<WordInfo> | 文字信息  
OCR | Array<OcrInfo> | 文字与坐标信息  
angle | number | 旋转角度  
  
##### WordInfo

参数 | 类型 | 说明  
---|---|---  
words | string | 识别的文字信息  
  
##### OcrInfo

参数 | 类型 | 说明  
---|---|---  
words | string | 识别的文字信息  
location | locationInfo | 文字相关的坐标信息  
  
##### locationInfo

参数 | 类型 | 说明  
---|---|---  
top_left | {x:number,y:number} | 左上角坐标信息  
top_right | {x:number,y:number} | 右上角坐标信息  
down_left | {x:number,y:number} | 左下角坐标信息  
down_right | {x:number,y:number} | 右下角坐标信息
[code] 
    // 当pos 参数为0 时的返回结果
    "OcrResult": {
        "words": [
            {"words": "取消"},
            {"words": "编辑"}
        ],
        "angle": 0
    }
    
    
    // 当pos 参数为1 时的返回结果
    "OcrResult": {
        "OCR": [
            {
                "words": "取消",
                "location": {
                    "top_left": {"x": 658.0, "y": 1130.0},
                    "top_right": {"x": 893.0, "y": 1130.0},
                    "down_left": {"x": 658.0, "y": 1174.0},
                    "down_right": {"x": 893.0, "y": 1174.0}
                }
            },
            {
                "words": "编辑",
                "location": {
                    "top_left": {"x": 398.0, "y": 825.0},
                    "top_right": {"x": 1912.0, "y": 825.0},
                    "down_left": {"x": 398.0, "y": 1004.0},
                    "down_right": {"x": 1912.0, "y": 1004.0}
                }
            }
        ],
        "angle": 0
    }
[/code]  
  
复制代码

#### 示例
[code] 
    vision.commonOcr({
        image: '',
        auth: {
            appId:"12345678", // 需要替换自己的appId
            appKey: "dkjdkjfi" // 需要替换自己的appKey
            }
    })
    .then((result:OcrResult) => {
        console.log('commonOcr result', result);
        })
    .catch((data:string,code:OcrErrorCode) => {
            console.error(`commonOcr 失败,  code:${code};data:${data}`);
        });
[/code]

复制代码

#### 异常错误码 OcrErrorCode 描述

code 值 | 说明  
---|---  
1 | ocr 识别失败  
2 | 图像错误  
  
### vision.segmentFace(params:SegmentFaceParams):Promise<SegmentFaceResult>

人脸分割，基于 AI 抠图技术，对图像中的人体头部进行分割，可用于图片背景切换或换脸玩法。

#### SegmentFaceParams 参数

属性 | 必填 | 类型 | 说明  
---|---|---|---  
image | 是 | string | 图片 base64 编码,图片尺寸最大不超过 1024 个像素  
auth | 是 | Auth | 请求的身份验证信息，确保请求来源合法  
  
#### SegmentFaceResult 返回值

参数 | 类型 | 说明  
---|---|---  
originMask | string | 总的 mask 的 base64 编码，图像为单通道灰度图  
partBox | Array<string> | partMask 的 box 类别和位置，包含 idx, xmax, xmin,ymax,ymin；代表类别 idx 和 box 框在原图的坐标位置比例(0-1 之间)  
partMask | Array<string> | partBox 对应框的的 mask 的 base64 编码，图像也为单通道灰度图  
size | {width:number,height:number} | 包含 height, width 字段，orginMask 的长宽型  
  
#### 异常错误码 SegmentFaceErrorCode 描述

code 值 | 说明  
---|---  
1 | 未检测到人脸  
2 | 分割失败  
3 | 无图  
  
#### 示例
[code] 
    vision.segmentFace({
        image: ''
        auth: {
            appId:"12345678", // 需要替换自己的appId
            appKey: "dkjdkjfi" // 需要替换自己的appKey
        }
        })
        .then((result:SegmentFaceResult) => {
            console.log('face segment result', result);
        })
        .catch((data:string,code:SegmentFaceErrorCode) => {
            console.error(`segmentFace 失败,  code:${code};data:${data}`);
        });
[/code]

复制代码

### vision.segmentForeground(params:SegmentForegroundParams):Promise<SegmentForegroundResult>

前景分割，对人像、猫、狗、车的图像进行分割

#### SegmentForegroundParams 参数

属性 | 必填 | 类型 | 说明  
---|---|---|---  
image | 是 | string | 图片 base64 编码,图片尺寸最大不超过 1024 个像素  
auth | 是 | Auth | 请求的身份验证信息，确保请求来源合法  
  
#### SegmentForegroundResult 返回值

参数 | 类型 | 说明  
---|---|---  
orginMask | string | 总的 mask 的 base64 编码，图像为单通道灰度图  
inpaintMask | string | 用于修复部分的 mask,为单通道灰度图，背景 0，前景 255  
partBox | Array<string> | partMask 的 box 类别和位置，包含 idx,xmax,xmin,ymax,ymin；代表类别 idx 和 box 框在原图的坐标位置比例(0-1 之间)  
partMask | Array<string> | partBox 对应框的的 mask 的 base64 编码，图像也为单通道灰度图  
size | {width:number,height:number} | 包含 height, width 字段，orginMask 的长宽  
  
#### 异常错误码 segmentForegroundErrorCode 描述

code 值 | 说明  
---|---  
1 | 分割失败  
2 | 未检测到图片  
  
#### 示例
[code] 
    vision.segmentForeground({
        image: '',
        auth: {
            appId:"12345678", // 需要替换自己的appId
            appKey: "dkjdkjfi" // 需要替换自己的appKey
            }
        })
        .then((result:SegmentForegroundResult) => {
            console.log('segmentForeground result', result);
        })
        .catch((data:string,code:SegmentFaceErrorCode) => {
            console.error(`segmentForeground 失败,  code:${code};data:${data}`);
        });
[/code]

复制代码

### vision.inpaintForeground(params:InpaintForegroundParams):Promise<InpaintForegroundResult>

前景修复，一种图像编辑方式。使用分割算法去除图片中不希望存在的人、猫、狗、车等，并填充以自然的图案，力求看不出修复痕迹。

#### InpaintForegroundParams 参数

属性 | 必填 | 类型 | 说明  
---|---|---|---  
image | 是 | string | 图片 base64 编码  
mask | 是 | string | Mask 的 base64 编码  
auth | 是 | Auth | 请求的身份验证信息，确保请求来源合法  
  
#### InpaintForegroundResult 返回值

参数 | 类型 | 说明  
---|---|---  
inpaintImg | string | 修复结果图的 base64 编码  
  
#### 示例
[code] 
    vision.inpaintForeground({
        image: '',
        mask: '',
        auth: {
            appId:"12345678", // 需要替换自己的appId
            appKey: "dkjdkjfi" // 需要替换自己的appKey
            }
        })
        .then((result:InpaintForegroundResult) => {
            console.log('inpaintForeground result', result);
        })
        .catch((data:string,code:number) => {
            console.error(`inpaintForeground 失败,  code:${code};data:${data}`);
        });
[/code]

复制代码

### vision.cropImage(params:CropImageParams):Promise<CropImageResult>

构图裁剪，基于图像的主体内容及画幅要求，提供优质的图像智能裁剪能⼒

#### CropImageParams 参数

属性 | 必填 | 类型 | 说明  
---|---|---|---  
auth | 是 | object | 请求的身份验证信息，确保请求来源合法  
imageList | 是 | object | 裁剪的图片信息列表，详见下方 imageList 说明  
aspectRatio | 是 | Array<string> | 裁剪比例列表 ,例如["100 _60","103_ 83"]  
  
#### imageList

参数 | 必填 | 类型 | 说明  
---|---|---|---  
imageUrl | 是 | string | 图片链接  
imgSymbol | 是 | string | 图片唯一标识  
  
#### CropImageResult 返回值

参数 | 类型 | 说明  
---|---|---  
imageList | Array<ImageResult> | 返回的图片信息列表，详见下方 ImageResult 说明  
  
#### ImageResult

参数 | 类型 | 说明  
---|---|---  
imageSymbol | string | 图片名称标识  
cropResult | Array<CropResult> | 裁剪结果，详见下方 CropResult 说明  
  
#### CropResult 说明

参数 | 类型 | 说明  
---|---|---  
aspectRatio | string | 输入的裁剪比例  
box | Array<number> | 该裁剪比例对应的裁剪坐标  
  
#### 示例
[code] 
    const auth = {
            appId:"12345678", // 需要替换自己的appId
            appKey: "dkjdkjfi" // 需要替换自己的appKey
        }
        const request = {
            auth: auth,
            imageList:   {
                image_url: "imageUrl" // 替换具体的图片路径
                },
                aspectRatio:["100*60","103*83"]
            }
    
        vision.cropImage(request)
            .then((result:CropImageResult) => {
                console.log('cropImage result', result);
            })
            .catch((data:string,code:number) => {
                console.error(`cropImage 失败,  code:${code};data:${data}`);
            });
[/code]

复制代码

上一篇

[概述](</api/ai/overview/>)

下一篇

[语音技术](</api/ai/speech/>)