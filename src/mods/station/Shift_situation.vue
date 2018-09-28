<template>
  <div>
    <yd-navbar title="移动支付线上检测情况" style="margin-bottom: 10px">
      <!--<div slot="left" @click="goView('/station/station')" class="iconfont icon-back"></div>-->
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>

    <div>
      <el-row :gutter="10">
        <el-col :span="24"><div class="grid-content bg-purple-dark" style="margin: auto 10px">
          <!--<yd-search v-model="value1" :on-submit="submitHandler" placeholder="班次号"  cancel-text></yd-search>-->
          <el-input placeholder="请输入地市或客运站"  v-model="schfilter" clearable>
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
              <el-form-item label="上线时间">
                <span>{{ props.row.onlineTime_tb }}</span>
              </el-form-item>
              <el-form-item label="站级">
                <span>{{ props.row.stationLevel_tb }}</span>
              </el-form-item>
              <el-form-item label="沟通支付">
                <span>{{ props.row.commPay_tb }}</span>
              </el-form-item>
              <el-form-item label="窗口保险">
                <span>{{ props.row.winInsurance_tb }}</span>
              </el-form-item>
              <el-form-item label="pad数量">
                <span>{{ props.row.car_tb  }}</span>
              </el-form-item>
              <el-form-item label="使用数量">
                <span>{{ props.row.shift_tb }}</span>
              </el-form-item>
              <el-form-item label="数据交易">
                <span>{{ props.row.dataTime_tb }}</span>
              </el-form-item>
              <el-form-item label="商品号码">
                <span>{{ props.row.productNum_tb }}</span>
              </el-form-item>

              <el-form-item label="移动支付">
                <span></span>
              </el-form-item>
              <el-form-item label="   ">
                <span></span>
              </el-form-item>
              <el-form-item label="售票数量">
                <span>{{ props.row.count_tb }}</span>
              </el-form-item>
              <el-form-item label="售票金额">
                <span>{{ props.row.numb_tb }}</span>
              </el-form-item>
              <el-form-item label="退票数量">
                <span>{{ props.row.count_tb }}</span>
              </el-form-item>
              <el-form-item label="退票金额">
                <span>{{ props.row.numb_tb }}</span>
              </el-form-item>
              <el-form-item label="退保数量">
                <span>{{ props.row.count_tb }}</span>
              </el-form-item>
              <el-form-item label="退保金额">
                <span>{{ props.row.numb_tb }}</span>
              </el-form-item>

              <el-form-item label="现金保险">
                <span></span>
              </el-form-item>
              <el-form-item label="   ">
                <span></span>
              </el-form-item>
              <el-form-item label="购保数量">
                <span>{{ props.row.count_tb }}</span>
              </el-form-item>
              <el-form-item label="购保金额">
                <span>{{ props.row.numb_tb }}</span>
              </el-form-item>
              <el-form-item label="退保数量">
                <span>{{ props.row.count_tb }}</span>
              </el-form-item>
              <el-form-item label="退保金额">
                <span>{{ props.row.numb_tb }}</span>
              </el-form-item>


              <el-form-item label="站务系统">
                <span></span>
              </el-form-item>
              <el-form-item label="   ">
                <span></span>
              </el-form-item>
              <el-form-item label="售票数量">
                <span>{{ props.row.count_tb }}</span>
              </el-form-item>
              <el-form-item label="售票金额">
                <span>{{ props.row.numb_tb }}</span>
              </el-form-item>
              <el-form-item label="退票数量">
                <span>{{ props.row.count_tb }}</span>
              </el-form-item>
              <el-form-item label="退票金额">
                <span>{{ props.row.numb_tb }}</span>
              </el-form-item>

            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="序号"
          prop="serialNum_tb">
        </el-table-column>
        <el-table-column
          label="地市"
          prop="city_tb">
        </el-table-column>
        <el-table-column
          label="客运站"
          prop="station_tb">
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
          station_tb: '汕头市汽车客运站',
          city_tb: '汕头',
          dataTime_tb: '10-15',
        },
          {
          station_tb: '韶关市汽车客运站',
          city_tb: '韶关',
          dataTime_tb: '10-15',
        },
        ],
        tableData:[],
        schfilter: '',
        value1: '',
        datetime0: '10-02',
        datetime1: '10-28',
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
          let item_data = new Date(year + '-' + item.dataTime_tb).getTime();
          return start <= item_data && item_data <= end;
        });
      },
      keywordFilter() {
        let val = this.schfilter;
        if (val =='') {
          this.tableData = this.tableData5;
        }else{
          this.tableData = this.tableData5.filter(item => (
            (!item.city_tb.indexOf(val))||(!item.station_tb.indexOf(val))
          ))
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
