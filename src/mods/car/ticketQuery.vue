<template>
  <div>
    <yd-navbar title="车票查询" style="margin-bottom: 10px">
      <div slot="left" @click="goView('/car/car')" class="iconfont icon-back"></div>
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>

    <div>
      <!--<el-popover-->
      <!--placement="right"-->
      <!--width="400"-->
      <!--trigger="click">-->
      <!--<el-table :data="gridData">-->
      <!--<el-table-column width="150" property="date" label=""></el-table-column>-->
      <!--<el-table-column width="100" property="name" label=""></el-table-column>-->
      <!--<el-table-column width="300" property="address" label=""></el-table-column>-->
      <!--</el-table>-->
      <!--<el-button slot="reference">click 激活</el-button>-->
      <!--</el-popover>-->

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
              <el-form-item label="工号">
                <span>{{ props.row.GH_tb }}</span>
              </el-form-item>
              <el-form-item label="姓名">
                <span>{{ props.row.SPY_name_tb }}</span>
              </el-form-item>
              <el-form-item label="售票数">
                <span>{{ props.row.SPZS_tb }}</span>
              </el-form-item>
              <el-form-item label="日期">
                <span>{{ props.row.time_tb }}</span>
              </el-form-item>
              <el-form-item label="金额">
                <span>{{ props.row.JE_tb }}</span>
              </el-form-item>
              <el-form-item label="退票数">
                <span>{{ props.row.TPZS_tb  }}</span>
              </el-form-item>
              <el-form-item label="手续费">
                <span>{{ props.row.SXF_tb }}</span>
              </el-form-item>
              <el-form-item label="加收/票">
                <span>{{ props.row.MPJS_tb }}</span>
              </el-form-item>
              <el-form-item label="缴款数">
                <span>{{ props.row.DTYJPKS_tb }}</span>
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
          GH_tb: '009',
          SPY_name_tb: '张三',
          SPZS_tb: '15',
          JE_tb: '￥234.00',
          TPZS_tb: '0',
          SXF_tb: '0',
          MPJS_tb: '0',
          DTYJPKS_tb:'0',
          time_tb: '08-15'
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
          let item_data = new Date(year + '-' + item.time_tb).getTime();
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
