<template>
    <div class="nt-page fixheader">

      <yd-navbar fixed title="今日结算单">
        <div slot="left" @click="back" class="iconfont icon-back"></div>
        <!--<div slot="right" @click="showPopup('calendar')" class="iconfont icon-calendar"></div>-->
      </yd-navbar>
      <div class="">
        <div class="list" >
          <div class="list-time">
            <p>体育西路站</p>
          </div>
          <div class="aui-row">
            <div class="aui-col-xs-4 aui-text-center" style="color: #666666">
              线&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;路 :
            </div>
            <div class="aui-col-xs-8">
              体育西路站 - 华师站
            </div>
          </div>
          <div class="aui-row">
            <div class="aui-col-xs-4 aui-text-center" style="color: #666666">
              日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期 :
            </div>
            <div class="aui-col-xs-8">
              2018-07-06 11:00
            </div>
          </div>
          <div class="aui-row">
            <div class="aui-col-xs-4 aui-text-center" style="color: #666666">
              人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数 :
            </div>
            <div class="aui-col-xs-8">
              45
            </div>
          </div>
          <div class="aui-row">
            <div class="aui-col-xs-4 aui-text-center" style="color: #666666">
              车&nbsp;牌&nbsp;号 :
            </div>
            <div class="aui-col-xs-8">
              粤C10987
            </div>
          </div>
          <div class="aui-row">
            <div class="aui-col-xs-4 aui-text-center" style="color: #666666">
              班&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;次 :
            </div>
            <div class="aui-col-xs-8">
              AZ09044
            </div>
          </div>
          <div class="aui-row">
            <div class="aui-col-xs-4 aui-text-center" style="color: #666666">
              单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号 :
            </div>
            <div class="aui-col-xs-8">
              20180706110097863
            </div>
          </div>
          <div class="aui-row">
            <div class="aui-col-xs-4 aui-text-center" style="color: #666666">
              结算单价 :
            </div>
            <div class="aui-col-xs-8">
              ￥ 6
            </div>
          </div>
          <div class="aui-row">
            <div class="aui-col-xs-4 aui-text-center" style="color: #666666">
              结算总额 :
            </div>
            <div class="aui-col-xs-8">
              ￥ 46
            </div>
          </div>
          <div class="aui-text-right aui-margin-t-15 aui-margin-r-15">
            <a style="text-decoration: underline;font-size: 12px" href="">对结算单有疑问？请点击这里</a>
          </div>
        </div>

      </div>

    </div>
</template>

<script>
    export default {
       data(){
         return {
           detail: {}
         }
       }
    }
</script>

<style scoped>
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
  .list{
    padding-top: 1.5rem;
    background: white;
    margin: 1.6rem 0.5rem;
    position: relative;
    border-radius: 1rem;
    padding-bottom: 1.2rem;
  }

  .list > .aui-row{
    padding: 0.5rem 0;
    border-bottom: 1px solid #ececec;
  }

</style>
