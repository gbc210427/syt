import { createRouter, createWebHistory } from "vue-router";
// createRouter方法用于创建路由器实例

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
    },
    {
      path: "/hospital",
      component: () => import("@/pages/hospital/index.vue"),
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
  //滚动行为：控制滚动条位置
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});
