<template>
  <div>
    <yd-navbar title="发班效率" style="margin-bottom: 10px">
      <div slot="left" @click="goView('/station/station')" class="iconfont icon-back"></div>
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>

    <div>

        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-radio v-model="radio" label="1">已发班</el-radio>
              <el-radio v-model="radio" label="2">未发班</el-radio>
            </div>
          </el-col>
          <el-col :span="12">
            <!--<div class="grid-content bg-purple-light">-->
            <div>
             <!--<span>时间设定</span> <span><el-input v-model="input_min" placeholder="15"></el-input></span>-->
              <!--<el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="60"></el-input-number>-->
              <el-input-number v-model="num4"></el-input-number>
            </div>
            <!--</div>-->
          </el-col>
        </el-row>
    </div>
    <div style="margin-top: 20px">
      <el-table
        :data="tableData5"
        height="550"
        stripe
        highlight-current-row
        :default-sort = "{prop: 'fbtime', order: 'descending'}"
        style="width: 100%">
        <el-table-column
          label="班次"
          prop="bc_tb">
        </el-table-column>
        <el-table-column
          label="站点名称"
          prop="zdname_tb">
        </el-table-column>
        <el-table-column
          label="检票口"
          prop="jpkou_tb">
        </el-table-column>
        <el-table-column
          sortable
          width="100"
          label="发班用时"
          prop="fbtime_tb">
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
        num4: 15,
        radio: '1',
        input_min: '',

        tableData5: [{
          bc_tb: 'AZ4321',
          zdname_tb: '天河站',
          jpkou_tb: '08',
          fbtime_tb: '12min'
        },
          {
            bc_tb: 'AZ4340',
            zdname_tb: '越秀站',
            jpkou_tb: '06',
            fbtime_tb: '15min'
          }, {
            bc_tb: 'PO347',
            zdname_tb: '广园站',
            jpkou_tb: '03',
            fbtime_tb: '18min'
          }, {
            bc_tb: 'TY5478',
            zdname_tb: '天河站',
            jpkou_tb: '02',
            fbtime_tb: '12min'
          }, {
            bc_tb: 'GR4321',
            zdname_tb: '火车站',
            jpkou_tb: '01',
            fbtime_tb: '10min'
          }, {
            bc_tb: 'TY5447',
            zdname_tb: '越秀站',
            jpkou_tb: '06',
            fbtime_tb: '01min'
          }, {
            bc_tb: 'GR4321',
            zdname_tb: '广园站',
            jpkou_tb: '08',
            fbtime_tb: '02min'
          }, {
            bc_tb: 'AZ4345',
            zdname_tb: '越秀站',
            jpkou_tb: '09',
            fbtime_tb: '14min'
          }, {
            bc_tb: 'GR4321',
            zdname_tb: '天河站',
            jpkou_tb: '08',
            fbtime_tb: '04min'
          }, {
            bc_tb: 'TY5447',
            zdname_tb: '广园站',
            jpkou_tb: '08',
            fbtime_tb: '09min'
          }, {
            bc_tb: 'PO347',
            zdname_tb: '天河站',
            jpkou_tb: '08',
            fbtime_tb: '19min'
          }, {
            bc_tb: 'TY5474',
            zdname_tb: '火车站',
            jpkou_tb: '08',
            fbtime_tb: '22min'
          }, {
            bc_tb: 'PO3477',
            zdname_tb: '火车站',
            jpkou_tb: '08',
            fbtime_tb: '16min'
          }, {
            bc_tb: 'AZ4321',
            zdname_tb: '天河站',
            jpkou_tb: '08',
            fbtime_tb: '17min'
          }, {
            bc_tb: 'PO3497',
            zdname_tb: '广园站',
            jpkou_tb: '08',
            fbtime_tb: '11min'
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
