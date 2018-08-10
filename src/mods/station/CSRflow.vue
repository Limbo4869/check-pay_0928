<template>
  <div>
    <yd-navbar title="客流人数" style="margin-bottom: 10px">
      <div slot="left" @click="goView('/station/station')" class="iconfont icon-back"></div>
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>

    <div style="margin-left: 5px;margin-right: 5px">
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content bg-purple">
          <el-input
            placeholder="检票口或站点"
            v-model="input_jpk"
            clearable>
          </el-input>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light">
          <yd-cell-item>
                  <span slot="left" style="margin-left: 2px">
                     <yd-datetime type="date" style="height: 30px;line-height: 30px;float: left;" v-model="datetime1"></yd-datetime>
                  </span>
            <span slot="left" style="margin-left: 5px" class="el-icon-caret-bottom"></span>
          </yd-cell-item>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
          <el-button type="primary">全部查询</el-button>
        </div></el-col>
      </el-row>
    </div>

    <!--<div style="width: 1px;margin-left: 10px;margin-right: 5px; background: #000;margin-top: 15px;opacity: 0.3;height: 16px"></div>-->

    <div style="margin-top: 20px">
      <el-table
        :data="tableData5"
        height="550"
        show-summary
        highlight-current-row
        stripe
        style="width: 100%">

        <el-table-column
          label="时间段"
          prop="sjd_tb">
        </el-table-column>
        <el-table-column
          label="班次数量"
          prop="BCSL_tb">
        </el-table-column>
        <el-table-column
          label="准售人数"
          prop="ZSRS_tb">
        </el-table-column>
        <el-table-column
          label="未检人数"
          prop="WJRS_tb">
        </el-table-column>
      </el-table>
    </div>


  </div>
</template>

<script >
  import { XTextarea } from 'vux'
  import { Group } from 'vux'
  import { XInput } from 'vux'


  export default {
    data() {
      return {
        input_jpk:'',
        input_xl:'',

        tableData5: [{
          sjd_tb: '1-2',
          BCSL_tb: '2',
          ZSRS_tb: '80',
          WJRS_tb: '10',
        },
          {
            sjd_tb: '1-2',
            BCSL_tb: '2',
            ZSRS_tb: '80',
            WJRS_tb: '10',
          }, {
            sjd_tb: '1-2',
            BCSL_tb: '2',
            ZSRS_tb: '80',
            WJRS_tb: '10',
          },
          {
            sjd_tb: '1-2',
            BCSL_tb: '2',
            ZSRS_tb: '80',
            WJRS_tb: '10',
          }, {
            sjd_tb: '1-2',
            BCSL_tb: '2',
            ZSRS_tb: '80',
            WJRS_tb: '10',
          },
          {
            sjd_tb: '1-2',
            BCSL_tb: '2',
            ZSRS_tb: '80',
            WJRS_tb: '10',
          }, {
            sjd_tb: '1-2',
            BCSL_tb: '2',
            ZSRS_tb: '80',
            WJRS_tb: '10',
          },
          {
            sjd_tb: '1-2',
            BCSL_tb: '2',
            ZSRS_tb: '80',
            WJRS_tb: '10',
          }, {
            sjd_tb: '1-2',
            BCSL_tb: '2',
            ZSRS_tb: '80',
            WJRS_tb: '10',
          }
        ],


        value1: '',
        datetime0: '2018-08-02',
        datetime1: '2018-08-10',
        yearFormat: '<span style="color:#F00;">{value}<i style="font-size: 12px;margin-left: 1px;">年</i></span>',
        monthFormat: '<span style="color:#0BB20C;">{value}<i style="font-size: 12px;margin-left: 1px;">月</i></span>',
        dayFormat: '<span style="color:#FFB400;">{value}<i style="font-size: 12px;margin-left: 1px;">日</i></span>'
      }
    },
    methods: {
      submitHandler(value) {
        this.$dialog.toast({mes: `班次号：${value}`});
      },
      formatTooltip(val) {
        return val / 100;
      }

    }
  }




</script>

<style scoped>
  /*.el-row {*/
  /*margin-bottom: 10px;*/

  /*!*&*!*/
  /*!*:last-child {*!*/
  /*!*margin-bottom: 0;*!*/
  /*!*}*!*/

  /*}*/

  .yd-cell-item {
    padding-left:0rem!important
  }

  .yd-datetime-input {
    font-size: 10px;
  }
  .icon-arrow-down:before {
    font-size: 10px;
  }
  .demo-table-expand {
    font-size: 0;
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
