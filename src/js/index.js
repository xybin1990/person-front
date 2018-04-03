/**
 * Created by Administrator on 2017/2/15.
 */

import Vue from 'vue';
import store from '../vuex'
import router from '../router'
import axios from 'axios'


import '../assets/common.css' //通用格式化css
import '../util/flexible' //移动端适配设置


//根据process.env.NODE_ENV判断执行环境
//'development'     本地测试环境      对应 npm run dev
//'dev'             测试服务器环境     对应 npm run test
//'production'      生产服务器环境     对应 npm run build

//'development','dev','production'  js代码中使用
//'dev','test','build'  打包环境中判断
// console.log(process.env.NODE_ENV)

//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
Vue.config.silent = true  //取消 Vue 所有的日志与警告。

//设置接口请求地址 本地开发关闭 测试环境或生产环境打开
if (process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "production") {
    axios.defaults.baseURL = config.build_url;
}

//添加请求拦截器
axios.interceptors.request.use(function(config) {
    //请求拦截处理
    return config;
}, function(error) {
    //请求错误时执行
    return Promise.reject(error);
});
//添加响应拦截器
axios.interceptors.response.use(function(response) {
    //响应拦截处理
    return response;
}, function(error) {
    //请求错误时执行
    if (error.message === "Network Error") {
        //判断如果是没有网络的状态下，给出提示信息
        alert("网络不可用");
    }
    return Promise.reject(error);
});

Vue.prototype.$axios = axios; //将axios引入到项目


let vm = new Vue({
    el: '#app',
    store,
    router
});