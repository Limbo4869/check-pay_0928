<template>
  <div class="nt-page">
    <yd-navbar fixed :title="'消息详情'">
      <a slot="left" class="aui-pull-left aui-btn" @click="$router.back()">
        <i class="iconfont icon-xiangzuo1"></i>
      </a>
    </yd-navbar>

    <div class="nt-page psn">
    </div>

  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        msgid: ''
      }
    },
    methods: {
      beforeRouteEnter(from, to, next){
        console.log(to.query);
        next();
      }
    }
  }
</script>

<style scoped>
  .msg-pane {
  }
</style>
