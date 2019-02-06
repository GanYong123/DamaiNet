<template>
<<<<<<< HEAD
  <header id="Headers">
    <div class="head-warp">
      <div class="Login-hint">
        Hi，欢迎来大麦[
        <router-link tag="a" to="/detail" class="login-btn">登录</router-link>
        <router-link tag="a" to="" class="register">注册</router-link>
        ]
        <span class="my" @mouseenter="ShiftIn()"  @mouseleave="ShiftOut()">
          我的大麦<i class="iconfont icon-xiala-"></i>
          <transition name="Fade">
            <ul v-if="isShow">
              <li>个人信息</li>
              <li>订单管理</li>
            </ul>
          </transition>
        </span>
      </div>
      <ul class="navigation">
        <li @mouseenter="Show($event)" v-for="(Item , index) in Navlist" :key="index">
          <a href="#">{{Item}}</a>
          <i v-if="index === 2 || index === 3" class="iconfont icon-xiala-"></i>
        </li>
      </ul>
    </div>
=======
  <header id="head">
    公共头部组件
>>>>>>> 446f398aecec549b325cea44d7d4b554e6595f8d
  </header>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {
      Navlist: ['大麦网微信', '手机版', '客户服务', '网站导航', 'English'],
      isShow: false, // select菜单的显示隐藏
      Timer: null // 作为清除定时器的对象
    }
  },
  methods: {
    Show (ev) {
      console.log(ev.currentTarget) // 找到当前的节点
    },
    ShiftIn (ev) { // 移入时
      clearTimeout(this.Timer)
      this.isShow = true
    },
    ShiftOut () { // 移出时
      clearTimeout(this.Timer)
      this.Timer = setTimeout(() => {
        this.isShow = false
      }, 100)
    }
  }
}
</script>

<style lang="less" scoped>
#Headers{
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  color: #495060;
  .head-warp{
    width: 1205px;
    height: 34px;
    line-height: 34px;
    font-size: 12px;
    margin: 0 auto;
    .Login-hint{
      float: left;
      span{
        cursor: pointer;
      }
      .login-btn{
        margin-right: 9px;
        color: #ff3c1b;
      }
      .register{
        color: #1b1b1b;
      }
      .my{
        margin-left: 10px;
        color: #1b1b1b;
        position: relative;
        i{
          font-size: 13px;
          display: inline-block;
          color: #000000;
        }
        ul{
          position: absolute;
          left: -34.5px;
          top: 30px;
          width: 125px;
          height: 76px;
          text-align: center;
          border-radius: 4px;
          box-shadow: 0px 0px 5px 1px #ccc;
          overflow: hidden;
          background: #ffffff;
          li{
            height: 38px;
            line-height: 38px;
            transition: 1s;
          }
          li:hover{
            color: blue;
          }
        }
      }
    }
  }
  .navigation{
    margin-right: 24px;
    float: right;
    li{
      float: left;
      margin-right: 26px;
      a{
        color: #1b1b1b;
      }
      i{
        font-size: 13px;
        display: inline-block;
        color: #000000;
      }
    }
  }
}
/* select菜单的过度动画 */
.Fade-enter-active,.Fade-leave-active{
  transition: all .5s ease-out;
}
.Fade-enter{
  opacity: 0;
}
.Fade-enter-active{
  animation: name .4s;
}
@keyframes name{
  0%{
    height: 0px;
  }
  100%{
    height: 76px;
  }
}
.Fade-leave{
  opacity: 1;
}
.Fade-leave-active{
  opacity: 0;
  animation: names .4s;
}
@keyframes names{
  0%{
    height: 76px;
  }
  100%{
    height: 0px;
  }
}
</style>
