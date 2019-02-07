<template>
  <div id="detail">
    <Headers></Headers>
    <Search></Search>
    <div class="title-num">共&nbsp;<span>23</span>&nbsp;个商品</div>
    <div class="seactionCont">
      <div class="cont-left">
        <div class="subnav">
          <div class="citylist">
            <div class="list-warp">
              <span>城市:</span>
              <ul>
                <li @click="citytab(index)" v-for="(cityItem, index) in city" :key="index" :class="{active:index === cityPosition}">{{cityItem}}</li>
              </ul>
            </div>
          </div>
          <div class="citylist">
            <div class="list-warp">
              <span>分类:</span>
              <ul>
                <li @click="classifytab(index)" v-for="(classifyItem, index) in classify" :key="index" :class="{active:index === classifyPosition}">{{classifyItem}}</li>
              </ul>
            </div>
          </div>
          <div class="citylist">
            <div class="list-warp">
              <span>时间:</span>
              <ul>
                <li @click="timetab(index)" v-for="(timeItem, index) in time" :key="index" :class="{active:index === timePosition}">{{timeItem}}</li>
                <li>
                  <div class="block">
                    <el-date-picker
                      v-model="value13"
                      type="daterange"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :default-time="['00:00:00', '23:59:59']">
                    </el-date-picker>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="listCont">
          <div class="listBtn">
            <ul>
              <li @click="listMenu=0" :class="{active:listMenu==0}">热门推荐</li>
              <li @click="listMenu=1" :class="{active:listMenu==1}">最新开场</li>
              <li @click="listMenu=2" :class="{active:listMenu==2}">最新上架</li>
            </ul>
            <div class="arrange">
              <span @click="arranges(0)" :class="{active:arrange===0}"><i class="iconfont icon-gengduo"></i></span>
              <span @click="arranges(1)" :class="{active:arrange===1}"><i class="iconfont icon-windows"></i></span>
            </div>
          </div>
          <div class="listBox">
            <ul :class="{change:arrange===1}">
              <li v-for="(Item, index) in listDatas" :key="index">
                <img src="../../assets/img/detalis.jpg" alt="">
                <div class="list-details">
                  <h5 class="details-title">[<span>{{Item.title.city}}</span>]{{Item.title.titleTxt}}</h5>
                  <p class="details-subTitle">{{Item.subTitle}}</p>
                  <p class="details-time"><span class="iconfont icon-calendar-line span-color"></span>{{Item.time}}</p>
                  <div class="details-site"><span class="iconfont icon-weizhi span-color"></span>{{Item.site}}</div>
                  <div class="tickets">
                    <span style="font-weight: bold;" class="span-color">{{Item.price}}</span>
                    <span>售票中</span>
                  </div>
                  <div class="electronic"><span class="iconfont icon-saoma span-color"></span>{{Item.electronic}}</div>
                </div>
              </li>
            </ul>
            <el-pagination
              background
              layout="total, prev, pager, next"
              :page-size="quantity"
              @current-change="handleCurrentChange"
              :total="listquantity">
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="cont-right">
        <div class="recommend">
          <h3>您可能还喜欢</h3>
          <ul>
            <li>
              <img src="../../assets/img/detalis.jpg" alt="图片">
              <div class="recommend-txt">
                <h6>推荐标题文字内容</h6>
                <p>地址地址地址地址地址地址</p>
                <p>时间时间时间时间时间时间</p>
                <p>
                  <span>98元</span>
                  <span>起</span>
                </p>
              </div>
            </li>
            <li>
              <img src="../../assets/img/detalis.jpg" alt="图片">
              <div class="recommend-txt">
                <h6>推荐标题文字内容</h6>
                <p>地址地址地址地址地址地址</p>
                <p>时间时间时间时间时间时间</p>
                <p>
                  <span>98元</span>
                  <span>起</span>
                </p>
              </div>
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
  data () {
    return {
      cityPosition: 0, // 城市分类选项的切换下标
      classifyPosition: 0, // 音乐分类选项的切换下标
      timePosition: 0, // 时间分类选项的切换下标
      listMenu: 0, // 推荐分类选项的切换下标
      arrange: 0, // 布局切换下标
      paging: 0, // 分页器下标
      city: ['全部', '北京', '上海', '深圳', '杭州', '广州', '成都', '西安'],
      classify: ['全部', '音乐会', '朗诵', '曲苑杂坛', '独奏', '管弦乐', '声乐'],
      time: ['全部', '今天', '明天'],
      value13: [], // 日期选中组件的存放容器
      quantity: 6, // 分页器组件的每页显示数量
      listquantity: 0,
      listDatas: []
    }
  },
  components: {
    Headers,
    Footer,
    Search
  },
  methods: {
    citytab (index) {
      this.cityPosition = index
    },
    classifytab (index) {
      this.classifyPosition = index
    },
    timetab (index) {
      this.timePosition = index
      if (index === 1) { // 点击今天时才执行该方法
        this.today()
      }
    },
    today () { // 获取今天的时间
      let date = new Date()
      let seperator1 = '-'
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      let todaycurrentdate = year + seperator1 + month + seperator1 + strDate
      let numDate = parseInt(strDate) + 1 // 获取截至到明天的时间
      if (numDate >= 0 && numDate <= 9) {
        numDate = '0' + numDate
      }
      let tomorrowcurrentdate = year + seperator1 + month + seperator1 + numDate
      this.value13 = [] // 先清空再赋值
      this.value13.push(todaycurrentdate, tomorrowcurrentdate)
    },
    arranges (tag) { // 布局切换
      this.arrange = tag
    },
    handleCurrentChange (val) {
      let page = val
      this.paging = page - 1 // 分页器组件默认从1开始，拿到组件的分页器值并将它变成从0开始
      this.getListData()
    },
    getListData () {
      const that = this
      that.$http.get('https://easy-mock.com/mock/5c42c815fa4bae6ac3633357/DamaiNet/screen').then((res) => {
        that.listDatas = res.data.ScreenData[that.paging].lists // 使用组件的下标来获取对应分页的数据
        if (that.listquantity === 0) { // 分页器等于0的时候则为初始状态。
          let listLength = 0 // 储存数据的总长度
          for (var i = 0; i < res.data.ScreenData.length; i++) {
            listLength += res.data.ScreenData[i].lists.length // 可能出现最后一页数据与之前页数据不相等的情况，这里做了一个加法，让每页数据相加。
          }
          that.listquantity = listLength // 获取到的数据条目赋值给组件
        }
      })
    }
  },
  created () {
    this.getListData()
  }
}
</script>

<style lang="less" scoped>
 #detail{
  width: 100%;
  background: #f5f5f5;
  .title-num{
    width: 1200px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    font-size: 12px;
    text-indent: 20px;
    color: #666666;
    background: #ffffff;
    span{
      color: #ff3c1b;
    }
  }
  .seactionCont{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    background: #f5f5f5;
    .cont-left{
      width: 926px;
      padding-bottom: 40px;
      .subnav{
        width: 878px;
        height: 228px;
        border: 1px solid #e9e9e9;
        padding: 0 24px;
        background: #ffffff;
        .citylist{
          height: 67px;
          padding-top: 10px;
          border-bottom: 1px dashed #e9e9e9;
          .list-warp{
            height: 26px;
            line-height: 26px;
            font-size: 12px;
            color: #3b3a3a;
            span{
              margin-left: 44px;
              float: left;
              display: block;
            }
            ul{
              margin-left: 20px;
              float: left;
              li{
                margin-left: 28px;
                padding: 0 8px;
                float: left;
                cursor: pointer;
                .el-input__inner{
                  height: 30px;
                  line-height: 30px;
                  .el-range-separator{
                    line-height: 22px;
                  }
                }
                /deep/.block{ // 需要更改ui组件样式的顶层容器的样式前，加上 /deep/，更改组件样式和写自定义样式互不影响
                  .el-date-editor{
                    .el-range__icon{
                      line-height: 12px;
                    }
                    .el-range-separator{
                      line-height: 22px;
                    }
                    .el-range__close-icon{
                      line-height: 22px;
                    }
                  }
                }
              }
              li:nth-of-type(1),li:nth-of-type(2){
                margin-left: 10px;
              }
              .active{
                background: #ff3c1b;
                color: #ffffff;
              }
            }
          }
        }
        .citylist:last-of-type{
          border: none;
        }
      }
      .listCont{
        width: 926px;
        margin-top: 15px;
        padding-bottom: 20px;
        background: #ffffff;
        border: 1px solid #ececec;
        .listBtn{
          height: 32px;
          line-height: 32px;
          text-align: center;
          background: #f8f8f9;
          ul{
            float: left;
            li{
              width: 88px;
              font-size: 12px;
              color: #495060;
              cursor: pointer;
              float: left;
            }
            .active{
              color: #ff3c1b;
              background: #ffffff;
            }
          }
          .arrange{
            margin-right: 30px;
            float: right;
            overflow: hidden;
            span{
              width: 47px;
              height: 30px;
              border: 1px solid #dddee1;
              display: block;
              float: left;
              cursor: pointer;
            }
            .active{
              color: #ff3c1b;
              border: 1px solid #ff3c1b;
            }
            span:first-of-type{
              border-top-left-radius: 3px;
              border-bottom-left-radius: 3px;
            }
            span:last-of-type{
              border-top-right-radius: 3px;
              border-bottom-right-radius: 3px;
            }
          }
        }
      }
      .listBox{
        padding: 0 10px;
        ul{
          li{
            height: 224px;
            margin-top: 22px;
            padding-top: 18px;
            border-bottom: 1px dashed #cecece;
            overflow: hidden;
            img{
              float: left;
              margin-left: 10px;
            }
          .list-details{
            float: left;
            margin-left: 20px;
              .span-color{
                color: #ff3c1c;
                display: inline-block;
                margin-right: 8px;
              }
              .details-title{
                width: 240px;
                height: 30px;
                line-height: 30px;
                font-size: 16px;
                color: #1b1b1b;
                font-weight: normal;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
              }
              .details-subTitle{
                height: 27px;
                line-height: 27px;
                font-size: 12px;
                color: #999999;
              }
              .details-time{
                height: 30px;
                line-height: 30px;
                font-size: 12px;
                color: #999999;
              }
              .details-site{
                width: 240px;
                height: 30px;
                line-height: 30px;
                font-size: 13px;
                color: #1b1b1b;
                cursor: pointer;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
              }
              .tickets{
                height: 30px;
                line-height: 30px;
                font-size: 13px;
                span:last-of-type{
                  display: inline-block;
                  margin-left: 8px;
                  color: #999999;
                }
              }
              .electronic{
                height: 30px;
                line-height: 30px;
                font-size: 13px;
                color: #1b1b1b;
              }
            }
          }
        }
        .change{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li{
            width: 430px;
            border: none;
          }
        }
      }
      /deep/.el-pagination{
        display: flex;
        justify-content: center;
        margin-top: 20px;
        color: #495060;
        font-weight: normal;
        .btn-prev,.btn-next{
          background: none;
          border: 1px solid #dddee1;
        }
        li{
          line-height: 26px;
          background: none;
          border: 1px solid #dddee1;
        }
        li.active{
          background: #ff3c1b;
        }
      }
    }
    .cont-right{
      width: 256px;
      .recommend{
        padding-bottom: 15px;
        background: #ffffff;
        border: 1px solid #e6e6e6;
        h3{
          height: 38px;
          line-height: 38px;
          font-size: 12px;
          text-indent: 16px;
          font-weight: normal;
          color: #495060;
          background: #e6e6e6;
        }
        ul{
          li{
            margin: 20px 0 0 15px;
            overflow: hidden;
            img{
              width: 98px;
              height: 132px;
              float: left;
            }
            .recommend-txt{
              float: left;
              margin-left: 10px;
              h6{
                height: 62px;
                font-size: 12px;
                color: #1b1b1b;
                font-weight: normal;
              }
              p:nth-of-type(1),p:nth-of-type(2){
                height: 20px;
                width: 120px;
                line-height: 20px;
                font-size: 12px;
                color: #999999;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
              }
              p:nth-of-type(3){
                height: 16px;
                line-height: 16px;
                font-size: 12px;
                margin-top: 12px;
                span{
                  display: inline-block;
                }
                span:first-of-type{
                  color: #ff3c1b;
                  margin-right: 8px;
                  font-weight: bold;
                }
                span:last-of-type{
                  color: #999999;
                }
              }
            }
          }
        }
      }
    }
  }
}
.el-input__icon .el-range__icon .el-icon-time{
  background: red;
}
</style>
