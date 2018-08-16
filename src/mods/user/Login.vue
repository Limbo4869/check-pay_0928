<template>
  <div class="nt-page in-bg" >
      <div class="nt-content-center" style="height: 40%;flex-direction: column">
       <div>
         <img :src="logo" alt="logo" style="width: 100px;">
       </div>
        <div>
          <h3><p class="aui-text-white" style="opacity: 0.7;letter-spacing: 0.2rem">站务系统</p></h3>
        </div>
      </div>
      <div class="input_01" style="width: 85%;margin: 0.1rem auto;">
        <yd-cell-group>
          <yd-cell-item style="margin-bottom: 15px">
            <span slot="left" class="aui-font-size-14 aui-text-white"><i class="iconfont icon-myline" style="opacity: 0.7"></i></span>
            <input slot="right" type="text" placeholder="请输入账号" class="aui-font-size-14" style="padding-left: 0.5rem;opacity: 0.7;letter-spacing:0.1rem ">
          </yd-cell-item>
          <yd-cell-item>
            <span slot="left" class="aui-font-size-14 aui-text-white"><i class="iconfont icon-shopping" style="opacity: 0.7"></i></span>
            <input slot="right" type="password" placeholder="请输入密码" class="aui-font-size-14" style="padding-left: 0.5rem;opacity: 0.7;letter-spacing:0.1rem ">
          </yd-cell-item>
        </yd-cell-group>
      </div>
      <div style="margin: 1rem 1rem">
        <div class="aui-btn aui-btn-info" style="width: 100%;padding: 0.4rem 0;letter-spacing: 0.5rem;font-size: 0.8rem" @click="goView('/station/station')">登录</div>
      </div>
      <div>
         <p class="aui-text-white" @click="goView('/user/regist')" style="letter-spacing: 0.1rem;text-decoration: underline;font-size: 0.2rem;opacity: 0.5;float: right;margin-right: 1rem">
           没有帐号？马上注册
         </p>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo: 'static/logo.png'
    }
  },
  computed: {

  },
  methods: {
      go () {
        this.$router.push({ path:'regist'} );
      }
  },
  mounted() {

  },
  // beforeRouteEnter(to, from, next) {
  //   next(function(vm) {
  //     let t = vm
  //
  //   })
  // }
}
</script>
<style type="text/css" scoped>
  .input_01 .yd-cell-item{
    padding-left:0!important;
  }
  .in-bg{
    background: -webkit-linear-gradient(left top, #68c8b7 , #3577cd); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom right, #68c8b7, #3577cd); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom right, #68c8b7, #3577cd); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom right, #68c8b7 , #3577cd); /* 标准的语法 */
  }

  ::-webkit-input-placeholder { /* WebKit browsers */
    color: #ececec;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #ececec;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #ececec;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #ececec;
  }
</style>
