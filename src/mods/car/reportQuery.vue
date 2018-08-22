<template>
  <div>
    <yd-navbar title="报表查询" style="margin-bottom: 10px">
      <div slot="left" @click="goView('/car/car')" class="iconfont icon-back"></div>
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>

    <div>
      <el-row :gutter="1">
        <el-col :span="12"><div class="grid-content bg-purple-dark" style="margin: auto 10px">
          <el-input placeholder="车牌号"  v-model="schfilter" clearable>
          </el-input>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-dark" style="margin: auto 10px">
          <el-input placeholder="班次号"  v-model="schfilter" clearable>
          </el-input>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <yd-cell-item>
                  <span slot="left" style="margin-left: 2px">
                     <yd-datetime type="day" style="height: 30px;line-height: 30px;float: left;" v-model="datetime0"></yd-datetime>
                  </span>
            <span slot="left" style="margin-left: 5px" class="el-icon-caret-bottom"></span>
            <!--<span slot="left" style="margin-left: 5px;" ><i class="iconfont icon-arrow-down " style="opacity: 0.7;width: 2px"></i></span>-->
          </yd-cell-item>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">
          <yd-cell-item>
                  <span slot="left" style="margin-left: 2px">
                     <yd-datetime type="day" style="height: 30px;line-height: 30px;float: left;" v-model="datetime1"></yd-datetime>
                  </span>
            <span slot="left" style="margin-left: 5px" class="el-icon-caret-bottom"></span>
          </yd-cell-item>
        </div></el-col>
      </el-row>
    </div>
    <!--表格-->
    <div style="margin-top: 20px">
      <el-table
        :data="tableData"
        height="550"
        highlight-current-row
        stripe
        style="width: 100%">
        <el-table-column
          label="结算时间"
          prop="JSSJ_tb">
        </el-table-column>
        <el-table-column
          label="售票金额"
          prop="SPJE_tb">
        </el-table-column>
        <el-table-column
          label="人数"
          prop="RS_tb">
        </el-table-column>
        <el-table-column
          label="结算金额"
          prop="JSJE_tb">
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
  import { XTextarea } from 'vux'
  import { Group } from 'vux'
  import { XInput } from 'vux'

  export default {
    data() {
      return {
        tableData5: [
          {
            JSSJ_tb : '08-21 9:39',
            RS_tb: '15',
            SPJE_tb: '￥8.0',
            JSJE_tb: '￥120.0',
          },
          {
            JSSJ_tb : '08-03 9:39',
            RS_tb: '15',
            SPJE_tb: '￥8.0',
            JSJE_tb: '￥120.0',
          },
          {
            JSSJ_tb : '08-22 9:39',
            RS_tb: '15',
            SPJE_tb: '￥8.0',
            JSJE_tb: '￥120.0',
          },
          {
            JSSJ_tb : '08-25 9:39',
            RS_tb: '15',
            SPJE_tb: '￥8.0',
            JSJE_tb: '￥120.0',
          },
          {
            JSSJ_tb : '08-25 9:39',
            RS_tb: '15',
            SPJE_tb: '￥8.0',
            JSJE_tb: '￥120.0',
          },
        ],
        tableData:[],
        schfilter: '',
        value1: '',
        datetime0: '08-08',
        datetime1: '08-26',
      }
    },
    methods: {
      submitHandler(value) {
        this.$dialog.toast({mes: `班次号：${value}`});
      },
      formatTooltip(val) {
        return val / 100;
      },
      dateFilter() {
        this.tableData = this.tableData.filter(item => {
          let year = new Date().getFullYear();
          let start = new Date(year + '-' + this.datetime0).getTime();
          let end = new Date(year + '-' + this.datetime1).getTime();
          let item_data = new Date(year + '-' + item.JSSJ_tb).getTime();
          return start <= item_data && item_data <= end;
        });
      },
      keywordFilter() {
        let val = this.schfilter;
        if (val ==''){
          this.tableData = this.tableData5;
        } else {
          this.tableData = this.tableData5.filter(item => (
            !item.busnub_tb.indexOf(val)))
        }
      },
      tableFilter() {
        this.keywordFilter();
        this.dateFilter();
      }
    },
    watch: {
      schfilter(){
        this.tableFilter();
      },
      datetime0(){
        this.tableFilter();
      },
      datetime1(){
        this.tableFilter();
      }
    },
    created(){
      this.tableData = this.tableData5;
      this.tableFilter();
    }
  }

  // watch: {
  //   schfilter: function(val, oldVal){
  //     if(val==''){
  //       this.tableData=this.tableData5;
  //     }else{
  //       this.tableData = this.tableData5.filter( item => (!item.busnub_tb.indexOf(val)));
  //       console.log(val);
  //     }
  //   },
  // },
</script>

<style>
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
