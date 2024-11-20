import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            counter: 0,
            username: null
        }
    },
    getters: {
        counter (state) {
            return state.counter;
        },
        username (state) {
            return state.username;
        }
    },
    mutations: {
        increment (state) {
            console.log('Was Commited!!');
            state.counter++
        },
        setUsername (state, username) {
            state.username = username;
        }
    },
    actions: {
        nuxtServerInit({dispatch, commit}, payload) {
            console.log('nuxtServerInit -- Was Dispatched!!');
            commit('setUsername', payload);
        },
        addCounter ({ commit }, payload) {
            console.log('Was Dispatched');
            commit('increment', payload);
        }
    },
})

export default store;
