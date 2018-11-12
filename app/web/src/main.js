import Vue from 'vue'
import App from './App'
import router from './router'
import 'at-ui-style'
import AtUI from 'at-ui'
import VueAppInsights from 'vue-application-insights'

Vue.config.productionTip = false
Vue.use(AtUI)

Vue.use(VueAppInsights, {
  id: process.env.APPINSIGHTS_INSTRUMENTATION_KEY,
  router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
