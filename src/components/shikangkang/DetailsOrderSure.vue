<template>
  <div id="order">
    <div id = "msg" v-if = "fix"></div>
    <Headers></Headers>
    <div id="order-content">
      <form id="add" v-if = "fix">
        <h3>常用购票人<span @click="close">X</span></h3>
        <p>
          <i>*</i>
          用户姓名
          <input type="text" placeholder="请输入您的用户姓名 "/>
        </p>
        <p>
          <i>*</i>
          身份证号
          <input type="text" placeholder="请输入身份证号 "/>
        </p>
        <p>
          <i>*</i>
          卡类型
          <input type="text" placeholder="请输入卡类型 "/>
        </p>
        <div>
          <button>取消</button>
          <button>确定</button>
        </div>
      </form>
      <div id="pay-step">
       <div>1选择商品</div>
        <div class="now-step">2确认订单信息</div>
        <div>3支付订单</div>
        <div>4收取商品</div>
      </div>
      <div class="real-name">
        <h4>
          <span>实名证件信息</span>
        </h4>
        <p>
          购票人：<button @click="choose">选择购票人</button>
        </p>
      </div>
      <div class="commodity-list">
        <span @click = "changed1" v-show = "off"
         :class = "{active: all === true || one&&two&&three === true }"></span>
        <span @click = "changed2" v-show="off"
        :class ="{active: one === true}"></span>
        <span @click = "changed3" v-show="off"
         :class ="{active: two === true}"></span>
        <span @click = "changed4" v-show="off"
        :class ="{active: three === true}"></span>
        <button @click="addperson">新建购票人</button>
          <table>
            <tr>
            <th v-for="(item,index) in head" :key="index">{{item}}</th>
            </tr>
            <tr v-for="(val, i) in person" :key="i">
              <td v-for="(subVal, j) in val" :key="j">{{subVal}}</td>
            </tr>
          </table>
      </div>
      <div id="invoice">
        <h4>
          <span>我要开发票</span>
        </h4>
        <ul>
          <li :class="{active: i === index}"
          v-for ="(item,i) in tap"
              @click="changed(i)"
              :key="i">{{item}}</li>
        </ul>
        <form class="company" v-for = "(item, k) in invoice" :key="k"
        :style = "{display: k === index ? 'block' : 'none'}">
          <label v-for ="(val, i) in item" :key="i">
            {{val[0]}}：<input type="text" :placeholder = val[1] />
          </label>
          <br/>
          <button>确认发票信息 </button>
        </form>
      </div>
      <div id="protocol">
      <p>
        <input type="checkbox"/>
        购买“安心订票保险”，本单保费金额：20：00元
      </p>
        <p>
          查看
          <a href="#">
            保险服务说明
          </a>
          和
          <a href="#">《安心订票保险条款》</a>
        </p>
        <p>购买保险，请填写真实姓名</p>
        <p class="price">商品金额：&nbsp;&nbsp;&nbsp;<span>￥180</span></p>
        <p class="insurance">
          商品保险：&nbsp;&nbsp;&nbsp;+<span>￥20.00</span>
        </p>
        <hr style="border:1px dashed #c3c3c3"/>
        <p>待支付总额：<span>￥200</span></p>
        <p>
          <input type="checkbox" @click= "agree"/>
          我已阅读并同意
          <a href="#">《订购服务条款》</a>
          <a href="#">《退换货约定》</a>
          <a href="#">《退款约定》</a>
        </p>
        <p>同意“票品为不记名凭证，请您妥善保管，遗失不补”</p>
        <router-link to="/payment" tag="div" >
          <el-button type="text" :class = "{gray: gree}" @click="open"
          v-if="gree" >同意以上协议并提交订单</el-button>
          <button v-else>同意以上协议并提交订单</button>
        </router-link>
      </div>
    </div>
    <PaymentFooter></PaymentFooter>
  </div>
</template>

<script>
import Headers from '../common/Header'
import PaymentFooter from './PaymentFooter'
export default {
  name: 'Order',
  components: {
    Headers,
    PaymentFooter
  },
  data () {
    return {
      index: 0,
      tap: ['公司', '个人'],
      head: ['', '姓名', '卡类型', '身份证号'],
      person: [['', '李明', '身份证', '5325989269826966'],
        ['', '段燕', '身份证', '5356677744788'],
        ['', '廖平', '身份证', '2425462220999']],
      off: false,
      all: false,
      one: false,
      two: false,
      three: false,
      fix: false,
      invoice: [[['公司抬头', '请输入公司抬头'], ['公司税号', '请输入公司税号']],
        [['个人姓名', '请输入您的姓名'], ['个人税号', '请输入个人税号']]],
      gree: true
    }
  },
  beforeRouteLeave (to, from, next) {
    if (this.gree) {
      return ''
    } else {
      next()
      this.open = null
    }
  },
  // 未同意协议时禁止路由调转
  methods: {
    changed (i) {
      this.index = i
    },
    choose () {
      this.off = true
    },
    changed1 () {
      this.all = !this.all
      if (this.all) {
        this.one = true
        this.two = true
        this.three = true
      } else {
        this.one = false
        this.two = false
        this.three = false
      }
    },
    // 勾选表格头部框框时全部选中或取消
    changed2 () {
      this.one = !this.one
    },
    changed3 () {
      this.two = !this.two
    },
    changed4 () {
      this.three = !this.three
    },
    addperson () {
      this.fix = true
    },
    close () {
      this.fix = false
    },
    agree () {
      this.gree = !this.gree
    },
    open () {
      this.$alert('请先同意条款和约定', '提示信息', {
        confirmButtonText: '确定'
      })
    }
  }
}
</script>

<style scoped lang="less">
#order{
  width: 100%;
  background: #f5f5f5;
  #msg{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    background: rgba(0,0,0,.5);
  }
  #order-content{
    position: relative;
    #add{
      width: 366px;
      overflow: hidden;
      background: #fff;
      z-index: 3;
      height: 222px;
      position: absolute;
      top: 70px;
      left: 417px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      h3{
        height: 34px;
        line-height: 34px;
        font-size: 16px;
        text-indent: 20px;
        border-bottom: 2px solid #d7d7d7;
        margin-bottom: 3px;
        span{
          float: right;
          margin-right: 12px;
          cursor: pointer;
        }
      }
      p{
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        text-align: right;
        padding-right: 12px;
        i{
          color: #ff3c1b;
        }
        input:focus{
          border: 1px solid #ff3c1b;
        }
        input{
          height: 22px;
          width: 286px;
          border: 1px solid #d7d7d7;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          border-radius: 3px;
        }
      }
      div{
        margin-top: 10px;
        border-top: 1px solid #d7d7d7;
        padding: 7px 12px 0 0;
        text-align: right;
        button{
          width: 42px;
          height: 24px;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          border-radius: 3px;
          text-align: center;
          line-height: 24px;
          border: none;
          &:nth-of-type(1){
            color: #ccc;
            background: #fff;
          }
          &:nth-of-type(2){
            color: #fff;
            background: #ff3c1b;
          }
        }
      }
    }
    background: #fff;
    padding: 10px 20px 0 20px;
    width: 1160px;
    margin: 0 auto;
    #pay-step{
      height: 50px;
      width: 1160px;
      background: #404040;
      line-height: 50px;
      color: #fff;
      font-size: 18px;
      text-align: center;
      .now-step{
        height: 54px;
        background: #ff3c1b;
        margin-top: -2px;
        position: relative;
      }
      .now-step:before{
        content: '';
        display: block;
        width: 54px;
        border: 27px solid #ff3c1b;
        position: absolute;
        left: -27px;
        border-left: 27px solid transparent;
        border-right: 27px solid transparent;
      }
      .now-step:after{
        content: '';
        display: block;
        width: 54px;
        border: 27px solid transparent;
        position: absolute;
        border-left: 27px solid #ff3c1b;
        left: 290px;
        top: 0px;
      }
      div{
        width: 290px;
        float: left;
      }
    }
    .real-name{
        h4 {
          height: 40px;
          width: 1160px;
          border-bottom: 1px solid #d7d7d7;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          border-top: 1px solid transparent;
          span {
            height: 30px;
            line-height: 30px;
            width: 120px;
            text-indent: 10px;
            font-size: 16px;
            display: block;
            color: #ff3c1b;
            margin-top: 8px;
            border-bottom: 1px solid #ff3c1b;
          }
        }
      p{
        height: 34px;
        line-height: 34px;
        font-size: 12px;
        margin: 10px 0 20px 0;
        button{
          background: #ff3c1b;
          border-radius:4px;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          color: #fff;
          font-size: 12px;
          font-weight: bold;
          width: 92px;
          height: 100%;
          border: none;
        }
      }
    }
    .commodity-list{
      padding: 0 20px;
        width: 900px;
      height: 250px;
      border: 1px solid #dddee1;
      position: relative;
      span.active{
        background: url("../../assets/img/right.jpg");
        display: block;
        width: 14px;
        height: 14px;
      }
      span{
        position: absolute;
        display: block;
        width: 14px;
        height: 14px;
        border: 1px solid #dddee1;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px ;
        border-radius: 2px;
        &:nth-of-type(1){
          left: 45px;
          top: 70px;
        }
        &:nth-of-type(2){
          left: 45px;
          top: 110px;
        }
        &:nth-of-type(3){
          left: 45px;
          top: 150px;
        }
        &:nth-of-type(4){
          left: 45px;
          top: 190px;
        }
      }
      button{
        background: #ff3c1b;
        border-radius:4px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        width: 92px;
        height: 34px;
        line-height: 34px;
        float: right;
        margin-top: 10px;
        border: none;
      }
      table,tr,th,td{
        border: 1px solid #dddee1;
        border-collapse: collapse;
      }
      table{
        margin: 60px 0 20px 0;
        font-size: 12px;
        color: #495060;
        tr{
          td:nth-of-type(1){
            width: 30px;
          }
        }
        tr{
          th{
            background: #f8f8f9;
            text-align: left;
            &:nth-of-type(1){
              width: 30px;
            }
          }
        }
        th,td{
          width: 232px;
          height: 40px;
          padding: 0 20px 0 20px;
        }
      }
    }
    #invoice{
      h4{
        height: 40px;
        width: 1160px;
        border-bottom: 1px solid #d7d7d7;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-top: 1px solid transparent;
        span{
          height: 30px;
          line-height: 30px;
          width: 120px;
          text-indent: 10px;
          font-size: 16px;
          display: block;
          color: #ff3c1b;
          margin-top: 8px;
          border-bottom: 1px solid #ff3c1b;
        }
      }
      ul{
        height: 36px;
        border-bottom: 1px solid #dddee1;
        overflow: hidden;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        li{
          height: 34px;
          line-height: 34px;
          font-size: 14px;
          width: 60px;
          text-align: center;
          float: left;
          color: #705078;
          &.active{
            color: #ff3c1b;
            border-bottom: 2px solid #ff3c1b;
          }
        }
      }
      form{
        width:1144px;
        height: 200px;
        border: 1px solid #dddee1;
        margin-top: -1px;
        margin-bottom: 20px;
        font-size: 12px;
        color: #495060;
        position: relative;
        label{
          height: 30px;
          line-height: 30px;
          font-size: 12px;
          position: absolute;
          &:nth-of-type(1){
             left: 16px;
             top: 23px;
           }
          &:nth-of-type(2){
            left: 16px;
            top: 74px;
          }
          input{
            width: 300px;
            height: 30px;
            display: inline-block;
            border-radius: 4px;
            border: 1px solid #c3c3c3;
          }
        }
        button{
          background: #ff3c1b;
          position: absolute;
          left: 45px;
          top: 136px;
          width: 104px;
          height: 34px;
          border: none;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;

        }
      }
    }
    #protocol{
      border-top: 1px solid #c3c3c3;
      color: #495060;
      padding-top: 20px;
      height: 374px;
      hr{
        margin: 20px 0 20px 0;
      }
      button{
        margin-top: 20px;
        float: right;
        width: 164px;
        height: 32px;
        background: #ff3c1b;
        font-size: 12px;
        color: #fff;
        border: none;
      }
      button.gray{
        background: #ccc;
      }
      p{
        height: 24px;
        text-align: right;
        line-height: 24px;
        span{
          color: #ff3c94;
        }
        a{
          color: #1b1b1b;
        }
      }
    }
    }
  }
</style>
