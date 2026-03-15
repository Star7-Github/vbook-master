# physics-engine

# physics-engine

更新时间：2025/10/10 09:34:52

## 概述

物理引擎是一种用于模拟现实世界物理规律的能力，包括重力、碰撞、摩擦、弹性、刚体运动等，使应用中的物体行为更加自然、真实。

**基本概念：**

**空间 (Space)**

**空间** 是物理引擎中用于模拟物理效果的容器。

在一个空间中，可以添加多个刚体（Body）和形状（Shape）。

每个 `physics-engine` 组件对应一个独立的空间实例。

**刚体 (Body)**

**刚体** 用于描述物体的物理属性，例如质量、位置、旋转和速度等。

刚体本身没有形状，需要通过附加形状（Shape）来定义其外观和碰撞范围。

在一个 `physics-engine` 组件中，每个子组件都表示一个刚体。

**形状 (Shape)**

**形状** 定义物体的表面属性，如摩擦力和弹性。

当形状附加到刚体上时，二者共同构成具有物理特性和几何形状的对象。

当前，每个刚体仅能绑定一个形状。

## 子组件

支持，子组件作为刚体载体，每个子组件映射为一个 Body。

## 属性

支持[通用属性](</component/common/common-attributes/>)

## 样式

支持[通用样式](</component/common/common-events/>)

## 方法

### initSpace()

初始化空间，初始化属性及对应的值，可以同时设置多种属性

**参数** ：

参数以下格式的 JSON 字符串，具体信息参考 SpaceAttr
[code] 
    {
      space: {
        attribute_0: value_0,
        attribute_1: value_1,
        ...
      }
    }
[/code]

复制代码

**示例** ：
[code] 
    this.$element('engine').initSpace(
      JSON.stringify({
        space: {
          gravityX: 0, //重力方向
          gravityY: 200, //重力方向为Y轴正方向，大小为200像素每秒
          touch: true, //可以通过touch修改刚体位置
          crown: 'scale', //对space中的刚体进行缩放
        },
      })
    )
[/code]

复制代码

### setSpaceAttr()

设置空间属性及对应的值，可以同时设置多种属性。

**参数** ：

参数以下格式的 JSON 字符串，具体信息参考 SpaceAttr
[code] 
    {
      attribute_0: value_0,
      attribute_1: value_1,
      ...
    }
[/code]

复制代码

**示例** ：
[code] 
    this.$element('engine_test').setSpaceAttr(
      JSON.stringify({
        friction: 1,
      })
    )
[/code]

复制代码

### initBody()

刚体初始化，可以同时完成多个参数的初始化

刚体初始化的顺序必须和 xml 中组件对象的顺序一致，否则会顺序错误

**参数** ：

参数为以下格式的JSON字符串，具体body信息参考BodyAttr
[code] 
    {
      init:[
        {
          //body_0 相关属性
        },
        { 
          //body_1 相关属性
        },
        ...
      ]
    }
[/code]

复制代码

**示例** ：
[code] 
    this.$element('engine_test').initBody(JSON.stringify({
      init: [
        {
          shape: 'circle',
          originX: 188,
          originY: 200,
          radius: 66,
          mass: 1,
          elasticity: 0.8,
          name: 'weather',
        },
        {
          shape: 'circle',
          originX: 200,
          originY: 200,
          radius: 85,
          mass: 1,
          elasticity: 0.8,
          name: 'pressure',
        },
      ],
    }))
[/code]

复制代码

### setBodyAttr()

设置空间属性及对应的值，可以同时设置多种属性

**参数** ：

参数为以下格式的JSON字符串，具体body信息参考BodyAttr
[code] 
    {
        bodyName: {
            attribute_0: value_0,
            attribute_1: value_1,
            ......
        }
    }
[/code]

复制代码

**示例** ：
[code] 
    // 设置名称为sleep的刚体 的enableRotation 属性为false
    this.$element('engine_test').setBodyAttr(
      JSON.stringify({
        sleep: {
          enableRotation: false,
        },
      })
    )
[/code]

复制代码

### getBodyPosition()

获取刚体的实时位置

**参数** ：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
bodyName | string | 是 | 指定获取位置的刚体名称  
callback | CommonCallback<BodyPosition> | 是 | 结果回调，返回刚体位置  
  
**示例** ：
[code] 
    // 获取名称为bird的刚体实时位置
    this.$element('engine_test').getBodyPosition('bird', {
      success: (position) => {
        // 成功获取位置数据
      },
      fail: (data, code) => {
        // 获取失败
      },
    })
[/code]

复制代码

### getBodyVelocity()

获取刚体的实时速度

**参数** ：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
bodyName | string | 是 | 指定获取速度的刚体名称  
callback | CommonCallback<BodyVelocity> | 是 | 结果回调，返回刚体速度  
  
**示例** ：
[code] 
    // 获取名称为bird的刚体实时速度
    this.$element('engine_test').getBodyVelocity('bird', {
      success: (velocity) => {
        // 成功获取速度数据
      },
      fail: (data, code) => {
        // 获取失败
      },
    })
[/code]

复制代码

## 数据对象

### SpaceAttr

空间属性对象，下面属性都为非必填。

属性 | 类型 | 范围 | 默认值 | 说明  
---|---|---|---|---  
iteration | uint32_t | >0 | 10 | 用来设置物理空间(space)计算的精度，数值大则会占用更多的 CPU，数值小则计算精度变差，默认 10 可以满足大部分需求，**一般不建议修改**  
gravityX | number(浮点数) | - | 0 | X 轴方向上重力的大小，当 gravityX 大于 0 时，表示空间(space)中所有普通刚体(body)都会受到 X 轴正方向的重力，反之则为 X 轴负方向的重力  
gravityY | number(浮点数) | - | 0 | Y 轴方向上重力的大小，当 gravityY 大于 0 时，表示空间(space)中所有普通刚体(body)都会受到 Y 轴正方向的重力，反之则为 Y 轴负方向的重力  
damping | number(浮点数) | >0 | 1 | 应用于空间(space)的简单阻尼量。值为 0.9 表示每个刚体(body)每秒将损失 10% 的速度。默认为 1。与重力一样，它可以在每个刚体(body)的基础上进行覆盖。  
collisionSlop | number(浮点数) | >0 | 0.1 | 允许的形状(shape)间重叠量。为了提高稳定性，请将其设置为尽可能高，但不要出现明显的重叠。默认值为 0.1。  
originX | number(浮点数) | - | 0 | 空间(space)原点 X 轴坐标。  
originY | number(浮点数) | - | 0 | 空间(space)原点 Y 轴坐标。  
height | number(浮点数) | >0 | 200 | 空间(space)的高度，仅设置为空间(space)为**方形时有效**  
width | number(浮点数) | >0 | 200 | 空间(space)的宽度，仅设置为空间(space)为**方形时有效**  
radius | number(浮点数) | >0 | 233 | 空间(space)的半径，仅设置为空间(space)为**圆形时有效**  
polygonSides | number(无符号 32 位整数) | >2 | 12 | 空间(space)的边数，仅设置为空间(space)为**圆形时有效** ，因为空间(space)不能真正的设置为圆形，所以使用正多边形模拟圆形效果，从实际效果上看，边数为 12 时效果就很好了，边数太多会增大 CPU 计算开销  
elasticity | number(浮点数) | [0,1] | 1 | 空间(space)边界的弹性，值为 0.0 时不会产生弹跳，而值为 1.0 时会产生“完美”的弹跳。  
friction | number(浮点数) | >= 0 | 1 | 空间(space)边界的摩擦系数。Chipmunk 使用库仑摩擦模型，值为 0.0 表示无摩擦。  
touch | boolean | - | false | 表示是否可以使用手指触摸的方式移动刚体(body)，默认为 false  
crown | string | - | scale | 旋转表冠缩放空间(space)中的刚体(body)  
|  | - | gravity_up | 旋转表冠改变空间(space)中的重力大小  
|  | - | gravity_angle | 旋转表冠改变空间(space)中的重力方向  
scaleMax | number(浮点数) | >=100 | 110 | 空间(space)中的刚体(body)最大放大的百分比，默认最大放大 110%  
scaleMin | number(浮点数) | <=100 | 90 | 空间(space)中的刚体(body)最小缩小的百分比，默认最小缩小 90%  
scale | number(浮点数) | >0 | 100 | 将空间(space)中的刚体(body)缩放到指定百分比，默认为 100%  
running | boolean | - | true | 表示空间(space)是否是运行状态，当值为 false 时，不会进行任何计算  
shape | string | - | circle | 表示空间(space)是圆形  
|  | - | rect | 表示空间(space)是方形  
feature | string | - | planet | 表示特殊功能 planet，所有刚体(body)的重力方向指向空间(space)原点  
  
### BodyAttr

刚体属性对象，下面属性都为非必填。

属性 | 类型 | 范围 | 默认值 | 说明  
---|---|---|---|---  
shape | string |  | circle | 表示该刚体(body)绑定一个圆形形状(shape)  
|  |  | segment | 表示该刚体(body)绑定一个线段/条形状(shape)，可以用来做矩形  
|  |  | poly | 表示该刚体(body)绑定一个多边形形状(shape)，**不建议使用，性能很差** ，因为多边形的逻辑是由多个线段形状(shape)组合而成，所以一个四边型相当于 4 个线段形状(shape)  
originX | number(浮点数) | - | 0 | 刚体(body)原点 X 轴坐标。  
originY | number(浮点数) | - | 0 | 刚体(body)原点 Y 轴坐标。  
mass | number(浮点数) | >= 0 | 0 | 刚体(body)质量，碰撞计算时需要。  
height | number(浮点数) | >= 0 | 0 | 刚体(body)的高度，仅设置刚体(body)为**线段形状** 时有效  
width | number(浮点数) | >= 0 | 0 | 刚体(body)的宽度，仅设置刚体(body)为**线段形状** 时有效  
pivotX | number(浮点数) | - | - | 刚体(body)重心的 X 轴坐标，默认值为刚体(body)的中心，坐标轴的位置为以刚体中心为坐标轴原点的**笛卡尔坐标系**  
pivotY | number(浮点数) | - | - | 刚体(body)重心的 Y 轴坐标，默认值为刚体(body)的中心，坐标轴的位置为以刚体中心为坐标轴原点的**笛卡尔坐标系**  
velocityX | number(浮点数) | - | 0 | 刚体(body)在 X 轴的速度  
velocityY | number(浮点数) | - | 0 | 刚体(body)在 Y 轴的速度  
angularVelocity | number(浮点数) | - | 0 | 刚体(body)的旋转角速度，值大于 0 时是以刚体(body)重心顺时针旋转，值小于 0 时是以刚体(body)重心逆时针旋转。  
angle | number(浮点数) | - | 0 | 刚体(body)的旋转角度  
elasticity | number(浮点数) | 0-1 | 1 | 刚体(body)的弹性，值为 0.0 时不会产生弹跳，而值为 1.0 时会产生“完美”的弹跳。  
friction | number(浮点数) | >0 | 1 | 刚体(body)的摩擦系数。内部使用库仑摩擦模型，值为 0.0 表示无摩擦。  
name | string | - | item_N | 刚体(body)的名称，可以用来查找刚体，如果不设置，则会被设置为"item_" + 当前空间(space)中刚体(body)的编号。  
type | string | - | static | static 刚体(body) 不会受空间(space)和约束计算的影响，可以把它看为一堵墙或一个柱子，因为不会移动和旋转等，所以对性能的影响很小。  
|  |  | kinematic | kinematic 刚体(body) 只受代码逻辑的影响不受空间(space)计算的影响，不受重力影响，质量无限大，因此不会对与其他刚体(body)的碰撞或力做出反应。kinematic 刚体(body)通过设置速度来控制，这将导致它们移动。kinematic 刚体(body)的典型例子可能包括移动平台等。接触或连接到 kinematic 刚体(body)的刚体(body)永远不会进入休眠状态，所以对性能影响较大  
|  |  | 其他 | 普通刚体(body)，受空间(space)计算的影响。  
radius | number(浮点数) | >0 | 20 | 刚体(body)的半径，仅设置刚体(body)为**圆形** 时有效  
collisionType | number(无符号 32 位整数) | string | uint32_t：1-1000， string取值:  
oneWayUp, oneWayDown, oneWayLeft, oneWayRight | - | 刚体(body)碰撞类型，应用层可以设置一个值方便监听。 当使用 1-1000 的数值时，表示用户自定义的碰撞监听，js 端可以接收到返回的数据。 当使用 string 类型是，表示用户使用引擎内置的特殊碰撞方式的监听。   
oneWayUp：其他刚体(body)从上往下可以和本刚体发生碰撞，其他方向的刚体(body)会穿透过去。   
oneWayDown：其他刚体(body)从下往上可以和本刚体发生碰撞，其他方向的刚体(body)会穿透过去。  
oneWayLeft：其他刚体(body)从左往右可以和本刚体发生碰撞，其他方向的刚体(body)会穿透过去。   
oneWayRight：其他刚体(body)从右往左可以和本刚体发生碰撞，其他方向的刚体(body)会穿透过去。  
enableRotation | boolean | - | true | 刚体(body)碰撞/移动后，内部的子组件是否需要旋转，仅设置刚体(body)为**圆形** 时有效  
vertsCount | number(无符号 32 位整数) | >2 | - | 刚体(body)形状(shape)的顶点数量，仅设置刚体(body)为**多边形** 时有效  
verts | {x,y} 均为 number(浮点数) | - | - | 刚体(body)形状(shape)的顶点坐标值，仅设置刚体(body)为**多边形** 时有效  
variable | boolean | - | true | 刚体(body)是否会被一些通用逻辑影响，目前只对通用放大 scale 产生影响，后续可能会增加。variable 为 false 时，空间(space)属性 crown 为 scale 时，刚体(body)不受旋转表冠的影响  
pivotJoint | {x,y} 均为 number(浮点数) | - | {0,0} | 刚体(body)可以设置一个旋转静态约束关节，坐标轴的位置为以刚体中心为坐标轴原点的**笛卡尔坐标系(其他坐标系都是屏幕坐标系)** 。x, y 的值为 float 类型。  
dampedSpring | { p0_x, p0_y, p1_x, p1_y, restLength, stiffness, damping } 均为 number(浮点数) | - | { 0, 0, 0, 0, 0, 0, 10, } | 刚体(body)可以设置一个阻尼弹簧;   
p0_x , p0_y : 以刚体(body)中心为坐标轴原点的**笛卡尔坐标系(其他坐标系都是屏幕坐标系)，弹簧的一个端点。**   
p1_x , p1_y : 以空间(space)中心为坐标轴原点的**笛卡尔坐标系(其他坐标系都是屏幕坐标系)，弹簧的另一个端点。**   
restLength: 弹簧的复位长度。   
stiffness: 弹簧的刚性。   
damping: 弹簧的阻尼量。  
  
### BodyPosition

刚体在空间中的位置

名称 | 属性 | 必填 | 说明  
---|---|---|---  
x | number | 是 | 刚体在 x 轴的位置  
y | number | 是 | 刚体在 y 轴的位置  
  
### BodyVelocity

刚体在空间中的速度

名称 | 属性 | 必填 | 说明  
---|---|---|---  
x | number | 是 | 刚体在 x 轴的速度  
y | number | 是 | 刚体在 y 轴的位置  
  
## 事件

名称 | 参数 | 描述  
---|---|---  
change | - | 碰撞事件，当有刚体碰撞时，触发此回调  
  
## 示例

### 初始化
[code] 
    <template>
      <physics-engine id="space">
        <stack id="weather">
          <image></image>
        </stack>
    
        <stack id="kcal">
          <image></image>
          <text>calorie</text>
        </stack>
      </physics-engine>
    </template>
    
    <script>
      // space 属性参数
      let spaceConfig = {
        space: {
          //重力方向
          gravityX: 0,
          gravityY: 199,
          crown: 'scale',
          scaleMax: 105,
          scaleMin: 80,
          friction: 0.1,
        },
      }
    
      // 刚体属性参数
      let bodyConfig = {
        init: [
          {
            shape: 'circle', //圆形
            originX: 348, // 初始X轴坐标
            originY: 200, // 初始Y轴坐标
            radius: 60, // 圆形半径
            mass: 1, // 刚体质量
            elasticity: 0.3, // 弹性系数
            friction: 0.1,
            name: 'weather', // 刚体名称
          },
          {
            shape: 'segment', //条形
            originX: 180, // 初始X轴坐标
            originY: 385, // 初始Y轴坐标
            width: 143, // 宽度143
            height: 0, // 高度为0 ，表示为水平方向，高度通过下面的radius来设置
            radius: 39, // 半径为45意味着height为90
            mass: 1, // 刚体质量
            elasticity: 0.3, // 弹性系数
            friction: 0.1,
            name: 'kcal', // 刚体名称
          },
        ],
      }
    
      export default {
        onShow() {
          this.$element('space').initSpace(JSON.stringify(spaceConfig)) //初始化物理引擎space参数
          this.$element('space').initBody(JSON.stringify(bodyConfig)) //初始化物理引擎刚体参数
          this.spaceRunning()
        },
        spaceRunning() {
          // 将刚体running 属性设置为true，使物理引擎运行起来
          this.$element('space').setSpaceAttr(
            JSON.stringify({
              space: {
                running: true,
              },
            })
          )
        },
      }
    </script>
[/code]

复制代码

### 监听碰撞事件

碰撞回调
[code] 
    <template>
      <physics-engine  @change="onCollision" />
    </template>
    <script>
      export default {
        onCollision(evt) {
          let event = JSON.parse(evt["info"])
          }
      }
    </script>
[/code]

复制代码

返回数据分为两种，根据 collisionType 的类型来区分：

  * 用户自定义碰撞，返回碰撞监听编号
  * 系统内置碰撞类型，返回特殊的碰撞状态

当刚体(body)的 collision_type 为用户自定义的碰撞监听时，以上示例中 event 的值为：
[code] 
    {
      x: XXX //碰撞点的X轴坐标
      y: XXX //碰撞点的Y轴坐标
      collision_type: XXX // 用户自定义的碰撞监听编号，1-1000
      bodyA: XXX // 碰撞刚体A的名称
      bodyB: XXX // 碰撞刚体B的名称
    }
[/code]

复制代码

当刚体(body)的 collision_type 为系统内置(onway_up/onway_down/onway_left/onway_right)的碰撞监听时，onCollision 将会在两个刚体(body)开始碰撞和分离时分别收到 event。

当刚体(body)发生碰撞时：
[code] 
    {
        bodyA: XXX // 碰撞刚体A的名称
        bodyB: XXX // 碰撞刚体B的名称
        collisionType: XXX // 系统内置的碰撞监听string名称
        action： "colliding" // 两个刚体碰撞开始
        flag： XXX // 表示两个刚体是否要发生碰撞，false表示需要发生碰撞，true表示不需要发生碰撞，两个刚体会发生穿透
    }
[/code]

复制代码

当刚体(body)分离时：
[code] 
    {
        bodyA: XXX // 碰撞刚体A的名称
        bodyB: XXX // 碰撞刚体B的名称
        collisionType: XXX // 系统内置的碰撞监听string名称
        action： "separate"// 两个刚体开始分离
    }
[/code]

复制代码

**注意：当刚体碰撞到空间(space)的边缘时，bodyB 为"edge"。**

上一篇

[animated-vector](</component/basic/animated-vector/>)

下一篇

[系统风格组件](</component/global/overview/>)