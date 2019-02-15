<template>
  <div id="login">
    <!--头部-->
    <div class="head">
      <div class="main">
        <!--头部内容-->
        <div class="pols">
          <img src="../../assets/img/homelogo.png" alt="" class="logo">
          <div class="moub">
            <p>欢迎登录</p>
          </div>
        </div>
      </div>
    </div>
    <!--内容-->
    <div class="auto">
      <div class="box">
        <!--中间内容区-->
        <div class="nav">
          <div class="log-pic">
            <img src="../../assets/img/log-two.jpg" class="log">
          </div>
          <!--登录-->
          <div class="sign">
            <div class="top">
              <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                <el-tab-pane label="账户登录" name="first">
                  <div class="poae">
                    <form class="form" action="">
                      <div class="tel">
                        <div class="pic-log">
                          <i>图</i>
                        </div>
                        <input id="name" type="text" placeholder="请输入手机号码"/>
                        <!--<span id="labe" style="display: none;">输入错误，请输入11位手机号</span>-->
                      </div>
                      <div class="pass">
                        <div class="pic-log">
                          <i>片</i>
                        </div>
                        <input type="password" placeholder="请输入登录密码"/>
                        <!--<span id="pass" style="display: none;">输入错误，请输入6-12位</span>-->
                      </div>
                      <div class="sig-login">
                        <button type="submit" class="pass-login" @click="passlog">登录</button>
                      </div>
                      <div id="form-botton">
                        <div class="bot-left">
                          <input type="checkbox" class="check"/>
                          <span>下次登录</span>
                        </div>
                        <div class="bot-right">
                          <p>忘记密码？<a href="#">立即注册</a></p>
                        </div>
                      </div>
                      <div class="posl">
                        <p>其他登录:<i>图</i></p>
                      </div>
                    </form>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="短信快捷登录" name="second">短信快捷登录</el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Lower></Lower>
  </div>
</template>

<script>
import Lower from './Lower'
export default {
  name: 'Login',
  data () {
    return {
      activeName2: 'first'
    }
  },
  components: {
    Lower
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    laol () {
    },
    passlog () {
      // alert(111)
    }
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
  /*border-left: 1px solid #ccc;*/
  position: absolute;
  margin-top: 20px;
}
.pols{
  height: 90px;
}
  .auto{
    background: #ccc;
    width: 100%;
    padding-top: 90px;
  }
  .auto .box{
    margin: 0 auto;
    width: 995px;
    height: 490px;
  }
 .log-pic{
   float: left;
 }
 .nav{
   overflow: hidden;
 }
 .log{
    width: 530px;
  }
  .auto .nav .sign{
    background: #fff;
    width: 460px;
    margin-left: 5px;
    float: left;
    height: 323px;
  }
  .auto .nav .sign span{
    padding: 5px 18px;
    /*border-right: 1px solid #ccc;*/
    border-bottom: 1px solid #fff;
    color: red;
    font-size: 12px;
  }
.auto .nav .sign a{
  font-size: 12px;
  color: #000;
  margin-left: 3px;
  border: 1px solid #ccc;
  padding:5px 18px;
  background: #f7f7f7;
  border-radius: 4px;
}
.auto .nav .top{
  height: 25px;
}
.auto .nav .sign .poae .tel{
  border: 1px solid #ccc;
  margin-left:25px;
  margin-top: 20px;
  border-radius: 4px;
  height: 35px;
  width: 401px;
}
.auto .nav .sign .poae .tel input{
  width: 350px;
}
.auto .nav .sign .poae .pass{
  border: 1px solid #ccc;
  margin-left:25px;
  margin-top: 20px;
  border-radius: 4px;
  height: 35px;
  width: 401px;
}
.auto .nav .sign .poae .pass input{
  width: 350px;
}
.auto .nav .sign .poae .tel .pic-log{
  height: 36px;
  width: 26px;
  border-right: 1px solid red;
  display: inline-block;
  position: relative;
}
.auto .nav .sign .poae .tel i{
  line-height: 36px;
}
.auto .nav .sign .poae .pass .pic-log{
  height: 36px;
  width: 26px;
  border-right: 1px solid red;
  display: inline-block;
  position: relative;
}
.auto .nav .sign .poae .pass i{
  line-height: 36px;
}
.auto .nav .sign .poae input{
  margin-top: 9px;
  font-size: 12px;
  position: absolute;
  border: none;
}
.auto .nav .sign .poae .sig-login button{
  /*margin:25px;*/
  background: red;
  margin-left: 25px;
  margin-top: 25px;
  border-radius: 4px;
  height: 40px;
  width: 401px;
  border: none;
  color: #fff;
  cursor: pointer;
}
.auto .nav .sign .poae #form-botton{
  overflow: hidden;
  margin: 0 25px;
  width: 401px;
}
.auto .nav .sign .poae #form-botton .bot-left span{
  color: #000;
  border: 0;
  float: left;
}
.auto .nav .sign .poae #form-botton .bot-right p{
  font-size: 12px;
  margin-top: 5px;
  float: right;
}
.auto .nav .sign .poae #form-botton .bot-right p a{
  border: none;
  background: none;
  font-size: 12px;
  color: red;
  padding: 0;
}
.auto .nav .sign .poae .posl{
  font-size: 12px;
  margin-left: 25px;
}
</style>
