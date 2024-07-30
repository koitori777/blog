---
title: vitepress踩坑记录
---
# vitepress踩坑记录

## 图片fallback处理的一系列问题
博客导航页对icon图片进行fallback处理，依赖img标签的error事件
- 加载icon失败则隐藏img容器
  ```vue
  <img v-if="!imgLoadError" :src="iconUrl" @error="handleError"></img>

  <script setup lang="ts">
    const handleError = () => {
        imgLoadError.value = true
    }
  <script>
  ```
问题：开发环境下正常，打包后发现重复刷新几次页面后，fallback失效。如果禁用缓存则正常，猜测是缓存原因

原因：404的资源也会被浏览器缓存（__开发环境vite默认禁用缓存__），图片被缓存时再次加载失败不会再触发error事件

解决方案：
- 先尝试给图片添加时间戳，不使用缓存
  ```js
  `$1/favicon.ico?t=${Date.now()}`
  ```
  结果依然无效，查看请求路径发现生产环境下请求时间戳一直不变，猜测是ssr渲染导致的缓存问题
- 查看vue组件代码，添加时间戳这部分代码放在setup顶层，因此在ssr环境下时间戳由ssr渲染时计算，而浏览器如果启用缓存，则会导致时间戳不变
- 最终时间戳添加放在客户端渲染代码内，在onMounted内添加
  ```vue
  <script setup lang="ts">
  onMounted(() => {
    if (iconUrl.value === '') {
        iconUrl.value = link.value.replace(/^(https?:\/\/[^\/]+)\/.*/, `$1/favicon.ico?t=${Date.now()}`)
    }
  })
  </script>
  ```