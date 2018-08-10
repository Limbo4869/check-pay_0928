<template>
    <div class="nt-page fixheader">
      <yd-navbar fixed title="历史行程">
        <div slot="left" @click="back" class="iconfont icon-back"></div>
        <div slot="right" @click="" class="iconfont icon-refresh"></div>
      </yd-navbar>
      <div class="time-set">
        <div class="aui-text-right">
          <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
        </div>
      </div>
     <div class="content" style="margin-top: 4.6rem">
       <div class="list" @click="goView('/bus/historydetail')" v-for="(item,index) in list" :key="index" >
         <div class="list-time">
           <p>{{item.time}}</p>
         </div>
         <div class="aui-row" v-for="(line, lineIndex) in item.lines" :key="lineIndex">
           <div class="aui-col-xs-6 aui-text-center list-point-blue" v-if="lineIndex === 0">
             {{line}}
           </div>
           <div class="aui-col-xs-6 aui-text-center list-line" v-if="lineIndex === 0"></div>
           <div class="aui-col-xs-6 aui-text-center list-point aui-font-size-12" v-if="lineIndex > 0 && lineIndex < item.lines.length - 1">
             {{lineIndex % 2 === 1 ? '&nbsp;' : line}}
           </div>
           <div class="aui-col-xs-6 aui-text-center list-line aui-font-size-12" v-if="lineIndex > 0 && lineIndex < item.lines.length - 1">
             {{lineIndex % 2 === 0 ? '&nbsp;' : line}}
           </div>
           <div class="aui-col-xs-6 aui-text-center list-point-red" v-if="lineIndex === item.lines.length - 1">
             {{lineIndex % 2 === 1 ? '&nbsp;' : line}}
           </div>
           <div class="aui-col-xs-6 aui-text-center aui-font-size-16" v-if="lineIndex === item.lines.length - 1">
             {{lineIndex % 2 === 0 ? '&nbsp;' : line}}
           </div>
         </div>
       </div>
     </div>
    </div>
</template>

<script>
  import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue';
    export default {
      data(){
         return {
           list:[{
             time: '2018-07-06 11:00',
             lines: [
               '体育西路站',
               '体育中心南站',
               '岗顶站',
               '石牌桥站',
               '华师站'
             ]
           },
           {
             time: '2018-07-06 11:00',
             lines: [
               '体育西路站',
               '体育中心南站',
               '岗顶站',
               '石牌桥站',
               '华师站'
             ]
           }],

           // === datepicker settings  start === //
           startTime: {
             time: ''
           },
           endtime: {
             time: ''
           },
           option: {
             type: 'day',
             week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
             month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
             format: 'YYYY-MM-DD',
             placeholder: '选择日期',
             inputStyle: {
               'display': 'inline-block',
               'line-height': '22px',
               'font-size': '14px',
               'border': '2px solid #fff',
               'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
               'border-radius': '2rem 0rem 0rem 2rem',
               'color': '#ffffff',
               'text-align': 'center',
               'background': '#5fc0ff'
             },
             color: {
               header: '#ccc',
               headerText: '#fff'
             },
             buttons: {
               ok: '确定',
               cancel: '取消'
             },
             overlayOpacity: 0.5, // 0.5 as default
             dismissible: true // as true as default
           },
           timeoption: {
             type: 'min',
             week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
             month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
             format: 'YYYY-MM-DD HH:mm'
           },
           multiOption: {
             type: 'multi-day',
             week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
             month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
             format:"YYYY-MM-DD HH:mm"
           },
           limit: [{
             type:'fromto',
             from:'2018-06-30',
             to:''
           }]
           // === datepicker settings  end === //
         }
       },
      components: {
        'date-picker': myDatepicker
      },
      methods:{
        showPopup(name){
          let t = this;
          t.ispop = true;
          t.popname = name;
        },
        popupBack(){
          let t = this;
          t.ispop = false;
          //t.goView('/bus/form'); t.back()
        },
        pickDate(item){
          let t = this;
          t.ispop = false;
          t.state.bus.date = item.key;
        }
      }
    }
</script>

<style scoped>

  .time-set{
    padding: 0.6rem 0;
    position: fixed;
    right: 0px;
    left: 0;
    background: #e8edf1;
    z-index: 9;
  }

  .list{
    padding-top: 1.5rem;
    background: white;
    margin: 1.6rem 1rem;
    position: relative;
    border-radius: 1rem;
  }

  .list-time{
    position: absolute;
    top: -16px;
    left: 0;
    right: 0;
  }

  .list-time > p{
    background: #5fc0ff;
    padding: 0.3rem 0.5rem;
    border-radius: 1rem;
    color: white;
    width: 50%;
    margin: auto;
    text-align: center;
  }

  .list>.aui-row{
    height: 40px;
  }

  .list-point::after {
    content: '';
    position: absolute;
    right: -5px;
    top: 8px;
    border: 1px solid #e4e5e9;
    background: #e4e5e9;
    color: white;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    font-size: 10px;
    text-align: center;
  }

  .list-point-red{
    font-size: 16px;
  }

  .list-point-red::after {
    content: '终';
    position: absolute;
    right: -10px;
    top: 5px;
    border: 1px solid red;
    background: #dd191b;
    color: white;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    font-size: 10px;
    text-align: center;
  }

  .list-point-blue{
    font-size: 16px;
  }

  .list-point-blue::after {
    content: '始';
    position: absolute;
    right: -10px;
    top: 5px;
    border: 1px solid #5fc0ff;
    background: #5fc0ff;
    color: white;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    font-size: 10px;
    text-align: center;
  }

  .list-line::before{
    content: '';
    position: absolute;
    width: 1px;
    height: 50px;
    background: #999;
    top: 25px;
    left: 1px;
  }
</style>
