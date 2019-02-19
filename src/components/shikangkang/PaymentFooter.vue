<template>
  <div id="foot">
    <ul>
      <li>公司介绍</li>
      <li>品牌识别</li>
      <li>企业荣誉</li>
      <li>隐私声明</li>
      <li>联系及合作</li>
      <li>招聘信息</li>
      <li>网站地图</li>
      <li>友情链接</li>
      <li>公司大事记</li>
    </ul>
    <p>京CP证031086号京CP备1013248号|京公安网11032040599500349号|广播电视节目制作经营许可证(京)字第032256号</p>
    <p>网络文化经营许可证京网文[201813243534号|营业性演出许可证京市演出888号</p>
    <p>北京阿博文化有限公司 大麦网Copyright 2008-2018 All Right Reserve</p>
  </div>
</template>

<script>
export default {
  name: 'PaymentFooter'
}
</script>

<style scoped lang="less">
  #foot{
    width: 1200px;
    margin: 0 auto;
    font-size: 12px;
    padding-top: 36px;
    ul{
      height: 12px;
      margin-left: 136px;
      margin-bottom: 70px;
      li{
        width: 100px;
        color: #1b1b1b;
        float: left;
        border-right: 1px solid #1b1b1b;
        text-indent: 28px;
      }
    }
    p{
      height: 32px;
      color: #495060;
      width: 100%;
      text-align:center;
    }
  }
</style>
