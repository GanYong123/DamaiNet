<template>
  <div id="regis">
    <!--头部-->
    <div class="head">
      <div class="main">
        <div class="logo-reg">
          <img src="../../assets/img/homelogo.png" alt="" class="logo">
          <div class="moub">
            <p>账户注册</p>
          </div>
        </div>
      </div>
    </div>
    <!--内容-->
    <div class="auto">
      <div class="box">
        <div class="nav">
          <div class="honp">
            <div class="pic-log">
              <i class="iconfont icon-user"></i>
            </div>
            <input type="text" placeholder="请输入手机号"/>
          </div>
          <div class="honp-pass">
            <div class="pic-list">
              <i class="iconfont icon-mima"></i>
            </div>
            <input type="password" placeholder="请输入登录密码"/>
          </div>
          <div class="honp-loat">
            <div class="pic-lblp">
            <i class="iconfont icon-mima"></i>
            </div>
            <input type="password" placeholder="请确定登录密码"/>
          </div>
          <div class="cofie">
            <div class="verif">
            <div class="ver-pic">
              <i class="iconfont icon-xinxi"></i>
            </div>
            <input type="tel" placeholder="请输入验证码"/>
          </div>
          <span class="code">获取验证码</span>
          </div>
          <div class="sig-login">
            <button type="submit" class="pass-login">登录</button>
          </div>
        </div>
      </div>
    </div>
    <!--顶部-->
    <Lower></Lower>
  </div>
</template>

<script>
import Lower from './Lower'
export default {
  name: 'Register',
  components: {
    Lower
  }
}
</script>

<style scoped>
  .head{
    width: 100%;
  }
  .head .main{
    height: 90px;
    width: 995px;
    margin: 0 auto;
  }
  .head .main .logo{
    width: 200px;
    height: 73px;
    margin: 8px;
    position: absolute;
  }
  .head .main p{
    font-size: 20px;
    text-align: center;
    line-height: 55px;
  }
  .head .main .moub{
    width: 130px;
    margin-left: 330px;
    border-left: 1px solid #ccc;
    position: absolute;
    margin-top: 20px;
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
    background: #fff;
  }
  .auto .box .nav{
    padding-top: 68px;
  }
  .auto .box .nav .honp{
     border: 1px solid red;
     margin: 0 auto;
     width: 600px;
     border-radius: 4px;
   }
  .auto .box .nav .verif{
    border: 1px solid #ccc;
    /*margin-top: 30px;*/
    margin-left: 198px;
    width: 325px;
    float: left;
    border-radius: 4px;
  }
  .auto .box .nav .honp-pass{
    border: 1px solid red;
    margin: 0 auto;
    margin-top: 32px;
    width: 600px;
    border-radius: 4px;
  }
  .auto .box .nav .honp-loat{
    border: 1px solid red;
    margin: 0 auto;
    margin-top: 32px;
    width: 600px;
    border-radius: 4px;
  }
  .auto .box .nav .honp input{
    border: none;
    height: 35px;
    font-size: 12px;
    position: absolute;
  }
  .auto .box .nav .verif input{
    border: none;
    height: 26px;
    font-size: 12px;
    margin-top: 2px;
    position: absolute;
  }
  .auto .box .nav .honp-pass input{
    border: none;
    height: 35px;
    font-size: 12px;
    position: absolute;
  }
  .auto .box .nav .honp-loat input{
    border: none;
    height: 35px;
    border-left: 1px solid red;
    font-size: 12px;
    position: absolute;
  }
  .auto .box .nav .honp-pass input{
    height: 35px;
    border-left: 1px solid red;
    font-size: 12px;
    position: absolute;
  }
  .auto .box .nav .honp input{
    height: 35px;
    border-left: 1px solid red;
    font-size: 12px;
    position: absolute;
  }
  .auto .box .nav .honp-pass .pic-list{
    height: 36px;
    width: 26px;
    /*background: #ccc;*/
    display: inline-block;
    position: relative;
    text-align: center;
  }
  .auto .box .nav .honp-loat .pic-lblp{
    height: 36px;
    width: 26px;
    display: inline-block;
    position: relative;
    text-align: center;
  }
  .auto .box .nav .verif .ver-pic{
    height: 30px;
    width: 26px;
    text-align: center;
    display: inline-block;
    position: relative;
  }
  .auto .box .nav .verif input{
    border-left: 1px solid red;
    position: absolute;
  }
  .auto .box .nav .honp .pic-log{
    height: 36px;
    width: 26px;
    text-align: center;
    display: inline-block;
    position: relative;
  }
  .auto .box .nav .honp-pass .pic-list i{
    line-height: 36px;
  }
  .auto .box .nav .honp .pic-log i{
     line-height: 36px;
   }
  .auto .box .nav .honp-loat .pic-lblp i{
    line-height: 36px;
  }
  .auto .box .nav .verif .ver-pic i{
    line-height: 29px;
  }
  .auto .box .nav .cofie{
    display: block;
    overflow: hidden;
    margin-top: 30px;
  }
  .auto .box .nav .cofie span{
    cursor: pointer;
  }
  .auto .box .nav .cofie .code{
    font-size: 12px;
    border: 1px solid #ccc;
    padding: 7px;
    margin-left: 27px;
    border-radius: 4px;
    float: left;
  }
  .auto .box .nav .sig-login button{
    background: red;
    width: 600px;
    margin-left: 198px;
    margin-top: 25px;
    border-radius: 4px;
    height: 40px;
    border: none;
    color: #fff;
    cursor: pointer;
  }
</style>
