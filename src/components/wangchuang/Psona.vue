<template>
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
            <el-breadcrumb-item>个人信息</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="lpni">
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="基本资料" name="first">
              <div class="haet">
                <p>完善更多，有助我们为您提供个性化服务，大麦网尊重并保护你的隐私</p>
              </div>
              <div class="lkat name">
                <span><i>*</i>昵称</span>
                <div class="text">
                  <input id="name" type="text" placeholder="请输入您的昵称"/>
                </div>
                <span id="labe" style="display: none;">输入错误，请输入11位手机号</span>
              </div>
              <div class="lkat teleop">
                <span><i>*</i>联系电话</span>
                <div class="text">
                  <input type="tel" placeholder="请输入您的电话"/>
                </div>
              </div>
              <div class="lkat potname">
                <span>真实姓名</span>
                <div class="text">
                  <input type="tel" placeholder="请输入您的真实姓名"/>
                </div>
              </div>
              <div class="lkat late">
                <span>身份证号</span>
                <div class="text">
                  <input type="tel" placeholder="请输入身份证证号"/>
                </div>
              </div>
              <div class="poaw">
                <span>生日</span>
                <div class="block">
                  <span class="demonstration"></span>
                  <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </div>
              </div>
              <div class="sex">
                <span>性别</span>
                <el-radio v-model="radio" label="1">男</el-radio>
                <el-radio v-model="radio" label="2">女</el-radio>
              </div>
              <div class="bot">
                <el-row>
                  <el-button type="danger">保存</el-button>
                </el-row>
              </div>
            </el-tab-pane>
            <el-tab-pane label="头像设置" name="second">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-tab-pane>
            <el-tab-pane label="兴趣爱好" name="third">游戏、音乐</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
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
      activeName2: 'first',
      dialogImageUrl: '',
      dialogVisible: false,
      isCollapse: false,
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      value1: '',
      radio: '1'
    }
  },
  components: {Search, Foot, Headers},
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
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
  height: 690px;
  width: 1200px;
  position: relative;
  overflow: hidden;
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
.main .pead .tap .lpni .haet{
  border: 1px solid #edd28b;
  font-size: 12px;
  background: #fffdee;
  line-height: 40px;
  padding-left: 25px;
  margin-left: 25px;
  margin-right: 25px;
  height: 40px;
}
.main .pead .tap .lpni .lkat{
  overflow: hidden;
}
.main .pead .tap .lpni .name{
  margin-left: 32px;
  text-align: left;
}
.pead .tap .lpni .name #labe{
  color: red;
  margin-left: 5px;
}
.main .pead .tap .lpni .teleop{
  text-align: left;
}
.main .pead .tap .lpni .late{
  margin-left: 7px;
}
.main .pead .tap .lpni .potname{
  margin-left: 7px;
}
.main .pead .tap .lpni .lkat span{
  float: left;
  margin-top: 18px;
  line-height: 33px;
}
.main .pead .tap .lpni .lkat span i{
  color: red;
  font-style: normal;
}
.main .pead .tap .lpni input{
  border: none;
  width: 302px;
}
.main .pead .tap .lpni .text{
  margin-left: 15px;
  float: left;
  margin-top: 18px;
  border: 1px solid #ccc;
  height: 33px;
  line-height: 33px;
  width: 320px;
  display: block;
}
.main .pead .tap .lpni .poaw{
  overflow: hidden;
  margin-top: 18px;
  margin-left: 25px;
}
.main .pead .tap .lpni .poaw span{
  float: left;
  padding-right: 5px;
  height: 33px;
  margin-left: 10px;
  line-height: 33px;
}
.main .pead .tap .lpni .sex{
  margin-left: 33px;
}
.main .pead .tap .lpni .sex .el-radio{
  margin-left: 18px;
  margin-top: 35px;
}
.main .pead .tap .lpni .bot{
  margin-top: 35px;
  width: 157px;
  text-align: right;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 50px;
  border: none;
}
</style>
