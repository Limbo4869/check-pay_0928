<template>
  <div>
    <yd-navbar title="车票查询" style="margin-bottom: 10px">
      <div slot="left" @click="goView('/car/car')" class="iconfont icon-back"></div>
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>

    <div>
      <el-row :gutter="1">
        <el-col :span="8"><div class="grid-content bg-purple-dark" style="margin: auto 10px">
          <el-input placeholder="身份证号"  v-model="input_card" clearable>
          </el-input>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-dark" style="margin: auto 10px">
          <el-input placeholder="车票号"  v-model="input_ticketNumb" clearable>
          </el-input>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-dark" style="margin: auto 10px">
          <el-input placeholder="条形码号"  v-model="input_numb" clearable>
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
                <span>{{ props.row.start_tb }}</span>
              </el-form-item>
              <el-form-item label="终点站">
                <span>{{ props.row.end_tb }}</span>
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

        tableData5: [
          {
          CPHM_tb: '00009',
          JPZT_tb: '已检',
          FCSJ_tb: '08-15 7:10',
          start_tb: '广州',
          end_tb: '四川',
          XL_tb: '广州-四川',
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
            CPHM_tb: '00006',
            JPZT_tb: '已检',
            FCSJ_tb: '08-15 7:10',
            start_tb: '广州',
            end_tb: '四川',
            XL_tb: '广州-四川',
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
            CPHM_tb: '00006',
            JPZT_tb: '已检',
            FCSJ_tb: '08-15 7:10',
            start_tb: '广州',
            end_tb: '深圳',
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
            CPHM_tb: '00007',
            JPZT_tb: '已检',
            FCSJ_tb: '08-15 7:10',
            start_tb: '广州',
            end_tb: '深圳',
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
            CPHM_tb: '00008',
            JPZT_tb: '已检',
            FCSJ_tb: '08-15 7:10',
            start_tb: '广州',
            end_tb: '深圳',
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
            CPHM_tb: '00008',
            JPZT_tb: '已检',
            FCSJ_tb: '08-15 7:10',
            start_tb: '广州',
            end_tb: '深圳',
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
            CPHM_tb: '00008',
            JPZT_tb: '已检',
            FCSJ_tb: '08-15 7:10',
            start_tb: '广州',
            end_tb: '深圳',
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
        ],
        tableData:[],
        input_card: '',
        input_ticketNumb: '',
        input_numb: '',
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
      keywordFilter() {
        let input_card = this.input_card;
        let input_ticketNumb = this.input_ticketNumb;

        if (input_card =='' && input_ticketNumb =='' ) {
          this.tableData = this.tableData5;
        }else{
          this.tableData = this.tableData5.filter(item => (
            !(item.SFZ_tb.indexOf(input_card))&&!(item.CPHM_tb.indexOf(input_ticketNumb)))
          )
        }
      },
      tableFilter() {
        this.keywordFilter();
      }
    },
    watch: {
      input_card(){
        this.tableFilter();
      },
      input_ticketNumb(){
        this.tableFilter();
      },
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
