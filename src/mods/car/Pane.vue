<template>
  <div class="busapp" style="width:100%;height:100%;">
    <transition>
      <keep-alive>
        <router-view ref="$router.path"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>


<script>

  // name="trans-expand" mode="out-in"
  export default {
    data () {
      return {}
    },
    methods: {},
    // beforeRouteEnter(to, from, next){
    //   next();
    // },
    mounted () {
      let t = this;

    }
  }
</script>
