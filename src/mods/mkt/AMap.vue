<template>
  <div class="nt-page" style="padding: 45px 0 10px 0;">
    <yd-navbar fixed :title="'购票须知'">
      <div @click="$emit('back')" slot="left" style="padding: 8px; color: #fff;">
        <i class="iconfont icon-xiangzuo1"></i>
      </div>
    </yd-navbar>

  </div>
</template>

<script>
  //https://elemefe.github.io/vue-amap/#/docs/map
  // import AMap from 'vue-amap';
  // Vue.use(AMap);
  // AMap.initAMapApiLoader({
  //   key: 'your amap key',
  //   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
  // });

  // <div class="amap-wrapper">
  //   <el-amap :vid="'amap-vue'"></el-amap>
  // </div>

  // import { lazyAMapApiLoaderInstance } from 'vue-amap';
  // export default {
  //   mounted() {
  //     lazyAMapApiLoaderInstance.load().then(() => {
  //       this.map = new AMap.Map('amap-cointainer', {center: new AMap.LngLat(121.59996, 31.197646)});
  //     });
  //   }
  // };

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
  .termcontnet {
  }

  .termcontnet > li {
    padding: .2rem;
  }
</style>
