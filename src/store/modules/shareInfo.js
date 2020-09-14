export default {
    state: {
        whoShare: "", // 邀请的用户
    },
    getters: {
        getWhoShare (state) {
            return state.whoShare
        },
    },
    mutations: {
        setWhoShare (state, data) {
            state.whoShare = data;
        },
    },
    actions: {
        setWhoShare ({ commit }, data) {
            commit('setWhoShare', data);
        },
    }
}