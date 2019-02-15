<template>
  <!--订单页-->
    <div id="pers">
      <Headers></Headers>
      <Search></Search>
      <div class="main">
        <div class="pead">
          <div class="loat">
            <div class="mike">
              <p>我的大麦</p>
            </div>
            <div class="lsom">
              <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <el-submenu index="1">
                  <template slot="title">
                    <span slot="title" style="margin-left: 5px">交易中心</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">订单管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </div>
            <div class="paot">
              <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <el-submenu index="1">
                  <template slot="title">
                    <span slot="title" style="margin-left: 5px">账户中心</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">个人信息</el-menu-item>
                    <el-menu-item index="1-2">常用购票人</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </div>
          </div>
          <div class="tap">
            <div class="wotp">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">我的大麦</el-breadcrumb-item>
                <el-breadcrumb-item>交易中心</el-breadcrumb-item>
                <el-breadcrumb-item>订单管理</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="lpni">
              <p>近期订单列表</p>
              <hr/>
              <div class="lets">
                <el-dropdown>
                <span class="el-dropdown-link">
                  全部订单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                <span class="el-dropdown-link">
                  全部<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <!--搜索框和按钮-->
              <div id="klao">
                <div class="pare">
                  <el-input
                    placeholder="请输入订单编号、商品名称"
                    v-model="input10"
                    clearable>
                  </el-input>
                </div>
                <div class="query">
                  <el-row>
                    <el-button>查询</el-button>
                  </el-row>
                </div>
              </div>
            </div>
            <div class="form">
              <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                  fixed
                  prop="string"
                  label="订单编号"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="购买日期"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="province"
                  label="商品名称"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="charAt"
                  label="数量"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="单价"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="订单金额"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="varchar"
                  label="交易状态"
                  width="120">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作"
                  width="100">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <!--<el-tabs :tab-position="tabPosition" style="height: 200px;">-->
              <!--<el-tab-pane label="订单管理">-->
                <!--你好-->
              <!--</el-tab-pane>-->
              <!--<el-tab-pane label="个人信息">配置管理</el-tab-pane>-->
              <!--<el-tab-pane label="角色管理">角色管理</el-tab-pane>-->
            <!--</el-tabs>-->
          </div>
        </div>
      </div>
      <Foot></Foot>
    </div>
</template>

<script>
import Headers from '../common/Header'
import Foot from '../common/Footer'
import Search from '../shenyintao/Search'
export default {
  name: 'Person',
  data () {
    return {
      isShow: false,
      tabPosition: 'left',
      input10: '',
      tableData: [{
        date: '2016-05-03 09:51:48',
        string: '620000127863',
        province: '上海',
        charAt: '2',
        address: '151',
        zip: 200333,
        varchar: '待支付'
      }, {
        date: '2016-05-03 09:51:48',
        string: '620000127863',
        province: '上海',
        charAt: '2',
        address: '151',
        zip: 200333,
        varchar: '待支付'
      }, {
        date: '2016-05-03 09:51:48',
        string: '620000127863',
        province: '上海',
        charAt: '2',
        address: '151',
        zip: 200333,
        varchar: '待支付'
      }],
      isCollapse: false
    }
  },
  components: {Search, Foot, Headers},
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.main{
  border-top: 1px solid red;
  background: #f5f5f5;
  height: 412px;
  width: 100%;
  padding-top: 20px;
}
  .main .pead{
    background: #fff;
    margin: 0 auto;
    height: 370px;
    width: 1200px;
  }
  .main .pead .loat{
    width: 200px;
    height: 295px;
    background: #fff;
    float: left;
  }
.main .pead .loat span{
  cursor: pointer;
}
.main .pead .loat .mike{
  background: #ff5c41;
  height: 50px;
}
.main .pead .loat .paot span i{
  margin-left: 78px;
}
.main .pead .loat .lsom span{
  font-size: 14px;
}
.main .pead .loat .lsom span i{
  margin-left: 78px;
}
.main .pead .loat .lsom span ul{
  margin-left: 26px;
  margin-top: 36px;
}
.main .pead .loat .lsom span ul li{
  color: red;
}
.main .pead .loat .mike p{
  color: #fff;
  margin-left: 26px;
  font-size: 14px;
  padding-top: 15px;
}
.el-dropdown-link {
  cursor: pointer;
  /*color: #409EFF;*/
}
.el-icon-arrow-down {
  font-size: 12px;
}
.main .pead .tap{
  float: left;
  width: 982px;
  margin-left: 18px;
}
.main .pead .tap .wotp{
  height: 29px;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  padding-left: 16px;
  padding-top: 10px;
  background: -webkit-linear-gradient(#ccc, #fff);
  background: -o-linear-gradient(#ccc, #fff);
  background: -moz-linear-gradient(#ccc, #fff);
  background: linear-gradient(#ccc, #fff);
}
.main .pead .tap .lpni{
  margin-top: 42px;
  overflow: hidden;
}
.main .pead .tap .lpni p{
  color: red;
}
.main .pead .tap .lpni .el-dropdown-link{
  /*border: 1px solid #ccc;*/
  padding: 10px;
  height: 30px;
  border-radius: 5px;
  line-height: 30px;
  width: 150px;
}
.main .pead .tap .lpni .el-dropdown-link i{
  padding-left: 99px;
}
.main .pead .tap .lpni .lets{
  float: left;
}
.main .pead .tap .lpni .pare{
  width: 300px;
  float: left;
}
.main .pead .tap .lpni .query{
  float: left;
  margin-left: 1px;
}
.main .pead .tap .lpni #klao{
  float: right;
}
.main .pead .tap .form{
  height: 187px;
  overflow: hidden;
  margin-top: 23px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 50px;
  border: none;
}
</style>
