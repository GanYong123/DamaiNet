  <template>
    <div id="choose">
      <headers></headers>
      <Search>
        <div id="bread-nav" slot="bread" class="clear">
          <a>大麦</a>><a>北京</a>><a>电影</a>><a>{{title}}</a>><a>{{time}}</a>
        </div>
      </Search>
      <Footer></Footer>
    </div>
  </template>

<script>
import Headers from '../common/Header'
import Footer from '../common/Footer'
import Search from '../shenyintao/Search'
export default {
  name: 'Choose',
  data () {
    return {
      title: '大型多媒体励志互动儿童剧《奇门遁甲》(11月)',
      time: '1999-11-09 09:44:55'
    }
  },
  components: {
    Headers,
    Footer,
    Search
  }
}
</script>

<style scoped lang="less">
#choose{
    width: 100%;
  background: #f5f5f5;
    #bread-nav{
      height: 86px;
      line-height: 86px;
      color: #dddee1;
      clear: both;
      a{
        color: #000;
        font-size: 12px;
        margin: 0 10px;
      }
    }
}
</style>
