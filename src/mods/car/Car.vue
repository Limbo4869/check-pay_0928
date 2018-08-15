<template>
  <div class="station">
    <div class="in-bg"><yd-navbar title="车方业务"></yd-navbar></div>
    <div>
      <yd-slider autoplay="3000">
        <yd-slider-item>
          <a href="#">
            <!--<img :src="carousel_1">-->
            <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="#">
            <!--<img :src="carousel_2">-->
            <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="#">
            <!--<img :src="carousel_3">-->
            <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
          </a>
        </yd-slider-item>
      </yd-slider>
    </div>

    <div>
      <section class="aui-grid aui-margin-b-15">
        <div class="aui-row">
          <div class="aui-col-xs-4" @click="goView('/car/reservedSeat_ticket')">
            <div style="margin-top: 5px;margin-bottom: 5px"><i class="iconfont icon-order " style="opacity: 0.6"></i></div>
            <div class="aui-grid-label">留位出票</div>
          </div>
          <div class="aui-col-xs-4" @click="goView('/car/reservedSeat_situation')">
            <div style="margin-top: 5px;margin-bottom: 5px"><i class="iconfont icon-detail " style="opacity: 0.6"></i></div>
            <div class="aui-grid-label">留位情况</div>
          </div>
          <div class="aui-col-xs-4" @click="goView('/car/reservedSeat_code')">
            <div style="margin-top: 5px;margin-bottom: 5px"><i class="iconfont icon-scan " style="opacity: 0.6"></i></div>
            <div class="aui-grid-label">出票二维码</div>
          </div>
          <div class="aui-col-xs-4" @click="goView('/car/TimeoutTicket')">
            <div style="margin-top: 5px;margin-bottom: 5px"><i class="iconfont icon-time1 " style="opacity: 0.6"></i></div>
            <div class="aui-grid-label">超时出票</div>
          </div>
          <div class="aui-col-xs-4">
            <div style="margin-top: 5px;margin-bottom: 5px"><i class="iconfont icon-category1" style="opacity: 0.6"></i></div>
            <div class="aui-grid-label">报表查询</div>
          </div>
          <div class="aui-col-xs-4">
            <div style="margin-top: 5px;margin-bottom: 5px"><i class="iconfont icon-fullscreen " style="opacity: 0.6"></i></div>
            <div class="aui-grid-label">车票查询</div>
          </div>
          <div class="aui-col-xs-4">
            <div style="margin-top: 5px;margin-bottom: 5px"><i class="iconfont icon-edit " style="opacity: 0.6"></i></div>
            <div class="aui-grid-label">验票</div>
          </div>
        </div>
      </section>
    </div>



    <footer class="aui-bar aui-bar-tab" id="footer">
      <div class="aui-bar-tab-item " tapmode @click="goView('/station/station')">
        <!--<i class="aui-iconfont aui-icon-home"></i>-->
        <div><i class="iconfont icon-homeline "></i></div>
        <div class="aui-bar-tab-label">站 务</div>
      </div>

      <div class="aui-bar-tab-item" tapmode @click="goView('/ticket/ticket')">
        <!--<i class="aui-iconfont aui-icon-star"></i>-->
        <div><i class="iconfont icon-ticket "></i></div>
        <div class="aui-bar-tab-label">票 务</div>
      </div>

      <div class="aui-bar-tab-item aui-active" tapmode @click="goView('/car/car')">
        <!--<i class="aui-iconfont aui-icon-cart"></i>-->
        <div><i class="iconfont icon-bus "></i></div>
        <div class="aui-bar-tab-label">车 方</div>
      </div>

      <div class="aui-bar-tab-item" tapmode @click="goView('/usermng/user')">
        <!--<i class="aui-iconfont aui-icon-my"></i>-->
        <div><i class="iconfont icon-myline "></i></div>
        <div class="aui-bar-tab-label">用 户</div>
      </div>
    </footer>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        carousel_1: 'static/1.jpg',
        carousel_2: 'static/2.jpg',
        carousel_3: 'static/3.jpg',
      }
    },
  }

</script>

