import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import '@/main.scss'

Vue.config.productionTip = false




const app = new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

app.$vuetify.theme.dark = true;
// if (window.matchMedia) {
//   app.$vuetify.theme.dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// }

