<template>
  <div id="detail">
    <Headers></Headers>
    <Search></Search>
    <div class="crumbs">
      <a>大麦</a>><a>北京</a>><a>电影</a>><a>{{Title}}</a>
    </div>
    <div class="tickets">
      <img src="../../assets/img/detailsPic1.jpg" alt="图片">
      <div class="details-price">
        <h3>{{Title}}</h3>
        <p>"奇门遁甲"</p>
        <div class="flow-path">
          <div>
            <span class="iconfont icon-duihao"></span>项目待定<i></i>
          </div>
          <div>
            <span class="iconfont icon-duihao"></span>预售/预定<i></i>
          </div>
          <div>
            <span>3</span>售票中<i></i>
          </div>
          <div>
            <span>4</span>售票中
          </div>
        </div>
        <div class="details-time">
          <span>演出时间：</span>
          <ul>
            <li>2018-8-08 08:18:00</li>
            <li>2018-8-08 08:18:00</li>
            <li>2018-8-08 08:18:00</li>
            <li>2018-8-08 08:18:00</li>
          </ul>
        </div>
        <div class="select-price">
          <span>选择票价：</span>
          <div>
            <input type="button" value="98元">
            <input type="button" value="998元">
            <input type="button" value="1998元">
          </div>
        </div>
        <router-link class="buy-btn" to = "/choose-seat" tag="div">选座购买</router-link>
      </div>
      <div class="details-grade"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Headers from '../common/Header'
import Footer from '../common/Footer'
import Search from '../shenyintao/Search'
export default {
  name: 'detail',
  components: {
    Headers,
    Search,
    Footer
  },
  data () {
    return {
      Title: this.$route.params.titleData
    }
  },
  methods: {
    getTitle () {
      console.log(this.Title)
    }
  }
}
</script>

<style lang="less" scoped>
#detail{
  width: 100%;
  background: #f5f5f5;
  .crumbs{
    width: 1200px;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    color: #dddfe6;
    margin: 0 auto;
    a{
      font-size: 12px;
      padding: 0 9px;
      color: #495060;
      display: inline-block;
    }
    a:nth-of-type(3){
      color: #ff3c1b;
    }
  }
  .tickets{
    width: 1200px;
    margin: 0 auto;
    padding-top: 30px;
    background: #ffffff;
    overflow: hidden;
    img{
      margin-left: 20px;
      float: left;
    }
    .details-price{
      margin-left: 20px;
      float: left;
      h3{
        font-size: 17px;
        color: #495060;
      }
      p{
        margin-top: 36px;
        font-size: 12px;
        color: #495060;
      }
      .flow-path{
        width: 600px;
        height: 86px;
        background: #f7f7f7;
        margin-top: 24px;
        display: flex;
        align-items: center;
        div{
          font-size: 12px;
          margin-left: 10px;
          color: #999999;
          span{
            width: 26px;
            height: 26px;
            line-height: 26px;
            margin-right: 7px;
            border: 1px solid #fe4d30;
            border-radius: 50%;
            text-align: center;
            display: inline-block;
            vertical-align: middle;
            color: #fe4d30;
          }
          i{
            width: 32px;
            height: 1px;
            margin-left: 10px;
            background: #fe4d30;
            display: inline-block;
            vertical-align: middle;
          }
        }
        div:first-of-type{
          margin-left: 30px;
        }
        div:nth-of-type(3){
          color: #666666;
          span{
            background: #fe4d30;
            color: #ffffff;
          }
          i{
            background: #e9eaec;
          }
        }
        div:nth-of-type(4){
          color: #666666;
          span{
            border: 1px solid #cecece;
            background: #ffffff;
            color: #cecece;
          }
        }
      }
      .details-time{
        height: 100px;
        margin-top: 10px;
        overflow: hidden;
        span{
          width: 68px;
          height: 100px;
          line-height: 100px;
          font-size: 12px;
          display: block;
          color: #495060;
          float: left;
        }
        ul{
          width: 532px;
          height: 100px;
          padding-top: 10px;
          float: left;
          li{
            width: 145px;
            height: 32px;
            line-height: 32px;
            font-size: 12px;
            border-radius: 3px;
            margin: 5px 0 0 10px;
            border: 1px solid #dddee1;
            color: #495060;
            float: left;
            text-align: center;
            cursor: pointer;
          }
          li:first-of-type{
            margin-left: 0px;
          }
          li:nth-of-type(4n){
            margin-left: 0px;
          }
        }
      }
      .select-price{
        overflow: hidden;
        span{
          width: 68px;
          height: 64px;
          line-height: 64px;
          font-size: 12px;
          display: block;
          color: #495060;
          float: left;
        }
        div{
          margin-top: 16px;
          float: left;
          input{
            border: 1px solid #dddee1;
            border-radius: 3px;
            padding: 6px 18px;
            font-size: 12px;
            margin-left: 10px;
            display: block;
            float: left;
            background: #f7f7f7;
            color: #495060;
            cursor: pointer;
          }
          input:first-of-type{
            margin-left: 0px;
          }
        }
      }
      .buy-btn{
        width: 150px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        margin: 8px 0 0 65px;
        border-radius: 4px;
        color: #ffffff;
        background: #ff3c1b;
        text-align: center;
        cursor: pointer;
      }
    }
  }
}
</style>
