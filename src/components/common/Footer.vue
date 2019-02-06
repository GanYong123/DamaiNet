<template>
  <footer id="foot">
    <div class="link-warp">
      <dl>
        <dt>订购方式</dt>
        <dd><a href="#">在线订购</a></dd>
        <dd><a href="#">电话订购</a></dd>
        <dd><a href="#">上门订购</a></dd>
        <dd><a href="#">大客户团体订购</a></dd>
        <dd><a href="#">大麦超级票订购</a></dd>
      </dl>
      <dl>
        <dt>配送方式</dt>
        <dd><a href="#">送货上门</a></dd>
        <dd><a href="#">电子票</a></dd>
        <dd><a href="#">上门自取</a></dd>
        <dd><a href="#">大麦自助机换票</a></dd>
      </dl>
      <dl>
        <dt>支付方式</dt>
        <dd><a href="#">在线支付</a></dd>
        <dd><a href="#">柜台付款</a></dd>
      </dl>
      <dl>
        <dt>大麦网微信</dt>
        <dd><img src="../../assets/img/code.png" alt="二维码"></dd>
      </dl>
      <dl>
        <dt>大麦网触屏版</dt>
        <dd><img src="../../assets/img/code.png" alt="二维码"></dd>
      </dl>
      <dl>
        <dt>账户安全</dt>
        <dd><a href="#">找回密码</a></dd>
        <dd><a href="#">账户注册</a></dd>
        <dd><a href="#">账户绑定</a></dd>
        <dd><a href="#">SSL安全证书</a></dd>
      </dl>
      <dl>
        <dt>退换说明</dt>
        <dd><a href="#">退货及换货说明</a></dd>
        <dd><a href="#">发票帮助</a></dd>
        <dd><a href="#">订票服务条款</a></dd>
      </dl>
      <dl>
        <dt>特色服务</dt>
        <dd><a href="#">演出订阅</a></dd>
      </dl>
    </div>
    <div class="website-stated">
      <ul>
        <li><a href="#">公司介绍</a></li>
        <li><a href="#">品牌识别</a></li>
        <li><a href="#">企业荣誉</a></li>
        <li><a href="#">隐私声明</a></li>
        <li><a href="#">联系及合作</a></li>
        <li><a href="#">招聘信息</a></li>
        <li><a href="#">网站地图</a></li>
        <li><a href="#">友情链接</a></li>
        <li><a href="#">公司大事记</a></li>
      </ul>
    </div>
    <div class="icon-warp">
      <ul>
        <li><img src="../../assets/img/footericon1.png" alt="icon"></li>
        <li><img src="../../assets/img/footericon2.png" alt="icon"></li>
        <li><img src="../../assets/img/footericon3.png" alt="icon"></li>
        <li><img src="../../assets/img/footericon4.png" alt="icon"></li>
        <li><img src="../../assets/img/footericon5.png" alt="icon"></li>
        <li><img src="../../assets/img/footericon6.png" alt="icon"></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'foot'
}
</script>

<style lang="less" scoped>
#foot{
  width: 100%;
  padding-top: 46px;
  background: #e6e6e6;
  .link-warp{
    width: 1200px;
    height: 188px;
    border-bottom: 2px solid #ff3c1b;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    dl{
      font-size: 16px;
      flex: 1;
      dt{
        height: 38px;
        line-height: 38px;
        color: #333333;
      }
      dd{
        height: 26px;
        line-height: 26px;
        a{
          font-size: 12px;
          color: #333333;
        }
      }
    }
    dl:nth-of-type(4),dl:nth-of-type(5){
      dd{
        margin-top: 10px;
      }
    }
  }
  .website-stated{
    width: 1200px;
    height: 52px;
    line-height: 52px;
    margin: 0 auto;
    ul{
      display: flex;
      justify-content: center;
      li{
        width: 88px;
        text-align: center;
        a{
          border-right: 1px solid #666666;
          padding-right: 14px;
          font-size: 14px;
          color: #666666;
        }
      }
      li:last-of-type{
        a{
          border: none;
        }
      }
    }
  }
  .icon-warp{
    width: 100%;
    ul{
      width: 1200px;
      height: 96px;
      padding-top: 20px;
      margin: 0 auto;
      li{
        display: inline-block;
        margin-right: 20px;
        vertical-align:bottom;
      }
      li:first-of-type{
        margin-left: 176px;
      }
    }
  }
}
</style>
