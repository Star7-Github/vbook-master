# 上传下载

更新时间：2023/11/07 10:55:31

头文件<network/download.h>

## 接口定义

### 发起下载请求
[code] 
    int BNetwork_download(
        BNetwork_DownloadConfig *config,
        BNetwork_DownloadRequestCallbacks callbacks,
        void* user_data
    );
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
config | BNetwork_DownloadConfig* | 下载配置信息（详见《结构体 下载请求配置》）  
callbacks | BNetwork_DownloadRequestCallbacks | 下载请求的结果监听回调（详见《结构体 下载请求结果监听》）  
user_data | void* | 自定义数据  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 下载请求相关操作状态值。（详见《枚举 Download 请求状态》）  
  
### 注册下载结果回调
[code] 
    int BNetwork_registerDownloadListener(
        const char *token,
        BNetwork_DownloadCallbacks callbacks,
        void* user_data
    );
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
token | const char* | 下载请求成功时返回的唯一标识符  
callbacks | BNetwork_DownloadCallbacks | 下载结果的监听回调（详见《结构体 下载执行结果监听》）  
user_data | void* | 自定义数据  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 下载请求相关操作状态值。（详见《枚举 Download 请求状态》）  
  
### 终止下载请求
[code] 
    int BNetwork_abortDownload(
        const char* token,
        BNetwork_AbortDownloadCallbacks callbacks,
        void* user_data
    );
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
token | const char* | 下载请求成功时返回的唯一标识符  
callbacks | BNetwork_AbortDownloadCallbacks | 终止下载的结果回调（详见《回调 终止下载执行结果》）  
user_data | void* | 自定义数据  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 下载请求相关操作状态值。（详见《枚举 Download 请求状态》）  
  
## 枚举

### Download 请求状态

枚举值 | 值 | 说明  
---|---|---  
BNETWORK_DOWNLOAD_OK  | 0 | 下载请求相关操作成功  
BNETWORK_DOWNLOAD_ERROR  | -1 | 下载请求相关操作失败  
  
## 结构体

### 下载请求配置 BDownloadConfig

用于发起下载请求。
[code] 
    struct BNetwork_DownloadConfig {
        const char* url;
        const char* header;
        const char* description;
        const char* filename;
    }
[/code]

复制代码

#### 内容说明

内容 | 类型 | 说明  
---|---|---  
url | const char* | 请求地址  
header | const char* | 请求 header  
description | const char* | 下载描述，用于显示（默认为文件名）  
filename | const char* | 下载保存的文件名，默认从 Http 请求/URL 中获取  
  
### 下载请求结果监听 BNetwork_DownloadRequestCallbacks

包含下载请求结果回调的结构体，需设置“成功”、“失败”、“完成”三种回调。（详见《回调 下载请求结果》）
[code] 
    struct BNetwork_DownloadRequestCallbacks {
        onDownloadRequestSucceeded succeeded_cb;        // 下载请求成功
        onDownloadRequestFailed failed_cb;              // 下载请求失败
        onDownloadRequestCompleted completed_cb;        // 下载请求完成
    };
[/code]

复制代码

### 下载执行结果监听 BNetwork_DownloadCallbacks

包含下载结果回调的结构体，需设置“成功”、“失败”两种回调。（详见《回调 下载执行结果》）
[code] 
    struct BNetwork_DownloadCallbacks {
        onDownloadSucceeded succeeded_cb;      //  下载成功
        onDownloadFailed failed_cb;            //  下载失败
    }
[/code]

复制代码

### 终止下载执行结果监听 BNetwork_AbortDownloadCallbacks

包含终止下载结果回调的结构体，需设置”成功“，”失败“两种回调。（详见《回调 终止下载执行结果》）
[code] 
    struct BNetwork_AbortDownloadCallbacks {
        onAbortDownloadSucceeded succeeded_cb;    //  终止下载成功
        onAbortDownloadFailed failed_cb;          //  终止下载失败
    }
[/code]

复制代码

## 回调

### 下载请求结果

#### 请求成功
[code] 
    void(* onDownloadRequestSucceeded)(const char* token, BNetwork_DownloadConfig* config, void* user_data);
[/code]

复制代码

##### 参数

参数 | 类型 | 说明  
---|---|---  
token | const char* | 服务器端生成的一个唯一标识符，用于标识该次下载请求的身份和状态。作为终止下载及注册下载监听的参数。  
config | BNetwork_DownloadConfig* | 下载请求配置信息指针，用于进行资源释放等操作。  
user_data | void* | 自定义数据  
  
##### 返回值

无

#### 请求失败
[code] 
    void(* onDownloadRequestFailed)(int errCode, BNetwork_DownloadConfig* config, void* user_data);
[/code]

复制代码

##### 参数

参数 | 类型 | 说明  
---|---|---  
errCode | int | 下载请求失败的错误码  
config | BNetwork_DownloadConfig* | 下载请求配置信息指针，用于进行资源释放等操作。  
user_data | void* | 自定义数据  
  
##### 返回值

无

#### 请求完成
[code] 
    void(* onDownloadRequestCompleted)(int opCode, BNetwork_DownloadConfig* config, void* user_data);
[/code]

复制代码

##### 参数

参数 | 类型 | 说明  
---|---|---  
opCode | int | 下载请求完成的操作码  
config | BNetwork_DownloadConfig* | 下载请求配置信息指针，用于进行资源释放等操作。  
user_data | void* | 自定义数据  
  
##### 返回值

无

### 下载执行结果

#### 下载成功
[code] 
    void(* onDownloadSucceeded)(const char* uri, void* user_data);
[/code]

复制代码

##### 参数

参数 | 类型 | 说明  
---|---|---  
uri | const char* | 下载资源的 URI  
user_data | void* | 自定义数据  
  
##### 返回值

无

#### 下载失败
[code] 
    void(* onDownloadFailed)(int errCode, void* user_data);
[/code]

复制代码

##### 参数

参数 | 类型 | 说明  
---|---|---  
errCode | int | 请求失败的错误码  
user_data | void* | 自定义数据  
  
##### 返回值

无

### 终止下载执行结果

#### 终止下载成功
[code] 
    void(* onAbortDownloadSucceeded)(void *user_data);
[/code]

复制代码

##### 参数

参数 | 类型 | 说明  
---|---|---  
user_data | void* | 自定义数据  
  
##### 返回值

无

#### 终止下载失败
[code] 
    void(*onAbortDownloadFailed)(int errCode, void* user_data)
[/code]

复制代码

##### 参数

参数 | 类型 | 说明  
---|---|---  
errCode | int | 请求失败的错误码  
user_data | void* | 自定义数据  
  
##### 返回值

无