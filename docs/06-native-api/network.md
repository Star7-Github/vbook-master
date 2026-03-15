# 网络状态

# 网络状态

更新时间：2023/11/07 10:55:31

头文件<network/network.h>

## 接口定义

### 获取网络类型
[code] 
    BNetwork_State BNetwork_getType();
[/code]

复制代码

#### 参数

无

#### 返回值

返回值 | 类型 | 说明  
---|---|---  
type | BNetwork_State | 网络状态类型。（详见《枚举 网络状态类型》）  
  
### 订阅网络状态监听
[code] 
    int BNetwork_subscribe(
        BNetwork_StatusListener listener,
        void* user_data
    )
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
listener | BNetwork_StatusListener | 订阅网络状态变化的回调（详见《结构体 网络状态监听》）  
user_data | void* | 自定义数据  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
listenerId | int | 成功订阅的监听 Id 号 (<0：订阅失败)  
  
### 取消订阅网络状态监听
[code] 
    int BNetwork_unsubscribe(int listener_id)
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
listenerId | int | 订阅时返回的监听 Id 号  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 网络相关操作结果代码  
  
## 枚举

### 网络相关操作结果代码

枚举 | 值 | 说明  
---|---|---  
BNETWORK_OK | 0 | 网络相关操作成功  
BNETWORK_ERROR | -1 | 网络相关操作失败  
  
### 网络状态类型 BNetwork_State

枚举 | 值 | 说明  
---|---|---  
BNETWORK_2G | 0 | 2G 网络  
BNETWORK_3G | 1 | 3G 网络  
BNETWORK_4G | 2 | 4G 网络  
BNETWORK_5G | 3 | 5G 网络  
BNETWORK_BT | 4 | 蓝牙 BT 网络  
BNETWORK_WIFI | 5 | WIFI 网络  
BNETWORK_UNKNOWN | 6 | 未知类型  
  
## 结构体

### 网络状态监听 BNetwork_StatusListener

包含用于监听网络状态变化回调的结构体。
[code] 
    struct BNetwork_StatusListener {
       onNetworkChange state_listener;
    }
[/code]

复制代码

## 回调
[code] 
    void (*onNetworkChange)(BNetwork_State type, void* user_data);
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
type | BNetwork_State | 网络状态类型。（详见《枚举 网络状态类型》  
user_data | void* | 自定义数据  
  
#### 返回值

无