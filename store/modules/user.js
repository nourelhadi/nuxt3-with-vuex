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
        nuxtServerInit({ commit }, {$axios}) {
            $axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                console.log(res.data)
                commit('setUser', res.data);
            })
        }
    }
}
