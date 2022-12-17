import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import Vue2TouchEvents from 'vue2-touch-events'
import '@/main.scss'

Vue.config.productionTip = false



//Vue.use(Vue2TouchEvents)

const app = new Vue({
  vuetify, Vue2TouchEvents,
  render: h => h(App)
}).$mount('#app')

app.$vuetify.theme.dark = true;
// if (window.matchMedia) {
//   app.$vuetify.theme.dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// }

