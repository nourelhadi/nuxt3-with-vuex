import { createStore } from 'vuex'
import user from './modules/user'
import link from './modules/link'

// Create a new store instance.
const store = createStore({
    modules: {
        user,
        link,
    },
    state () {
        return {
            counter: 0,
            username: 'No One'
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
        nuxtServerInit({dispatch, commit}, context) {
            console.log('nuxtServerInit -- Was Dispatched!!');
            dispatch('user/nuxtServerInit', context);
        },
        addCounter ({ commit }, payload) {
            console.log('Was Dispatched');
            commit('increment', payload);
        }
    },
})

export default store;
