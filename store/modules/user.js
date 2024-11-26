export default {
    namespaced: true,
    state() {
        return {
            users: [],
        }
    },
    mutations: {
        setUser(state, users) {
            state.users = users
        }
    },
    getters: {
        users: state => state.users,
        listing: state => state.users,
    },
    actions: {
        nuxtServerInit({ commit }, payload) {
            commit('setUser', payload);
        }
    }
}
