# 运动健康

# 运动健康

更新时间：2025/06/30 19:53:14

## 概述

蓝河应用等运动健康模块旨在支持用户的运动和健康数据管理。该模块提供了两个主要部分：采样数据和统计数据，为用户提供了全面的健康数据管理和实时监控功能，对于健康和运动类应用、健康监测工具和健康管理应用非常有用。

## 接口声明
[code] 
    { "name": "blueos.health.health" }
[/code]

复制代码

## 导入模块
[code] 
    import health from '@blueos.health.health' 或 const health = require('@blueos.health.health')
[/code]

复制代码

**开发者需要在 manifest.json 里面配置权限：**
[code] 
    {
      "permissions": [{ "name": "watch.permission.READ_HEALTH_DATA" }]
    }
[/code]

复制代码

## 接口定义

### getRecentSamples

获取最近一次采样数据

**参数**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
dataTypes | DataType[] | 是 | 数据类型  
success | (recentSamples: RecentSample[]) => void | 是 | 回调函数，返回值是一个 RecentSample 数组  
complete | () => void | 否 | 完成的回调函数  
fail | (data: string, code: number) => void | 否 | 失败回调函数  
  
**示例**
[code] 
    health.getRecentSamples({
      dataTypes: [health.DATA_TYPES.HEART_RATE, health.DATA_TYPES.STEP_COUNT],
      success: (res) => {
        console.log(`current heart rate(${res[0].dataType}) is`, res[0].data.value, 'bpm')
      },
    })
[/code]

复制代码

### subscribeSample

监听采样数据变化

**参数**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
dataType | DataType | 是 | 数据类型  
callback | (sample: Sample) => void | 是 | 回调函数，返回值是一个Sample  
fail | (data: string, code: number) => void | 否 | 失败回调函数  
  
**示例**
[code] 
    health.subscribeSample({
      dataType: health.DATA_TYPES.HEART_RATE,
      callback: (res) => {
        console.log(`current heart rate(${res.value}) is`)
      },
    })
[/code]

复制代码

### unsubscribeSample

取消监听采样数据变化

**参数**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
dataType | DataType | 是 | 数据类型  
  
**示例**
[code] 
    health.unsubscribeSample({
      dataType: health.DATA_TYPES.HEART_RATE,
    })
[/code]

复制代码

### getTodayStatistic

查询当日统计数据

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
dataType | DataType | 是 | 数据类型  
statisticType | StatisticType | 否 | 统计的维度，不同的 dataType 支持的维度不一样  
success | (statistic: Statistic) => void | 是 | 回调函数，返回值是一个Statistic, 统计类型由 dataType 决定  
complete | () => void | 否 | 完成的回调函数  
fail | (data: string, code: number) => void | 否 | 失败回调函数  
  
**示例**
[code] 
    health.getTodayStatistic({
      dataType: health.DATA_TYPES.HEART_RATE,
      statisticType: health.STATISTIC_TYPES.SUM,
      success(data) {
        console.log(data)
      },
      fail(data, code) {
        console.log(data, code)
      },
    })
[/code]

复制代码

### getStatistic

根据时间段，查询统计数据。

**说明：**

  1. 仅支持查询当天的数据，数据粒度为小时级；
  2. `startTime` 和 `endTime` 向下取整；
  3. `startTime` 为空时，默认取当天 0 点；
  4. 若 `startTime` 早于当天 0 点，则自动取当天 0 点；
  5. 若 `endTime` 晚于当前时间，则自动取当前时间；
  6. 若 `startTime` 晚于 `endTime`，则将 `startTime` 设置为 `endTime`；

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
dataType | DataType | 是 | 数据类型  
statisticType | StatisticType | 否 | 统计的维度，不同的 dataType 支持的维度不一样  
startTime | timeStamp | 否 | 开始时间，在这个时间之后发生的活动，包含在这个时间段之前已经发生，但是还没有结束的活动  
endTime | timeStamp | 否 | 结束时间，在这个时间之前发生的活动，包含正在发生但还没有完全结束的活动  
success | (statistic: Statistic) => void | 否 | 回调函数，返回值是一个Statistic , 统计类型由 dataType 决定  
complete | () => void | 否 | 完成的回调函数  
fail | (data: string, code: number) => void | 否 | 失败回调函数  
  
**示例**
[code] 
    health.getStatistic({
      dataType: health.DATA_TYPES.HEART_RATE,
      statisticType: health.STATISTIC_TYPES.SUM,
      startTime: new Date().setHours(9, 0, 0, 0), // 9点
      endTime: new Date().setHours(15, 0, 0, 0), // 15点
      success(data) {
        console.log(data)
      },
      fail(data, code) {
        console.log(data, code)
      },
    })
[/code]

复制代码

### subscribeTodayStatistic

监听当日统计数据

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
dataType | DataType | 是 | 每个值都是一个 DataType 的枚举类型  
statisticType | StatisticType | 否 | 统计的维度，不同厂商，不同的 dataType 支持的维度不一样  
callback | (statistic: Statistic) => void | 是 | 回调函数，返回值是一个 Statistic , 统计类型由 dataType 决定  
fail | (data: string, code: number) => void | 否 | 失败回调函数  
  
**示例**
[code] 
    health.subscribeTodayStatistic({
      dataType: health.DATA_TYPES.HEART_RATE,
      statisticType: health.STATISTIC_TYPES.SUM,
      callback(data) {
        console.log(data)
      },
      fail(data, code) {
        console.log(data, code)
      },
    })
[/code]

复制代码

### unsubscribeTodayStatistic

取消监听当日统计数据

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
dataType | DataType | 是 | 数据类型  
  
**示例**
[code] 
    health.unsubscribeTodayStatistic({
      dataType: health.DATA_TYPES.HEART_RATE,
    })
[/code]

复制代码

### RecentSample

最近一次采样数据结构

属性名 | 值类型 | 说明  
---|---|---  
dataType | DataType | 数据类型  
data | Sample | 采样数据  
  
**示例：**
[code] 
    {
      "dataType": 0,
      "data": {
        "timeStamp": 1732706966443,
        "value": 80
      }
    }
[/code]

复制代码

### Sample

采样查询接口返回的数据结构

属性 | 值类型 | 说明  
---|---|---  
timeStamp | timeStamp | 采样时间  
value | Int |Float |SleepUnit |SleepStage[] | 数据类型由查询时的 DataType 决定  
  
**示例：**
[code] 
    {
      "timeStamp": 1732705884223,
      "value": 80
    }
[/code]

复制代码

### DataType

健康数据类型
[code] 
    const heartRate = health.DATA_TYPES.HEART_RATE
[/code]

复制代码

类型 | 类型值 | 返回值类型 | 返回单位 | 说明  
---|---|---|---|---  
HEART_RATE | 0 | Int | bpm | 心率  
HEART_RATE_STEP | 1 | Int | bpm | 步行心率  
HEART_RATE_RESTING | 2 | Int | bpm | 静息心率  
STANDING | 3 | Int | hour | 站立，以时长衡量。1 小时内站立超过 1 分钟即算作站立 1 小时，**仅支持统计数据**  
INTENSITY_SPORT | 4 | Int | minutes | 中高强度运动的持续时长，**仅支持统计数据**  
STEP_COUNT | 5 | Int | 步 | 步数，**仅支持统计数据** ，按时间段查询的最小粒度为小时  
SPO2 | 6 | Int | % | 血氧  
DISTANCE | 7 | Int | 米 | 距离，由骑行、跑步、步行产生，**仅支持统计数据**  
CALORIES | 8 | Int | 千卡 | 总卡路里，**仅支持统计数据**  
STRESS | 9 | Int |  | 压力值  
WALKING_SPEED | 10 | Int | 步/min | 步频  
SLEEP_UNIT | 11 | SleepUnit |  | 睡眠时段，**暂不支持**  
SLEEP_STAGES | 12 | SleepStage[] |  | 一个完整睡眠包含的睡眠分期，**暂不支持**  
SLEEP_STATUS | 13 | Int | 0:清醒 1:睡眠 | 睡眠状态  
ENERGY | 14 | Int | % | 活力值，**暂不支持**  
WALKING_STATUS | 15 | Int | 0:非步行 1:步行 | 步行状态  
SPEED | 16 | Float | 米/s | 配速，**暂不支持**  
  
### SleepUnit

睡眠时段返回值

属性 | 单位 | 说明  
---|---|---  
enterSleep | timeStamp | 入睡时间戳  
exitSleep | timeStamp | 出睡时间戳  
  
**示例：**
[code] 
    {
      "enterSleep": 1732705884223,
      "exitSleep": 1732706966443
    }
[/code]

复制代码

### SleepStage

属性 | 单位 | 说明  
---|---|---  
enterTimeStamp | timeStamp | 进入该睡眠分期的时间戳  
sleepType | Int | 进入的睡眠分期类型 1:深睡 2:浅睡 3:快速眼动 4:清醒  
  
**示例：**
[code] 
    {
      "enterTimeStamp": 1732705884223,
      "sleepType": 1
    }
[/code]

复制代码

### StatisticType

统计数据类型
[code] 
    const sum = health.STATISTIC_TYPES.SUM
[/code]

复制代码

不同DataType支持的统计类型如下：

类型 | 类型值 | 说明  
---|---|---  
AVERAGE | 0 | 平均值  
SUM | 1 | 总和  
MAX | 2 | 最大值  
MIN | 3 | 最小值  
  
各数据类型的统计类型支持情况与统计 API 支持情况：

数据类型 | 最大小值 | 总和 | 平均值 | getTodayStatistic | subscribeTodayStatistic | getStatistic  
---|---|---|---|---|---|---  
HEART_RATE | 支持 |  |  | 支持 | 支持 |   
SPO2 | 支持 |  |  | 支持 | 支持 |   
STRESS | 支持 |  |  | 支持 | 支持 |   
STANDING |  | 支持 |  | 支持 |  | 支持  
INTENSITY_SPORT |  | 支持 |  | 支持 |  | 支持  
STEP_COUNT |  | 支持 |  | 支持 |  | 支持  
DISTANCE |  | 支持 |  | 支持 |  | 支持  
CALORIES |  | 支持 |  | 支持 |  | 支持  
  
### Statistic

统计数据，获取采样数据的统计值。统计数据的数据结构如下：

属性 | 值类型 | 说明  
---|---|---  
value | Int | Float |SleepUnit | SleepStage[] | 数据类型由查询时的 DataType 决定  
statisticType | - | 统计类型。如果数据返回的不是统计类型，则此值是 null  
startTime | timeStamp | 统计开始时间  
endTime | timeStamp | 统计结束时间  
  
**示例：**
[code] 
    {
      "value": 80,
      "statisticType": 0,
      "startTime": 1732705884223,
      "endTime": 1732706966443
    }
[/code]

复制代码

上一篇

[解包](</api/system/tar/>)

下一篇

[安全能力](</api/system/peaceOverview/>)