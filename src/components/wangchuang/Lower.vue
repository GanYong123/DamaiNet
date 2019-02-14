<template>
  <!--公共页-->
  <div class="low">
    <div class="low-bottom">
      <p class="low-text">
        <a href="#">公司介绍</a>|
        <a href="#">品牌识别</a>|
        <a href="#">品牌识别</a>|
        <a href="#">品牌识别</a>|
        <a href="#">品牌识别</a>|
        <a href="#">品牌识别</a>|
        <a href="#">品牌识别</a>|
        <a href="#">品牌识别</a>|
        <a href="#">大品牌识别</a>
      </p>
    </div>
    <div class="coxb">
      <p class="olat">
        <a href="#">京ICP证031057号</a>|
        <a href="#">京ICP备11043884号</a>|
        <a href="#">京公网安备11010102000430号</a>|
        <a href="#">广播电视节目制作经营许可证
          (京)字第02253号</a>
      </p>
      <p class="poit">
        <a href="#">网络文化经营许可证
          京网文[2016]3438-413号</a>|
        <a href="#">营业性演出许可证
          京市演888号</a>
      </p>
      <p class="copy">
        <a href="#">北京阿博文化发展有限公司 版权所有</a>
        <a href="#">大麦网</a>
        <a href="#">Copyright 2003-2018 All Rights Reserved</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lower'
}
</script>

<style scoped>
  .low{
    background: #ccc;
  }
.low-bottom{
  display: block;
  width: 996px;
  margin: 0 auto;
}
.low-bottom p{
  display: block;
}
.low-bottom .low-text{
  font-size: 14px;
}
.low-bottom p a{
  margin:17px;
  cursor: pointer;
  color: #000;
}
  .coxb{
    display: block;
    width: 996px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 75px;
  }
  .coxb p{
    display: block;
    text-align: center;
  }
  .coxb .poit{
    display: block;
    margin-top: 20px;
    font-size: 14px;
  }
  .coxb .olat{
    font-size: 14px;
  }
  .coxb .poit a{
    cursor: pointer;
  }
  .coxb p a{
    cursor: pointer;
    color: #000;
  }
  .coxb .copy{
    display: block;
    margin-top: 20px;
    font-size: 12px;
  }
</style>
