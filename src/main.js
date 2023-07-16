import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import "@/styles/index.scss"; // global css
import "./styles/font_s06b6ohcjse/iconfont.css"; // 阿里巴巴iconfont

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n

import components from "./components"; // 集中全局注册组件
Vue.use(components);

import Print from "vue-print-nb"; // 打印
Vue.use(Print);
Vue.use(ElementUI, {
  size: "medium", // DEFAULT_MEDIUM, LARGE
});

import * as directives from "@/directives/index";
Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key]);
});

import * as filters from "@/filters/index";
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

// import ElVirtualSelect from 'el-virtual-select';
// import "el-virtual-select/dist/style.css";
// Vue.use(ElVirtualSelect)

import App from "./App";
import store from "./store";
import router from "./router";

import "@/icons"; // icon
import "@/permission"; // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI);

Vue.config.productionTip = false;

// 适配不同尺寸屏幕（动态计算根元素的大小fonSize）
// function resizeCount() {
//   const baseConstn = 1920 // 1920的设计稿 / 基数10
//   const nowWidth = document.documentElement.clientWidth
//   const nowCount = nowWidth / baseConstn
//   document.querySelector('html').style.fontSize = nowCount + 'px'
// }
// // 初始化
// resizeCount()

// window.addEventListener('resize', () => {
//   resizeCount()
// })

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
