import store from '~/store'

export default defineNuxtRouteMiddleware(async (to, from, next) => {

    const nuxtApp = useNuxtApp();

    console.log('Before IF : ', store.getters['user/users']);

    if (store.getters['user/users'].length === 0) {

        console.log('During IF -- Before await: ', store.getters['user/users']);
        await store.dispatch('nuxtServerInit', { $axios: nuxtApp.$axios });

        console.log('During IF -- After await: ', store.getters['user/users']);
    }

    console.log('After IF: ', store.getters['user/users']);

})
