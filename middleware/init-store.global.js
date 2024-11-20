import store from '~/store'

export default defineNuxtRouteMiddleware(async (to, from, next) => {

    //console.log('Middleware was called! ', process.server);

    console.log('Before IF : ', store.state.username);

    if (!store.state.username) {
        console.log('During IF -- Before await: ', store.getters.username);
        await store.dispatch('nuxtServerInit', 'Nourelhadi');
        console.log('During IF -- After await: ', store.getters.username);
    }

    console.log('After IF: ', store.state.username);
})
