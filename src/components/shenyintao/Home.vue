<template>
  <div id="home">
    <!-- 头部 -->
    <Header></Header>
    <!-- 头部搜索 -->
    <Search></Search>
    <!-- 头部导航 -->
    <div class="navTopBox clear">
      <div class="middle">
        <h3>全部商品分类</h3>
        <ul class="navTopList clear">
          <router-link to="/opera" tag="li" >戏剧</router-link>
          <router-link to="/sports" tag="li" >体育</router-link>
          <router-link to="/parenting" tag="li" >亲子</router-link>
          <router-link to="/classicalDance" tag="li" >舞蹈古典</router-link>
          <router-link to="/rock" tag="li" >摇滚</router-link>
        </ul>
        <ul class="navLeftList clear">
          <li v-for="(item, i) in userData" :key="i" :class="{ 'active' : i === index+1 }" @mouseenter="open(i)">
            <span>
              {{item.Title}}
            </span>
            <span>
              <i></i>
            </span>
          </li>
        </ul>
        <div class="menuContBox" v-show="show">
          <div class="menuConts" v-for="(item, j) in userData" :key="j">
            <div class="smContBoxes" :style="{ 'display' : j === index ? 'block' : 'none'}">
              <div class="titleBox clear">
                <h2 class="title">{{item.smTitle}}</h2>
                <p class="rt">></p>
                <ul class="tlileList clear">
                  <router-link to="to" v-for="(item, k) in Mores" :key="k" tag="li">
                    <a href="#">{{item}}</a>
                  </router-link>
                </ul>
                <span class="close" @click="close()">X</span>
              </div>
              <h4 class="h4">相关热门</h4>
              <ul class="contCtList clear">
                <router-link to="to" v-for="(item, a) in Conts" :key="a" tag="li">
                  <div class="picBox">
                    <img src="../../assets/img/sing3.jpg" alt="">
                    <div class="zzc">
                      <p>{{item.zzcTitle}}</p>
                      <p>{{item.zzcDate}}</p>
                    </div>
                  </div>
                  <p><a href="#">{{item.contTitle}}</a></p>
                  <p>票价：<span>￥{{item.money}}</span></p>
                </router-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="lbtBox">
      <Swiper></Swiper>
      <div class="lbtBotns"></div>
    </div>
    <!-- 内容区域 -->
    <div class="contBoxes">
      <!-- 推荐栏 -->
      <div class="cont1Box middle">
        <el-tabs v-model="activeName">
          <el-tab-pane label="今日推荐" name="first">
            <ul class="cont1CtList clear">
              <li v-for="(item, i) in spacilCont" :key="i" @click="Title(i)">
                <div class="picBox">
                  <img  src="../../assets/img/sing3.jpg" alt="">
                  <div class="zzc">
                    <p>{{item.zzcTitle}}</p>
                    <p>{{item.zzcDate}}</p>
                  </div>
                </div>
                <p><a href="#">{{item.bgTitle}}</a></p>
                <p>票价：<span>￥{{item.money}}</span></p>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="即将开售">
            <ul class="cont1CtList clear">
              <li v-for="(item, d) in spacilCont1" :key="d">
                <div class="picBox">
                  <img  src="../../assets/img/sing2.jpg" alt="">
                  <div class="zzc">
                    <p>{{item.zzcTitle}}</p>
                    <p>{{item.zzcDate}}</p>
                  </div>
                </div>
                <p><a href="#">{{item.bgTitle}}</a></p>
                <p>票价：<span>￥{{item.money}}</span></p>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 主体内容 -->
      <div class="cont2Box clear">
        <div class="middle">
          <div class="smLtBox">
            <h3 class="h3">
              <span>1F</span>
              戏剧达人
            </h3>
            <div class="picBoxs">
              <img src="../../assets/img/sing6.jpg">
              <div class="zzcBox">
                <p>
                  {{dramasCont.zzcTitle}}
                </p>
                <p>
                  {{dramasCont.money}}元
                </p>
              </div>
            </div>
            <div class="listBox">
              <ul class="cont2Lists clear">
                <router-link to="to" v-for="(item, idx) in dramasCont1" :key="idx" tag="li">
                  <div class="cont2PicBox">
                    <img src="../../assets/img/sing7.jpg" alt="">
                  </div>
                  <div class="cont2Cont">
                    <h4 class="h4">{{item.lstTitle}}</h4>
                    <p>{{item.lstDate}}</p>
                    <p>{{item.city}}</p>
                    <p>¥&nbsp;{{item.money}}起</p>
                  </div>
                </router-link>
              </ul>
            </div>
          </div>
          <div class="smRtBox">
            <h5 class="h5 clear">
            <span class="paiHang">
              热门演出排行
            </span>
              <a href="#">查看更多>></a>
            </h5>
            <ul class="paiHangList clear">
              <router-link to="to" v-for="(item, i) in dramasCont2" :key="i" tag="li">
                <a href="#">
                  <span>{{item.Number}}</span>
                  {{item.lstTitle}}
                </a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
      <div class="cont2Box clear">
        <div class="middle">
          <div class="smLtBox">
            <h3 class="h3">
              <span>2F</span>
              体育赛事
            </h3>
            <div class="picBoxs">
              <img src="../../assets/img/sing6.jpg">
              <div class="zzcBox">
                <p>
                  {{sportsCont.zzcTitle}}
                </p>
                <p>
                  {{sportsCont.money}}元
                </p>
              </div>
            </div>
            <div class="listBox">
              <ul class="cont2Lists clear">
                <router-link to="to" v-for="(item, i) in sportsCont1" :key="i" tag="li">
                  <div class="cont2PicBox">
                    <img src="../../assets/img/sing7.jpg" alt="">
                  </div>
                  <div class="cont2Cont">
                    <h4 class="h4">{{item.lstTitle}}</h4>
                    <p>{{item.lstDate}}</p>
                    <p>{{item.city}}</p>
                    <p>¥&nbsp;{{item.money}}起</p>
                  </div>
                </router-link>
              </ul>
            </div>
          </div>
          <div class="smRtBox">
            <h5 class="h5 clear">
            <span class="paiHang">
              热门演出排行
            </span>
              <a href="#">查看更多>></a>
            </h5>
            <ul class="paiHangList clear">
              <router-link to="to" v-for="(item, j) in sportsCont2" :key="j" tag="li">
                <a href="#">
                  <span>{{item.Number}}</span>
                  {{item.lstTitle}}
                </a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
      <div class="cont2Box clear">
        <div class="middle">
          <div class="smLtBox">
            <h3 class="h3">
              <span>3F</span>
              舞蹈古典
            </h3>
            <div class="picBoxs">
              <img src="../../assets/img/sing6.jpg">
              <div class="zzcBox">
                <p>
                  {{clssDceCont.zzcTitle}}
                </p>
                <p>
                  {{clssDceCont.money}}元
                </p>
              </div>
            </div>
            <div class="listBox">
              <ul class="cont2Lists clear">
                <router-link to="to" v-for="(item, i) in clssDceCont1" :key="i" tag="li">
                  <div class="cont2PicBox">
                    <img src="../../assets/img/sing7.jpg" alt="">
                  </div>
                  <div class="cont2Cont">
                    <h4 class="h4">{{item.lstTitle}}</h4>
                    <p>{{item.lstDate}}</p>
                    <p>{{item.city}}</p>
                    <p>¥&nbsp;{{item.money}}起</p>
                  </div>
                </router-link>
              </ul>
            </div>
          </div>
          <div class="smRtBox">
            <h5 class="h5 clear">
            <span class="paiHang">
              热门演出排行
            </span>
              <a href="#">查看更多>></a>
            </h5>
            <ul class="paiHangList clear">
              <router-link to="to" v-for="(item, j) in clssDceCont2" :key="j" tag="li">
                <a href="#">
                  <span>{{item.Number}}</span>
                  {{item.lstTitle}}
                </a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
      <div class="cont2Box clear">
        <div class="middle">
          <div class="smLtBox">
            <h3 class="h3">
              <span>4F</span>
              儿童亲子
            </h3>
            <div class="picBoxs">
              <img src="../../assets/img/sing6.jpg">
              <div class="zzcBox">
                <p>
                  {{partCldCont.zzcTitle}}
                </p>
                <p>
                  {{partCldCont.money}}元
                </p>
              </div>
            </div>
            <div class="listBox">
              <ul class="cont2Lists clear">
                <router-link to="to" v-for="(item, i) in partCldCont1" :key="i" tag="li">
                  <div class="cont2PicBox">
                    <img src="../../assets/img/sing7.jpg" alt="">
                  </div>
                  <div class="cont2Cont">
                    <h4 class="h4">{{item.lstTitle}}</h4>
                    <p>{{item.lstDate}}</p>
                    <p>{{item.city}}</p>
                    <p>¥&nbsp;{{item.money}}起</p>
                  </div>
                </router-link>
              </ul>
            </div>
          </div>
          <div class="smRtBox">
            <h5 class="h5 clear">
            <span class="paiHang">
              热门演出排行
            </span>
              <a href="#">查看更多>></a>
            </h5>
            <ul class="paiHangList clear">
              <router-link to="to" v-for="(item, j) in partCldCont2" :key="j" tag="li">
                <a href="#">
                  <span>{{item.Number}}</span>
                  {{item.lstTitle}}
                </a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
      <div class="cont2Box clear">
        <div class="middle">
          <div class="smLtBox">
            <h3 class="h3">
              <span>5F</span>
              摇滚在路上
            </h3>
            <div class="picBoxs">
              <img src="../../assets/img/sing6.jpg">
              <div class="zzcBox">
                <p>
                  {{rockGoCont.zzcTitle}}
                </p>
                <p>
                  {{rockGoCont.money}}元
                </p>
              </div>
            </div>
            <div class="listBox">
              <ul class="cont2Lists clear">
                <router-link to="to" v-for="(item, i) in rockGoCont1" :key="i" tag="li">
                  <div class="cont2PicBox">
                    <img src="../../assets/img/sing7.jpg" alt="">
                  </div>
                  <div class="cont2Cont">
                    <h4 class="h4">{{item.lstTitle}}</h4>
                    <p>{{item.lstDate}}</p>
                    <p>{{item.city}}</p>
                    <p>¥&nbsp;{{item.money}}起</p>
                  </div>
                </router-link>
              </ul>
            </div>
          </div>
          <div class="smRtBox">
            <h5 class="h5 clear">
            <span class="paiHang">
              热门演出排行
            </span>
              <a href="#">查看更多>></a>
            </h5>
            <ul class="paiHangList clear">
              <router-link to="to" v-for="(item, j) in rockGoCont2" :key="j" tag="li">
                <a href="#">
                  <span>{{item.Number}}</span>
                  {{item.lstTitle}}
                </a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Search from '@/components/shenyintao/Search'
import Swiper from '@/components/shenyintao/Swiper'
export default {
  name: 'Home',
  data () {
    return {
      userData: [],
      contData: [],
      Mores: [],
      Conts: [],
      homeSpacilData: [],
      spacilCont: [],
      spacilCont1: [],
      dramasCont: [],
      dramasCont1: [],
      dramasCont2: [],
      sportsData: [],
      sportsCont: [],
      sportsCont1: [],
      sportsCont2: [],
      clssDceData: [],
      clssDceCont: [],
      clssDceCont1: [],
      clssDceCont2: [],
      partCldData: [],
      partCldCont: [],
      partCldCont1: [],
      partCldCont2: [],
      rockGoData: [],
      rockGoCont: [],
      rockGoCont1: [],
      rockGoCont2: [],
      show: false,
      index: 0,
      activeName: 'first',
      dateilData: '',
      homeTop: 0
    }
  },
  methods: {
    open (i) {
      this.index = i
      this.Mores = this.userData[this.index].More // 单独请求More的数据
      this.Conts = this.userData[this.index].cont // 单独请求cont的数据
      this.show = true
    },
    close: function () {
      this.show = false
    },
    getList () {
      this.$http.get(this.$url + 'lbt').then((res) => {
        this.userData = res.data.homeLtLst
      }).catch((error) => {
        console.log(error)
      })
    },
    getHomeSpacil () {
      this.$http.get(this.$url + 'homeSpecial').then((res) => {
        this.homeSpacilData = res.data.homeSpecial
        this.spacilCont = this.homeSpacilData[0].contList
        this.spacilCont1 = this.homeSpacilData[1].contList
      }).catch((error) => {
        console.log(error)
      })
    },
    dramas () {
      this.$http.get(this.$url + 'dramas').then((res) => {
        this.dramasData = res.data.dramas
        this.dramasCont = this.dramasData[0]
        this.dramasCont1 = this.dramasData[1].ulList
        this.dramasCont2 = this.dramasData[2].ulList
      }).catch((error) => {
        console.log(error)
      })
    },
    sportsEvents () {
      this.$http.get(this.$url + 'sportsEvents').then((res) => {
        this.sportsData = res.data.sportsEvents
        this.sportsCont = this.sportsData[0]
        this.sportsCont1 = this.sportsData[1].ulList
        this.sportsCont2 = this.sportsData[2].ulList
      }).catch((error) => {
        console.log(error)
      })
    },
    classicalDance () {
      this.$http.get(this.$url + 'classicalDance').then((res) => {
        this.clssDceData = res.data.classicalDance
        this.clssDceCont = this.clssDceData[0]
        this.clssDceCont1 = this.clssDceData[1].ulList
        this.clssDceCont2 = this.clssDceData[2].ulList
      }).catch((error) => {
        console.log(error)
      })
    },
    parentChild () {
      this.$http.get(this.$url + 'parentChild').then((res) => {
        this.partCldData = res.data.parentChild
        this.partCldCont = this.partCldData[0]
        this.partCldCont1 = this.partCldData[1].ulList
        this.partCldCont2 = this.partCldData[2].ulList
      }).catch((error) => {
        console.log(error)
      })
    },
    rockGo () {
      this.$http.get(this.$url + 'rockGo').then((res) => {
        this.rockGoData = res.data.rockGo
        this.rockGoCont = this.rockGoData[0]
        this.rockGoCont1 = this.rockGoData[1].ulList
        this.rockGoCont2 = this.rockGoData[2].ulList
      }).catch((error) => {
        console.log(error)
      })
    },
    Title (i) { // 跳转时将标题或者其他参数传递给详情页
      this.dateilData = this.homeSpacilData[0].contList[i].bgTitle
      this.$router.push({
        name: 'Detail',
        params: {
          titleData: this.dateilData
        }
      })
    }
  },
  created () {
    this.getList()
    this.getHomeSpacil()
    this.dramas()
    this.sportsEvents()
    this.classicalDance()
    this.parentChild()
    this.rockGo()
  },
  // activated/beforeRouteLeave未写完，勿删
  activated () {
    document.getElementById('app').scrollTop = this.homeTop || 0
  },
  beforeRouteLeave (to, from, next) {
    // console.log('leave')
    let app = document.getElementById('app')
    this.homeTop = app.scrollTop || 0
    console.log(this.homeTop)
    next()
  },
  components: {
    Header, // 公共头部页面，个别页面不需要使用，所以这里当做组件引入。
    Footer, // 公共底部页面，个别页面不需要使用，所以这里当做组件引入。
    Search,
    Swiper
  }
}
</script>

<style scoped lang="less">
  @import "~@/assets/less/middle";
  #home{
    .navTopBox{
      .middle{
        position: relative;
        h3{
          float: left;
          width: 202px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background: #000;
          font-size: 12px;
          color: #fff;
        }
        .navTopList{
          float: left;
          border: 1px solid #ccc;
          width: 996px;
          background: #fff;
          li{
            float: left;
            height: 48px;
            line-height: 48px;
            padding: 0 30px;
            cursor: pointer;
            &:hover{
              color: red;
            }
          }
        }
        .navLeftList{
          height: 420px;
          position: absolute;
          top: 50px;
          left: 0;
          z-index: 20;
          background: #ff3c1b;
          li{
            width: 202px;
            height: 50px;
            line-height: 50px;
            background: #ff3c1b;
            cursor: pointer;
            span:nth-of-type(1){
              float: left;
              display: inline-block;
              width: 180px;
              font-size: 12px;
              color: #fff;
              text-indent: 32px;
            }
            span:nth-of-type(2){
              float: left;
              display: inline-block;
              width: 22px;
              i{
                display: inline-block;
                width: 6px;
                height: 6px;
                border-top: 1px solid #fff;
                border-right: 1px solid #fff;
                transform: rotateZ(45deg) translate(-30%, -20%);
              }
            }
            &:nth-of-type(1){
              span:nth-of-type(1){
                &:before{
                  display: inline-block;
                  content: '';
                  width: 20px;
                  height: 20px;
                  background: url(../../assets/img/yanchangh.png) no-repeat center;
                  margin-right: 14px;
                  vertical-align: middle;
                }
              }
              &:hover{
                background: #de290a;
              }
            }
            &:nth-of-type(2){
              span:nth-of-type(1){
                &:before{
                  display: inline-block;
                  content: '';
                  width: 20px;
                  height: 20px;
                  background: url(../../assets/img/music.png) no-repeat center;
                  margin-right: 14px;
                  vertical-align: middle;
                }
              }
              &:hover{
                background: #de290a;
              }
            }
            &:nth-of-type(3){
              span:nth-of-type(1){
                &:before{
                  display: inline-block;
                  content: '';
                  width: 20px;
                  height: 20px;
                  background: url(../../assets/img/gejuhuaju.png) no-repeat center;
                  margin-right: 14px;
                  vertical-align: middle;
                }
              }
              &:hover{
                background: #de290a;
              }
            }
            &:nth-of-type(4){
              span:nth-of-type(1){
                &:before{
                  display: inline-block;
                  content: '';
                  width: 20px;
                  height: 20px;
                  background: url(../../assets/img/quyuanzatan.png) no-repeat center;
                  margin-right: 14px;
                  vertical-align: middle;
                }
              }
              &:hover{
                background: #de290a;
              }
            }
            &:nth-of-type(5){
              span:nth-of-type(1){
                &:before{
                  display: inline-block;
                  content: '';
                  width: 20px;
                  height: 20px;
                  background: url(../../assets/img/sports.png) no-repeat center;
                  margin-right: 14px;
                  vertical-align: middle;
                }
              }
              &:hover{
                background: #de290a;
              }
            }
            &:nth-of-type(6){
              span:nth-of-type(1){
                &:before{
                  display: inline-block;
                  content: '';
                  width: 20px;
                  height: 20px;
                  background: url(../../assets/img/children.png) no-repeat center;
                  margin-right: 14px;
                  vertical-align: middle;
                }
              }
              &:hover{
                background: #de290a;
              }
            }
            &:nth-of-type(7){
              span:nth-of-type(1){
                &:before{
                  display: inline-block;
                  content: '';
                  width: 20px;
                  height: 20px;
                  background: url(../../assets/img/dance.png) no-repeat center;
                  margin-right: 14px;
                  vertical-align: middle;
                }
              }
              &:hover{
                background: #de290a;
              }
            }
          }
        }
        .menuContBox{
          .menuConts{
            height: 420px;
            position: absolute;
            top: 50px;
            left: 202px;
            z-index: 10;
            .smContBoxes{
              width: 856px;
              height: 400px;
              background: rgba(172, 204, 236, .8);
              padding: 20px 22px 0;
              .titleBox{
                border-bottom: 1px dashed #000;
                padding-bottom: 18px;
                .title{
                  width: 72px;
                  height: 26px;
                  line-height: 26px;
                  text-align: center;
                  background: #fff;
                  border-radius: 6px;
                  font-size: 12px;
                  font-weight: normal;
                  float: left;
                  margin-right: 12px;
                }
                .rt{
                  float: left;
                }
                .tlileList{
                  float: left;
                  li{
                    float: left;
                    padding-left: 16px;
                    a{
                      font-size: 12px;
                      color: #000;
                      &:hover{
                        color: blue;
                      }
                    }
                    &:after{
                      display: inline-block;
                      content: '';
                      width: 1px;
                      height: 11px;
                      background: url(../../assets/img/shu.png) no-repeat center;
                      vertical-align: middle;
                      margin-left: 16px;
                    }
                    &:last-of-type{
                      &:after{
                        background: none;
                      }
                    }
                  }
                }
                .close{
                  cursor: pointer;
                  float: right;
                  margin-right: 6px;
                }
              }
              .h4{
                height: 64px;
                line-height: 64px;
                font-size: 18px;
                font-weight: normal;
              }
              .contCtList{
                li{
                  float: left;
                  width: 146px;
                  margin-right: 30px;
                  .picBox{
                    position: relative;
                    img{
                      width: 100%;
                    }
                    .zzc{
                      width: 100%;
                      height: 68px;
                      position: absolute;
                      bottom: 0;
                      left: 0;
                      background: rgba(186, 58, 38, .8);
                      p{
                        width: 120px;
                        font-size: 12px;
                        color: #fff;
                        margin: 0 auto;
                        &:nth-of-type(1){
                          margin-top: 12px;
                        }
                        &:nth-of-type(2){
                          margin-top: 6px;
                        }
                      }
                    }
                  }
                  p{
                    font-size: 12px;
                    color: #495060;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    a{
                      font-size: 12px;
                      color: #495060;
                    }
                    span{
                      color: #000;
                    }
                    &:nth-of-type(1){
                      height: 20px;
                      line-height: 20px;
                    }
                  }
                  &:last-of-type{
                    margin-right: 0;
                  }
                }
              }
            }
          }
        }
      }
    }
    .lbtBox{
      position: relative;
      /deep/ .el-carousel{
        height: 420px;
        /deep/ .el-carousel__container {
          height: 386px;
          /deep/ .el-carousel__item {
            img {
              height: 386px;
            }
          }
        }
      }
      .lbtBotns{
        width: 100%;
        height: 34px;
        background: #a01415;
        position: absolute;
        top: 386px;
      }
    }
    .contBoxes{
      .cont1Box{
        width: 1170px;
        background: #fff;
        height: 348px;
        padding-left: 30px;
        margin-top: 30px;
        .el-tabs--top{
          /deep/ .is-top{
            /deep/ .el-tabs__nav-wrap{
              /deep/ .el-tabs__nav-scroll{
                /deep/ .el-tabs__nav{
                  /deep/ .is-active{
                    color: red !important;
                  }
                  /deep/ .el-tabs__active-bar{
                    background: red;
                  }
                }
              }
            }
          }
        }
        .cont1List{
          li{
            float: left;
            height: 36px;
            line-height: 36px;
            padding: 0 16px;
            margin-right: 16px;
          }
        }
        .cont1CtList{
          li{
            width: 142px;
            float: left;
            margin-right: 48px;
            .picBox{
              position: relative;
              img{
                width: 100%;
              }
              .zzc{
                width: 100%;
                height: 68px;
                position: absolute;
                bottom: 0;
                left: 0;
                background: rgba(186, 58, 38, .8);
                p{
                  width: 120px;
                  font-size: 12px;
                  color: #fff;
                  margin: 0 auto;
                  &:nth-of-type(1){
                    margin-top: 12px;
                  }
                  &:nth-of-type(2){
                    margin-top: 6px;
                  }
                }
              }
            }
            p{
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              margin-top: 18px;
              font-size: 12px;
            }
          }
          li:last-of-type{
            margin-right: 0;
          }
        }
      }
      .cont2Box{
        margin-top: 30px;
        .smLtBox{
          float: left;
          width: 844px;
          height: 472px;
          background: #fff;
          padding: 0 26px;
          .h3{
            height: 68px;
            line-height: 68px;
            font-size: 16px;
            font-weight: normal;
            span{
              color: red;
              font-weight: bold;
            }
          }
          .picBoxs{
            width: 238px;
            position: relative;
            float: left;
            .zzcBox{
              width: 100%;
              position: absolute;
              bottom: 0;
              left: 0;
              background: rgba(186, 58, 38, .8);
              p{
                width: 200px;
                margin: 0 auto;
                word-wrap: break-word;
                font-size: 12px;
                color: #fff;
                &:nth-of-type(1){
                  margin-top: 20px;
                }
                &:nth-of-type(2){
                  margin: 16px auto 30px;
                }
              }
            }
            img{
              width: 100%;
              height: 364px;
            }
          }
          .listBox{
            margin-left: 16px;
            .cont2Lists{
              li{
                float: left;
                margin-left: 18px;
                margin-bottom: 64px;
                cursor: pointer;
                .cont2PicBox{
                  float: left;
                  width: 112px;
                  height: 150px;
                  img{
                    width: 100%;
                    height: 150px;
                  }
                }
                .cont2Cont{
                  float: left;
                  width: 148px;
                  font-size: 12px;
                  margin-left: 8px;
                  .h4{
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                  }
                  p{
                    height: 26px;
                    line-height: 26px;
                    &:nth-of-type(1){
                      margin-top: 42px;
                    }
                  }
                }
              }
            }
          }
        }
        .smRtBox{
          float: left;
          width: 232px;
          height: 454px;
          margin-left: 24px;
          background: #fff;
          padding: 18px 24px 0;
          .h5{
            font-size: 12px;
            font-weight: normal;
            .paiHang{
              float: left;
              margin-top: 12px;
              color: #000;
            }
            a{
              float: right;
              color: #000;
            }
          }
          .paiHangList{
            margin-top: 28px;
            li{
              font-size: 12px;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              margin-bottom: 16px;
              a{
                color: #000;
                span{
                  display: inline-block;
                  width: 16px;
                  height: 12px;
                  line-height: 12px;
                  text-align: center;
                  font-size: 12px;
                  color: #fff;
                  background: #808080;
                  margin-right: 8px;
                }
              }
              &:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3){
                span{
                  background: #ff3c1b;
                  vertical-align: middle;
                }
              }
            }
          }
        }
        &:last-of-type{
          margin-bottom: 30px;
        }
      }
    }
  }

</style>
