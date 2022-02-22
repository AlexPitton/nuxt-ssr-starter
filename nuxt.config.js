export default {

    loading: '~/components/utils/LoadingScreen.vue',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-ssr-starter',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        {
            src: '~/assets/styles/styles.scss', lang: 'scss'
        }
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        [
            '@nuxtjs/i18n',
            {
                locales: [
                    {
                        code: 'en',
                        name: 'English',
                        file: 'en.json'
                    },
                    {
                        code: 'fr',
                        name: 'Français',
                        file: 'fr.json'
                    }
                ],
                langDir: '~/locales/'
            }
        ],
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/style-resources',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    styleResources: {
        scss: [
            './assets/styles/settings/settings.scss'
        ]
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
