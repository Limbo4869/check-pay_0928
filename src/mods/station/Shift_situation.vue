<template>
  <div>
    <yd-navbar title="班次情况" style="margin-bottom: 10px">
      <div slot="left" @click="goView('/station/station')" class="iconfont icon-back"></div>
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>

    <div>
      <el-row :gutter="10">
        <el-col :span="24"><div class="grid-content bg-purple-dark" style="margin: auto 10px">
          <!--<yd-search v-model="value1" :on-submit="submitHandler" placeholder="班次号"  cancel-text></yd-search>-->
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

    <div style="margin-top: 20px">
      <el-table
        :data="tableData"
        height="550"
        highlight-current-row
        stripe
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="班次号">
                <span>{{ props.row.busnub_tb }}</span>
              </el-form-item>
              <el-form-item label="计划">
                <span>{{ props.row.plan_tb }}</span>
              </el-form-item>
              <el-form-item label="日期">
                <span>{{ props.row.time_tb }}</span>
              </el-form-item>
              <el-form-item label="状态">
                <span>{{ props.row.state_tb }}</span>
              </el-form-item>
              <el-form-item label="车型">
                <span>{{ props.row.car_tb  }}</span>
              </el-form-item>
              <el-form-item label="报班">
                <span>{{ props.row.shift_tb }}</span>
              </el-form-item>
              <el-form-item label="结算">
                <span>{{ props.row.count_tb }}</span>
              </el-form-item>
              <el-form-item label="准/已/结">
                <span>{{ props.row.numb_tb }}</span>
              </el-form-item>

            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="日期"
          prop="time_tb">
        </el-table-column>
        <el-table-column
          label="状态"
          prop="state_tb">
        </el-table-column>
        <el-table-column
          label="准 /已 /结"
          prop="numb_tb">
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

        tableData5: [{
          shift_tb: '14:39',
          plan_tb: '15:30',
          time_tb: '08-15',
          state_tb: '发',
          numb_tb: '59 / 20 / 20',
          car_tb: '座',
          count_tb: '14:50',
          busnub_tb:'AZ432'
        },
          {
          shift_tb: '14:39',
          plan_tb: '15:30',
          time_tb: '08-12',
          state_tb: '发',
          numb_tb: '59 / 20 / 20',
          car_tb: '座',
          count_tb: '14:50',
          busnub_tb:'GZ4321'
        }, {
          shift_tb: '14:39',
          plan_tb: '15:30',
          time_tb: '08-30',
          state_tb: '发',
          numb_tb: '59 / 20 / 20',
          car_tb: '座',
          count_tb: '14:50',
          busnub_tb:'BC4321'
        }, {
          shift_tb: '14:39',
          plan_tb: '15:30',
          time_tb: '08-08',
          state_tb: '发',
          numb_tb: '59 / 20 / 20',
          car_tb: '座',
          count_tb: '14:50',
          busnub_tb:'AZ5691'
        }, {
          shift_tb: '14:39',
          plan_tb: '15:30',
          time_tb: '08-05',
          state_tb: '发',
          numb_tb: '59 / 20 / 20',
          car_tb: '座',
          count_tb: '14:50',
          busnub_tb:'AZ4918'
        }, {
          shift_tb: '14:39',
          plan_tb: '15:30',
          time_tb: '08-09',
          state_tb: '发',
          numb_tb: '59 / 20 / 20',
          car_tb: '座',
          count_tb: '14:50',
          busnub_tb:'KO4321'
        }, {
          shift_tb: '14:39',
          plan_tb: '15:30',
          time_tb: '08-10',
          state_tb: '发',
          numb_tb: '59 / 20 / 20',
          car_tb: '座',
          count_tb: '14:50',
          busnub_tb:'GZ4321'
        }, {
          shift_tb: '14:39',
          plan_tb: '15:30',
          time_tb: '08-19',
          state_tb: '发',
          numb_tb: '59 / 20 / 20',
          car_tb: '座',
          count_tb: '14:50',
          busnub_tb:'AZ432'
        }, {
          shift_tb: '14:39',
          plan_tb: '15:30',
          time_tb: '08-24',
          state_tb: '发',
          numb_tb: '59 / 20 / 20',
          car_tb: '座',
          count_tb: '14:50',
          busnub_tb:'YH432'
        }, {
          shift_tb: '14:39',
          plan_tb: '15:30',
          time_tb: '08-26',
          state_tb: '发',
          numb_tb: '59 / 20 / 20',
          car_tb: '座',
          count_tb: '14:50',
          busnub_tb:'YH8530'
        }, {
          shift_tb: '14:39',
          plan_tb: '15:30',
          time_tb: '08-22',
          state_tb: '发',
          numb_tb: '59 / 20 / 20',
          car_tb: '座',
          count_tb: '14:50',
          busnub_tb:'HY3064'
        }, {
          shift_tb: '14:39',
          plan_tb: '15:30',
          time_tb: '08-10',
          state_tb: '发',
          numb_tb: '59 / 20 / 20',
          car_tb: '座',
          count_tb: '14:50',
          busnub_tb:'KO4321'
        }, {
          shift_tb: '14:39',
          plan_tb: '15:30',
          time_tb: '08-09',
          state_tb: '发',
          numb_tb: '59 / 20 / 20',
          car_tb: '座',
          count_tb: '14:50',
          busnub_tb:'KO4321'
        }, {
          shift_tb: '14:39',
          plan_tb: '15:30',
          time_tb: '08-08',
          state_tb: '发',
          numb_tb: '59 / 20 / 20',
          car_tb: '座',
          count_tb: '14:50',
          busnub_tb:'TY4321'
        }, {
          shift_tb: '14:39',
          plan_tb: '15:30',
          time_tb: '08-02',
          state_tb: '发',
          numb_tb: '59 / 20 / 20',
          car_tb: '座',
          count_tb: '14:50',
          busnub_tb:'TY4321'
        }
        ],
        tableData:[],
        schfilter: '',
        value1: '',
        datetime0: '08-08',
        datetime1: '08-16',
      }
    },
    methods: {
      // submitHandler(value) {
      //   this.$dialog.toast({mes: `班次号：${value}`});
      // },
      // formatTooltip(val) {
      //   return val / 100;
      // },
      dateFilter() {
        this.tableData = this.tableData.filter(item => {
          let year = new Date().getFullYear();
          let start = new Date(year + '-' + this.datetime0).getTime();
          let end = new Date(year + '-' + this.datetime1).getTime();
          let item_data = new Date(year + '-' + item.time_tb).getTime();
          return start <= item_data && item_data <= end;
        });
      },
      keywordFilter() {
        let val = this.schfilter;
        if (val =='') {
          this.tableData = this.tableData5;
        }else{
          this.tableData = this.tableData5.filter(item => (
            !item.busnub_tb.indexOf(val)))
          }
        },
      tableFilter() {
        this.keywordFilter();
        this.dateFilter ();
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
