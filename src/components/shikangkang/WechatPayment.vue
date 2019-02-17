<template>
    <div id="wechat">
      <Header></Header>
      <div id="cont" class="clear">
        <div class="cont-left">
          <p>订单将在2小时后关闭请及时付款</p>
          <img src="../../assets/img/wechartpay_03.jpg"/>
          <p>请使用微信扫一扫完成支付</p>
        </div>
        <div class="cont-right">
          <h5>大麦网订单</h5>
          <p>支付订单号：440000198707185781</p>
          <p>商品名称：放心好用的好产品</p>
          <p>订单金额：￥<span>61.551</span></p>
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
