import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "your app key",
  authDomain: "your auth domain",
  databaseURL: "your db",
  projectId: "your project Id",
  storageBucket: "your stroage bucket",
  messagingSenderId: "your id",
  appId: "your app id",
  measurementId: "your measure id"
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
