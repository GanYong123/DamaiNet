<template>
  <div id="detail">
    <Headers></Headers>
    <Search></Search>
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">大麦</el-breadcrumb-item>
        <el-breadcrumb-item>北京</el-breadcrumb-item>
        <el-breadcrumb-item>电影</el-breadcrumb-item>
        <el-breadcrumb-item>{{Title}}</el-breadcrumb-item>
      </el-breadcrumb>
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
        <ul class="message-left-list">
          <li @click="magBtn(0)" :class="{'active':msgTab === 0}">演出信息</li>
          <li @click="magBtn(1)" :class="{'active':msgTab === 1}">精彩剧评</li>
          <li @click="magBtn(2)" :class="{'active':msgTab === 2}">演出方式</li>
          <li @click="magBtn(3)" :class="{'active':msgTab === 3}">购买方式</li>
          <li ref="bar" class="bar"></li>
        </ul>
        <transition name="el-zoom-in-center">
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
              <h5><span>写剧评&nbsp;&nbsp;&nbsp;&nbsp;</span><i></i></h5>
            </div>
            <div class="grade">
              <div class="grade-wind">
                <div class="star">
                  打个分吧：<el-rate text-color="#ff3c1b" :colors="['#ff3c1b', '#ff3c1b', '#ff3c1b']" void-color="#999999" @change="getGrade" v-model="value3" :disabled="false" show-score allow-half></el-rate>
                </div>
                <textarea ref="TextwindOne" maxlength="10000" placeholder="写个评价吧，10-10000字"></textarea>
                <el-button class="grade-btn" :plain="true" @click="Grade">评价</el-button>
              </div>
            </div>
          </div>
        </transition>
        <transition name="el-fade-in">
          <div v-show="msgTab === 1" class="message-cont showMsg">
            <div class="basic">
              <h5><span>写剧评&nbsp;&nbsp;&nbsp;&nbsp;</span><i></i></h5>
            </div>
            <div class="grade">
              <div class="grade-wind">
                <div class="star">
                  打个分吧：<el-rate text-color="#ff3c1b" :colors="['#ff3c1b', '#ff3c1b', '#ff3c1b']" void-color="#999999" @change="getGrade" v-model="value3" :disabled="false" show-score allow-half></el-rate>
                </div>
                <textarea ref="Textwind" maxlength="10000" placeholder="写个评价吧，10-10000字"></textarea>
                <el-button class="grade-btn" :plain="true" @click="Grade">评价</el-button>
              </div>
            </div>
            <div class="grade-cont">
              <ul class="grade-cont-list">
                <li class="grade-cont-li" v-for="(gradeItem, index) in gradeTxt" :key="index">
                  <div class="grade-cont-user">
                    <span></span>
                    <span>用户名{{index}}</span>
                  </div>
                  <div class="grade-cont-txt">
                    <p>{{gradeItem.Texts}}</p>
                    <div>
                      <el-rate :value="gradeItem.Num" :colors="['#ff3c1b', '#ff3c1b', '#ff3c1b']" disabled-void-color="#999999" text-color="#ff9900" allow-half disabled></el-rate>
                      <span>2019-01-02 19:01:23</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </transition>
        <transition name="el-fade-in">
          <div v-show="msgTab === 2" class="message-cont explain">
            <div class="basic">
              <h5><span>特别提示</span><i></i></h5>
            </div>
            <div class="explain-hint">
              <span>售前提示</span>
              <p>1.为避免快递配送不能及时选古，演出距开场时间少子3天时不提供【快递配送】服务，谪您谅P !您可以饱S电子票成，<a href="#">点击查看上门取票地址>></a><br/>
                2.凡演出M商品，开票时间1为演出前Z3U四周，正式开累后会第一时间短信通知您，澉主^收。<br/>
                3.的票品购买，麟票品隨脈目劫方及场馆偷兄而定，IE5C开麦网槪腿用户</p>
              <span>支付方式</span>
              <p>为避免快递配送不能及时选古，演出距开场时间少子3天时不提供【快递配送】服务</p>
              <span>退/换货说明</span>
              <p>的票品购买，麟票品隨脈目劫方及场馆偷兄而定，IE5C开麦网槪腿用户</p>
            </div>
            <div class="basic">
              <h5><span>移动购票</span><i></i></h5>
            </div>
            <div class="phone">
              <p>
                1.为避免快递配送不能及时选古，演出距开场时间少子3天时不提供。<br/>
                2.凡演出M商品，开票时间1为演出前Z3U四周，正式开累后会第一时间短信通知您，澉主^收。<br/>
              </p>
              <div class="explain-cellIcon">
                <img src="../../assets/img/iphone.png" alt="">
                <img src="../../assets/img/android.png" alt="">
                <img src="../../assets/img/ipad.png" alt="">
              </div>
            </div>
            <div class="basic">
              <h5><span>网上订购</span><i></i></h5>
            </div>
            <div class="explain-flow">
              <p>
                1.为避免快递配送不能及时选古，演出距开场时间少子3天时不提供。<br/>
                2.凡演出M商品，开票时间1为演出前Z3U四周，正式开累后会第一时间短信通知您，澉主^收。<br/>
              </p>
              <div class="flow">
                <div class="flow-poto">
                  <span><strong>选择商品</strong><i></i></span>
                  <p>
                    <span>选择商品</span>
                  </p>
                </div>
                <div class="flow-poto">
                  <span><strong>确认订单信息</strong><i></i></span>
                  <p>
                    <span>下订单</span>
                  </p>
                </div>
                <div class="flow-poto">
                  <span><strong>选择支付方式</strong><i></i></span>
                  <p>
                    <span>完成支付</span>
                  </p>
                </div>
                <div class="flow-poto">
                  <span><strong>追踪商品</strong><i></i></span>
                </div>
              </div>
              <div class="basic">
                <h5><span>在线支付</span><i></i></h5>
              </div>
              <p class="buy-txt">支持多家网上银行、平台（支付宝、银联、微信支付等）在线支付，<a href="#">查看详情>></a></p>
              <div class="buy-pay">
                支付方式：
                <i>
                  <img src="../../assets/img/zfb.png" alt="">
                  <img src="../../assets/img/wx.png" alt="">
                </i>
              </div>
              <div class="basic">
                <h5><span>柜台付款</span><i></i></h5>
              </div>
              <p class="buy-txt">您也可以选择最近的柜台网点，到柜台付款购买，<a href="#">查看附近分公司上门地址>></a></p>
              <div class="basic">
                <h5><span>电子钱包</span><i></i></h5>
              </div>
              <p class="buy-txt">您也可以选择最近的柜台网点，到柜台付款购买，<a href="#">查看解决方案>></a></p>
            </div>
          </div>
        </transition>
        <transition name="el-fade-in">
          <div v-show="msgTab === 3" class="message-cont buy">
            <div class="basic">
              <h5><span>在线支付</span><i></i></h5>
            </div>
            <p class="buy-txt">支持多家网上银行、平台（支付宝、银联、微信支付等）在线支付，<a href="#">查看详情>></a></p>
            <div class="buy-pay">
              支付方式：
              <i>
                <img src="../../assets/img/zfb.png" alt="">
                <img src="../../assets/img/wx.png" alt="">
              </i>
            </div>
            <div class="basic">
              <h5><span>柜台付款</span><i></i></h5>
            </div>
            <p class="buy-txt">您也可以选择最近的柜台网点，到柜台付款购买，<a href="#">查看附近分公司上门地址>></a></p>
            <div class="basic">
              <h5><span>电子钱包</span><i></i></h5>
            </div>
            <p class="buy-txt">您也可以选择最近的柜台网点，到柜台付款购买，<a href="#">查看解决方案>></a></p>
          </div>
        </transition>
      </div>
      <div class="message-right-warp">
        <div class="recommend message-right-cont">
          <h5>热门推荐</h5>
          <ul class="message-right-list">
            <li class="message-right-li" v-for="(Item, index) in recommendData" :key="index">
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
import Top from '../common/ReturnTop'
import 'element-ui/lib/theme-chalk/base.css'
export default {
  name: 'detail',
  components: {
    Headers,
    Search,
    Footer,
    Top
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
      value3: null, // 评分时组件的分值
      gradeTxt: [],
      Title: this.$route.params.titleData,
      off: true
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
    },
    getGrade () {
      console.log(this.value3 > 0)
    },
    Grade () {
      let gradeDataOne = this.$refs.TextwindOne.value
      let gradeData = this.$refs.Textwind.value
      if (this.off) { // 防止评论点击过快
        this.off = false
        if (this.msgTab === 0) {
          if (gradeDataOne === '' || gradeDataOne.length < 10) {
            this.$message({
              message: '评论内容不能少于10个字喵~',
              type: 'error',
              center: true
            })
          } else if (!this.value3) {
            this.$message({
              message: '记得评分喵~',
              type: 'error',
              center: true
            })
          } else {
            this.$refs.TextwindOne.value = ''
            this.gradeTxt.push({Texts: gradeDataOne, Num: this.value3})
            this.value3 = 0
            this.$message({
              message: '评价成功喵~',
              type: 'success',
              center: true
            })
          }
        } else if (this.msgTab === 1) {
          if (gradeData === '' || gradeData.length < 10) {
            this.$message({
              message: '评论内容不能少于10个字喵~',
              type: 'error',
              center: true
            })
          } else if (!this.value3) {
            this.$message({
              message: '记得评分喵~',
              type: 'error',
              center: true
            })
          } else {
            this.$refs.Textwind.value = ''
            this.gradeTxt.push({Texts: gradeData, Num: this.value3})
            this.value3 = 0
            this.$message({
              message: '评价成功喵~',
              type: 'success',
              center: true
            })
          }
        }
        setTimeout(() => {
          this.off = true
        }, 1000)
      }
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
    /deep/.el-breadcrumb{
      .el-breadcrumb__inner{
        font-weight: normal;
      }
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
      .message-left-list{
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
            margin-left: 103px;
            .star{
              height: 24px;
              line-height: 24px;
              font-size: 14px;
              color: #495060;
            }
            textarea{
              width: 738px;
              height: 92px;
              line-height: 22px;
              border: 1px solid #dddee1;
              border-radius: 3px;
              margin-top: 5px;
              padding-left: 4px;
            }
            .grade-btn{
              width: 150px;
              height: 40px;
              line-height: 40px;
              border-radius: 3px;
              font-size: 12px;
              margin: 20px 0 20px 20px;
              padding: 0;
              border: none;
              color: #ffffff;
              text-align: center;
              background: #ff3c1b;
              cursor: pointer;
            }
            /deep/.el-rate{
              display: inline-block;
              .el-rate__text{
                font-weight: bold;
              }
            }
          }
        }
        .grade-cont{
          padding-bottom: 52px;
          .grade-cont-list{
            .grade-cont-li{
              margin-top: 36px;
              overflow: hidden;
              .grade-cont-user{
                float: left;
                span{
                  display: block;
                }
                span:first-of-type{
                  width: 44px;
                  height: 44px;
                  border: 1px solid #cccccc;
                  border-radius: 3px;
                }
                span:last-of-type{
                  width: 44px;
                  font-size: 12px;
                  margin-top: 10px;
                  color: #495060;
                  text-align: center;
                }
              }
              .grade-cont-txt{
                width: 710px;
                padding: 4px 22px;
                margin-left: 53px;
                padding-left: 30px;
                font-size: 12px;
                color: #495060;
                background: #f0f0f0;
                float: left;
                p{
                  padding: 20px 0;
                }
                div{
                  /deep/.el-rate{
                    display: inline-block;
                  }
                }
              }
            }
            .grade-cont-li:first-of-type{
              margin-top: 0;
            }
          }
        }
      }
      .buy,.explain{
        margin-left: 20px;
        font-size: 12p;
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
        .buy-txt{
          height: 38px;
          line-height: 38px;
          font-size: 12px;
          margin-top: 8px;
        }
        .buy-pay{
          font-size: 12px;
          i{
            margin-top: 18px;
            display: block;
            img{
              margin-left: 5px;
              display: inline-block;
            }
          }
        }
        .explain-hint{
          font-size: 12px;
          span{
            height: 24px;
            line-height: 24px;
            display: block;
            color: #ff593e;
          }
          p{
            width: 780px;
            line-height: 20px;
            a{
              color: #ff593e;
            }
          }
        }
        .phone{
          font-size: 12px;
          p{
            margin-top: 18px;
            line-height: 20px;
          }
          .explain-cellIcon{
            margin-top: 18px;
            img{
              display: inline-block;
              margin-left: 10px;
            }
            img:first-of-type{
              margin: 0;
            }
          }
        }
        .explain-flow{
          p{
            margin-top: 18px;
            line-height: 20px;
            font-size: 12px;
          }
          .flow{
            margin-top: 28px;
            overflow: hidden;
            .flow-poto{
              font-weight: bold;
              color: #a6a6a6;
              font-size: 13px;
              float: left;
              overflow: hidden;
              span{
                width: 66px;
                float: left;
                display: block;
                text-align: center;
                strong{
                  width: 66px;
                  height: 38px;
                  display: block;
                }
                i{
                  width: 10px;
                  height: 10px;
                  border: 2px  solid #a6a6a6;
                  border-radius: 50%;
                  display: block;
                  margin: 0 auto;
                }
              }
              p{
                width: 128px;
                height: 32px;
                float: left;
                font-size: 12px;
                background: url("../../assets/img/jiantou.png") no-repeat center 22px;
                span{
                  width: 100%;
                  display: block;
                  text-align: center;
                }
              }
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
