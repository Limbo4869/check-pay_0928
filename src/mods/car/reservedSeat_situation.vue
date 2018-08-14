<template>
  <div>
    <yd-navbar title="留位情况" style="margin-bottom: 10px">
      <div slot="left" @click="goView('/car/car')" class="iconfont icon-back"></div>
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>

    <div>
      <!--<el-row>-->
      <!--<el-col :span="24"><div class="grid-content bg-purple-dark">-->
      <!--<yd-search v-model="value1" :on-submit="submitHandler" placeholder="班次号"  cancel-text></yd-search>-->
      <!--</div></el-col>-->
      <!--</el-row>-->
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <yd-cell-item>
                  <span slot="left" style="margin-left: 2px">
                     <yd-datetime type="date" style="height: 30px;line-height: 30px;float: left;" v-model="datetime0"></yd-datetime>
                  </span>
              <span slot="left" style="margin-left: 5px" class="el-icon-caret-bottom"></span>
              <!--<span slot="left" style="margin-left: 5px;" ><i class="iconfont icon-arrow-down " style="opacity: 0.7;width: 2px"></i></span>-->
            </yd-cell-item>
          </div>
        </el-col>
      </el-row>
    </div>

    <!--<div style="width: 1px;margin-left: 10px;margin-right: 5px; background: #000;margin-top: 15px;opacity: 0.3;height: 16px"></div>-->

    <div style="margin-top: 20px">
      <el-table
        :data="tableData5"
        height="550"
        stripe
        highlight-current-row
        @row-click="rowChick"
        style="width: 100%">

        <el-table-column
          label="班次"
          prop="BC_tb">
        </el-table-column>
        <el-table-column
          label="站点"
          prop="ZD_tb">
        </el-table-column>
        <el-table-column
          label="计划发车"
          prop="JHFC_tb">
        </el-table-column>
        <el-table-column
          label="留位未出票"
          prop="WCP_tb">
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
          ZD_tb: '天河站',
          BC_tb: 'AZ4321',
          JHFC_tb: '08-14 17:10',
          WCP_tb: '0',
        }, {
          ZD_tb: '天河站',
          BC_tb: 'AZ4321',
          JHFC_tb: '08-14 17:10',
          WCP_tb: '0',
        }, {
          ZD_tb: '天河站',
          BC_tb: 'AZ4321',
          JHFC_tb: '08-14 17:10',
          WCP_tb: '0',
        }, {
          ZD_tb: '天河站',
          BC_tb: 'AZ4321',
          JHFC_tb: '08-14 17:10',
          WCP_tb: '0',
        }, {
          ZD_tb: '天河站',
          BC_tb: 'AZ4321',
          JHFC_tb: '08-14 17:10',
          WCP_tb: '0',
        }, {
          ZD_tb: '天河站',
          BC_tb: 'AZ4321',
          JHFC_tb: '08-14 17:10',
          WCP_tb: '0',
        }, {
          ZD_tb: '天河站',
          BC_tb: 'AZ4321',
          JHFC_tb: '08-14 17:10',
          WCP_tb: '0',
        }, {
          ZD_tb: '天河站',
          BC_tb: 'AZ4321',
          JHFC_tb: '08-14 17:10',
          WCP_tb: '0',
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
      rowChick:function(row, event, column) {
        this.$router.push({path:'/station/later_situation'});
      }

    }
  }




</script>



<style scoped>
  .yd-cell-left {
    margin-left: 220px;
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
