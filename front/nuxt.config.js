const fs = require('fs')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase'
  ],

  firebase:{
    config: {
      apiKey: "AIzaSyB4sjGvvzOKZFCKj1PCFm7jokM-9F1TIdE",
      authDomain: "dynamo-a5c2f.firebaseapp.com",
      projectId: "dynamo-a5c2f",
      storageBucket: "dynamo-a5c2f.appspot.com",
      messagingSenderId: "6652196473",
      appId: "1:6652196473:web:8369f6622467dba174c6a8",
      measurementId: "G-LWCG9V00HT"
    },
    services: {
      messaging:  {
        createServiceWorker: true,
        fcmPublicVapidKey: 'BO2FiMkjkBd6GTC3Nu3RlcMekwM6qm0dqPaZ-pSd8OY-C6cINoRkKvMAAk_7prvgtIF3J_2k2E4QWgDXHvVPcxc', //see step 7
        inject: fs.readFileSync('./serviceWorker.js') //see step 8
      },
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:8000',
  },

  publicRuntimeConfig: {
    axios: {
      //browserBaseURL: "http://fanshop.sytes.net/api"
      browserBaseURL: "http://localhost:8000"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
