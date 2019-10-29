import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAEGfURPaNMI4SUarfLi7TwPPIEAc2MSdo",
  authDomain: "vue-calendar-9f3bf.firebaseapp.com",
  databaseURL: "https://vue-calendar-9f3bf.firebaseio.com",
  projectId: "vue-calendar-9f3bf",
  storageBucket: "vue-calendar-9f3bf.appspot.com",
  messagingSenderId: "791134144460",
  appId: "1:791134144460:web:c4a1415c086749ea513f69",
  measurementId: "G-Y7MRBH0TJW"
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
