import store from '~/store'

export default defineNuxtRouteMiddleware(async (to, from, next) => {
    const nuxtApp = useNuxtApp();

    if (store.getters['user/users'].length === 0) {
        await store.dispatch('nuxtServerInit', { $axios: nuxtApp.$axios });
    }
})
