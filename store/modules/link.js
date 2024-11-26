export default {
    namespaced: true,
    state() {
        return {
            links: [
                {
                    id: 'homepage',
                    href: '/',
                    label: 'Homepage',
                },
                {
                    id: 'users',
                    href: '/users',
                    label: 'Users',
                },
                {
                    id: 'users-with-map-getters',
                    href: '/users-with-map-getters',
                    label: 'Users With Map Getters',
                },
                {
                    id: 'not-found',
                    href: '/not-found',
                    label: 'Not Found',
                }
            ],
        }
    },
    getters: {
        getLinks: state => state.links,
    }
}
