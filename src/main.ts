import { createApp } from "vue";
// 引入默认样式
import "@/style/reset.scss";

import App from "@/App.vue";

import HosptialTop from "@/components/hosptial_top/index.vue";
import HosptialBottom from "@/components/hosptial_bottom/index.vue";
// 引入vue-router核心插件并安装
import router from "@/router";
// 引入element-plus插件
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";

const app = createApp(App);
// 注册组件
app.component("HosptialTop", HosptialTop);
app.component("HosptialBottom", HosptialBottom);
// 安装element插件
// app.use(ElementPlus)
app.use(ElementPlus, {
  locale: zhCn,
});
// 安装vue-router
app.use(router);
// 挂在组件
app.mount("#app");
