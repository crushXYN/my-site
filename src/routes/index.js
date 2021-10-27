import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./route";
Vue.use(VueRouter); //使用一个插件
const router = new VueRouter({
  routes, //路由匹配规则
  mode: "history",
});
export default router;
