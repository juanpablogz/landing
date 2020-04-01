import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

import { rtdbPlugin } from 'vuefire'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTrash, faPlus, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle, faArrowUp, faAngleRight, faAngleLeft, faAngleDown, faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCheck, faTrash, faPlus, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle, faArrowUp, faAngleRight, faAngleLeft, faAngleDown, faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload);
Vue.component('vue-fontawesome', FontAwesomeIcon);


Vue.use(VueRouter)

Vue.use(rtdbPlugin)



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router
