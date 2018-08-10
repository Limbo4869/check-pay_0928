<template>
  <div class="nt-page">
    <mt-popup v-model="showpop" position="right"
              style="width:100%; height: 100%;">
      <n-calendar ref="calendar"
                  :val="state.bus.date"
                  :max="45"
                  :modal="false"
                  @back="showpop=false"
                  @pickDate="pickDate">
      </n-calendar>
    </mt-popup>

    <div v-show="!showpop" class="nt-page">

      <mt-header fixed :title="title">
        <div slot="left" class="mintui mintui-back" @click="$router.push('/bus/form')"></div>
        <mt-button slot="right" @click="querySch" class="iconfont icon-reload"></mt-button>
      </mt-header>
      <div class="aui-row aui-text-info subhead">
        <div class="aui-col-xs-3" @click="prevDay">
          <i class="iconfont icon-left"></i> 前一天
        </div>
        <div class="aui-col-xs-6" style="background-color: #e8edf1;"
             @click="showpop=true">
          <i class="iconfont icon-date"></i>
          {{datelabel}}
        </div>
        <div class="aui-col-xs-3" @click="nextDay">
          后一天 <i class="iconfont icon-right"></i>
        </div>
      </div>

      <div class="schmain">
        <div style="position: absolute; top:0;" ref="topHrefItem"></div>
        <mt-loadmore
          ref="loadmore"
          :topDistance="60"
          :top-method="querySch"
          @top-status-change="handleTopChange"
          style="position:absolute;width:100%;height:100%;">

          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus === 'pull'">下拉刷新</span>
            <span v-show="topStatus === 'drop'">释放刷新班次</span>
            <span v-show="topStatus === 'loading'">
              <!-- <mt-spinner type="fading-snake"></mt-spinner> -->
              <!--加载中...-->
            </span>
          </div>

          <div v-if="allLoaded && loaderr"
               class="mcenter">
            <div>
              加载失败, 点击屏幕刷新.
            </div>
          </div>

          <div v-if="allLoaded">

            <!--  -->
            <div v-show="stations.length==0"
                 style="padding: .5rem 0; text-align: center; width:100%; height: 100%;">
              没有符合
              <b class="aui-text-danger" v-if="citymode"> [ {{state.bus.dep.city}} &rarr;
                {{state.bus.arr.title}}]</b>
              <b class="aui-text-danger" v-else> [ {{state.bus.dep.title}} &rarr;
                {{state.bus.arr.title}}]</b>
              的班次信息.
            </div>

            <!-- 可同城推荐 -->
            <div v-if="isstdep && !citymode && stations.length == 0"
                 @click="toggleCityMode(true)"
                 class="mcenter"
                 style="padding: .5rem 0; text-align: center; width:100%; height: 100%;">
              <div>
                为我推荐<b class="aui-text-danger">[ {{state.bus.dep.city}} &rarr;
                {{state.bus.arr.title}} ]</b>的班次(同城其他客运站出发)
              </div>
            </div>
            <!-- 同城推荐模式 -->
            <div v-show="citymode"
                 @click="toggleCityMode(false)"
                 class="aui-text-center"
                 style="padding: .5rem 0; text-align: center; width:100%; height: 100%;">
              <div>
                取消同城推荐
                <!--只查询客运站: [ {{state.bus.dep.title}} &rarr; {{state.bus.arr.title}}] 的班次信息.-->
              </div>
              <div v-show="stations.length>0">
                以下为推荐的同城出发
                  <span class="aui-text-danger">
                    [ {{state.bus.dep.city}}(<b>其他客运站</b>) &rarr; {{state.bus.arr.title}} ]
                  </span>
                的班次!
              </div>
            </div>

            <!-- 班次结果集 -->
            <div v-if="allLoaded" v-for="st in stations"
                 class="aui-list aui-list-noborder"
                 style="margin-bottom: 1px;">
              <div @click="st.open = !st.open"
                   class="schheader aui-list-item-inner">
                <div class="">
                  {{st.stname}}
                </div>
                <div>
                  共{{st.schcount}}班
                  <i v-if="st.open" class="iconfont icon-up"></i>
                  <i v-else class="iconfont icon-down"></i>
                </div>
              </div>
              <div v-show="st.open"
                   v-for="(item, idx) in st.schs"
                   style="margin-bottom: .4rem;">
                <div class="aui-list-item aui-list-item-noborder">
                  <div class="aui-list-item-inner">
                    <div class="aui-list-item-title aui-padded-t-5 aui-padded-b-5"
                         @click="pickSch(item)">
                      <div class="aui-text-desc aui-font-size-12">
                        <span class="aui-font-size-24" style="color: #333333;">
                          {{item.schtime}}
                        </span>
                        &nbsp;班次:
                        <span class="aui-font-size-18">{{item.schcode}}</span>
                      </div>
                      <!--<span style="font-size: .8rem;">{{item.date}}</span>-->
                      <div class="aui-text-default">
                        <i class="iconfont icon-sta_shi aui-text-success"
                           style="font-size:1.2rem;"></i>
                        [{{state.bus.dep.city}}] {{item.startstationname}}
                      </div>
                      <div class="aui-text-default">
                        <i class="iconfont icon-sta_da aui-text-danger"
                           style="font-size:1.2rem;"></i>
                        [{{item.endcity}}] {{item.endstationname}}
                      </div>
                      <div class="aui-text-desc">
                        &emsp;&nbsp;&nbsp;&nbsp;
                        终到: {{item.laststationname}}
                      </div>
                    </div>
                    <div class="aui-list-item-right"
                         @click="toggleSch(idx)"
                         style="border-left: 2px dotted #d9d9d9; padding-left: .75rem; text-align: right;">
                      <div class="aui-text-danger">
                        &yen;<span style="font-size: 1.2rem;"> {{item.price}}</span>
                      </div>
                      <!--<div class="aui-label aui-label-info"
                           style="padding: .6rem .8rem; font-size: .7rem;" @click="pickSch(item)">购票
                      </div>-->
                      <div class="">余票 &lt;{{item.lefttickets}}</div>
                      <div class="aui-text-desc">途径站点 <i class="iconfont icon-down2 "></i></div>
                    </div>
                  </div>
                </div>
                <div class="aui-hide aui-padded-t-5 aui-padded-b-5 "
                     :ref="'sch_detail_'+idx">
                  <div class="">
                    详细信息
                  </div>
                </div>
              </div>
            </div>
            <!--<div v-if="stations.length>0"
                 style="line-height: 2.4rem; text-align: center;">
              没有更多班次了!
            </div>-->
          </div>

        </mt-loadmore>
      </div>

      <div v-show="showbacktop"
           class="back-top-item"
           @click="backTop">
        <i class="iconfont icon-up2"></i>
      </div>
      <!--<div class="foot">
        <div style="position:absolute;bottom:2.4rem;width: 100%; z-index:3;">
          <div class="schfilter"></div>
          <div class="schsorter"></div>
        </div>
        <div class="foottab aui-row aui-border-t" style="width:100%;">
          <div class="aui-col-xs-6">
            站点过滤
            <div class="aui-dot"></div>
          </div>
          <div class="aui-col-xs-6">
            按时间早到晚排序
          </div>
        </div>
      </div>-->

    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        showpop: false,
        filter: [],
        busy: false,
        citymode: false,
        topStatus: '',
        allLoaded: false,
        loaderr: false,
        list: [],
        stations: []
      }
    },
    computed: {
      title (){
        let t = this;
        let dep = t.state.bus.dep;
        let arr = t.state.bus.arr;
        if (dep && arr) {
          if (t.isstdep && t.citymode) {
            return dep.city + ' - ' + arr.title;
          }
          return dep.title + ' - ' + arr.title;
        }
        return '班次信息';
      },
      isstdep(){
        let t = this;
        return t.state.bus.dep && t.state.bus.dep.stcode;
      },
      datelabel(){
        let currdate = this.state.bus.date;
        let diff = this.kit.getDayDiff(currdate, new Date());
        if (diff == 0) {
          return currdate + ' 今天';
        }
        if (diff == 1) {
          return currdate + ' 明天';
        }
        if (diff == 2) {
          return currdate + ' 后天';
        }
        return this.kit.fmt(currdate, 'YYYY-MM-DD W');
      },
      showbacktop(){
        return this.list.length > 10;
      }
    },
    methods: {
      prevDay (){
        let t = this;
        let cal = t.$refs['calendar'];
        let cv = cal.prevDay();
        if (cv) {
          t.state.bus.date = this.kit.fmt(cv);
          t.querySch();
          return;
        }
      },
      nextDay (){
        let t = this;
        let cal = t.$refs['calendar'];
        let cv = cal.nextDay();
        if (cv) {
          t.state.bus.date = t.kit.fmt(cv);
          t.querySch();
          return;
        }
        //t.kit.toast('不在可售的日期范围内!');
      },
      pickDate(item){
        let t = this;
        t.showpop = false;
        let pick = t.kit.fmt(item.val);
        t.state.bus.date = pick;
        t.querySch();
      },
      handleTopChange(status){
        let t = this;
        t.topStatus = status;
      },
      parseSts(list){
        let t = this;
        let sts = {};
        for (let item of list) {
          let stcode = item.startstation;
          let st = sts[stcode];
          if (!st) {
            st = {
              stcode: stcode,
              stname: item.startstationname,
              schcount: item.schcount,
              schs: [],
              open: false
            };
            sts[stcode] = st;
          }
          item._open = false;
          item.date = item.schdate ? (item.schdate.substring(0, 4) + '-' + item.schdate.substring(4, 6) + '-' + item.schdate.substring(6, 8)) : '';
          item.schtime = item.sendtime ? (item.sendtime.substring(0, 2) + ':' + item.sendtime.substring(2, 4)) : '';
          item.stoplist = (item.throughstation || '').split('、');
          st.schs.push(item);
        }
        let rs = [];
        for (let k of Object.keys(sts)) {
          rs.push(sts[k]);
        }
        if (rs.length == 1 && rs[0]) {
          rs[0].open = true;
        }
        return rs;
      },
      backTop(event){
        //https://github.com/oneuijs/You-Dont-Need-jQuery/blob/master/README.zh-CN.md#query-selector
        //let firstChild = event.target.parentNode.querySelectorAll('li')[0];
        //this.$refs['loadmore'].$el.querySelectorAll('.stname')[0].scrollIntoView();
        //this.$refs['loadmore'].$el.querySelectorAll('*')[0].scrollIntoView();
        this.$refs['topHrefItem'].scrollIntoView();
      },
      toggleCityMode(enable){
        let t = this;
        t.citymode = enable;
        t.querySch();
      },
      addHisLine (newline){
        let t = this;
        if (!newline.dep || !newline.dep.title || !newline.arr || !newline.arr.title) {
          return;
        }
        let tmp = [];
        for (let tl of t.state.bus.hisline) {
          if (tl.dep.title == newline.dep.title && tl.arr.title == newline.arr.title) {
            continue;
          }
          tmp.push(tl);
        }
        tmp.unshift(newline);
        let maxHisSize = 3;
        for (let i = 0; i < Math.max(tmp.length - maxHisSize, 0); i++) {
          tmp.pop();
        }
        t.state.bus.hisline = tmp;
        let stjs = t.getStorejs();
        stjs.set('bus.hisline', JSON.stringify(tmp));
      },
      querySch () {
        let t = this;
        if (t.topStatus == 'loading') {
          return;
        }
        //历史查询
        t.addHisLine({dep: t.state.bus.dep, arr: t.state.bus.arr});
        t.allLoaded = false;
        t.callApi('/inquireBus/querySch', {
          //orgno: t.state.bus.orgno,
          schdate: t.state.bus.date,
          fromcity: t.state.bus.dep.city,
          tocity: t.state.bus.arr.title,
          station: (t.citymode ? '' : ( t.state.bus.dep.stcode || ''))
        }, function (ok, data, msg) {
          t.$refs.loadmore.onTopLoaded();
          t.allLoaded = true;
          if (ok) {
            t.list = data || [];
            t.stations = t.parseSts(t.list);
            t.loaderr = false;
            return;
          }
          t.stations = [];
          t.loaderr = true;
          //return false;
        });
      },
      toggleSch(idx){
        let t = this;
        let el = t.$refs['sch_detail_' + idx][0];
        if (el) {
          el.classList.toggle('aui-hide');
        }
      },
      pickSch(item){
        let t = this;
        t.state.bus.sch = item;
        t.goView('/bus/lock');
      }
    },
    /*watch: {
     topStatus(){
     console.log(this.topStatus);
     }
     },*/
    beforeRouteEnter (to, from, next){
      next(function (vm) {
        if ((from && from.path == '/bus/lock') || (to.query && to.query['keep'])) {
          return;
        }
        if (!vm.state.bus.dep || !vm.state.bus.arr) {
          vm.goView('/bus/form');
          return;
        }
        vm.querySch();
      });
    },
    //beforeRouteUpdate (to, from, next) { next(); },
    beforeRouteLeave (to, from, next) {
      if (this.showpop) {
        this.showpop = false;
        next(false);
        return;
      }
      next();
    }
  }
</script>

<style lang="less" scoped>
  .subhead {
    position: fixed;
    top: 2.4rem;
    z-index: 5;
    width: 100%;
    height: 2.2rem;
    line-height: 2.2rem;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 .1rem .1rem #aaa;
  }

  .schmain {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 4.6rem;
    width: 100%;
    z-index: 3;
    /* padding: 4.6rem 0 2.4rem 0; */
    background-color: #f1f1f1;
    overflow: auto;
  }

  .schheader {
    background-color: #d8e1eb;
    color: #2090F6;
    padding: 0 .75rem;
  }

  .mcenter {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
  }

  .foot {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    /*box-shadow: 0 -0.25rem .25rem #eee;*/
  }

  .foottab {
    height: 2.4rem;
    line-height: 2.4rem;
    font-size: .8rem;
    text-align: center;
    background-color: #aaa;
    color: #fff;
    opacity: .8;
  }

  .back-top-item {
    position: fixed;
    z-index: 4;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    right: .5rem;
    bottom: .5rem;
    text-align: center;
    border-radius: 50%;
    background-color: #ff5d21;
    color: #fff;
    opacity: 0.6;
  }
</style>
