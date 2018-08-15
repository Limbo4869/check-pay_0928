// import cfg from './cfg';
import plugin from './plugin';
import api from './api';

//bus
const BusPane = r => require.ensure([], () => r(require('@/mods/bus/Pane')), 'bus');
const BusStart = r => require.ensure([], () => r(require('@/mods/bus/Start')), 'bus');
const BusHistory = r => require.ensure([], () => r(require('@/mods/bus/History')), 'bus');
const BusHistoryDetail = r => require.ensure([], () => r(require('@/mods/bus/HistoryDetail')), 'bus');


const StationPane = r => require.ensure([], () => r(require('@/mods/station/Pane')),'station');
const StationStation = r => require.ensure([],() => r(require('@/mods/station/Station')),'station');
const StationShift = r => require.ensure([],() => r(require('@/mods/station/Shift_situation')),'station');
const StationEffiy = r => require.ensure([],() => r(require('@/mods/station/Shift_effiy')),'station');
const StationLater = r => require.ensure([],() => r(require('@/mods/station/later')),'station');
const StationWN = r => require.ensure([],() => r(require('@/mods/station/waitingNub')),'station');
const StationLaterS = r => require.ensure([],() => r(require('@/mods/station/later_situation')),'station');
const StationCSRflow = r => require.ensure([],() => r(require('@/mods/station/CSRflow')),'station');

const CarPane = r => require.ensure([], () => r(require('@/mods/car/Pane')),'car');
const CarCar = r => require.ensure([], () => r(require('@/mods/car/Car')),'car');
const CarreservedSeat_ticket = r => require.ensure([], () => r(require('@/mods/car/reservedSeat_ticket')),'car');
const CarreservedSeat_situation = r => require.ensure([], () => r(require('@/mods/car/reservedSeat_situation')),'car');
const CarreservedSeat_code = r => require.ensure([], () => r(require('@/mods/car/reservedSeat_code')),'car');
const CarTimeoutTicket = r => require.ensure([], () => r(require('@/mods/car/TimeoutTicket')),'car');



const TicketPane = r => require.ensure([], () => r(require('@/mods/ticket/Pane')),'ticket');
const TicketTicket = r => require.ensure([], () => r(require('@/mods/ticket/Ticket')),'ticket');
const TicketTicket_info = r => require.ensure([], () => r(require('@/mods/ticket/Ticket_info')),'ticket');
const TicketConductor = r => require.ensure([], () => r(require('@/mods/ticket/conductor')),'ticket');
const TicketReserved = r => require.ensure([], () => r(require('@/mods/ticket/reservedSeat_sell')),'ticket');

const UsermngPane = r => require.ensure([], () => r(require('@/mods/usermng/Pane')),'usermng');
const UsermngUsermng = r => require.ensure([], () => r(require('@/mods/usermng/User')),'usermng');


const UserPane = r => require.ensure([], () => r(require('@/mods/user/Pane')), 'sell');
const UserLogin = r => require.ensure([], () => r(require('@/mods/user/Login')), 'sell');
const UserPsger = r => require.ensure([], () => r(require('@/mods/user/Psger')), 'sell');
const UserProfile = r => require.ensure([], () => r(require('@/mods/user/Profile')), 'sell');
const UserRegist = r => require.ensure([], () => r(require('@/mods/user/Regist')), 'sell');

// const Term = r => require.ensure([], () => r(require('@/mods/info/Term')), 'sell');
const MktPane = r => require.ensure([], () => r(require('@/mods/mkt/Pane')), 'sell');

// const AdminPane = r => require.ensure([], () => r(require('@/mods/admin/Pane')), 'admin');
// const AdminPane = r => require.ensure([], () => r(require('@/mods/admin/AdminPane')), 'admin');

let routes = [
  //{path: '/', alias: 'home', component: Index},

  {
    path: '/bus',
    component: BusPane,
    meta: {
      title: '购票'
    },
    beforeEnter: (to, from, next) => {
      next(vm => {});
    },
    children: [
      {
        path: 'start',
        component: BusStart
      },
      {
        path: 'history',
        component: BusHistory
      },
      {
        path: 'historydetail',
        component: BusHistoryDetail
      }
    ]
  },
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
        path: 'later',
        component: StationLater
      },
      {
        path: 'WaitingNub',
        component: StationWN
      },
      {
        path: 'later_situation',
        component: StationLaterS
      },
      {
        path: 'CSRflow',
        component: StationCSRflow
      },
    ]
  },
  {
    path: '/car',
    component: CarPane,
    meta: {
      title: '车方业务'
    },
    beforeEnter: (to, from, next) => {
      next(vm => {});
    },
    children: [
      {
        path: 'car',
        component: CarCar
      },
      {
        path: 'reservedSeat_ticket',
        component: CarreservedSeat_ticket
      },
      {
        path: 'reservedSeat_situation',
        component: CarreservedSeat_situation
      },
      {
        path: 'reservedSeat_code',
        component: CarreservedSeat_code
      },
      {
        path: 'TimeoutTicket',
        component: CarTimeoutTicket
      }
    ]
  },
  {
    path: '/ticket',
    component: TicketPane,
    meta: {
      title: '票务'
    },
    beforeEnter: (to, from, next) => {
      next(vm => {});
    },
    children: [
      {
        path: 'Ticket',
        component: TicketTicket
      },
      {
        path: 'conductor',
        component: TicketConductor
      },
      {
        path: 'Ticket_info',
        component: TicketTicket_info
      },
      {
        path: 'ReservedSeat_sell',
        component: TicketReserved
      },

    ]
  },
  {
    path: '/usermng',
    component: UsermngPane,
    meta: {
      title: '用户管理'
    },
    beforeEnter: (to, from, next) => {
      next(vm => {});
    },
    children: [
      {
        path: 'User',
        component: UsermngUsermng
      }
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

  {
    path: '/user',
    component: UserPane,
    // meta: {
    //   title: '我的'
    // },
    beforeEnter: (to, from, next) => {
      next(vm => {});
    },
    children: [{
        path: 'info',
        component: UserProfile,
        meta: {
          title: '用户信息'
        }
      },
      {
        path: 'psger',
        component: UserPsger,
        meta: {
          title: '乘客信息'
        }
      },
      {
        path: 'login',
        component: UserLogin,
        meta: {
          title: '登录'
        }
      },
      {
        path: 'regist',
        component: UserRegist,
        meta: {
          title: '注册'
        }
      }

    ]
  },
  {
    path: '/mkt',
    meta: {
      title: '更多'
    },
    component: MktPane,
    beforeEnter: (to, from, next) => {
      next(vm => {});
    }
  },
  //重定向
  {
    path: '*',
    redirect: '/user/login'
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
