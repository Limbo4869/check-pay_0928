// import cfg from './cfg';
import plugin from './plugin';
import api from './api';
const StationPane = r => require.ensure([], () => r(require('@/mods/station/Pane')),'station');
const StationStation = r => require.ensure([],() => r(require('@/mods/station/Station')),'station');
const StationShift = r => require.ensure([],() => r(require('@/mods/station/Shift_situation')),'station');
const StationEffiy = r => require.ensure([],() => r(require('@/mods/station/Shift_effiy')),'station');
// const StationLater = r => require.ensure([],() => r(require('@/mods/station/later')),'station');
const StationWN = r => require.ensure([],() => r(require('@/mods/station/waitingNub')),'station');

let routes = [
  {
    path: '/station',
    component: StationPane,
    meta: {
      title: '站务'
    },
    beforeEnter: (to, from, next) => {
      next(vm => {});
    },
    children: [
      {
        path: 'Station',
        component: StationStation
      },
      {
        path: 'Shift_situation',
        component: StationShift
      },
      {
        path: 'Shift_effiy',
        component: StationEffiy
      },
      {
        path: 'WaitingNub',
        component: StationWN
      },
    ]
  },



  // {
  //   path: '/main',
  //   component: MainPane,
  //   meta: {
  //     title: '首页'
  //   },
  //   beforeEnter: (to, from, next) => {
  //     next(vm => {});
  //   },
  //   children: [
  //
  //     {
  //       path: 'ticket',
  //       component: MainTicket,
  //     },
  //     {
  //       path: 'user',
  //       component: MainUser,
  //     },
  //
  //
  //   ]
  // },

  // {
  //   path: '/user',
  //   component: UserPane,
  //   // meta: {
  //   //   title: '我的'
  //   // },
  //   beforeEnter: (to, from, next) => {
  //     next(vm => {});
  //   },
  //   children: [{
  //       path: 'info',
  //       component: UserProfile,
  //       meta: {
  //         title: '用户信息'
  //       }
  //     },
  //     {
  //       path: 'psger',
  //       component: UserPsger,
  //       meta: {
  //         title: '乘客信息'
  //       }
  //     },
  //     {
  //       path: 'login',
  //       component: UserLogin,
  //       meta: {
  //         title: '登录'
  //       }
  //     },
  //     {
  //       path: 'regist',
  //       component: UserRegist,
  //       meta: {
  //         title: '注册'
  //       }
  //     }
  //
  //   ]
  // },
  // {
  //   path: '/mkt',
  //   meta: {
  //     title: '更多'
  //   },
  //   component: MktPane,
  //   beforeEnter: (to, from, next) => {
  //     next(vm => {});
  //   }
  // },
  //重定向
  {
    path: '*',
    // redirect: '/user/login'
    redirect: '/station/Shift_situation'

  }
];

let beforeEach = (to, from, next) => {

  // if (api.MODE === 'app' && !plugin.state.user && to.path !== '/user/login' && to.path !== '/bus/form') {
  //
  //   console.log("app 未登录")
  //
  //   next('/user/login');
  //   return;
  // }

  let goNext = (toPath) => {
    if (to.meta && to.meta.title) {
      document.title = to.meta.title;
    }
    toPath ? next(toPath) : next();
  };

  goNext();
};

let afterEach = route => {
  // mixin.methods.getLoading().close();
  // clear thoast / msg
  console.log(route);
};

export default routes;
export {
  beforeEach,
  afterEach
};
