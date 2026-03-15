# 页面栈管理

# 页面栈管理

更新时间：2024/10/11 11:55:18

## 接口声明
[code] 
    { "name": "blueos.app.appmanager.pageStack" }
[/code]

复制代码

## 导入模块
[code] 
     import pagestack from '@blueos.app.appmanager.pageStack' 或 const pagestack = require('@blueos.app.appmanager.pageStack')
[/code]

复制代码

## 接口定义

### pagestack.getAppStacks(OBJECT)

获取应用页面栈信息

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
package | Array|String | 否 | 应用包名。 默认不传获取所有应用的页面栈信息 或 ['com.vivo.app1','com.vivo.app2'] 或 'com.vivo.app1'  
success | Function | 否 | 接口调用成功的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
#### success 返回值：

参数名 | 类型 | 说明  
---|---|---  
appStackPages | `Array<Object>` | 返回调用方页面栈信息  
  
#### 所有应用 appStackPages 数据格式示例：
[code] 
    appStackPages：[
     {
       appInfo:{zIndex:1,package:'com.vivo.app'},
       pages:[{pageId:1,path:'pages/index/index'}]
     },
     null,
     null
    ]
[/code]

复制代码

##### 根据传入应用包名的顺序返回页面栈信息

参数名 | 类型 | 说明  
---|---|---  
appInfo | Object | 应用信息  
pages | `Array<Object>` | 应用页面栈信息  
  
某个应用 appInfo 参数详细说明

参数名 | 类型 | 说明  
---|---|---  
zIndex | Number | 所属应用的层级  
package | String | 应用包名  
  
某个应用 pages 参数详细说明

参数名 | 类型 | 说明  
---|---|---  
pageId | Number | 页面的 id  
path | String | 页面的路径  
  
#### 示例：
[code] 
    pagestack.getAppStacks({
      package: ['com.vivo.app1', 'com.vivo.app2'],
      success: function (data) {
        const [app1, app2] = data.appStackPages
        //获取某个应用页面栈里面的某个页面id
        let paths1 = [app1 && app1.pages[0].path, app1 && app1.pages[1].path]
        let paths2 = [app2 && app2.pages[0].path, app2 && app2.pages[1].path]
        let pageIds1 = [app1 && app1.pages[0].pageId, app1 && app1.pages[1].pageId]
        let pageIds2 = [app2 && app2.pages[0].pageId, app2 && app2.pages[1].pageId]
        let package1 = app1 && app1.appInfo.package
        let package2 = app2 && app2.appInfo.package
        //根据页面id或页面路径关闭指定页面
        pagestack.close({
          pageList: [
            {
              package: package1, //是
              pageIds: pageIds1, //否
              paths: paths1, //否
            },
            {
              package: package2,
              pageIds: pageIds2,
              paths: paths2,
            },
          ],
          success: function () {},
          fail: function (data, code) {
            console.log(`handling fail,code = ${code}`)
          },
          complete: function () {
            console.log(`handling complete`)
          },
        })
        console.log(`handling success, pages = ${pages}`)
      },
      fail: function (data, code) {
        console.log(`handling fail,code = ${code}`)
      },
      complete: function () {
        console.log(`handling complete`)
      },
    })
[/code]

复制代码

### pagestack.close(OBJECT)

关闭页面

#### 参数

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
pageList | `Array<Object>` | 是 | 关闭应用的配置项  
success | Function | 否 | 接口调用成功的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
#### pageList 参数详细

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
package | String | 是 | 应用包名  
pageIds | Array | 否 | 页面 id  
paths | Array | 否 | 页面路径  
  
#### 示例：
[code] 
    pagestack.close({
      pageList: [
        {
          package: 'com.vivo.app',
          pageIds: [1],
          paths: ['/pages/index/index'],
        },
      ],
      success: function () {},
      fail: function (data, code) {
        console.log(`handling fail,code = ${code}`)
      },
      complete: function () {
        console.log(`handling complete`)
      },
    })
[/code]

复制代码

上一篇

[包管理](</api/system/package/>)

下一篇

[应用沙箱目录](</api/extend/file-sandbox/>)