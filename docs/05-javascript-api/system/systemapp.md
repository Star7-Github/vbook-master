# 应用上下文

# 应用上下文

更新时间：2025/10/09 11:25:10

## 接口声明

无需声明

## 导入模块
[code] 
    import app from '@blueos.app.context'
    // 或 const app = require('@blueos.app.context')
[/code]

复制代码

## 接口定义

### app.getInfo()

获取当前应用信息

#### 参数：

无

#### 返回值

参数名 | 类型 | 说明  
---|---|---  
packageName | String | 应用包名  
icon | String | 应用图标路径  
name | String | 应用名称  
versionName | String | 应用版本名称  
versionCode | Integer | 应用版本号  
  
#### 示例：
[code] 
    console.log(JSON.stringify(app.getInfo()))
[/code]

复制代码
[code] 
    // console 值打印
    {
      // 应用包名
      "packageName": "com.example.demo",
      // 应用名称
      "name": "demo",
      // 应用版本名称
      "versionName": "1.0.0",
      // 应用版本号
      "versionCode": 1,
      // 应用图片
      "icon": "/Common/logo.png"
    }
[/code]

复制代码

### app.loadLibrary(name: string)

加载静态库，需要与厂商合作

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
name | String | 是 | lib 库名称  
  
#### 返回值

静态库加载结果

#### 示例：
[code] 
    import app from '@blueos.app.context'
    const testApp = app.loadLibrary('test_app')
    
    testApp.on('js_task_callback', () => {
      // callback action
    })
[/code]

复制代码

### app.terminate()

退出当前应用

#### 参数:

无

#### 返回值：

无

#### 示例：
[code] 
    app.terminate()
[/code]

复制代码

上一篇

[概述](</api/system/app/>)

下一篇

[页面路由](</api/system/router/>)