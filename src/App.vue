<template>
  <div id="app" v-cloak>
    <!--
    <div v-show="state.ajax_loading"
         style="position: absolute; width: 100%; z-index:9999">
      <div style="position:absolute; top:0; right:0; padding:5px; color:green">
        <mt-spinner :size="20"></mt-spinner>
      </div>
    </div>
    -->
    <transition name="trans-expand" mode="out-in">
       <!-- <keep-alive>

       </keep-alive> -->
       <router-view ref="$router.path"></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  //import 'weui/src/style/weui.less';
  export default {
    name: 'app',
    components: {},
    data (){
      return {}
    },
    methods: {}
    /*watch: {},
    mounted(){},
    beforeRouteEnter (to, from, next){ next(function (vm) { }); },
    beforeRouteLeave (to, from, next) { next(); }
    */
  ,beforeRouteUpdate (to, from, next) {
     console.log('beforeRouteUpdate: '+to.path)
     next()
  },
  }
</script>

<style lang="less">
  @import 'asset/main.less';

  #app {
    width: 100%;
    height: 100%;
    /*touch-callout:default;*/
  }
</style>
