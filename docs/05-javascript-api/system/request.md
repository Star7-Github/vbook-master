# 上传下载

# 上传下载

更新时间：2025/08/13 20:11:57

## 接口声明
[code] 
    { "name": "blueos.network.request" }
[/code]

复制代码

## 导入模块
[code] 
    import request from '@blueos.network.request' 或 const request = require('@blueos.network.request')
[/code]

复制代码

## 接口定义

### request.upload(OBJECT)

上传文件

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
url | String | 是 | 资源 url  
header | Object | 否 | 请求的 header，会将其所有属性设置到请求的 header 部分。  
method | String | 否 | 默认为 POST，可以是： POST, PUT  
files | Array | 是 | 需要上传的文件列表，使用 multipart/form-data 方式提交  
data | Array | 否 | HTTP 请求中其他额外的 form data  
success | Function | 否 | 成功返回的回调函数  
fail | Function | 否 | 失败的回调函数  
complete | Function | 否 | 结束的回调函数（调用成功、失败都会执行）  
  
**files 参数 ：**

files 参数是一个 file 对象的数组，file 对象的结构如下：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
filename | String | 否 | multipart 提交时，header 中的文件名  
name | String | 否 | multipart 提交时，表单的项目名，默认 file  
uri | String | 是 | 只能为应用沙箱内 internal 目录  
type | String | 否 | 文件的 Content-Type 格式，默认会根据 filename 或者 uri 的后缀获取  
  
**data 参数 ：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
name | String | 是 | form 元素的名称。  
value | String | 是 | form 元素的值。  
  
**success 返回值：**

参数名 | 类型 | 说明  
---|---|---  
code | Integer | 服务器状态 code  
data | String | 如果服务器返回的 header 中 type 是 text/*或 application/json、application/javascript、application/xml，值是文本内容，否则是存储的临时文件的 uri 临时文件如果是图片或者视频内容，可以将图片设置到 image 或 video 控件上显示  
headers | Object | 服务器 response 的所有 header  
  
**示例：**
[code] 
    request.upload({
      url: 'http://www.example.com',
      files: [
        {
          uri: 'internal://xxx/xxx/test',
          name: 'file1',
          filename: 'test.png',
        },
      ],
      data: [
        {
          name: 'param1',
          value: 'value1',
        },
      ],
      success: function (data) {
        console.log('handling success')
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### request.download(OBJECT)

下载文件

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
url | String | 是 | 资源 url  
header | String | 否 | 请求的 header，会将其所有属性设置到请求的 header 部分。  
description | String | 否 | 下载描述，会用于通知栏标题。默认为文件名  
filename | String | 否 | 在下载文件时，可以提供文件名或文件 URI。当输入文件 URI（internal://xxx）时，可定义下载路径；而若输入文件名，则会默认保存至缓存目录（internal://cache/）。若未提供文件信息，系统将从网络请求或 URL 中获取文件名。  
success | Function | 否 | 成功返回的回调函数  
fail | Function | 否 | 失败的回调函数  
complete | Function | 否 | 结束的回调函数（调用成功、失败都会执行）  
  
**success 返回值：**

参数名 | 类型 | 说明  
---|---|---  
token | String | 下载的 token，根据此 token 获取下载状态  
  
**fail 返回错误代码：**

错误码 | 说明  
---|---  
302 | 存储空间不足  
  
**示例：**
[code] 
    request.download({
      url: 'http://www.example.com',
      success: function (data) {
        console.log(`handling success${data.token}`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### request.abortDownload(OBJECT)

中断下载任务

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
token | String | 是 | download 接口返回的 token  
success | Function | 否 | 成功返回的回调函数  
fail | Function | 否 | 失败的回调函数  
complete | Function | 否 | 结束的回调函数（调用成功、失败都会执行）  
  
**success 返回值：**

无

**fail 返回错误代码：**

错误码  | 说明  
---|---  
1000 | 中断失败  
1001 | 下载任务不存在  
  
**示例：**
[code] 
    request.abortDownload({
      token: '123',
      success: function (data) {
        console.log(`abortDownload success`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### request.onDownloadComplete(OBJECT)

监听下载任务

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
token | String | 是 | download 接口返回的 token  
success | Function | 否 | 成功返回的回调函数  
fail | Function | 否 | 失败的回调函数  
complete | Function | 否 | 结束的回调函数（调用成功、失败都会执行）  
  
**success 返回值：**

参数名 | 类型 | 说明  
---|---|---  
uri | String | 下载文件的 uri（默认情况下该文件处于应用缓存目录。如果文件类型为图片或者视频且要求用户可以在相册等应用内查看，则需要将该文件转存至公共目录，参考 media 接口中的方法实现即可）  
  
**fail 返回错误代码：**

错误码  | 说明  
---|---  
1000 | 下载失败  
1001 | 下载任务不存在  
  
**示例：**
[code] 
    request.onDownloadComplete({
      token: '123',
      success: function (data) {
        console.log(`handling success${data.uri}`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

上一篇

[蓝牙](</api/system/bluetooth/>)

下一篇

[数据请求](</api/system/fetch/>)