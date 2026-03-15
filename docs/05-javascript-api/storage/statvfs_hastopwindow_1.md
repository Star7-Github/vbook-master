# 存储空间统计

更新时间：2025/08/13 20:11:57

statvfs 一个用来获取应用空间的模块，包含了获取可用空间与总空间接口，支持同步与异步。

## 接口声明
[code] 
    { "name": "blueos.storage.statvfs" }
[/code]

复制代码

## 导入模块
[code] 
    import statvfs from '@blueos.storage.statvfs'
[/code]

复制代码

## 接口定义

### statvfs.getFreeSize()

查询指定文件系统可用空间大小，异步接口

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
path | string | 是 | 需要查询的文件系统的文件路径 URI  
success | (size:number)=>{} | 否 | 成功回调,返回 空闲的字节数，（单位为 Byte）  
fail | Function | 否 | 失败回调  
  
**使用示例：**
[code] 
    statvfs.getFreeSize({
      path: 'internal://files',
      success(size) {
        console.info('getFreeSize successfully, Size: ' + size)
      },
    })
[/code]

复制代码

### statvfs.getFreeSizeSync()

查询指定文件系统可用空间大小，同步接口

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
path | string | 是 | 需要查询的文件系统的文件路径 URI  
  
**返回值：**

空闲的字节数，（单位为 Byte）

**使用示例：**
[code] 
    const freeSize = statvfs.getFreeSizeSync('internal://files')
    console.log(freeSize)
[/code]

复制代码

### statvfs.getTotalSize()

查询指定文件系统总空间大小，异步接口

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
path | string | 是 | 需要查询的文件系统的文件路径 URI  
success | (size:number)=>{} | 否 | 成功回调,返回总空间大小的字节数，（单位为 Byte）  
fail | Function | 否 | 失败回调  
  
**使用示例：**
[code] 
    statvfs.getTotalSize({
      path: 'internal://files',
      success(size) {
        console.info('getTotalSize successfully, Size: ' + size)
      },
    })
[/code]

复制代码

### statvfs.getTotalSizeSync()

查询指定文件系统总空间大小，同步接口

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
path | string | 是 | 需要查询的文件系统的文件路径 URI  
  
**返回值：**

总空间大小字节数，（单位为 Byte）

**使用示例：**
[code] 
    const totalSize = statvfs.getTotalSizeSync('internal://files')
    console.log(totalSize)
[/code]

复制代码