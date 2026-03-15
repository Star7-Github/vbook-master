# 包管理

# 包管理

更新时间：2025/10/09 11:25:10

## 接口声明
[code] 
    { "name": "blueos.package.packageManager" }
[/code]

复制代码

## 导入模块
[code] 
    import packageManager from '@blueos.package.packageManager' 或 const packageManager = require('@blueos.package.packageManager')
[/code]

复制代码

## 接口定义

### hasInstalled()

检测应用是否存在

#### 参数

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
package | String | 是 | 应用包名，如:com.vivo.music  
moduleName | string | type 为 widget 时必填 | 卡片的 moduleName，manifest 中 widget 的 key，如：widgets/widget  
type | "widget" | "package" | 否 | 默认值为 package，package 表示普通应用，widget 表示卡片  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
#### success 返回值

参数名 | 类型 | 说明  
---|---|---  
result | boolean | 应用是否存在  
  
#### 示例
[code] 
    packageManager.hasInstalled({
      package: 'com.hap.app',
      moduleName: 'widgets/widget1',
      type: 'widget',
      success(data: { result: boolean }) {
        console.log(`handling success: ${data.result}`)
      },
      fail(data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### getCustomData()

读取当前应用在 manifest 中定义的 customData

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
  
##### success 返回值：

参数名 | 类型 | 说明  
---|---|---  
data | Record<string, string> | 开发者在 manifest 中定义的 customData  
  
#### 示例：
[code] 
    packageManager.getCustomData({
      success(response) {
        console.log(`handling success: ${response.data}`)
      },
      fail(data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

上一篇

[生命周期](</api/extend/lifecycle/>)

下一篇

[页面栈管理](</api/system/pagestack/>)