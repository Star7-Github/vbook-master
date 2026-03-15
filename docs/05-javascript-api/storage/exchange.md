# 数据共享

# 数据共享

更新时间：2024/10/11 11:55:18

提供了一个不同蓝河应用间数据交互的方式。蓝河应用可以利用它发布数据，或从其他蓝河应用获取数据

数据交互有三个数据空间，分别是应用空间（application）、应用开发商空间（vendor）和全局空间（global）

application：数据发布在应用空间，读取、修改、删除 时需同时指定发布方的包名和签名，并且需要发布方授权

vendor：数据发布在应用开发商空间，同签名的多个应用的写操作会相互覆盖，读取时不能指定发布方的包名和签名，不需要发布方授权

global：数据发布在全局空间，多个应用的写操作会相互覆盖，读取时不能指定发布方的包名和签名，不需要发布方授权

**注意** ：

1、set、get 操作支持在 `application`、`vendor` 和`global` 空间上操作数据。 2、exchange 的数据不做持久化处理，系统重启后数据会丢失。

## 接口声明
[code] 
    { "name": "blueos.storage.exchange" }
[/code]

复制代码

## 导入模块
[code] 
    import exchange from '@blueos.storage.exchange'
[/code]

复制代码

## 接口定义

### exchange.get(OBJECT)

读取蓝河应用平台数据，可获取到`应用空间`（application）、`应用开发商空间`（vendor ）或`全局空间`（global）的数据

#### 参数

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
package | String | 否 | 数据发布方的包名，scope 为 `application` 时必须提供，为 `vendor`或 `global` 时必须为空  
sign | String | 否 | 数据发布方签名的 SHA-256，scope 为 `application` 时必须提供，为 `vendor` 或 `global` 时必须为空  
scope | String | 否 | 数据发布的空间类型，支持 application、vendor 和 global，默认为 application  
key | String | 是 | 数据的 key  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调（调用成功、失败都会执行）  
  
#### 返回值:

参数名 | 类型 | 说明  
---|---|---  
value | String | Boolean | Number | Object | Array | 数据的值，与 set 设置的类型一致  
  
##### fail 返回错误代码：

错误码 | 说明  
---|---  
202 | 参数错误  
1000 | 没有权限  
  
#### 示例
[code] 
    exchange.get({
      package: 'com.example',
      sign: '7a12ec1d66233f20a20141035b1f7937',
      key: 'token',
      success: function (ret) {
        console.log(`handling success, value = ${ret.value}`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### exchange.getSync(Object)

同步读取蓝河应用平台数据，可获取到`应用空间`（application）、`应用开发商空间`（vendor ）或`全局空间`（global）的数据

#### 参数

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
package | String | 否 | 数据发布方的包名，scope 为 `application` 时必须提供，为 `vendor`或 `global` 时必须为空  
sign | String | 否 | 数据发布方签名的 SHA-256，scope 为 `application` 时必须提供，为 `vendor` 或 `global` 时必须为空  
scope | String | 否 | 数据发布的空间类型，支持 application、vendor 和 global，默认为 application  
key | String | 是 | 数据的 key  
  
#### 返回值

参数值 | 类型 | 说明  
---|---|---  
value | String | Boolean | Number | Object | Array | 数据的值，与 set 设置的类型一致  
  
#### 示例
[code] 
    const value = exchange.getSync({
      package: 'com.example',
      sign: '7a12ec1d66233f20a20141035b1f7937',
      key: 'token',
    })
[/code]

复制代码

### exchange.set(OBJECT)

发布数据到蓝河应用平台，可发布到`应用空间`（application）、`应用开发商空间` 或`全局空间`（global）

#### 参数

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
key | String | 是 | 数据的 key  
value | String | Boolean | Number | Object | Array | 是 | 数据的值  
scope | String | 否 | 数据发布的空间类型，支持 application、vendor 和 global，默认为 application  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调（调用成功、失败都会执行）  
package | String | 否 | 配置需要写入数据到某蓝河应用的`应用空间`时某蓝河应用的`包名`，仅在`scope`参数不设置或设置为`application`时生效，在`scope`为`vendor`或`global`时必须设为空值  
sign | String | 否 | 配置需要写入数据到某蓝河应用的`应用空间`时某蓝河应用的`签名`的 SHA-256，仅在`scope`参数不设置或设置为`application`时生效，在`scope`为`vendor`或`global` 时必须设为空值  
  
##### fail 返回错误代码：

错误码 | 说明  
---|---  
202 | 参数错误  
  
#### 示例
[code] 
    exchange.set({
      key: 'token',
      value: '12347979',
      success: function () {
        console.log(`handling success`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

#### 示例
[code] 
    exchange.set({
      key: 'token',
      value: false,
      success: function () {
        console.log(`handling success`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

#### 示例
[code] 
    exchange.set({
      key: 'token',
      value: 10,
      success: function () {
        console.log(`handling success`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

#### 示例
[code] 
    exchange.set({
      key: 'token',
      value: { name: '张三', age: 18 },
      success: function () {
        console.log(`handling success`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

#### 示例
[code] 
    exchange.set({
      key: 'token',
      value: [2, 3, 4],
      success: function () {
        console.log(`handling success`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

上一篇

[文件存储](</api/storage/file/>)

下一篇

[电话能力](</api/system/phoneOverview/>)