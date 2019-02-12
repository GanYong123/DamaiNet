<template>
  <div id="order">
    <Headers></Headers>
    <div id="order-content">
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
          购票人：<button>选择购票人</button>
        </p>
      </div>
      <div class="payment">
        <h4>
          <span>选择付款方式</span>
        </h4>
        <p @click="changeUrl">网上付款</p>
      </div>
      <div class="commodity-list">
        <h4>
          <span>商品清单</span>
        </h4>
          <table>
            <tr>
            <th>商品名称</th>
            <th>座位号</th>
            <th>价格</th>
            <th>数量</th>
            <th>价格小计（元）</th>
            </tr>
            <tr>
              <td>大型媒体励志互动儿童剧《奇门遁甲》(11月)</td>
              <td>1排6号</td>
              <td>90</td>
              <td>1</td>
              <td>90</td>
            </tr>
            <tr>
              <td>大型媒体励志互动儿童剧《奇门遁甲》(11月)</td>
              <td>1排7     号</td>
              <td>90</td>
              <td>1</td>
              <td>90</td>
            </tr>
          </table>
      </div>
      <div id="invoice">
        <h4>
          <span>我要开发票</span>
        </h4>
        <ul>
          <li class="active">公司</li>
          <li>个人</li>
        </ul>
        <form class="company">
          <label>
            公司抬头：<input type="text" placeholder="请输入公司抬头"/>
          </label>
          <br/>
          <label>
            公司税号：<input type="text" placeholder="请输入公司税号"/>
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
          <input type="checkbox"/>
          我已阅读并同意
          <a href="#">《订购服务条款》</a>
          <a href="#">《退换货约定》</a>
          <a href="#">《退款约定》</a>
        </p>
        <p>同意“票品为不记名凭证，请您妥善保管，遗失不补”</p>
        <button>同意以上协议并提交订单 </button>
      </div>
    </div>
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
  </div>
</template>

<script>
import Headers from '../common/Header'
export default {
  name: 'Order',
  components: {
    Headers
  }
}
</script>

<style scoped lang="less">
#order{
  width: 100%;
  background: #f5f5f5;
  #order-content{
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
    .payment{
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
      p{
        font-size: 12px;
        text-indent: 24px;
        background: url("../../assets/img/payment.png")no-repeat left 0 top 13px;
        height: 40px;
        line-height: 40px;
        margin-bottom: 10px;
      }
    }
    .commodity-list{
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
      table,tr,th,td{
        border: 1px solid #dddee1;
        border-collapse: collapse;
      }
      table{
        margin: 10px 0 20px 0;
        font-size: 12px;
        color: #495060;
        tr{
          th{
            background: #f8f8f9;
            text-align: left;
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
