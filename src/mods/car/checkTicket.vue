<template>
  <div>
    <yd-navbar title="验票" style="margin-bottom: 10px">
      <div slot="left" @click="goView('/car/car')" class="iconfont icon-back"></div>
      <!--<div slot="right" @click="goView('/bus/history')" class="el-icon-search"></div>-->
    </yd-navbar>

    <div style="margin: 20px 0px 10px 15px;">
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content bg-purple">
          <el-row :gutter="1">
            <el-col :span="12">
              <div >
                <span class="green" style="width:10px;height: 10px;background-color: limegreen;display: inline-block "></span>
                <span style="display: inline-block">留位</span>
              </div>
              <div>
                <span class="gray" style="width:10px;height: 10px;background-color: #bdc3c7;display: inline-block "></span>
                <span style="display: inline-block">已检</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <span class="blue" style="width:10px;height: 10px;background-color: #00bcd4;display: inline-block "></span>
                <span style="display: inline-block">未检</span>
              </div>
              <div>
                <span class="red" style="width:10px;height: 10px;background-color: red;display: inline-block "></span>
                <span style="display: inline-block">停售</span>
              </div>
            </el-col>
          </el-row>
        </div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple-light">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="班次号"
              v-model="input_jpk"
              clearable>
            </el-input>
          </div>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <el-button type="primary" @click="dialogVisible = true">验 票</el-button>
          <el-dialog
            title="验票"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>请把条形码对准扫描框即可扫描</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>

        </div></el-col>
      </el-row>
    </div>

    <div style="margin-top:20px">
      <el-row :gutter="10" style="margin-bottom: 10px">
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: red;border-radius: 10px">1</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">2</div>
        </el-col>
        <el-col :span="6" >
          <div class="two_block" style="width: 100%;height: 100px;background-color: #bdbdbd;border-radius: 10px">
            <div class="name_block" style="padding: 10px 5px 5px 10px;font-size: 14px">XXX</div>
            <div class="card_block" style="padding: 0px 5px 5px 10px;font-size: 14px">01180319</div>
            <div class="phone_block" style="padding: 0px 5px 5px 10px;font-size: 14px">9565</div>
          </div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: limegreen;border-radius: 10px">4</div>
        </el-col>
      </el-row>

      <el-row :gutter="10" style="margin-bottom: 10px">
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">5</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">6</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">7</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">8</div>
        </el-col>
      </el-row>

      <el-row :gutter="10" style="margin-bottom: 10px">
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">8</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">9</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">10</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">11</div>
        </el-col>
      </el-row>

      <el-row :gutter="10" style="margin-bottom: 10px">
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">12</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">13</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">14</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">15</div>
        </el-col>
      </el-row>

      <el-row :gutter="10" style="margin-bottom: 10px">
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">16</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">17</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">18</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">19</div>
        </el-col>
      </el-row>

      <el-row :gutter="10" style="margin-bottom: 10px">
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">20</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">21</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">22</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">23</div>
        </el-col>
      </el-row>

      <el-row :gutter="10" style="margin-bottom: 10px">
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">24</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">25</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">26</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">27</div>
        </el-col>
      </el-row>

      <el-row :gutter="10" style="margin-bottom: 10px">
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">28</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">29</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">30</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">31</div>
        </el-col>
      </el-row>

      <el-row :gutter="10" style="margin-bottom: 10px">
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">32</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">33</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">34</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">35</div>
        </el-col>
      </el-row>

      <el-row :gutter="10" style="margin-bottom: 10px">
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">36</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">37</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">38</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">39</div>
        </el-col>
      </el-row>

      <el-row :gutter="10" style="margin-bottom: 10px">
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">40</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">41</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">42</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">43</div>
        </el-col>
      </el-row>

      <el-row :gutter="10" style="margin-bottom: 10px">
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">44</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">45</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">46</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">47</div>
        </el-col>
      </el-row>

      <el-row :gutter="10" style="margin-bottom: 10px">
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">48</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">49</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">50</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">51</div>
        </el-col>
      </el-row>

      <el-row :gutter="10" style="margin-bottom: 10px">
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">52</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">53</div>
        </el-col>
        <el-col :span="6" class="one_block">
          <div class="one_block" style="width: 100%;height: 100px;background-color: #00bcd4;border-radius: 10px">54</div>
        </el-col>
      </el-row>
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
        input_jpk:'',
        input_xl:'',
        value1: '',
        dialogVisible: false,
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }


</script>

<style scoped>
  .one_block {
    color: white;
    text-align: center;
    font-size: 30px;
    line-height: 100px;
  }
  .two_block {
    font-size: 12px;
    color: white;
  }
  /*.name_block {*/
    /*margin: 5px auto;*/
  /*}*/
  .yd-cell-item {
    padding-left:0rem!important
  }

  .yd-datetime-input {
    font-size: 10px;
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
