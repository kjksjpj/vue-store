/*
 * @Description: 用户登录状态模块
 * @Author: hai-27
 * @Date: 2020-02-19 17:42:11
 * @LastEditors: hai-27
 * @LastEditTime: 2020-02-26 23:14:32
 */
export default {
  state: {
    user: "", // 登录的用户
    showLogin: false, // 用于控制是否显示登录组件
    //分销信息
    distInfo: {
      member: '',
      amount: ''
    },
    isJoinDist: false
  },
  getters: {
    getUser (state) {
      return state.user
    },
    getShowLogin (state) {
      return state.showLogin
    },
    getDistInfo (state) {
      return state.distInfo
    },
    getIsJoinDist (state) {
      return state.isJoinDist
    }
  },
  mutations: {
    setUser (state, data) {
      state.user = data;
    },
    setShowLogin (state, data) {
      state.showLogin = data;
    },
    setDistInfo(state, data) {
      state.distInfo = data;
    },
    setIsJoinDist(state, data) {
      state.isJoinDist = data;
    }
  },
  actions: {
    setUser ({ commit }, data) {
      commit('setUser', data);
    },
    setShowLogin ({ commit }, data) {
      commit('setShowLogin', data);
    },
    setDistInfo ({ commit }, data) {
      commit('setDistInfo', data);
    },
    setIsJoinDist ({ commit }, data) {
      commit('setIsJoinDist', data);
    }
  }
}