let ua = navigator.userAgent;

let devmode = process.env.NODE_ENV == 'development' ? true : false;

//const localMode = window.location.href.startWith('file://');
let appname = 'NYTapp';
let appmode = !!window[appname];
let mobile = ua.indexOf('Android') > -1 || !!ua.match(/AppleWebKit.*Mobile.*/);
let tokenname = '_token';

let cfg = {
  devmode,
  appname,
  appmode,
  tokenname,
  mobile,
  wx: ua.indexOf('MicroMessenger') !== -1, //&& window['WeixinJSBridge'],
  qq: ua.indexOf('QQBrowser') !== -1,
  traceurl: 'http://localhost/collect-web/page-error',
  userapibase: '//183.6.161.195:9000',
  //baseurl: devmode ? 'http://mobile.gdnyt.cn' : 'http://mobile.gdnyt.cn', //汽车票,
  //baseurl: devmode ? location.protocol + '//' + location.host.split(':')[0] + ':8081' : 'http://mobile.gdnyt.cn',
  baseurl: devmode ?  'http://localhost:8080' : 'http://wap.bus6688.com',
  // baseurl: devmode ?  'http://localhost:8080' : 'http://nytlrj.hk1.mofasuidao.cn',
  msg: {
    idx_notice: [],
    idx_swipe: [],
    order_ad: null,
    orderit_ad: null
  },
  // baseurl: devmode ?  'http://localhost:8080' : 'http://47.96.189.8:8000',
  //baseurl: devmode ? 'http://sasasa.sssvip4.natapp.cc' : 'http://mobile.gdnyt.cn',
  //baseurl: devmode ? 'http://182.61.28.75:88' : 'http://182.61.28.75:88'
  ext: {}
};

//入口参数
// linksource: '', token: '', channel: '', scope: '', orgno: '',
// let global = window['_GLOBAL'] || {};

// let para = {};
// for (let item of (location.hash || '').split('[^&]')) {
//   let arr = item.split('=');
//   if (!arr || arr.length != 2) {
//     continue;
//   }
//   para[arr[0]] = arr[1];
// }

export default cfg;
