// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from 'firebase'
import Vue from 'vue'
import App from './App'
import router from './router'


var config = {
  apiKey: "AIzaSyCFY0XpwjxuDe1FahpfgQbGAP5ZpZf__ec",
  authDomain: "reception-54074.firebaseapp.com",
  databaseURL: "https://reception-54074.firebaseio.com",
  projectId: "reception-54074",
  storageBucket: "reception-54074.appspot.com",
  messagingSenderId: "461189438755"
};
firebase.initializeApp(config);

Vue.config.productionTip = false

window.Vue = Vue;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

'use strict';

import axios from 'axios';

let vm = new Vue( {
  el: '#qiita-posts',
  data: {
    posts: void(0),
  },
  methods: {
    request: () => {
      axios.get( 'https://script.google.com/macros/s/AKfycbzFI0H7LhJCl0wWBk7q8qG5APAS1WvjUdOQCfRkjpeNG9Nilg/exec' )
        .then( ( res ) => {
          vm.posts = res.data;
        } )
        .catch( ( res ) => {
          console.error( res );
        } );
    }
  },
} );

