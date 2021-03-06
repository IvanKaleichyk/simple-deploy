import Vue from 'vue'
import App from './app/App.vue'
import router from './app/router'
import store from './app/store'
import vuetify from './app/plugins/vuetify'
import '@/app/sass/theme.scss'
import '@/app/sass/color.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
