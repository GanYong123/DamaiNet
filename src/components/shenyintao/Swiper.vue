<template>
  <div id="swiper">
    <el-carousel :interval="5000" width="100%" arrow="always">
      <el-carousel-item v-for="(item, index) in bannerData" :key="index">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  data () {
    return {
      bannerData: [
        {img: require('../../assets/img/banner1.jpg')},
        {img: require('../../assets/img/banner2.jpg')},
        {img: require('../../assets/img/banner1.jpg')}
      ]
    }
  }
}
</script>

<style scoped lang="less">
  @import "~@/assets/less/middle";
  #swiper{
    width: 100%;
    margin: 0 auto;
    .el-carousel{
      /deep/ .el-carousel__container{
        /deep/ .el-carousel__item{
          img{
            width: 1200px;
            margin: 0 auto;
          }
        }
      }
    }
  }
</style>
