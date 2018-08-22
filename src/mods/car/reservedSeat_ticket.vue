<template>
  <div>
    <yd-navbar title="留位出票" style="margin-bottom: 10px">
      <div slot="left" @click="goView('/car/car')" class="iconfont icon-back"></div>
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>

    <div>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <yd-cell-item>
                  <span slot="left" style="margin-left: 2px">
                     <yd-datetime type="date" style="height: 30px;line-height: 30px;float: left;" v-model="datetime0"></yd-datetime>
                  </span>
              <span slot="left" style="margin-left: 5px" class="el-icon-caret-bottom"></span>
            </yd-cell-item>
          </div>
        </el-col>
      </el-row>
    </div>

    <div style="margin-top: 20px">
      <el-table
        :data="tableData"
        height="550"
        stripe
        highlight-current-row
        style="width: 100%">

        <el-table-column
          label="留位日期"
          prop="LWRQ_tb">
        </el-table-column>
        <el-table-column
          label="发车时间"
          prop="FCSJ_tb">
        </el-table-column>
        <el-table-column
          label="班次"
          prop="BC_tb">
        </el-table-column>
        <el-table-column
          label="选项">
          <template slot-scope="scope">
            <el-button type="text" @click="outerVisible = true">留位出票</el-button>

            <el-dialog title="留位出票"
                       :visible.sync="outerVisible"
                       width="80%"
                       :before-close="handleClose">
              <el-dialog
                class="innerBox"
                width="100%"
                :visible.sync="innerVisible"
                :before-close="handleClose"
                append-to-body>

                <div class="title_seat" >
                  <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple seat_1" >已售</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_2">留位</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">可售</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_4">配客</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_5">订票</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_6">停售</div></el-col>
                  </el-row>
                </div>

                <div class="seat_one" style="margin-top: 20px">
                  <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple seat_3" @click="change()">1</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">2</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">3</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">4</div></el-col>
                  </el-row>
                </div>
                <div class="seat_one" style="margin-top: 10px">
                  <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">5</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">6</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">7</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">8</div></el-col>
                  </el-row>
                </div>
                <div class="seat_one" style="margin-top: 10px">
                  <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">9</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">10</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">11</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">12</div></el-col>
                  </el-row>
                </div>
                <div class="seat_one" style="margin-top: 10px">
                  <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">13</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">14</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">15</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">16</div></el-col>
                  </el-row>
                </div>
                <div class="seat_one" style="margin-top: 10px">
                  <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">17</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">18</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">19</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">20</div></el-col>
                  </el-row>
                </div>
                <div class="seat_one" style="margin-top: 10px">
                  <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">21</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">22</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">23</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">24</div></el-col>
                  </el-row>
                </div>
                <div class="seat_one" style="margin-top: 10px">
                  <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">25</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">26</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">27</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">28</div></el-col>
                  </el-row>
                </div>
                <div class="seat_one" style="margin-top: 10px">
                  <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">29</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">30</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">31</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">32</div></el-col>
                  </el-row>
                </div>
                <div class="seat_one" style="margin-top: 10px">
                  <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">33</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">34</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">35</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">36</div></el-col>
                  </el-row>
                </div>
                <div class="seat_one" style="margin-top: 10px">
                  <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">37</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">38</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">39</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">40</div></el-col>
                  </el-row>
                </div>
                <div class="seat_one" style="margin-top: 10px">
                  <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">41</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">42</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">43</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">44</div></el-col>
                  </el-row>
                </div>
                <div class="seat_one" style="margin-top: 10px">
                  <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">45</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">46</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">47</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">48</div></el-col>
                  </el-row>
                </div>
                <div class="seat_one" style="margin-top: 10px">
                  <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">49</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">50</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">51</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">52</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">53</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple seat_3">54</div></el-col>
                  </el-row>
                </div>

              </el-dialog>
              <el-form :model="form">
                    <el-input v-model="form.name" auto-complete="off" placeholder="输入座位数量"></el-input>
              </el-form>
              <div style="padding: 15px">
                <el-radio v-model="radio" label="1">1</el-radio>
                <el-radio v-model="radio" label="2">2</el-radio>
                <el-radio v-model="radio" label="3">3</el-radio>
                <el-radio v-model="radio" label="4">4</el-radio>
              </div>
              <div>
                <el-button type="primary" plain>流水号出票</el-button>
                <el-button type="success" @click="innerVisible = true" plain>座号出票</el-button>
              </div>
              <div slot="footer" class="dialog-footer">
                <el-button @click="outerVisible = false">取 消</el-button>
                <el-button type="primary" @click="outerVisible = false">确 定</el-button>
              </div>
            </el-dialog>
          </template>
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
        outerVisible: false,
        innerVisible: false,
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
          LWRQ_tb: '2018-08-21',
          FCSJ_tb: '08-15 7:12',
          BC_tb: 'AZ321',
        }, {
          LWRQ_tb: '2018-08-21',
          FCSJ_tb: '08-15 7:12',
          BC_tb: 'AZ321',
        }, {
          LWRQ_tb: '2018-08-23',
          FCSJ_tb: '08-15 7:12',
          BC_tb: 'AZ321',
        }, {
          LWRQ_tb: '2018-08-23',
          FCSJ_tb: '08-15 7:12',
          BC_tb: 'AZ321',
        }, {
          LWRQ_tb: '2018-08-24',
          FCSJ_tb: '08-15 7:12',
          BC_tb: 'AZ321',
        }, {
          LWRQ_tb: '2018-08-22',
          FCSJ_tb: '08-15 7:12',
          BC_tb: 'AZ321',
        }, {
          LWRQ_tb: '2018-08-22',
          FCSJ_tb: '08-15 7:12',
          BC_tb: 'AZ321',
        }, {
          LWRQ_tb: '2018-08-22',
          FCSJ_tb: '08-15 7:12',
          BC_tb: 'AZ321',
        }
        ],

        tableData: [],
        value1: '',
        radio: '1',
        datetime0: '2018-08-22',
        datetime1: '2018-08-10',
        yearFormat: '<span style="color:#F00;">{value}<i style="font-size: 12px;margin-left: 1px;">年</i></span>',
        monthFormat: '<span style="color:#0BB20C;">{value}<i style="font-size: 12px;margin-left: 1px;">月</i></span>',
        dayFormat: '<span style="color:#FFB400;">{value}<i style="font-size: 12px;margin-left: 1px;">日</i></span>'
      }
    },
    methods: {
      // hancleClick(name){
      //   DialogConfig.curDialog = DialogConfig[name]
      // },

      // submitHandler(value) {
      //   this.$dialo[g.toast({mes: `班次号：${value}`});
      // },
      // formatTooltip(val) {
      //   return val / 100;
      // },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
          done();
         })
          .catch(_ => {});
      },
      // rowChick:function(row, event, column) {
      //   this.$router.push({path:'/station/later_situation'});
      // },
      // handleEdit(index, row) {
      //     console.log(index, row);
      //   },
      // change(a) {
      //   a.style.backgroundColor =red;
      // }
      keywordFilter() {
        let val = this.datetime0;
        if (val =='') {
          this.tableData = this.tableData5;
        }else{
          this.tableData = this.tableData5.filter(item => (
            !item.LWRQ_tb.indexOf(val)))
        }
      },
      tableFilter() {
        this.keywordFilter();
      }
    },
    watch: {
      datetime0(){
        this.tableFilter();
      }
    },
    created(){
      this.tableData = this.tableData5;
      this.tableFilter();
    }

  }

</script>

<style scoped>

  .seat {
    opacity: 0;
  }
   .seat_1{
    background: red;
  }
   .seat_2{
     background: #b3e5fc;
     color: black;
   }
   .seat_3{
     background: limegreen;
   }
   .seat_4{
     background: #ffb300;
   }
   .seat_5{
     background: cornflowerblue;
   }
   .seat_6{
     background: #bdbdbd;
   }
  .seat_1 .seat_2 .seat_3 .seat_4 .seat_5 .seat_6:hover {
    background: white;
    color: black;
  }
  /*.seat_1 .seat_2 .seat_3 .seat_4 .seat_5 .seat_6:focus {*/
    /*background: white;*/
    /*color: black;*/
  /*}*/
  /*.seat_1 .seat_2 .seat_3 .seat_4 .seat_5 .seat_6:active {*/
    /*background: white;*/
    /*color: black;*/
  /*}*/
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .el-row {
    color: white;
    text-align: center;
    line-height: 36px;
  }
  .el-input__inner input[type="text"] {
    background-color: red!important;
  }
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
