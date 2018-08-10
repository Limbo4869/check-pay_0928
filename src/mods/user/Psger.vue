<template>
  <div class="nt-page fixheader">
    <yd-navbar fixed :title="title">
      <div slot="left" class="iconfont icon-back" @click="clickBack"></div>
      <div slot="right" @click="reloadPsg" class="iconfont icon-refresh"></div>
    </yd-navbar>


    <!-- 表单 -->
    <div v-if="!loaderr && !busy && edit && !editing"
         style="width: 100%; text-align: center; padding: .4rem 0;background-color: #fff;">
      <div @click="showAddForm"
           class="aui-btn aui-btn-success"
           style="padding: .2rem 1rem;">
        <i class="iconfont icon-add"></i>
        新增乘客信息
      </div>
    </div>
    <div v-if="edit && editing"
         style="padding: .2rem .5rem; color:#666;">
      {{form.id ? '修改乘客信息' : '新增乘客'}}
    </div>
    <div v-if="edit && editing"
         class="aui-list aui-list-noborder" style="background-color:#fff;">
      <label style="display:inline-block;width:100%;padding:.25rem .75rem .5rem .75rem;">
        姓名
        <input type="text"
               v-model="form.name"
               class="aui-text-info"
               placeholder="姓名"
               style="border-bottom: 1px solid #eee;"/>
      </label>
      <label style="display:inline-block;width:100%;padding:.25rem .75rem .5rem .75rem;">
        手机号
        <input
          type="text"
          v-model="form.mobile"
          placeholder="手机号"
          class="aui-text-info"
          style="border-bottom: 1px solid #eee;"/>
      </label>
      <label style="display:inline-block;width:100%;padding:.25rem .75rem .5rem .75rem;">
        证件类型
        <select v-model="form.certtype"
                class="aui-text-info"
                style="border-bottom: 1px solid #eee;">
          <option v-for="item in ctypes" :value="item" v-text="item"></option>
        </select>
      </label>
      <label style="display:inline-block;width:100%;padding:.25rem .75rem .5rem .75rem;">
        证件号
        <input
          type="text"
          v-model="form.certno"
          class="aui-text-info"
          placeholder="证件号"
          style="border-bottom: 1px solid #eee;"/>
      </label>
      <div class="aui-list-footer"
           ref="pageHrefUserForm"
           style="padding: .25rem 0;">
        <div class="aui-btn aui-btn-success" @click="savePsg"
             style="margin-left: .75rem; margin-right: 1.5rem;padding: .25rem 1.5rem;">
          保存
        </div>
        <div @click="cancelEdit"
             class="aui-btn"
             style="padding: .25rem 1.5rem;">
          取消
        </div>
      </div>
      <div style="height: 1.5rem;"></div>
    </div>

    <!-- 乘客 -->
    <div style="padding-top: .25rem; padding-left: .75rem; color:#666;font-size: .7rem;">
      乘客列表
    </div>
    <ul class="aui-list" style="">
      <li v-if="!busy && (!ret || ret.length==0)"
          class="aui-list-item"
          style="padding: .6rem; text-align:center;">
        <div v-if="loaderr">
          <div class="aui-btn aui-btn-info"
               @click="reloadPsg">
            重新加载
          </div>
        </div>
        <div v-else>
          没有可用的乘客记录.
        </div>
      </li>

      <li v-if="!loaderr"
          v-for="item in ret"
          @click="clickPsg(item)"
          class="aui-border-t">
        <div class="aui-list-item-inner"
             style="padding: .25rem .5rem .25rem .75rem; background-color:#fff;">
          <div v-if="pick && !routemode"
               class="aui-list-item-text"
               style="padding: 0 .25rem;">
              <span v-if="max==1">
                <span v-if="!ischecked(item)" class="aui-radio aui-text-default"></span>
                <span v-else class="aui-radio aui-checked aui-text-info"></span>
              </span>
              <span v-if="max>1">
                <span v-if="!ischecked(item)" class="aui-checkbox aui-text-default"></span>
                <span v-else class="aui-checkbox aui-checked aui-text-info"></span>
              </span>
          </div>
          <div class="useritem aui-text-info">
            <div><label>&emsp;&emsp;姓名</label> {{item.name}}</div>
            <div><label>&emsp;手机号</label> {{item.mobile}}</div>
            <div><label>证件类型</label> {{item.certtype}}</div>
            <div><label>&emsp;证件号</label> {{kit.decIDNo(item.certno)}}</div>
          </div>
          <div style="padding:0;">
            <div>
              <span @click="showEditForm(item,$event)"
                    class="aui-btn aui-btn-info"
                    style="padding: .125rem .25rem;">
                <i class="iconfont icon-edit" style="margin:0;"></i> 编辑
              </span>
            </div>
            <div style="padding-top:.25rem;">
              <span @click="delPsg(item,$event)"
                    class="aui-btn aui-btn-danger"
                    style="padding: .125rem .25rem;">
                <i class="iconfont icon-close" style="margin:0;"></i> 删除
              </span>
            </div>
          </div>
        </div>
      </li>

      <li v-if="!loaderr && !busy ">
        <div v-if="pick && !routemode && ret.length>0"
             style="background-color:#fff; text-align:center; width:100%; margin:0 auto;">
          <div @click="pickPsg"
               class="aui-btn aui-btn-info"
               style="margin: .5rem 0;">
            <i class="iconfont icon-succed"></i>
            确认选择
          </div>
        </div>
      </li>
    </ul>

    <div style="margin-top: .25rem;"></div>

  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '我的乘客信息'
      },
      edit: {
        type: Boolean,
        default: true
      },
      pick: {
        type: Boolean,
        default: false
      },
      max: {
        type: Number,
        default: 10
      }
    },
    data () {
      return {
        routemode: false,
        ctypes: ['身份证'], //, '其他', '护照', '港澳通行证',
        psgtypes: ['成人', '儿童'],
        ret: [],
        selected: [],
        busy: false,
        loaderr: false,
        editing: false,
        editrow: null,
        form: {
          id: null,
          name: '',
          mobile: '',
          certtype: '身份证', //1-'身份证',
          certno: ''
        }
      }
    },
    methods: {
      clickBack(){
        let t = this;
        if (t.editing) {
          t.cancelEdit();
          return;
        }
        if (t.routemode) {
          t.back();
          return;
        }
        t.$emit('back');
      },
      ischecked(item){
        for (let tmp of this.selected) {
          if (tmp.id === item.id) {
            return true;
          }
        }
        return false;
      },
      setSelected(newsels){
        let t = this;
        let rs = [];
        for (let tmp of newsels || []) {
          for (let item of t.ret) {
            if (tmp.id == item.id) {
              rs.push(item);
              break;
            }
          }
        }
        this.selected = rs;
      },
      reloadPsg (){
        let t = this;
        t.cancelEdit();
        t.busy = true;
        t.loaderr = false;
        t.callApi(t.api.Get('GET_PASSENGER_LIST'), {}, function (ok, data, msg) {
          t.busy = false;
          if (ok) {
            t.ret = data || [];
            //更新已选择
            if (!t.routemode && t.pick) {
              t.setSelected(t.selected);
            }
          } else {
            t.loaderr = true;
            //t.ret = [];
          }
        });
      },
      clickPsg(item){
        let t = this;
        if (t.routemode || !t.pick || !item) {
          return;
        }

        let issel = false;
        let exset = [];
        for (let tmp of t.selected) {
          if (tmp.id === item.id) {
            issel = true;
            continue;
          }
          exset.push(tmp);
        }
        if (issel) {
          t.selected = exset;
          return;
        }

        //t.selected.push(JSON.parse(JSON.stringify(item)));
        if (t.selected.length >= t.max) {
          t.selected.shift();
        }
        t.selected.push(item);
      },
      pickPsg (){
        let t = this;
        if (t.selected.length == 0) {
          t.toast('请选择记录!');
          return;
        }
        t.$emit('pickPsg', t.selected);
      },
      showAddForm(){
        let t = this;
        t.editing = true;
        t.editrow = null;
        t.form = {
          'id': null,
          'name': null,
          'mobile': null,
          'certtype': '身份证',
          'certno': null
        };
        //t.scrollBottom();
      },
      showEditForm(item, e){
        let t = this;
        t.kit.stopEventPro(e);
        if (t.editing && item.id === t.form.id) {
          t.cancelEdit();
          return;
        }

        t.editing = true;
        t.editrow = item;
        t.form = {
          'id': item.id,
          'name': item.name,
          'mobile': item.mobile,
          'certtype': item.certtype,
          'certno': item.certno
        };
        //t.scrollBottom();
      },
      scrollBottom(){
        this.$refs['pageHrefUserForm'].scrollIntoView();
      },
      delPsg (item, e){
        let t = this;
        t.kit.stopEventPro(e);
        t.confirm('确认删除此乘客记录?', '', function () {
          t.callApi(t.api.Get('DEL_PASSENGER'), {
            id: item.id
          }, function (ok, data, msg) {
            if (ok) {
              t.toast('删除成功!');
              t.reloadPsg();
            }
          });
        }, function () {
        });
      },
      cancelEdit(){
        let t = this;
        t.editing = false;
        t.editrow = null;
        t.form.id = null;
        t.form.name = null;
        t.form.mobile = null;
        t.form.certtype = null;
        t.form.certno = null;
      },
      savePsg (){
        let t = this;
        t.callApi(t.api.Get('SAVE_PASSENGER'), {
          id: t.form.id,
          name: t.form.name,
          mobile: t.form.mobile,
          certtype: t.form.certtype,
          certno: t.form.certno
        }, function (ok, data, msg) {
          if (ok) {
            t.toast('保存成功!');
            //更新
            if (t.form.id) {
              t.$emit('updatePsg', {
                id: t.form.id,
                name: t.form.name,
                mobile: t.form.mobile,
                certtype: t.form.certtype,
                certno: t.form.certno
              });
            }
            t.reloadPsg();
          }
        });
      }
    },
    //watch: { 'psgval' (){ alert(1); }},
    mounted(){
      this.reloadPsg();
    },
    beforeRouteEnter (to, from, next){
      //console.log(to.path+''+from.path);
      next(function (vm) {
        vm.routemode = true;
        vm.cancelEdit();
        vm.setSelected([]);
        //vm.title = '我的乘客信息'
      });
    },
    beforeRouteLeave (to, from, next) {
      let t = this;
      if (t.routemode && t.editing) {
        t.cancelEdit();
        next(false);
        return;
      }
      next();
    }
  }
</script>

<style scoped>
  .useritem {
    padding: .125rem;
  }

  .useritem label {
    display: inline-block;
    padding-right: 6px;
    text-align: right;
    color: #666;
  }
</style>