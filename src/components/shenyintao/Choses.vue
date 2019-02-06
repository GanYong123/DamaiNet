<template>
  <div id="choses">
    <ul class="chosesList clear">
      <router-link to="/" tag="li">首页</router-link>
      <router-link to="/sports" tag="li">体育</router-link>
      <router-link to="/classicalDance" tag="li">舞蹈古典</router-link>
      <router-link to="/parenting" tag="li">亲子</router-link>
      <router-link to="/rock" tag="li">摇滚</router-link>
      <router-link to="/opera" tag="li">戏剧</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Choses'
}
</script>

<style scoped lang="less">
  @import "~@/assets/less/middle";
  #choses{
    width: 1200px;
    margin: 0 auto;
    background: #fff;
    .chosesList{
      li{
        float: left;
        width: 90px;
        height: 56px;
        line-height: 56px;
        text-align: center;
        font-size: 12px;
        cursor: pointer;
        &:hover{
          color: deepskyblue;
        }
      }
    }
  }
</style>
