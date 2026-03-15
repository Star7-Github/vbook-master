# 文件系统

# 文件系统

更新时间：2023/11/07 10:55:31

头文件<storage/filesystem.h>

## 接口定义

### 获取缓存目录
[code] 
    int BFileSystem_getCacheDir(
        const char* package,
        char* path
    );
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
package | const char* | 应用包名  
path（输出） | char* | 缓存目录  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 结果代码（详见 《枚举 操作结果代码》）  
  
#### 备注

path 输出参数所需内存大小为 256。

### 获取应用文件目录
[code] 
    int BFileSystem_getFilesDir(
        const char* package,
        char* path
    );
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
package | const char* | 应用包名  
path（输出） | char* | 应用文件目录  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 结果代码（详见 《枚举 操作结果代码》）  
  
#### 备注

path 输出参数所需内存大小为 256。

### 获取 mass 目录
[code] 
    int BFileSystem_getMassDir(
        const char* package,
        char* path
    );
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
package | const char* | 应用包名  
path（输出） | char* | mass 目录  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 结果代码（详见 《枚举 操作结果代码》）  
  
#### 备注

path 输出参数所需内存大小为 256。

### 获取临时目录
[code] 
    int BFileSystem_getTempDir(
        const char* package,
        char* path
    );
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
package | const char* | 应用包名  
path（输出） | char* | 临时目录  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 结果代码（详见 《枚举 操作结果代码》）  
  
#### 备注

path 输出参数所需内存大小为 256。

### 获取存储目录
[code] 
    int BFileSystem_getStorageDir(
        const char* package,
        char* path
    );
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
package | const char* | 应用包名  
path（输出） | char* | 存储目录（用于 mmkv 数据库）  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 结果代码（详见 《枚举 操作结果代码》）  
  
#### 备注

path 输出参数所需内存大小为 256。

## 枚举

枚举值 | 值 | 说明  
---|---|---  
BFILESYSTEM_OK | 0 | 操作成功  
BFILESYSTEM_ERROR | -1 | 操作失败  
  
上一篇

[网络状态](</native/network/network>)

下一篇

[压缩解压](</native/file/compress/>)