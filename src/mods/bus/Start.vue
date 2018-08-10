<template>
  <div class="country-list">
    <yd-navbar fixed title="选择站点">
      <div slot="left" @click="goView('/bus/history')" class="iconfont icon-myline"></div>
      <div slot="right" @click="goView('/bus/history')" class="iconfont icon-icon2"></div>
    </yd-navbar>
    <div class="country-border"  style="margin-top: 40px;background: white;">
      <div style="padding: 0.5rem; background: #EFF1F2;">
        <p>历史站点</p>
      </div>
      <div v-for="(item, index) in state.bus.hisline" :key="index" @click="pickItem(item,index)" v-bind:class="{'aui-text-info': index === active }" >
        <div class="item" >
          <div></div>
          <div>{{item.stationname}}</div>
        </div>
      </div>
      <div class="item" v-if="hisCount">
        暂无数据
      </div>
      <div style="padding: 0.5rem; background: #EFF1F2;">
        <p>全部站点</p>
      </div>
      <div  v-for="(item, index) in list" :key="index" @click="pickItem(item,index)" v-bind:class="{'aui-text-info': index === active }" >
        <div class="item" >
          <div></div>
          <div>{{item.stationname}}</div>
        </div>
      </div>
    </div>
    <div class="aui-row" style="border-top: 1px solid #ddd;">
      <div class="aui-col-xs-6">
        <div class="aui-btn aui-btn-default" style="width: 100%;background:white !important;padding: 0.5rem 0;border-radius: 0" @click="goView('/bus/start')">选班</div>
      </div>
      <div class="aui-col-xs-6">
        <div class="aui-btn aui-btn-info" style="width: 100%;padding: 0.5rem 0;border-radius: 0" @click="goView('/bus/start')">扫码检票</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [{
          stationname: '体育西路站'
        },{
          stationname: '体育西路站'
        },{
          stationname: '体育西路站'
        },{
          stationname: '体育西路站'
        },{
          stationname: '体育西路站'
        }],
        busy: false,
        loaderr: false,
        val: {
          stcode: null,
          stname: null
        },
        active: -1
      };
    },
    computed: {
      hisCount(){
        return this.state.bus.hisline.length === 0;
      }
    },
    methods: {
      loadEnd(){
        let t = this;
        if (t.busy) {
          return;
        }
        t.busy = true;
        t.list = [];
        t.callApi(t.api.Get('QUERY_CITY_STATION'), {
          source:  t.getLinkSource(),
          type: t.state.type,
          pagetype: t.state.startType
        }, function (ok, data, msg) {
          // console.log(JSON.stringify(ok + '-' + data + '-' + msg))
          t.busy = false;
          if (ok) {
            t.list = data || [];
            t.loaderr = false;
          } else {
            t.loaderr = true;
          }
        });
      },
      pickItem(item,index){
        let t = this;
        t.active = index;

        if(t.state.type === 3){
          if(t.state.bus.dep && t.state.bus.dep.source !== item.source){
            t.state.bus.arr = null;
          }
        }

        t.setDepAndBack({
          province: null,
          city: null,
          cityUrl: null,
          stcode: item.stationcode,
          stname: item.stationname,
          title: item.stationname,
          source: item.source
        });
      },
      setDepAndBack(dep){
        let t = this;
        t.state.bus.dep  = dep;
      }
    },
    beforeRouteEnter (to, from, next){
      next(function (vm) {
        vm.ipt = '';
        if (vm.list.length ===0) {
          vm.loadEnd();
        }

      });
    }
  }
</script>

<style scoped>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #app {
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
  .detial {
    font-size: 16px;
    color: #fff;
    height: 50px;
    line-height: 50px;
    background-color: gray;
  }
  .item {
    padding: 10px 20px;
    border-bottom: 1px solid #ececec;
    text-align: left;
  }
  .country-list {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .country-border {
    flex: 1;
    overflow: auto;
    position: relative;
  }
  .char-list-border {
    padding-top: 50px;
    position: fixed;
    right: 0;
    top: 0;
    width: 20px;
    height: 100%;
    margin: 0;
    box-sizing: border-box;
  }
  .char-list {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
  }
  .char-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
  .char-tip {
    position: fixed;
    width: 50px;
    height: 50px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    background-color: gray;
    border-radius: 6px;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    line-height: 50px;
    text-align: center;
  }
</style>
