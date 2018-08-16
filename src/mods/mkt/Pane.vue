<template>
  <div class="nt-page fixheader">
    <yd-navbar fixed :title="'更多服务'">
      <div slot="left" class="iconfont icon-back" @click="$router.push('/')"></div>
    </yd-navbar>

    <section class="aui-grid">
      <div class="aui-row">
        <div class="aui-col-xs-4 aui-border-b" @click="clickItem('kf')">
          <i class="iconfont icon-phone"></i>
          <div class="aui-grid-label">客服信息</div>
        </div>
        <div class="aui-col-xs-4 aui-border-b aui-border-l" @click="clickItem('station')">
          <i class="iconfont icon-selectcity"></i>
          <div class="aui-grid-label">车站查询</div>
        </div>
        <div class="aui-col-xs-4 aui-border-l">
          <i class="iconfont icon-">&emsp;</i>
          <div class="aui-grid-label">&emsp;</div>
        </div>
      </div>
      <!--<div class="aui-row">
        <div class="aui-col-xs-4 aui-border-b">
          <i class="iconfont icon-home"></i>
          <div class="aui-grid-label">船票</div>
        </div>
        <div class="aui-col-xs-4 aui-border-l aui-border-b">
          <i class="iconfont icon-huodong"></i>
          <div class="aui-grid-label">定制班车</div>
        </div>
        <div class="aui-col-xs-4 aui-border-l aui-border-b">
          <i class="iconfont icon-date"></i>
          <div class="aui-grid-label">机场专线</div>
        </div>
        <div class="aui-col-xs-4 aui-border-b">
          <i class="iconfont icon-home"></i>
          <div class="aui-grid-label">校园出行</div>
        </div>
        <div class="aui-col-xs-4 aui-border-l aui-border-b">
          <i class="iconfont icon-home"></i>
          <div class="aui-grid-label">校园出行</div>
        </div>
        <div class="aui-col-xs-4 aui-border-l aui-border-b">
          <i class="iconfont icon-home"></i>
          <div class="aui-grid-label">校园出行</div>
        </div>
      </div>-->
    </section>

  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        //
      }
    },
    methods: {
      clickItem(item){
        switch (item) {
          case 'kf':
            window.location.href = 'http://www.gdnyt.com/uploads/CustomerService.html';
            break;
          case 'station':
            window.location.href = 'http://www.gdnyt.cn/app/index.php?i=3&j=3&c=entry&ch=003&pages=stationsquery&m=stationsquery&weid=3&do=pages&wxref=mp.weixin.qq.com#wechat_redirect';
            break;
          default:
            break;
        }
      }
    },
    beforeRouteEnter(from, to, next){
      next();
    }
  }
</script>

<style scoped>
</style>
