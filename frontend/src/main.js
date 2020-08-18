import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import store from './config/store'
import './config/bootstrap'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlRhcmNpc2lvIExvcGVzIEFsYmVybmF6IEdvbWVzIiwiZW1haWwiOiJ0YXJjaXNpb2xvcGVzZ29tZXNAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTU5NzcxMDg5OCwiZXhwIjoxNTk3OTcwMDk4fQ.5B5dAnX9-Ulub2I9r2zyF9Cm93_7hUeWmhEaUXrW3Oo'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')