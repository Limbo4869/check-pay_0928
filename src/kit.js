
// import _ from 'lodash/core';
// import _ from 'lodash';

let kit = {
  //_,
  trim (str = ''){
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  startWith (str = '', re){
    return new RegExp('^' + re).test(str);
  },
  endWith (str = '', re){
    return new RegExp(re + '$').test(str);
  },
  isArray(obj){
    if (!obj) {
      return false;
    }
    if (Array.isArray) {
      return Array.isArray(obj);
    }
    return Object.prototype.toString.call(obj) === '[object Array]';
  },
  parseToDate  (ds = '') {
    return typeof ds == 'string' ? new Date(ds.replace(/-/g, "/")) : ds;
  },
  getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
  },
  getNowExpireMinutes(ds = ''){
    if(ds === '') return 0;
    let m = 0;
    if(typeof(ds) == 'string') {
      let t = this.parseToDate(ds)
      let d = t.getTime() - new Date().getTime()
      m = d > 0 ? Math.round(d / 1000 / 60) : 0
    }
    return m;
  },
  fmtToDate (st = '20180101'){
    if(st && st.length == 8){
      let year = st.substring(0,4)
      let data = st.substring(4,6)
      let time = st.substring(6,8)
      return (year + '-' + data + '-' + time)
    }else{
      return null;
    }
  },
  fmt (date, re = 'YYYY-MM-DD') {
    if (!date) {
      return;
    }
    if (typeof date == 'string') {
      date = this.parseToDate(date);
    }
    var str = re;
    var Week0 = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    var Week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    str = str.replace(/yyyy|YYYY/, date.getFullYear());
    str = str
      .replace(/yy|YY/, (date.getYear() % 100) > 9 ? (date
        .getYear() % 100).toString() : '0' +
      (date.getYear() % 100));

    str = str.replace(/MM/, date.getMonth() + 1 > 9 ? (date.getMonth() + 1)
      : '0' + (date.getMonth() + 1));
    str = str.replace(/M/g, date.getMonth());

    str = str.replace(/w/g, Week0[date.getDay()]);
    str = str.replace(/W/g, Week[date.getDay()]);

    str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate()
      .toString() : '0' + date.getDate());
    str = str.replace(/d|D/g, date.getDate());

    str = str.replace(/hh|HH/, date.getHours() > 9 ? date.getHours()
      .toString() : '0' + date.getHours());
    str = str.replace(/h|H/g, date.getHours());
    str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes()
      .toString() : '0' + date.getMinutes());
    str = str.replace(/m/g, date.getMinutes());

    str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date
      .getSeconds().toString() : '0' + date.getSeconds());
    str = str.replace(/s|S/g, date.getSeconds() + '');
    return str;
  },
  getDayDiff  (d1, d2) {
    //var a = typeof d1 == 'string' ? new Date(Kit.parseToDate(d1).getTime() + 1000) : d1;

    var a = this.parseToDate(typeof d1 == 'string' ? d1 : this.fmt(d1));
    var b = this.parseToDate(typeof d2 == 'string' ? d2 : this.fmt(d2));
    return Math.floor((a.getTime() - b.getTime()) / 24 / 3600 / 1000);
  },
  plusDay (d, dnum) {
    return new Date((this.parseToDate(this.fmt(d))).getTime() + dnum * 24 * 60 * 60 * 1000);
  },
  stopEventPro(e){
    e = e || window.event;
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
  },
  oper(a, b, op) {
    let _kit = this;

    let isInteger = function (obj) {
      return Math.floor(obj) === obj;
    }
    /*
     * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
     * @param floatNum {number} 小数
     * @return {object}
     *   {times:100, num: 314}
     */
    let toInteger = function (floatNum) {
      var ret = {times: 1, num: 0};
      if (isInteger(floatNum)) {
        ret.num = floatNum;
        return ret;
      }
      var strfi = floatNum + '';
      var dotPos = strfi.indexOf('.');
      var len = strfi.substr(dotPos + 1).length;
      var times = Math.pow(10, len);
      var intNum = parseInt(floatNum * times + 0.5, 10);
      ret.times = times;
      ret.num = intNum;
      return ret;
    };
    var o1 = toInteger(a);
    var o2 = toInteger(b);
    var n1 = o1.num;
    var n2 = o2.num;
    var t1 = o1.times;
    var t2 = o2.times;
    var max = t1 > t2 ? t1 : t2;
    var result = null;
    switch (op) {
      case '+':
        if (t1 === t2) { // 两个小数位数相同
          result = n1 + n2;
        } else if (t1 > t2) { // o1 小数位 大于 o2
          result = n1 + n2 * (t1 / t2);
        } else { // o1 小数位 小于 o2
          result = n1 * (t2 / t1) + n2;
        }
        return result / max;
      case '-':
        if (t1 === t2) {
          result = n1 - n2;
        } else if (t1 > t2) {
          result = n1 - n2 * (t1 / t2);
        } else {
          result = n1 * (t2 / t1) - n2;
        }
        return result / max;
      case '*':
        result = (n1 * n2) / (t1 * t2);
        return result;
      case '/':
        return result = function () {
          var r1 = n1 / n2;
          var r2 = t2 / t1;
          return _kit.oper(r1, r2, '*');
        }()
    }
  },
  toFixed(num, s) {
    var times = Math.pow(10, s);
    var des = num * times + 0.5;
    des = parseInt(des, 10) / times;
    return des + '';
  },
  getUuid(len = 16, radix = 16) {//uuid长度以及进制
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    return uuid.join('');
  },
  decIDNo(idno){
    let no = idno || '';
    if (no.length > 17) {
      return no.substring(0, 6) + '***' + no.substring(12);
    }
    if (no.length > 15) {
      return no.substring(0, 2) + '***' + no.substring(8);
    }
    if (no.length > 12) {
      return '***' + no.substring(6);
    }
    return no;
  },
  listenAppCache(){
    /*window.applicationCache.addEventListener("updateready", function () {
     console.log('updateready..')
     if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
     window.applicationCache.swapCache();
     if (confirm('A new version of this site is available. Load it?')) {
     window.location.reload();
     }
     } else {// Manifest didn't changed. Nothing new to server.    }
     }
     }, false);*/
  },
  prefetch(urls, afterDomLoad){
    //static/page/prefetch.html
  },
  traceErr (){
    window.onerror = function (message, source, line, col, error) {
      var img = new Image();
      img.src = config.traceurl + '?error=' + JSON.stringify({
          msg: message,
          src: source,
          lno: line,
          cno: col,
          err: error,
          t: new Date()
        });
    }
  }
};

//by provid plugin
// module.exports = kit;
export default kit;
