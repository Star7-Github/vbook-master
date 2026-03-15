# 网络状态

# 网络状态

更新时间：2024/10/11 11:55:18

## 接口声明
[code] 
    { "name": "blueos.network.networkManager" }
[/code]

复制代码

## 导入模块
[code] 
    import network from '@blueos.network.networkManager' 或 const network = require('@blueos.network.networkManager')
[/code]

复制代码

## 接口定义

### network.getType(OBJECT)

获取网络类型

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调，可能是因为缺乏权限  
complete | Function | 否 | 执行结束后的回调  
  
##### success 返回值：

参数名 | 类型 | 说明  
---|---|---  
type | String | 网络类型，可能的值为 2g，3g，4g，wifi，none，  
5g，bluetooth，others  
  
#### 示例：
[code] 
    network.getType({
      success(data) {
        console.log(`handling success: ${data.type}`)
      },
    })
[/code]

复制代码

### network.subscribe(OBJECT)

监听网络连接状态。如果多次调用，仅最后一次调用生效

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
reserved | Boolean | 否 | 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅  
callback | Function | 否 | 每次网络发生变化，都会被回调  
fail | Function | 否 | 失败回调，可能是因为缺乏权限  
  
##### callback 返回值：

参数名 | 类型 | 说明  
---|---|---  
type | String | 网络类型，可能的值为 2g，3g，4g，wifi，none，  
5g，bluetooth，others  
  
#### 示例：
[code] 
    network.subscribe({
      callback: (data) => {
        console.log('handling callback')
      },
    })
[/code]

复制代码

### network.unsubscribe()

取消监听网络连接状态

#### 参数：

无

#### 示例：
[code] 
    network.unsubscribe()
[/code]

复制代码

### network.getSimOperators(OBJECT)

获取 Sim 卡的运营商信息，即将废弃，改用 @blueos.telephony.simManager.getSimOperators()

#### 权限要求

电话权限

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
##### success 返回值：

参数名 | 类型 | 说明  
---|---|---  
operators | Array | SIM 卡列表信息  
size | Number | Sim 卡数量  
  
##### fail 返回错误代码：

错误码 | 说明  
---|---  
201 | 用户拒绝，获取电话权限失败  
207 | 用户拒绝并勾选不再询问复选框  
1001 | 未插入 sim 卡  
1002 | 获取运营商信息失败  
  
##### SIM 卡列表项参数：

参数名 | 类型 | 说明  
---|---|---  
operator | String | 返回 Sim 卡的运营商信息  
运营商信息说明：此处统一返回 MCC+MNC，即移动国家代码 + 移动网络代码；  
中国移动：46000，46002，46004，46007；  
中国联通：46001，46006，46009；  
中国电信：46003，46005，46011；  
[其余 MCC+MNC](<https://www.mcc-mnc.com/ >)  
slotIndex | Number | 卡槽序号  
  
#### 示例：
[code] 
    network.getSimOperators({
      success(data) {
        console.log(`size: ${data.size}`)
        for (const i in data.operators) {
          console.log(`operator: ${data.operators[i].operator},
            slotIndex:${data.operators[i].slotIndex},
            isDefaultDataOperator:${data.operators[i].isDefaultDataOperator},`)
        }
      },
      fail(data, code) {
        console.log(`handling fail, code = ${code}, errorMsg=${data}`)
      },
    })
[/code]

复制代码

上一篇

[websocket](</api/system/websocket/>)

下一篇

[多媒体能力](</api/system/multimediaOverview/>)