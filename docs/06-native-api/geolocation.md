# 地理位置

# 地理位置

更新时间：2023/11/07 10:55:31

头文件<hardware/location/geolocation.h>

## 接口定义

### 获取地理位置
[code] 
    int BGeolocation_getLocation(
        BGeolocation_RequestInfo info，
        BGeolocation_LocationCallback callback,
        void* user_data
    );
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
info | BGeolocation_RequestInfo | 地理位置的请求信息（详见《结构体 地理位置请求信息》）  
callbacks | BGeolocation_LocationCallback | 获取的地理位置结果回调 (详见《结构体 地理位置获取结果回调)  
user_data | void* | 自定义数据  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 地理位置请求相关操作状态（详见 《枚举 地理位置操作状态》）  
  
#### 权限

需要 LOCATION 权限

### 订阅地理位置
[code] 
    BGeolocation_OperationStatus BGeolocation_subscribeLocation(
        BGeolocation_LocationListener listerner,
        void* user_data
    );
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
listener | BGeolocation_LocationListener | 订阅地理位置变化数据的回调（详见《结构体 地理位置监听》）  
user_data | void* | 自定义数据  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 地理位置请求相关操作状态（详见 《枚举 地理位置操作状态》）  
  
#### 权限

需要 LOCATION 权限

### 取消地理位置订阅
[code] 
    BGeolocation_OperationStatus BGeolocation_unsubscribeLocation(
        BGeolocation_LocationListener listerner,
        void* user_data
    );
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
listener | BGeolocation_LocationListener | 订阅地理位置变化数据的回调（详见《结构体 地理位置监听》）  
user_data | void* | 自定义数据  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 地理位置请求相关操作状态（详见 《枚举 地理位置操作状态》）  
  
### 获取支持的坐标系类型
[code] 
    BGeolocation_OperationStatus BGeolocation_getSupportedCoordTypes(
        const char*** coord_types,
        int *coord_types_cnt
    );
[/code]

复制代码

#### 参数

参数(输出) | 类型 | 说明  
---|---|---  
coord_types | const char *** | 支持的坐标系类型字符串数组  
coord_types_cnt | int* | 支持的坐标系类型数量  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 地理位置请求相关操作状态（详见 《枚举 地理位置操作状态》）  
  
## 枚举

### 地理位置操作状态

枚举值 | 值 | 说明  
---|---|---  
BGEOLOCATION_OPERATION_OK | 0 | 地理位置相关操作成功  
BGEOLOCATION_ERROR  | -1 | 地理位置相关操作失败  
  
## 结构体

### 地理位置请求信息 BGeolocation_LocationRequestInfo
[code] 
    struct BGeolocation_LocationRequestInfo {
        const char* coord_type;
        int timeout;
    }
[/code]

复制代码

#### 内容说明

内容 | 类型 | 说明  
---|---|---  
coord_type | const char* | 请求的坐标系类型  
timeout | int | 请求的超时时间  
  
### 地理位置数据 BGeolocation_LocationData
[code] 
    struct BGeolocation_LocationData {
        double longitude;
        double latitude;
        float accuracy;
        double time;
    }
[/code]

复制代码

#### 内容说明

内容 | 类型 | 说明  
---|---|---  
longitude | double | 经度  
latitude | double | 纬度  
accuracy | float | 精度  
time | double | 时间  
  
### 地理位置监听 BGeolocation_LocationListener

包含用于监听位置数据回调的结构体。
[code] 
    struct BGeolocation_LocationListener {
        onLocationChanged location_changed;
    }
[/code]

复制代码

### 地理位置获取结果回调 BGeolocation_LocationCallback

包含获取地理位置信息的结果回调的结构体。
[code] 
    struct BGeolocation_LocationCallback {
        onLocationResult location_result;
    }
[/code]

复制代码

## 回调

### 地理位置监听回调 onLocationChanged
[code] 
    void(* onLocationChanged )(BGeolocation_LocationData data, void *user_data);
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
data | BGeolocation_LocationData | 变化的地理位置数据（详见《结构体 地理位置数据》）  
user_data | void* | 自定义数据  
  
#### 返回值

无

### 地理位置获取结果回调 onLocationResult
[code] 
    void(* onLocationResult )(int code, BGeolocation_LocationData data, void *user_data);
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
code | int | 获取地理位置的结果代码  
data | BGeolocation_LocationData | 变化的地理位置数据（详见《结构体 地理位置数据》）  
user_data | void* | 自定义数据  
  
#### 返回值

无

上一篇

[压缩解压](</native/file/compress/>)

下一篇

[设备信息](</native/device/device/>)