<template>
  <div>
    <div name="head" v-if="showhead">
      <slot name="left">
        <div @click="$emit('back')" slot="left" style="padding: 8px; color: #fff;">
          <i class="iconfont icon-back"></i>
        </div>
      </slot>
      <slot name="center"></slot>
      <slot name="right"></slot>
    </div>

    <slot name="main">
      <!-- -->
    </slot>

    <slot name="footer" v-if="showhead">
    </slot>

    <!--<v-ons-page @deviceBackButton="test" class="">
      <v-ons-toolbar>
        <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
        </div>
        <div class="center">Title</div>
        <div class="right">
          <v-ons-toolbar-button @click="test">
            <v-ons-icon icon="md-menu"></v-ons-icon>
          </v-ons-toolbar-button>
        </div>
      </v-ons-toolbar>

      <div style="text-align: center; margin-top: 30px;">
        <p>
          <v-ons-input type="text" placeholder="Username" float></v-ons-input>
        </p>
        <p>
          <v-ons-input type="password" placeholder="Password" float></v-ons-input>
        </p>
        <p>
          <v-ons-button>Sign in</v-ons-button>
        </p>
      </div>

      <v-ons-icon
        icon="ion-edit"
        size="32px, material:24px">
      </v-ons-icon>

      <v-ons-button modifier="quiet">Quiet</v-ons-button>
      <v-ons-button modifier="light">Light</v-ons-button>
      <v-ons-button modifier="large">Large</v-ons-button>
      <v-ons-button modifier="cta">Call To Action</v-ons-button>
      <v-ons-button modifier="material">Material Design</v-ons-button>

      <v-ons-list>
        <v-ons-list-header>Header</v-ons-list-header>

        <v-ons-list-item>
          <div class="left">
            <v-ons-icon icon="md-face" class="list-item__icon"></v-ons-icon>
          </div>
          <div class="center">
            <span class="list-item__title">Title</span>
            <span class="list-item__subtitle">Subtitle</span>
          </div>
          <label class="right">
            <v-ons-switch></v-ons-switch>
          </label>
        </v-ons-list-item>

        <v-ons-list-item>
          <div style="width: 100%; height: 10px; background-color: #ddd;"></div>
        </v-ons-list-item>

        <v-ons-list-item>
          <div class="left">
            <v-ons-icon icon="md-face" class="list-item__icon"></v-ons-icon>
          </div>
          <div class="center">
            <span class="list-item__title">Title</span>
            <span class="list-item__subtitle">Subtitle</span>
          </div>
          <label class="right">
            <v-ons-switch></v-ons-switch>
          </label>
        </v-ons-list-item>
      </v-ons-list>

      <v-ons-input @input="test" type="text"></v-ons-input>
      <v-ons-input @change="test" type="checkbox"></v-ons-input>
      <v-ons-button @click="test"></v-ons-button>
      <v-ons-navigator @prepop="test"></v-ons-navigator>
    </v-ons-page>-->

    <!--<v-ons-navigator :page-stack="pageStack">-->
    <!--<component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>-->
    <!--</v-ons-navigator>-->
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        defaultValue: ''
      }
    },
    data () {
      return {
        loaded: false
      }
    },
    computed: {},
    methods: {
      pick (item){
        this.state.bus.dep_title = item;
        this.state.bus.dep_value = item;
        this.$router.push('/bus/form');
      }
    },
    created (){
    },
    mounted () {
      /*let vm = this;
       vm.showMsg = true;
       //console.log('showMsg:' + vm.showMsg);
       if (!vm.loaded) {
       //TODO
       //加载当前定位城市
       //加载热门, 历史
       vm.reloadDep();
       }*/

      /*let t = this;
       t.$ons.ready(function () {
       // Onsen UI is now initialized
       t.$ons.notification.alert('Welcome to Onsen UI!');
       // t.$ons.notification.confirm('Are you ready?'); // OK - Cancel buttons
       // t.$ons.notification.prompt('What is your name?'); // Text input
       });*/

      /*let t = this;
       var divGD = t.$ons.GestureDetector(document.querySelector('#app'));
       divGD.on('dragup dragdown', function (event) {
       console.log('drag');
       });*/
    }
  }
</script>