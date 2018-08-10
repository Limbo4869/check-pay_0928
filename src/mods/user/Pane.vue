<template>
  <div class="nt-page">

   <!-- <yd-navbar fixed :title="'个人中心'">
      <div @click="back" slot="left" class="mintui mintui-back"></div>
    </yd-navbar> -->
    <keep-alive>
        <router-view ref="$router.path"></router-view>
      </keep-alive>

    <!-- <div>
      <div class="aui-list-item-inner">
        <div class="aui-list-item-label">
          帐号
        </div>
        <div class="aui-list-item-input">
          <input type="text" placeholder="登录帐号" v-model="no" readonly>
        </div>
      </div>
    </div>
    <div class="aui-list-item">
      <div class="aui-list-item-inner">
        <div class="aui-list-item-label">
          姓名
        </div>
        <div class="aui-list-item-input">
          <input type="text" placeholder="姓名" v-model="name">
        </div>
      </div>
    </div> -->

    <!-- <ul class="aui-list aui-form-list">
      <li class="aui-list-item aui-list-item-arrow" @click="$router.push('/user/psger')">
        <div class="aui-list-item-inner">
          乘客信息
        </div>
      </li>

      <li class="aui-list-item aui-list-item-arrow" @click="$router.push('/msg')">
        <div class="aui-list-item-inner">
          通知信息
        </div>
      </li>

      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            帐号
          </div>
          <div class="aui-list-item-input">
            <input type="text" placeholder="登录帐号" v-model="no" readonly>
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            姓名
          </div>
          <div class="aui-list-item-input">
            <input type="text" placeholder="姓名" v-model="name">
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            原密码
          </div>
          <div class="aui-list-item-input">
            <input type="password" placeholder="不修改请留空" v-model="pwd">
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            新密码
          </div>
          <div class="aui-list-item-input">
            <input type="password" placeholder="不修改请留空" v-model="newpwd">
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            新密码确认
          </div>
          <div class="aui-list-item-input">
            <input type="password" placeholder="不修改请留空" v-model="newpwd2">
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label"></div>
          <div class="aui-list-item-input">
            <div class="aui-btn aui-btn-info aui-btn-sm" @click="updateInfo">更新信息</div>
            <div class="aui-btn aui-btn-danger aui-btn-sm" @click="logout"
                 style="margin-left: 30px">退出登录
            </div>
          </div>
        </div>
      </li>

    </ul> -->
  </div>
</template>
<script>
  export default {
    data () {
      return {
        no: '',
        name: '',
        pwd: '',
        newpwd: '',
        newpwd2: ''
      }
    },
    methods: {
      updateInfo(){
        let t = this;
        t.msgBox().confirm('确认修改??').then(function () {
          t.userApi.updateInfo({
            no: t.no,
            name: t.name,
            pwd: t.pwd,
            newpwd: t.newpwd,
            newpwd2: t.newpwd2
          }).end(function (err, res) {
            if (err || !res.ok) {
              t.toast('网络连接失败!');
              return;
            }
            let json = res.body;
            if (json['code'] != '0') {
              t.toast('修改失败!' + (json['msg'] || ''));
              return;
            }
            t.pwd = '';
            t.newpwd = '';
            t.newpwd2 = '';
            t.toast('修改成功!');
            //t.state.user.info = res.body['data'];
          });
        }, function () {
        });
      },
      logout(){
        let t = this;
        t.msgBox().confirm('确认退出登录?').then(function () {
          t.$router.push('/bus/form');
          return;

          /*t.callApi('/logout', {}, function (ok, data, msg) {
           if (ok) {
           t.state.user = {auth: false, info: null};
           }
           });*/
        });
      }
    },
    beforeRouteEnter (to, from, next){
    //  console.log(from);
    //  console.log(to);

      next(function (vm) {


        // //加载用户信息, 是否需要重新登录?
        // // vm.updateUserState(vm);
        // let user = vm.state.user;
        // if (user) {
        //   vm.no = user.no;
        //   vm.name = user.name;
        //   vm.pwd = '';
        //   vm.newpwd = '';
        //   vm.newpwd2 = '';
        // }
      });
    }
  }
</script>
