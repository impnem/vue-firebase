import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import * as firebaseDB from 'firebase/database'
import firebaseConfig from '../../firebaseConfig'

firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseDB = firebaseDB
