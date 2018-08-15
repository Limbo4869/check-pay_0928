<template>
  <div>
    <yd-navbar title="出票二维码" style="margin-bottom: 10px">
      <div slot="left" @click="goView('/car/car')" class="iconfont icon-back"></div>
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>

    <div>
      <el-row>
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

    <!--<div style="width: 1px;margin-left: 10px;margin-right: 5px; background: #000;margin-top: 15px;opacity: 0.3;height: 16px"></div>-->

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
              <el-form-item label="票号">
                <span>{{ props.row.PH_tb }}</span>
              </el-form-item>
              <el-form-item label="座号">
                <span>{{ props.row.ZH_tb }}</span>
              </el-form-item>
              <el-form-item label="班次">
                <span>{{ props.row.BC_tb }}</span>
              </el-form-item>
              <el-form-item label="线路">
                <span>{{ props.row.XL_tb  }}</span>
              </el-form-item>
              <el-form-item label="售票员">
                <span>{{ props.row.SPY_tb }}</span>
              </el-form-item>
              <!--<el-form-item label="发车">-->
                <!--<span>{{ props.row.FCRQ_tb }}</span>-->
              <!--</el-form-item>-->
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="发车日期"
          prop="FCRQ_tb">
        </el-table-column>
        <el-table-column
          label="座号"
          prop="ZH_tb">
        </el-table-column>
        <el-table-column
          label="状态"
         >
          <template slot-scope="scope">
            <el-button type="text" @click="dialogVisible = true">留位出票</el-button>
            <el-dialog
              title=""
              :visible.sync="dialogVisible"
              width="70%">
              <div><img :src="code" alt="logo" style="width: 80%;margin-top: -50px"></div>
              <div style="padding: -15px;">
                <el-row :gutter="10">
                  <el-col :span="12"><div class="grid-content bg-purple seat_1" style="text-align: right;margin-bottom: 5px">电子票号 :</div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple seat_2" style="text-align: left;margin-bottom: 5px">000234</div></el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="12"><div class="grid-content bg-purple seat_1" style="text-align: right;margin-bottom: 5px">旅客姓名 :</div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple seat_2" style="text-align: left;margin-bottom: 5px">XXX</div></el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="12"><div class="grid-content bg-purple seat_1" style="text-align: right;margin-bottom: 5px">票价类型 :</div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple seat_2" style="text-align: left;margin-bottom: 5px">全</div></el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="12"><div class="grid-content bg-purple seat_1" style="text-align: right;margin-bottom: 5px">座 号 :</div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple seat_2" style="text-align: left;margin-bottom: 5px">06</div></el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="12"><div class="grid-content bg-purple seat_1" style="text-align: right;margin-bottom: 5px">检 票 口 :</div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple seat_2" style="text-align: left;margin-bottom: 5px">02</div></el-col>
                </el-row>

              </div>


              <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>


          </template>
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
        dialogVisible: false,
        code: 'static/code.jpg',

        tableData5: [{
          ZH_tb: '06',
          PH_tb: '00045',
          SPY_tb: 'XXX',
          BC_tb: 'AZ4321',
          XL_tb: '天河',
          FCRQ_tb: '08-06 15:39',
        },
          {
            ZH_tb: '06',
            PH_tb: '00045',
            SPY_tb: 'XXX',
            BC_tb: 'AZ4321',
            XL_tb: '天河',
            FCRQ_tb: '08-06 15:39',
          }, {
            FCRQ_tb: '08-27 15:39',
            ZH_tb: '06',
            PH_tb: '00045',
            SPY_tb: 'XXX',
            BC_tb: 'AZ4321',
            XL_tb: '天河',
          }, {
            FCRQ_tb: '08-21 15:39',
            ZH_tb: '06',
            PH_tb: '00045',
            SPY_tb: 'XXX',
            BC_tb: 'AZ4321',
            XL_tb: '天河',
          }, {
            FCRQ_tb: '08-18 15:39',
            ZH_tb: '06',
            PH_tb: '00045',
            SPY_tb: 'XXX',
            BC_tb: 'AZ4321',
            XL_tb: '天河',
          }, {
            FCRQ_tb: '08-24 15:39',
            ZH_tb: '06',
            PH_tb: '00045',
            SPY_tb: 'XXX',
            BC_tb: 'AZ4321',
            XL_tb: '天河',
          }, {
            FCRQ_tb: '08-17 15:39',
            ZH_tb: '06',
            PH_tb: '00045',
            SPY_tb: 'XXX',
            BC_tb: 'AZ4321',
            XL_tb: '天河',
          }, {
            FCRQ_tb: '08-04 15:39',
            ZH_tb: '06',
            PH_tb: '00045',
            SPY_tb: 'XXX',
            BC_tb: 'AZ4321',
            XL_tb: '天河',
          }, {
            FCRQ_tb: '08-10 15:39',
            ZH_tb: '06',
            PH_tb: '00045',
            SPY_tb: 'XXX',
            BC_tb: 'AZ4321',
            XL_tb: '天河',
          }, {
            FCRQ_tb: '08-14 15:39',
            ZH_tb: '06',
            PH_tb: '00045',
            SPY_tb: 'XXX',
            BC_tb: 'AZ4321',
            XL_tb: '天河',
          }, {
            FCRQ_tb: '08-14 15:39',
            ZH_tb: '06',
            PH_tb: '00045',
            SPY_tb: 'XXX',
            BC_tb: 'AZ4321',
            XL_tb: '天河',
          },
        ],
        tableData:[],
        schfilter: '',
        value1: '',
        datetime0: '08-01',
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
          let end = new Date(year + '-' + this.datetime1).getTime();
          let item_data = new Date(year + '-' + item.FCRQ_tb).getTime();
          return  item_data <= end;
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
