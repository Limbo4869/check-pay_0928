<template>
  <div>
    <yd-navbar title="车票信息查询" style="margin-bottom: 10px">
      <div slot="left" @click="goView('/ticket/ticket')" class="iconfont icon-back"></div>
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>

    <div style="margin: 15px 10px">
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-input
                placeholder="请输入起始站站点"
                v-model="input_init"
                clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-input
                placeholder="请输入终点站站点"
                v-model="input_end"
                clearable>
              </el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <div class="grid-content bg-purple">
                <el-input
                  placeholder="请输入身份证号码"
                  v-model="input_card"
                  clearable>
                </el-input>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-input
                placeholder="请输入班次号"
                v-model="input_shift"
                clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-input
                placeholder="请输入售票工号"
                v-model="input_ticket"
                clearable>
              </el-input>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <div style="margin-top: 20px">
      <el-table
        :data="tableData5"
        height="550"
        highlight-current-row
        stripe
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="班次号">
                <span>{{ props.row.BCH_tb }}</span>
              </el-form-item>
              <el-form-item label="站点">
                <span>{{ props.row.ZD_tb }}</span>
              </el-form-item>
              <el-form-item label="票号">
                <span>{{ props.row.PH_tb }}</span>
              </el-form-item>
              <el-form-item label="座号">
                <span>{{ props.row.ZH_tb }}</span>
              </el-form-item>
              <el-form-item label="票型">
                <span>{{ props.row.PX_tb  }}</span>
              </el-form-item>
              <el-form-item label="工号">
                <span>{{ props.row.GH_tb }}</span>
              </el-form-item>
              <el-form-item label="票价">
                <span>{{ props.row.PJ_tb }}</span>
              </el-form-item>
              <el-form-item label="手续费">
                <span>{{ props.row.SXF_tb }}</span>
              </el-form-item>
              <el-form-item label="童票">
                <span>{{ props.row.TP_tb }}</span>
              </el-form-item>
              <el-form-item label="检票">
                <span>{{ props.row.JPZT_tb }}</span>
              </el-form-item>
              <el-form-item label="发车">
                <span>{{ props.row.FCSJ_tb }}</span>
              </el-form-item>
              <el-form-item label="售票">
                <span>{{ props.row.SPSJ_tb }}</span>
              </el-form-item>
              <el-form-item label="手机号">
                <span>{{ props.row.SJHM_tb }}</span>
              </el-form-item>
              <el-form-item label="身份证">
                <span>{{ props.row.SFZH_tb }}</span>
              </el-form-item>

            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="班次号"
          prop="BCH_tb">
        </el-table-column>
        <el-table-column
          label="站点"
          prop="ZD_tb">
        </el-table-column>
        <el-table-column
          label="检票"
          prop="JPZT_tb">
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

        input_init: '',
        input_end: '',
        input_card: '',
        input_shift: '',
        input_ticket: '',

        tableData5: [{
          PH_tb: '009128',
          GH_tb: '012',
          PX_tb: '全票',
          BCH_tb: 'AZ9653',
          ZD_tb: '天河站',
          PJ_tb: '￥12.0',
          SXF_tb: '0',
          ZH_tb:'06',
          FCSJ_tb: '2018-08-07 14:00',
          SPSJ_tb: '2018-08-06 13:50',
          SJHM_tb: '13560049565',
          SFZH_tb: '440102199901180428',
          TP_tb: '0',
          JPZT_tb:'已检',
        },
          {
            PH_tb: '009128',
            GH_tb: '012',
            PX_tb: '全票',
            BCH_tb: 'AZ9653',
            ZD_tb: '天河站',
            PJ_tb: '￥12.0',
            SXF_tb: '0',
            ZH_tb:'06',
            FCSJ_tb: '2018-08-07 14:00',
            SPSJ_tb: '2018-08-06 13:50',
            SJHM_tb: '13560049565',
            SFZH_tb: '440102199901180428',
            TP_tb: '0',
            JPZT_tb:'已检',
          }, {
            PH_tb: '009128',
            GH_tb: '012',
            PX_tb: '全票',
            BCH_tb: 'AZ9653',
            ZD_tb: '天河站',
            PJ_tb: '￥12.0',
            SXF_tb: '0',
            ZH_tb:'06',
            FCSJ_tb: '2018-08-07 14:00',
            SPSJ_tb: '2018-08-06 13:50',
            SJHM_tb: '13560049565',
            SFZH_tb: '440102199901180428',
            TP_tb: '0',
            JPZT_tb:'已检',
          }, {
            PH_tb: '009128',
            GH_tb: '012',
            PX_tb: '全票',
            BCH_tb: 'AZ9653',
            ZD_tb: '天河站',
            PJ_tb: '￥12.0',
            SXF_tb: '0',
            ZH_tb:'06',
            FCSJ_tb: '2018-08-07 14:00',
            SPSJ_tb: '2018-08-06 13:50',
            SJHM_tb: '13560049565',
            SFZH_tb: '440102199901180428',
            TP_tb: '0',
            JPZT_tb:'已检',
          }, {
            PH_tb: '009128',
            GH_tb: '012',
            PX_tb: '全票',
            BCH_tb: 'AZ9653',
            ZD_tb: '天河站',
            PJ_tb: '￥12.0',
            SXF_tb: '0',
            ZH_tb:'06',
            FCSJ_tb: '2018-08-07 14:00',
            SPSJ_tb: '2018-08-06 13:50',
            SJHM_tb: '13560049565',
            SFZH_tb: '440102199901180428',
            TP_tb: '0',
            JPZT_tb:'已检',
          }, {
            PH_tb: '009128',
            GH_tb: '012',
            PX_tb: '全票',
            BCH_tb: 'AZ9653',
            ZD_tb: '天河站',
            PJ_tb: '￥12.0',
            SXF_tb: '0',
            ZH_tb:'06',
            FCSJ_tb: '2018-08-07 14:00',
            SPSJ_tb: '2018-08-06 13:50',
            SJHM_tb: '13560049565',
            SFZH_tb: '440102199901180428',
            TP_tb: '0',
            JPZT_tb:'已检',
          }, {
            PH_tb: '009128',
            GH_tb: '012',
            PX_tb: '全票',
            BCH_tb: 'AZ9653',
            ZD_tb: '天河站',
            PJ_tb: '￥12.0',
            SXF_tb: '0',
            ZH_tb:'06',
            FCSJ_tb: '2018-08-07 14:00',
            SPSJ_tb: '2018-08-06 13:50',
            SJHM_tb: '13560049565',
            SFZH_tb: '440102199901180428',
            TP_tb: '0',
            JPZT_tb:'已检',
          }, {
            PH_tb: '009128',
            GH_tb: '012',
            PX_tb: '全票',
            BCH_tb: 'AZ9653',
            ZD_tb: '天河站',
            PJ_tb: '￥12.0',
            SXF_tb: '0',
            ZH_tb:'06',
            FCSJ_tb: '2018-08-07 14:00',
            SPSJ_tb: '2018-08-06 13:50',
            SJHM_tb: '13560049565',
            SFZH_tb: '440102199901180428',
            TP_tb: '0',
            JPZT_tb:'已检',
          }, {
            PH_tb: '009128',
            GH_tb: '012',
            PX_tb: '全票',
            BCH_tb: 'AZ9653',
            ZD_tb: '天河站',
            PJ_tb: '￥12.0',
            SXF_tb: '0',
            ZH_tb:'06',
            FCSJ_tb: '2018-08-07 14:00',
            SPSJ_tb: '2018-08-06 13:50',
            SJHM_tb: '13560049565',
            SFZH_tb: '440102199901180428',
            TP_tb: '0',
            JPZT_tb:'已检',
          }, {
            PH_tb: '009128',
            GH_tb: '012',
            PX_tb: '全票',
            BCH_tb: 'AZ9653',
            ZD_tb: '天河站',
            PJ_tb: '￥12.0',
            SXF_tb: '0',
            ZH_tb:'06',
            FCSJ_tb: '2018-08-07 14:00',
            SPSJ_tb: '2018-08-06 13:50',
            SJHM_tb: '13560049565',
            SFZH_tb: '440102199901180428',
            TP_tb: '0',
            JPZT_tb:'已检',
          }, {
            PH_tb: '009128',
            GH_tb: '012',
            PX_tb: '全票',
            BCH_tb: 'AZ9653',
            ZD_tb: '天河站',
            PJ_tb: '￥12.0',
            SXF_tb: '0',
            ZH_tb:'06',
            FCSJ_tb: '2018-08-07 14:00',
            SPSJ_tb: '2018-08-06 13:50',
            SJHM_tb: '13560049565',
            SFZH_tb: '440102199901180428',
            TP_tb: '0',
            JPZT_tb:'已检',
          }, {
            PH_tb: '009128',
            GH_tb: '012',
            PX_tb: '全票',
            BCH_tb: 'AZ9653',
            ZD_tb: '天河站',
            PJ_tb: '￥12.0',
            SXF_tb: '0',
            ZH_tb:'06',
            FCSJ_tb: '2018-08-07 14:00',
            SPSJ_tb: '2018-08-06 13:50',
            SJHM_tb: '13560049565',
            SFZH_tb: '440102199901180428',
            TP_tb: '0',
            JPZT_tb:'已检',
          }, {
            PH_tb: '009128',
            GH_tb: '012',
            PX_tb: '全票',
            BCH_tb: 'AZ9653',
            ZD_tb: '天河站',
            PJ_tb: '￥12.0',
            SXF_tb: '0',
            ZH_tb:'06',
            FCSJ_tb: '2018-08-07 14:00',
            SPSJ_tb: '2018-08-06 13:50',
            SJHM_tb: '13560049565',
            SFZH_tb: '440102199901180428',
            TP_tb: '0',
            JPZT_tb:'已检',
          }, {
            PH_tb: '009128',
            GH_tb: '012',
            PX_tb: '全票',
            BCH_tb: 'AZ9653',
            ZD_tb: '天河站',
            PJ_tb: '￥12.0',
            SXF_tb: '0',
            ZH_tb:'06',
            FCSJ_tb: '2018-08-07 14:00',
            SPSJ_tb: '2018-08-06 13:50',
            SJHM_tb: '13560049565',
            SFZH_tb: '440102199901180428',
            TP_tb: '0',
            JPZT_tb:'已检',
          }, {
            PH_tb: '009128',
            GH_tb: '012',
            PX_tb: '全票',
            BCH_tb: 'AZ9653',
            ZD_tb: '天河站',
            PJ_tb: '￥12.0',
            SXF_tb: '0',
            ZH_tb:'06',
            FCSJ_tb: '2018-08-07 14:00',
            SPSJ_tb: '2018-08-06 13:50',
            SJHM_tb: '13560049565',
            SFZH_tb: '440102199901180428',
            TP_tb: '0',
            JPZT_tb:'已检',
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
      }

    }
  }
</script>

<style>
  .el-row {
    margin: 5px;
  }
  .el-card__body {
    padding: 5px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;
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
