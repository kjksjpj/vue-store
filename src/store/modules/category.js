export default {
  state: {
    category: []
  },
  getters: {
    getCategory(state) {
      return state.category;
    }
  },
  mutations: {
    incrementCategories (state, category) {
      state.category = category;
    }
  },
  actions: {
    saveAllCategories ({ commit }, data) {
      commit('incrementCategories', data)
    },
  }

}
