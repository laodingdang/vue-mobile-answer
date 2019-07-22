# 说明
```
一个内容非常简单的vue项目
项目原地址 https://github.com/bailicangdu/vue2-happyfri 使用了vue2.0+vuex
本项目以原项目为标志
使用vue-cli3.0搭建
使用mockjs在本地生成数据
使用axios进行http请求
```

# 项目运行
```
# 克隆到本地
git clone git@github.com:laodingdang/vue-mobile-answer.git

# 进入文件夹
cd vue-mobile-answer

# 安装依赖
npm install 或 yarn(推荐)

# 启动项目
npm run serve

# 打包项目
npm run build
```
# 路由配置
```
import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: App,
      children: [
        {
          path: "/",
          component: () =>
            import(/* webpackChunkName: "home" */ "./views/home/index.vue")
        },
        {
          path: "/item",
          component: () =>
            import(/* webpackChunkName: "Item" */ "./views/item/index.vue")
        },
        {
          path: "/score",
          component: () =>
            import(/* webpackChunkName: "Score" */ "./views/score/index.vue")
        }
      ]
    }
  ]
});
```
## axiosjs
```
import axios from "axios";
import qs from "qs";
let baseUrl = "";
// 请求超时的时间限制
axios.defaults.timeout = 20000;

// 添加请求拦截器 在发送请求前做的事情
axios.interceptors.request.use(
  res => {
    // 在发送请求之前做些什么
    return res;
  },
  e => {
    // 对请求错误做些什么
    return Promise.reject(e);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  res => {
    return res;
  },
  e => {
    // 对响应错误做点什么
    return Promise.reject(e);
  }
);

function getAxios(method, url, params) {
  let httpDefault = {
    method: method,
    baseUrl: baseUrl,
    url: url,
    // params 是即将与请求一起发送的url参数
    // data 是作为请求主体被发送的数据
    params: method === "GET" || method === "DELETE" ? params : null,
    data: method === "POST" || method === "PUT" ? qs.stringify(params) : null,
    timout: 1000
  };
  return new Promise((resolve, reject) => {
    axios(httpDefault)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// 输出函数get post put delect，供其他文件调用
// Vue.js的插件应当又一个公开方法install，这个方法的第一个参数是Vue构造器，第二个参数是一个可选的vue对象
export default {
  install: Vue => {
    Vue.prototype.getHttp = (url, params) => getAxios("GET", url, params);
    Vue.prototype.postHttp = (url, params) => getAxios("POST", url, params);
    Vue.prototype.putHttp = (url, params) => getAxios("PUT", url, params);
    Vue.prototype.deleteHttp = (url, params) => getAxios("DELETE", url, params);
  }
};
```
## mockjs
```
import M from "mockjs";

M.mock("/mock/getTopic", () => {
  let list = [];
  for (let i = 0; i < 5; i++) {
    list.push({
      topic_id: i,
      active_topic_id: 4,
      topic_name: `题目${i + 1}`,
      active_id: 1,
      active_title: `问题${i + 1}，${i}+${i}等于几`,
      active_topic_phase: "第一周",
      active_start_tiem: "1479139200",
      acrive_end_time: "1479139200",
      topic_answer: [
        {
          topic_answer_id: 1,
          topic_id: i,
          answer_name: `选项1`,
          is_standard_answer: 0
        },
        {
          topic_answer_id: 2,
          topic_id: i,
          answer_name: `选项2`,
          is_standard_answer: 1
        },
        {
          topic_answer_id: 3,
          topic_id: i,
          answer_name: `选项3`,
          is_standard_answer: 0
        },
        {
          topic_answer_id: 4,
          topic_id: i,
          answer_name: `选项4`,
          is_standard_answer: 0
        }
      ]
    });
  }
  return list;
});
```
## vuex 配置
```
# state页面

import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./action";

Vue.use(Vuex);

const state = {
  level: "第一周", // 活动周数
  itemNum: 1, // 第几题
  allTime: 0, // 总用时
  timer: "", // 定时器
  answerid: [] // 答案id
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions
});

# actions页面

export default {
  addNum({ commit, state }, obj) {
    // 点击下一题 记录答案ID 判断是否为最后一题 如果不是则跳转下一题
    commit("REMBER_ANSWER", obj.id);
    if (state.itemNum < obj.len) {
      commit("ADD_ITEMNUM", 1);
    }
  },
  // 初始化信息
  initializeData({ commit }) {
    commit("INITIALIZE_DATA");
  }
};

# mutations页面

const ADD_ITEMNUM = "ADD_ITEMNUM";
const REMBER_ANSWER = "REMBER_ANSWER";
const REMBER_TIME = "REMBER_TIME";
const INITIALIZE_DATA = "INITIALIZE_DATA";
export default {
  // 点击进入下一题
  [ADD_ITEMNUM](state, num) {
    state.itemNum += num;
  },
  // 记录答案
  [REMBER_ANSWER](state, id) {
    state.answerid.push(id);
  },
  // 记录做题时间
  [REMBER_TIME](state) {
    state.timer = setInterval(() => {
      state.allTime++;
    }, 1000);
  },
  // 初始化信息
  [INITIALIZE_DATA](state) {
    state.itemNum = 1;
    state.allTime = 0;
    state.answerid = [];
  }
};
```
## main.js
```
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import http from "./config/http";
import "./style/common.css";
import "./config/rem.js";
import "./mock.js";

Vue.use(http);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
```