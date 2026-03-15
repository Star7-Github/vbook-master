# 数据请求

# 数据请求

更新时间：2023/11/07 10:55:31

头文件<network/fetch.h>

## 接口定义

### 创建 Http 请求 session
[code] 
    int BNetwork_fetchCreateSession(
        void **session
    );
[/code]

复制代码

#### 参数

参数(输出) | 类型 | 说明  
---|---|---  
session | void** | 创建的 Http 请求的 session 指针，用于发起 Http 请求  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | Http 请求相关操作状态值。（详见《枚举 Http 请求状态》）  
  
### 销毁 Http 请求 session
[code] 
    int BNetwork_fetchDestroySession(
        void *session
    );
[/code]

复制代码

#### 参数

参数(输出) | 类型 | 说明  
---|---|---  
session | void* | 要销毁的 Http 请求的 session 指针  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | Http 请求相关操作状态值。（详见《枚举 Http 请求状态》）  
  
### 发起 Http 请求
[code] 
    int BNetwork_fetch(
        void* session,
        BNetwork_FetchConfig *config,
        BNetwork_FetchCallbacks callbacks,
        void *user_data
    );
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
session | void* | BNetwork_fetchCreateSession 创建的 session 指针  
config | BNetwork_FetchConfig* | Http 请求配置（详见《结构体 Http 请求配置》）  
callbacks | BNetwork_FetchCallbacks | Http 请求结果回调（详见《结构体 请求结果监听》）  
user_data | void* | 自定义数据  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | Http 请求相关操作状态值。（详见《枚举 Http 请求状态》）  
  
## 枚举

### Http 请求状态

枚举值 | 值 | 说明  
---|---|---  
BNETWORK_FETCH_OK  | 0 | Http 请求相关操作成功  
BNETWORK_FETCH_ERROR  | -1 | Http 请求相关操作失败  
  
## 结构体

### Http 请求配置 BNetwork_FetchConfig

用于发起 http 请求。
[code] 
    struct BNetwork_FetchConfig {   
        const char* url;
        const char* header;
        const char* method;
        const char* data;
        size_t data_size;
    }
[/code]

复制代码

#### 内容说明

内容 | 类型 | 说明  
---|---|---  
url | const char* | 发起 HTTP 请求的 URL 地址  
method | const char* | 请求方式，默认为”GET“（当设置为”“(空)时，将以默认值发起请求） 支持”OPTIONS“，”GET“，”HEAD“，”POST“，”PUT“，”DELETE“，”TRACE“，”CONNECT“  
header | const char* | HTTP 请求头字段（JSON 格式字符串） 示例：{"Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,en-US;q=0.8,en;q=0.6"}  
data | const chat* | HTTP 请求的额外数据  
data_size | size_t | 额外数据的数据长度  
  
### Http 请求响应内容 BNetwork_FetchResponse

http 请求成功时，该内容将作为参数传入成功回调中。
[code] 
    struct BNetwork_FetchResponse {
        int http_code;
        uint8_t* header;
        size_t header_size;
        uint8_t* data;
        size_t data_size;
        void* user_data;
        BNetwork_FetchConfig* config;
    }
[/code]

复制代码

#### 内容说明

内容 | 类型 | 说明  
---|---|---  
http_code | int | 请求状态  
header | uint8_t* | 响应头  
header_size | size_t | 响应头大小  
data | uint8_t* | 响应正文  
data_size | size_t | 响应正文大小  
user_data | void* | 用户自定义参数  
config | BNetwork_FetchConfig* | http 请求配置参数指针，回传用于进行资源释放等操作。  
  
### 请求结果监听 BNetwork_FetchCallbacks

包含 http 的请求结果回调的结构体，需设置“成功”、“失败”、“完成”三种回调。（详见《回调 fetch 请求结果》）
[code] 
    struct BNetwork_FetchCallbacks {
        onFetchSucceeded succeeded_cb;  // Http请求成功
        onFetchFailed failed_cb;        // Http请求失败
        onFetchCompleted completed_cb;  // Http请求完成
    }
[/code]

复制代码

## 回调

### fetch 请求结果

#### 请求成功
[code] 
    void(* onFetchSucceeded)(void* session, BNetwork_FetchResponse *response);
[/code]

复制代码

##### 参数

参数 | 类型 | 说明  
---|---|---  
session | void* | 此 http 请求创建的 session 指针  
response | BNetwork_FetchResponse * | fetch 请求响应结果（详见《结构体 Http 请求响应内容》）  
  
##### 返回值

无

#### 请求失败
[code] 
    void(* onFetchFailed)(void* session, int errCode, BNetwork_FetchResponse *response);
[/code]

复制代码

##### 参数

参数 | 类型 | 说明  
---|---|---  
session | void* | 此 http 请求创建的 session 指针  
errCode | int | fetch 请求的错误代码  
response | BNetwork_FetchResponse * | fetch 请求响应结果（详见《结构体 Http 请求响应内容》）  
  
##### 返回值

无

#### 请求完成
[code] 
    void(* onFetchCompleted)(void* session, int opCode, BNetwork_FetchResponse *response);
[/code]

复制代码

##### 参数

参数 | 类型 | 说明  
---|---|---  
session | void* | 此 http 请求创建的 session 指针  
opCode | int | fetch 请求完成操作码  
response | BNetwork_FetchResponse * | fetch 请求响应结果（详见《结构体 Http 请求响应内容》）  
  
##### 返回值

无

上一篇

[上传下载](</native/network/download>)

下一篇

[网络状态](</native/network/network>)