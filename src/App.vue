<template>
  <div id="app">
    <keep-alive include='Home'>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  body{
    background: #f5f5f5;
  }
</style>
