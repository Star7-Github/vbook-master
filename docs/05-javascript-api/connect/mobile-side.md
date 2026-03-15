# 手机侧

# 手机侧  
  
更新时间：2023/10/30 19:45:39

## 接口使用

### 同步发送数据

#### 命令发送 API
[code] 
    Request request = new Request.Builder()
                        .action(Constant.Action.ACTION_DEVICE_BUSINESS_DATA)
                        .pkgName("com.vivo.health")
                        .data(data)
                        .build();
        Response response = RpcClient.getInstance().callSync(request);
        RpcLogger.i("test test_send response:" + response.getData());
[/code]

复制代码

### 异步发送数据
[code] 
        String data = "业务自定义数据";
        Request request = new Request.Builder()
                .action(Constant.Action.ACTION_DEVICE_BUSINESS_DATA)
                .pkgName("com.vivo.health")
                .data(data)
                .build();
        RpcClient.getInstance().callAsync(request, new Callback() {
            @Override
            public void onResponse(Response response) {
                MockLogger.i("test test_send_async response:" + response.getData());
            }
        });
[/code]

复制代码

### 接收数据监听
[code] 
    DeviceRpcManager.getInstance().startDataReceiver(new IDataReceiver() {
                @Override
                public void onReceiveData(Request request) {
                    switch (request.getAction()){
                         case Constant.Action.ACTION_DEVICE_BUSINESS_DATA:
                            String data = request.getData();                        //接收端数据处理
                            String result = "填写的response";
                            response = Util.responseData(request, result);
                            DeviceRpcManager.getInstance().onResponse(response);
                            break;
                         default:
                            break;
                    }
                @Override
                public void onReceiveNotification(Notification notification) {
                    //处理接收的notification事件
                }
            });
[/code]

复制代码

### 发送通知数据

##### 通知数据没有返回值。

  * 请求的数据：

[code] 
    String data = "业务自定义数据";
    Notification notification = new Notification.Builder()
            .action(Constant.Action.ACTION_DEVICE_BUSINESS_DATA)
            .pkgName("com.vivo.health")
            .data(data)
            .build();
    RpcClient.getInstance().notify(notification);
[/code]

复制代码

  * 返回的数据：通知类数据没有返回结果。

## code 描述

code | 描述  
---|---  
0 | 成功  
1 | 目标 app 没有处理对应 ACTION  
2 | 数据解析错误  
3 | 设备命令失败  
4 | 设备未连接  
5 | 请求设备数据超时  
6 | 设备不存在  
7 | 请求目标 app 超时  
8 | 目标 app 不支持 sdk 功能或目标 app 未安装  
9 | 权限拒绝  
-1 | 未知错误  
  
## ACTION 列表

  * ACTION_DEVICE_INFO 当前连接的设备信息
  * ACTION_DEVICE_BUSINESS_DATA 发送设备业务数据
  * ACTION_DEVICE_DYNAMIC 设备动态信息更新

## 接口列表

### 1.读取运动健康功能版本号

##### 获取运动健康功能版本号，版本号大于等于 2 说明具备当前能力

##### 请求的数据：
[code] 
    int version = DeviceRpcManager.getInstance().getHealthDeviceVersion();
[/code]

复制代码

### 2.获取当前连接的设备信息

##### 同步请求的数据
[code] 
    Request request = new Request.Builder()
            .action(Constant.Action.ACTION_DEVICE_INFO)
            .pkgName("com.vivo.health")
            .data(data)
            .build();
    Response response = RpcClient.getInstance().callSync(request);
[/code]

复制代码

##### 返回的数据：
[code] 
    {
        "device":
            {
            "deviceName":"Watch Name XXX2",
            "battery":90, //范围0-100
            "connected":true,
            "freeStorage":200000, //单位byte
            "mac":"11:11:11:11:11:11",
            "productId":2,
            "totalStorage":800000000 //单位byte
            "batteryState":1 //充电状态
            }
    }
    
[/code]

复制代码

### 3.给设备发送 Request 消息

##### 同步请求的数据
[code] 
    JSONObject jsonObject = new JSONObject();
    jsonObject.put("msg", "业务自定义数据");
    
    Request request = new Request.Builder()
            .action(Constant.Action.ACTION_DEVICE_BUSINESS_DATA)
            .pkgName("com.vivo.health")
            .data(jsonObject.toJSONString())
            .build();
    Response response = RpcClient.getInstance().callSync(request);
[/code]

复制代码

##### 返回的数据：
[code] 
    data：{"code":0}
[/code]

复制代码

### 4.设备动态信息更新

##### 数据监听
[code] 
    DeviceRpcManager.getInstance().registerDataReceiver(new IDataReceiver() {
                @Override
                public void onReceiveRequest(Request request) {
    
                }
    
                @Override
                public void onReceiveNotification(Notification notification) {
                    try {
                        RpcLogger.i("server onReceiveNotification:" + notification);
                        switch (notification.getAction()) {
                            case Constant.Action.ACTION_DEVICE_DYNAMIC:
                                String data = notification.getData();
                                break;
                            default:
                                break;
                        }
                    }catch (Exception e){
                        e.printStackTrace();
                    }
                }
            });
[/code]

复制代码

##### 获取到的 data 数据：在 onReceiveNotification 回调中，得到的 data 是如下格式：
[code] 
    {
        "device":
            {
            "deviceName":"Watch Name XXX2",
            "battery":90, //范围0-100
            "connected":true,
            "freeStorage":200000, //单位byte
            "mac":"11:11:11:11:11:11",
            "productId":2,
            "totalStorage":800000000 //单位byte
            "batteryState":1 //充电状态
            }
    }
[/code]

复制代码