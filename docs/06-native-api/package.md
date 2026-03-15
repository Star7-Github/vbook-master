# 包管理

# 包管理

更新时间：2023/11/07 10:55:31

头文件<package/package.h>

## 接口定义

### 获取应用签名摘要信息
[code] 
    char* BPackage_getSignatureDigests(const char* package);
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
package | const char* | 应用包名  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
digests | char* | 签名摘要信息（失败返回 nullptr）  
  
#### 备注

操作成功时，使用完签名摘要信息后，需要对其进行释放。

上一篇

[概述](</native/quickstart/introduction/>)

下一篇

[通信能力](</native/network/download/>)