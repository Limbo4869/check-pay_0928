<template>
  <div class="nt-page">
    <!-- <mt-header fixed :title="'选择出发日期'">
      <div slot="left" @click="$emit('back')" class="iconfont icon-back"></div>
    </mt-header>-->

    <yd-navbar title="选择出发日期" fixed>
      <div slot="left" @click="$emit('back')" class="iconfont icon-back"></div>
    </yd-navbar>

    <div class="week-head">
      <div style="color: #d60">周日</div>
      <div>周一</div>
      <div>周二</div>
      <div>周三</div>
      <div>周四</div>
      <div>周五</div>
      <div style="color: #d60">周六</div>
    </div>

    <div style="margin:4.2rem 0 1rem 0; background-color: #fff;">
      <div v-for="m in monDays" class="month-item">
        <p v-text="m.label" class="aui-text-info"></p>
        <div v-for="(d, index) in m.dayarr"
             :class="['day-item', (index == 0 ? 'day-item-w' + d.week : ''), {'day-item-gone': !d.enable, 'day-item-sel': d.selected, 'day-item-now': d.now}]"
             :key="d.key"
             @click="pickDate(d)">
          <div>{{d.label}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import kit from '../kit';
  export default {
    //components: {},
    props: {
      max: {
        type: Number,
        default: 20
      },
      val: {
        type: String
        //, default: kit.fmt(new Date())
      }
    },
    data () {
      return {
        currVal: null,
        monDays: []
      }
    },
    computed: {
      //start, end, current
    },
    methods: {
      isAble(date){
        let diffNow = kit.getDayDiff(date, new Date());
        return diffNow >= 0 && diffNow < this.max;
      },
      initMd (){
        //初始化可选月份,日期
        let td = new Date();
        let monA = new Date(td.getFullYear(), td.getMonth(), 1);
        let monB = new Date(td.getFullYear(), td.getMonth() + 1, 1);
        let monC = new Date(td.getFullYear(), td.getMonth() + 2, 1);
        this.monDays = [{
          label: kit.fmt(monA, 'YYYY年 MM月'),
          dayarr: (function () {
            let r = [];
            for (var i = 0; i < kit.getDayDiff(monB, monA); i++) {
              let tmp = new Date(monA.getFullYear(), monA.getMonth(), i + 1);
              r.push({
                key: kit.fmt(tmp),
                val: tmp,
                label: kit.fmt(tmp, 'DD')
              });
            }
            return r;
          })()
        }, {
          label: kit.fmt(monB, 'yyyy年 MM月'),
          dayarr: (function () {
            let r = [];
            for (var i = 0; i < kit.getDayDiff(monC, monB); i++) {
              let tmp = new Date(monB.getFullYear(), monB.getMonth(), i + 1);
              r.push({
                key: kit.fmt(tmp),
                val: tmp,
                label: kit.fmt(tmp, 'DD')
              });
            }
            return r;
          })()
        }];
        //console.log(this.monDays);
      },
      updateView(){
        let td = new Date(); //kit.parseToDate(kit.fmt(new Date()));
        let currSel = this.currVal;
        let newMds = [];
        for (let m of this.monDays) {
          for (let tmp of m.dayarr) {
            let tmpDay = tmp.val;
            let diffNow = kit.getDayDiff(tmpDay, td);
            tmp.now = (diffNow == 0);
            tmp.enable = this.isAble(tmpDay);
            tmp.selected = (currSel && kit.getDayDiff(tmpDay, currSel) == 0);
            tmp.week = tmpDay.getDay();
          }
          newMds.push(m);
        }
        this.monDays = newMds;
      },
      prevDay(){
        let tt = kit.plusDay(this.currVal, -1);
        if (this.isAble(tt)) {
          return tt;
        }
      },
      nextDay(){
        let tt = kit.plusDay(this.currVal, 1);
        if (this.isAble(tt)) {
          return tt;
        }
      },
      pickDate(item){
        if (item.enable) {
          this.$emit('pickDate', item);
          //this.currVal = item.val;
        }
      }
    },
    watch: {
      val (val, oldval){
        if (val == oldval) {
          return;
        }
        this.currVal = kit.parseToDate(val);
        this.updateView();
      }
    },
    created (){
      //console.log('calendar created...');
      //this.val = kit.fmt(new Date());
      this.initMd();
      if (!this.currVal || kit.getDayDiff(this.currVal, kit.parseToDate(this.val) || new Date()) !== 0) {
        this.currVal = kit.parseToDate(this.val);
      }
    },
    mounted (){
      this.updateView();
    }
  }
</script>

<style scoped>
  .week-head {
    position: fixed;
    top: 2rem;
    width: 100%;
    padding: .6rem 0;
    overflow: auto;
    background-color: #E8EDF1;
    border-bottom: 1px solid #ccc;
  }

  .week-head > div {
    float: left;
    width: 14%;
    text-align: center;
  }

  .month-item {
    overflow: hidden;
    width: 100%;
    padding-top: 2px;
  }

  .month-item > p {
    display: block;
    margin: 0;
    padding: .4rem 0;
    clear: both;
    text-align: center;
    font-size: .9rem;
    background-color: #efefef;
    border-top: 1px solid #ccc;
  }

  .month-item > div {
    overflow: hidden;
    border: none;
  }

  .day-item {
    float: left;
    overflow: hidden;
    width: 14%;
    font-size: .7rem;
    line-height: 2.4rem;
    text-align: center;
    color: #333;
    padding: 2px;
  }

  .day-item-w1 {
    margin-left: 14%;
  }

  .day-item-w2 {
    margin-left: 28%;
  }

  .day-item-w3 {
    margin-left: 42%;
  }

  .day-item-w4 {
    margin-left: 56%;
  }

  .day-item-w5 {
    margin-left: 70%;
  }

  .day-item-w6 {
    margin-left: 84%;
  }

  .day-item-gone {
    color: #ccc;
  }

  .day-item-now {
    /*color: #d60;*/
    font-weight: 700;
  }

  .day-item-sel > div {
    background-color: #dea726;
    color: #fff;
    font-weight: bold;
    border-radius: 2px;
  }
</style>
