import { constantRoutes } from "@/router/index";

export default {
  namespaced: true,
  state: {
    routes: constantRoutes,
  },

  getters: {},

  mutations: {
    setRoutes(state, newRoutes) {
      state.routes = [...constantRoutes, ...newRoutes];
    },
  },
};
