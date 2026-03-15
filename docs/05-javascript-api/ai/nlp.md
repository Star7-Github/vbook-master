# 自然语言处理

# 自然语言处理

更新时间：2025/04/30 20:56:55

## 使用前提条件

该接口底层依赖以下接口实现，开发者使用前需要在 manifest.json 中声明以下接口:
[code] 
    { "name": "blueos.network.fetch" }
[/code]

复制代码

## 使用
[code] 
    import nlp from "@blueos.ai.nlp"
    
[/code]

复制代码

## 接口总览

接口名称 | 接口说明明  
---|---  
translateText | 翻译一段源语言文本为目标语言文本，支持多国语言之间的互译。  
  
### nlp.translateText(params:TranslateParams):Promise<TranslateData>

翻译一段源语言文本为目标语言文本，支持多国语言之间的互译。

#### TranslateParams 参数

属性 | 必填 | 类型 | 说明  
---|---|---|---  
text | 是 | string | 翻译文本，utf-8 编码，长度限制 1200  
auth | 是 | Auth | 请求的身份验证信息，确保请求来源合法  
options | 否 | object | 源语言与目标语言参数，默认 from: 'en'，to: 'zh-CHS'  
  
#### Auth

属性 | 必填 | 类型 | 说明  
---|---|---|---  
appId | 是 | string | 应用 appId  
appKey | 是 | string | 应用 appKey  
  
注： appId & appKey，需要在 [vivo 开发者平台](<https://developers-ai.vivo.com.cn/documents?id=720>) 申请

#### options 参数

属性 | 必填 | 类型 | 说明  
---|---|---|---  
from | 否 | string | 源语言，语言 code 见下方语言代码对照表  
to | 否 | string | 目标语言，语言 code 见下方语言代码对照表  
  
#### 语言代码对照表

下表为各语言对应代码：

语言 | 代码  
---|---  
中文（简体） | zh-CHS  
英文 | en  
日文 | ja  
韩文 | ko  
  
#### 返回值 TranslateData

参数 | 类型 | 说明  
---|---|---  
text | string | 原文  
from | string | 源语言  
to | string | 目标语言  
translation | string | 翻译后的文本  
  
#### 异常错误码 TranslateCode 描述

code 值 | 说明  
---|---  
20000 | 参数问题  
10000 | 服务异常  
  
#### 示例
[code] 
    nlp.translateText({
        text: 'Hello, World',
        auth: {
            appId:"12345678", // 需要替换自己的appId
            appKey: "dkjdkjfi" // 需要替换自己的appKey
            }
        })
        .then((result:TranslateData) => {
            console.log('翻译结果：', result);
            })
        .catch((data:string,code:TranslateCode) => {
            console.error('翻译失败：', code);
        });
[/code]

复制代码

上一篇

[语音技术](</api/ai/speech/>)

下一篇

[设备互联能力](</api/connect/introduce/>)