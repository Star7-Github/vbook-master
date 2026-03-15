# 解压缩

# 解压缩

更新时间：2025/04/29 11:37:34

## 接口声明
[code] 
    { "name": "blueos.util.fastlz" }
[/code]

复制代码

## 导入模块
[code] 
    import fastlz from '@blueos.util.fastlz' 或 const fastlz = require('@blueos.util.fastlz')
[/code]

复制代码

## 接口定义

### fastlz.decompress(OBJECT)

解压文件

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
srcUri | String | 是 | 源文件的 uri，不能是 tmp 类型的 uri  
dstUri | String | 是 | 目标目录的 uri 必须是完整的文件名  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
##### fail 返回错误代码：

错误码 | 说明  
---|---  
202 | 参数错误  
300 | I/O 错误  
  
#### 示例：
[code] 
    fastlz.decompress({
      srcUri: 'internal://files/test1',
      dstUri: 'internal://files/test2',
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

[输入法](</api/system/inputmethod/>)

下一篇

[解包](</api/system/tar/>)