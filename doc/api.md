
> wx app 公共模块

| 名称 | 关键字 |
| ---- | ----  |  
|获取广告 | QUERY_AD|
|获取城市站点 | QUERY_CITY_STATION|
|获取到达城市站点 | QUERY_ARR|
|搜索出发地 | SEARCH_DEP|
|搜索到达地 | SEARCH_ARR|
|查询班次 | QUERY_SCH|``
|获取乘车人列表 | GET_PASSENGER_LIST|
|删除乘车人 | DEL_PASSENGER|
|新增/修改乘车人信息 | SAVE_PASSENGER|
|获取乘车保障 | QUERY_INS|
|获取优惠券 | QUERY_COUPON|
|锁票 | TK_LOCK|
|继续支付 | AGAIN_PAY|
|取消锁票 | UN_LOCK|
|查询未支付的订单 | QUERY_LOCK|
|查询已完成订单 | QUERY_ORDER|
|查询所有订单 | QUERY_ALL_ORDER|
|删除订单 | DELETE_ORDER|
|订单详情 | QUERY_ORDER_DETAIL|
|获取用户信息 | GET_USER_INFO|
|修改个人信息 | UPDATE_USER_INFO|

> APP 模块

| 名称 | 关键字 |
| ---- | ----  |  
|向用户发送手机验证码 | SEND_SMS |
|APP 注册用户 | REGISTER |
|APP 账密登录 | LOGIN |
|app使用手机号码获取登录Token | LOGIN_AUTH |


打包时注意： 修改api.js, index.js 相对应模式 wx/app 
            还有cfg.js的请求路径
