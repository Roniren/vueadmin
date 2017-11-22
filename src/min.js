//导入文件 vue.js 
import Vue from 'vue';
//2.0导入app.vue组件对象
import App from './App.vue';
//vue一个组件库 element-ui
import elementUI from "element-ui";
//导入默认样式

import "../start/theme_rms/index.css";
import "../start/css/css.css";
//绑定到vue中
Vue.use(elementUI);

import VueRouter from "vue-router";

//使用use()
Vue.use(VueRouter);
//发送请求导入
import axios from 'axios';
Vue.prototype.$ajax = axios;
//由于请求ajax 域名
axios.defaults.baseURL="http://192.168.84.200";

//导入对象组件
import login from './component/accunt/login.vue';
import layout from "./component/layout.vue"; //导入是组件
import goodslist from './component/goods/goodslist.vue';
//创建路由对象
var router = new VueRouter({
    routes: [{ name: "default", path: "/", redirect: "/admin" },
        { name: "login", path: "/login", component: login },
        {
            name: "layout",
            path: "/admin",
            component: layout,
            children: [{ name: "goodslist", path: "goodslist", component: goodslist }]
        }
    ]
});
//3.0实例化 vue对象
new Vue({
    el: "#app",
    router,
    //render:function(created){created(App)} create
    render: create => create(App)
});
//导入文件 
// const getNum = require("./clae.js");
// //导入样式
// require("./start/css/css.css");
// require("./start/css/css.less");
// require("./start/css/css.scss");

// window.onload = function() {
//     //获取元素
//     var v1obj = document.getElementById("v1");
//     var v2obj = document.getElementById("v2");
//     var btnobj = document.getElementById("btn");
//     var resobj = document.getElementById("res");
//     //注册事件
//     btnobj.onclick = function() {
//         //获取文本框信息
//         var v1 = v1obj.value - 0;
//         var v2 = v2obj.value - 0;
//         //进行计算方法
//         resobj.value = getNum(v1, v2);
//     }
// }