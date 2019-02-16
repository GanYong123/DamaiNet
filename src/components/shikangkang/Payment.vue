<template>
    <div id="payment">
      <Headers></Headers>
      <div id="payment-order">
        <div class="payment-step">
          <div
            v-for="(item,index) in obj" :key="index"
            :class ="{ nowStep: index===2 }">{{item}}</div>
        </div>
        <table>
          <tr>
            <th>订单编号</th>
            <th>商品名称</th>
            <th>订单金额</th>
            <th>应付金额</th>
          </tr>
          <tr>
            <td>430000201004178510</td>
            <td>始亲观性指购音运世团</td>
            <td>84.71</td>
            <td>84.71</td>
          </tr>
        </table>
        <div id="account">
          <p>应付总金额：<span>84.71</span>元</p>
          <h6>以下支付平台都支持大多数银行卡：</h6>
          <div id="pay">
            <div>
              <span @click="changestate"
                    :class ="{pitch1: off }"></span>
              <img src="../../assets/img/payment02.jpg"/>
            </div>
            <div>
              <span @click="changestates"
              :class ="{pitch2: real }"></span>
              <img src="../../assets/img/payment01.jpg"/>
            </div>
          </div>
          <router-link to="/wechat" tag="button">确认无误，支付</router-link>
        </div>
      </div>
      <PaymentFooter></PaymentFooter>
    </div>
</template>

<script>
import Headers from '../common/Header'
import PaymentFooter from './PaymentFooter'
export default {
  name: 'Payment',
  components: {
    Headers,
    PaymentFooter
  },
  data () {
    return {
      obj: ['1选择商品', '2确认商品信息', '3支付订单', '4收取商品'],
      off: false,
      real: false
    }
  },
  methods: {
    changestate: function () {
      this.off = !this.off
      if (this.off) {
        this.real = false
      }
    },
    changestates: function () {
      this.real = !this.real
      if (this.real) {
        this.off = false
      }
    }
  }
}
</script>

<style scoped lang="less">
#payment-order{
  width: 1160px;
  padding: 10px 20px 0;
  margin: 0 auto;
  background: #fff;
.payment-step{
  width: 1160px;
  height: 50px;
  line-height: 50px;
  clear: both;
  background: #454545;
  color: #fff;
  font-size: 20px;
  div{
    text-align: center;
    float: left;
    width: 290px;
    height: 50px;
  }
  .nowStep{
    height: 54px;
    margin-top: -2px;
    background: #ff3c1b;
    position: relative;
    &:before{
      content: '';
      display: block;
      width: 54px;
      border-left: 27px solid transparent;
      border-right: 27px solid transparent;
      border-top: 27px solid #ff3c1b;
      border-bottom: 27px solid #ff3c1b;
      position: absolute;
      top: 0;
      left: -27px;
    }
    &:after{
      content: '';
      display: block;
      border: 27px solid transparent;
      border-left: 27px solid #ff3c1b;
      position: absolute;
      top: 0;
      left: 290px;
    }
  }
}
  table{
    width: 1160px;
    margin-top: 20px;
    margin-bottom: 5px;
    border-collapse: collapse;
    tr{
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      th{
        height: 100%;
        width: 290px;
        background: #f8f8f9;
        text-align: left;
        text-indent: 20px;
        border: 1px solid #e9eaec;
      }
    }
    tr{
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      td{
        height: 100%;
        width: 290px;
        text-indent: 20px;
        border: 1px solid #e9eaec;
      }
    }
  }
  #account{
    p{
      line-height: 34px;
      font-size: 16px;
      span{
        font-size: 12px;
        color: #ff3c1b;
      }
    }
    h6{
      font-size: 12px;
      line-height: 28px;
      font-weight: normal;
    }
    #pay{
      margin-bottom: 18px;
      height: 28px;
      div{
        height: 100%;
        float: left;
        border: 1px solid transparent;
        img{
          float: left;
          margin-right: 20px;
        }
        .pitch1,.pitch2{
          background: url("../../assets/img/payment03.jpg");
        }
        span{
          float: left;
          display: block;
          margin: 6px 14px 0 0;
          width: 16px;
          border: 1px solid #e0e1e3;
          height: 16px;
          box-sizing: border-box;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
        }
      }
    }
    button{
      width: 116px;
      height: 32px;
      border: none;
      background: #ff3c1b;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      text-align: center;
      font-size: 12px;
      line-height: 32px;
      color: #fff;
    }
  }
}
</style>
