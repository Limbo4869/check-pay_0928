<template>
  <div class="nt-page fixheader">
    <yd-navbar fixed :title="'购票须知'">
      <div @click="$emit('back')" slot="left" style="padding: 8px; color: #fff;">
        <i class="iconfont icon-back"></i>
      </div>
    </yd-navbar>

    <div style="width:100%;margin:0 auto;text-align:center;">
      <!--<img src="/addons/nanyuetong/template/img/comp.jpg"
           style="display: inline-block; broder:none; width: 100%;"/>-->
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
        next();
      }
    }
  }
</script>

<style scoped>
</style>
