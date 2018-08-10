// wx or app
let ENV_MODE = 'app';

let notoken_path = [
  'SEND_SMS',
  'REGISTE',
  'LOGIN',
  'QUERY_CITY_STATION',
  'QUERY_ARR',
  'SEARCH_DEP',
  'SEARCH_ARR',
  'QUERY_INS'
]
// app api
let app_api = {
  MODE: 'app',
  WX_PAY_TYPE_BY_: 'W01',
  ZFB_PAY_TYPE_BY_: 'A03',
  LoginHelp: null,
  XPay: null,
  WeChat: null,
  AliPay:null,
  Sign: '',
  timer: null,
  getSignTimer: function(){
    this.timer = setInterval(function(){
      app_api.LoginHelp.getSignStr(function (e) {
        // console.dir("UrlParmas:" + e);
        app_api.setValue('Sign',e);
      });
    }, 10000);
  },
  clearSignTimer: function () {
    clearInterval(this.timer);
  },
  setValue: function (key,value) {
    this[key] = value;
  },
  getValue: function (key) {
    return this[key];
  },
  Get: function (key) {
    let token = this.TOKEN();
    let str = null;
    if (notoken_path.indexOf(key) > -1) {
      str = this[key] + '?' + this.getValue('Sign');
    }else{
      str = this[key] + '?token=' + token + '&' + this.getValue("Sign");
    }
    return str;
  },
  TOKEN: function () {
    return this['_token'] ? this['_token'] : null;
  },
  SEND_SMS: '/alluser/SendSms',
  REGISTE: '/alluser/register',
  LOGIN: '/alluser/login',
  LOGIN_AUTH: '/alluser/loginauth',
  QUERY_CITY_STATION: '/queryBus/queryCityStation',
  QUERY_ARR: '/queryBus/queryArr',
  SEARCH_DEP: '/queryBus/searchDep',
  SEARCH_ARR: '/queryBus/searchArr',
  QUERY_SCH: '/queryBus/querySch',
  QUERY_INS: '/bus/queryIns',
  GET_PASSENGER_LIST: '/alluser/getPassengerList',
  DEL_PASSENGER: '/alluser/delPassenger',
  SAVE_PASSENGER: '/alluser/savePassenger',
  TK_LOCK: '/queryBus/tkLock',
  PAY_QUERY: 'queryBus/payquery',
  AGAIN_PAY: '/queryBus/againPay',
  UN_LOCK: '/queryBus/unlock',
  TK_RETU: '/queryBus/tkRetu',
  QUERY_LOCK: '/queryOrder/queryLock',
  QUERY_ORDER: '/queryOrder/queryOrder',
  DELETE_ORDER: '/queryOrder/deleteOrder',
  QUERY_ORDER_DETAIL: '/queryOrder/queryOrderDetail',
  QUERY_ALL_ORDER: '/queryOrder/queryAllOrder'
};

let api = ENV_MODE === 'wx' ? wx_api : app_api;

export default api;
