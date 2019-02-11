  <template>
    <div id="choose">
      <headers></headers>
      <Search></Search>
      <div id="bread-nav">
        <a>大麦</a>><a>北京</a>><a>电影</a>><a>{{title}}</a>><a>{{time}}</a>
      </div>
      <Footer></Footer>
    </div>
  </template>

<script>
import Headers from '../common/Header'
import Footer from '../common/Footer'
import Search from '../shenyintao/Search'
export default {
  name: 'Choose',
  components: {
    Headers,
    Footer,
    Search
  }
}
</script>

<style scoped lang="less">

</style>
