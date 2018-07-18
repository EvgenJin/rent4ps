// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueSocketio from 'vue-socket.io'
import Vuetify from 'vuetify'

import router from './router'

Vue.use(VueSocketio, '10.0.1.3:8000')
Vue.config.productionTip = false

var EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
    $eventBus: {
        get: function () {
            return EventBus;
        }
    }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  sockets: {
    disconnect: function () {
      console.log('socket to notification channel disconnected')
    },
    connect: function () {
      console.log('socket to notification channel connected')
    },
  },
})
