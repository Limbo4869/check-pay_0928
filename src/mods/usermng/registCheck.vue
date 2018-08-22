<template>
  <div>
    <yd-navbar title="注册审核" style="margin-bottom: 10px">
      <div slot="left" @click="goView('/usermng/User')" class="iconfont icon-back"></div>
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>

    <div style="margin:10px 20px ">
      <el-row :gutter="10" >
        <el-col :span="18">
          <div class="grid-content bg-purple-dark" >
            <el-input placeholder="工 号 或 姓 名"  v-model="name_numb" clearable></el-input>
          </div>
        </el-col>
        <el-col :span="4"><div class="grid-content bg-purple-dark">
          <el-button type="success" plain @click="dialogVisible = true">添 加</el-button>
          <template>

            <el-dialog
              title="添加用户"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose">
              <el-row style="margin: 10px;">
                <el-col :span="24" style="padding-bottom: 10px">
                  <el-input placeholder="单 位 名 称"  v-model="name_numb" clearable></el-input>
                </el-col>
                <el-col :span="24" style="padding-bottom: 10px">
                  <el-input placeholder="姓 名"  v-model="name_numb" clearable></el-input>
                </el-col>
                <el-col :span="24" style="padding-bottom: 10px">
                  <el-input placeholder="手 机 号 码"  v-model="name_numb" clearable></el-input>
                </el-col>
                <el-col :span="24">
                  <!--<el-input placeholder="手 机 号 码"  v-model="name_numb" clearable></el-input>-->
                  <el-dropdown>
                    <el-button type="primary">
                      更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>黄金糕</el-dropdown-item>
                      <el-dropdown-item>狮子头</el-dropdown-item>
                      <el-dropdown-item>螺蛳粉</el-dropdown-item>
                      <el-dropdown-item>双皮奶</el-dropdown-item>
                      <el-dropdown-item>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>

                      <!--<el-dropdown-item>车 方 用 户</el-dropdown-item>-->
                      <!--<el-dropdown-item>站 务 员 工</el-dropdown-item>-->
                      <!--<el-dropdown-item>站 务 主 任</el-dropdown-item>-->
                      <!--<el-dropdown-item>票 务 员 工</el-dropdown-item>-->
                      <!--<el-dropdown-item>票 务 主 任</el-dropdown-item>-->
                      <!--<el-dropdown-item>营 运 经 理</el-dropdown-item>-->

                </el-col>
              </el-row>

              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </template>
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
              <el-form-item label="姓名">
                <span>{{ props.row.name_tb }}</span>
              </el-form-item>
              <el-form-item label="角色">
                <span>{{ props.row.play_tb }}</span>
              </el-form-item>
              <el-form-item label="工号">
                <span>{{ props.row.numb_tb }}</span>
              </el-form-item>
              <el-form-item label="单位">
                <span>{{ props.row.where_tb }}</span>
              </el-form-item>
              <el-form-item label="电话">
                <span>{{ props.row.phone_tb  }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="姓名"
          prop="name_tb">
        </el-table-column>
        <el-table-column
          label="角色"
          prop="play_tb">
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          width="80">

          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              删除
            </el-button>
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
        tableData5: [
          {
            name_tb: 'XXX',
            play_tb: '车方用户',
            numb_tb: '001',
            where_tb: 'XXX单位',
            phone_tb: '13560049565',
          },
          {
            name_tb: 'AAA',
            play_tb: '车方用户',
            numb_tb: '002',
            where_tb: 'XXX单位',
            phone_tb: '13560049565',
          },
          {
            name_tb: 'BBB',
            play_tb: '车方用户',
            numb_tb: '003',
            where_tb: 'XXX单位',
            phone_tb: '13560049565',
          },
        ],
        tableData:[],
        name_numb: '',
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
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      // add() {
      //   this.tableData5.push(
      //     {
      //       name_tb: 'AAA',
      //       play_tb: '车方用户',
      //       numb_tb: '002',
      //       where_tb: 'XXX单位',
      //       phone_tb: '13560049565',np
      //     }
      //   );
      //   this.tableData = this.tableData5;
      // },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      keywordFilter() {
        let name_numb = this.name_numb;
        if (name_numb =='') {
          this.tableData = this.tableData5;
        }else{
          this.tableData = this.tableData5.filter(item => (
            (!item.numb_tb.indexOf(name_numb))||(!item.name_tb.indexOf((name_numb)))
          ))
        }
      },
      tableFilter() {
        this.keywordFilter();
      }
    },
    watch: {
      name_numb(){
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
  /*.el-dropdown + .el-dropdown {*/
    /*margin-left: 15px;*/
  /*}*/
  .el-dropdown {
    vertical-align: top;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-dialog__body {
    padding: 10px 20px;
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
