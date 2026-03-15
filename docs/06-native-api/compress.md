# 压缩解压

# 压缩解压

更新时间：2023/11/07 10:55:31

头文件<storage/compress.h>

## 接口定义

### 解压
[code] 
    int BFile_decompress(
        const char* srcUri,
        const char* dstUri
    );
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
srcUri | const char* | 源文件 uri  
dstUri | const char* | 目标文件 uri  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 操作状态（详见 《枚举 文件压缩相关操作状态》）  
  
## 枚举

### 文件压缩相关操作状态

枚举值 | 值 | 说明  
---|---|---  
BFILE_COMPRESS_OK | 0 | 文件压缩相关操作成功  
BFILE_COMPRESSE_RROR  | -1 | 文件压缩相关操作失败  
  
上一篇

[文件系统](</native/file/filesystem/>)

下一篇

[基础硬件能力](</native/geolocation/geolocation/>)