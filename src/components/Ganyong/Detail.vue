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
            <li @click="selectTime(index)" v-for="(TimeItem, index) in time" :key="index" :class="{'active':index === slctTime}">{{TimeItem}}</li>
          </ul>
        </div>
        <div class="select-price">
          <span>选择票价：</span>
          <div>
            <input  v-for="(PriceItem, index) in price" :key="index" :value="PriceItem" :class="{'active':index === slctTime}" type="button">
          </div>
        </div>
        <router-link class="buy-btn" to = "/choose-seat" tag="div">选座购买</router-link>
      </div>
      <div class="details-grade">
        <div class="grade-cont">
          <p>大麦网评分：</p>
          <div>
            <span>4.6</span>
            <i class="iconfont icon-xingxing"></i>
            <i class="iconfont icon-xingxing"></i>
            <i class="iconfont icon-xingxing"></i>
            <i class="iconfont icon-xingxing"></i>
            <i class="iconfont icon-xingxing"></i>
            <span>3000</span> 人参与评论
          </div>
        </div>
        <div class="grade-cont grade-cont-time">
          <p>演出时间：</p>
          <p>2018-5-08 06:18:00</p>
        </div>
        <div class="grade-cont grade-cont-site">
          <p>演出场馆：</p>
          <p>中国儿童中心剧院-海淀</p>
          <p><span class="iconfont icon-weizhi1"></span>交通路线</p>
        </div>
        <div class="grade-cont grade-cont-site">
          <p>票品支持：</p>
          <p><span class="iconfont icon-meiyuan"></span>翻积分</p>
        </div>
        <div class="grade-cont grade-cont-txt">
          <p>实票配送：</p>
          <p>少食多餐时所产生的从市场上出售啊撒擦阿斯顿撒</p>
        </div>
      </div>
    </div>
    <div class="message-warp">
      <div class="message-left-warp">
        <ul>
          <li @click="magBtn(0)" :class="{'active':msgTab === 0}">演出信息</li>
          <li @click="magBtn(1)" :class="{'active':msgTab === 1}">精彩剧评</li>
          <li @click="magBtn(2)" :class="{'active':msgTab === 2}">演出方式</li>
          <li @click="magBtn(3)" :class="{'active':msgTab === 3}">购买方式</li>
          <li ref="bar" class="bar"></li>
        </ul>
        <div v-show="msgTab === 0" class="message-cont showMsg">
          <div class="basic">
            <h5><span>基本信息</span><i></i></h5>
          </div>
          <div  class="table-box">
            <table cellspacing="0" border="1">
              <tr>
                <th>演出时间</th>
                <td>2018-01-04-01-06</td>
                <th>演出场馆</th>
                <td>光顾路5号国际会展中心</td>
              </tr>
              <tr>
                <th>演出时间</th>
                <td>2018-01-04-01-06</td>
                <th>演出场馆</th>
                <td>
                  <p>光顾路5号国际会展中心</p>
                  <p>光顾路5号国际会展中心</p>
                  <p>光顾路5号国际会展中心</p>
                  <p>光顾路5号国际会展中心</p>
                  <p>光顾路5号国际会展中心</p>
                  <p>光顾路5号国际会展中心</p>
                </td>
              </tr>
            </table>
          </div>
          <div class="basic">
            <h5><span>项目介绍</span><i></i></h5>
          </div>
          <div class="introduce">
            <h5>英文站入口</h5>
            <p>英文站购买链接：<a href="www.baidu.com">www.baidu.com</a></p>
            <h5>演出介绍</h5>
            <p>
              世艇典原茧窖乐剧衝<br/>
              猫的足迹<br/>
              超过20#语言_ 30个国家，300座城市，7300万观众超过20沖语言，30个国家，300座域市■ 7300万观众星过20种语言■ 3阶国冡，300座 城市，7300万观众星过20种语言，30^国冡，300座域市，7300万观众超过20#^言，30个国家，300座城市，7300万观众超过20?1晤言， 国家■ 300座域市■ 7300万观众超过20#^言，30个国家，300座城市，7300万观众 網7座托尼奖，莫获翻弗奖、格菜美奖等全球主要奖项<br/>
              伦麵区百老汇有史贼狐连续公演最久的音乐剧之一
            </p>
            <img src="../../assets/img/detailsPic1.jpg" alt="图片">
            <p>
              伦麵区百老汇有史贼狐连续公演最久的音乐剧之一<br/>
              伦麵区百老汇有史贼狐连续公演最久的音乐剧之一<br/>
              伦麵区百老汇有史贼狐连续公演最久的音乐剧之一<br/>
            </p>
          </div>
          <div class="basic">
            <h5><span>写剧评</span><i></i></h5>
          </div>
          <div class="grade">
            <div class="grade-wind">
              <div>
                打个分吧：<el-rate v-model="value3" :show-text="texts" allow-half></el-rate>
              </div>
            </div>
          </div>
        </div>
        <div v-show="msgTab === 1" class="message-cont">2</div>
        <div v-show="msgTab === 2" class="message-cont">3</div>
        <div v-show="msgTab === 3" class="message-cont">4</div>
      </div>
      <div class="message-right-warp">
        <div class="recommend message-right-cont">
          <h5>热门推荐</h5>
          <ul>
            <li v-for="(Item, index) in recommendData" :key="index">
              <img v-if="index===0" src="../../assets/img/detailsPic1.jpg" alt="">
              <p >{{Item.txt}}</p>
              <p v-if="index!=0">{{Item.timer}}</p>
            </li>
          </ul>
        </div>
        <div style="margin-top:20px;" class="recommend message-right-cont">
          <h5>浏览历史</h5>
          <ul>
            <li v-for="(historyDataItem, index) in historyData" :key="index">
              <p>{{historyDataItem}}</p>
            </li>
          </ul>
        </div>
      </div>
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
      time: ['2018-5-08 06:18:00', '2018-6-08 06:18:00', '2018-7-08 06:18:00', '2018-8-08 06:18:00'],
      price: ['98元', '198元', '998元'],
      recommendData: [
        {
          txt: '大型多媒体儿童互动剧《爱丽丝梦游仙境》（11月）',
          timer: '2018-7-08-2-18-07-09'
        },
        {
          txt: '大型多媒体儿童互动剧《爱丽丝梦游仙境》（11月）',
          timer: '2018-7-08-2-18-07-09'
        },
        {
          txt: '大型多媒体儿童互动剧《爱丽丝梦游仙境》（11月）',
          timer: '2018-7-08-2-18-07-09'
        },
        {
          txt: '大型多媒体儿童互动剧《爱丽丝梦游仙境》（11月）',
          timer: '2018-7-08-2-18-07-09'
        },
        {
          txt: '大型多媒体儿童互动剧《爱丽丝梦游仙境》（11月）',
          timer: '2018-7-08-2-18-07-09'
        }
      ],
      historyData: ['大型多媒体儿童互动剧《爱丽丝梦游仙境》（11月）', '大型多媒体儿童互动剧《爱丽丝梦游仙境》（11月）', '大型多媒体儿童互动剧《爱丽丝梦游仙境》（11月）', '大型多媒体儿童互动剧《爱丽丝梦游仙境》（11月）', '大型多媒体儿童互动剧《爱丽丝梦游仙境》（11月）', '大型多媒体儿童互动剧《爱丽丝梦游仙境》（11月）', '大型多媒体儿童互动剧《爱丽丝梦游仙境》（11月）', '大型多媒体儿童互动剧《爱丽丝梦游仙境》（11月）', '大型多媒体儿童互动剧《爱丽丝梦游仙境》（11月）'],
      slctTime: 0,
      msgTab: 0,
      value3: null,
      texts: [0, 1, 2, 3, 4],
      Title: this.$route.params.titleData
    }
  },
  methods: {
    selectTime (index) {
      this.slctTime = index
    },
    magBtn (tag) {
      let BarLeft = this.$refs.bar
      this.msgTab = tag
      BarLeft.style.left = (this.msgTab * 88) + 'px'
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
    overflow: hidden;
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
    padding-bottom: 10px;
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
          li.active{
            border: 1px solid #ff3c1b;
            color: #ff3c1b;
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
          input.active{
            background: #f7f7f7;
            color: #cccccc;
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
    .details-grade{
      width: 263px;
      padding: 0 10px;
      float: left;
      color: #495060;
      .grade-cont{
        border-bottom: 1px dashed #cccccc;
        p{
          height: 36px;
          line-height: 36px;
          font-size: 12px;
          color: #495060;
        }
        div{
          height: 36px;
          line-height: 36px;
          font-size: 12px;
          span:first-of-type{
            font-size: 16px;
            color: #ff3c1b;
            font-weight: bold;
          }
          i{
            font-size:18px;
            color: #ff3c1b;
          }
          span:last-of-type{
            color: #ff3c1b;
          }
        }
      }
      .grade-cont-site{
        p:last-of-type{
          span{
            font-size: 14px;
            margin-right: 4px;
            display: inline-block;
            color: #ff3c1b;
          }
        }
      }
      .grade-cont-txt{
        padding-bottom: 5px;
        p:last-of-type{
          line-height: normal;
        }
      }
    }
  }
  .message-warp{
    width: 1200px;
    margin: 30px auto;
    overflow: hidden;
    .message-left-warp{
      width: 918px;
      background: #ffffff;
      float: left;
      ul{
        position: relative;
        overflow: hidden;
        li{
          width: 88px;
          height: 32px;
          line-height: 32px;
          font-size: 12px;
          color: #495060;
          float: left;
          text-align: center;
          cursor: pointer;
        }
        .bar{
          width: 88px;
          height: 2px;
          position: absolute;
          top: 0;
          left: 0;
          background: #ff3c1b;
          transition: .3s;
        }
        li.active{
          color: #ff3c1b;
        }
      }
      .showMsg{
        margin-left: 20px;
        .basic{
          height: 28px;
          line-height: 28px;
          font-size: 18px;
          margin-top: 40px;
          color: #495060;
          h5{
            font-weight: normal;
            span{
              height: 28px;
              line-height: 28px;
              padding-left: 10px;
              border-left: 2px solid #ff3c1b;
              display: inline-block;
            }
            i{
              width: 787px;
              margin: 0 0 5px 27px;
              border-bottom: 1px dashed #cccccc;
              display: inline-block;
            }
          }
        }
        .table-box{
          margin: 20px 0 0 102px;
          table{
            font-size: 12px;
            border: 1px solid #cccccc;
            color: #495060;
            th{
              border: 1px solid #cccccc;
              background: #eeeeee;
              font-weight: normal;
            }
            td{
              border: 1px solid #cccccc;
            }
            tr:nth-of-type(1){
              th{
                width: 110px;
                height: 48px;
              }
              td{
                width: 258px;
                height: 48px;
                text-indent: 30px;
              }
            }
            tr:nth-of-type(2){
              td{
                text-indent: 30px;
                p{
                  margin-top: 4px;
                }
              }
            }
          }
        }
        .introduce{
          margin: 20px 0 0 102px;
          color: #495060;
          h5{
            width: 756px;
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            text-indent: 11px;
            background: #eeeeee;
            font-weight: normal;
          }
          p{
            width: 756px;
            line-height: 24px;
            padding: 30px 2px;
            font-size: 12px;
            a{
              color: #495060;
            }
          }
          img{
            margin: 0 auto;
          }
        }
        .grade{
          .grade-wind{
            /deep/.el-rate{
              display: inline-block;
            }
          }
        }
      }
    }
    .message-right-warp{
      width: 266px;
      float: right;
      .message-right-cont{
        padding: 0 5px;
        background: #ffffff;
        h5{
          height: 34px;
          line-height: 34px;
          font-size: 16px;
          border-bottom: 1px solid #cccccc;
          color: #495060;
          font-weight: normal;
        }
        ul{
          margin-top: 23px;
          padding-bottom: 30px;
          li:first-of-type{
            p{
              text-align: center;
            }
          }
          li{
            padding-bottom: 10px;
            border-bottom: 1px dashed #cccccc;
            cursor: pointer;
            img{
              width: 258px;
              height: 355px;
              margin: 0 auto;
            }
            p{
              margin-top: 14px;
              font-size: 12px;
              color: #1b1b1b;
            }
          }
          li:last-of-type{
            border-bottom: 1px solid #cccccc;
          }
        }
      }
    }
  }
}
</style>
