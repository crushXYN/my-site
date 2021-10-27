import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./routes";
import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;
// 注册全局指令
import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
export default [];
// 测试
import * as blogApi from "./api/blog";
blogApi.getComments("fhjadsf").then((r) => {
  console.log(r);
});
