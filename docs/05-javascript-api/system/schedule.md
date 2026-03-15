# 定时任务

# 定时任务

更新时间：2024/09/14 16:42:27

## 接口声明
[code] 
    { "name": "blueos.app.appmanager.schedule" }
[/code]

复制代码

## 导入模块
[code] 
    import schedule from '@blueos.app.appmanager.schedule' 或 const schedule = require('@blueos.app.appmanager.schedule')
[/code]

复制代码

## 接口定义

### schedule.scheduleJob(OBJECT)

设置定时任务

##### 参数：

属性 | 类型 | 必填 | 说明  
---|---|---|---  
type | Number | 是 | `1` 硬件时间，`2` 真实时间流逝，前者可以通过修改系统时间触发`triggerMethod`，后者要通过真实时间的流逝，即使在休眠状态，时间也会被计算  
timeout | long | 是 | 若 `type` 为 `1`，则为首次执行时间的时间戳，即从 1970/01/01 00:00:00 GMT 到当前时间的毫秒数；若 `type` 为 `2`，则为当前时间距离首次执行时间的间隔，单位毫秒。  
triggerMethod | String | 是 | app.ux 中定义的方法名，由后台拉起时调用  
interval | long | 否 | 周期性执行的间隔，毫秒为单位，不传就不重复执行  
params | Object | 否 | 任务参数  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
#### 说明

  1. 首次执行时间可设置为过去的时间
  2. 若首次执行时间为过去时间，已过期的任务将不会被执行，未过期的任务仍然会被执行

#### 返回值：

返回值 | 类型 | 说明  
---|---|---  
id | Integer | 底层分配唯一的 ID  
  
##### fail 返回错误代码

错误码 | 说明  
---|---  
-27 | 定时任务已满  
-28 | 已注册  
  
#### 示例：
[code] 
    // xx.ux
    schedule.scheduleJob({
      type: 1,
      timeout: new Date('2050-10-01 09:00:00').getTime(),
      interval: 1000,
      triggerMethod: 'scheduleFunc',
      params: {
        color: 'red',
      },
      success: function (data) {
        console.log(`handling success, scheduleId = ${data.id}`)
      },
      fail: function (data, code) {
        console.log(`handling fail,code = ${code}`)
      },
      complete: function () {
        console.log(`handling complete`)
      },
    })
    
    // app.ux
    export default {
      scheduleFunc(params) {
        console.log(`background processing color = ${params.color}`)
      },
    }
[/code]

复制代码

### schedule.cancel(id: Integer)

取消定时任务

#### 参数：

返回值 | 类型 | 说明  
---|---|---  
id | Integer | 底层分配唯一的 ID  
  
#### 返回值：

返回值 | 类型 | 说明  
---|---|---  
value | Boolean | true：成功； false：失败；  
  
#### 示例：
[code] 
    schedule.cancel(1)
[/code]

复制代码