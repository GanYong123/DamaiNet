<template>
  <!--购票页-->
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
              <el-breadcrumb-item>账户中心</el-breadcrumb-item>
              <el-breadcrumb-item>常用购票人</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="lpni">
            <div class="pic-btn">
              <el-row>
                <el-button type="danger">新建购票人</el-button>
              </el-row>
            </div>
            <div class="teap">
              <el-table
                :data="tableData4"
                style="width: 100%"
                max-height="250">
                <el-table-column
                  fixed
                  prop="date"
                  label="#"
                  width="62">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="257">
                </el-table-column>
                <el-table-column
                  prop="province"
                  label="卡类型"
                  width="257">
                </el-table-column>
                <el-table-column
                  prop="city"
                  label="身份证号"
                  width="257">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作"
                  width="150">
                  <template slot-scope="scope">
                    <el-button
                      @click.native.prevent="deleteRow(scope.$index, tableData4)"
                      type="text"
                      size="small">
                      移除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Headers from "../common/Header";
import Foot from "../common/Footer";
import Search from "../shenyintao/Search";
export default {
  name: 'Inform',
  data () {
    return {
      isShow: false,
      tabPosition: 'left',
      input10: '',
      tableData4: [{
        date: '1',
        name: '王小虎',
        province: '身份证',
        city: '376567876357890723'
      }, {
        date: '2',
        name: '王小虎',
        province: '身份证',
        city: '376567876357890723'
      }, {
        date: '3',
        name: '王小虎',
        province: '身份证',
        city: '376567876357890723'
      }],
      isCollapse: false
    }
  },
  components: {Search, Foot, Headers},
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
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
    overflow: hidden;
  }
  .main .pead .tap .lpni .pic-btn{
    float: right;
    margin-top: 15px;
  }
  .main .pead .tap .lpni .teap{
    margin-top: 70px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 50px;
    border: none;
  }
 </style>
