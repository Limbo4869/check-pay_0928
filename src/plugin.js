import Vue from 'vue';
import request from 'superagent';
import storejs from 'store';
// import _ from 'lodash'; ///core

import {Confirm, Alert, Toast, Notify, Loading} from 'vue-ydui/dist/lib.px/dialog';
import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider';
import {Popup as YPopup} from 'vue-ydui/dist/lib.px/popup';
import {FlexBox, FlexBoxItem} from 'vue-ydui/dist/lib.rem/flexbox';
import {BackTop} from 'vue-ydui/dist/lib.rem/backtop';
import {NavBar, NavBarBackIcon, NavBarNextIcon} from 'vue-ydui/dist/lib.px/navbar';
import {Radio, RadioGroup} from 'vue-ydui/dist/lib.rem/radio';
import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button';
import {CellGroup, CellItem} from 'vue-ydui/dist/lib.rem/cell';
import {TimeLine, TimeLineItem} from 'vue-ydui/dist/lib.rem/timeline';
import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar';
import {Search} from 'vue-ydui/dist/lib.rem/search';
import {DateTime} from 'vue-ydui/dist/lib.rem/datetime';
import {Icons} from 'vue-ydui/dist/lib.rem/icons';

// import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.px/tabbar';
// import {RollNotice, RollNoticeItem} from 'vue-ydui/dist/lib.rem/rollnotice';
// import {PullRefresh} from 'vue-ydui/dist/lib.px/pullrefresh';
// import {CountDown} from 'vue-ydui/dist/lib.px/countdown';
// import {FlexBox, FlexBoxItem} from 'vue-ydui/dist/lib.px/flexbox';
// import {ActionSheet} from 'vue-ydui/dist/lib.rem/actionsheet';

import kit from './kit';
import cfg from './cfg';
import api from './api';

// import NPage from '@/components/NPage.vue';
// import NHeader from '@/components/NHeader.vue';
// import NCalendar from '@/components/NCalendar.vue';
// import NMap from '@/mods/dict/NMap.vue';

// import Psger from './mods/user/Psger.vue';

// Vue.use(Lazyload);
// Vue.use(InfiniteScroll);

// if (!window['Promise']) {}
//require('es6-promise').polyfill();

const state = {
  base: {
    ptrans: 'forward'
  },
  isOne: false,
  type: 0,
  startType: 0,
  endType: 0,
  bus: {
    date: kit.fmt(new Date()),
    dep: null,
    arr: null,
    roundtrip: false,
    sch: null,
    backsch: null,
    hisline: []
  },
  // boat: {
  //   date: null,  //kit.fmt(new Date(), 'yyyy-MM-dd'),
  //   line: null,
  //   dep: null,
  //   arr: null,
  //   sch: null,
  //   roundtrip: false,
  //   backsch: []
  // },
  user: null
  //,{no: null, name: null, phone: null, psger: []}
  //,test: { get: function () { return new Date(); }, set: function (v) { this.today = v; }}
};

let computed = {
  islogin (){
    return state.user ? true : false;
  },
  userlabel () {
    return state.user ? (state.user.name || '[未登录]') : '[未登录]';
  },
  deplabel(){
    return state.bus.dep ? state.bus.dep.stname : '';
  },
  arrlabel(){
    return state.bus.arr ? state.bus.arr.stname : '';
  },
  isalldep (){
    let ls = this.getLinkSource();
    if (!ls) {
      return true;
    }
    //其他公众号渠道链接
    if (kit.startWith(ls, 'wxpno_all_')) {
      return true;
    }
    let lsarr = ['', 'nyt', '_test', 'gxpt'];
    for (let item of lsarr) {
      if (ls == item) {
        return true;
      }
    }
  },
  lsrcstation(){
    let ss = [];

    /*ss.push({
     linksource: 'gxpt',
     prov: '广西',
     city: '全部',
     code: 'gxpt',
     name: '广西票通'
     });*/

    //微信城市服务
    ss.push({linksource: 'wxcs__szdh', prov: '广东', city: '深圳', code: 'B1K006', name: '深圳东湖汽车客运站'});

    //客运站
    ss.push({linksource: 'xndyg', prov: '广东', city: '梅州', code: 'M7K005', name: '兴宁市东岳宫汽车客运站'});

    ss.push({linksource: 'sgxfkyz', prov: '广东', city: '韶关', code: 'F7K001', name: '韶关新丰汽车客运站'});

    ss.push({linksource: 'jyhlkyz', prov: '广东', city: '揭阳', code: 'V4K001', name: '惠来汽车客运站'});

    ss.push({linksource: 'fsgmkyz', prov: '广东', city: '佛山', code: 'E4K014', name: '佛山高明汽车客运站'});

    ss.push({linksource: 'yunfu_kyz', prov: '广东', city: '云浮', code: 'W1K001', name: '云浮汽车客运站'});

    ss.push({linksource: 'mxxcsfkyz', prov: '广东', city: '梅州', code: 'M2K007', name: '梅县新城汽车客运站'});

    ss.push({linksource: 'huazhou_kyz', prov: '广东', city: '茂名', code: 'K5K003', name: '化州河西汽车客运站'});

    ss.push({linksource: 'sw_xy_kyz', prov: '广东', city: '汕尾', code: 'N1K014', name: '霞洋汽车客运站'});

    ss.push({linksource: 'yunfu_cx_kyz', prov: '广东', city: '云浮', code: 'W1K004', name: '云浮城西客运站'});

    ss.push({
      linksource: 'shantou_qs_kyz',
      prov: '广东',
      city: '汕头',
      code: 'D1K013',
      name: '汕头岐山客运站'
    });

    ss.push({
      linksource: 'maoming_dbzx_kyz',
      prov: '广东',
      city: '茂名',
      code: 'K4K021',
      name: '茂名电白中心客运站'
    });

    ss.push({
      linksource: 'shantou_hs_kyz',
      prov: '广东',
      city: '汕头',
      code: 'D1K002',
      name: '汕头礐石汽车客运站'
    });

    ss.push({linksource: 'gz_ch_kyz', prov: '广东', city: '广州', code: 'A3K009', name: '广州从化站'});

    ss.push({linksource: 'st_kyz', prov: '广东', city: '汕头', code: 'D1K001', name: '汕头客运总站'});

    ss.push({linksource: 'heyuan_llxc_kyz', prov: '广东', city: '龙川', code: 'P4K002', name: '龙川县老隆客运站(交通车站)'});
    ss.push({linksource: 'heyuan_llxc_kyz', prov: '广东', city: '龙川', code: 'P4K038', name: '龙川县新城客运站'});

    //集团
    ss.push({linksource: 'yf', prov: '广东', city: '深圳'});
    ss.push({linksource: 'yf', prov: '广东', city: '深圳', code: 'B1K001', name: '深圳(银湖)汽车客运站'});
    ss.push({linksource: 'yf', prov: '广东', city: '深圳', code: 'B2K001', name: '深圳市宝安汽车站'});
    ss.push({linksource: 'yf', prov: '广东', city: '深圳', code: 'B3K011', name: '深圳市龙岗长途汽车客运站'});
    ss.push({linksource: 'yf', prov: '广东', city: '深圳', code: 'B1K027', name: '深圳市坪山汽车客运总站'});
    ss.push({linksource: 'yf', prov: '广东', city: '深圳', code: 'B1K009', name: '深圳蛇口汽车客运站'});
    ss.push({linksource: 'yf', prov: '广东', city: '深圳', code: 'B2K013', name: '深圳市宝安西乡汽车站'});
    ss.push({linksource: 'yf', prov: '广东', city: '深圳', code: 'B2K012', name: '宝安沙井汽车客运站'});
    ss.push({linksource: 'yf', prov: '广东', city: '深圳', code: 'B3K010', name: '深圳市龙运发坪山长途客运站'});
    ss.push({linksource: 'yf', prov: '广东', city: '深圳', code: 'B3K009', name: '深圳市龙岗大鹏汽车客运站'});

    ss.push({linksource: 'yf_test', prov: '广东', city: '深圳'});
    ss.push({linksource: 'yf_test', prov: '广东', city: '深圳', code: 'B1K001', name: '深圳(银湖)汽车客运站'});
    ss.push({linksource: 'yf_test', prov: '广东', city: '深圳', code: 'B2K001', name: '深圳市宝安汽车站'});
    ss.push({linksource: 'yf_test', prov: '广东', city: '深圳', code: 'B3K011', name: '深圳市龙岗长途汽车客运站'});
    ss.push({linksource: 'yf_test', prov: '广东', city: '深圳', code: 'B1K027', name: '深圳市坪山汽车客运总站'});
    ss.push({linksource: 'yf_test', prov: '广东', city: '深圳', code: 'B1K009', name: '深圳蛇口汽车客运站'});
    ss.push({linksource: 'yf_test', prov: '广东', city: '深圳', code: 'B2K013', name: '深圳市宝安西乡汽车站'});
    ss.push({linksource: 'yf_test', prov: '广东', city: '深圳', code: 'B2K012', name: '宝安沙井汽车客运站'});
    ss.push({linksource: 'yf_test', prov: '广东', city: '深圳', code: 'B3K010', name: '深圳市龙运发坪山长途客运站'});
    ss.push({linksource: 'yf_test', prov: '广东', city: '深圳', code: 'B3K009', name: '深圳市龙岗大鹏汽车客运站'});

    //ss.push({linksource: 'swyy', prov: '广东', city: '汕尾'});
    ss.push({linksource: 'swyy', prov: '广东', city: '汕尾', code: 'N1K001', name: '汕尾汽车客运站'});
    ss.push({linksource: 'swyy', prov: '广东', city: '汕尾', code: 'N2K019', name: '海丰汽车客运总站'});
    ss.push({linksource: 'swyy', prov: '广东', city: '汕尾', code: 'N4K001', name: '陆丰汽车客运站'});
    ss.push({linksource: 'swyy', prov: '广东', city: '汕尾', code: 'N4K003', name: '陆丰碣石汽车站'});
    ss.push({linksource: 'swyy', prov: '广东', city: '汕尾', code: 'N3K013', name: '陆河县汽车客运站'});

    let rs = [];
    let lsrc = this.getLinkSource();
    for (let item of ss) {
      if (item.linksource == lsrc) {
        rs.push(item);
      }
    }
    return rs;
  }
};

const methods = {
  openLoading (mes){
    /*return Indicator.open({
     text: mes || '加载中...'
     //, spinnerType: 'fading-circle'
     });*/
    this.$dialog.loading.open(mes);
  },
  closeLoading (){
    this.$dialog.loading.close();
  },
  toast(mes, timeout, position, icon, callback){
    return this.$dialog.toast({mes, timeout: timeout || 1500, icon, callback});
  },
  alert(mes, title, cb, btntxt){
    /*confirm opts: [{ txt: String, color: Boolean or String, stay: Boolean, callback: Function }]*/
    //return this.$dialog.alert({mes: msg, callback: cb});
    return this.$dialog.confirm({
      title, mes, opts: [{
        txt: btntxt || '知道了',
        //color: true,
        color: '#0bb20c',
        callback: cb || function () {
        }
      }]
    });
  },
  notify(mes, timeout, callback){
    return this.$dialog.notify({mes, timeout: timeout || 1500, callback});
  },
  confirm (mes, title, opts){
    return this.$dialog.confirm({title, mes, opts});
  },
  forward(){
    let r = this.$router;
    r && r.go(1);
  },
  goView (p, q, ts){
    let r = this.$router;
    r && r.push({
      path: p,
      query: q
    });
  },
  back(){
    let r = this.$router;
    r && r.go(-1);
  },
  backView(p, q, ts){
    let r = this.$router;
    r && r.push({
      path: p,
      query: q
    });
  },
  getStorejs () {
    if (!storejs.enabled) {
      console.warn('Local storage is not supported by your browser.');
      //this.alert("当前浏览器环境未启用Store功能, 可能导致部分功能不正常.", '注意');
    }
    return storejs;
  },
  getLocal(key){
    let val = storejs.get(key);
    return val ? JSON.parse(val) : null;
  },
  setLocal(key, val){
    return storejs.set(key, JSON.stringify(val));
  },
  getApp(){
    return window[cfg.appname]; //使用cfg初始化app引用不生效!!!
  },
  appInvoke(method, para){
    //getSig toEnter toOrder
    let app = this.getApp();
    let amth = app ? app[method] : null;
    if (app && typeof amth == 'function') {
      return para ? amth(para) : amth();
    }
    return null;
  },
  getToken() {
    if (cfg.appmode) {
      return this.appInvoke('getToken');
    }
    return this.getUrlPara(cfg.tokenname) || this.getCookieVal(cfg.tokenname);
  },
  getUrlPara (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substring(1).match(reg);
    if (r != null) {
      return decodeURIComponent(r[2]);
    }
  },
  getCookieVal (name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
      if (arr.length < 2) {
        return null;
      }
      return decodeURIComponent(arr[2]) || '';
    }
  },
  setCookieVal(name, val){
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(val) + ";expires=" + exp.toGMTString();
  },
  checkLogin (bg) {
    let t = this;
    if (cfg.appmode) {
      var inst = t.getApp();
      if (inst && !inst.getToken()) {
        !bg && t.toast('请先登录!');
        return false;
      }
    }
    return true;
  },
  getLinkSource(){
    return this.getCookieVal('linksource');
  },
  getRequest (type = 'post', url, para) {
    return request[type](url)
      .withCredentials()
      //.on('error', handle)
      //.auth('tobi', 'learnboost')
      //.set('AuthToken', this.getCookieVal(cfg.kname.token))
      //.attach('image', 'path/to/tobi.png')
      .timeout(60000)
      .type('json')
      .set('Content-Type', 'application/json')
      .send(para);
  },
  callApi (url, para, cb, bg, loadingtip){
    let t = this;
    let requestCb = function (isok, data, msg, err, res, cb, code) {
      if (typeof cb == 'function') {
        let keep = cb(isok, data, msg, err, res, code);
        if (keep === false) {
          return;
        }
      }
      //未登录/会话过期,重新登录进入
      //if (code == '3') {}
      if (!isok) {
        t.toast(msg);
      }
    };

    let targetUrl = new RegExp('^(http|https).+').test(url) ? url : cfg.baseurl + url;
    if (!bg) {
      t.openLoading(loadingtip || '加载中..');
    }
    t.getRequest('post', targetUrl, para).end(function (err, res) {
      // alert(1);
      !bg && t.closeLoading();
      if (err || !res.ok || !res.body) {
        requestCb(false, null, '数据请求失败!', null, res, cb, -1);
        return;
      }
      let ret = res.body;
      let code = ret['errcode'];
      let isok = (code == '0');
      let msg = ret['errmsg'] || (isok ? '' : '操作失败!');
      let data = ret['data'];
      requestCb(isok, data, msg, null, res, cb, code);
    });
  },
  pay (type, para, cb){
    switch (type) {
      case 'wx':
        this.payByWx({
          appId: para.appId,
          timeStamp: para.timeStamp,
          nonceStr: para.nonceStr,
          'package': para['package'],
          signType: para.signType,
          paySign: para.paySign
        }, cb);
        break;
      default:
        this.toast('不支持此支付方式: ' + (type || '[未选择]'));
        break;
    }
  },
  payByWx(para, cb){
    // alert("支付参数： "+JSON.stringify(para));
    let onBridgeReady = () => WeixinJSBridge.invoke('getBrandWCPayRequest', para, cb);
    if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
      }
    } else {
      onBridgeReady();
    }
  },
  isSupportRetu(stno){
    // let ls = this.getLinkSource();
    // if (ls == '_test' || ls == 'nyt' || ls == '' || ls == 'yf_test' || ls == 'yf' || ls == 'gz_ch_kyz') {
    //   for (let sc of ['W5K021', 'B1K001', 'B2K001', 'B3K011', 'B1K027', 'B1K009', 'B2K013', 'B2K012', 'B3K010', 'B3K009', 'A3K009']) {
    //     if (sc == stno) {
    //       return true;
    //     }
    //   }
    // }

    // return false;
    return true;
  }
};

let plugin = {
  state,
  computed,
  methods,
  install(Vue, options){
    // http://cn.vuejs.org/v2/guide/plugins.html
    /*
     var MyComponent = Vue.extend({ template: '<div>Hello!</div>' });
     // 创建并挂载到 #app (会替换 #app)
     new MyComponent().$mount('#app');
     new MyComponent({ el: '#app' });
     // 或者，在文档之外渲染并且随后挂载
     var component = new MyComponent().$mount();
     document.getElementById('app').appendChild(component.$el);
     */

    //实例变量
    //Vue.prototype.$m = function (options) {}
    Vue.prototype.$dialog = {
      confirm: Confirm,
      alert: Alert,
      notify: Notify,
      toast: Toast,
      loading: Loading
    };

    //

    //mixin
    Vue.mixin({
      components: {
        [NavBar.name]: NavBar,
        [NavBarBackIcon.name]: NavBarBackIcon,
        [NavBarNextIcon.name]: NavBarNextIcon,
        [Radio.name]: Radio,
        [RadioGroup.name]: RadioGroup,
        [Button.name]: Button,
        [ButtonGroup.name]: ButtonGroup,
        //[PullRefresh.name]: PullRefresh,
        //[RollNotice.name]: RollNotice,
        //[RollNoticeItem.name]: RollNoticeItem,
        [BackTop.name]: BackTop,
        [YPopup.name]: YPopup,
        [FlexBox.name]: FlexBox,
        [FlexBoxItem.name]: FlexBoxItem,
        [Slider.name]: Slider,
        [SliderItem.name]: SliderItem,
        [CellGroup.name]: CellGroup,
        [CellItem.name]:CellItem,
        [TimeLine.name]:TimeLine,
        [TimeLineItem.name]:TimeLineItem,
        [TabBar.name]:TabBar,
        [TabBarItem.name]:TabBarItem,
        [Search.name]:Search,
        [DateTime.name]:DateTime,
        [Icons.name]:Icons,



        //
        // 'n-calendar': NCalendar,
        // 'n-psger': Psger
      },
      // directives: {},
      data () {
        return {
          kit,
          cfg,
          state,
          api
        }
      },
      computed: computed,
      // watch: { '$route'(to, from){ console.log('从' + from.path + '到' + to.path); }},
      methods: methods
    });
  }
};

export default plugin
