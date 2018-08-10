<template>
  <div>
    <yd-navbar title="晚点详情" style="margin-bottom: 10px">
      <div slot="left" @click="goView('/station/later')" class="iconfont icon-back"></div>
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>
    <!--<div style="width: 1px;margin-left: 10px;margin-right: 5px; background: #000;margin-top: 15px;opacity: 0.3;height: 16px"></div>-->
    <div style="margin-top: 20px">
      <el-table
        :data="tableData5"
        height="750"
        highlight-current-row
        stripe
        :default-sort = "{prop: 'planTime_tb', order: 'descending'}"
        style="width: 100%">
        <el-table-column
          label="站点名称"
          prop="ZDname_tb">
        </el-table-column>
        <el-table-column
          label="计划发车时间"
          prop="planTime_tb">
        </el-table-column>
        <el-table-column
          label="未检人数"
          prop="WJnumb_tb">
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

        tableData5: [{
          planTime_tb: '07:30',
          ZDname_tb: '天河站',
          WJnumb_tb: '8',
        },
          {
            planTime_tb: '07:30',
            ZDname_tb: '天河站',
            WJnumb_tb: '8',
          }, {
            planTime_tb: '07:30',
            ZDname_tb: '天河站',
            WJnumb_tb: '8',
          }, {
            planTime_tb: '07:30',
            ZDname_tb: '天河站',
            WJnumb_tb: '8',
          }, {
            planTime_tb: '07:30',
            ZDname_tb: '天河站',
            WJnumb_tb: '8',
          }, {
            planTime_tb: '07:30',
            ZDname_tb: '天河站',
            WJnumb_tb: '8',
          }, {
            planTime_tb: '07:30',
            ZDname_tb: '天河站',
            WJnumb_tb: '8',
          }, {
            planTime_tb: '07:30',
            ZDname_tb: '天河站',
            WJnumb_tb: '8',
          }, {
            planTime_tb: '07:30',
            ZDname_tb: '天河站',
            WJnumb_tb: '8',
          }, {
            planTime_tb: '07:30',
            ZDname_tb: '天河站',
            WJnumb_tb: '8',
          }, {
            planTime_tb: '07:30',
            ZDname_tb: '天河站',
            WJnumb_tb: '8',
          }, {
            planTime_tb: '07:30',
            ZDname_tb: '天河站',
            WJnumb_tb: '8',
          }, {
            planTime_tb: '07:30',
            ZDname_tb: '天河站',
            WJnumb_tb: '8',
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
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }

    }
  }
</script>
<style>
  .el-radio+.el-radio {
    margin-left: 5px;
    margin-top: 15px;
  }
  .el-radio {
    padding-left: 10px;
  }

  .yd-datetime-input {
    font-size: 12px;
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
