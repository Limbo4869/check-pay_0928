<template>
  <div>
    <yd-navbar title="车票查询" style="margin-bottom: 10px">
      <div slot="left" @click="goView('/car/car')" class="iconfont icon-back"></div>
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>

    <div>
      <el-row :gutter="1">
        <el-col :span="8"><div class="grid-content bg-purple-dark" style="margin: auto 10px">
          <el-input placeholder="身份证号"  v-model="schfilter" clearable>
          </el-input>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-dark" style="margin: auto 10px">
          <el-input placeholder="车票号"  v-model="schfilter" clearable>
          </el-input>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-dark" style="margin: auto 10px">
          <el-input placeholder="条形码号"  v-model="schfilter" clearable>
          </el-input>
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
              <el-form-item label="起始站">
                <span>{{ props.row.QSZ_tb }}</span>
              </el-form-item>
              <el-form-item label="终点站">
                <span>{{ props.row.ZDZ_tb }}</span>
              </el-form-item>
              <el-form-item label="线路">
                <span>{{ props.row.XL_tb }}</span>
              </el-form-item>
              <el-form-item label="姓名">
                <span>{{ props.row.name_tb }}</span>
              </el-form-item>
              <el-form-item label="座号">
                <span>{{ props.row.ZH_tb }}</span>
              </el-form-item>
              <el-form-item label="班次">
                <span>{{ props.row.BC_tb  }}</span>
              </el-form-item>
              <el-form-item label="票价">
                <span>{{ props.row.PJ_tb }}</span>
              </el-form-item>
              <el-form-item label="携童">
                <span>{{ props.row.XT_tb }}</span>
              </el-form-item>
              <el-form-item label="保险">
                <span>{{ props.row.BX_tb }}</span>
              </el-form-item>
              <el-form-item label="车型">
                <span>{{ props.row.CX_tb }}</span>
              </el-form-item>
              <el-form-item label="售票员">
                <span>{{ props.row.SPY_tb }}</span>
              </el-form-item>
              <el-form-item label="售票">
                <span>{{ props.row.SP_tb }}</span>
              </el-form-item>
              <el-form-item label="手机号">
                <span>{{ props.row.phone_tb }}</span>
              </el-form-item>
              <el-form-item label="检票点">
                <span>{{ props.row.JPD_tb }}</span>
              </el-form-item>
              <el-form-item label="身份证">
                <span>{{ props.row.SFZ_tb }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="车票号码"
          prop="CPHM_tb">
        </el-table-column>
        <el-table-column
          label="检票状态"
          prop="JPZT_tb">
        </el-table-column>
        <el-table-column
          label="发车时间"
          prop="FCSJ_tb">
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
          CPHM_tb: '00009',
          JPZT_tb: '已检',
          FCSJ_tb: '08-15 7:10',
          QSZ_tb: '广州',
          ZDZ_tb: '深圳',
          XL_tb: '广州-深圳',
          name_tb: 'XXX',
          XT_tb:'否',
          PJ_tb: '￥115.0',
          ZH_tb:'03',
          BC_tb :'AZ1203',
          BX_tb:'0',
          CX_tb:'座',
          SPY_tb:'003',
          SP_tb:'08-13 7:10',
          phone_tb:'13560049503',
          JPD_tb:'广州',
          SFZ_tb:'440214199901181003'
        },
          {
            GH_tb: '009',
            SPY_name_tb: '张三',
            SPZS_tb: '15',
            JE_tb: '￥234.00',
            TPZS_tb: '0',
            SXF_tb: '0',
            MPJS_tb: '0',
            DTYJPKS_tb:'0',
            time_tb: '08-15'
          }, {
            GH_tb: '009',
            SPY_name_tb: '张三',
            SPZS_tb: '15',
            JE_tb: '￥234.00',
            TPZS_tb: '0',
            SXF_tb: '0',
            MPJS_tb: '0',
            DTYJPKS_tb:'0',
            time_tb: '08-15'
          }, {
            GH_tb: '009',
            SPY_name_tb: '张三',
            SPZS_tb: '15',
            JE_tb: '￥234.00',
            TPZS_tb: '0',
            SXF_tb: '0',
            MPJS_tb: '0',
            DTYJPKS_tb:'0',
            time_tb: '08-05'
          }, {
            GH_tb: '009',
            SPY_name_tb: '张三',
            SPZS_tb: '15',
            JE_tb: '￥234.00',
            TPZS_tb: '0',
            SXF_tb: '0',
            MPJS_tb: '0',
            DTYJPKS_tb:'0',
            time_tb: '08-25'
          }, {
            GH_tb: '009',
            SPY_name_tb: '张三',
            SPZS_tb: '15',
            JE_tb: '￥234.00',
            TPZS_tb: '0',
            SXF_tb: '0',
            MPJS_tb: '0',
            DTYJPKS_tb:'0',
            time_tb: '08-19'
          }, {
            GH_tb: '009',
            SPY_name_tb: '张三',
            SPZS_tb: '15',
            JE_tb: '￥234.00',
            TPZS_tb: '0',
            SXF_tb: '0',
            MPJS_tb: '0',
            DTYJPKS_tb:'0',
            time_tb: '08-17'
          }, {
            GH_tb: '009',
            SPY_name_tb: '张三',
            SPZS_tb: '15',
            JE_tb: '￥234.00',
            TPZS_tb: '0',
            SXF_tb: '0',
            MPJS_tb: '0',
            DTYJPKS_tb:'0',
            time_tb: '08-09'
          }, {
            GH_tb: '009',
            SPY_name_tb: '张三',
            SPZS_tb: '15',
            JE_tb: '￥234.00',
            TPZS_tb: '0',
            SXF_tb: '0',
            MPJS_tb: '0',
            DTYJPKS_tb:'0',
            time_tb: '08-03'
          }, {
            GH_tb: '009',
            SPY_name_tb: '张三',
            SPZS_tb: '15',
            JE_tb: '￥234.00',
            TPZS_tb: '0',
            SXF_tb: '0',
            MPJS_tb: '0',
            DTYJPKS_tb:'0',
            time_tb: '08-01'
          }, {
            GH_tb: '009',
            SPY_name_tb: '张三',
            SPZS_tb: '15',
            JE_tb: '￥234.00',
            TPZS_tb: '0',
            SXF_tb: '0',
            MPJS_tb: '0',
            DTYJPKS_tb:'0',
            time_tb: '08-19'
          }, {
            GH_tb: '009',
            SPY_name_tb: '张三',
            SPZS_tb: '15',
            JE_tb: '￥234.00',
            TPZS_tb: '0',
            SXF_tb: '0',
            MPJS_tb: '0',
            DTYJPKS_tb:'0',
            time_tb: '08-22'
          }, {
            GH_tb: '009',
            SPY_name_tb: '张三',
            SPZS_tb: '15',
            JE_tb: '￥234.00',
            TPZS_tb: '0',
            SXF_tb: '0',
            MPJS_tb: '0',
            DTYJPKS_tb:'0',
            time_tb: '08-27'
          }, {
            GH_tb: '009',
            SPY_name_tb: '张三',
            SPZS_tb: '15',
            JE_tb: '￥234.00',
            TPZS_tb: '0',
            SXF_tb: '0',
            MPJS_tb: '0',
            DTYJPKS_tb:'0',
            time_tb: '08-15'
          }, {
            GH_tb: '009',
            SPY_name_tb: '张三',
            SPZS_tb: '15',
            JE_tb: '￥234.00',
            TPZS_tb: '0',
            SXF_tb: '0',
            MPJS_tb: '0',
            DTYJPKS_tb:'0',
            time_tb: '08-15'
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
      submitHandler(value) {
        this.$dialog.toast({mes: `工号：${value}`});
      },
      formatTooltip(val) {
        return val / 100;
      },
      dateFilter() {
        this.tableData = this.tableData.filter(item => {
          let year = new Date().getFullYear();
          let start = new Date(year + '-' + this.datetime0).getTime();
          let end = new Date(year + '-' + this.datetime1).getTime();
          let item_data = new Date(year + '-' + item.FCSJ_tb).getTime();
          return start <= item_data && item_data <= end;
        });
      },
      keywordFilter() {
        let val = this.schfilter;
        if (val ==''){
          this.tableData = this.tableData5;
        } else {
          this.tableData = this.tableData5.filter(item => (
            !item.GH_tb.indexOf(val)))
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
