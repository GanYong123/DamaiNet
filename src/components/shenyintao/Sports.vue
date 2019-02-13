<template>
  <div id="sports">
    <!-- 头部 -->
    <Header></Header>
    <!-- 头部搜索 -->
    <Search></Search>
    <!-- 头部导航 -->
    <Choses></Choses>
    <!-- 轮播图 -->
    <Swiper></Swiper>
    <!-- 猜你喜欢 -->
    <div class="cnxhListBox middle">
      <div class="contTitle">
        <img src="../../assets/img/cainixih.jpg">
      </div>
      <ul class="cnxhList clear">
        <li>
          <img src="../../assets/img/lqsj.jpg">
          <p>小柯音乐剧&nbsp;我变了，我变了，我变了</p>
          <p>票价&nbsp;:&nbsp;<span>￥120</span>&nbsp;起</p>
        </li>
        <li>
          <img src="../../assets/img/lqsj.jpg">
          <p>小柯音乐剧&nbsp;我变了，我变了，我变了</p>
          <p>票价&nbsp;:&nbsp;<span>￥120</span>&nbsp;起</p>
        </li>
        <li>
          <img src="../../assets/img/lqsj.jpg">
          <p>小柯音乐剧&nbsp;我变了，我变了，我变了</p>
          <p>票价&nbsp;:&nbsp;<span>￥120</span>&nbsp;起</p>
        </li>
        <li>
          <img src="../../assets/img/lqsj.jpg">
          <p>小柯音乐剧&nbsp;我变了，我变了，我变了</p>
          <p>票价&nbsp;:&nbsp;<span>￥120</span>&nbsp;起</p>
        </li>
        <li>
          <img src="../../assets/img/lqsj.jpg">
          <p>小柯音乐剧&nbsp;我变了，我变了，我变了</p>
          <p>票价&nbsp;:&nbsp;<span>￥120</span>&nbsp;起</p>
        </li>
        <li>
          <img src="../../assets/img/lqsj.jpg">
          <p>小柯音乐剧&nbsp;我变了，我变了，我变了</p>
          <p>票价&nbsp;:&nbsp;<span>￥120</span>&nbsp;起</p>
        </li>
      </ul>
    </div>
    <!-- 精彩聚集 -->
    <div class="jcjjListBox middle">
      <div class="contTitle">
        <img src="../../assets/img/jcjj.jpg">
      </div>
      <div class="jcjjLists clear">
        <div class="jcjjLeft">
          <img src="../../assets/img/nanbeizf.jpg" alt="">
        </div>
        <ul class="jcjjList clear">
          <li>
            <img src="../../assets/img/damaox.jpg" alt="">
          </li>
          <li>
            <img src="../../assets/img/kongcj.jpg" alt="">
          </li>
          <li>
            <img src="../../assets/img/damaox.jpg" alt="">
          </li>
          <li>
            <img src="../../assets/img/nanbeizf.jpg" alt="">
          </li>
          <li>
            <img src="../../assets/img/xuedi.jpg" alt="">
          </li>
          <li>
            <img src="../../assets/img/kongcj.jpg" alt="">
          </li>
        </ul>
        <div class="jcjjRight">
          <img src="../../assets/img/xuedi.jpg" alt="">
        </div>
      </div>
    </div>
    <!-- banner图片 -->
    <div class="hdxdBox middle">
      <ul class="hdxdList clear">
        <li>
          <a href="#">
            <img src="../../assets/img/haidixiaodui.png">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/haidixiaodui.png">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/haidixiaodui.png">
          </a>
        </li>
      </ul>
    </div>
    <!-- 专区部分 -->
    <div class="zqbf middle">
      <ul class="zqbfNavList clear">
        <li v-for="(item, i) in userData" :key="i" :class="{ 'active' : i === index ? 'active' : ''}" @click="first(i)">
          {{item.title}}
        </li>
      </ul>
      <ul class="zqbfContList clear">
        <li v-for="(item, j) in contData" :key="j">
          <img src="../../assets/img/szxz.jpg" alt="">
          <div class="contXx">
            <p>{{item.ContTitle}}</p>
            <p>{{item.ContTime}}</p>
            <p>{{item.ContSmTitle}}</p>
            <p>￥ {{item.ContMoney}}起</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 热门排行 -->
    <div class="rmphBox middle">
      <div class="contTitle">
        <img src="../../assets/img/rmph.jpg">
      </div>
      <div class="picBoxs">
        <img src="../../assets/img/sing6.jpg">
        <div class="zzcBox">
          <p>
            我六断织身候山难社青众我六断织身候山难社青众上。
          </p>
          <p>
            2018.1.8
          </p>
        </div>
      </div>
      <div class="listBox">
        <ul class="cont2Lists clear">
          <li>
            <div class="cont2PicBox">
              <img src="../../assets/img/sing7.jpg" alt="">
            </div>
            <div class="cont2Cont">
              <h4 class="h4">记口程数给万石我单别积外育验基得却革。</h4>
              <p>2008-05-16-1999-02-14</p>
              <p>山西省&nbsp;朔州市</p>
              <p>¥&nbsp;701起</p>
            </div>
          </li>
          <li>
            <div class="cont2PicBox">
              <img src="../../assets/img/sing7.jpg" alt="">
            </div>
            <div class="cont2Cont">
              <h4 class="h4">记口程数给万石我单别积外育验基得却革。</h4>
              <p>2008-05-16-1999-02-14</p>
              <p>山西省&nbsp;朔州市</p>
              <p>¥&nbsp;701起</p>
            </div>
          </li>
          <li>
            <div class="cont2PicBox">
              <img src="../../assets/img/sing7.jpg" alt="">
            </div>
            <div class="cont2Cont">
              <h4 class="h4">记口程数给万石我单别积外育验基得却革。</h4>
              <p>2008-05-16-1999-02-14</p>
              <p>山西省&nbsp;朔州市</p>
              <p>¥&nbsp;701起</p>
            </div>
          </li>
          <li>
            <div class="cont2PicBox">
              <img src="../../assets/img/sing7.jpg" alt="">
            </div>
            <div class="cont2Cont">
              <h4 class="h4">记口程数给万石我单别积外育验基得却革。</h4>
              <p>2008-05-16-1999-02-14</p>
              <p>山西省&nbsp;朔州市</p>
              <p>¥&nbsp;701起</p>
            </div>
          </li>
          <li>
            <div class="cont2PicBox">
              <img src="../../assets/img/sing7.jpg" alt="">
            </div>
            <div class="cont2Cont">
              <h4 class="h4">记口程数给万石我单别积外育验基得却革。</h4>
              <p>2008-05-16-1999-02-14</p>
              <p>山西省&nbsp;朔州市</p>
              <p>¥&nbsp;701起</p>
            </div>
          </li>
          <li>
            <div class="cont2PicBox">
              <img src="../../assets/img/sing7.jpg" alt="">
            </div>
            <div class="cont2Cont">
              <h4 class="h4">记口程数给万石我单别积外育验基得却革。</h4>
              <p>2008-05-16-1999-02-14</p>
              <p>山西省&nbsp;朔州市</p>
              <p>¥&nbsp;701起</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 日历 -->
    <div class="dateBox">
      <fullcalendar></fullcalendar>
    </div>
    <!-- 合作方 -->
    <div class="hzfBox middle">
      <div class="contTitle">
        <img src="../../assets/img/hezuof.jpg">
      </div>
      <ul class="hzfList clear">
        <li>
          <img src="../../assets/img/hzuo1.gif" alt="">
        </li>
        <li>
          <img src="../../assets/img/hzuo2.gif" alt="">
        </li>
        <li>
          <img src="../../assets/img/hzuo3.gif" alt="">
        </li>
        <li>
          <img src="../../assets/img/hzuo4.gif" alt="">
        </li>
        <li>
          <img src="../../assets/img/hzuo5.gif" alt="">
        </li>
        <li>
          <img src="../../assets/img/hzuo6.gif" alt="">
        </li>
        <li>
          <img src="../../assets/img/hzuo7.gif" alt="">
        </li>
        <li>
          <img src="../../assets/img/hzuo8.gif" alt="">
        </li>
        <li>
          <img src="../../assets/img/hzuo9.gif" alt="">
        </li>
        <li>
          <img src="../../assets/img/hzuo10.gif" alt="">
        </li>
        <li>
          <img src="../../assets/img/hzuo11.gif" alt="">
        </li>
        <li>
          <img src="../../assets/img/hzuo12.gif" alt="">
        </li>
      </ul>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import fullcalendar from 'vue-fullcalendar'
import Search from '@/components/shenyintao/Search'
import Choses from '@/components/shenyintao/Choses'
import Swiper from '@/components/shenyintao/Swiper'
export default {
  name: 'Sports',
  data () {
    return {
      userData: [],
      contData: [],
      index: 0
    }
  },
  methods: {
    getSpacil () {
      this.$http.get(this.$url + 'special').then((res) => {
        this.userData = res.data.special
        this.contData = this.userData[0].contList
        console.log(this.userData)
      }).catch((error) => {
        console.log(error)
      })
    },
    first (i) {
      this.index = i
      this.contData = this.userData[this.index].contList
      console.log(this.contData)
    }
  },
  created () {
    this.getSpacil()
  },
  components: {
    Header,
    Search,
    Choses,
    fullcalendar,
    Swiper,
    Footer
  }
}
</script>

<style scoped lang="less">
  @import "~@/assets/less/middle";
  #sports{
    /deep/ #choses{
      /deep/ .chosesList{
        /deep/ li:nth-of-type(2){
          background: red;
          color: #fff;
        }
      }
    }
    /deep/ .el-carousel{
      /deep/ .el-carousel__container{
        height: 261px;
      }
    }
    .cnxhListBox{
      margin: 20px auto 0;
      background: #fff;
      .contTitle{
        width: 614px;
        margin: 0 auto;
      }
      .cnxhList{
        margin-left: 3px;
        li{
          float: left;
          width: 144px;
          margin-right: 66px;
          img{
            width: 100%;
          }
          p:nth-of-type(1){
            font-size: 12px;
            color: #000;
            margin-top: 20px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
          p:nth-of-type(2){
            font-size: 12px;
            color: #ccc;
            margin: 18px 0 10px;
            span{
              color: #000;
            }
          }
          &:last-of-type{
            margin-right: 0;
          }
        }
      }
    }
    .jcjjListBox{
      margin: 20px auto 0;
      background: #fff;
      .contTitle{
        width: 614px;
        margin: 0 auto;
      }
      .jcjjLists{
        .jcjjLeft{
          float: left;
          margin-left: 4px;
        }
        .jcjjList{
          float: left;
          width: 590px;
          margin-left: 12px;
          li{
            float: left;
            width: 186px;
            height: 264px;
            margin: 0 0 10px 10px;
            cursor: pointer;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        .jcjjRight{
          float: left;
          margin-left: 24px;
        }
      }
    }
    .hdxdBox{
      margin-top: 20px;
      .hdxdList{
        li{
          float: left;
          margin-right: 24px;
          &:last-of-type{
            margin-right: 0;
          }
        }
      }
    }
    .zqbf{
      position: relative;
      top: 20px;
      height: 300px;
      .zqbfNavList{
        z-index: 10;
        li{
          float: left;
          width: 102px;
          height: 30px;
          line-height: 30px;
          background: #fff;
          border: 1px solid #ccc;
          border-bottom: none;
          text-align: center;
          cursor: pointer;
        }
        li.active{
          border: 1px solid red;
          border-bottom: 1px solid #fff;
        }
      }
      .zqbfContList{
        position: absolute;
        top: 31px;
        background: #fff;
        padding-top: 30px;
        border-top: 1px solid #ccc;
        z-index: -1;
        li{
          float: left;
          margin: 0 0 10px 8px;
          img{
            float: left;
            width: 210px;
          }
          .contXx{
            float: left;
            width: 160px;
            margin-left: 8px;
            margin-right: 10px;
            p{
              font-size: 12px;
              line-height: 18px;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              &:nth-of-type(2){
                margin-top: 6px;
              }
            }
          }
        }
      }
    }
    .rmphBox{
      margin-top: 20px;
      background: #fff;
      .contTitle{
        width: 614px;
        margin: 0 auto;
      }
      .picBoxs{
        width: 200px;
        height: 316px;
        position: relative;
        float: left;
        .zzcBox{
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          background: rgba(186, 58, 38, .8);
          p{
            width: 164px;
            margin: 0 auto;
            word-wrap: break-word;
            font-size: 12px;
            color: #fff;
            text-align: center;
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
          height: 316px;
        }
      }
      .listBox{
        margin-left: 16px;
        .cont2Lists{
          li{
            float: left;
            margin-left: 18px;
            margin-bottom: 14px;
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
            }
          }
        }
      }
    }
    .dateBox{
      /deep/ .comp-full-calendar{
        max-width: 1200px;
        padding: 0;
        border-radius: 50px 50px 0 0;
        overflow: hidden;
        margin-top: 20px;
        /deep/ .full-calendar-header{
          height: 120px;
          line-height: 120px;
          background: red;
          /deep/ .header-center{
            flex: none;
            /deep/ span{
              font-size: 20px;
              color: #fff;
            }
          }
        }
        /deep/ .full-calendar-body{
          margin-top: 0;
          .weeks{
            border: none;
            border-bottom: 1px solid #eee;
            .week{
              height: 46px;
              line-height: 48px;
              background: #eaeaea;
              border: none;
              color: red;
              font-weight: normal;
            }
          }
          .dates{
            .week-row{
              .day-cell{
                .day-number{
                  text-align: left;
                }
              }
            }
          }
        }
      }
    }
    .hzfBox{
      margin: 20px auto 20px;
      background: #fff;
      .contTitle{
        width: 614px;
        margin: 0 auto;
      }
      .hzfList{
        width: 938px;
        margin: 0 auto;
        li{
          float: left;
        }
      }
    }
  }
</style>
