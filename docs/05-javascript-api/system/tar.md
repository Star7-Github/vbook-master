# 解包

# 解包

更新时间：2023/11/08 11:11:17

## 接口声明
[code] 
    { "name": "blueos.util.tar" }
[/code]

复制代码

## 导入模块
[code] 
    import tar from '@blueos.util.tar' 或 const fastlz = require('@blueos.util.tar')
[/code]

复制代码

## 接口定义

### 注：“蓝河应用平台参数” 表示开发蓝河应用必填参数

### tar.untar(OBJECT)

解包

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
srcUri | String | 是 | 源文件的 uri，不能是 tmp 类型的 uri  
dstUri | String | 是 | 目标目录的 uri，不能是应用资源路径和 tmp 类型的 uri  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
##### 备注：

srcUri 和 dstUri 路径采用的是 file_feature 协议，由于是私有接口，是可以跨包读取的。internal:// 原本的路径解析为: /sdcard/internal/rpk 包名，但在解压缩去掉了包名的限制，实际得到的路径是： /sdcard/internal/

##### fail 返回错误代码：

错误码 | 说明  
---|---  
202 | 参数错误  
300 | I/O 错误  
  
#### 示例：
[code] 
    tar.untar({
      srcUri: 'internal://cache/test.tar',
      dstUri: 'interval://files/untar/',
      success: function () {
        console.log(`handling success`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

上一篇

[解压缩](</api/system/fastlz/>)

下一篇

[运动健康能力](</api/health/health/>)