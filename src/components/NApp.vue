<template>
  <div class="page" v-cloak>
    <!--<div v-show="state.ajax_loading"
         style="position: absolute; width: 100%; z-index:9999">
      <div
        style="position:absolute; top:0; right:0; padding:5px; color:green">
        <mt-spinner :size="20"></mt-spinner>
      </div>
    </div>-->

    <transition name="trans-expand" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data (){
      return {}
    },
    computed: {},
    methods: {},
    mounted (){
      let lb = document.getElementById('_gLoading');
      if (lb && lb.style) {
        lb.style.display = 'none';
      }
    }
  }
</script>

<style lang="less" scoped>
  /*@import 'asset/third/aui.css';
  @import 'asset/third/mint-ui-skin.less';
  @import 'asset/font/iconfont.css';
  @import 'asset/reset.less';
  @import 'asset/func.less';
  @import 'asset/vars.less';*/

  .trans-expand {
    transition: all .25s ease;
  }

  .trans-expand-enter, .trans-expand-leave-active{
    height: 0;
    opacity: 0;
  }

  body, a {
    color: #2c3e50;
  }

  body {
    background-color: #efefef;
  }

  .page {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
