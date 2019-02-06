<template>
  <div id="login">
    <!--头部-->
    <div class="head">
      <div class="main">
        <!--<img src="../../assets/img/homelogo.png" alt="">-->
        <p>欢迎登录</p>
      </div>
    </div>
    <!--内容-->
    <div class="auto">
      <div class="box">
        <div class="nav">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
.head{
  background: #f00;
  width: 100%;
}
  .head .main{
    height: 90px;
    width: 995px;
    margin: 0 auto;
    background: blue;
  }
  .auto{
    background: #ccc;
    width: 100%;
    height: 600px;
    padding-top: 90px;
  }
  .auto .box{
    margin: 0 auto;
    width: 995px;
    height: 490px;
    background: #000;
  }
</style>
