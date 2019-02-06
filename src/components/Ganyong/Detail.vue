<template>
  <div id="detail">
    <Headers></Headers>
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
              <span :title="123" @click="arranges(0)" :class="{active:arrange===0}"><i class="iconfont icon-gengduo"></i></span>
              <span :title="X" @click="arranges(1)" :class="{active:arrange===1}"><i class="iconfont icon-windows"></i></span>
            </div>
          </div>
          <div class="listBox">
            <ul :class="{change:arrange===1}">
              <li>文字内容1</li>
              <li>文字内容2</li>
              <li>文字内容3</li>
              <li>文字内容4</li>
              <li>文字内容5</li>
            </ul>
            <el-pagination
              background
              layout="total, prev, pager, next"
              :page-size="quantity"
              :total="23">
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="cont-right"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Headers from '../common/Header'
import Footer from '../common/Footer'
export default {
  name: 'detail',
  data () {
    return {
      cityPosition: 0, // 城市分类选项的切换下标
      classifyPosition: 0, // 音乐分类选项的切换下标
      timePosition: 0, // 时间分类选项的切换下标
      listMenu: 0, // 推荐分类选项的切换下标
      arrange: 0, // 布局切换下标
      city: ['全部', '北京', '上海', '深圳', '杭州', '广州', '成都', '西安'],
      classify: ['全部', '音乐会', '朗诵', '曲苑杂坛', '独奏', '管弦乐', '声乐'],
      time: ['全部', '今天', '明天'],
      value13: [], // 日期选中组件的存放容器
      quantity: 6 // 分页器组件的每页显示数量
    }
  },
  components: {
    Headers,
    Footer
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
    }
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
        ul{
          li{
            height: 300px;
            margin-top: 30px;
            border: 1px solid red;
            font-size: 30px;
          }
        }
        .change{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li{
            width: 300px;
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
      border: 1px solid black;
    }
  }
}
.el-input__icon .el-range__icon .el-icon-time{
  background: red;
}
</style>
