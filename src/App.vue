<template>
  <div id="app">
    <!-- 这是一个两层结构，上面是路由的部分，下面是导航footer -->
    <!-- 显示路由组件 -->
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>

  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// 映射成标签
export default {
  components: {
    FooterGuide
    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5

</style>
