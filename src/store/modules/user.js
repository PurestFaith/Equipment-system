import { login, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

import store from '@/store/index'
export default {
  namespaced: true,
  state: {
    user: JSON.parse(getToken()) || {
      token: null,
      username: null,
    },
    userinfo: {}
  },

  getters: {},

  mutations: {
    // 存放token
    setToken_username(state, payload) {
      state.user.token = payload.token
      state.user.username = payload.username
      // state.user.pri_list = payload.pri_list
      setToken(JSON.stringify(payload))
    },

    // 存放用户权限
    setUser_info(state, payload) {
      state.userinfo = payload
      localStorage.setItem('userinfo', JSON.stringify(payload))
    },
    //清除用户信息及token
    removeToken(state, payload) {
      state.user = {}
      state.userinfo = {}
      removeToken()
      localStorage.removeItem('userinfo')
    }
  },

  actions: {
    async login(context, payload) {
      const res = await login(payload)
      context.commit('setToken_username', res.data)
    },

    /* 获取用户信息（含权限） */
    async getInfo(context, payload) {
      const { data } = await getInfo({ username: store.state.user.user.username })
      console.log(data);
      if (data.privilege !== '*') {
        data.privilege.forEach((item, index) => {
          let splitArr = item.split('/');
          data.privilege[index] = splitArr[0];
        });
      }

      context.commit('setUser_info', data)
      return data //返回该用户权限数组
    },

    logout(context, payload) {
      context.commit('removeToken')
      resetRouter()
      /*
     在退出的时候，将mutations中的动态路由清除，但是现在如果直接操作的话属于：一个模块操作另一个模块中的mutation
     所以使用到api{root:true},相当于把下面的这个mutation交给根index.js来执行，不再是从一个模块操作另一个模块
     */
      context.commit('permission/setRoutes', [], { root: true })
    }
  }

}
