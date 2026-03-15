# list

# list

更新时间：2025/06/19 19:54:46

列表视图容器，仅支持[`<list-item>`](</component/container/list-item>)子组件，支持[通用属性](</component/common/common-attributes>)，支持[通用样式](</component/common/common-styles>)

### 属性

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
type | normal|fisheye|grid | normal | 否 | 设置列表的的布局方式，默认为普通的 list 布局；fisheye 是类似鱼眼镜头效果布局；grid 是网格布局。该属性不可动态变更  
scrollbar | `<boolean>` | false | 否 | 是否启用滚动条  
title | `<boolean>` | false | 否 | 值为 true <list-item> 的第一个元素将会作为 list 的标题，标题位置固定在 list 开头，向上滑动时标题会渐渐消失（透明度逐渐变为完全透明)  
circular | `<boolean>` | false | 否 | 是否循环展示 <list-item>, 值为 true 时部分滚动事件不可用。  
alignmentnum | `<number>` | 3 | 否 | 鱼眼 list 一屏幕 <list-item> 对齐数量，type 为 fisheye 时生效，设置范围：3-7，超出范围则自动设置为默认值  
bounces | `<boolean>` | true | 否 | 是否启用回弹  
  
### 样式

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
flex-direction | column | row | column | 否 | -  
columns | `<number>` | 1 | 否 | list 显示列数  
  
### 事件

名称 | 参数 | 描述  
---|---|---  
scrollbottom | - | 列表滑动到底部  
scrolltop | - | 列表滑到到顶部  
scrollindex | {first, last} | 返回 list 可视范围的索引范围。first:可视范围第一个 item 的索引；last:可视范围最后一个 item 的索引。  
  
### 方法

名称 | 参数 | 描述  
---|---|---  
scrollTo | Object | list 滚动到指定 item 位置  
  
**scrollTo 的参数说明:**

名称 | 类型 | 是否必选 | 默认值 | 备注  
---|---|---|---|---  
index | number | 是 | 无 | list 滚动的目标 item 位置  
behavior | smooth|instant|auto | 否 | auto | 是否平滑滑动，支持参数 smooth (平滑滚动)，instant (瞬间滚动)，默认值 auto，效果等同于 instant  
  
# list列表视图容器

list组件主要用于长列表或者屏幕滚动等效果时用来做页面布局。

列表吸顶
[code]
    <script>
    export default {
      data() {
        return {
          count: Array.from({ length: 20 }, (v, i) => i),
          title: 'list ceiling'
        }
      }
    }
    </script>
    
    <template>
      <div class="flex flex-col">
        <list class="list" bounces="false">
          <list-item type="ceiling">
            <text class="w-full h-40 text-center text-[50px] bg-[#0f2027] text-white border-b border-[#2c5364]">{{ title }}</text>
          </list-item>
          <list-item type="item" for="{{ count }}">
            <text class="w-full h-40 text-center text-[50px] bg-[#203a43] text-white border-b border-[#2c5364]">{{ $item }}</text>
          </list-item>
        </list>
        <text class="fixed top-0 left-0 pointer-events-none w-full h-40 text-center text-[50px] bg-[#0f2027] text-white">{{ title }}</text>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

您当前浏览器不支持HTMT5视频播放

您当前浏览器不支持HTMT5视频播放

列表编辑
[code]
    <script>
    export default {
      data() {
        return {
          count: Array.from({ length: 10 }, (v, i) => {
            return {
              text: i,
              draggable: false
            }
          }),
          edit: false
        }
      },
      deleteHandler(index) {
        this.count.splice(index, 1)
      },
      changeIndexHandler(evt) {
        const { src, dest } = evt
        const item = this.count[src]
        this.count.splice(src, 1)
        this.count.splice(dest, 0, item)
        item.draggable = false
        this.edit = false
      },
      dragHandler($item) {
        $item.draggable = true
        this.edit = true
      },
      dragEnd($item) {
        $item.draggable = false
      }
    }
    </script>
    
    <template>
      <list class="bg-[#232526]" edit="{{ edit }}" onindexchange="changeIndexHandler">
        <list-item
          type="item"
          draggable="{{ $item.draggable }}"
          onlongpress="dragHandler($item)"
          ontouchend="dragEnd($item)"
          for="{{ count }}"
        >
          <text class="w-full h-40 border-b border-[#414345] text-white text-center text-[50px]">{{ $item.text }}</text>
          <text class="del bg-[#ff4d4f] p-[20px] text-white text-center text-[50px]" slot="right" onclick="deleteHandler($idx)">delete</text>
        </list-item>
      </list>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

您当前浏览器不支持HTMT5视频播放

您当前浏览器不支持HTMT5视频播放

鱼眼列表
[code]
    <script>
    export default {
      data() {
        return {
          count: Array.from({ length: 20 }, (v, i) => i),
          alignmentnum: 4
        }
      }
    }
    </script>
    
    <template>
      <list class="bg-white" type="fisheye" alignmentnum="{{ alignmentnum }}">
        <list-item type="item" class="flex items-center justify-center" for="{{ count }}">
          <text class="w-[680px] h-40 text-[50px] text-center bg-[#e8f3fe] text-[#7dbcfc]">{{ $item }}</text>
        </list-item>
      </list>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

您当前浏览器不支持HTMT5视频播放

您当前浏览器不支持HTMT5视频播放

网格列表
[code]
    <script>
    export default {
      data() {
        return {
          count: Array.from({ length: 20 }, (v, i) => i)
        }
      }
    }
    </script>
    
    <template>
      <list class="wrapper" type="grid">
        <list-item
          type="item"
          class="list-item {{ $idx % 2 === 0 ? '' : 'list-odd' }}"
          for="{{ count }}"
        >
          <text class="text">{{ $item }}</text>
        </list-item>
      </list>
    </template>
    
    <style>
    @tailwind utilities;
    
    .wrapper {
      columns: 3;
    }
    .list-item {
      height: 180px;
      @apply flex items-center justify-center;
      background-color: #e8f3fe;
      column-span: 1;
    }
    .text {
      @apply text-[50px] text-center;
      color: #7dbcfc;
    }
    .list-odd {
      background-color: #6a88e6;
      @apply text-white;
    }
    </style>
    
[/code]

复制代码

您当前浏览器不支持HTMT5视频播放

您当前浏览器不支持HTMT5视频播放

列表加载更多
[code]
    <script>
    const default_len = 20
    export default {
      data() {
        return {
          count: Array.from({ length: default_len }, (v, i) => i),
          defaultLen: default_len
        }
      },
      loadMoreHandler() {
        setTimeout(() => {
          this.count.push(this.count.length)
        }, 500)
      }
    }
    </script>
    
    <template>
      <list class="bg-[#232526]" onscrollbottom="loadMoreHandler">
        <list-item type="item" for="{{ count }}">
          <text class="item {{ $idx >= defaultLen ? 'added' : '' }}">{{
            $idx
          }}</text>
        </list-item>
      </list>
    </template>
    
    <style>
    @tailwind utilities;
    text {
      @apply w-full h-40 text-center text-[50px] text-white;
      border-bottom: 1px solid #414345;
    }
    .added {
      @apply bg-[#203a43];
      border-color: #2c5364;
    }
    </style>
    
[/code]

复制代码

您当前浏览器不支持HTMT5视频播放

您当前浏览器不支持HTMT5视频播放

基本用法
[code]
    <script>
    export default {
      data() {
        return {
          count: Array.from({ length: 20 }, (v, i) => i)
        }
      }
    }
    </script>
    
    <template>
      <list class="flex-col bg-white">
        <list-item type="item" class="list-item" for="{{ count }}">
          <text class="w-full h-40 text-[50px] text-center text-white border-b border-[#414345] bg-[#232526]">{{ $item }}</text>
        </list-item>
      </list>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

您当前浏览器不支持HTMT5视频播放

您当前浏览器不支持HTMT5视频播放

上一篇

[div](</component/container/div/>)

下一篇

[list-item](</component/container/list-item/>)