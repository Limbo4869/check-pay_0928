<template>
  <div>
    <yd-navbar title="超时出票" style="margin-bottom: 10px">
      <div slot="left" @click="goView('/car/car')" class="iconfont icon-back"></div>
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>

    <div>
      <el-row :gutter="-1">
        <el-col :span="8">
          <div class="grid-content bg-purple-dark" style="margin: auto 10px">
            <el-input placeholder="起始站"  v-model="schfilter" clearable>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-dark" style="margin: auto 10px">
            <el-input placeholder="终点站"  v-model="schfilter" clearable>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-dark" style="margin: auto 10px">
            <el-input placeholder="班次号"  v-model="schfilter" clearable>
            </el-input>
          </div>
        </el-col>
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
              <el-form-item label="班次">
                <span>{{ props.row.BC_tb }}</span>
              </el-form-item>
              <el-form-item label="线路">
                <span>{{ props.row.XL_tb  }}</span>
              </el-form-item>
              <el-form-item label="票价">
                <span>{{ props.row.PJ_tb }}</span>
              </el-form-item>
              <el-form-item label="余座">
                <span>{{ props.row.YZ_tb }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="班次"
          prop="BC_tb">
        </el-table-column>
        <el-table-column
          label="发车时间"
          prop="FC_tb">
        </el-table-column>
        <el-table-column
          label="操作"
          prop="CZ_tb">

          <template slot-scope="scope">
            <el-button type="text" @click="outerVisible = true">补票</el-button>

            <!--内层dialog-->
            <el-dialog
              title=""
              :visible.sync="outerVisible"
              width="70%">
              <el-dialog
                width="100%"
                title="请把身份证对准扫描框"
                :visible.sync="innerVisible"
                append-to-body>
              </el-dialog>

              <!--外层dialog-->
              <el-row>
                <el-col :span="12">
                  <div class="grid-content bg-purple-dark" style="margin: auto 10px">
                    <el-input placeholder="补票数量"  v-model="schfilter" clearable>
                    </el-input>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content bg-purple-dark" style="margin: auto 10px">
                    <span><el-button type="primary" class="iconfont icon-scan"  @click="innerVisible = true"> 扫描身份证</el-button></span>
                  </div>
                </el-col>
              </el-row>

              <div style="padding: 15px">
                <el-row>
                  <el-col :span="8">
                    <div class="grid-content bg-purple-dark" style="margin: auto 10px">
                      <el-radio v-model="radio" label="1">1人</el-radio>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-purple-dark" style="margin: auto 10px">
                      <el-radio v-model="radio" label="2">2人</el-radio>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-purple-dark" style="margin: auto 10px">
                      <el-radio v-model="radio" label="3">3人</el-radio>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark" style="margin: auto 10px">
                    <el-input placeholder="姓名"  v-model="schfilter" clearable></el-input>
                  </div>
                </el-col>
              </el-row>
              <el-row style="margin-top: 10px">
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark" style="margin: auto 10px">
                    <el-input placeholder="身份证号"  v-model="schfilter" clearable></el-input>
                  </div>
                </el-col>
              </el-row>
              <el-row style="margin: 10px auto">
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark" style="margin: auto 10px">
                    <el-input placeholder="手机号码"  v-model="schfilter" clearable></el-input>
                  </div>
                </el-col>
              </el-row>

              <el-row style="margin-bottom: 10px" class="menuAll">
                <el-col :span="24">
                  <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        合计 : ￥ 60.0<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>乘客1 : ￥ 20.0</el-dropdown-item>
                      <el-dropdown-item>乘客2 : ￥ 20.0</el-dropdown-item>
                      <el-dropdown-item>乘客3 : ￥ 20.0</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-row>


              <div>
                <el-button type="primary" plain>支付宝支付</el-button>
                <el-button type="success" plain>微信支付</el-button>
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
        outerVisible: false,
        innerVisible: false,
        radio: 1,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        tableData5: [{
          BC_tb: 'AZ1439',
          FC_tb: '08-27 15:30',
          PJ_tb: '￥90',
          XL_tb: '广州-深圳',
          YZ_tb: '0',
        },
          {
            BC_tb: 'AZ1439',
            FC_tb: '08-27 15:30',
            PJ_tb: '￥90',
            XL_tb: '广州-深圳',
            YZ_tb: '0',
          }, {
            BC_tb: 'AZ1439',
            FC_tb: '08-27 15:30',
            PJ_tb: '￥90',
            XL_tb: '广州-深圳',
            YZ_tb: '0',
          }, {
            BC_tb: 'AZ1439',
            FC_tb: '08-27 15:30',
            PJ_tb: '￥90',
            XL_tb: '广州-深圳',
            YZ_tb: '0',
          }, {
            BC_tb: 'AZ1439',
            FC_tb: '08-27 15:30',
            PJ_tb: '￥90',
            XL_tb: '广州-深圳',
            YZ_tb: '0',
          }, {
            BC_tb: 'AZ1439',
            FC_tb: '08-27 15:30',
            PJ_tb: '￥90',
            XL_tb: '广州-深圳',
            YZ_tb: '0',
          }, {
            BC_tb: 'AZ1439',
            FC_tb: '08-27 15:30',
            PJ_tb: '￥90',
            XL_tb: '广州-深圳',
            YZ_tb: '0',
          }, {
            BC_tb: 'AZ1439',
            FC_tb: '08-27 15:30',
            PJ_tb: '￥90',
            XL_tb: '广州-深圳',
            YZ_tb: '0',
          }, {
            BC_tb: 'AZ1439',
            FC_tb: '08-27 15:30',
            PJ_tb: '￥90',
            XL_tb: '广州-深圳',
            YZ_tb: '0',
          }, {
            BC_tb: 'AZ1439',
            FC_tb: '08-27 15:30',
            PJ_tb: '￥90',
            XL_tb: '广州-深圳',
            YZ_tb: '0',
          }, {
            BC_tb: 'AZ1439',
            FC_tb: '08-27 15:30',
            PJ_tb: '￥90',
            XL_tb: '广州-深圳',
            YZ_tb: '0',
          }, {
            BC_tb: 'AZ1439',
            FC_tb: '08-27 15:30',
            PJ_tb: '￥90',
            XL_tb: '广州-深圳',
            YZ_tb: '0',
          }, {
            BC_tb: 'AZ1439',
            FC_tb: '08-27 15:30',
            PJ_tb: '￥90',
            XL_tb: '广州-深圳',
            YZ_tb: '0',
          }, {
            BC_tb: 'AZ1439',
            FC_tb: '08-27 15:30',
            PJ_tb: '￥90',
            XL_tb: '广州-深圳',
            YZ_tb: '0',
          }, {
            BC_tb: 'AZ1439',
            FC_tb: '08-27 15:30',
            PJ_tb: '￥90',
            XL_tb: '广州-深圳',
            YZ_tb: '0',
          }
        ],
        tableData:[],
        schfilter: '',
        value1: '',
      }
    },
    methods: {
      submitHandler(value) {
        this.$dialog.toast({mes: `班次号：${value}`});
      },
      formatTooltip(val) {
        return val / 100;
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
      }
    },
    watch: {
      schfilter(){
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
  .el-dropdown {
    color: red!important;
  }
  .el-dropdown-link el-dropdown-selfdefine {
    font-size: 18px;
  }
  .menuAll {
    font-size: 18px;
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
.iconfont .icon-scan {
  font-size:10px;
}
</style>
