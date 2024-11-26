import store from '~/store'

export default defineNuxtRouteMiddleware(async (to, from, next) => {

    //console.log('Middleware was called! ', process.server, store.getters['user/users']);

    console.log('Before IF : ', store.getters['user/users']);

    if (store.getters['user/users'].length === 0) {
        console.log('During IF -- Before await: ', store.getters['user/users']);
        await store.dispatch('nuxtServerInit', [
            {name: 'No One', age: 23},
            {name: 'The King', age: 55},
        ]);

        console.log('During IF -- After await: ', store.getters['user/users']);
    }

    console.log('After IF: ', store.getters['user/users']);
})
