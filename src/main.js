// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from 'firebase'
import Vue from 'vue'
import App from './App'
import router from './router'

var config = {
  apiKey: 'AIzaSyCFY0XpwjxuDe1FahpfgQbGAP5ZpZf__ec',
  authDomain: 'reception-54074.firebaseapp.com',
  databaseURL: 'https://reception-54074.firebaseio.com',
  projectId: 'reception-54074',
  storageBucket: 'reception-54074.appspot.com',
  messagingSenderId: '461189438755'
}
firebase.initializeApp(config)

Vue.config.productionTip = false

window.Vue = Vue

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
