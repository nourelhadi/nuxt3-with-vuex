import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            counter: 0
        }
    },
    getters: {
        counter (state) {
            return state.counter;
        }
    },
    mutations: {
        increment (state) {
            console.log('Was Commited!!');
            state.counter++
        }
    },
    actions: {
        addCounter ({ commit }, payload) {
            console.log('Was Dispatched');
            commit('increment', payload);
        }
    }
})

export default store;
