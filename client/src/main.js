import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import { getViewPortDimensions, getBrowser, getOrientation, getDeviceType } from '@/helpers/browser'
const dimensions = getViewPortDimensions()
const browser = getBrowser()
const orientation = getOrientation()
const deviceType = getDeviceType()

console.log({
  ...dimensions,
  browser,
  orientation,
  deviceType
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
