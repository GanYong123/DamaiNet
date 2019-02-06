<template>
  <div id="home">
    <Headers></Headers>
    <!-- <Search></Search> -->
    <Footer></Footer>
  </div>
</template>

<script>
// import Search from '@/components/shenyintao/Search'
import Headers from '../common/Header'
import Footer from '../common/Footer'
export default {
  name: 'Home',
  components: {
    // Search,
    Headers, // 公共头部页面，个别页面不需要使用，所以这里当做组件引入。
    Footer // 公共底部页面，个别页面不需要使用，所以这里当做组件引入。
  }
}
</script>

<style scoped lang="less">

</style>
