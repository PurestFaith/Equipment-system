import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import Layout from "@/layout";
export const constantRoutes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    meta: { title: "报表", icon: "报表" },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: { title: "设备状态分布看板", affix: true },
      },
      {
        path: "Maintainance",
        name: "Maintainance",
        component: () => import("@/views/Maintainance/index.vue"),
        meta: { title: "设备保养看板", affix: true },
      },
      {
        path: "Censor",
        name: "Censor",
        component: () => import("@/views/Censor/index.vue"),
        meta: { title: "设备点检看板", affix: true },
      },
      {
        path: "equipmentResume",
        name: "equipmentResume",
        component: () => import("@/views/equipmentResume/index.vue"),
        meta: { title: "设备履历", affix: true },
      },
      {
        path: "FaultStatistics",
        name: "FaultStatistics",
        component: () => import("@/views/FaultStatistics/index.vue"),
        meta: { title: "设备故障统计报表", affix: true },
      },
    ],
  },
  {
    path: "/equipment",
    component: Layout,
    redirect: "/equipmentSubscription",
    meta: { title: "系统管理", icon: "shopping" },
    children: [
      {
        path: "/Subscription",
        name: "Subscription",
        component: () => import("@/views/equipmentSubscription/index.vue"),
        meta: { title: "设备申购" },
      },
    ],
  },
  {
    path: "/deviceManagement",
    component: Layout,
    redirect: "/Ledger",
    meta: { title: "设备管理", icon: "人员_people" },
    children: [
      {
        path: "/Ledger",
        name: "Ledger",
        component: () => import("@/views/Ledger/index.vue"),
        meta: { title: "设备台账" },
      },
      {
        path: "/borrowAndReturn",
        name: "borrowAndReturn",
        component: () => import("@/views/borrowAndReturn/index.vue"),
        meta: { title: "设备借还" },
      },

      {
        path: "/scrap",
        name: "scrap",
        component: () => import("@/views/scrap/index.vue"),
        meta: { title: "设备废料" },
      },
      {
        path: "/inventory",
        name: "inventory",
        component: () => import("@/views/inventory/index.vue"),
        meta: { title: "设备盘点" },
      },
    ],
  },
  {
    path: "/equipmentMaintenance",
    component: Layout,
    redirect: "/maintenancePlan",
    meta: { title: "设备保养", icon: "时间_time" },
    children: [
      {
        path: "/maintenancePlan",
        name: "maintenancePlan",
        component: () => import("@/views/maintenancePlan/index.vue"),
        meta: { title: "保养计划" },
      },
      {
        path: "/maintenanceWorkOrder",
        name: "maintenanceWorkOrder",
        component: () => import("@/views/maintenanceWorkOrder/index.vue"),
        meta: { title: "保养工单" },
      },
    ],
  },
];

export const asyncRouter = [];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: [...constantRoutes, ...asyncRouter], // 暂时合并整个路由规则
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter(); //点击退出时，调用这个函数，将静态路由覆盖掉之前包含有的（静态+动态）
  router.matcher = newRouter.matcher; // reset router
}

export default router;
