import axios from "axios";
import qs from "qs";
let baseUrl = "";
// 请求超时的时间限制
axios.defaults.timeout = 20000;

// 添加请求拦截器 在发送请求前做的事情
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    console.log("拦截器触发");
    return config;
  },
  e => {
    // 对请求错误做些什么
    return Promise.reject(e);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  res => {
    console.log("响应器触发");
    return res;
  },
  e => {
    // 对响应错误做点什么
    return Promise.reject(e);
  }
);

function getHttp(method, url, params) {
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
  return Promise((resolve, reject) => {
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
    Vue.prototype.getHttp = (url, params) => getHttp("GET", url, params);
    Vue.prototype.postHttp = (url, params) => getHttp("POST", url, params);
    Vue.prototype.putHttp = (url, params) => getHttp("PUT", url, params);
    Vue.prototype.deleteHttp = (url, params) => getHttp("DELETE", url, params);
  }
};
