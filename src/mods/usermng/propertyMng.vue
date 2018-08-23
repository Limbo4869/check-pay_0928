<template>
  <div>
    <yd-navbar title="权限管理" style="margin-bottom: 10px">
      <div slot="left" @click="goView('/usermng/User')" class="iconfont icon-back"></div>
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>

    <!--<el-table-->
      <!--:data="tableData"-->
      <!--style="width: 100%">-->
      <!--<el-table-column-->
        <!--label="用户性质">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--label="权限"-->
        <!--width="180">-->
      <!--</el-table-column>-->
    <!--</el-table>-->
    <div class="content_tb">
      <el-row class="title_tb" >
        <el-col :span="6"><div class="user">用 户 性 质</div></el-col>
        <el-col :span="18"><div class="property">权 限</div></el-col>
      </el-row>
      <el-row class="play" >
        <el-col :span="6"><div class="play_1"> 营运经理</div></el-col>
        <el-col :span="18">
          <el-checkbox v-model="car_1">车方业务</el-checkbox>
          <el-checkbox v-model="station_1">站务查询</el-checkbox>
          <el-checkbox v-model="ticket_1">票务查询</el-checkbox>
        </el-col>
      </el-row>
      <el-row class="play" >
        <el-col :span="6"><div class="play_1"> 票务主任</div></el-col>
        <el-col :span="18">
          <el-checkbox v-model="car_2">车方业务</el-checkbox>
          <el-checkbox v-model="station_2">站务查询</el-checkbox>
          <el-checkbox v-model="ticket_2">票务查询</el-checkbox>
        </el-col>
      </el-row>
      <el-row class="play" >
        <el-col :span="6"><div class="play_1"> 站务主任</div></el-col>
        <el-col :span="18">
          <el-checkbox v-model="car_3">车方业务</el-checkbox>
          <el-checkbox v-model="station_3">站务查询</el-checkbox>
          <el-checkbox v-model="ticket_3">票务查询</el-checkbox>
        </el-col>
      </el-row>
      <el-row class="play" >
        <el-col :span="6"><div class="play_1"> 票务员工</div></el-col>
        <el-col :span="18">
          <el-checkbox v-model="car_4">车方业务</el-checkbox>
          <el-checkbox v-model="station_4">站务查询</el-checkbox>
          <el-checkbox v-model="ticket_4">票务查询</el-checkbox>
        </el-col>
      </el-row>
      <el-row class="play" >
        <el-col :span="6"><div class="play_1"> 站务员工</div></el-col>
        <el-col :span="18">
          <el-checkbox v-model="car_5">车方业务</el-checkbox>
          <el-checkbox v-model="station_5">站务查询</el-checkbox>
          <el-checkbox v-model="ticket_5">票务查询</el-checkbox>
        </el-col>
      </el-row>
      <el-row class="play" >
        <el-col :span="6"><div class="play_1"> 车方用户</div></el-col>
        <el-col :span="18">
          <el-checkbox v-model="car_6">车方业务</el-checkbox>
          <el-checkbox v-model="station_6">站务查询</el-checkbox>
          <el-checkbox v-model="ticket_6">票务查询</el-checkbox>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        car_1:true,
        station_1:true,
        ticket_1:true,

        car_2:false,
        station_2:false,
        ticket_2:true,

        car_3:false,
        station_3:true,
        ticket_3:false,

        car_4:false,
        station_4:false,
        ticket_4:false,

        car_5:false,
        station_5:false,
        ticket_5:false,

        car_6:true,
        station_6:false,
        ticket_6:false,
        // tableData: [
        //   {
        //     play: '营运经理',
        //   },
        //   {
        //     play: '票务主任',
        //   },
        //   {
        //     play: '站务主任',
        //   },
        //   {
        //     play: '票务员工',
        //   },
        //   {
        //     play: '站务员工',
        //   },
        //   {
        //     play: '车方用户',
        //   },
        // ]
      }
    }
  }
</script>
<style>
  .el-checkbox+.el-checkbox {
    margin-left: 3px;
  }
  .play {
    min-height: 80px;
    line-height: 80px;
    text-align: center;
    /*border-bottom: 1px solid rgba(0,0,0,0.3);*/
    /*text-align: center;  gainsboro*/
  }
  .content_tb {
    margin: 10px;
  }
  .title_tb {
    /*margin: -50px 10px;*/
    text-align: center;
    border-bottom: 1px solid gainsboro;
    min-height: 50px;
    line-height: 50px;
    opacity: 0.7;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  body {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 14px;
    color: #444;
  }
</style>
