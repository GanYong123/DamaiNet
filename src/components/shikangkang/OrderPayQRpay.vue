<template>
    <div id="wechat">
      <Header></Header>
      <div id="cont" class="clear">
        <div class="cont-left">
          <p>订单将在{{time}}后关闭请及时付款</p>
          <img :src = "imgurl"/>
          <p>{{paywaytxt}}</p>
        </div>
        <div class="cont-right">
          <h5>大麦网订单</h5>
          <p>支付订单号：{{obj.val1}}</p>
          <p>商品名称：{{obj.val2}}</p>
          <p>订单金额：￥<span>{{obj.val3}}</span></p>
        </div>
      </div>
      <PaymentFooter></PaymentFooter>
    </div>
</template>

<script>

import Header from '../common/Header'
import PaymentFooter from './PaymentFooter'
export default {
  name: 'Wechat-payment',
  data () {
    return {
      obj: '',
      time: '',
      paywaytxt: '请使用微信扫一扫完成支付',
      imgurl: '../../../static/image/wechartpay_03.jpg',
      payway: ''
    }
  },
  // 页面载入完成后出现倒计时效果
  mounted () {
    var t = 7201
    var self = this
    var clock = setInterval(function () {
      t--
      if (t === 0) {
        clearInterval(clock)
      }
      let oH = parseInt(t / 3600)
      let oM = parseInt(t % 3600 / 60)
      let oS = parseInt(t % 60)
      self.time = Numfn(oH) + ':' + Numfn(oM) + ':' + Numfn(oS)
      console.log(self.time)
    }, 1000)
    // 补零函数
    function Numfn (num) {
      if (num < 10 && num >= 0) {
        return '0' + num
      } else if (num >= 10) {
        return num
      }
    }
  },
  // 路由进入前获取本地数据 渲染订单信息和支付二维码
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.obj = JSON.parse(localStorage.getItem('ordemsg'))
      vm.payway = localStorage.getItem('payway')
      if (vm.payway === 'weixin') {
        vm.paywaytxt = '请使用微信扫一扫完成支付'
        vm.imgurl = '../../../static/image/wechartpay_03.jpg'
      } else {
        vm.paywaytxt = '请使用支付宝扫一扫完成支付'
        vm.imgurl = '../../../static/image/zhifubao.jpg'
      }
    })
  },
  beforeRouteLeave (to, form, next) {
    if (this.clock) {
      window.clearInterval(this.clock)
      this.t = 0
    }
    next()
  },
  components: {
    Header,
    PaymentFooter
  }
}
</script>

<style scoped lang="less">
#wechat{
  width:100%;
  #cont{
    width: 1130px;
    padding: 58px 0 0 70px;
    margin: 0 auto;
    background:#fff;
    .cont-left{
      font-size: 12px;
      float: left;
      width: 372px;
      img{
        margin-bottom: 6px;
        margin-left: 27px;
      }
      p{
        height: 74px;
        line-height: 74px;
      }
      p:nth-of-type(2){
        text-indent: 28px;
      }
    }
   .cont-right{
     float: left;
     font-size: 16px;
     line-height: 40px;
     padding-top: 22px;
     h5{
       font-size: 16px;
       font-weight: normal;
     }
     p{
       span{
         color: #ff3c1b;
       }
     }
   }
  }
}
</style>
