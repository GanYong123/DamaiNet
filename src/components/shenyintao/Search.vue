<template>
  <div id="search">
    <div class="middle clear">
      <a href="Home.vue" class="logo">
        <img src="../../assets/img/homelogo.png" />
      </a>
      <div class="areaBox" @mouseover="mouseover" @mouseleave="mouseleave">
        <span class="area">全国</span>
        <span class="more"></span>
        <div class="moreArea clear" v-show="show">
          <span class="jiant"></span>
          <div class="choseCity clear">
            <p>
              当前城市:
              <span>全国</span>
            </p>
            <p>
              热门城市:
              <span>北京</span>
              <span>上海</span>
              <span>深圳</span>
              <span>广州</span>
              <span>杭州</span>
              <span>天津</span>
              <span>重庆</span>
              <span>成都</span>
              <span>香港</span>
            </p>
          </div>
          <div class="moreCityBox clear">
            <p class="otherCity">其他城市:</p>
            <div class="moreCity">
              <span>上海</span>
              <span>北京</span>
              <span>深圳</span>
              <span>成都</span>
              <span>天津</span>
              <span>杭州</span>
              <span>武汉</span>
              <span>广州</span>
              <span>重庆</span>
              <span>南京</span>
              <span>西安</span>
              <span>苏州</span>
              <span>宁波</span>
              <span>长沙</span>
              <span>香港</span>
              <span>济南</span>
              <span>郑州</span>
              <span>昆明</span>
              <span>青岛</span>
              <span>石家庄</span>
              <span>无锡</span>
              <span>厦门</span>
              <span>贵阳</span>
              <span>合肥</span>
              <span>常州</span>
              <span>南宁</span>
              <span>绍兴</span>
              <span>宜昌</span>
              <span>包头</span>
              <span>沈阳</span>
              <span>太原</span>
              <span>长春</span>
              <span>哈尔滨</span>
              <span>南昌</span>
              <span>大连</span>
              <span>河源</span>
              <span>呼和浩特</span>
              <span>珠海</span>
              <span>佛山</span>
              <span>烟台</span>
              <span>中山</span>
              <span>澳门</span>
              <span>东莞</span>
              <span>海口</span>
              <span>大同</span>
              <span>泉州</span>
              <span>南通</span>
              <span>桂林</span>
              <span>廊坊</span>
              <span>银川</span>
              <span>江门</span>
              <span>潍坊</span>
              <span>温州</span>
              <span>扬州</span>
              <span>遵义</span>
              <span>嘉兴</span>
              <span>金华</span>
              <span>兰州</span>
              <span>绵阳</span>
              <span>台州</span>
              <span>唐山</span>
              <span>张家口</span>
              <span>蚌埠</span>
              <span>惠州</span>
              <span>荆州</span>
              <span>眉山</span>
              <span>秦皇岛</span>
              <span>汕头</span>
              <span>台北</span>
              <span>泰州</span>
              <span>乌鲁木齐</span>
              <span>徐州</span>
              <span>自贡</span>
              <span>阿坝</span>
              <span>鞍山</span>
              <span>安庆</span>
              <span>北海</span>
              <span>昌吉</span>
              <span>大理</span>
              <span>德阳</span>
              <span>广安</span>
              <span>湖州</span>
              <span>黄冈</span>
              <span>黄石</span>
              <span>金昌</span>
              <span>晋中</span>
              <span>荆门</span>
              <span>九江</span>
              <span>洛阳</span>
              <span>马鞍山</span>
              <span>曲靖</span>
              <span>三亚</span>
              <span>韶关</span>
              <span>芜湖</span>
              <span>西宁</span>
              <span>湘潭</span>
              <span>盐城</span>
              <span>湛江</span>
              <span>肇庆</span>
              <span>境外</span>
              <span>淄博</span>
            </div>
          </div>
        </div>
      </div>
      <div class="searchBox">
        <input type="text" placeholder="请输入演出、艺人、场馆名称..." class="searchBar">
        <div class="searchBtn">搜索</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      show: false
    }
  },
  methods: {
    mouseover: function () {
      this.show = true
    },
    mouseleave: function () {
      this.show = false
    }
  }
}
</script>

<style scoped lang="less">
  @import "~@/assets/less/middle";
  #search{
    height: 128px;
    padding-top: 16px;
    .middle{
      .logo{
        float: left;
        margin-right: 36px;
        img{
          width: 132px;
          height: 58px;
        }
      }
      .areaBox{
        float: left;
        margin-right: 118px;
        position: relative;
        .area{
          display: inline-block;
          width: 40px;
          height: 30px;
          font-size: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor: pointer;
        }
        .more{
          display: inline-block;
          width: 8px;
          height: 8px;
          -margin-left: 4px;
          border-bottom: 1px solid #000;
          border-right: 1px solid #000;
          transform: translateY(-170%) rotateZ(45deg);
          cursor: pointer;
        }
        .moreArea{
          position: absolute;
          top: 30px;
          left: -30px;
          background: #fff;
          width: 668px;
          height: 456px;
          border: 1px solid #ccc;
          z-index: 30;
          .jiant{
            display: inline-block;
            width: 10px;
            height: 10px;
            border-top: 1px solid #ccc;
            border-left: 1px solid #ccc;
            transform: rotateZ(45deg) translate(210%,-370%);
            background: #fff;
          }
          .choseCity{
            p:nth-of-type(1){
             span{
               display: inline-block;
               padding: 4px 10px;
               border: 1px solid palevioletred;
               border-radius: 6px;
               color: palevioletred;
               cursor: pointer;
             }
           }
            p:nth-of-type(2){
              span{
                display: inline-block;
                padding: 4px 10px;
                cursor: pointer;
              }
            }
          }
          .moreCityBox{
            .otherCity{
              float: left;
            }
            .moreCity{
              float: left;
              width: 600px;
              span{
                display: inline-block;
                padding: 4px 10px;
                cursor: pointer;
              }
            }
          }
        }
      }
      .searchBox{
        float: left;
        width: 570px;
        height: 34px;
        border: 3px solid red;
        .searchBar{
          width: 480px;
          height: 34px;
          line-height: 34px;
          text-indent: 10px;
          border: none;
          outline: none;
          background: none;
        }
        .searchBtn{
          width: 90px;
          height: 34px;
          line-height: 34px;
          text-align: center;
          float: right;
          background: #ff3c1b;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
</style>
